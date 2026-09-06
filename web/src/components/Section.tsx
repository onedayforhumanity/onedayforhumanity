import type { ReactNode } from 'react'
import { cx } from '../lib/cx'
import s from './Section.module.css'

interface SectionProps {
  /** Anchor target; the header nav links to these. */
  id: string
  children: ReactNode
  /**
   * Stack children in a column on the design's 28px rhythm. The Join section
   * is the one band that manages its own interior, so it opts out.
   */
  stack?: boolean
}

/**
 * The shell every band below the hero shares: gutter, max width, top rhythm,
 * and a link back to the menu at the end.
 */
export function Section({ id, children, stack = true }: SectionProps) {
  return (
    <section id={id} className={cx(s.section, stack && s.stack)}>
      {children}
      {/*
       * `#top` matches no element on purpose (see Hero.tsx), so browsers scroll
       * to the very top of the document, header included. odh-chrome: hidden
       * when the page is printed.
       */}
      <p className={cx(s.toTop, 'odh-chrome')}>
        <a href="#top">
          Back to top<span aria-hidden="true"> ↑</span>
        </a>
      </p>
    </section>
  )
}
