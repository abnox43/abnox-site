import type { MouseEvent } from 'react'
import { navItems } from '../../data/navigation'
import { siteConfig, socialLinks } from '../../config/site'
import { useI18n, interpolate } from '../../i18n'
import { useConsent } from '../../consent/ConsentProvider'
import { scrollToSection } from '../../utils/navigate'
import {
  ArrowUpIcon,
  GithubIcon,
  LockIcon,
  YoutubeIcon,
} from '../ui/Icons'
import { Logo } from '../ui/Logo'

export function Footer() {
  const { messages } = useI18n()
  const t = messages.footer
  const { openSettings } = useConsent()
  const year = new Date().getFullYear()

  const go = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()
    scrollToSection(id)
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <a
              className="site-footer__logo"
              href="#home"
              aria-label={`ABNOX — ${messages.nav.home}`}
              onClick={(event) => go(event, 'home')}
            >
              <Logo />
            </a>
            <p className="site-footer__tagline">{t.tagline}</p>
            <p className="site-footer__status">
              <span className="pulse-dot" aria-hidden />
              {t.status}
            </p>
          </div>

          <nav className="site-footer__nav" aria-label={t.navigate}>
            <h2>{t.navigate}</h2>
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} onClick={(event) => go(event, item.id)}>
                    {messages.nav[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__elsewhere">
            <h2>{t.elsewhere}</h2>
            <ul>
              {socialLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.id === 'github' ? <GithubIcon size={17} /> : <YoutubeIcon size={17} />}
                    <span>{link.handle}</span>
                  </a>
                </li>
              ))}
              <li>
                <button type="button" onClick={openSettings}>
                  <LockIcon size={16} />
                  <span>{t.privacy}</span>
                </button>
              </li>
            </ul>
          </div>

          <div className="site-footer__colophon">
            <p>{t.built}</p>
            <p className="site-footer__version" dir="ltr">
              {t.version}
            </p>
            <a className="site-footer__top-link" href="#home" onClick={(event) => go(event, 'home')}>
              {t.top}
              <ArrowUpIcon size={15} />
            </a>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>{interpolate(t.rights, { year })}</p>
          <p className="site-footer__made">{t.made}</p>
          <p className="site-footer__brandline" dir="ltr">
            {siteConfig.name} / {siteConfig.location}
          </p>
        </div>
      </div>
    </footer>
  )
}
