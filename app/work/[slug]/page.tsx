import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { services } from "@/content/services";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { site } from "@/content/site-copy";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.client} Case Study`,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: { title: study.title, description: study.summary, type: "article" }
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();
  const related = services.filter((service) => service.relatedCaseStudy === study.slug).slice(0, 4);
  const crumbs = breadcrumbJsonLd([
    { name: "Home", url: site.url },
    { name: "Work", url: `${site.url}/work` },
    { name: study.client, url: `${site.url}/work/${study.slug}` }
  ]);

  return (
    <>
      <section className="page-hero dark">
        <div className="container">
          <p className="mono eyebrow">{study.client} case study</p>
          <h1 className="h1">{study.title}</h1>
          <p className="lede muted">{study.summary}</p>
          <a className="btn btn-secondary page-hero-link" href={study.websiteUrl} target="_blank" rel="noopener noreferrer">Visit website</a>
        </div>
      </section>
      <section className="section-tight">
        <div className="container case-study-layout">
          <aside className="toc" aria-label="Case study sections">
            {["Summary", "Context", "Problem", "Constraints", "Direction", "Contribution", "Experience", "Architecture", "Delivered", "Evidence", "Limits", "Opportunities", "Services"].map((item) => <p key={item}>{item}</p>)}
          </aside>
          <article>
            <section className="case-section">
              <h2 className="h3">Product visuals</h2>
              <div className="case-gallery">
                {study.images.map((image, index) => (
                  <Image
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    width={index === 0 ? 1120 : 540}
                    height={index === 0 ? 640 : 360}
                    className="case-image"
                    sizes={index === 0 ? "(max-width: 900px) 90vw, 760px" : "(max-width: 900px) 90vw, 360px"}
                    priority={index === 0}
                  />
                ))}
              </div>
            </section>
            <CaseSection title="Opening summary">{study.summary}</CaseSection>
            <CaseSection title="Business context">{study.sections.context}</CaseSection>
            <CaseSection title="Problem">{study.sections.problem}</CaseSection>
            <CaseSection title="Constraints">{study.sections.constraints}</CaseSection>
            <CaseSection title="Product or project direction">{study.sections.direction}</CaseSection>
            <CaseSection title="Orilto's contribution">{study.contribution}</CaseSection>
            <CaseSection title="Experience and system design">{study.sections.experience}</CaseSection>
            <CaseSection title="Technical architecture">{study.sections.architecture}</CaseSection>
            <section className="case-section"><h2 className="h3">What was delivered</h2><ul>{study.delivered.map((item) => <li key={item}>{item}</li>)}</ul></section>
            <section className="case-section"><h2 className="h3">Evidence</h2><ul>{study.evidence.map((item) => <li key={item}>{item}</li>)}</ul></section>
            <CaseSection title="Limitations and remaining work">{study.sections.limitations}</CaseSection>
            <CaseSection title="Next-stage opportunities">{study.sections.opportunities}</CaseSection>
            <section className="case-section"><h2 className="h3">Related services</h2><div className="tag-row">{related.map((service) => <Link className="tag" href={`/services#${service.slug}`} key={service.slug}>{service.title}</Link>)}</div></section>
            <section className="case-section"><h2 className="h3">Contact CTA</h2><p>Have a similar product or operating problem?</p><Link className="btn btn-primary" href="/contact">Start a conversation</Link></section>
          </article>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
    </>
  );
}

function CaseSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="case-section"><h2 className="h3">{title}</h2><p>{children}</p></section>;
}
