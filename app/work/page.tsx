import type { Metadata } from "next";
import Image from "next/image";
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
      <section className="section-compact">
        <div className="container case-stack">
          {caseStudies.map((study) => (
            <article className="surface case-preview" key={study.slug}>
              <div className="case-art">
                <p className="mono eyebrow">{study.client}</p>
                <div className="image-mosaic">
                  {study.images.slice(0, 3).map((image, index) => (
                    <Image
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      width={index === 0 ? 720 : 360}
                      height={index === 0 ? 420 : 280}
                      className="case-image"
                      sizes="(max-width: 900px) 90vw, 34vw"
                      quality={index === 0 ? 76 : 72}
                    />
                  ))}
                </div>
                <div className="status-grid finished-summary">
                  <div className="status"><b>Delivered</b><br />{study.delivered[0]}</div>
                  <div className="status"><b>Contribution</b><br />{study.tags[0]}</div>
                  <div className="status"><b>Evidence</b><br />{study.evidence[0]}</div>
                </div>
              </div>
              <div>
                <h2 className="h3">{study.title}</h2>
                <p>{study.summary}</p>
                <dl className="case-signal-list">
                  <div>
                    <dt>Situation</dt>
                    <dd>{study.need}</dd>
                  </div>
                  <div>
                    <dt>Contribution</dt>
                    <dd>{study.contribution}</dd>
                  </div>
                  <div>
                    <dt>Evidence</dt>
                    <dd>{study.evidence[0]}</dd>
                  </div>
                  <div>
                    <dt>Limits</dt>
                    <dd>{study.sections.limitations}</dd>
                  </div>
                </dl>
                <div className="tag-row">{study.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                <div className="case-actions">
                  <CtaLink href={`/work/${study.slug}`} variant="ghost" event={analyticsEvents.caseStudyOpen} label={study.slug}>Read case study</CtaLink>
                  <a className="btn btn-secondary" href={study.websiteUrl} target="_blank" rel="noopener noreferrer">Visit website</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
