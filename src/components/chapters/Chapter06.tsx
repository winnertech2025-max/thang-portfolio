"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Reveal, Squiggle } from "../ui";
import { scrollToId } from "@/lib/lenis";

export default function Chapter06() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduced) return;

      gsap.fromTo(
        ".ch6-line",
        { yPercent: 112 },
        {
          yPercent: 0,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".ch6-statement",
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="chapter-next"
      className="relative overflow-hidden bg-ink px-5 py-28 text-paper sm:px-10 sm:py-44 lg:px-16"
    >
      {/* faint star / dust */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl">
        <p className="mono text-[11px] uppercase tracking-[0.4em] text-white/40">
          Chapter 06 — What&apos;s Next
        </p>

        <h2 className="ch6-statement font-display mt-14 text-5xl font-medium leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
          <span className="block overflow-hidden pb-[0.06em]">
            <span className="ch6-line block">Câu chuyện</span>
          </span>
          <span className="block overflow-hidden pb-[0.06em]">
            <span className="ch6-line block">vẫn chưa</span>
          </span>
          <span className="block overflow-hidden pb-[0.06em]">
            <span className="ch6-line block">
              <span className="text-[#e07652]">kết thúc.</span>
            </span>
          </span>
        </h2>

        <Reveal className="mt-16 max-w-xl" y={26}>
          <p className="text-lg leading-relaxed text-white/60 sm:text-xl">
            Vẫn còn nhiều thứ chưa được xây. Có thể chương tiếp theo — là dự án
            của bạn.
          </p>
        </Reveal>

        <Reveal className="mt-14" y={20}>
          <button
            type="button"
            onClick={() => scrollToId("#contact")}
            className="group inline-flex items-center gap-4 rounded-[3px] bg-paper px-7 py-4 text-base font-semibold text-ink transition-colors hover:bg-[#e07652] hover:text-paper"
          >
            Cùng xây gì đó
            <span className="font-display text-xl transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </Reveal>

        <Reveal className="mt-20" y={16}>
          <p className="hand text-2xl text-white/50">— a new chapter awaits —</p>
          <Squiggle className="mt-1 h-3 w-40 text-white/20" />
        </Reveal>
      </div>
    </section>
  );
}
