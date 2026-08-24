import type { Metadata } from "next";
import Link from "next/link";
import { offers, services } from "@/content/services";
import { CtaLink } from "@/components/ui/cta-link";
import { analyticsEvents } from "@/lib/analytics/events";
import { serviceJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Services",
  description: "Outcome-based product strategy, UX, engineering, responsible AI, cloud reliability, business websites, and long-term product partnership from Orilto.",
  alternates: { canonical: "/services" }
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container services-hero-grid">
          <div>
            <p className="mono eyebrow">Services</p>
            <h1 className="h1">Work organized around business outcomes.</h1>
            <p className="lede">Orilto helps teams clarify what should be built, design the experience, engineer the system, and keep improving after launch.</p>
          </div>
          <aside className="service-hero-index" aria-label="How Orilto helps">
            <p className="mono">One partner, from friction to follow-through</p>
            <ol>
              <li><span>01</span><strong>Clarify the opportunity</strong></li>
              <li><span>02</span><strong>Design the right experience</strong></li>
              <li><span>03</span><strong>Build a useful release</strong></li>
              <li><span>04</span><strong>Improve how it runs</strong></li>
            </ol>
          </aside>
        </div>
      </section>
      <section className="section-compact offer-section">
        <div className="container">
          <div className="services-section-intro">
            <p className="mono eyebrow">Choose your starting point</p>
            <p>Start with the constraint you feel most clearly. We shape the engagement around the outcome, not a fixed list of deliverables.</p>
          </div>
          <div className="offer-grid services-offer-grid">
          {offers.map((offer, index) => (
            <article className="surface offer-card service-offer-card" key={offer.title}>
              <p className="mono muted">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="h3">{offer.title}</h2>
              <p>{offer.summary}</p>
              <CtaLink href="/contact" variant="ghost" event={analyticsEvents.serviceEnquiryClick} label={offer.title}>Discuss this offer</CtaLink>
            </article>
          ))}
          </div>
        </div>
      </section>
      <section className="section-compact operational-band">
        <div className="container">
          <div className="services-capabilities-intro">
            <div>
              <p className="mono eyebrow">How we can help</p>
              <h2 className="h2">Start with the problem that is slowing you down.</h2>
            </div>
            <p>Each capability turns a specific kind of friction into a clearer decision, a more useful product, or a system that can keep working.</p>
          </div>
          <nav className="service-capability-nav" aria-label="Service capabilities">
            {services.map((service, index) => (
              <a href={`#${service.slug}`} key={service.slug}><span>{String(index + 1).padStart(2, "0")}</span>{service.title}</a>
            ))}
          </nav>
          {services.map((service, index) => (
            <article className="service-detail" id={service.slug} key={service.slug}>
              <div className="service-detail-main">
                <div className="service-detail-number mono">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="h3">{service.title}</h3>
                  <p className="service-detail-outcome">{service.summary}</p>
                  <p className="service-detail-audience"><span className="mono">Best for</span>{service.forWhom}</p>
                  <Link className="btn btn-ghost" href={`/work/${service.relatedCaseStudy}`}>See related work</Link>
                </div>
              </div>
              <details className="service-scope">
                <summary><span>Explore scope</span><span className="mono">05 scope points</span></summary>
                <div className="service-meta">
                  <Info title="Problem it solves" text={service.problem} />
                  <Info title="Expected outcome" text={service.outcome} />
                  <Info title="Engagement boundary" text={service.boundaries} />
                  <Info title="Typical activities" text={service.activities.join(", ")} />
                  <Info title="Deliverables" text={service.deliverables.join(", ")} />
                </div>
              </details>
              <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(service.title, service.summary)) }} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function Info({ title, text }: { title: string; text: string }) {
  return <div className="surface info-card"><p className="mono eyebrow">{title}</p><p>{text}</p></div>;
}
