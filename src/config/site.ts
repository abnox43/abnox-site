/**
 * Everything personal lives here. Edit this file to change the identity,
 * contact links or privacy keys — no component needs to be touched.
 *
 * Nothing private is stored in this repository. `email` is deliberately null:
 * the contact section hides the email card when it is empty. Add a public
 * address only if you actually want it scraped.
 */
export const siteConfig = {
  name: 'ABNOX',
  handle: 'abnox',
  location: 'Morocco',
  role: 'student & self-taught developer',
  github: {
    label: 'GitHub',
    handle: '@abnox43',
    url: 'https://github.com/abnox43',
  },
  youtube: {
    label: 'YouTube',
    handle: '@abnox-n9l',
    url: 'https://www.youtube.com/@abnox-n9l',
  },
  email: null as string | null,
  /** Set this after deploying if you want a canonical URL in the README. */
  website: null as string | null,
} as const

export const storageKeys = {
  theme: 'abnox-theme',
  locale: 'abnox-locale',
  consent: 'abnox-consent',
} as const

export const consentVersion = 1

export type SocialLink = {
  id: 'github' | 'youtube'
  label: string
  handle: string
  url: string
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: siteConfig.github.label,
    handle: siteConfig.github.handle,
    url: siteConfig.github.url,
  },
  {
    id: 'youtube',
    label: siteConfig.youtube.label,
    handle: siteConfig.youtube.handle,
    url: siteConfig.youtube.url,
  },
]
