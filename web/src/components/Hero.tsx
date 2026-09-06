import { heroCalendar, links, site, type HeroCadence } from '../content/site'
import { cx } from '../lib/cx'
import s from './Hero.module.css'

interface HeroProps {
  cadence: HeroCadence
}

export function Hero({ cadence }: HeroProps) {
  const { days, caption } = heroCalendar(cadence)

  return (
    // Not `top`, as in the design: with no element of that id, the logo's `/#top`
    // link scrolls to the very top of the document, header included.
    <section id="hero" className={s.hero}>
      <div className={s.copy}>
        <p className={s.eyebrow}>{site.eyebrow}</p>
        <h1 className={s.headline}>{site.headline}</h1>
        <p className={s.lede}>{site.lede}</p>
        <div className={s.actions}>
          <a href="#join" className={s.primary}>
            Pledge one day
          </a>
          <a href={links.manifesto} className={s.secondary}>
            Read the manifesto
          </a>
        </div>
      </div>
      <div className={s.calendar}>
        {/* Decorative: the caption below carries the same meaning in text. */}
        <div className={s.grid} aria-hidden="true">
          {days.map((day) => (
            <div key={day.n} className={cx(s.day, day.pledged && s.dayPledged)}>
              {day.n}
            </div>
          ))}
        </div>
        <p className={s.caption}>{caption}</p>
      </div>
    </section>
  )
}
