"use client";

import { useState } from "react";
import { CtaLink } from "@/components/ui/cta-link";
import { offers } from "@/content/services";
import { analyticsEvents } from "@/lib/analytics/events";

const routeLabels = ["Clarify", "Explain", "Build", "Bound", "Continue"] as const;

export function ServiceStartSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeOffer = offers[activeIndex];

  return (
    <div className="service-start-selector">
      <div className="service-start-tabs" role="tablist" aria-label="Choose a service starting point">
        {offers.map((offer, index) => (
          <button
            key={offer.title}
            type="button"
            role="tab"
            id={`service-start-tab-${index}`}
            aria-selected={activeIndex === index}
            aria-controls="service-start-panel"
            tabIndex={activeIndex === index ? 0 : -1}
            className="service-start-tab"
            onClick={() => setActiveIndex(index)}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                const nextIndex = (index - 1 + offers.length) % offers.length;
                setActiveIndex(nextIndex);
                document.getElementById(`service-start-tab-${nextIndex}`)?.focus();
              }
              if (event.key === "ArrowRight") {
                event.preventDefault();
                const nextIndex = (index + 1) % offers.length;
                setActiveIndex(nextIndex);
                document.getElementById(`service-start-tab-${nextIndex}`)?.focus();
              }
            }}
          >
            <span className="mono">{String(index + 1).padStart(2, "0")}</span>
            <strong>{routeLabels[index]}</strong>
            <small>{offer.title}</small>
          </button>
        ))}
      </div>

      <article
        className="service-start-panel"
        id="service-start-panel"
        role="tabpanel"
        aria-labelledby={`service-start-tab-${activeIndex}`}
        key={activeOffer.title}
      >
        <div className="service-start-panel-head">
          <p className="mono">Selected start</p>
          <h2>{activeOffer.title}</h2>
          <p>{activeOffer.summary}</p>
        </div>

        <div className="service-route-map" aria-label={`${activeOffer.title} route`}>
          <div>
            <span className="mono">Friction</span>
            <strong>{activeOffer.bestFor}</strong>
          </div>
          <i aria-hidden="true" />
          <div>
            <span className="mono">First output</span>
            <strong>{activeOffer.firstOutput}</strong>
          </div>
          <i aria-hidden="true" />
          <div>
            <span className="mono">Boundary</span>
            <strong>{activeOffer.notRight}</strong>
          </div>
        </div>

        <CtaLink href="/contact" variant="ghost" event={analyticsEvents.serviceEnquiryClick} label={activeOffer.title}>
          Discuss this start
        </CtaLink>
      </article>
    </div>
  );
}
