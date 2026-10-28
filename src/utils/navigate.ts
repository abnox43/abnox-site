export type SectionNavigationBehavior = 'smooth' | 'auto'

/**
 * Anchor navigation with two accessibility details browsers do not give us:
 * a sticky-header offset (via CSS scroll-margin) and focus moved to the
 * section heading so keyboard and screen-reader users land in the right place.
 */
export function scrollToSection(id: string, behavior?: SectionNavigationBehavior): void {
  const target = document.getElementById(id)
  if (!target) return

  const reduced =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const motion = behavior ?? (reduced ? 'auto' : 'smooth')

  target.scrollIntoView({ behavior: motion, block: 'start' })
  history.replaceState(null, '', `#${id}`)

  const heading = target.querySelector<HTMLElement>('h1, h2')
  if (!heading) return
  heading.setAttribute('tabindex', '-1')
  // preventScroll keeps the smooth scroll from being cancelled by the focus.
  heading.focus({ preventScroll: true })
  heading.addEventListener('blur', () => heading.removeAttribute('tabindex'), { once: true })
}
