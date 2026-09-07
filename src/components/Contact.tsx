"use client";

import { Reveal, Squiggle } from "./ui";
import { CONTACT } from "@/data/content";

const LINKS = [
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    label: "Phone",
    value: CONTACT.phoneDisplay,
    href: `tel:${CONTACT.phone}`,
  },
  {
    label: "GitHub",
    value: "github.com/Thangdev02",
    href: CONTACT.github,
  },
  {
    label: "Facebook",
    value: "Thang Quoc",
    href: CONTACT.facebook,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink px-5 py-24 text-paper sm:px-10 sm:py-36 lg:px-16"
    >
      <div className="mx-auto max-w-4xl">
        {/* final notebook page */}
        <Reveal y={40}>
          <div className="relative rotate-[0.4deg] rounded-[3px] border border-line/50 bg-[#fdfbf5] px-6 py-10 text-ink shadow-[0_60px_120px_-40px_rgba(0,0,0,0.7)] sm:px-14 sm:py-16">
            {/* tape */}
            <div
              className="absolute -top-3 left-1/2 h-6 w-28 -translate-x-1/2 rotate-[-2deg] border border-line bg-paper-2/80"
              aria-hidden
            />

            <p className="hand text-xl text-accent">the final page</p>
            <h2 className="font-display mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Nói chuyện
              <br />
              với mình?
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-3 sm:text-lg">
              Mình luôn sẵn sàng nghe về ý tưởng của bạn — dù nó còn là một bản
              phác thảo mơ hồ.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 rounded-[3px] border border-line bg-paper-2/50 px-4 py-3.5 transition-colors hover:border-accent"
                >
                  <span className="mono text-[10px] uppercase tracking-[0.25em] text-ink-3">
                    {link.label}
                  </span>
                  <span className="flex items-center gap-2 text-sm font-medium text-ink group-hover:text-accent">
                    {link.value}
                    <span className="text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </span>
                </a>
              ))}
            </div>

            {/* signature */}
            <div className="mt-12 border-t border-line pt-8">
              <p className="font-display text-3xl font-semibold text-ink">
                {CONTACT.name}
              </p>
              <p className="mono mt-1 text-[11px] uppercase tracking-[0.3em] text-ink-3">
                {CONTACT.title}
              </p>
              <div className="hand mt-4 text-4xl text-accent">Thang ✍</div>
              <Squiggle className="mt-1 h-3 w-32 text-line-strong" />
            </div>
          </div>
        </Reveal>

        <footer className="mt-16 flex flex-col items-center gap-3 text-center">
          <p className="mono text-[10px] uppercase tracking-[0.3em] text-white/40">
            © {new Date().getFullYear()} {CONTACT.name} — built with care
          </p>
          <p className="hand text-lg text-white/40">
            thanks for reading the whole story.
          </p>
        </footer>
      </div>
    </section>
  );
}
