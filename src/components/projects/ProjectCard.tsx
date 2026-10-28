import type { Project } from '../../data/projects'
import { useI18n } from '../../i18n'
import { CopyButton } from '../ui/CopyButton'
import { ArrowUpRightIcon, ExternalLinkIcon, InfoIcon } from '../ui/Icons'
import { ProjectArt } from './ProjectArt'
import { StatusBadge } from './StatusBadge'

type ProjectCardProps = {
  project: Project
  onOpenDetails: (id: Project['id']) => void
}

export function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  const { messages } = useI18n()
  const t = messages.projects
  const copy = t.items[project.id]
  const titleId = `project-${project.id}-title`

  return (
    <article
      className={`project-card project-card--${project.status}`}
      id={`project-${project.id}`}
      aria-labelledby={titleId}
      data-project-id={project.id}
    >
      <div className="project-card__media">
        <ProjectArt project={project} />
      </div>

      <div className="project-card__body">
        <div className="project-card__topline">
          <span className="project-card__index" aria-hidden>
            {String(project.index).padStart(2, '0')}
          </span>
          <StatusBadge status={project.status} />
        </div>

        <p className="project-card__categories">
          {project.categories.map((category) => t.categories[category]).join(' · ')}
        </p>
        <h3 id={titleId}>{project.name}</h3>
        {project.slogan ? <p className="project-card__slogan">{project.slogan}</p> : null}
        <p className="project-card__description">{copy.description}</p>

        <ul className="chip-list chip-list--small" aria-label={t.techLabel}>
          {project.tech.map((item) => (
            <li key={item}>
              <span className="chip" dir="auto">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div className="project-card__actions">
          <button
            type="button"
            className="button button--ghost project-card__details"
            onClick={() => onOpenDetails(project.id)}
            aria-haspopup="dialog"
            aria-label={`${t.details} — ${project.name}`}
          >
            {t.details}
            <ArrowUpRightIcon size={16} />
          </button>

          {project.repo ? (
            <div className="project-card__links">
              <a
                className="project-card__source"
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.source} — ${project.name} (${messages.common.opensInNewTab})`}
                title={t.openRepo}
              >
                <ExternalLinkIcon size={15} />
                <span>{t.source}</span>
              </a>
              <CopyButton
                compact
                value={project.repo}
                label={t.copyRepo}
                ariaLabel={t.copyRepo}
              />
            </div>
          ) : (
            <span className="project-card__no-source" title={t.noSourceText}>
              <InfoIcon size={14} />
              {t.noSource}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
