export type SkillGroupId = 'linux' | 'code' | 'security' | 'robotics' | 'tools'

export type SkillGroup = {
  id: SkillGroupId
  items: string[]
}

/**
 * The prose for each group lives in the locale files. Keeping the technology
 * names here means one edit updates all four languages and the search index.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: 'linux',
    items: ['Arch Linux', 'Debian', 'Bash', 'systemd', 'Packaging', 'TUI'],
  },
  {
    id: 'code',
    items: ['Python', 'Rust', 'C / C++', 'JavaScript', 'TypeScript', 'SQLite'],
  },
  {
    id: 'security',
    items: ['Networking basics', 'Linux hardening', 'Privacy by design', 'CTF labs'],
  },
  {
    id: 'robotics',
    items: ['ESP32', 'Arduino', 'OLED displays', 'Sensors', 'Serial protocols'],
  },
  {
    id: 'tools',
    items: ['Git', 'PySide6', 'egui', 'Vite / React', 'mpv / yt-dlp'],
  },
]

export type InterestId =
  | 'foss'
  | 'security'
  | 'robotics'
  | 'terminals'
  | 'retro'
  | 'hardware'

export const interests: InterestId[] = [
  'foss',
  'security',
  'robotics',
  'terminals',
  'retro',
  'hardware',
]
