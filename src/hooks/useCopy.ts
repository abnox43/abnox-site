import { useCallback, useEffect, useRef, useState } from 'react'

export type CopyStatus = 'idle' | 'copied' | 'error'

function fallbackCopy(text: string): boolean {
  const area = document.createElement('textarea')
  area.value = text
  area.setAttribute('readonly', '')
  area.style.position = 'fixed'
  area.style.top = '0'
  area.style.left = '-9999px'
  area.style.opacity = '0'
  document.body.appendChild(area)
  area.select()
  area.setSelectionRange(0, area.value.length)
  let ok = false
  try {
    ok = document.execCommand('copy')
  } catch {
    ok = false
  }
  document.body.removeChild(area)
  return ok
}

/** Clipboard with a legacy fallback and a visible, announced status. */
export function useCopy(resetAfter = 2200) {
  const [status, setStatus] = useState<CopyStatus>('idle')
  const timer = useRef<number | null>(null)

  const clearTimer = useCallback(() => {
    if (timer.current !== null) {
      window.clearTimeout(timer.current)
      timer.current = null
    }
  }, [])

  const copy = useCallback(
    async (text: string) => {
      clearTimer()
      setStatus('idle')
      try {
        if (!navigator.clipboard?.writeText) {
          if (!fallbackCopy(text)) throw new Error('Clipboard unavailable')
        } else {
          await navigator.clipboard.writeText(text)
        }
        setStatus('copied')
        timer.current = window.setTimeout(() => setStatus('idle'), resetAfter)
      } catch {
        setStatus('error')
        timer.current = window.setTimeout(() => setStatus('idle'), resetAfter + 1200)
      }
    },
    [clearTimer, resetAfter],
  )

  useEffect(() => clearTimer, [clearTimer])

  return { status, copy }
}
