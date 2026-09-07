"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { ChapterHeading, Reveal } from "../ui";
import { PROJECTS, type Project } from "@/data/content";

function ProjectFrame({
  project,
  index,
  priority = false,
}: {
  project: Project;
  index: number;
  priority?: boolean;
}) {
  return (
    <div className="group relative">
      <span className="mono absolute -top-3 left-0 z-10 bg-paper pr-3 text-[10px] uppercase tracking-[0.3em] text-ink-3">
        Project {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative aspect-[16/10] overflow-hidden rounded-[3px] border border-line bg-paper-2">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name} — ${project.category}`}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            priority={priority}
            className={`transition-[filter] duration-500 group-hover:[filter:none] [filter:grayscale(1)_sepia(0.15)_contrast(1.04)_brightness(0.99)] ${
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
        {/* paper grain overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
          aria-hidden
        />
      </div>
    </div>
  );
}

function ProjectInfo({ project }: { project: Project }) {
  return (
    <div>
      <p className="hand text-xl text-accent sm:text-2xl">{project.category}</p>
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
          <Reveal className="mt-6 max-w-xl" y={20}>
            <p className="text-base text-ink-3 sm:text-lg">
              Các dự án tiêu biểu gần nhất. Trước đó mình còn tham gia hơn 10–20
              dự án khác — nhưng đây là những sản phẩm mình muốn kể.
            </p>
          </Reveal>
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
            >
              <div className="grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.25fr_1fr]">
                <ProjectFrame project={p} index={i} priority={i === 0} />
                <ProjectInfo project={p} />
              </div>
            </div>
          ))}

          {/* progress hint */}
          <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="hand text-lg text-ink-3">
              keep scrolling — {PROJECTS.length} projects ahead
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
        <div className="ch4-mobile-stage mx-auto grid max-w-xl gap-14 px-5 md:hidden">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id}>
              <div className="space-y-5">
                <ProjectFrame project={p} index={i} priority={i < 2} />
                <ProjectInfo project={p} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
