import { useEffect, useRef } from 'react'

/**
 * A 3px reading indicator. It updates its transform directly inside a
 * requestAnimationFrame, so scrolling never triggers React renders.
 */
export function ScrollProgress() {
  const bar = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let frame: number | null = null

    const update = () => {
      frame = null
      const node = bar.current
      if (!node) return
      const max = document.documentElement.scrollHeight - window.innerHeight
      const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      node.style.transform = `scaleX(${ratio})`
    }

    const request = () => {
      if (frame !== null) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', request, { passive: true })
    window.addEventListener('resize', request, { passive: true })
    return () => {
      window.removeEventListener('scroll', request)
      window.removeEventListener('resize', request)
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span ref={bar} className="scroll-progress__bar" />
    </div>
  )
}
