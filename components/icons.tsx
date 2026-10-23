import type { SVGProps } from "react"

export const Icons = {
  // Logo – větvička z Barbořina LinkedIn banneru
  logo: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e8a497" />
          <stop offset="1" stopColor="#99afac" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="31" fill="url(#logo-gradient)" />
      <g fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 54V14" />
        <path d="M32 44c-7 0-12-4-13-11 7 0 12 4 13 11z" />
        <path d="M32 44c7 0 12-4 13-11-7 0-12 4-13 11z" />
        <path d="M32 31c-6 0-10-4-11-10 6 0 10 4 11 10z" />
        <path d="M32 31c6 0 10-4 11-10-6 0-10 4-11 10z" />
        <path d="M32 20c-3-2-4-5-3-9 3 2 4 5 3 9zM32 20c3-2 4-5 3-9-3 2-4 5-3 9z" />
      </g>
    </svg>
  ),
  linkedin: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3zM9.5 9.75h3.8v1.5h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91h-4z"
      />
    </svg>
  ),
}
