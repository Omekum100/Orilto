import type { Metadata } from "next";
import { caseStudies } from "@/content/case-studies";
import { CtaLink } from "@/components/ui/cta-link";
import { analyticsEvents } from "@/lib/analytics/events";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected Orilto case studies showing product strategy, UX, engineering, responsible AI, and credible digital presence work without unsupported claims.",
  alternates: { canonical: "/work" }
};

export default function WorkPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="mono eyebrow">Work</p>
          <h1 className="h1">Case studies with status, evidence, and limits.</h1>
          <p className="lede">A small set of selected projects. Claims are limited to supplied or observable work, with remaining opportunities named clearly.</p>
        </div>
      </section>
      <section className="section-tight">
        <div className="container" style={{ display: "grid", gap: 22 }}>
          {caseStudies.map((study) => (
            <article className="surface case-preview" key={study.slug}>
              <div className="case-art">
                <p className="mono eyebrow">{study.client}</p>
                <div className="diagram-box">{study.tags.slice(0, 3).join(" · ")}</div>
                <div className="status-grid">
                  <div className="status"><b>Shipped</b><br />{study.status.shipped[0]}</div>
                  <div className="status"><b>In progress</b><br />{study.status.inProgress[0]}</div>
                  <div className="status"><b>Planned</b><br />{study.status.planned[0]}</div>
                </div>
              </div>
              <div>
                <h2 className="h3">{study.title}</h2>
                <p>{study.summary}</p>
                <div className="tag-row">{study.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                <CtaLink href={`/work/${study.slug}`} variant="ghost" event={analyticsEvents.caseStudyOpen} label={study.slug}>Read case study</CtaLink>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
