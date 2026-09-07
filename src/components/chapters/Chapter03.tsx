"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ChapterHeading } from "../ui";
import { STACK } from "@/data/content";

const GROUP_NOTES: Record<string, string> = {
  Frontend: "the interface",
  Backend: "the engine",
  "Mobile & Data": "everywhere else",
};

export default function Chapter03() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduced) return;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".ch3-diagram",
            start: "top 72%",
            toggleActions: "play none none none",
          },
        })
        .fromTo(
          ".ch3-spine",
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.3,
            ease: "power2.inOut",
            transformOrigin: "top",
          }
        )
        .fromTo(
          ".ch3-group",
          { opacity: 0, y: 34 },
          { opacity: 1, y: 0, stagger: 0.18, duration: 0.7, ease: "power3.out" },
          "-=0.8"
        )
        .fromTo(
          ".ch3-tag",
          { opacity: 0, scale: 0.5 },
          {
            opacity: 1,
            scale: 1,
            stagger: 0.04,
            duration: 0.5,
            ease: "back.out(1.8)",
          },
          "-=0.5"
        );
    },
    { scope: root }
  );

  return (
    <section ref={root} id="chapter-tools" className="relative px-5 py-24 sm:px-10 sm:py-36 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <ChapterHeading
          num="03"
          en="tools"
          title={
            <span>
              Bộ công cụ{" "}
              <span className="text-stroke">của mình.</span>
            </span>
          }
        />

        <div className="ch3-diagram relative mt-16 pl-8 sm:mt-24 sm:pl-12">
          {/* spine */}
          <div
            className="ch3-spine absolute bottom-4 left-[9px] top-2 w-px bg-line-strong sm:left-[11px]"
            style={{ transformOrigin: "top" }}
            aria-hidden
          />
          <svg
            viewBox="0 0 24 24"
            className="absolute -left-1 bottom-0 h-5 w-5 text-accent"
            fill="none"
            aria-hidden
          >
            <path
              d="M12 3 v14 M6 11 l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="space-y-16 sm:space-y-20">
            {STACK.map((group) => (
              <div
                key={group.label}
                className="ch3-group relative flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10"
              >
                {/* dot on spine */}
                <span
                  className="absolute -left-[31px] top-1.5 h-[13px] w-[13px] rounded-full border-2 border-accent bg-paper sm:-left-[34px]"
                  aria-hidden
                />

                <div className="shrink-0 sm:w-44">
                  <p className="mono text-sm uppercase tracking-[0.3em] text-ink">
                    {group.label}
                  </p>
                  <p className="hand mt-1 text-xl text-accent">
                    {GROUP_NOTES[group.label]}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {group.items.map((item, i) => (
                    <span
                      key={item}
                      className="ch3-tag inline-flex items-center rounded-[3px] border border-line-strong/70 bg-[#fdfbf5] px-3.5 py-2 text-sm font-medium text-ink-2 shadow-[0_2px_0_rgba(28,25,23,0.06)] sm:text-base"
                      style={{
                        transform: `rotate(${((i % 3) - 1) * 1.3}deg)`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="hand mt-16 text-center text-xl text-ink-3 sm:text-2xl">
            ~ and still learning, every day ~
          </p>
        </div>
      </div>
    </section>
  );
}
