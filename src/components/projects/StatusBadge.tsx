import type { ProjectStatus } from '../../data/projects'
import { useI18n } from '../../i18n'

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const { messages } = useI18n()
  return (
    <span className={`status status--${status}`}>
      <span className="status__dot" aria-hidden />
      <span>{messages.projects.statuses[status]}</span>
    </span>
  )
}
