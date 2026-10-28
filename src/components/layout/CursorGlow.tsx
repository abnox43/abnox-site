import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

/**
 * A soft light that follows a fine pointer. Purely decorative: absent for
 * touch, reduced-motion and print, and it never intercepts a click.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return
    const node = ref.current
    if (!node) return
    if (!window.matchMedia('(pointer: fine)').matches) return

    let frame: number | null = null
    let x = 0
    let y = 0

    const paint = () => {
      frame = null
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    const onMove = (event: PointerEvent) => {
      x = event.clientX
      y = event.clientY
      node.classList.add('is-active')
      if (frame !== null) return
      frame = window.requestAnimationFrame(paint)
    }

    const onLeave = () => node.classList.remove('is-active')

    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [reduced])

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />
}
