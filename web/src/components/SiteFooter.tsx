import { links, site } from '../content/site'
import { cx } from '../lib/cx'
import s from './SiteFooter.module.css'

export function SiteFooter() {
  return (
    // odh-chrome: hidden when the page is printed.
    <footer className={cx(s.footer, 'odh-chrome')}>
      <div className={s.about}>
        <span className={s.name}>{site.name}</span>
        <span>A movement, not a company. Status: pre-launch.</span>
        <span>
          Code: Apache-2.0 unless a mission states otherwise. Documents, including this site: CC BY
          4.0.
        </span>
        <span>
          No cookies. Visits are counted without identifiers, and not at all if your browser asks
          not to be tracked.
        </span>
      </div>
      <nav className={s.links} aria-label="Footer">
        <a href={links.repo}>GitHub</a>
        <a href={links.manifesto}>Manifesto</a>
        <a href={links.principles}>Principles</a>
        <a href={links.pledge}>PLEDGE.md</a>
        <a href={links.signatories}>SIGNATORIES.md</a>
        <a href={links.governance}>GOVERNANCE.md</a>
      </nav>
    </footer>
  )
}
