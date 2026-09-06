import type { ReactNode } from 'react'
import { links, tiers } from '../content/site'
import { Section } from './Section'
import s from './Join.module.css'

interface StepProps {
  n: number
  children: ReactNode
}

function Step({ n, children }: StepProps) {
  return (
    <li className={s.step}>
      <span className={s.stepNumber} aria-hidden="true">
        {n}
      </span>
      <span>{children}</span>
    </li>
  )
}

/** The steps mirror the Join section of MANIFESTO.md and CONTRIBUTING.md; change them together. */
export function Join() {
  return (
    <Section id="join" stack={false}>
      <div className={s.panel}>
        <div className={s.intro}>
          <h2 className={s.title}>How to join</h2>
          <p className={s.lede}>
            Signing is a pull request. The pledge is public from the first day.
          </p>
        </div>

        <div className={s.tracks}>
          <div className={s.track}>
            <h3 className={s.trackLabel}>As an individual</h3>
            <ol className={s.steps}>
              <Step n={1}>
                Read the <a href={links.manifesto}>manifesto</a> and the{' '}
                <a href={links.principles}>principles</a>.
              </Step>
              <Step n={2}>
                Add yourself to <code className={s.code}>SIGNATORIES.md</code> with your cadence,
                or <a href={links.signIssue}>open an issue</a> if you do not use git.
              </Step>
              <Step n={3}>
                Help groom the founding mission's backlog, or nominate a mission. When a mission
                is recognized, pick an issue labelled <code className={s.code}>one-day</code> and
                give your first day.
              </Step>
            </ol>
            <a href={links.signatoriesEdit} className={s.buttonOutline}>
              Sign as an individual
            </a>
          </div>

          <div className={s.track}>
            <h3 className={s.trackLabel}>As an organization</h3>
            <ol className={s.steps}>
              <Step n={1}>
                Choose a tier and get leadership sign-off, including authorization for your
                employees to contribute under each mission's license.
              </Step>
              <Step n={2}>
                Publish a short pledge post (template in <code className={s.code}>PLEDGE.md</code>).
              </Step>
              <Step n={3}>
                Open a PR adding your organization to <code className={s.code}>SIGNATORIES.md</code>
                . You may then use the tier badge.
              </Step>
            </ol>
            <a href={links.pledge} className={s.buttonSolid}>
              Pledge as an organization
            </a>
          </div>
        </div>

        <div className={s.badges}>
          {tiers.map((tier) => (
            <span key={tier.name} className={s.badge}>
              <span className={s.badgeLabel}>One Day</span>
              <span className={s.badgeValue}>
                {tier.name} · {tier.fraction}
              </span>
            </span>
          ))}
        </div>
      </div>
    </Section>
  )
}
