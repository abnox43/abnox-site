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
import { en, type Messages } from './locales/en'
import { fr } from './locales/fr'
import { ar } from './locales/ar'
import { darija } from './locales/darija'
import { storageKeys } from '../config/site'

export type LocaleCode = 'en' | 'fr' | 'ar' | 'darija'
export type Direction = 'ltr' | 'rtl'

export const localeMeta: Record<
  LocaleCode,
  { label: string; nativeLabel: string; lang: string; dir: Direction; short: string }
> = {
  en: { label: 'English', nativeLabel: 'English', lang: 'en', dir: 'ltr', short: 'EN' },
  fr: { label: 'French', nativeLabel: 'Français', lang: 'fr', dir: 'ltr', short: 'FR' },
  ar: { label: 'Arabic', nativeLabel: 'العربية', lang: 'ar', dir: 'rtl', short: 'AR' },
  darija: {
    label: 'Moroccan Darija',
    nativeLabel: 'Darija',
    lang: 'ar-MA-Latn',
    dir: 'ltr',
    short: 'DA',
  },
}

export const localeOrder: LocaleCode[] = ['en', 'fr', 'ar', 'darija']

const messagesByLocale: Record<LocaleCode, Messages> = {
  en,
  fr,
  ar,
  darija,
}

export function isLocale(value: unknown): value is LocaleCode {
  return typeof value === 'string' && value in messagesByLocale
}

function detectLocale(): LocaleCode {
  if (typeof document !== 'undefined') {
    const fromDocument = document.documentElement.dataset.locale
    if (isLocale(fromDocument)) return fromDocument
  }
  try {
    const stored = localStorage.getItem(storageKeys.locale)
    if (isLocale(stored)) return stored
  } catch {
    /* Storage can be unavailable in private modes. */
  }
  if (typeof navigator !== 'undefined') {
    const language = (navigator.languages?.[0] ?? navigator.language ?? 'en').toLowerCase()
    if (language.startsWith('fr')) return 'fr'
    if (language.startsWith('ar')) return 'ar'
  }
  return 'en'
}

function hasStoredLocale(): boolean {
  try {
    return localStorage.getItem(storageKeys.locale) !== null
  } catch {
    return false
  }
}

type I18nContextValue = {
  locale: LocaleCode
  setLocale: (locale: LocaleCode) => void
  messages: Messages
  dir: Direction
  isRtl: boolean
  lang: string
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleCode>(detectLocale)
  const explicit = useRef(hasStoredLocale())

  const setLocale = useCallback((next: LocaleCode) => {
    explicit.current = true
    setLocaleState(next)
  }, [])

  useEffect(() => {
    const meta = localeMeta[locale]
    const messages = messagesByLocale[locale]
    const root = document.documentElement
    root.lang = meta.lang
    root.dir = meta.dir
    root.dataset.locale = locale
    document.title = messages.meta.title

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (description) description.content = messages.meta.description
    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')
    if (ogTitle) ogTitle.content = messages.meta.title
    const ogDescription = document.querySelector<HTMLMetaElement>(
      'meta[property="og:description"]',
    )
    if (ogDescription) ogDescription.content = messages.meta.description

    try {
      if (explicit.current) localStorage.setItem(storageKeys.locale, locale)
    } catch {
      /* Nothing to do — the language still works for this visit. */
    }
  }, [locale])

  // Keep two tabs of the same site in sync without reloading.
  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key === storageKeys.locale && isLocale(event.newValue)) {
        setLocaleState(event.newValue)
      }
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const value = useMemo<I18nContextValue>(() => {
    const meta = localeMeta[locale]
    return {
      locale,
      setLocale,
      messages: messagesByLocale[locale],
      dir: meta.dir,
      isRtl: meta.dir === 'rtl',
      lang: meta.lang,
    }
  }, [locale, setLocale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useI18n must be used inside I18nProvider')
  return context
}

export function interpolate(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    key in values ? String(values[key]) : `{${key}}`,
  )
}
