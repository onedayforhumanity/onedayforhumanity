/*
 * Google Analytics 4, without cookies.
 *
 * Consent Mode is set to "denied" for every storage type before gtag.js loads,
 * so GA sets no cookies and stores no identifier. GA then counts visits only
 * through its behavioral modeling, which activates at Google's traffic
 * thresholds; below them the visits are sent but not shown. That is the trade
 * the founder chose on 6 September 2026: no cookies and no banner over a full
 * count. Flipping to a full count means granting analytics_storage after a
 * consent banner; see CLAUDE.md, "Analytics".
 *
 * The module is a no-op in development, and for visitors whose browser sends
 * Global Privacy Control or Do Not Track.
 */

const MEASUREMENT_ID = 'G-FBW9K9TNSK'

declare global {
  interface Window {
    dataLayer?: unknown[]
  }
}

interface PrivacySignals extends Navigator {
  readonly globalPrivacyControl?: boolean
}

function optedOut(): boolean {
  const nav = navigator as PrivacySignals
  return nav.globalPrivacyControl === true || nav.doNotTrack === '1'
}

export function startAnalytics(): void {
  if (import.meta.env.DEV || optedOut()) return

  const dataLayer = (window.dataLayer ??= [])
  // gtag.js reads the Arguments object it is handed, not an array, so the
  // standard snippet's form is kept here on purpose.
  const gtag: (...args: unknown[]) => void = function () {
    // eslint-disable-next-line prefer-rest-params
    dataLayer.push(arguments)
  }

  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
  })
  gtag('js', new Date())
  gtag('config', MEASUREMENT_ID)

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
  document.head.append(script)
}
