import { useEffect, useState } from 'react'
import { useI18n } from '../../i18n'
import { scrollToSection } from '../../utils/navigate'
import { ArrowUpIcon } from '../ui/Icons'

/** Appears after the first screenful; returns focus to the page heading. */
export function BackToTop() {
  const { messages } = useI18n()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let frame: number | null = null
    const update = () => {
      frame = null
      setVisible(window.scrollY > 720)
    }
    const onScroll = () => {
      if (frame !== null) return
      frame = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <button
      type="button"
      className={`icon-button back-to-top ${visible ? 'is-visible' : ''}`.trim()}
      onClick={() => scrollToSection('home')}
      aria-label={messages.footer.top}
      title={messages.footer.top}
    >
      <ArrowUpIcon size={19} />
    </button>
  )
}
