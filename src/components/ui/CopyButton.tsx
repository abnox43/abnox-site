import { interpolate, useI18n } from '../../i18n'
import { useCopy } from '../../hooks/useCopy'
import { AlertIcon, CheckIcon, CopyIcon } from './Icons'

type CopyButtonProps = {
  value: string
  /** Used for the accessible name, tooltip and (in text mode) the visible label. */
  label: string
  ariaLabel?: string
  compact?: boolean
  className?: string
}

/**
 * Clipboard button with a visible status, an aria-live announcement, and a
 * legacy fallback for browsers that gate navigator.clipboard.
 */
export function CopyButton({
  value,
  label,
  ariaLabel,
  compact = false,
  className,
}: CopyButtonProps) {
  const { messages } = useI18n()
  const { status, copy } = useCopy()
  const accessibleName =
    ariaLabel ?? interpolate(messages.common.copyAria, { label: label.toLowerCase() })
  const statusText =
    status === 'copied'
      ? messages.common.copied
      : status === 'error'
        ? messages.common.copyError
        : ''

  return (
    <button
      type="button"
      className={`copy-button ${compact ? 'copy-button--compact' : ''} ${
        status !== 'idle' ? `is-${status}` : ''
      } ${className ?? ''}`.trim()}
      onClick={() => void copy(value)}
      aria-label={accessibleName}
      title={accessibleName}
      data-copy-status={status}
    >
      <span className="copy-button__icon" aria-hidden>
        {status === 'copied' ? <CheckIcon size={16} /> : status === 'error' ? <AlertIcon size={16} /> : <CopyIcon size={16} />}
      </span>
      <span className={compact ? 'visually-hidden' : 'copy-button__label'}>
        {status === 'idle' ? label : statusText}
      </span>
      {compact && status !== 'idle' ? (
        <span className="copy-button__bubble" aria-hidden>
          {statusText}
        </span>
      ) : null}
      <span className="visually-hidden" role="status" aria-live="polite">
        {statusText}
      </span>
    </button>
  )
}
