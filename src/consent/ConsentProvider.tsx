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
import { consentVersion, storageKeys } from '../config/site'

export type ConsentChoice = 'accepted' | 'rejected'

type ConsentContextValue = {
  choice: ConsentChoice | null
  saveChoice: (choice: ConsentChoice) => void
  clearPreferences: () => void
  settingsOpen: boolean
  openSettings: () => void
  closeSettings: () => void
  justSaved: boolean
}

const ConsentContext = createContext<ConsentContextValue | null>(null)

function readConsent(): ConsentChoice | null {
  try {
    const raw = localStorage.getItem(storageKeys.consent)
    if (!raw) return null
    const parsed: unknown = JSON.parse(raw)
    if (
      typeof parsed === 'object' &&
      parsed !== null &&
      'version' in parsed &&
      'choice' in parsed &&
      (parsed as { version: unknown }).version === consentVersion &&
      ((parsed as { choice: unknown }).choice === 'accepted' ||
        (parsed as { choice: unknown }).choice === 'rejected')
    ) {
      return (parsed as { choice: ConsentChoice }).choice
    }
    return null
  } catch {
    return null
  }
}

/**
 * Honest consent: the site has no tracking, so Accept and Reject both store
 * the same essential preference. The choice is still recorded so the banner
 * leaves people alone and the decision remains visible in privacy settings.
 */
export function ConsentProvider({ children }: { children: ReactNode }) {
  const [choice, setChoice] = useState<ConsentChoice | null>(readConsent)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [justSaved, setJustSaved] = useState(false)
  const timer = useRef<number | null>(null)

  const clearTimer = useCallback(() => {
    if (timer.current !== null) {
      window.clearTimeout(timer.current)
      timer.current = null
    }
  }, [])

  const saveChoice = useCallback(
    (next: ConsentChoice) => {
      setChoice(next)
      setJustSaved(true)
      clearTimer()
      timer.current = window.setTimeout(() => setJustSaved(false), 4200)
      try {
        localStorage.setItem(
          storageKeys.consent,
          JSON.stringify({
            version: consentVersion,
            choice: next,
            savedAt: new Date().toISOString(),
          }),
        )
      } catch {
        /* The choice still applies for this visit. */
      }
    },
    [clearTimer],
  )

  const clearPreferences = useCallback(() => {
    try {
      localStorage.removeItem(storageKeys.theme)
      localStorage.removeItem(storageKeys.locale)
      localStorage.removeItem(storageKeys.consent)
    } catch {
      /* Reload anyway; the site will fall back to system defaults. */
    }
    window.location.reload()
  }, [])

  const openSettings = useCallback(() => setSettingsOpen(true), [])
  const closeSettings = useCallback(() => setSettingsOpen(false), [])

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key === storageKeys.consent) {
        setChoice(readConsent())
      }
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  useEffect(() => clearTimer, [clearTimer])

  const value = useMemo<ConsentContextValue>(
    () => ({
      choice,
      saveChoice,
      clearPreferences,
      settingsOpen,
      openSettings,
      closeSettings,
      justSaved,
    }),
    [choice, saveChoice, clearPreferences, settingsOpen, openSettings, closeSettings, justSaved],
  )

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
}

export function useConsent(): ConsentContextValue {
  const context = useContext(ConsentContext)
  if (!context) throw new Error('useConsent must be used inside ConsentProvider')
  return context
}
