import type { ReactNode } from 'react'
import { Section } from '../components/Section'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
// The end panel reuses the Join section's dark panel so the documents and the
// landing page read as the same object.
import join from '../components/Join.module.css'
import { cx } from '../lib/cx'
import { useHashTarget } from '../lib/useHashTarget'
import page from './page.module.css'
import s from './Document.module.css'

interface DocumentPageProps {
  /** The document, converted from markdown at build time. */
  html: string
  /** Which nav entry to mark as current. */
  current: 'manifesto' | 'principles'
  /** Number the h2 sections, for the principles. */
  numbered?: boolean
  /** Rendered between the document and the end panel. */
  before?: ReactNode
  /** Anchor id of the end panel. */
  panelId: string
  /** Contents of the dark end panel. */
  panel: ReactNode
}

/**
 * A long-form document from the repository root, in the landing page's type
 * and tokens, with a dark panel at the end for what the reader does next.
 */
export function DocumentPage({
  html,
  current,
  numbered = false,
  before,
  panelId,
  panel,
}: DocumentPageProps) {
  useHashTarget()

  return (
    <div className={page.page}>
      <a className="odh-skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader page={current} />
      <main id="main">
        <article
          className={cx(s.article, numbered && s.numbered)}
          // Edited by pull request, converted by our own build, which escapes
          // raw HTML and drops unsafe hrefs. See markdownHtml() in vite.config.ts.
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {before}
        <Section id={panelId} stack={false}>
          <div className={cx(join.panel, s.panel, 'odh-chrome')}>{panel}</div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  )
}
