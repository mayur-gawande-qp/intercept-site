function baseProps(size, strokeWidth) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }
}

export function ChevronDownIcon({ size = 16, strokeWidth = 2, className }) {
  return (
    <svg {...baseProps(size, strokeWidth)} className={className}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

export function MenuIcon({ size = 24, strokeWidth = 2 }) {
  return (
    <svg {...baseProps(size, strokeWidth)}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon({ size = 24, strokeWidth = 2 }) {
  return (
    <svg {...baseProps(size, strokeWidth)}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function ArrowRightIcon({ size = 16, strokeWidth = 2 }) {
  return (
    <svg {...baseProps(size, strokeWidth)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function PlayIcon({ size = 14, strokeWidth = 2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

export function CheckIcon({ size = 16, strokeWidth = 2.5 }) {
  return (
    <svg {...baseProps(size, strokeWidth)}>
      <path d="M5 13l4 4L19 7" />
    </svg>
  )
}

export function BoltIcon({ size = 20, strokeWidth = 2 }) {
  return (
    <svg {...baseProps(size, strokeWidth)}>
      <path d="M13 3L4 14h6l-1 7 9-11h-6l1-7z" />
    </svg>
  )
}

export function TargetIcon({ size = 20, strokeWidth = 2 }) {
  return (
    <svg {...baseProps(size, strokeWidth)}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.5" />
    </svg>
  )
}

export function ChartIcon({ size = 20, strokeWidth = 2 }) {
  return (
    <svg {...baseProps(size, strokeWidth)}>
      <path d="M4 19V10M12 19V5M20 19v-6" />
    </svg>
  )
}

export function DoorExitIcon({ size = 20, strokeWidth = 2 }) {
  return (
    <svg {...baseProps(size, strokeWidth)}>
      <path d="M14 4h4a1 1 0 011 1v14a1 1 0 01-1 1h-4M10 8l-4 4 4 4M6 12h12" />
    </svg>
  )
}

export function MobileIcon({ size = 20, strokeWidth = 2 }) {
  return (
    <svg {...baseProps(size, strokeWidth)}>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </svg>
  )
}

export function PuzzleIcon({ size = 20, strokeWidth = 2 }) {
  return (
    <svg {...baseProps(size, strokeWidth)}>
      <path d="M9 3h4a1 1 0 011 1v2.2a1.8 1.8 0 102 3v.8a1 1 0 01-1 1h-2.2a1.8 1.8 0 10-3 2H9a1 1 0 01-1-1v-4a1.8 1.8 0 10-2-3V5a1 1 0 011-1h2" />
    </svg>
  )
}

export function StarIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.9 5.9 21l1.5-6.8-5.2-4.7 6.9-.7z" />
    </svg>
  )
}
