/*
 * Google Analytics 4, with cookies only after consent.
 *
 * Consent Mode starts with every storage type denied, so a first visit sets no
 * cookies and sends only cookieless hits. ConsentBanner asks once. If the
 * visitor allows it, analytics_storage is granted and GA sets its two cookies,
 * which is what lets it report visits instead of only modeling them. If the
 * visitor declines, the cookieless hits carry on; GA uses them for modeling
 * only. The ad storage types are never granted. The founder chose this on
 * 16 October 2026, after GA reported no data at all from the cookieless setup
 * of 6 September; see CLAUDE.md, "Analytics".
 *
 * The choice is kept in localStorage, which is strictly necessary to honor it
 * and needs no consent of its own. Withdrawing consent deletes the cookies.
 *
 * Nothing loads in development, and visitors whose browser sends Global
 * Privacy Control or Do Not Track get no analytics and no banner.
 */

const MEASUREMENT_ID = 'G-FBW9K9TNSK'
const STORAGE_KEY = 'odh-analytics-consent'

type Choice = 'granted' | 'denied'

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

// gtag.js reads the Arguments object it is handed, not an array, so the
// standard snippet's form is kept here on purpose.
const gtag: (...args: unknown[]) => void = function () {
  // eslint-disable-next-line prefer-rest-params
  ;(window.dataLayer ??= []).push(arguments)
}

// Storage can be blocked or throw in a private window; then the banner simply
// asks again on the next page.
function readChoice(): Choice | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'granted' || value === 'denied' ? value : null
  } catch {
    return null
  }
}

function writeChoice(value: Choice): void {
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // The choice still applies to this page.
  }
}

/** GA sets _ga and _ga_<id> on the widest domain it can, so try every level. */
function deleteAnalyticsCookies(): void {
  const names = document.cookie
    .split(';')
    .map((pair) => pair.trim().split('=')[0] ?? '')
    .filter((name) => name === '_ga' || name.startsWith('_ga_'))
  const labels = location.hostname.split('.')
  for (const name of names) {
    document.cookie = `${name}=; max-age=0; path=/`
    for (let i = 0; i < labels.length - 1; i++) {
      document.cookie = `${name}=; max-age=0; path=/; domain=${labels.slice(i).join('.')}`
    }
  }
}

let choice = readChoice()
let bannerOpen = choice === null
const listeners = new Set<() => void>()

function notify(): void {
  for (const listener of listeners) listener()
}

/** False when the browser asks not to be tracked; then there is nothing to choose. */
export function analyticsOffered(): boolean {
  return !optedOut()
}

export function subscribeConsent(listener: () => void): () => void {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function consentBannerOpen(): boolean {
  return bannerOpen && analyticsOffered()
}

export function openConsentBanner(): void {
  bannerOpen = true
  notify()
}

export function setAnalyticsConsent(granted: boolean): void {
  choice = granted ? 'granted' : 'denied'
  writeChoice(choice)
  bannerOpen = false
  gtag('consent', 'update', { analytics_storage: choice })
  if (!granted) deleteAnalyticsCookies()
  notify()
}

export function startAnalytics(): void {
  if (import.meta.env.DEV || optedOut()) return

  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: choice === 'granted' ? 'granted' : 'denied',
  })
  gtag('js', new Date())
  gtag('config', MEASUREMENT_ID)

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
  document.head.append(script)
}
