import type { SVGProps } from 'react'

export function LogoMark({ size = 34, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      focusable={false}
      {...props}
    >
      <rect x="3.25" y="3.25" width="41.5" height="41.5" rx="12" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M14.5 34.5 24 13l9.5 21.5M18.4 26.6h11.2"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="38" cy="10" r="2.4" fill="currentColor" />
    </svg>
  )
}

export function Logo() {
  return (
    <span className="logo">
      <span className="logo__mark">
        <LogoMark />
      </span>
      <span className="logo__word" dir="ltr">
        ABNOX<span className="logo__dot" aria-hidden>.</span>
      </span>
    </span>
  )
}
