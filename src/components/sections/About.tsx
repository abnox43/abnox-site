import { useI18n } from '../../i18n'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  const { messages } = useI18n()
  const t = messages.about

  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            kicker={t.kicker}
            title={t.title}
            intro={t.lead}
            headingId="about-title"
          />
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__story">
            <p className="about__paragraph">{t.p1}</p>
            <p className="about__paragraph">{t.p2}</p>
            <p className="about__signature" aria-hidden>
              <span className="about__signature-line" />
              ABNOX
            </p>
          </Reveal>

          <Reveal delay={90}>
            <aside className="about__facts" aria-labelledby="about-facts-title">
              <div className="about__facts-head">
                <h3 id="about-facts-title">{t.factsTitle}</h3>
                <span className="mono-tag" dir="ltr">
                  ID / 001
                </span>
              </div>
              <dl>
                {t.facts.map((fact) => (
                  <div className="about__fact" key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </Reveal>
        </div>

        <div className="about__values">
          <Reveal>
            <h3 className="subheading" id="about-values-title">
              {t.valuesTitle}
            </h3>
          </Reveal>
          <div className="values-grid">
            {t.values.map((value, index) => (
              <Reveal key={value.title} delay={index * 70}>
                <article className="value-card">
                  <span className="value-card__num" aria-hidden>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h4>{value.title}</h4>
                  <p>{value.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
