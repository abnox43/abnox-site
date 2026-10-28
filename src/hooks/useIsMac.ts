import { useState } from 'react'

/** Used only to render the right keyboard hint (⌘ K vs Ctrl K). */
export function useIsMac(): boolean {
  const [isMac] = useState(() => {
    if (typeof navigator === 'undefined') return false
    return /Mac|iPhone|iPad|iPod/i.test(navigator.userAgent)
  })
  return isMac
}
