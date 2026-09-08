"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { PenDoodle } from "./sketches";

/** A signature that draws itself (pen follows the reveal) when scrolled into view. */
export default function Signature() {
  const root = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const penRef = useRef<HTMLSpanElement>(null);

  const makeTl = () => {
    const mask = maskRef.current!;
    const text = textRef.current!;
    const pen = penRef.current!;
    const w = text.offsetWidth || 180;
    const tl = gsap.timeline();
    tl.set(mask, { clipPath: "inset(0 100% 0 0)" });
    tl.set(pen, { x: -8, y: 8, rotate: -12, opacity: 1 });
    tl.set(".sig-dot", { scale: 0 });
    tl.to(mask, { clipPath: "inset(0 0% 0 0)", duration: 1.4, ease: "none" }, 0);
    tl.to(pen, { x: w - 4, duration: 1.4, ease: "none" }, 0);
    tl.to(
      pen,
      { y: 3, rotate: 3, duration: 0.35, ease: "sine.inOut", yoyo: true, repeat: 3 },
      0.15
    );
    tl.to(pen, { y: -16, rotate: -18, opacity: 0, duration: 0.4, ease: "power2.out" }, 1.4);
    tl.fromTo(".sig-dot", { scale: 0 }, { scale: 1, duration: 0.3, ease: "back.out(2.4)" }, 1.45);
    return tl;
  };

  useGSAP(
    () => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduced) {
        gsap.set(maskRef.current, { clipPath: "inset(0 0% 0 0)" });
        gsap.set(penRef.current, { opacity: 0 });
        gsap.set(".sig-dot", { scale: 1 });
        return;
      }
      const tl = makeTl();
      tl.pause();
      gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top 88%",
          toggleActions: "play none none none",
          onEnter: () => tl.play(),
        },
      });
    },
    { scope: root }
  );

  const replay = () => makeTl().play();

  return (
    <div className="mt-4">
      <div ref={root} className="relative inline-block">
        <div
          ref={maskRef}
          className="inline-block"
          style={{ clipPath: "inset(0 100% 0 0)" }}
        >
          <span
            ref={textRef}
            className="hand block pr-1 text-6xl leading-none text-accent sm:text-7xl"
          >
            Thang
          </span>
        </div>
        <span
          ref={penRef}
          className="pointer-events-none absolute bottom-0 left-0 h-9 w-9 opacity-0"
        >
          <PenDoodle className="h-full w-full text-ink" />
        </span>
        <span className="sig-dot absolute -right-1 bottom-1 h-2.5 w-2.5 rounded-full bg-accent" />
      </div>

      <button
        type="button"
        onClick={replay}
        data-cursor="xem lại"
        className="mono mt-3 block text-[10px] uppercase tracking-[0.25em] text-ink-3 transition-colors hover:text-accent"
      >
        ↻ xem lại chữ ký
      </button>
    </div>
  );
}
