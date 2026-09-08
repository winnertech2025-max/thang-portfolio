"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { ChapterHeading, Reveal, Squiggle } from "../ui";

const HIGHLIGHTS = [
  "Product-minded development",
  "Responsive, accessible UI",
  "Backend & database integration",
  "Production deployment workflow",
];

export default function Chapter01() {
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
            trigger: ".ch1-statement",
            start: "top 72%",
            toggleActions: "play none none none",
          },
        })
        .fromTo(
          ".ch1-line",
          { yPercent: 112 },
          { yPercent: 0, duration: 1.05, ease: "power4.out", stagger: 0.1 }
        );

      // stats count-up
      gsap.utils.toArray<HTMLElement>(".ch1-num").forEach((el) => {
        const target = Number(el.dataset.count || "0");
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.textContent = String(Math.round(obj.v));
          },
        });
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="chapter-beginning"
      className="relative px-5 py-24 sm:px-10 sm:py-36 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <ChapterHeading
          num="01"
          en="beginning"
          title={
            <span className="ch1-statement inline-block">
              <span className="block overflow-hidden pb-[0.05em]">
                <span className="ch1-line block">Mọi thứ bắt đầu</span>
              </span>
              <span className="block overflow-hidden pb-[0.05em]">
                <span className="ch1-line block">
                  từ một ý tưởng{" "}
                  <span className="text-accent">đơn giản.</span>
                </span>
              </span>
            </span>
          }
        />

        <Reveal className="mt-12 max-w-2xl sm:mt-16">
          <p className="font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
            <span className="text-accent">“</span>
            Mình muốn hiểu những thứ trên màn hình thực sự hoạt động như thế
            nào.
            <span className="text-accent">”</span>
          </p>
        </Reveal>

        <Reveal className="mt-6 max-w-2xl" y={24}>
          <p className="text-base leading-relaxed text-ink-2 sm:text-lg">
            Chào mọi người, mình là{" "}
            <span className="font-semibold text-ink">Lê Quốc Thắng</span>. Mình
            thích biến những yêu cầu còn rời rạc thành sản phẩm chạy được, dễ
            dùng và dễ phát triển tiếp. Công việc hằng ngày của mình xoay quanh{" "}
            React, Next.js, Node.js, Supabase và mobile app.
          </p>
        </Reveal>

        {/* Person + stats */}
        <div className="mt-20 grid gap-12 sm:mt-28 lg:grid-cols-[1fr_auto] lg:gap-20">
          <Reveal className="max-w-xl" y={26}>
            <p className="font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
              Mình xây sản phẩm từ giao diện đến backend — không chỉ là những
              bản demo UI.
            </p>
            <p className="mt-6 text-base leading-relaxed text-ink-3 sm:text-lg">
              Điểm mạnh của mình là kết hợp tư duy sản phẩm với kỹ thuật
              full-stack: thiết kế luồng người dùng, dựng UI responsive, tích
              hợp API, quản lý dữ liệu và triển khai production.
            </p>

            <ul className="mt-8 space-y-3">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-center gap-3 text-ink-2">
                  <span
                    className="h-1.5 w-1.5 rotate-45 bg-accent"
                    aria-hidden
                  />
                  <span className="text-sm sm:text-base">{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="grid gap-7 lg:w-[340px]" y={26}>
            <div className="relative -rotate-[2deg] rounded-[3px] border border-line bg-[#fdfbf5] p-3 shadow-[0_30px_60px_-35px_rgba(28,25,23,0.55)]">
              <div
                className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-[2deg] border border-line bg-paper-2/80"
                aria-hidden
              />
              <div className="relative aspect-square overflow-hidden rounded-[2px] bg-paper-2">
                <Image
                  src="/avatar.jpg"
                  alt="Lê Quốc Thắng"
                  fill
                  sizes="(min-width: 1024px) 340px, 90vw"
                  className="object-cover [filter:grayscale(0.08)_sepia(0.08)_contrast(1.02)]"
                  priority
                />
              </div>
              <p className="hand mt-3 text-center text-2xl text-ink-2">
                Lê Quốc Thắng
              </p>
            </div>

            <div className="relative rotate-[1deg] rounded-[3px] border border-line bg-[#fdfbf5] p-7 shadow-[0_30px_60px_-35px_rgba(28,25,23,0.5)]">
              <div className="hand absolute -top-4 left-4 bg-paper px-2 text-lg text-accent">
                quick stats
              </div>
              <dl className="space-y-7">
                {[
                  { n: "4", s: "+", label: "năm kinh nghiệm" },
                  { n: "11", s: "+", label: "dự án tiêu biểu" },
                  { n: "2", s: "", label: "nền tảng — web + mobile" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-baseline justify-between gap-4"
                  >
                    <div className="font-display text-5xl font-semibold text-ink">
                      <span className="ch1-num" data-count={stat.n}>
                        0
                      </span>
                      <span className="text-accent">{stat.s}</span>
                    </div>
                    <div className="mono text-right text-[11px] uppercase tracking-[0.18em] text-ink-3">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </dl>
              <Squiggle className="mt-6 h-3 w-full text-line-strong" />
              <p className="hand mt-2 text-right text-lg text-ink-3">
                and counting…
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
