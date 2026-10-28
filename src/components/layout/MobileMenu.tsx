import type { MouseEvent } from 'react'
import { navItems, type SectionId } from '../../data/navigation'
import { socialLinks } from '../../config/site'
import { useI18n } from '../../i18n'
import { useIsMac } from '../../hooks/useIsMac'
import { scrollToSection } from '../../utils/navigate'
import { Modal } from '../ui/Modal'
import { Logo } from '../ui/Logo'
import { LanguageSelector } from '../ui/LanguageSelector'
import { GithubIcon, SearchIcon, YoutubeIcon, ArrowRightIcon } from '../ui/Icons'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
  onSearch: () => void
  active: string
}

export function MobileMenu({ open, onClose, onSearch, active }: MobileMenuProps) {
  const { messages } = useI18n()
  const isMac = useIsMac()
  const shortcut = isMac ? messages.common.shortcutMac : messages.common.shortcut

  const go = (event: MouseEvent<HTMLAnchorElement>, id: SectionId) => {
    event.preventDefault()
    onClose()
    window.setTimeout(() => scrollToSection(id), 80)
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      labelledBy="mobile-menu-title"
      className="menu-modal"
      panelClassName="menu-panel"
    >
      <div className="menu-panel__head">
        <Logo />
        <p className="menu-panel__eyebrow">{messages.common.menu}</p>
      </div>
      <h2 id="mobile-menu-title" className="visually-hidden">
        {messages.common.menu}
      </h2>

      <nav className="menu-nav" aria-label={messages.nav.label}>
        <ul>
          {navItems.map((item, index) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={active === item.id ? 'is-active' : undefined}
                aria-current={active === item.id ? 'location' : undefined}
                onClick={(event) => go(event, item.id)}
              >
                <span className="menu-nav__index" aria-hidden>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{messages.nav[item.key]}</span>
                <ArrowRightIcon size={18} className="menu-nav__arrow" />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="menu-panel__tools">
        <LanguageSelector className="menu-language" id="menu-language" />
        <button type="button" className="button button--primary menu-search" onClick={onSearch}>
          <SearchIcon size={18} />
          <span>{messages.nav.search}</span>
          <kbd>{shortcut}</kbd>
        </button>
      </div>

      <div className="menu-panel__social">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="menu-social-link"
          >
            {link.id === 'github' ? <GithubIcon size={18} /> : <YoutubeIcon size={18} />}
            <span>{link.handle}</span>
          </a>
        ))}
      </div>

      <p className="menu-panel__note">{messages.hero.badge}</p>
    </Modal>
  )
}
