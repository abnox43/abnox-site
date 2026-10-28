import type { Project, ProjectId } from '../../data/projects'
import { useI18n } from '../../i18n'
import { CopyButton } from '../ui/CopyButton'
import { ExternalLinkIcon, InfoIcon } from '../ui/Icons'
import { Modal } from '../ui/Modal'
import { ProjectArt } from './ProjectArt'
import { StatusBadge } from './StatusBadge'

type ProjectDetailsProps = {
  project: Project | null
  onClose: () => void
}

export function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  const { messages } = useI18n()
  const t = messages.projects
  const copy = project ? t.items[project.id] : null

  return (
    <Modal
      open={Boolean(project)}
      onClose={onClose}
      labelledBy="project-dialog-title"
      describedBy="project-dialog-desc"
      className="project-modal"
      panelClassName="project-dialog-panel"
    >
      {project && copy ? (
        <div className="project-dialog">
          <div className="project-dialog__art">
            <ProjectArt project={project} variant="detail" />
          </div>
          <div className="project-dialog__body">
            <div className="project-dialog__meta">
              <StatusBadge status={project.status} />
              <span className="mono-tag" dir="ltr">
                #{String(project.index).padStart(2, '0')}
              </span>
              <span className="project-dialog__cats">
                {project.categories.map((category) => t.categories[category]).join(' · ')}
              </span>
            </div>

            <h2 id="project-dialog-title">{project.name}</h2>
            {project.slogan ? <p className="project-dialog__slogan">{project.slogan}</p> : null}
            <p id="project-dialog-desc" className="project-dialog__lead">
              {copy.description}
            </p>
            <p className="project-dialog__text">{copy.details}</p>

            <h3>{t.techLabel}</h3>
            <ul className="chip-list" aria-label={t.techLabel}>
              {project.tech.map((item) => (
                <li key={item}>
                  <span className="chip" dir="auto">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="project-dialog__status">
              <InfoIcon size={18} />
              <div>
                <p className="project-dialog__status-title">
                  {t.statusLabel}: {t.statuses[project.status]}
                </p>
                <p>{copy.statusNote}</p>
              </div>
            </div>

            {project.repo ? (
              <div className="project-dialog__links">
                <h3>{t.repoLabel}</h3>
                <p className="project-dialog__url" dir="ltr">
                  <bdi>{project.repo}</bdi>
                </p>
                <div className="project-dialog__buttons">
                  <a
                    className="button button--primary"
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.openRepo}
                    <ExternalLinkIcon size={16} />
                  </a>
                  <CopyButton value={project.repo} label={t.copyRepo} ariaLabel={t.copyRepo} />
                </div>
              </div>
            ) : (
              <div className="project-dialog__no-source">
                <h3>{t.noSourceTitle}</h3>
                <p>{t.noSourceText}</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <span id="project-dialog-title" className="visually-hidden">
          {t.details}
        </span>
      )}
    </Modal>
  )
}

export type { ProjectId }
