"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { CHAPTERS } from "@/data/content";
import { scrollToId } from "@/lib/lenis";

export default function Nav() {
  const [active, setActive] = useState(-1);
  const progressRef = useRef<HTMLSpanElement>(null);
  const hairlineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const sections = CHAPTERS.map((c) =>
      document.getElementById(`chapter-${c.id}`)
    ).filter(Boolean) as HTMLElement[];

    const triggers = sections.map((section, i) =>
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => {
          if (self.isActive) setActive(i);
        },
      })
    );

    const hairline = gsap.to(hairlineRef.current, {
      scaleY: 1,
      transformOrigin: "top",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    const bar = gsap.to(progressRef.current, {
      scaleX: 1,
      transformOrigin: "left",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    return () => {
      triggers.forEach((t) => t.kill());
      hairline.scrollTrigger?.kill();
      hairline.kill();
      bar.scrollTrigger?.kill();
      bar.kill();
    };
  }, []);

  const chapter = active >= 0 ? CHAPTERS[active] : null;

  return (
    <>
      {/* Logo mark */}
      <button
        type="button"
        onClick={() => scrollToId("#top")}
        className="fixed left-5 top-5 z-50 flex items-center gap-3 sm:left-8 sm:top-7"
        aria-label="Lê Quốc Thắng — back to top"
      >
        <span className="font-display flex h-10 w-10 items-center justify-center rounded-full border border-ink/30 bg-paper text-sm font-semibold tracking-tight text-ink">
          LT
        </span>
        <span className="mono hidden text-[11px] uppercase tracking-[0.25em] text-ink-3 sm:block">
          Lê Quốc Thắng
        </span>
      </button>

      {/* Chapter indicator */}
      <div className="pointer-events-none fixed bottom-5 left-5 z-50 sm:bottom-8 sm:left-8">
        <div className="flex items-end gap-3">
          <span className="font-display text-3xl font-medium leading-none text-ink sm:text-4xl">
            {chapter ? chapter.num : "—"}
          </span>
          <span className="mono pb-0.5 text-xs text-ink-3">/ 06</span>
        </div>
        <div className="mt-1.5 flex items-center gap-3">
          <span
            className="mono text-[10px] uppercase tracking-[0.3em] text-ink-3"
            aria-live="polite"
          >
            {chapter ? chapter.en : "The Story"}
          </span>
          <span className="relative h-px w-16 overflow-hidden bg-line">
            <span
              ref={progressRef}
              className="absolute inset-0 origin-left scale-x-0 bg-accent"
            />
          </span>
        </div>
      </div>

      {/* Scroll progress hairline */}
      <div className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
        <div className="relative h-40 w-px bg-line">
          <span
            ref={hairlineRef}
            className="absolute inset-0 origin-top scale-y-0 bg-accent"
          />
        </div>
      </div>
    </>
  );
}
