import { useMemo, useRef, useState, type KeyboardEvent } from 'react'
import { projects, projectCategories, type ProjectCategory, type ProjectId } from '../../data/projects'
import { useI18n, interpolate } from '../../i18n'
import { matchesTokens, tokenize } from '../../utils/text'
import { CloseIcon, SearchIcon } from '../ui/Icons'
import { ProjectCard } from '../projects/ProjectCard'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

type Filter = ProjectCategory | 'all'

type ProjectsProps = {
  onOpenProject: (id: ProjectId) => void
}

export function Projects({ onOpenProject }: ProjectsProps) {
  const { messages } = useI18n()
  const t = messages.projects
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<Filter>('all')
  const searchRef = useRef<HTMLInputElement>(null)

  const filtered = useMemo(() => {
    const tokens = tokenize(query)
    return projects
      .filter((project) => {
        if (filter !== 'all' && !project.categories.includes(filter)) return false
        if (!tokens.length) return true
        const copy = t.items[project.id]
        const haystack = [
          project.name,
          copy.description,
          copy.details,
          copy.statusNote,
          project.tech.join(' '),
          project.categories.map((category) => t.categories[category]).join(' '),
          t.statuses[project.status],
          project.slogan ?? '',
        ].join('\n')
        return matchesTokens(haystack, tokens)
      })
      .sort((a, b) => a.index - b.index)
  }, [filter, query, t])

  const count = interpolate(t.count, { shown: filtered.length, total: projects.length })
  const hasQuery = query.trim().length > 0
  const hasFilters = hasQuery || filter !== 'all'

  const reset = () => {
    setQuery('')
    setFilter('all')
    window.requestAnimationFrame(() => searchRef.current?.focus())
  }

  const onQueryKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape' && query) {
      event.stopPropagation()
      setQuery('')
    }
  }

  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            kicker={t.kicker}
            title={t.title}
            intro={t.intro}
            headingId="projects-title"
          />
        </Reveal>

        <Reveal delay={60}>
          <div className="projects__toolbar">
            <div className="field-search">
              <label className="visually-hidden" htmlFor="project-search">
                {t.searchLabel}
              </label>
              <SearchIcon size={18} className="field-search__icon" />
              <input
                ref={searchRef}
                id="project-search"
                type="search"
                className="field-search__input"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={onQueryKeyDown}
                placeholder={t.searchPlaceholder}
                autoComplete="off"
              />
              {hasQuery ? (
                <button
                  type="button"
                  className="field-search__clear"
                  onClick={() => {
                    setQuery('')
                    searchRef.current?.focus()
                  }}
                  aria-label={t.clearSearch}
                >
                  <CloseIcon size={16} />
                </button>
              ) : null}
            </div>

            <div className="filter-group" role="group" aria-label={t.filtersLabel}>
              <button
                type="button"
                className={filter === 'all' ? 'filter-chip is-active' : 'filter-chip'}
                aria-pressed={filter === 'all'}
                onClick={() => setFilter('all')}
              >
                {t.all}
              </button>
              {projectCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={filter === category ? 'filter-chip is-active' : 'filter-chip'}
                  aria-pressed={filter === category}
                  onClick={() => setFilter(category)}
                >
                  {t.categories[category]}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <p className="projects__count" aria-live="polite">
          {count}
        </p>

        {filtered.length > 0 ? (
          <div className="projects__grid">
            {filtered.map((project, index) => (
              <Reveal key={project.id} delay={(index % 3) * 60}>
                <ProjectCard project={project} onOpenDetails={onOpenProject} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="empty-state" role="status">
            <span className="empty-state__icon" aria-hidden>
              <SearchIcon size={30} />
            </span>
            <h3>{t.noResultsTitle}</h3>
            <p>{t.noResultsText}</p>
            {hasFilters ? (
              <button type="button" className="button" onClick={reset}>
                {t.reset}
              </button>
            ) : (
              <p className="empty-state__muted">{t.emptyTitle}</p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
