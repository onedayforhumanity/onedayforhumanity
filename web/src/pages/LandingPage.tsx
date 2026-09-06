import type { HeroCadence } from '../content/site'
import { Cadences } from '../components/Cadences'
import { Commitments } from '../components/Commitments'
import { Hero } from '../components/Hero'
import { Join } from '../components/Join'
import { Missions } from '../components/Missions'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { useHashTarget } from '../lib/useHashTarget'
import page from './page.module.css'

interface LandingPageProps {
  /**
   * Which period the hero calendar draws. Mirrors the `heroCadence` prop on the
   * Landing.dc.html design; `monthly` is the design's default. The design's
   * other prop, `showCandidateMissions`, has no equivalent any more: the
   * candidate missions were removed from the canon on 6 September 2026.
   */
  heroCadence?: HeroCadence
}

/** The one-page landing, in the section order of Landing.dc.html. */
export function LandingPage({ heroCadence = 'monthly' }: LandingPageProps) {
  useHashTarget()

  return (
    <div className={page.page}>
      <a className="odh-skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader page="landing" />
      <main id="main">
        <Hero cadence={heroCadence} />
        <Cadences />
        <Commitments />
        <Join />
        <Missions />
      </main>
      <SiteFooter />
    </div>
  )
}
