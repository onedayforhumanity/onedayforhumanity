import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { Marked, type Token, type Tokens } from 'marked'

const REPO_BLOB = 'https://github.com/onedayforhumanity/onedayforhumanity/blob/main/'

/** Escapes text for an HTML attribute value or text node; marked does not export its own. */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/**
 * The href when its scheme is one the site links to, otherwise null. The
 * documents are edited by pull request, so a javascript: or data: destination
 * that slips past review must not reach the build. Relative paths and
 * fragments resolve against the site and pass. The WHATWG parser is used
 * because it drops the tabs and newlines a browser would also drop before it
 * reads the scheme.
 */
function safeHref(href: string): string | null {
  try {
    const { protocol } = new URL(href, 'https://onedayforhumanity.org/')
    return protocol === 'https:' || protocol === 'http:' || protocol === 'mailto:' ? href : null
  } catch {
    return null
  }
}

/** GitHub-style heading ids, so every section of a document has a permalink. */
function slug(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

/** One h2 section of a document, for components that lay sections out themselves. */
interface MarkdownSection {
  id: string
  title: string
  html: string
  /** Inner HTML of the section's first paragraph, without the <p> wrapper. */
  lead: string
}

/** One row of a table in SIGNATORIES.md. */
interface Signatory {
  name: string
  url?: string
  tier: string
  since: string
  version: string
  report?: { label: string; href: string }
}

interface Signatories {
  organizations: Signatory[]
  individuals: Signatory[]
  lapsed: Signatory[]
}

/**
 * A markdown link `[label](href)` on its own, or nothing. The href is null
 * when safeHref() rejects it, so the label still shows and nothing is linked.
 */
function mdLink(text: string): { label: string; href: string | null } | null {
  const m = /^\[([^\]]*)\]\(([^)\s]+)\)$/.exec(text.trim())
  return m ? { label: m[1] ?? '', href: safeHref(m[2] ?? '') } : null
}

/** Cell text with surrounding emphasis markers removed. */
function plain(text: string): string {
  return text.trim().replace(/^[*_]+|[*_]+$/g, '')
}

/**
 * Lets a component import a markdown file from the repository root, converted
 * at build time so the parser never ships to the browser and the page cannot
 * drift from the document it renders:
 *
 *   import html from '../../../MANIFESTO.md?html'
 *   import sections from '../../../PRINCIPLES.md?sections'
 *   import signatories from '../../../SIGNATORIES.md?signatories'
 *
 * `?html` is the whole document. Relative links to other markdown files point
 * at the repository on GitHub, and everything before the first h2 is wrapped
 * in a <header> so the title block can be styled apart from the body.
 * `?sections` splits the document at each h2 and returns the pieces, for the
 * landing page's card grids. `?signatories` reads the three tables in
 * SIGNATORIES.md, drops the placeholder rows, and returns the entries.
 */
function markdownHtml(): Plugin {
  const marked = new Marked({
    gfm: true,
    renderer: {
      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens)
        return `<h${String(depth)} id="${slug(text)}">${text}</h${String(depth)}>\n`
      },
      link({ href, title, tokens }) {
        const text = this.parser.parseInline(tokens)
        const safe = safeHref(href)
        // An unsafe destination leaves the label as plain text, so the page
        // still reads and nothing dangerous ships.
        if (safe === null) return text
        const target = /^[\w./-]+\.md(#[\w-]*)?$/.test(safe) ? REPO_BLOB + safe : safe
        const titleAttr = title ? ` title="${escapeHtml(title)}"` : ''
        return `<a href="${escapeHtml(target)}"${titleAttr}>${text}</a>`
      },
      // Raw HTML in a document comes out as the text that was typed, block and
      // inline alike, since both token kinds arrive here. The documents contain
      // none today, and a tag that review missed should show on the page
      // rather than run in it.
      html({ text }) {
        return escapeHtml(text)
      },
    },
  })

  function toHtml(source: string): string {
    const html = marked.parse(source, { async: false })
    const firstSection = html.indexOf('<h2')
    return firstSection > 0
      ? `<header>${html.slice(0, firstSection)}</header>${html.slice(firstSection)}`
      : html
  }

  function toSections(source: string): MarkdownSection[] {
    const sections: MarkdownSection[] = []
    let current: { title: string; tokens: Token[] } | null = null
    const finish = () => {
      if (!current) return
      const firstParagraph = current.tokens.find((t) => t.type === 'paragraph')
      const lead = firstParagraph
        ? marked.parser([firstParagraph]).replace(/^<p>|<\/p>\s*$/g, '')
        : ''
      sections.push({
        id: slug(current.title),
        title: current.title,
        html: marked.parser(current.tokens),
        lead,
      })
    }
    for (const token of marked.lexer(source)) {
      if (token.type === 'heading' && token.depth === 2) {
        finish()
        current = { title: token.text, tokens: [] }
      } else if (current) {
        current.tokens.push(token)
      }
    }
    finish()
    return sections
  }

  function toSignatories(source: string): Signatories {
    const out: Signatories = { organizations: [], individuals: [], lapsed: [] }
    let group: keyof Signatories | null = null
    for (const token of marked.lexer(source)) {
      if (token.type === 'heading' && token.depth === 2) {
        const title = token.text.trim().toLowerCase()
        group =
          title === 'organizations' || title === 'individuals' || title === 'lapsed' ? title : null
      } else if (token.type === 'table' && group) {
        // Narrowing on `type` leaves marked's Generic token in the union, whose
        // index signature would make header and rows `any`; name the shape.
        const table = token as Tokens.Table
        const headers = table.header.map((cell) => cell.text.trim().toLowerCase())
        const column = (...names: string[]) => headers.findIndex((h) => names.includes(h))
        const nameCol = column('organization', 'name')
        const tierCol = column('tier')
        const sinceCol = column('since')
        const versionCol = column('manifesto')
        const reportCol = column('latest report', 'last report')
        for (const row of table.rows) {
          const cell = (i: number) => (i >= 0 ? (row[i]?.text ?? '') : '')
          const rawName = cell(nameCol)
          // The template rows read "(your name)" and "(your organization)".
          if (!rawName.trim() || /\(your /i.test(rawName)) continue
          const nameLink = mdLink(rawName)
          const entry: Signatory = {
            name: nameLink ? nameLink.label : plain(rawName),
            tier: plain(cell(tierCol)),
            since: plain(cell(sinceCol)),
            version: plain(cell(versionCol)),
          }
          if (nameLink?.href) entry.url = nameLink.href
          const report = mdLink(cell(reportCol))
          if (report?.href) entry.report = { label: report.label || 'Latest report', href: report.href }
          out[group].push(entry)
        }
      }
    }
    return out
  }

  const modes = {
    '?html': toHtml,
    '?sections': toSections,
    '?signatories': toSignatories,
  } as const

  return {
    name: 'odh:markdown-html',
    enforce: 'pre',
    load(id) {
      const suffix = (Object.keys(modes) as (keyof typeof modes)[]).find((s) =>
        id.endsWith(`.md${s}`),
      )
      if (!suffix) return null
      const file = id.slice(0, -suffix.length)
      this.addWatchFile(file)
      const source = readFileSync(file, 'utf8')
      return `export default ${JSON.stringify(modes[suffix](source))}`
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [markdownHtml(), react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      // Three documents, no client-side router.
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        manifesto: resolve(import.meta.dirname, 'manifesto/index.html'),
        principles: resolve(import.meta.dirname, 'principles/index.html'),
      },
    },
  },
})
