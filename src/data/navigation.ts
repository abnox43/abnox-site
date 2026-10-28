export type SectionId =
  | 'home'
  | 'about'
  | 'skills'
  | 'projects'
  | 'moments'
  | 'journey'
  | 'contact'

export type NavItem = {
  id: SectionId
  /** Keys into the `nav` object of the locale messages. */
  key: SectionId
}

export const navItems: NavItem[] = [
  { id: 'about', key: 'about' },
  { id: 'skills', key: 'skills' },
  { id: 'projects', key: 'projects' },
  { id: 'moments', key: 'moments' },
  { id: 'journey', key: 'journey' },
  { id: 'contact', key: 'contact' },
]

export const searchableSections: SectionId[] = [
  'home',
  'about',
  'skills',
  'projects',
  'moments',
  'journey',
  'contact',
]
