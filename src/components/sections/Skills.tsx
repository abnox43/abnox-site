import { useI18n } from '../../i18n'
import { interests, skillGroups } from '../../data/skills'
import { CheckIcon } from '../ui/Icons'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Skills() {
  const { messages } = useI18n()
  const t = messages.skills

  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            kicker={t.kicker}
            title={t.title}
            intro={t.intro}
            headingId="skills-title"
          />
        </Reveal>

        <div className="skills__groups">
          {skillGroups.map((group, index) => {
            const copy = t.groups[group.id]
            return (
              <Reveal key={group.id} delay={(index % 3) * 70}>
                <article className={`skill-card skill-card--${group.id}`}>
                  <header className="skill-card__head">
                    <h3>{copy.name}</h3>
                    <span className="skill-card__note">{copy.note}</span>
                  </header>
                  <p className="skill-card__summary">{copy.summary}</p>
                  <ul className="chip-list" aria-label={copy.name}>
                    {group.items.map((item) => (
                      <li key={item}>
                        <span className="chip" dir="auto">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>

        <div className="skills__lower">
          <div className="interests">
            <Reveal>
              <h3 className="subheading" id="interests-title">
                {t.interestsTitle}
              </h3>
            </Reveal>
            <div className="interests__grid">
              {interests.map((id, index) => {
                const interest = t.interests[id]
                return (
                  <Reveal key={id} delay={(index % 3) * 60}>
                    <article className="interest-card">
                      <span className="interest-card__mark" aria-hidden>
                        +
                      </span>
                      <h4>{interest.title}</h4>
                      <p>{interest.text}</p>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>

          <Reveal delay={80}>
            <aside className="learning" aria-labelledby="learning-title">
              <h3 id="learning-title">{t.learningTitle}</h3>
              <ul>
                {t.learning.map((item) => (
                  <li key={item}>
                    <CheckIcon size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>

        <p className="skills__disclaimer">{t.disclaimer}</p>
      </div>
    </section>
  )
}
