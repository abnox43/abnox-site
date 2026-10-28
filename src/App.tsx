import { useCallback, useEffect, useState, type MouseEvent } from 'react'
import { CookieBanner } from './components/consent/CookieBanner'
import { PrivacySettings } from './components/consent/PrivacySettings'
import { BackToTop } from './components/layout/BackToTop'
import { CursorGlow } from './components/layout/CursorGlow'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { ProjectDetails } from './components/projects/ProjectDetails'
import { SiteSearch } from './components/search/SiteSearch'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Hero } from './components/sections/Hero'
import { Journey } from './components/sections/Journey'
import { Moments } from './components/sections/Moments'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { ConsentProvider } from './consent/ConsentProvider'
import { searchableSections } from './data/navigation'
import { projectById, type ProjectId } from './data/projects'
import { I18nProvider, useI18n } from './i18n'
import { ThemeProvider } from './theme/ThemeProvider'
import { scrollToSection } from './utils/navigate'

const sectionIds = new Set<string>(searchableSections)

function Site() {
  const { messages } = useI18n()
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeProjectId, setActiveProjectId] = useState<ProjectId | null>(null)

  const openSearch = useCallback(() => setSearchOpen(true), [])
  const closeSearch = useCallback(() => setSearchOpen(false), [])
  const openProject = useCallback((id: ProjectId) => setActiveProjectId(id), [])
  const closeProject = useCallback(() => setActiveProjectId(null), [])

  // Ctrl/⌘ K and "/" open search, but never steal a keystroke from a field,
  // and never stack a second native dialog on top of an open one.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null
      const typing =
        Boolean(target?.closest('input, textarea, select, [contenteditable="true"], [contenteditable=""]')) ||
        Boolean(target?.isContentEditable)
      const dialogOpen = Boolean(document.querySelector('dialog[open]'))
      const commandKey = event.metaKey || event.ctrlKey

      if (commandKey && !event.altKey && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        if (!dialogOpen) setSearchOpen(true)
        return
      }

      if (event.key === '/' && !commandKey && !event.altKey) {
        if (typing || dialogOpen) return
        event.preventDefault()
        setSearchOpen(true)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  // Single-page anchors are not restored by the browser when React renders
  // after load, so honour a section hash once the layout is settled.
  useEffect(() => {
    const raw = window.location.hash.replace(/^#/, '')
    if (!raw || !sectionIds.has(raw)) return
    const timer = window.setTimeout(() => scrollToSection(raw, 'auto'), 160)
    return () => window.clearTimeout(timer)
  }, [])

  const skipToContent = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const main = document.getElementById('main')
    if (!main) return
    main.focus({ preventScroll: true })
    main.scrollIntoView({ behavior: 'auto', block: 'start' })
  }

  const project = activeProjectId ? projectById.get(activeProjectId) ?? null : null

  return (
    <>
      <a className="skip-link" href="#main" onClick={skipToContent}>
        {messages.common.skipToContent}
      </a>

      <ScrollProgress />
      <CursorGlow />

      <Header onOpenSearch={openSearch} />

      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Projects onOpenProject={openProject} />
        <Moments />
        <Journey />
        <Contact />
      </main>

      <Footer />
      <BackToTop />

      <SiteSearch open={searchOpen} onClose={closeSearch} onOpenProject={openProject} />
      <ProjectDetails project={project} onClose={closeProject} />
      <CookieBanner />
      <PrivacySettings />
    </>
  )
}

export function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <ConsentProvider>
          <Site />
        </ConsentProvider>
      </I18nProvider>
    </ThemeProvider>
  )
}
