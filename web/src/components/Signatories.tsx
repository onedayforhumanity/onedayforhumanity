import signatories from '../../../SIGNATORIES.md?signatories'
import type { Signatory } from '../../../SIGNATORIES.md?signatories'
import { tiers } from '../content/site'
// The tier chip is the one from the Join section, so a badge means the same
// thing everywhere on the site.
import join from './Join.module.css'
import { Section } from './Section'
import sec from './Section.module.css'
import s from './Signatories.module.css'

function count(n: number, one: string, many: string): string {
  return `${String(n)} ${n === 1 ? one : many}`
}

interface GroupProps {
  title: string
  entries: readonly Signatory[]
  empty: string
  note?: string
}

function Group({ title, entries, empty, note }: GroupProps) {
  return (
    <div className={s.group}>
      <h3 className={s.groupTitle}>{title}</h3>
      {note && <p className={s.groupNote}>{note}</p>}
      {entries.length === 0 ? (
        <p className={s.empty}>{empty}</p>
      ) : (
        <ul className={s.list}>
          {entries.map((entry) => {
            const fraction = tiers.find((tier) => tier.name === entry.tier)?.fraction
            return (
              <li key={`${entry.name} ${entry.since}`} className={s.entry}>
                <span className={s.name}>
                  {entry.url ? <a href={entry.url}>{entry.name}</a> : entry.name}
                </span>
                <span className={join.badge}>
                  <span className={join.badgeLabel}>One Day</span>
                  <span className={join.badgeValue}>
                    {entry.tier}
                    {fraction && ` · ${fraction}`}
                  </span>
                </span>
                <span className={s.meta}>
                  since {entry.since} · manifesto {entry.version}
                  {entry.report && (
                    <>
                      {' · '}
                      <a href={entry.report.href}>{entry.report.label}</a>
                    </>
                  )}
                </span>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

/**
 * Everyone who has signed, read from SIGNATORIES.md at build time. The list is
 * as public as the pledge, and the lapsed list is shown rather than hidden, the
 * way the UN Global Compact publishes the names it delists.
 */
export function Signatories() {
  const { organizations, individuals, lapsed } = signatories
  const total = organizations.length + individuals.length
  const lede =
    total === 0
      ? 'Nobody has signed this version yet. The pledge is public from the first day, and so is this list.'
      : `${count(organizations.length, 'organization', 'organizations')} · ${count(individuals.length, 'person', 'people')}. The pledge is public from the first day, and so is this list.`

  return (
    <Section id="signatories">
      <div className={sec.headingRow}>
        <h2 className={sec.title}>Signatories</h2>
        <p className={sec.lede}>{lede}</p>
      </div>
      <Group
        title="Organizations"
        entries={organizations}
        empty="No organization has signed yet."
      />
      <Group title="Individuals" entries={individuals} empty="No individual has signed yet." />
      <Group
        title="Lapsed"
        entries={lapsed}
        empty="No organization has lapsed."
        note="Organizations without a report for 18 months. Rejoining is one pull request away."
      />
    </Section>
  )
}
