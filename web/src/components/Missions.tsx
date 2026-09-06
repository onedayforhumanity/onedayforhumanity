import { missions } from '../content/site'
import { cx } from '../lib/cx'
import { Section } from './Section'
import sec from './Section.module.css'
import s from './Missions.module.css'

export function Missions() {
  return (
    <Section id="missions">
      <div className={sec.headingRow}>
        <h2 className={sec.title}>Founding mission</h2>
        <p className={sec.lede}>
          Proposed, and seeking a steward. Until it has one it is a proposal, and no other
          mission is listed, on purpose.
        </p>
      </div>

      <div className={s.grid}>
        {missions.map((mission) => (
          <article
            key={mission.title}
            className={cx(s.card, mission.tone === 'founding' ? s.founding : s.plain)}
          >
            <p className={s.label}>{mission.label}</p>
            <h3 className={s.title}>{mission.title}</h3>
            <p className={s.why}>{mission.body}</p>
            {mission.link && (
              <a href={mission.link.href} className={s.link}>
                {mission.link.label}
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
