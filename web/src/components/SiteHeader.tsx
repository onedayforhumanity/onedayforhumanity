import { links, site } from '../content/site'
import { cx } from '../lib/cx'
import s from './SiteHeader.module.css'

/** Five days; the first one is the day that gets given. */
const LOGO_DOTS = [0, 1, 2, 3, 4] as const

interface SiteHeaderProps {
  /** Which page is showing, so the nav can mark it for assistive tech. */
  page: 'landing' | 'manifesto' | 'principles'
}

export function SiteHeader({ page }: SiteHeaderProps) {
  return (
    // odh-chrome: hidden when the page is printed.
    <header className={cx(s.header, 'odh-chrome')}>
      {/* Root-relative so the anchors work from the document pages too. */}
      <a href="/#top" className={s.brand}>
        <span className={s.dots} aria-hidden="true">
          {LOGO_DOTS.map((i) => (
            <span key={i} className={cx(s.dot, i === 0 && s.dotGiven)} />
          ))}
        </span>
        <span className={s.wordmark}>{site.name}</span>
      </a>
      <nav className={s.nav} aria-label="Primary">
        <a href="/#cadences">Cadences</a>
        <a href="/#commitments">Commitments</a>
        <a href="/#missions">Missions</a>
        <a href={links.manifesto} aria-current={page === 'manifesto' ? 'page' : undefined}>
          Manifesto
        </a>
        <a href="/#join" className={s.cta}>
          Pledge one day
        </a>
      </nav>
    </header>
  )
}
