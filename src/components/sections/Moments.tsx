import { useState } from 'react'
import { memes, type Meme } from '../../data/memes'
import { useI18n } from '../../i18n'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { assetPath } from '../../utils/assets'
import { TerminalIcon } from '../ui/Icons'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

function MemeFigure({ meme, index }: { meme: Meme; index: number }) {
  const { messages } = useI18n()
  const reduced = usePrefersReducedMotion()
  const item = messages.moments.items[index]
  const [gifFailed, setGifFailed] = useState(false)
  const [stillFailed, setStillFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const source = reduced || gifFailed ? meme.still : meme.gif
  const bothFailed = stillFailed

  return (
    <figure className="meme">
      <div className={`meme__media ${loaded ? 'is-loaded' : ''}`.trim()}>
        {bothFailed ? (
          <div className="meme__fallback" role="img" aria-label={item.alt}>
            <TerminalIcon size={30} />
            <p>{messages.moments.fallback}</p>
          </div>
        ) : (
          <img
            src={assetPath(source)}
            alt={item.alt}
            width={meme.width}
            height={meme.height}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            onError={() => {
              if (source === meme.gif) setGifFailed(true)
              else setStillFailed(true)
            }}
          />
        )}
        <span className="meme__scan" aria-hidden />
        <span className="meme__number" aria-hidden>
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <figcaption>
        <span className="visually-hidden">{messages.moments.captionLabel}: </span>
        {item.caption}
      </figcaption>
    </figure>
  )
}

export function Moments() {
  const { messages } = useI18n()
  const t = messages.moments
  const reduced = usePrefersReducedMotion()

  return (
    <section id="moments" className="section moments" aria-labelledby="moments-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            kicker={t.kicker}
            title={t.title}
            intro={t.intro}
            headingId="moments-title"
          />
        </Reveal>

        {reduced ? (
          <p className="moments__reduced-note">{t.reducedNote}</p>
        ) : null}

        <div className="moments__grid">
          {memes.map((meme, index) => (
            <Reveal key={meme.id} delay={index * 70}>
              <MemeFigure meme={meme} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
