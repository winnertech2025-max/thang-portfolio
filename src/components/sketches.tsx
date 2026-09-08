/** Lightweight hand-drawn SVG doodles used across the story. */

export function Laptop({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 420 300" fill="none" className={className} aria-hidden>
      {/* screen */}
      <rect
        x="46"
        y="22"
        width="328"
        height="204"
        rx="10"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      {/* base */}
      <path
        d="M8 252 h404 l-22 24 h-360 z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* notch */}
      <path d="M204 252 v24" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

export function CoffeeCup({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 90" fill="none" className={className} aria-hidden>
      {/* steam */}
      <path
        className="coffee-steam"
        d="M40 8 C 34 4, 40 0, 40 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        className="coffee-steam"
        d="M54 8 C 48 4, 54 0, 54 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* saucer */}
      <path
        d="M12 78 h64"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* body */}
      <path
        d="M22 34 h38 v22 c0 10 -8 16 -19 16 s-19 -6 -19 -16 z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* handle */}
      <path
        d="M60 38 h12 c6 0 8 4 8 7 s-2 7 -8 7 h-8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Gear({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden>
      <circle cx="50" cy="50" r="16" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M50 24 v-8 M50 84 v-8 M24 50 h-8 M84 50 h-8 M32 32 l-6 -6 M74 74 l-6 -6 M68 32 l6 -6 M26 74 l6 -6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 5" />
    </svg>
  );
}

export function PlantSprout({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 100" fill="none" className={className} aria-hidden>
      <path d="M40 92 V 48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M40 48 C 40 34, 24 34, 24 22 C 36 22, 40 28, 40 40"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 44 C 40 28, 56 28, 56 16 C 44 16, 40 24, 40 36"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M32 92 h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function StarDoodle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <path
        d="M20 4 L24 15 L35 17 L26 26 L29 38 L20 31 L11 38 L14 26 L5 17 L16 15 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** A fountain pen pointing down-left (the nib tip is the bottom-left corner). */
export function PenDoodle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden>
      <path
        d="M28 8 L12 24 L8 30"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 30 L14 28 L11 23 Z" fill="currentColor" />
    </svg>
  );
}
