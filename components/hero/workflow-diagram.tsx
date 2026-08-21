"use client";

import { useEffect, useRef, useState } from "react";

const nodes = [
  ["Business Intent", "Reduce manual quotation work"],
  ["Product Decisions", "Structured enquiry workflow"],
  ["Reliable System", "Portal + API + controlled AI"],
  ["Business Momentum", "Faster, clearer operations"]
] as const;

export function WorkflowDiagram() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setActive(4);
      return;
    }

    const card = cardRef.current;
    if (!card) return;

    let timers: number[] = [];
    const clearTimers = () => {
      timers.forEach(window.clearTimeout);
      timers = [];
    };
    const play = () => {
      clearTimers();
      setActive(0);
      timers = nodes.map((_, index) => window.setTimeout(() => setActive(index + 1), 180 + index * 360));
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play();
        } else {
          clearTimers();
          setActive(0);
        }
      },
      { threshold: 0.42 }
    );

    observer.observe(card);
    return () => {
      clearTimers();
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={cardRef} className="workflow-card" aria-label="Business intent to product momentum workflow">
      <div className={`workflow-toolbar ${active > 0 ? "workflow-toolbar-active" : ""}`} aria-hidden="true">
        <span />
        <span />
        <span />
        <b>Operating system map</b>
      </div>
      <svg viewBox="0 0 520 620" role="img">
        <title>Business Intent connects to Product Decisions, Reliable System, and Business Momentum.</title>
        {nodes.slice(0, -1).map((_, index) => (
          <line
            key={index}
            x1="260"
            y1={118 + index * 145}
            x2="260"
            y2={178 + index * 145}
            className={`workflow-line ${active > index + 1 ? "active" : ""}`}
          />
        ))}
        {nodes.map(([title, example], index) => (
          <g key={title} transform={`translate(50 ${30 + index * 145})`}>
            <rect width="420" height="92" rx="18" className={`workflow-node ${active > index ? "workflow-active" : ""}`} />
            <text x="26" y="38" className="workflow-text">{title}</text>
            <text x="26" y="66" className="workflow-small">{example}</text>
          </g>
        ))}
      </svg>
      <div className="workflow-metadata" aria-hidden="true">
        <div>
          <span className="mono">Release path</span>
          <strong>Useful first version</strong>
        </div>
        <div>
          <span className="mono">Controls</span>
          <strong>Risk, cost, review</strong>
        </div>
      </div>
    </div>
  );
}
