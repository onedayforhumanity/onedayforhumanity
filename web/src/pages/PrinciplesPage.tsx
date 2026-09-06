import principles from '../../../PRINCIPLES.md?html'
import { links } from '../content/site'
import join from '../components/Join.module.css'
import { DocumentPage } from './DocumentPage'
import s from './Document.module.css'

/** PRINCIPLES.md, rendered at build time and numbered, with the ways to act on it after. */
export function PrinciplesPage() {
  return (
    <DocumentPage
      html={principles}
      current="principles"
      numbered
      panelId="act"
      panel={
        <>
          <div className={join.intro}>
            <p className={join.trackLabel}>Next</p>
            <h2 className={join.title}>Hold us to it</h2>
            <p className={join.lede}>
              Every principle is a promise. If one is not kept, say so in the open. If one is
              wrong, propose a better one; changes need two-thirds of the Steering Circle after
              30 days of public comment, and until the Circle exists the repository's
              maintainers decide, in public, on the pull request.
            </p>
          </div>
          <div className={s.actions}>
            <a href={links.manifesto} className={join.buttonSolid}>
              Read the manifesto
            </a>
            <a href={links.principlesEdit} className={join.buttonOutline}>
              Propose a change
            </a>
          </div>
          <p className={s.meta}>
            Draft for public comment · CC BY 4.0 · <a href={links.changelog}>What changed</a> ·{' '}
            <a href={links.principlesSource}>Source on GitHub</a>
          </p>
        </>
      }
    />
  )
}
