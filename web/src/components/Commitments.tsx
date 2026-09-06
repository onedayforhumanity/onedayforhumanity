import principles from '../../../PRINCIPLES.md?sections'
import { links, values } from '../content/site'
import { Section } from './Section'
import sec from './Section.module.css'
import s from './Commitments.module.css'

/**
 * The ten principles as cards, read from PRINCIPLES.md at build time so the
 * landing page can never say something the canon does not. Each card shows the
 * principle's first paragraph; the page at /principles/ has the rest.
 */
export function Commitments() {
  return (
    <Section id="commitments">
      <div className={sec.headingStack}>
        <p className={sec.eyebrow}>From the principles</p>
        <h2 className={sec.title}>We commit</h2>
      </div>

      <div className={s.grid}>
        {principles.map((principle, i) => (
          <article key={principle.id} className={s.card}>
            <p className={s.ordinal}>{String(i + 1).padStart(2, '0')}</p>
            <h3 className={s.title}>{principle.title}</h3>
            {/* Edited by pull request; the build escapes raw HTML and drops unsafe hrefs. */}
            <p className={s.body} dangerouslySetInnerHTML={{ __html: principle.lead }} />
          </article>
        ))}
      </div>

      <ul className={s.values}>
        {values.map((value) => (
          <li key={value.left}>
            <strong className={s.valueLeft}>{value.left}</strong> over {value.right}
          </li>
        ))}
      </ul>

      <p className={s.more}>
        <a href={links.principles}>Read the ten principles in full</a>
      </p>
    </Section>
  )
}
