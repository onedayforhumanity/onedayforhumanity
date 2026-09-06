import { site, tiers, type TierName } from '../content/site'
import { cx } from '../lib/cx'
import { Section } from './Section'
import sec from './Section.module.css'
import s from './Cadences.module.css'

/** Each tier packs its days into the same block at a different density. */
const GRAIN_CLASS: Record<TierName, string | undefined> = {
  Weekly: s.grainWeekly,
  Monthly: s.grainMonthly,
  Quarterly: s.grainQuarterly,
  Yearly: s.grainYearly,
}

export function Cadences() {
  return (
    <Section id="cadences">
      <div className={sec.headingRow}>
        <h2 className={sec.title}>Four cadences. One unit: a day.</h2>
        <p className={sec.lede}>
          All tiers are equal members. All tiers report publicly once a year.
        </p>
      </div>

      <div className={s.grid}>
        {tiers.map((tier) => (
          <article key={tier.name} className={s.card}>
            {/* Decorative: the name, fraction and description below say the same thing. */}
            <div className={cx(s.grain, GRAIN_CLASS[tier.name])} aria-hidden="true">
              {tier.cells.map((tone, i) => (
                <div
                  key={i}
                  className={cx(s.cell, tone === 'pledged' && s.cellPledged)}
                />
              ))}
            </div>
            <div className={s.meta}>
              <h3 className={s.name}>{tier.name}</h3>
              <span className={s.fraction}>{tier.fraction}</span>
            </div>
            <p className={s.desc}>{tier.desc}</p>
          </article>
        ))}
      </div>

      <p className={s.note}>{site.orgNote}</p>
    </Section>
  )
}
