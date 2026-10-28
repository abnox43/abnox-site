import { socialLinks } from '../../config/site'
import { interpolate, useI18n } from '../../i18n'
import { CopyButton } from '../ui/CopyButton'
import {
  ArrowUpRightIcon,
  GithubIcon,
  LockIcon,
  YoutubeIcon,
} from '../ui/Icons'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const cardKey = {
  github: { title: 'githubTitle', text: 'githubText' },
  youtube: { title: 'youtubeTitle', text: 'youtubeText' },
} as const

export function Contact() {
  const { messages } = useI18n()
  const t = messages.contact

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            kicker={t.kicker}
            title={t.title}
            intro={t.intro}
            headingId="contact-title"
          />
        </Reveal>

        <div className="contact__grid">
          {socialLinks.map((link, index) => {
            const key = cardKey[link.id]
            const openLabel = interpolate(t.open, { label: link.label })
            return (
              <Reveal key={link.id} delay={index * 80}>
                <article className={`contact-card contact-card--${link.id}`}>
                  <div className="contact-card__head">
                    <span className="contact-card__icon" aria-hidden>
                      {link.id === 'github' ? <GithubIcon size={22} /> : <YoutubeIcon size={22} />}
                    </span>
                    <span className="contact-card__label">{link.label}</span>
                  </div>
                  <h3>{t[key.title]}</h3>
                  <p>{t[key.text]}</p>
                  <p className="contact-card__handle" dir="ltr">
                    {link.handle}
                  </p>
                  <div className="contact-card__actions">
                    <a
                      className="button button--primary"
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${openLabel} (${messages.common.opensInNewTab})`}
                    >
                      {openLabel}
                      <ArrowUpRightIcon size={16} />
                    </a>
                    <CopyButton
                      value={link.url}
                      label={interpolate(t.copyLabel, { label: link.label })}
                    />
                  </div>
                </article>
              </Reveal>
            )
          })}

          <Reveal delay={160}>
            <article className="contact-card contact-card--note">
              <div className="contact-card__head">
                <span className="contact-card__icon" aria-hidden>
                  <LockIcon size={22} />
                </span>
                <span className="contact-card__label">{t.noEmailTitle}</span>
              </div>
              <h3>{t.noEmailTitle}</h3>
              <p>{t.noEmailText}</p>
              <p className="contact-card__fineprint">{t.footerNote}</p>
            </article>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="contact__reasons">
            <h3>{t.availabilityTitle}</h3>
            <ul>
              {t.reasons.map((reason, index) => (
                <li key={reason}>
                  <span className="contact__reason-index" aria-hidden>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
