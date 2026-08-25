"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type WorkingBriefSlide = {
  key: string;
  label: string;
  headline: string;
  description: string;
  move: string;
  image: {
    src: string;
    alt: string;
  };
};

const workingBriefSlides: WorkingBriefSlide[] = [
  {
    key: "enquiries",
    label: "Leads arrive everywhere",
    headline: "Leads arrive everywhere.",
    description: "Calls, messages and emails make ownership and follow-up difficult to see.",
    move: "One visible enquiry flow",
    image: {
      src: "/business-situations/enquiry-flow.png",
      alt: "Messages, calls and email represented as connected enquiry inputs."
    }
  },
  {
    key: "operations",
    label: "Work lives in too many places",
    headline: "Work lives in too many places.",
    description: "Orders, approvals and updates are spread across spreadsheets and conversations.",
    move: "One shared operational view",
    image: {
      src: "/business-situations/bounded-workflow.png",
      alt: "A connected workflow board bringing scattered work into one visible process."
    }
  },
  {
    key: "new-product",
    label: "The idea is clear. The product isn't",
    headline: "The idea is clear. The product isn't.",
    description: "Turn business intent into a focused, buildable first release.",
    move: "A clear product direction",
    image: {
      src: "/business-situations/product-clarity.png",
      alt: "Product notes and interface sketches arranged into a clearer product direction."
    }
  },
  {
    key: "existing-software",
    label: "Every change feels risky",
    headline: "Every change feels risky.",
    description: "Untangle dependencies and create a more dependable release path.",
    move: "A safer way forward",
    image: {
      src: "/business-situations/stable-release.png",
      alt: "Tangled dependencies becoming a more organised release path."
    }
  },
  {
    key: "ai-opportunity",
    label: "AI needs a real job",
    headline: "AI needs a real job.",
    description: "Define its role, limits, evaluation and fallback before building.",
    move: "Responsible AI in real use",
    image: {
      src: "/business-situations/bounded-workflow.png",
      alt: "A bounded workflow with review points and a controlled evaluation path."
    }
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
    setActiveIndex((current) => (current + direction + workingBriefSlides.length) % workingBriefSlides.length);
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
      <figure className="brief-slide-visual" key={`${slide.key}-image`} aria-hidden="true">
        <Image
          src={slide.image.src}
          alt=""
          fill
          sizes="(max-width: 640px) 90vw, 44vw"
          priority={activeIndex === 0}
        />
      </figure>

      <div className="brief-topline">
        <span className="mono">Common business situation</span>
        <b>{formatCounter(activeIndex)}/{String(workingBriefSlides.length).padStart(2, "0")}</b>
      </div>

      <div className="working-brief-slide" key={slide.key} aria-live="off">
        <div className="brief-short-copy">
          <h2>{slide.headline}</h2>
          <p>{slide.description}</p>
        </div>
        <div className="brief-move">
          <span className="mono">Orilto move</span>
          <strong>{slide.move}</strong>
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
        Business situation {formatCounter(activeIndex)} of {String(workingBriefSlides.length).padStart(2, "0")}: {slide.headline}
      </span>
    </div>
  );
}
