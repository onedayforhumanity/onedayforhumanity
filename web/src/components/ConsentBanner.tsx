import { useEffect, useRef, useSyncExternalStore } from 'react'
import { consentBannerOpen, setAnalyticsConsent, subscribeConsent } from '../analytics'
import { cx } from '../lib/cx'
import s from './ConsentBanner.module.css'

/**
 * Asks once whether Google Analytics may set cookies. Not in the design: it
 * borrows the Join panel's ink ground, mono label, and outline buttons. The two
 * buttons are styled alike, because refusing has to be as easy as allowing.
 */
export function ConsentBanner() {
  const open = useSyncExternalStore(subscribeConsent, consentBannerOpen)
  const firstButton = useRef<HTMLButtonElement>(null)
  const openedOnLoad = useRef(open)

  // Reopened from the footer: move focus here so a keyboard visitor lands on the choice.
  useEffect(() => {
    if (open && !openedOnLoad.current) firstButton.current?.focus()
    if (!open) openedOnLoad.current = false
  }, [open])

  if (!open) return null

  return (
    // odh-chrome: hidden when the page is printed.
    <section className={cx(s.banner, 'odh-chrome')} aria-label="Cookie choice">
      <p className={s.label}>Cookies</p>
      <p className={s.body}>
        We count visits with Google Analytics. If you allow it, it sets two cookies so that a
        return visit is not counted as a new visitor. If you decline, Google still receives each
        visit, with no cookies and no identifier. You can change this from the footer.
      </p>
      <div className={s.actions}>
        <button
          ref={firstButton}
          type="button"
          className={s.button}
          onClick={() => {
            setAnalyticsConsent(true)
          }}
        >
          Allow cookies
        </button>
        <button
          type="button"
          className={s.button}
          onClick={() => {
            setAnalyticsConsent(false)
          }}
        >
          Decline
        </button>
      </div>
    </section>
  )
}
