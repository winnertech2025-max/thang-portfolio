"use client";

import { useEffect, useMemo, useState } from "react";

type TextTypeProps = {
  text: string | string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  loop?: boolean;
  showCursor?: boolean;
  onComplete?: () => void;
};

export function TextType({
  text,
  className = "",
  typingSpeed = 42,
  deletingSpeed = 24,
  pauseDuration = 1400,
  loop = false,
  showCursor = true,
  onComplete,
}: TextTypeProps) {
  const texts = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex] ?? "";

    if (!deleting && displayed === current) {
      if (!loop || texts.length === 1) {
        onComplete?.();
        return;
      }

      const pauseTimer = window.setTimeout(() => setDeleting(true), pauseDuration);
      return () => window.clearTimeout(pauseTimer);
    }

    if (deleting && displayed === "") {
      const resetTimer = window.setTimeout(() => {
        setDeleting(false);
        setTextIndex((index) => (index + 1) % texts.length);
      }, 0);

      return () => window.clearTimeout(resetTimer);
    }

    const timer = window.setTimeout(
      () => {
        setDisplayed((value) =>
          deleting ? current.slice(0, Math.max(0, value.length - 1)) : current.slice(0, value.length + 1),
        );
      },
      deleting ? deletingSpeed : typingSpeed,
    );

    return () => window.clearTimeout(timer);
  }, [deleting, deletingSpeed, displayed, loop, onComplete, pauseDuration, textIndex, texts, typingSpeed]);

  return (
    <span className={className}>
      {displayed}
      {showCursor ? <span className="type-cursor" aria-hidden="true" /> : null}
    </span>
  );
}
