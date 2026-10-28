import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { storageKeys } from '../config/site'

export type Theme = 'light' | 'dark'

type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function getInitialTheme(): Theme {
  if (typeof document !== 'undefined') {
    const fromDocument = document.documentElement.dataset.theme
    if (fromDocument === 'light' || fromDocument === 'dark') return fromDocument
  }
  try {
    const stored = localStorage.getItem(storageKeys.theme)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    /* Ignore unavailable storage. */
  }
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'light'
}

function hasStoredTheme(): boolean {
  try {
    return localStorage.getItem(storageKeys.theme) !== null
  } catch {
    return false
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme)
  const explicit = useRef(hasStoredTheme())
  const firstRun = useRef(true)

  const applyTheme = useCallback((next: Theme, animate: boolean) => {
    const root = document.documentElement
    if (animate) {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!reduce) {
        root.classList.add('theme-transition')
        window.setTimeout(() => root.classList.remove('theme-transition'), 420)
      }
    }
    root.dataset.theme = next
    root.style.colorScheme = next
    const meta = document.querySelector<HTMLMetaElement>('#theme-color-meta')
    if (meta) meta.content = next === 'dark' ? '#141517' : '#e7e7e3'
  }, [])

  const setTheme = useCallback(
    (next: Theme) => {
      explicit.current = true
      setThemeState(next)
      try {
        localStorage.setItem(storageKeys.theme, next)
      } catch {
        /* The theme still applies to this visit. */
      }
    },
    [],
  )

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [setTheme, theme])

  useEffect(() => {
    applyTheme(theme, !firstRun.current)
    firstRun.current = false
  }, [applyTheme, theme])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (event: MediaQueryListEvent) => {
      if (explicit.current) return
      setThemeState(event.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== storageKeys.theme) return
      if (event.newValue === 'light' || event.newValue === 'dark') {
        explicit.current = true
        setThemeState(event.newValue)
      }
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const value = useMemo(() => ({ theme, toggleTheme, setTheme }), [theme, toggleTheme, setTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used inside ThemeProvider')
  return context
}
