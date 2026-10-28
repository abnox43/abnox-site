import { useEffect, useRef, useState } from 'react'

/**
 * Tracks which section owns the viewport. Uses a light rAF-throttled scroll
 * listener instead of an observer so short sections cannot flicker between
 * states when the header is sticky.
 */
export function useScrollSpy(ids: string[], offset = 96): string {
  // Start with nothing highlighted: the hero has no nav item of its own.
  const [active, setActive] = useState('')
  const frame = useRef<number | null>(null)

  useEffect(() => {
    const update = () => {
      frame.current = null
      const marker = window.scrollY + offset
      let current = ''
      for (const id of ids) {
        const element = document.getElementById(id)
        if (!element) continue
        const top = element.getBoundingClientRect().top + window.scrollY
        if (top <= marker) current = id
      }
      setActive((previous) => (previous === current ? previous : current))
    }

    const onScroll = () => {
      if (frame.current !== null) return
      frame.current = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame.current !== null) window.cancelAnimationFrame(frame.current)
    }
  }, [ids, offset])

  return active
}
