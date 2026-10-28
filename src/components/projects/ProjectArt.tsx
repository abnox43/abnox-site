import type { ReactElement } from 'react'
import type { Project, ProjectVisual } from '../../data/projects'
import { assetPath } from '../../utils/assets'
import { useI18n } from '../../i18n'

type ProjectArtProps = {
  project: Project
  variant?: 'card' | 'detail'
}

function ArtGrid() {
  return (
    <g className="art-grid">
      {[80, 160, 240, 320].map((x) => (
        <line key={`v${x}`} x1={x} y1="24" x2={x} y2="216" />
      ))}
      {[60, 120, 180].map((y) => (
        <line key={`h${y}`} x1="32" y1={y} x2="368" y2={y} />
      ))}
    </g>
  )
}

function PlayerArt() {
  const bars = [22, 48, 34, 62, 44, 74, 38, 56, 28, 66, 40, 52]
  return (
    <>
      <ArtGrid />
      <rect className="art-panel" x="58" y="38" width="284" height="164" rx="12" />
      <path className="art-line" d="M58 66h284" />
      <text className="art-text" x="76" y="54">
        tuxmp / now playing
      </text>
      <circle className="art-fill" cx="322" cy="52" r="3" />
      <g className="art-bar">
        {bars.map((height, index) => (
          <rect
            key={index}
            x={82 + index * 14}
            y={154 - height}
            width="6"
            height={height}
            rx="3"
            opacity={0.28 + (index % 4) * 0.12}
          />
        ))}
      </g>
      <path className="art-line" d="M76 178h248" />
      <rect className="art-fill" x="76" y="178" width="122" height="2" />
      <text className="art-text" x="76" y="94">
        01 — LOCAL FILE
      </text>
      <text className="art-text" x="76" y="114" opacity=".45">
        02 — STREAM URL
      </text>
      <circle className="art-ring" cx="318" cy="102" r="26" />
      <path className="art-accent" d="M292 88v28l22-14-22-14Z" />
    </>
  )
}

function RobotArt() {
  return (
    <>
      <ArtGrid />
      <path className="art-line" d="M200 50v-20M200 30h22" />
      <circle className="art-fill" cx="226" cy="30" r="4" />
      <rect className="art-panel" x="104" y="56" width="192" height="132" rx="26" />
      <rect className="art-line" x="128" y="82" width="144" height="70" rx="14" />
      <circle className="art-fill" cx="168" cy="112" r="9" />
      <circle className="art-fill" cx="232" cy="112" r="9" />
      <circle className="art-panel" cx="171" cy="109" r="3" />
      <circle className="art-panel" cx="235" cy="109" r="3" />
      <path className="art-line" d="M182 136h36" />
      <rect className="art-track" x="84" y="96" width="14" height="34" rx="7" />
      <rect className="art-track" x="302" y="96" width="14" height="34" rx="7" />
      <path className="art-line" d="M150 188v14M250 188v14M126 202h148" />
      <path className="art-line" d="M64 74h22l14 14M336 74h-22l-14 14" strokeDasharray="4 5" />
      <circle className="art-fill" cx="64" cy="74" r="3" />
      <circle className="art-fill" cx="336" cy="74" r="3" />
      <text className="art-text" x="168" y="176">
        ATOM / 01
      </text>
    </>
  )
}

function DeckArt() {
  return (
    <>
      <ArtGrid />
      <rect className="art-panel" x="72" y="52" width="238" height="142" rx="18" />
      <rect className="art-line" x="92" y="72" width="92" height="46" rx="10" />
      <rect className="art-line" x="196" y="72" width="92" height="46" rx="10" />
      <rect className="art-line" x="92" y="128" width="92" height="46" rx="10" />
      <rect className="art-line" x="196" y="128" width="92" height="46" rx="10" />
      <text className="art-text" x="130" y="101">
        01
      </text>
      <text className="art-text" x="234" y="101">
        02
      </text>
      <text className="art-text" x="130" y="157">
        03
      </text>
      <text className="art-text" x="234" y="157">
        04
      </text>
      <circle className="art-fill" cx="310" cy="66" r="3" />
      <path className="art-line" d="M310 70v96" />
      <rect className="art-track" x="326" y="112" width="18" height="12" rx="4" />
      <path className="art-line" d="M344 118h22" />
      <text className="art-text" x="72" y="214">
        4 KEYS / USB
      </text>
    </>
  )
}

function BookArt() {
  return (
    <>
      <ArtGrid />
      <path className="art-panel" d="M78 66c30-10 58-8 86 8v118c-28-16-56-18-86-8V66Z" />
      <path className="art-panel" d="M322 66c-30-10-58-8-86 8v118c28-16 56-18 86-8V66Z" />
      <path className="art-line" d="M164 74v118M236 74v118" />
      <path className="art-line" d="M96 92h48M96 106h40M96 120h46M256 92h48M264 106h40M256 120h46" opacity=".45" />
      <circle className="art-fill" cx="200" cy="46" r="4" />
      <path className="art-line" d="M200 42v-14M200 28l16-8M200 28l-16-8" />
      {Array.from({ length: 12 }).map((_, index) => {
        const angle = (index / 12) * Math.PI * 2
        return (
          <circle
            key={index}
            className="art-fill"
            cx={200 + Math.cos(angle) * 124}
            cy={122 + Math.sin(angle) * 78}
            r="2.2"
            opacity={0.28 + (index % 3) * 0.2}
          />
        )
      })}
      <text className="art-text" x="164" y="214">
        12 WORLDS
      </text>
    </>
  )
}

function LyricsArt() {
  return (
    <>
      <ArtGrid />
      <rect className="art-panel" x="58" y="44" width="284" height="152" rx="12" />
      <path className="art-line" d="M58 72h284" />
      <text className="art-text" x="76" y="61">
        abnoly — lyrics
      </text>
      <text className="art-text" x="76" y="104">
        keep the words in view
      </text>
      <path className="art-line" d="M76 118h150M76 132h196M76 146h122" opacity=".35" />
      <circle className="art-ring" cx="308" cy="94" r="16" />
      <path className="art-accent" d="M309 92v-14l10-2v14" />
      <circle className="art-fill" cx="304" cy="102" r="3" />
      <circle className="art-fill" cx="316" cy="98" r="3" />
      <path className="art-line" d="M76 172h246" />
      <rect className="art-fill" x="76" y="172" width="66" height="2" />
      <text className="art-text" x="76" y="188">
        PLANNED
      </text>
    </>
  )
}

const artwork: Record<ProjectVisual, () => ReactElement> = {
  player: PlayerArt,
  robot: RobotArt,
  deck: DeckArt,
  book: BookArt,
  lyrics: LyricsArt,
}

export function ProjectArt({ project, variant = 'card' }: ProjectArtProps) {
  const { messages } = useI18n()
  const alt = messages.projects.items[project.id].imageAlt
  const Art = artwork[project.visual]

  if (project.image) {
    return (
      <div className={`project-art project-art--${variant} project-art--photo`}>
        <img
          src={assetPath(project.image)}
          alt={alt}
          width={1440}
          height={900}
          loading="lazy"
          decoding="async"
        />
        <span className="project-art__scan" aria-hidden />
      </div>
    )
  }

  if (project.logo) {
    return (
      <div className={`project-art project-art--${variant} project-art--logo`}>
        <span className="project-art__logo-grid" aria-hidden />
        <img
          src={assetPath(project.logo)}
          alt={alt}
          loading="lazy"
          decoding="async"
        />
      </div>
    )
  }

  return (
    <div className={`project-art project-art--${variant} project-art--drawing`}>
      <svg
        className="project-art__svg"
        viewBox="0 0 400 240"
        role="img"
        aria-label={alt}
        focusable="false"
      >
        <title>{alt}</title>
        <Art />
      </svg>
    </div>
  )
}
