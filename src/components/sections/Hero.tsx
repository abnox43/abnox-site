import type { CSSProperties, MouseEvent } from 'react'
import { useI18n } from '../../i18n'
import { scrollToSection } from '../../utils/navigate'
import { ArrowDownIcon, ArrowRightIcon } from '../ui/Icons'

const barcodeBars = [
  2, 1, 3, 1, 2, 4, 1, 1, 3, 2, 1, 4, 2, 1, 1, 3, 1, 2, 4, 1, 2, 1, 3, 2, 1, 1, 4, 2,
  3, 1, 2, 1,
]

export function Hero() {
  const { messages } = useI18n()
  const t = messages.hero

  const go = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()
    scrollToSection(id)
  }

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <span className="hero__ring" aria-hidden />
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            <span className="pulse-dot" aria-hidden />
            {t.eyebrow}
          </p>
          <h1 id="hero-title" className="hero__title">
            {t.titleLead} <em>{t.titleEmphasis}</em> {t.titleTail}
          </h1>
          <p className="hero__intro">{t.intro}</p>
          <div className="hero__actions">
            <a
              className="button button--primary"
              href="#projects"
              onClick={(event) => go(event, 'projects')}
            >
              {t.primaryCta}
              <ArrowRightIcon size={18} />
            </a>
            <a className="button" href="#about" onClick={(event) => go(event, 'about')}>
              {t.secondaryCta}
              <ArrowDownIcon size={17} />
            </a>
          </div>
          <p className="hero__availability">
            <span className="hero__availability-mark" aria-hidden />
            {t.availability}
          </p>
        </div>

        <div className="hero__visual">
          <figure className="terminal">
            <figcaption id="terminal-caption" className="visually-hidden">
              {t.terminal.windowLabel}
            </figcaption>
            <div className="terminal__bar">
              <span className="terminal__dots" aria-hidden>
                <i />
                <i />
                <i />
              </span>
              <span className="terminal__title" dir="ltr">
                {t.terminal.title}
              </span>
              <span className="terminal__tag" aria-hidden>
                TTY 01
              </span>
            </div>
            <div
              className="terminal__body"
              dir="ltr"
              role="group"
              aria-labelledby="terminal-caption"
            >
              {t.terminal.lines.map((line, index) => (
                <div
                  className="terminal__line"
                  style={{ '--line-index': index } as CSSProperties}
                  key={line.command}
                >
                  <p className="terminal__command">
                    <span className="terminal__prompt" aria-hidden>
                      {t.terminal.prompt}
                    </span>
                    <span className="terminal__command-text">{line.command}</span>
                  </p>
                  <p className="terminal__output" dir="auto">
                    {line.output}
                  </p>
                </div>
              ))}
              <p className="terminal__cursor-line" aria-hidden>
                <span className="terminal__prompt">{t.terminal.prompt}</span>
                <span className="terminal__cursor" />
              </p>
            </div>
          </figure>

          <div className="hero__meta">
            <dl className="hero__specs" aria-label={t.specs.label}>
              <div>
                <dt>{t.specs.base}</dt>
                <dd>{t.specs.baseValue}</dd>
              </div>
              <div>
                <dt>{t.specs.mode}</dt>
                <dd>{t.specs.modeValue}</dd>
              </div>
              <div>
                <dt>{t.specs.status}</dt>
                <dd>
                  <span className="pulse-dot" aria-hidden />
                  {t.specs.statusValue}
                </dd>
              </div>
            </dl>
            <div className="hero__barcode" role="img" aria-label={t.barcodeLabel}>
              <svg viewBox="0 0 132 30" aria-hidden focusable="false">
                {barcodeBars.map((width, index) => (
                  <rect
                    key={`${width}-${index}`}
                    x={barcodeBars.slice(0, index).reduce((sum, value) => sum + value + 1, 6)}
                    y={index % 3 === 0 ? 4 : 7}
                    width={width}
                    height={index % 3 === 0 ? 22 : 16}
                    fill="currentColor"
                  />
                ))}
              </svg>
              <span dir="ltr">ABNOX · 001</span>
            </div>
          </div>

          <p className="hero__scroll-hint" aria-hidden>
            <span>{t.scrollHint}</span>
            <span className="hero__scroll-line" />
          </p>
        </div>
      </div>
    </section>
  )
}
