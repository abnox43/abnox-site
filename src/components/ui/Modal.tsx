import { useEffect, useRef, type ReactNode, type RefObject } from 'react'
import { useI18n } from '../../i18n'
import { useScrollLock } from '../../hooks/useScrollLock'
import { CloseIcon } from './Icons'

type ModalProps = {
  open: boolean
  onClose: () => void
  labelledBy: string
  describedBy?: string
  className?: string
  panelClassName?: string
  initialFocusRef?: RefObject<HTMLElement | null>
  children: ReactNode
}

/**
 * A native <dialog> wrapper. showModal() gives us the focus trap, the top
 * layer and Escape for free; we only add backdrop dismissal and motion.
 */
export function Modal({
  open,
  onClose,
  labelledBy,
  describedBy,
  className,
  panelClassName,
  initialFocusRef,
  children,
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const { messages } = useI18n()
  useScrollLock(open)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open) {
      if (!dialog.open) {
        dialog.showModal()
        const target = initialFocusRef?.current
        if (target) window.requestAnimationFrame(() => target.focus())
      }
    } else if (dialog.open) {
      dialog.close()
    }
  }, [open, initialFocusRef])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const handleClose = () => onClose()
    const handleClick = (event: MouseEvent) => {
      if (event.target === dialog) onClose()
    }
    const focusableSelector =
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return
      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(focusableSelector),
      ).filter((element) => element.getClientRects().length > 0)
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement
      if (!dialog.contains(active)) {
        event.preventDefault()
        first.focus()
      } else if (event.shiftKey && active === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }
    dialog.addEventListener('close', handleClose)
    dialog.addEventListener('click', handleClick)
    dialog.addEventListener('keydown', handleKeyDown)
    return () => {
      dialog.removeEventListener('close', handleClose)
      dialog.removeEventListener('click', handleClick)
      dialog.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <dialog
      ref={dialogRef}
      className={`modal ${className ?? ''}`.trim()}
      aria-labelledby={labelledBy}
      aria-describedby={describedBy}
    >
      <div className={`modal__panel ${panelClassName ?? ''}`.trim()}>
        <button
          type="button"
          className="icon-button modal__close"
          onClick={onClose}
          aria-label={messages.common.closeDialog}
        >
          <CloseIcon />
        </button>
        {children}
      </div>
    </dialog>
  )
}
