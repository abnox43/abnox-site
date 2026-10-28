import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react'
import { searchableSections, type SectionId } from '../../data/navigation'
import { projects, type ProjectId } from '../../data/projects'
import { interests, skillGroups } from '../../data/skills'
import type { Messages } from '../../i18n/locales/en'
import { interpolate, useI18n } from '../../i18n'
import { normalizeText, tokenize } from '../../utils/text'
import { scrollToSection } from '../../utils/navigate'
import { useIsMac } from '../../hooks/useIsMac'
import { ArrowRightIcon, SearchIcon } from '../ui/Icons'
import { Modal } from '../ui/Modal'

type SearchEntryType = 'section' | 'project' | 'interest'

type SearchEntry = {
  key: string
  type: SearchEntryType
  title: string
  summary: string
  keywords: string
  section: SectionId
  projectId?: ProjectId
  order: number
}

type RankedEntry = SearchEntry & { score: number }

function buildIndex(messages: Messages): SearchEntry[] {
  const sectionSummary: Record<SectionId, string> = {
    home: messages.hero.intro,
    about: messages.about.lead,
    skills: messages.skills.intro,
    projects: messages.projects.intro,
    moments: messages.moments.intro,
    journey: messages.journey.intro,
    contact: messages.contact.intro,
  }
  const sectionKeywords: Record<SectionId, string[]> = {
    home: [
      messages.hero.eyebrow,
      messages.hero.availability,
      ...messages.hero.terminal.lines.flatMap((line) => [line.command, line.output]),
    ],
    about: [
      messages.about.p1,
      messages.about.p2,
      ...messages.about.facts.flatMap((fact) => [fact.label, fact.value]),
      ...messages.about.values.flatMap((value) => [value.title, value.text]),
    ],
    skills: [
      ...skillGroups.flatMap((group) => [
        messages.skills.groups[group.id].name,
        messages.skills.groups[group.id].summary,
        ...group.items,
      ]),
      ...interests.flatMap((id) => [
        messages.skills.interests[id].title,
        messages.skills.interests[id].text,
      ]),
      ...messages.skills.learning,
      messages.skills.disclaimer,
    ],
    projects: [
      messages.projects.intro,
      messages.projects.searchPlaceholder,
      ...projects.flatMap((project) => (project.slogan ? [project.slogan] : [])),
    ],
    moments: [
      ...messages.moments.items.flatMap((item) => [item.caption, item.alt]),
      messages.moments.intro,
    ],
    journey: [
      ...messages.journey.steps.flatMap((step) => [step.tag, step.title, step.text]),
      messages.journey.nowText,
      messages.journey.quote,
    ],
    contact: [
      messages.contact.githubTitle,
      messages.contact.githubText,
      messages.contact.youtubeTitle,
      messages.contact.youtubeText,
      ...messages.contact.reasons,
      messages.contact.noEmailText,
    ],
  }

  const sections = searchableSections.map<SearchEntry>((id, order) => ({
    key: `section-${id}`,
    type: 'section',
    title: messages.nav[id],
    summary: sectionSummary[id],
    keywords: sectionKeywords[id].join(' '),
    section: id,
    order,
  }))

  const projectEntries = projects.map<SearchEntry>((project, order) => {
    const copy = messages.projects.items[project.id]
    return {
      key: `project-${project.id}`,
      type: 'project',
      title: project.name,
      summary: copy.description,
      keywords: [
        copy.details,
        copy.statusNote,
        project.tech.join(' '),
        project.categories
          .map((category) => messages.projects.categories[category])
          .join(' '),
        messages.projects.statuses[project.status],
        project.slogan ?? '',
      ].join(' '),
      section: 'projects',
      projectId: project.id,
      order: 100 + order,
    }
  })

  const interestEntries = interests.map<SearchEntry>((id, order) => ({
    key: `interest-${id}`,
    type: 'interest',
    title: messages.skills.interests[id].title,
    summary: messages.skills.interests[id].text,
    keywords: messages.skills.interests[id].title,
    section: 'skills',
    order: 200 + order,
  }))

  return [...sections, ...projectEntries, ...interestEntries]
}

function rankEntries(index: SearchEntry[], query: string): RankedEntry[] {
  const tokens = tokenize(query)
  if (!tokens.length) return []
  const phrase = normalizeText(query)

  const ranked: RankedEntry[] = []
  for (const entry of index) {
    const title = normalizeText(entry.title)
    const summary = normalizeText(entry.summary)
    const keywords = normalizeText(entry.keywords)
    const haystack = `${title} ${summary} ${keywords}`
    if (!tokens.every((token) => haystack.includes(token))) continue

    let score = 0
    if (title === phrase) score += 140
    else if (title.startsWith(phrase)) score += 100
    else if (title.includes(phrase)) score += 70
    if (keywords.includes(phrase)) score += 34
    if (summary.includes(phrase)) score += 26
    for (const token of tokens) {
      if (title.includes(token)) score += 10
      if (keywords.includes(token)) score += 4
      if (summary.includes(token)) score += 3
    }
    score += entry.type === 'project' ? 9 : entry.type === 'section' ? 5 : 2
    ranked.push({ ...entry, score })
  }

  return ranked.sort((a, b) => b.score - a.score || a.order - b.order)
}

type SiteSearchProps = {
  open: boolean
  onClose: () => void
  onOpenProject: (id: ProjectId) => void
}

export function SiteSearch({ open, onClose, onOpenProject }: SiteSearchProps) {
  const { messages } = useI18n()
  const t = messages.search
  const isMac = useIsMac()
  const shortcut = isMac ? messages.common.shortcutMac : messages.common.shortcut
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const index = useMemo(() => buildIndex(messages), [messages])
  const results = useMemo(() => rankEntries(index, query), [index, query])
  const hasQuery = query.trim().length > 0
  const count = results.length === 1 ? t.countOne : interpolate(t.countMany, { count: results.length })

  useEffect(() => {
    if (!open) return
    setQuery('')
    setActiveIndex(0)
  }, [open])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  useEffect(() => {
    if (activeIndex < 0 || activeIndex >= results.length) return
    const node = document.getElementById(`search-option-${activeIndex}`)
    node?.scrollIntoView({ block: 'nearest' })
  }, [activeIndex, results.length])

  const typeLabel: Record<SearchEntryType, string> = {
    section: t.typeSection,
    project: t.typeProject,
    interest: t.typeInterest,
  }

  const goToSection = (id: SectionId) => {
    onClose()
    window.setTimeout(() => scrollToSection(id), 100)
  }

  const select = (entry: SearchEntry) => {
    if (entry.type === 'project' && entry.projectId) {
      const projectId = entry.projectId
      onClose()
      window.setTimeout(() => onOpenProject(projectId), 100)
      return
    }
    goToSection(entry.section)
  }

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      if (!results.length) return
      event.preventDefault()
      setActiveIndex((current) => (current + 1) % results.length)
      return
    }
    if (event.key === 'ArrowUp') {
      if (!results.length) return
      event.preventDefault()
      setActiveIndex((current) => (current - 1 + results.length) % results.length)
      return
    }
    if (event.key === 'Enter') {
      if (!results.length) return
      event.preventDefault()
      const entry = results[Math.min(Math.max(activeIndex, 0), results.length - 1)]
      if (entry) select(entry)
    }
  }

  const useSuggestion = (suggestion: string) => {
    setQuery(suggestion)
    window.requestAnimationFrame(() => inputRef.current?.focus())
  }

  const activeEntry = results[activeIndex]

  return (
    <Modal
      open={open}
      onClose={onClose}
      labelledBy="site-search-title"
      describedBy="site-search-hint"
      className="search-modal"
      panelClassName="search-panel"
      initialFocusRef={inputRef}
    >
      <div className="search-panel__head">
        <h2 id="site-search-title">{t.title}</h2>
      </div>

      <div className="search-field">
        <SearchIcon size={20} className="search-field__icon" />
        <label className="visually-hidden" htmlFor="site-search-input">
          {t.label}
        </label>
        <input
          ref={inputRef}
          id="site-search-input"
          type="text"
          className="search-field__input"
          role="combobox"
          aria-expanded={results.length > 0}
          aria-controls={results.length > 0 ? 'site-search-results' : undefined}
          aria-autocomplete="list"
          aria-activedescendant={
            activeEntry ? `search-option-${activeIndex}` : undefined
          }
          aria-describedby="site-search-hint"
          placeholder={t.placeholder}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={onKeyDown}
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
        />
        {hasQuery ? (
          <button
            type="button"
            className="search-field__clear"
            onClick={() => {
              setQuery('')
              inputRef.current?.focus()
            }}
            aria-label={t.clear}
          >
            <span aria-hidden>×</span>
          </button>
        ) : null}
      </div>
      <p id="site-search-hint" className="search-panel__hint">
        {t.hint}
      </p>

      {hasQuery ? (
        <>
          <p className="search-panel__summary" aria-live="polite">
            {results.length > 0 ? count : t.noResultsTitle}
          </p>
          {results.length > 0 ? (
            <ul
              id="site-search-results"
              className="search-results"
              role="listbox"
              aria-label={t.resultsLabel}
            >
              {results.map((entry, index) => (
                <li key={entry.key} role="none">
                  <button
                    type="button"
                    role="option"
                    id={`search-option-${index}`}
                    className={`search-result ${index === activeIndex ? 'is-active' : ''}`.trim()}
                    aria-selected={index === activeIndex}
                    tabIndex={-1}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => select(entry)}
                  >
                    <span className="search-result__type">{typeLabel[entry.type]}</span>
                    <span className="search-result__body">
                      <span className="search-result__title">{entry.title}</span>
                      <span className="search-result__text">{entry.summary}</span>
                    </span>
                    <ArrowRightIcon size={17} className="search-result__arrow" />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="search-empty" role="status">
              <span className="search-empty__icon" aria-hidden>
                <SearchIcon size={26} />
              </span>
              <h3>{t.noResultsTitle}</h3>
              <p>{t.noResultsText}</p>
              <div className="search-suggestions">
                {t.suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    className="search-suggestion"
                    onClick={() => useSuggestion(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="search-start">
          <div className="search-start__text">
            <h3>{t.emptyTitle}</h3>
            <p>{t.emptyText}</p>
          </div>
          <div>
            <p className="search-start__label">{t.suggestionsTitle}</p>
            <div className="search-suggestions">
              {t.suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  className="search-suggestion"
                  onClick={() => useSuggestion(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="search-start__label">{t.quickLinks}</p>
            <div className="search-quicklinks">
              {searchableSections.map((id) => (
                <button
                  key={id}
                  type="button"
                  className="search-quicklink"
                  onClick={() => goToSection(id)}
                >
                  <span>{messages.nav[id]}</span>
                  <ArrowRightIcon size={14} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <footer className="search-panel__footer">
        <span className="search-keys" aria-hidden>
          <kbd>↑</kbd>
          <kbd>↓</kbd>
          <kbd>↵</kbd>
          <kbd>{t.esc}</kbd>
        </span>
        <span className="search-shortcut-hint">
          {interpolate(t.shortcutHint, { shortcut })}
        </span>
      </footer>
    </Modal>
  )
}
