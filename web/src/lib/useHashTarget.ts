import { useEffect } from 'react'

/**
 * Scrolls to the fragment in the address bar once the page has rendered.
 *
 * Every page is drawn by React, so when the browser handles the fragment of a
 * fresh navigation the target element does not exist yet and nothing moves.
 * Without this, following "Cadences" in the menu from /manifesto/ to
 * /#cadences, or opening a link to a heading inside a document, lands at the
 * top of the page instead. It moves without animation, which is what the
 * browser would have done on its own; the gliding belongs to fragments
 * clicked inside a page, which the browser already handles.
 *
 * A reload part-way down a page restores its scroll position, so a page that
 * is already scrolled is left alone.
 */
export function useHashTarget(): void {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id || window.scrollY > 0) {
      return
    }
    document.getElementById(id)?.scrollIntoView({ block: 'start', behavior: 'instant' })
  }, [])
}
