"use client";

import { useEffect, useState } from "react";

type HeroMotto = {
  code: string;
  label: string;
  text: string;
};

type HeroMottoTypewriterProps = {
  headingId: string;
  mottos: readonly HeroMotto[];
};

type TypePhase = "holding" | "deleting" | "typing";

const HOLD_MS = 5200;
const TYPE_MS = 68;
const DELETE_MS = 40;

export function HeroMottoTypewriter({ headingId, mottos }: HeroMottoTypewriterProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleChars, setVisibleChars] = useState(mottos[0]?.label.length ?? 0);
  const [phase, setPhase] = useState<TypePhase>("holding");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const activeMotto = mottos[activeIndex] ?? mottos[0];
  const visibleLabel = prefersReducedMotion
    ? activeMotto.label
    : activeMotto.label.slice(0, visibleChars);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
      if (mediaQuery.matches && mottos[0]) {
        setActiveIndex(0);
        setVisibleChars(mottos[0].label.length);
        setPhase("holding");
      }
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, [mottos]);

  useEffect(() => {
    if (prefersReducedMotion || mottos.length <= 1 || !activeMotto) return;

    if (phase === "holding") {
      const timeout = window.setTimeout(() => setPhase("deleting"), HOLD_MS);
      return () => window.clearTimeout(timeout);
    }

    if (phase === "deleting") {
      const timeout = window.setTimeout(() => {
        if (visibleChars > 0) {
          setVisibleChars((current) => current - 1);
          return;
        }

        const nextIndex = (activeIndex + 1) % mottos.length;
        setActiveIndex(nextIndex);
        setVisibleChars(0);
        setPhase("typing");
      }, DELETE_MS);
      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      if (visibleChars < activeMotto.label.length) {
        setVisibleChars((current) => current + 1);
        return;
      }

      setPhase("holding");
    }, TYPE_MS);

    return () => window.clearTimeout(timeout);
  }, [activeIndex, activeMotto, mottos.length, phase, prefersReducedMotion, visibleChars]);

  if (!activeMotto) return null;

  return (
    <div className="hero-typewriter">
      <div className="hero-type-sizer" aria-hidden="true">
        {mottos.map((motto) => (
          <div className="hero-type-measure" key={motto.code}>
            <p className="mono hero-type-count">{motto.code}</p>
            <div className="draft-display hero-type-title">{motto.label}</div>
            <p className="draft-editorial hero-type-copy">{motto.text}</p>
          </div>
        ))}
      </div>
      <div className="hero-type-live">
        <p className="mono hero-type-count" aria-hidden="true">{activeMotto.code}</p>
        <h1 id={headingId} className="draft-display hero-type-title" aria-label={activeMotto.label}>
          <span aria-hidden="true">{visibleLabel}</span>
          <span className="hero-type-cursor" aria-hidden="true" />
        </h1>
        <p className="draft-editorial hero-type-copy" aria-hidden="true">{activeMotto.text}</p>
      </div>
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {activeMotto.code}. {activeMotto.label}. {activeMotto.text}
      </span>
    </div>
  );
}
