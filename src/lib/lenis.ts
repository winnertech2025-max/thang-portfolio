"use client";

import Lenis from "lenis";

let instance: Lenis | null = null;

export function setLenis(lenis: Lenis | null) {
  instance = lenis;
}

export function scrollToId(id: string) {
  const el = document.querySelector(id);
  if (!el) return;
  if (instance) {
    instance.scrollTo(el as HTMLElement, { duration: 1.6 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
