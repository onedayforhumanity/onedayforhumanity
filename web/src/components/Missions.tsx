import { missions } from '../content/site'
import { cx } from '../lib/cx'
import { Section } from './Section'
import sec from './Section.module.css'
import s from './Missions.module.css'

export function Missions() {
  return (
    <Section id="missions">
      <div className={sec.headingRow}>
        <h2 className={sec.title}>Missions</h2>
        <p className={sec.lede}>
          Two apps have been part of the movement so far. The next mission can be one you
          propose.
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
            {mission.links && (
              <p className={s.links}>
                {mission.links.map((link) => (
                  <a key={link.href + link.label} href={link.href} className={s.link}>
                    {link.label}
                  </a>
                ))}
              </p>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
