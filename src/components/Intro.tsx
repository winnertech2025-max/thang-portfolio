"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ScribbleCircle } from "./ui";
import { scrollToId } from "@/lib/lenis";
import SecretCoupon from "./SecretCoupon";

const NAME_1 = ["L", "Ê"];
const NAME_2 = ["Q", "U", "Ố", "C"];
const NAME_3 = ["T", "H", "Ắ", "N", "G"];

function Word({ letters, className = "" }: { letters: string[]; className?: string }) {
  return (
    <span className={`inline-flex ${className}`}>
      {letters.map((l, i) => (
        <span key={i} className="intro-letter">
          {l}
        </span>
      ))}
    </span>
  );
}

export default function Intro() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduced) {
        gsap.set(".intro-draw", { opacity: 1 });
        return;
      }

      // Load-in reveal
      gsap
        .timeline({ delay: 0.15 })
        .fromTo(
          ".intro-kicker",
          { y: 22, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
        )
        .fromTo(
          ".intro-name-line",
          { yPercent: 115 },
          { yPercent: 0, duration: 1.1, ease: "power4.out", stagger: 0.12 },
          "-=0.35"
        )
        .fromTo(
          ".intro-role",
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.55"
        )
        .fromTo(
          ".intro-note",
          { opacity: 0, scale: 0.7 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
          "-=0.35"
        )
        .fromTo(
          ".intro-scroll",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.2"
        );

      // Sketch line draw
      const path = root.current?.querySelector(
        ".intro-draw"
      ) as SVGPathElement | null;
      const len = path?.getTotalLength() ?? 0;
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });

      // Scroll-driven "page turn"
      const open = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=130%",
          pin: ".intro-scene",
          scrub: 1,
          anticipatePin: 1,
        },
      });

      open
        .to(".intro-scroll", { opacity: 0, y: -14, duration: 0.35, ease: "none" }, 0)
        .to(path, { strokeDashoffset: 0, duration: 0.7, ease: "none" }, 0.02)
        .to(".intro-note", { rotate: -6, y: -30, opacity: 0, duration: 0.5, ease: "none" }, 0.1)
        .to(".intro-kicker", { opacity: 0, y: -22, duration: 0.35, ease: "none" }, 0.15)
        .to(".intro-role", { opacity: 0, y: -14, duration: 0.35, ease: "none" }, 0.18)
        .to(
          ".intro-name",
          { yPercent: -14, scale: 0.92, duration: 0.9, ease: "none" },
          0.05
        )
        .to(
          ".intro-sheet",
          {
            rotationX: 24,
            rotateZ: -4,
            yPercent: -10,
            scale: 0.88,
            opacity: 0,
            transformOrigin: "50% 0%",
            duration: 1,
            ease: "none",
          },
          0.25
        );
    },
    { scope: root }
  );

  return (
    <section ref={root} id="top" className="relative">
      <div
        className="intro-scene relative flex h-screen items-center justify-center overflow-hidden px-4 py-16 sm:px-8"
        style={{ perspective: "1500px" }}
      >
        {/* desk grid backdrop */}
        <div className="dot-paper absolute inset-0" aria-hidden />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(28,25,23,0.06)_100%)]"
          aria-hidden
        />

        {/* the sheet of paper */}
        <div className="intro-sheet relative w-full max-w-5xl rounded-[3px] border border-line/80 bg-[#fdfbf5] px-6 pb-16 pt-14 shadow-[0_50px_100px_-40px_rgba(28,25,23,0.45)] sm:px-14 sm:pb-20 sm:pt-16">
          {/* tape */}
          <div
            className="absolute -top-3 left-1/2 h-6 w-28 -translate-x-1/2 rotate-[-2deg] border border-line bg-paper-2/80 backdrop-blur-[1px]"
            aria-hidden
          />
          <div
            className="absolute -right-3 top-8 h-6 w-20 rotate-[4deg] border border-line bg-paper-2/80"
            aria-hidden
          />

          {/* the hidden coupon — random position, folded into the paper */}
          <SecretCoupon />

          {/* content */}
          <div className="relative text-center">
            <p className="intro-kicker mono flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.5em] text-ink-3">
              <span className="h-px w-8 bg-line-strong" aria-hidden />
              The Story Of
              <span className="h-px w-8 bg-line-strong" aria-hidden />
            </p>

            <h1 className="intro-name font-display mt-7 text-[2.7rem] font-semibold leading-[0.9] tracking-tight text-ink sm:text-8xl lg:text-[9rem]">
              <span className="block overflow-hidden pb-[0.06em]">
                <span className="intro-name-line block">
                  <Word letters={NAME_1} /> <Word letters={NAME_2} />
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.06em]">
                <span className="intro-name-line block">
                  <span className="text-stroke">
                    <Word letters={NAME_3} />
                  </span>
                </span>
              </span>
            </h1>

            <p className="intro-role mono mt-8 text-xs uppercase tracking-[0.45em] text-accent sm:text-sm">
              Full-stack Developer
            </p>
            <p className="intro-role mono mt-2 text-[10px] uppercase tracking-[0.3em] text-ink-3">
              web &nbsp;·&nbsp; mobile &nbsp;·&nbsp; ai &nbsp;·&nbsp; systems
            </p>
          </div>

          {/* hand annotations */}
          <div className="intro-note hand absolute right-2 top-8 hidden text-xl text-ink-3 sm:right-6 sm:block">
            fig. 01 — the beginning
            <svg viewBox="0 0 120 40" className="mt-1 w-24 text-accent" fill="none" aria-hidden>
              <path
                d="M4 6 C 40 4, 80 4, 112 30"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M96 20 L 114 30 L 98 38"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="intro-note absolute bottom-6 left-6 hidden sm:block">
            <ScribbleCircle className="w-10 text-accent/70" />
          </div>

          {/* connecting sketch line */}
          <svg
            viewBox="0 0 800 200"
            className="pointer-events-none absolute left-0 top-1/2 hidden w-full -translate-y-1/2 md:block"
            fill="none"
            aria-hidden
            preserveAspectRatio="none"
          >
            <path
              className="intro-draw"
              d="M40 180 C 200 40, 300 60, 420 100 S 700 90, 760 40"
              stroke="#b3a382"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>

          {/* scroll hint */}
          <button
            type="button"
            onClick={() => scrollToId("#chapter-beginning")}
            data-cursor="bắt đầu"
            className="intro-scroll absolute bottom-6 left-1/2 -translate-x-1/2 text-center"
          >
            <span className="mono block text-[10px] uppercase tracking-[0.4em] text-ink-3">
              Scroll to begin
            </span>
            <svg
              viewBox="0 0 24 24"
              className="mx-auto mt-2 h-5 w-5 animate-bounce text-accent"
              fill="none"
              aria-hidden
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
