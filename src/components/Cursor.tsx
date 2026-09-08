"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

/**
 * Custom cursor: a small accent dot + a lagging ink ring that expands and
 * shows a hand-written label over interactive elements. Desktop (fine pointer)
 * only, and disabled for reduced motion.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    document.documentElement.classList.add("has-custom-cursor");

    gsap.set(dot, { xPercent: -50, yPercent: -50, autoAlpha: 0 });
    gsap.set(ring, { xPercent: -50, yPercent: -50, autoAlpha: 0 });
    gsap.set(label, { autoAlpha: 0 });

    const dotX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power2.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power2.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.4, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.4, ease: "power3.out" });
    const labX = gsap.quickTo(label, "x", { duration: 0.4, ease: "power3.out" });
    const labY = gsap.quickTo(label, "y", { duration: 0.4, ease: "power3.out" });

    let active: HTMLElement | null = null;

    const onMove = (e: MouseEvent) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
      labX(e.clientX + 22);
      labY(e.clientY + 26);
      gsap.to([dot, ring], { autoAlpha: 1, duration: 0.2 });

      const el = (e.target as HTMLElement).closest<HTMLElement>(
        "a,button,[data-cursor],[data-magnify]"
      );
      if (el !== active) {
        active = el;
        const magnify = !!el?.hasAttribute("data-magnify");
        if (magnify) {
          gsap.to([dot, ring, label], { autoAlpha: 0, duration: 0.15 });
        } else if (el) {
          const txt = el.getAttribute("data-cursor") || "";
          label.textContent = txt;
          gsap.to(ring, { scale: 1.9, duration: 0.3, ease: "power3.out" });
          gsap.to(dot, { scale: 0.2, duration: 0.3 });
          gsap.to(label, { autoAlpha: txt ? 1 : 0, duration: 0.2 });
        } else {
          gsap.to(ring, { scale: 1, duration: 0.3, ease: "power3.out" });
          gsap.to(dot, { scale: 1, duration: 0.3 });
          gsap.to(label, { autoAlpha: 0, duration: 0.2 });
        }
      }
    };

    const onDown = () => gsap.to(ring, { scale: 1.4, duration: 0.12 });
    const onUp = () => {
      if (active?.hasAttribute("data-magnify")) return;
      gsap.to(ring, {
        scale: active ? 1.9 : 1,
        duration: 0.25,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot opacity-0" aria-hidden />
      <div ref={ringRef} className="cursor-ring opacity-0" aria-hidden />
      <span ref={labelRef} className="cursor-label opacity-0" aria-hidden />
    </>
  );
}
