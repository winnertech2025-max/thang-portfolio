"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/** Fades + lifts its direct children in with a stagger on scroll. */
export function Reveal({
  children,
  className,
  y = 30,
  stagger = 0.09,
  start = "top 82%",
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  stagger?: number;
  start?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const targets = gsap.utils.toArray<HTMLElement>(ref.current!.children);
      if (!targets.length) return;
      gsap.fromTo(
        targets,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger,
          scrollTrigger: {
            trigger: ref.current,
            start,
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/** Shared chapter header: "CHAPTER 01 — the beginning" + display title. */
export function ChapterHeading({
  num,
  en,
  title,
  id,
}: {
  num: string;
  en: string;
  title: ReactNode;
  id?: string;
}) {
  return (
    <header className="relative" id={id}>
      <div className="flex items-center gap-3 sm:gap-5">
        <span className="mono text-[11px] uppercase tracking-[0.35em] text-ink-3">
          Chapter {num}
        </span>
        <span className="h-px flex-1 max-w-[120px] bg-line-strong" aria-hidden />
        <span className="hand text-xl text-accent sm:text-2xl">
          the {en.toLowerCase()}
        </span>
      </div>
      <h2 className="font-display mt-5 text-4xl font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
        {title}
      </h2>
    </header>
  );
}

/** Hand-drawn curved arrow (SVG). */
export function SketchArrow({
  className,
  direction = "right",
}: {
  className?: string;
  direction?: "right" | "down" | "left" | "up";
}) {
  const rotate =
    direction === "down"
      ? 90
      : direction === "left"
        ? 180
        : direction === "up"
          ? 270
          : 0;
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      className={className}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden
    >
      <path
        d="M4 34 C 34 8, 78 8, 108 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M92 22 L 110 30 L 94 40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Rough hand-drawn underline. */
export function Squiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 20" fill="none" preserveAspectRatio="none" className={className} aria-hidden>
      <path
        d="M4 12 C 40 4, 80 18, 120 10 S 180 6, 196 12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Rough ellipse / circle doodle. */
export function ScribbleCircle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden>
      <path
        d="M50 6 C 78 4, 96 28, 94 52 C 92 78, 70 96, 46 94 C 20 92, 4 72, 7 46 C 9 24, 26 7, 50 6 Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Magnetic hover: gently pulls the wrapped element toward the cursor. */
export function Magnetic({
  children,
  strength = 0.32,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });

    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * strength);
      yTo((e.clientY - (r.top + r.height / 2)) * strength);
    };
    const leave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, [strength]);

  return (
    <div ref={ref} className={className} style={{ display: "inline-block" }}>
      {children}
    </div>
  );
}
