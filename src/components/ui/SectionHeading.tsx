type SectionHeadingProps = {
  kicker: string
  title: string
  intro?: string
  headingId: string
  align?: 'start' | 'center'
}

export function SectionHeading({
  kicker,
  title,
  intro,
  headingId,
  align = 'start',
}: SectionHeadingProps) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      <p className="kicker">
        <span className="kicker__line" aria-hidden />
        {kicker}
      </p>
      <h2 id={headingId}>{title}</h2>
      {intro ? <p className="section-heading__intro">{intro}</p> : null}
    </header>
  )
}
