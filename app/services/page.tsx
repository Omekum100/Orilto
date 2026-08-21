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
        <div className="container">
          <p className="mono eyebrow">Services</p>
          <h1 className="h1">Work organized around business outcomes.</h1>
          <p className="lede">Orilto helps teams clarify what should be built, design the experience, engineer the system, and keep improving after launch.</p>
        </div>
      </section>
      <section className="section-compact offer-section">
        <div className="container offer-grid services-offer-grid">
          {offers.map((offer, index) => (
            <article className="surface offer-card service-offer-card" key={offer.title}>
              <p className="mono muted">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="h3">{offer.title}</h2>
              <p>{offer.summary}</p>
              <CtaLink href="/contact" variant="ghost" event={analyticsEvents.serviceEnquiryClick} label={offer.title}>Discuss this offer</CtaLink>
            </article>
          ))}
        </div>
      </section>
      <section className="section-compact operational-band">
        <div className="container">
          <p className="mono eyebrow">Detailed capabilities</p>
          {services.map((service) => (
            <article className="service-detail" id={service.slug} key={service.slug}>
              <div>
                <h2 className="h3">{service.title}</h2>
                <p className="muted">{service.summary}</p>
                <Link className="btn btn-ghost" href={`/work/${service.relatedCaseStudy}`}>Related case study</Link>
              </div>
              <div className="service-meta">
                <Info title="Who it is for" text={service.forWhom} />
                <Info title="Problem it solves" text={service.problem} />
                <Info title="Expected outcome" text={service.outcome} />
                <Info title="Engagement boundary" text={service.boundaries} />
                <Info title="Typical activities" text={service.activities.join(", ")} />
                <Info title="Deliverables" text={service.deliverables.join(", ")} />
              </div>
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
