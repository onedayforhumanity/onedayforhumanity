/// <reference types="vite/client" />

/** A markdown file converted to HTML at build time by markdownHtml() in vite.config.ts. */
declare module '*.md?html' {
  const html: string
  export default html
}

/** A markdown file split at each h2 at build time by markdownHtml() in vite.config.ts. */
declare module '*.md?sections' {
  export interface MarkdownSection {
    readonly id: string
    readonly title: string
    readonly html: string
    /** Inner HTML of the section's first paragraph, without the <p> wrapper. */
    readonly lead: string
  }
  const sections: readonly MarkdownSection[]
  export default sections
}

/** The tables in SIGNATORIES.md, read at build time by markdownHtml() in vite.config.ts. */
declare module '*.md?signatories' {
  export interface Signatory {
    readonly name: string
    readonly url?: string
    readonly tier: string
    readonly since: string
    /** The manifesto version they signed. */
    readonly version: string
    readonly report?: { readonly label: string; readonly href: string }
  }
  export interface Signatories {
    readonly organizations: readonly Signatory[]
    readonly individuals: readonly Signatory[]
    readonly lapsed: readonly Signatory[]
  }
  const signatories: Signatories
  export default signatories
}
