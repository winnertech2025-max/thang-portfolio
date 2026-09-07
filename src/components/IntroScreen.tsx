"use client";

import { useEffect, useState } from "react";
import { MaskedHeading } from "./MaskedHeading";

type IntroScreenProps = {
  name: string;
};

const INTRO_SESSION_KEY = "lqt-portfolio-intro-seen";

export function IntroScreen({ name }: IntroScreenProps) {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(window.sessionStorage.getItem(INTRO_SESSION_KEY) !== "true");
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) {
      return;
    }

    window.sessionStorage.setItem(INTRO_SESSION_KEY, "true");

    const timer = window.setTimeout(() => closeIntro(), 2600);
    return () => window.clearTimeout(timer);
  }, [visible]);

  function closeIntro() {
    setLeaving(true);
    window.setTimeout(() => setVisible(false), 520);
  }

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-black px-6 text-white ${
        leaving ? "intro-leave" : "intro-enter"
      }`}
      onClick={closeIntro}
      role="presentation"
    >
      <div className="text-center">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.26em] text-zinc-400">
          Portfolio
        </p>
        <h1 className="text-5xl font-semibold tracking-normal sm:text-7xl">
          <MaskedHeading>{name}</MaskedHeading>
        </h1>
        <div className="mx-auto mt-8 h-px w-36 overflow-hidden bg-white/10">
          <span className="intro-loader block h-full w-full bg-sky-500" />
        </div>
      </div>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          closeIntro();
        }}
        className="absolute bottom-8 rounded-md border border-white/10 px-4 py-2 text-sm font-semibold text-zinc-300 hover:bg-white/10"
      >
        Skip
      </button>
    </div>
  );
}
