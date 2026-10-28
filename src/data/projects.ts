export type ProjectStatus = 'released' | 'active' | 'experimental' | 'planned'

export type ProjectCategory = 'linux' | 'rust' | 'robotics' | 'hardware' | 'tools'

export type ProjectVisual = 'player' | 'robot' | 'deck' | 'book' | 'lyrics'

export type ProjectId = 'tuxmp' | 'atom' | 'abno-deck' | 'abnora' | 'abnoly'

export type Project = {
  id: ProjectId
  name: string
  status: ProjectStatus
  categories: ProjectCategory[]
  tech: string[]
  repo?: string
  demo?: string
  visual: ProjectVisual
  /** Optional real artwork, relative to /public. Decorative SVGs are used otherwise. */
  image?: string
  logo?: string
  slogan?: string
  /** Sort weight for the "all projects" view. */
  index: number
}

/**
 * Every link below has been checked. Projects without a public repository have
 * no `repo` field on purpose — the UI says so instead of inventing a URL.
 */
export const projects: Project[] = [
  {
    id: 'tuxmp',
    name: 'tuxmp',
    status: 'released',
    categories: ['linux', 'tools'],
    tech: ['Python', 'yt-dlp', 'VLC', 'Rich'],
    repo: 'https://github.com/abnox43/tuxmp',
    visual: 'player',
    index: 1,
  },
  {
    id: 'atom',
    name: 'ATOM',
    status: 'experimental',
    categories: ['robotics', 'hardware'],
    tech: ['ESP32', 'OLED', 'AI'],
    visual: 'robot',
    logo: 'media/atom.png',
    index: 2,
  },
  {
    id: 'abno-deck',
    name: 'Abno Deck',
    status: 'released',
    categories: ['hardware', 'tools'],
    tech: ['ESP32', 'Python', 'PySide6', 'USB Serial'],
    repo: 'https://github.com/abnox43/abno-deck',
    visual: 'deck',
    logo: 'media/abno-deck.svg',
    index: 3,
  },
  {
    id: 'abnora',
    name: 'ABNORA',
    status: 'released',
    categories: ['linux', 'tools'],
    tech: ['Python', 'PySide6', 'PyMuPDF'],
    repo: 'https://github.com/abnox43/ABNORA',
    visual: 'book',
    image: 'media/abnora-classic.png',
    logo: 'media/abnora-logo.png',
    slogan: 'An open book. Twelve worlds.',
    index: 4,
  },
  {
    id: 'abnoly',
    name: 'Abnoly',
    status: 'planned',
    categories: ['rust', 'tools'],
    tech: ['Rust', 'Terminal', 'Lyrics'],
    visual: 'lyrics',
    index: 5,
  },
]

export const projectCategories: ProjectCategory[] = [
  'linux',
  'rust',
  'robotics',
  'hardware',
  'tools',
]

export const projectStatuses: ProjectStatus[] = [
  'released',
  'active',
  'experimental',
  'planned',
]

export const projectById = new Map(projects.map((project) => [project.id, project]))
