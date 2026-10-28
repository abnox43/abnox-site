import { useTheme } from '../../theme/ThemeProvider'
import { useI18n } from '../../i18n'
import { MoonIcon, SunIcon } from './Icons'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { messages } = useI18n()
  const label =
    theme === 'dark' ? messages.nav.themeToLight : messages.nav.themeToDark

  return (
    <button
      type="button"
      className="icon-button theme-toggle"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      data-theme-state={theme}
    >
      <span className="theme-toggle__track" aria-hidden>
        <SunIcon size={17} className="theme-toggle__sun" />
        <MoonIcon size={16} className="theme-toggle__moon" />
        <span className="theme-toggle__knob" />
      </span>
    </button>
  )
}
