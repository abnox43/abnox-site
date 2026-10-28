import { useEffect, useRef } from 'react'
import { useI18n } from '../../i18n'
import { useConsent } from '../../consent/ConsentProvider'
import { CheckIcon, LockIcon } from '../ui/Icons'

export function CookieBanner() {
  const { messages } = useI18n()
  const t = messages.cookie
  const { choice, saveChoice, openSettings, justSaved } = useConsent()
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const banner = ref.current
    document.body.classList.toggle('has-consent-banner', !choice)
    if (!banner) return

    const update = () => {
      document.documentElement.style.setProperty(
        '--consent-banner-height',
        `${banner.offsetHeight}px`,
      )
    }
    update()
    const observer =
      'ResizeObserver' in window ? new ResizeObserver(update) : null
    observer?.observe(banner)
    window.addEventListener('resize', update)
    return () => {
      observer?.disconnect()
      window.removeEventListener('resize', update)
      document.body.classList.remove('has-consent-banner')
      document.documentElement.style.removeProperty('--consent-banner-height')
    }
  }, [choice])

  return (
    <>
      {!choice ? (
        <section
          ref={ref}
          className="cookie-banner"
          aria-labelledby="cookie-title"
          aria-describedby="cookie-text"
        >
          <div className="cookie-banner__main">
            <div className="cookie-banner__head">
              <span className="cookie-banner__icon" aria-hidden>
                <LockIcon size={18} />
              </span>
              <h2 id="cookie-title">{t.title}</h2>
            </div>
            <p id="cookie-text">
              {t.text}{' '}
              <button type="button" className="link-button" onClick={openSettings}>
                {t.privacyLink}
              </button>
            </p>
          </div>
          <div className="cookie-banner__actions">
            <button
              type="button"
              className="button button--primary button--small"
              onClick={() => saveChoice('accepted')}
            >
              {t.accept}
            </button>
            <button
              type="button"
              className="button button--small"
              onClick={() => saveChoice('rejected')}
            >
              {t.reject}
            </button>
            <button type="button" className="button button--ghost button--small" onClick={openSettings}>
              {t.settings}
            </button>
          </div>
        </section>
      ) : null}

      <div
        className={`consent-toast ${justSaved ? 'is-visible' : ''}`.trim()}
        role="status"
        aria-live="polite"
      >
        <CheckIcon size={16} />
        <span>{t.saved}</span>
      </div>
    </>
  )
}
