"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { ChapterHeading, Reveal } from "../ui";
import { PROJECTS, type Project } from "@/data/content";

function ProjectFrame({
  project,
  index,
  priority = false,
  revealed,
  onToggle,
}: {
  project: Project;
  index: number;
  priority?: boolean;
  revealed: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="group relative min-w-0">
      <div className="mb-3 flex items-center justify-between gap-4">
        <span className="mono text-[10px] uppercase tracking-[0.3em] text-ink-3">
          Project {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-3">
          {project.featured ? (
            <span className="mono border-b border-accent text-[9px] uppercase tracking-[0.22em] text-accent">
              New work
            </span>
          ) : null}
          <span className="mono flex items-center gap-1.5 text-[9px] uppercase tracking-[0.2em] text-ink-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3f8f61]" /> Live
          </span>
        </div>
      </div>

      <div className="min-w-0 overflow-hidden rounded-[4px] border border-line-strong/60 bg-paper-2 shadow-[0_18px_50px_rgba(35,30,24,0.09)]">
        <div className="flex h-8 items-center gap-1.5 border-b border-line bg-paper px-3" aria-hidden>
          <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#c7a25b]/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#3f8f61]/70" />
          <span className="mono ml-2 min-w-0 truncate text-[8px] uppercase tracking-[0.18em] text-ink-3">
            {project.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
          </span>
        </div>
        <button
          type="button"
          onClick={onToggle}
          data-cursor={revealed ? "phác thảo" : "xem màu"}
          aria-pressed={revealed}
          aria-label={`${revealed ? "Hiện bản phác thảo" : "Hiện đầy đủ màu"} của ${project.name}`}
          className="relative block aspect-[16/10] w-full overflow-hidden bg-paper-2 text-left"
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.name} — ${project.category}`}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              priority={priority}
              className={`transition-[filter,transform] duration-700 group-hover:scale-[1.015] ${
                revealed ? "sketch-img" : ""
              } ${
                project.portrait
                  ? "object-contain object-center p-3"
                  : "object-cover object-top"
              }`}
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
              <span className="font-display text-4xl text-ink-3">✎</span>
              <p className="hand text-xl text-ink-3">screenshot coming soon</p>
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/55 to-transparent px-4 pb-3 pt-12 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="mono text-[9px] uppercase tracking-[0.18em]">Xem giao diện</span>
            <span aria-hidden>↗</span>
          </div>
        </button>
      </div>

      <p className="hand mt-2 text-sm text-ink-3">
        {revealed ? "bản phác thảo — bấm để trở lại" : "bấm ảnh để xem nét phác thảo"}
      </p>
    </div>
  );
}

function ProjectInfo({ project }: { project: Project }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <p className="hand text-xl text-accent sm:text-2xl">{project.category}</p>
        {project.year ? (
          <span className="mono border-l border-line-strong pl-3 text-[10px] tracking-[0.2em] text-ink-3">
            {project.year}
          </span>
        ) : null}
      </div>
      <h3 className="font-display mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {project.name}
      </h3>
      <p className="mt-4 max-w-md text-base leading-relaxed text-ink-3">
        {project.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="mono rounded-[3px] border border-line-strong/60 bg-paper-2 px-2.5 py-1 text-[11px] uppercase tracking-wide text-ink-2"
          >
            {s}
          </span>
        ))}
      </div>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="mở"
        className="group/link mt-6 inline-flex items-center gap-2 border-b-2 border-accent pb-0.5 text-sm font-semibold text-ink transition-colors hover:text-accent"
      >
        Ghé thăm website
        <span className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5">
          ↗
        </span>
      </a>
    </div>
  );
}

export default function Chapter04() {
  const root = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const toggle = (id: string) =>
    setRevealed((r) => ({ ...r, [id]: !r[id] }));

  useGSAP(
    () => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduced) return;
      if (!window.matchMedia("(min-width: 768px)").matches) return;

      const slides = gsap.utils.toArray<HTMLElement>(".ch4-slide");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".ch4-stage-wrap",
          start: "top top",
          end: `+=${(slides.length - 1) * 62}%`,
          pin: ".ch4-stage",
          scrub: 1,
          anticipatePin: 1,
        },
      });

      tl.set(slides, { autoAlpha: 0, x: 0, rotateY: 0 }, 0);

      slides.forEach((slide, i) => {
        if (i === 0) {
          tl.set(slide, { autoAlpha: 1 }, 0);
        } else {
          tl.fromTo(
            slide,
            { autoAlpha: 0, x: 110, rotateY: -6 },
            {
              autoAlpha: 1,
              x: 0,
              rotateY: 0,
              duration: 0.55,
              ease: "power2.out",
            },
            i
          ).to(
            slides[i - 1],
            {
              autoAlpha: 0,
              x: -90,
              rotateY: 6,
              duration: 0.5,
              ease: "power2.in",
            },
            i + 0.05
          );
        }
      });

      gsap.fromTo(
        progressRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left",
          ease: "none",
          scrollTrigger: {
            trigger: ".ch4-stage-wrap",
            start: "top top",
            end: `+=${(PROJECTS.length - 1) * 62}%`,
            scrub: true,
          },
        }
      );
    },
    { scope: root }
  );

  return (
    <section ref={root} id="chapter-work" className="relative">
      <div className="px-5 pt-24 sm:px-10 sm:pt-32 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <ChapterHeading
            num="04"
            en="work"
            title={
              <span>
                Những thứ <span className="text-accent">mình đã xây.</span>
              </span>
            }
          />
          <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <Reveal className="max-w-xl" y={20}>
              <p className="text-base text-ink-3 sm:text-lg">
                Những sản phẩm thật đang hoạt động — từ website thương hiệu,
                thương mại điện tử đến nền tảng vận hành và mobile app.
              </p>
            </Reveal>
            <Reveal y={16}>
              <div className="flex items-baseline gap-2 border-b border-line-strong pb-2">
                <span className="font-display text-4xl font-semibold text-ink">{PROJECTS.length}</span>
                <span className="mono text-[10px] uppercase tracking-[0.22em] text-ink-3">selected projects</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="ch4-stage-wrap relative mt-10">
        {/* Desktop pinned gallery */}
        <div
          className="ch4-stage ch4-desktop-stage relative hidden h-screen overflow-hidden md:block"
          style={{ perspective: "1400px" }}
        >
          <div className="dot-paper absolute inset-0" aria-hidden />
          {PROJECTS.map((p, i) => (
            <div
              key={p.id}
              className="ch4-slide absolute inset-0 flex items-center justify-center px-6 sm:px-12"
              style={{
                opacity: i === 0 ? 1 : 0,
                visibility: i === 0 ? "visible" : "hidden",
              }}
            >
              <div className="grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.25fr_1fr]">
                <ProjectFrame
                  project={p}
                  index={i}
                  priority={i === 0}
                  revealed={!!revealed[p.id]}
                  onToggle={() => toggle(p.id)}
                />
                <ProjectInfo project={p} />
              </div>
            </div>
          ))}

          {/* progress hint */}
          <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="hand text-lg text-ink-3">
              cuộn để khám phá — {PROJECTS.length} dự án
            </p>
            <div className="mx-auto mt-2 h-px w-40 overflow-hidden bg-line">
              <span
                ref={progressRef}
                className="absolute inset-0 origin-left scale-x-0 bg-accent"
              />
            </div>
          </div>
        </div>

        {/* Mobile stacked gallery */}
        <div className="ch4-mobile-stage mx-auto grid min-w-0 max-w-xl gap-14 px-5 md:hidden">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} className="min-w-0">
              <div className="min-w-0 space-y-5">
                <ProjectFrame
                  project={p}
                  index={i}
                  priority={i < 2}
                  revealed={!!revealed[p.id]}
                  onToggle={() => toggle(p.id)}
                />
                <ProjectInfo project={p} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
