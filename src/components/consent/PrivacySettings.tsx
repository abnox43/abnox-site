import { useI18n } from '../../i18n'
import { useConsent } from '../../consent/ConsentProvider'
import { ArrowRightIcon, LockIcon, TrashIcon } from '../ui/Icons'
import { Modal } from '../ui/Modal'

export function PrivacySettings() {
  const { messages } = useI18n()
  const t = messages.privacy
  const { settingsOpen, closeSettings, clearPreferences, choice } = useConsent()

  return (
    <Modal
      open={settingsOpen}
      onClose={closeSettings}
      labelledBy="privacy-title"
      describedBy="privacy-intro"
      className="privacy-modal"
      panelClassName="privacy-panel"
    >
      <div className="privacy-panel__head">
        <span className="privacy-panel__icon" aria-hidden>
          <LockIcon size={22} />
        </span>
        <div>
          <p className="kicker">{t.policyLink}</p>
          <h2 id="privacy-title">{t.title}</h2>
        </div>
      </div>
      <p id="privacy-intro" className="privacy-panel__intro">
        {t.intro}
      </p>

      <section className="privacy-block" aria-labelledby="privacy-essential-title">
        <h3 id="privacy-essential-title">{t.essentialTitle}</h3>
        <p>{t.essentialText}</p>
        <ul className="privacy-list">
          {t.items.map((item) => (
            <li key={item.name}>
              <span className="privacy-list__name">{item.name}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="privacy-block" aria-labelledby="privacy-optional-title">
        <h3 id="privacy-optional-title">{t.optionalTitle}</h3>
        <p>{t.optionalText}</p>
        <p className="privacy-none">{t.none}</p>
      </section>

      <section className="privacy-block" aria-labelledby="privacy-nottracking-title">
        <h3 id="privacy-nottracking-title">{t.noTrackingTitle}</h3>
        <ul className="privacy-not-list">
          {t.noTracking.map((item) => (
            <li key={item}>
              <span aria-hidden>—</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="privacy-block privacy-block--destructive" aria-labelledby="privacy-clear-title">
        <div>
          <h3 id="privacy-clear-title">{t.clearTitle}</h3>
          <p>{t.clearText}</p>
        </div>
        <button type="button" className="button button--danger" onClick={clearPreferences}>
          <TrashIcon size={16} />
          {t.clear}
        </button>
      </section>

      <p className="privacy-panel__choice">
        <span>{t.currentChoice}</span>
        <strong>{choice === 'accepted' ? t.accepted : choice === 'rejected' ? t.rejected : t.notChosen}</strong>
      </p>

      <p className="privacy-panel__saved">{t.savedNote}</p>

      <div className="privacy-panel__footer">
        <button type="button" className="button" onClick={closeSettings}>
          {t.close}
          <ArrowRightIcon size={16} />
        </button>
      </div>
    </Modal>
  )
}
