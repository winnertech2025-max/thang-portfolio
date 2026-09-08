"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ChapterHeading, Reveal } from "../ui";
import { Laptop, CoffeeCup } from "../sketches";

function CodeBlock() {
  return (
    <div className="mono text-left text-[11px] leading-[1.9] text-ink sm:text-xs">
      <div className="ch2-code-line"><span className="text-ink-3">{"// the daily ritual"}</span></div>
      <div className="ch2-code-line"><span className="text-accent">const</span> idea = <span className="text-ink-3">&quot;rời rạc&quot;</span>;</div>
      <div className="ch2-code-line"><span className="text-accent">const</span> product = <span className="text-accent">await</span> build(idea);</div>
      <div className="ch2-code-line">product.ui = design(product);</div>
      <div className="ch2-code-line">product.api = connect(product);</div>
      <div className="ch2-code-line">ship(product); <span className="text-ink-3">{"// → production ✓"}</span></div>
      <div className="ch2-code-line"><span className="text-accent">export</span> <span className="text-accent">default</span> product;</div>
    </div>
  );
}

function BrowserCard() {
  return (
    <div className="w-56 rotate-[3deg] rounded-[4px] border border-line bg-[#fdfbf5] shadow-[0_24px_50px_-30px_rgba(28,25,23,0.5)] sm:w-64">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-accent/70" />
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="mono ml-2 flex-1 truncate rounded bg-paper-2 px-2 py-0.5 text-[9px] text-ink-3">
          thang.dev
        </span>
      </div>
      <div className="space-y-2 p-3">
        <div className="h-2 w-3/4 rounded bg-line" />
        <div className="h-2 w-full rounded bg-line/70" />
        <div className="h-2 w-5/6 rounded bg-line/70" />
        <div className="mt-2 h-4 w-20 rounded-sm bg-accent/20" />
      </div>
    </div>
  );
}

const TERM_EXTRA: string[][] = [
  ["npm run deploy", "✓ build ok — 42s"],
  ["new message: khách gửi yêu cầu", "> đọc & tư vấn hướng làm"],
  ["coffee refill", "☕ +1 — năng lượng đầy"],
];

function TerminalCard() {
  const [step, setStep] = useState(0);
  const extra = TERM_EXTRA.slice(0, step);

  return (
    <button
      type="button"
      onClick={() => setStep((s) => (s + 1) % (TERM_EXTRA.length + 1))}
      data-cursor="gõ lệnh"
      className="w-60 -rotate-[2deg] rounded-[4px] bg-ink text-left text-paper shadow-[0_24px_50px_-28px_rgba(28,25,23,0.7)] sm:w-72"
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-accent/80" />
        <span className="h-2 w-2 rounded-full bg-white/25" />
        <span className="h-2 w-2 rounded-full bg-white/25" />
        <span className="mono ml-2 text-[9px] text-white/50">zsh — thang</span>
      </div>
      <div className="mono space-y-1.5 p-3 text-[11px] leading-relaxed sm:text-xs">
        <div className="ch2-term-line"><span className="text-accent">$</span> whoami</div>
        <div className="ch2-term-line text-white/80">&gt; thắng — full-stack developer</div>
        <div className="ch2-term-line"><span className="text-accent">$</span> git push origin main</div>
        <div className="ch2-term-line text-white/80">✓ deployed to production</div>
        {extra.map((group, gi) => (
          <div key={gi}>
            {group.map((line, li) => (
              <div key={li} className="term-new">
                {line.startsWith("$") ? (
                  <span className="text-accent">$</span>
                ) : null}
                {line.replace(/^\$ /, "")}
              </div>
            ))}
          </div>
        ))}
        <div className="text-white/40">
          <span className="text-accent">$</span>{" "}
          <span className="inline-block w-2 animate-pulse">▌</span>
        </div>
      </div>
    </button>
  );
}

function NoteCard({
  front,
  back,
  className = "",
  color = "bg-[#f7e8b8]",
}: {
  front: string;
  back: string;
  className?: string;
  color?: string;
}) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      data-cursor="lật ghi chú"
      className={`flip-card ch2-note w-32 ${flipped ? "flipped" : ""} ${color} rotate-[4deg] px-3 py-3 text-center shadow-[0_12px_24px_-16px_rgba(28,25,23,0.6)] sm:w-36 ${className}`}
    >
      <span className="flip-inner block min-h-[3.5rem]">
        <span className="flip-face block min-h-[3.5rem]">
          <span className="hand text-xl leading-tight text-ink">{front}</span>
        </span>
        <span className="flip-face flip-back block">
          <span className="hand text-xl leading-tight text-ink">{back}</span>
        </span>
      </span>
    </button>
  );
}

export default function Chapter02() {
  const root = useRef<HTMLElement>(null);
  const coffeeRef = useRef<HTMLButtonElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduced) return;
      if (!window.matchMedia("(min-width: 768px)").matches) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".ch2-stage-wrap",
          start: "top top",
          end: "+=170%",
          pin: ".ch2-stage",
          scrub: 1,
          anticipatePin: 1,
        },
      });
      tl.fromTo(
        ".ch2-laptop",
        { y: 70, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "none" },
        0
      )
        .fromTo(
          ".ch2-code-line",
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, stagger: 0.06, duration: 0.6, ease: "none" },
          0.15
        )
        .fromTo(
          ".ch2-browser",
          { x: 140, opacity: 0, rotate: 8 },
          { x: 0, opacity: 1, rotate: 3, duration: 0.5, ease: "none" },
          0.35
        )
        .fromTo(
          ".ch2-term",
          { x: -120, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "none" },
          0.5
        )
        .fromTo(
          ".ch2-term-line",
          { opacity: 0 },
          { opacity: 1, stagger: 0.2, duration: 0.3, ease: "none" },
          0.55
        )
        .fromTo(
          ".ch2-note",
          { opacity: 0, scale: 0.7, rotate: -12 },
          { opacity: 1, scale: 1, stagger: 0.12, duration: 0.4, ease: "none" },
          0.7
        )
        .to(".ch2-laptop", { y: -26, duration: 1, ease: "none" }, 0.85);
    },
    { scope: root }
  );

  const runCode = () => {
    const lines = root.current?.querySelectorAll(".ch2-code-line");
    if (lines?.length) {
      gsap.fromTo(
        lines,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, stagger: 0.05, duration: 0.4, ease: "power2.out" }
      );
    }
  };

  const sip = () => {
    const el = coffeeRef.current;
    if (!el) return;
    const steam = el.querySelectorAll(".coffee-steam");
    gsap.fromTo(
      steam,
      { opacity: 0.15, scaleY: 0.4, transformOrigin: "bottom" },
      { opacity: 0.7, scaleY: 1, stagger: 0.08, duration: 0.5, ease: "power2.out" }
    );
    gsap.fromTo(
      el,
      { rotation: -5 },
      { rotation: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" }
    );
  };

  return (
    <section ref={root} id="chapter-builder" className="relative">
      <div className="px-5 pt-24 sm:px-10 sm:pt-32 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <ChapterHeading
            num="02"
            en="builder"
            title={
              <span>
                Đây là nơi{" "}
                <span className="text-accent">mình xây mọi thứ.</span>
              </span>
            }
          />
        </div>
      </div>

      <div className="ch2-stage-wrap relative mt-10">
        {/* Desktop pinned stage */}
        <div className="ch2-stage ch2-desktop-stage relative hidden h-screen overflow-hidden md:block">
          <div className="dot-paper absolute inset-0" aria-hidden />
          <p className="hand pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 text-xl text-ink-3">
            psst… thử bấm mọi thứ ✨
          </p>
          <div className="relative mx-auto h-full max-w-6xl px-6">
            {/* laptop */}
            <div
              className="ch2-laptop absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              data-cursor="chạy code"
              role="button"
              tabIndex={0}
              onClick={runCode}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  runCode();
                }
              }}
            >
              <div className="relative">
                <Laptop className="w-[340px] text-ink sm:w-[420px]" />
                <div className="absolute left-[15%] top-[16%] w-[70%]">
                  <CodeBlock />
                </div>
              </div>
            </div>

            {/* browser */}
            <div className="ch2-browser absolute right-4 top-14 sm:right-10 sm:top-20">
              <BrowserCard />
            </div>

            {/* terminal */}
            <div className="ch2-term absolute bottom-16 left-4 sm:bottom-20 sm:left-8">
              <TerminalCard />
            </div>

            {/* coffee */}
            <button
              type="button"
              ref={coffeeRef}
              onClick={sip}
              data-cursor="nhấp cà phê"
              className="absolute bottom-10 right-14 hidden lg:block"
            >
              <CoffeeCup className="w-16 text-ink-2" />
            </button>

            {/* sticky notes */}
            <NoteCard
              front="coffee first ☕"
              back="powered by caffeine"
              className="absolute left-24 top-24"
              color="bg-[#f7e8b8]"
            />
            <NoteCard
              front="ship it 🚀"
              back="done is better than perfect"
              className="absolute right-28 top-[58%]"
              color="bg-[#dbecc9]"
            />
          </div>
        </div>

        {/* Mobile stacked scene */}
        <div className="ch2-mobile-stage mx-auto grid max-w-md gap-8 px-5 md:hidden">
          <Reveal>
            <div
              className="relative mx-auto"
              role="button"
              tabIndex={0}
              onClick={runCode}
              data-cursor="chạy code"
            >
              <Laptop className="w-full text-ink" />
              <div className="absolute left-[15%] top-[14%] w-[70%]">
                <CodeBlock />
              </div>
            </div>
          </Reveal>
          <div className="flex flex-col items-center gap-5">
            <Reveal className="flex w-full justify-center">
              <BrowserCard />
            </Reveal>
            <Reveal className="flex w-full justify-center">
              <TerminalCard />
            </Reveal>
          </div>
          <Reveal className="flex justify-center gap-3">
            <NoteCard
              front="coffee first ☕"
              back="powered by caffeine"
              className="rotate-[-2deg]"
              color="bg-[#f7e8b8]"
            />
            <NoteCard
              front="ship it 🚀"
              back="done is better than perfect"
              className="rotate-[2deg]"
              color="bg-[#dbecc9]"
            />
          </Reveal>
        </div>
      </div>

      <div className="px-5 pb-24 pt-16 sm:px-10 sm:pb-32 lg:px-16">
        <Reveal className="mx-auto max-w-2xl" y={24}>
          <p className="font-display text-xl leading-relaxed text-ink-2 sm:text-2xl">
            Từ giao diện đến backend, từ một ý tưởng chưa rõ ràng đến một sản
            phẩm đang chạy — đây là nơi mọi thứ được ráp nối lại với nhau.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
