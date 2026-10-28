import { useEffect, useRef, useState, type ReactNode } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

/**
 * Small, one-shot entrance. Content is never hidden when motion is reduced,
 * when the observer is unavailable, or in print.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduced = usePrefersReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(reduced)

  useEffect(() => {
    if (reduced) {
      setVisible(true)
      return
    }
    const node = ref.current
    if (!node) return
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [reduced])

  return (
    <div
      ref={ref}
      className={`reveal ${visible || reduced ? 'is-visible' : ''} ${className ?? ''}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
