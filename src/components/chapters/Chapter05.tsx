"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ChapterHeading } from "../ui";
import { PROCESS } from "@/data/content";

export default function Chapter05() {
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
            trigger: ".ch5-blueprint",
            start: "top 72%",
            toggleActions: "play none none none",
          },
        })
        .fromTo(
          ".ch5-line",
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.6,
            ease: "power2.inOut",
            transformOrigin: "top",
          }
        )
        .fromTo(
          ".ch5-step",
          { opacity: 0, x: -26 },
          { opacity: 1, x: 0, stagger: 0.16, duration: 0.6, ease: "power3.out" },
          "-=1.0"
        )
        .fromTo(
          ".ch5-dot",
          { scale: 0 },
          {
            scale: 1,
            stagger: 0.16,
            duration: 0.4,
            ease: "back.out(2.2)",
          },
          "-=0.9"
        );
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="chapter-process"
      className="relative px-5 py-24 sm:px-10 sm:py-36 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <ChapterHeading
          num="05"
          en="process"
          title={
            <span>
              Cách mình <span className="text-stroke">làm việc.</span>
            </span>
          }
        />

        <div className="ch5-blueprint relative mt-16 rounded-[3px] border border-line-strong/70 bg-paper-2/40 p-6 sm:mt-24 sm:p-12 lg:p-14">
          {/* blueprint corner marks */}
          <span className="absolute -left-px -top-px h-6 w-6 border-l-2 border-t-2 border-ink-3" aria-hidden />
          <span className="absolute -right-px -top-px h-6 w-6 border-r-2 border-t-2 border-ink-3" aria-hidden />
          <span className="absolute -bottom-px -left-px h-6 w-6 border-b-2 border-l-2 border-ink-3" aria-hidden />
          <span className="absolute -bottom-px -right-px h-6 w-6 border-b-2 border-r-2 border-ink-3" aria-hidden />

          <div className="relative pl-8 sm:pl-12">
            {/* drawing line */}
            <div
              className="ch5-line absolute bottom-2 left-[9px] top-2 w-px bg-line-strong sm:left-[11px]"
              style={{ transformOrigin: "top" }}
              aria-hidden
            />

            <div className="space-y-12 sm:space-y-14">
              {PROCESS.map((step) => (
                <div key={step.num} className="ch5-step relative">
                  <span
                    className="ch5-dot absolute -left-[33px] top-1.5 h-[15px] w-[15px] rounded-full border-2 border-accent bg-paper sm:-left-[36px]"
                    aria-hidden
                  />
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="mono text-sm font-semibold text-accent">
                      {step.num}
                    </span>
                    <span className="mono text-xs uppercase tracking-[0.3em] text-ink-3">
                      {step.en}
                    </span>
                  </div>
                  <h3 className="font-display mt-2 text-2xl font-medium text-ink sm:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink-3">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* title block */}
          <div className="mono mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line-strong/70 pt-4 text-[10px] uppercase tracking-[0.2em] text-ink-3 sm:mt-16">
            <span>Sheet — Workflow</span>
            <span>Scale 1:1</span>
            <span>Lê Quốc Thắng · Rev 01</span>
          </div>
        </div>
      </div>
    </section>
  );
}
