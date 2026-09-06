import manifesto from '../../../MANIFESTO.md?html'
import { links } from '../content/site'
import join from '../components/Join.module.css'
import { Signatories } from '../components/Signatories'
import { DocumentPage } from './DocumentPage'
import s from './Document.module.css'

/** MANIFESTO.md, rendered at build time, then the signatories, then the signing panel. */
export function ManifestoPage() {
  return (
    <DocumentPage
      html={manifesto}
      current="manifesto"
      before={<Signatories />}
      panelId="sign"
      panel={
        <>
          <div className={join.intro}>
            <p className={join.trackLabel}>Sign</p>
            <h2 className={join.title}>Add your name</h2>
            <p className={join.lede}>
              Signing is a pull request. Add one line to{' '}
              <code className={join.code}>SIGNATORIES.md</code> with your name, or your
              organization, your cadence, and the version you signed. If you do not use git,
              open an issue and a maintainer will add you. The pledge is public from the first
              day.
            </p>
          </div>
          <div className={s.actions}>
            <a href={links.signatoriesEdit} className={join.buttonSolid}>
              Sign by pull request
            </a>
            <a href={links.signIssue} className={join.buttonOutline}>
              Sign without git
            </a>
          </div>
          <p className={s.note}>
            Organizations keep their tier badge while their latest report is under 18 months
            old. Changes to the text need two-thirds of the Steering Circle after 30 days of
            public comment; until the Circle exists, the repository's maintainers decide, in
            public, on the pull request.
          </p>
          <p className={s.meta}>
            Draft for public comment · CC BY 4.0 · <a href={links.principles}>The principles</a>{' '}
            · <a href={links.changelog}>What changed</a> ·{' '}
            <a href={links.manifestoSource}>Source on GitHub</a> ·{' '}
            <a href={links.manifestoEdit}>Propose a change</a>
          </p>
        </>
      }
    />
  )
}
