import { useEffect, useState, type MouseEvent } from 'react'
import { navItems } from '../../data/navigation'
import { useI18n } from '../../i18n'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { useIsMac } from '../../hooks/useIsMac'
import { scrollToSection } from '../../utils/navigate'
import { Logo } from '../ui/Logo'
import { LanguageSelector } from '../ui/LanguageSelector'
import { ThemeToggle } from '../ui/ThemeToggle'
import { MenuIcon, SearchIcon } from '../ui/Icons'
import { MobileMenu } from './MobileMenu'

const scrollSpyIds = navItems.map((item) => item.id)

type HeaderProps = {
  onOpenSearch: () => void
}

export function Header({ onOpenSearch }: HeaderProps) {
  const { messages } = useI18n()
  const isMac = useIsMac()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useScrollSpy(scrollSpyIds)
  const shortcut = isMac ? messages.common.shortcutMac : messages.common.shortcut

  useEffect(() => {
    let frame: number | null = null
    const update = () => {
      frame = null
      setScrolled(window.scrollY > 12)
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

  const go = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()
    scrollToSection(id)
  }

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`.trim()}>
        <div className="site-header__inner container">
          <a
            className="site-header__brand"
            href="#home"
            aria-label={`ABNOX — ${messages.nav.home}`}
            onClick={(event) => go(event, 'home')}
          >
            <Logo />
          </a>

          <nav className="desktop-nav" aria-label={messages.nav.label}>
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={active === item.id ? 'is-active' : undefined}
                    aria-current={active === item.id ? 'location' : undefined}
                    onClick={(event) => go(event, item.id)}
                  >
                    {messages.nav[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-header__actions">
            <button
              type="button"
              className="header-search"
              onClick={onOpenSearch}
              title={messages.nav.search}
            >
              <SearchIcon size={18} />
              <span className="header-search__label">{messages.nav.search}</span>
              <kbd className="header-search__kbd">{shortcut}</kbd>
            </button>
            <LanguageSelector className="header-language" id="header-language" />
            <ThemeToggle />
            <button
              type="button"
              className="icon-button menu-button"
              onClick={() => setMenuOpen(true)}
              aria-label={messages.nav.openMenu}
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
              title={messages.nav.openMenu}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onSearch={() => {
          setMenuOpen(false)
          window.setTimeout(onOpenSearch, 90)
        }}
        active={active}
      />
    </>
  )
}
