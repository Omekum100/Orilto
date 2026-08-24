"use client";

import { useEffect, useRef, useState } from "react";

type WorkingBriefSlide = {
  key: string;
  label: string;
  situation: string;
  affects: string;
  firstMove: string;
  flow: string[];
  outcome: string;
};

const workingBriefSlides: WorkingBriefSlide[] = [
  {
    key: "enquiries",
    label: "Enquiries",
    situation: "Enquiries arrive through WhatsApp, calls and email. Follow-up depends on memory.",
    affects: "Sales visibility, response time and customer confidence.",
    firstMove: "Create one visible enquiry workflow before adding automation.",
    flow: ["Capture", "Assign", "Follow up"],
    outcome: "Every enquiry has an owner, a status and a clear next step."
  },
  {
    key: "operations",
    label: "Operations",
    situation: "Orders, approvals and updates are spread across spreadsheets and conversations.",
    affects: "Teams repeat work, wait for updates and make decisions using different information.",
    firstMove: "Connect the process through one shared operational view.",
    flow: ["Request", "Approve", "Track"],
    outcome: "Everyone can see the same request, owner, status and next action."
  },
  {
    key: "new-product",
    label: "New product idea",
    situation: "We understand the opportunity, but we cannot yet see the right first product.",
    affects: "The team discusses features before agreeing on the first useful outcome.",
    firstMove: "Define the user, core purpose and smallest useful first release.",
    flow: ["Clarify", "Prioritise", "Validate"],
    outcome: "A clear, buildable first release with priorities and risks visible."
  },
  {
    key: "existing-software",
    label: "Existing software",
    situation: "The software works, but every change takes too long and feels risky.",
    affects: "Delivery slows down because dependencies, risks and ownership are unclear.",
    firstMove: "Review the product and architecture, then stabilise the next meaningful release.",
    flow: ["Review", "Stabilise", "Release"],
    outcome: "A clearer roadmap and a safer delivery path the team can act on."
  },
  {
    key: "ai-opportunity",
    label: "AI opportunity",
    situation: "We want to use AI, but we do not want to build an expensive demonstration.",
    affects: "Time and budget can be spent without a clear operational role or success measure.",
    firstMove: "Give AI one defined job, boundary, evaluation method and fallback.",
    flow: ["Define", "Bound", "Evaluate"],
    outcome: "A controlled AI workflow that can be tested responsibly in real use."
  }
];

const formatCounter = (value: number) => String(value + 1).padStart(2, "0");

export function WorkingBriefSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const swipeStartX = useRef<number | null>(null);
  const slide = workingBriefSlides[activeIndex];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % workingBriefSlides.length);
    }, 8000);
    return () => window.clearInterval(timer);
  }, [activeIndex, isPaused, prefersReducedMotion]);

  const moveTo = (nextIndex: number) => {
    setActiveIndex((nextIndex + workingBriefSlides.length) % workingBriefSlides.length);
  };

  const moveBy = (direction: -1 | 1) => {
    moveTo(activeIndex + direction);
  };

  return (
    <div
      className="working-brief working-brief-slideshow"
      aria-label="Common business situations"
      tabIndex={0}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        const nextTarget = event.relatedTarget;
        if (!nextTarget || !event.currentTarget.contains(nextTarget as Node)) setIsPaused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          moveBy(-1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          moveBy(1);
        }
      }}
      onPointerDown={(event) => {
        swipeStartX.current = event.clientX;
      }}
      onPointerUp={(event) => {
        if (swipeStartX.current === null) return;
        const distance = event.clientX - swipeStartX.current;
        if (Math.abs(distance) >= 48) moveBy(distance > 0 ? -1 : 1);
        swipeStartX.current = null;
      }}
      onPointerCancel={() => {
        swipeStartX.current = null;
      }}
    >
      <div className="brief-topline">
        <span className="mono">Common business situation</span>
        <b>{formatCounter(activeIndex)} / {String(workingBriefSlides.length).padStart(2, "0")}</b>
      </div>

      <div className="working-brief-slide" key={slide.key} aria-live="off">
        <div className="brief-block">
          <p className="mono">01 / Business situation</p>
          <blockquote>{slide.situation}</blockquote>
        </div>
        <div className="brief-block brief-warn">
          <p className="mono">02 / What it affects</p>
          <strong>{slide.affects}</strong>
        </div>
        <div className="brief-block">
          <p className="mono">03 / First product move</p>
          <strong>{slide.firstMove}</strong>
        </div>
        <div className="brief-status">
          <p className="mono">04 / Working flow</p>
          <div className="brief-flow">{slide.flow.map((step) => <span key={step}>{step}</span>)}</div>
          <div className="brief-outcome">
            <b>Useful outcome</b>
            <strong>{slide.outcome}</strong>
          </div>
        </div>
      </div>

      <div className="working-brief-controls">
        <button type="button" className="brief-arrow" onClick={() => moveBy(-1)} aria-label="Previous business situation">←</button>
        <div className="brief-progress" aria-label="Choose a business situation">
          {workingBriefSlides.map((item, index) => (
            <button
              type="button"
              className="brief-progress-dot"
              key={item.key}
              aria-label={`Show business situation ${formatCounter(index)}: ${item.label}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => moveTo(index)}
            />
          ))}
        </div>
        <button type="button" className="brief-arrow" onClick={() => moveBy(1)} aria-label="Next business situation">→</button>
      </div>

      <span className="sr-only" aria-live="polite" aria-atomic="true">
        Business situation {formatCounter(activeIndex)} of {String(workingBriefSlides.length).padStart(2, "0")}: {slide.label}.
      </span>
    </div>
  );
}
