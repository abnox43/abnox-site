import { localeMeta, localeOrder, useI18n, type LocaleCode } from '../../i18n'
import { ChevronDownIcon, GlobeIcon } from './Icons'

type LanguageSelectorProps = {
  className?: string
  id?: string
}

/** A native select: keyboard support, screen readers and mobile pickers free. */
export function LanguageSelector({ className, id }: LanguageSelectorProps) {
  const { locale, setLocale, messages } = useI18n()

  return (
    <div className={`select ${className ?? ''}`.trim()}>
      <GlobeIcon size={16} className="select__icon" />
      <label className="visually-hidden" htmlFor={id ?? 'language-select'}>
        {messages.common.language}
      </label>
      <select
        id={id ?? 'language-select'}
        className="select__input"
        value={locale}
        onChange={(event) => setLocale(event.target.value as LocaleCode)}
      >
        {localeOrder.map((code) => (
          <option key={code} value={code} lang={localeMeta[code].lang}>
            {localeMeta[code].nativeLabel} ({localeMeta[code].short})
          </option>
        ))}
      </select>
      <ChevronDownIcon size={14} className="select__chevron" />
    </div>
  )
}
