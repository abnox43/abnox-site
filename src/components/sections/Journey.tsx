import { useI18n } from '../../i18n'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Journey() {
  const { messages } = useI18n()
  const t = messages.journey

  return (
    <section id="journey" className="section journey" aria-labelledby="journey-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            kicker={t.kicker}
            title={t.title}
            intro={t.intro}
            headingId="journey-title"
          />
        </Reveal>

        <Reveal delay={60}>
          <ol className="timeline">
            {t.steps.map((step, index) => (
              <li className="timeline__item" key={step.title}>
                <span className="timeline__marker" aria-hidden>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="timeline__content">
                  <p className="timeline__tag">{step.tag}</p>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="journey__footer">
          <Reveal>
            <aside className="journey__now">
              <p className="kicker">{t.nowTitle}</p>
              <p>{t.nowText}</p>
            </aside>
          </Reveal>
          <Reveal delay={80}>
            <blockquote className="journey__quote">
              <p>{t.quote}</p>
              <footer>— {t.quoteAuthor}</footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
