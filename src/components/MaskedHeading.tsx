"use client";

type MaskedHeadingProps = {
  children: string;
  className?: string;
};

export function MaskedHeading({ children, className = "" }: MaskedHeadingProps) {
  return (
    <span className={`masked-heading ${className}`} aria-label={children}>
      {children}
    </span>
  );
}
