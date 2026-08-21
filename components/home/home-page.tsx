import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { WorkflowDiagram } from "@/components/hero/workflow-diagram";
import { CtaLink } from "@/components/ui/cta-link";
import { offers } from "@/content/services";
import { caseStudies } from "@/content/case-studies";
import { aiPrinciples, whyOrilto } from "@/content/principles";
import { trustSignals } from "@/content/site-copy";
import { analyticsEvents } from "@/lib/analytics/events";
import { LayeredVisual } from "@/components/ui/layered-visual";
import { Reveal } from "@/components/ui/reveal";
import { ProcessTimeline } from "@/components/process/process-timeline";

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container grid-12 hero-grid">
          <div className="hero-copy">
            <p className="mono eyebrow">Product engineering + responsible AI</p>
            <h1 className="h1 hero-tagline">
              <span className="tagline-row">
                <span className="tagline-part" data-tone="design">Not just design.</span>
                <span className="tagline-part" data-tone="code">Not just code.</span>
              </span>
              <span className="tagline-part editorial" data-tone="build">We build what grows your business.</span>
            </h1>
            <p className="lede muted">Orilto brings product strategy, design, engineering, AI, and cloud delivery together to build digital systems that solve real business problems and continue working beyond the demo.</p>
            <div className="hero-actions">
              <CtaLink href="/contact" event={analyticsEvents.primaryCtaClick} label="hero">Tell us what needs to change</CtaLink>
              <CtaLink href="/work" variant="secondary" event={analyticsEvents.secondaryCtaClick} label="hero">See our work</CtaLink>
            </div>
            <p className="cap-line mono">Strategy / UX / Engineering / AI / Cloud</p>
            <p className="location">Built in India. Working with ambitious businesses everywhere.</p>
          </div>
          <div className="hero-visual"><WorkflowDiagram /></div>
        </div>
      </section>

      <section className="section operational-band">
        <div className="container grid-12 split">
          <Reveal><h2 className="h2">Between the idea and the outcome, important decisions get lost.</h2></Reveal>
          <div>
            <Reveal delay={0.06}>
              <p className="lede">Design providers can struggle to build the product. Development vendors can miss the business reason. AI experiments can look impressive but never become safe, dependable workflows.</p>
              <p className="copy">Orilto connects business intent to product decisions, product decisions to software, and software to measurable progress.</p>
            </Reveal>
            <Reveal delay={0.12}>
              <LayeredVisual
                back="/case-studies/ravi-hydraulics/workshop-mechanic.jpg"
                front="/case-studies/telo-hive/hero6.png"
                backAlt="Workshop operations that need dependable digital systems"
                frontAlt="TeloHive product interface visual"
                label="Operations in the background. Product decisions in front."
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-tight compact-band">
        <div className="container">
          <p className="mono eyebrow">Who we help</p>
          <div className="grid-12 section-grid">
            <Reveal className="surface lane-card" delay={0.02}>
              <div className="lane-card-intro"><h3 className="h3">Products that need to become real</h3><p>For founders and teams creating SaaS platforms, marketplaces, internal tools, customer portals, and AI-enabled products.</p></div>
              <div className="lane-card-action"><p className="muted">The problem is not only building faster. It is deciding what should exist first.</p><Link href="/services" className="btn btn-ghost">Shape the first release</Link></div>
            </Reveal>
            <Reveal className="surface lane-card" delay={0.1}>
              <div className="lane-card-intro"><h3 className="h3">Businesses that need to work better</h3><p>For growing and specialist businesses replacing fragmented workflows, improving customer journeys, or establishing a clearer digital presence.</p></div>
              <div className="lane-card-action"><p className="muted">The problem is operational friction becoming normal.</p><Link href="/contact" className="btn btn-ghost">Explain the friction</Link></div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section offer-section">
        <div className="container">
          <div className="section-head">
            <p className="mono eyebrow">Offers</p>
            <h2 className="h2">Outcome-shaped work, not generic service menus.</h2>
          </div>
          <div className="offer-grid">
            {offers.map((offer, index) => (
              <Reveal className="surface offer-card" key={offer.title} delay={index * 0.04}>
                <p className="mono muted">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="h3">{offer.title}</h3>
                <p>{offer.summary}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="dark section">
        <div className="container">
          <p className="mono eyebrow">Featured work</p>
          <h2 className="h2 featured-work-title">Two examples of practical product judgement.</h2>
          <div className="case-stack">
            {caseStudies.map((study) => (
              <Reveal className="surface case-preview" key={study.slug} delay={0.04} >
                <div className="case-art">
                  <p className="mono">{study.client}</p>
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
                      />
                    ))}
                  </div>
                  <div className="status-grid">
                    <div className="status"><b>Shipped</b><br />{study.status.shipped[0]}</div>
                    <div className="status"><b>In progress</b><br />{study.status.inProgress[0]}</div>
                    <div className="status"><b>Planned</b><br />{study.status.planned[0]}</div>
                  </div>
                </div>
                <div>
                  <p className="mono eyebrow">{study.client}</p>
                  <h3 className="h3">{study.title}</h3>
                  <p>{study.summary}</p>
                  <div className="tag-row">{study.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                  <div className="details-list">
                    <div><b>The business need:</b> {study.need}</div>
                    <div><b>The challenge:</b> {study.challenge}</div>
                    <div><b>Orilto's contribution:</b> {study.contribution}</div>
                    <div><b>What was delivered:</b> {study.delivered.join(", ")}</div>
                    <div><b>Available evidence:</b> {study.evidence.join(", ")}</div>
                  </div>
                  <CtaLink href={`/work/${study.slug}`} variant="ghost" event={analyticsEvents.caseStudyOpen} label={study.slug}>Read case study</CtaLink>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <p className="mono eyebrow">How Orilto works</p>
          <h2 className="h2">A calm path from ambiguity to operation.</h2>
          <ProcessTimeline />
        </div>
      </section>

      <section className="section-tight intelligence-band">
        <div className="container grid-12 split">
          <div><p className="mono eyebrow">Responsible AI</p><h2 className="h2">AI with a job to do.</h2><p className="lede">Orilto uses AI when it meaningfully reduces friction or increases capability. The work includes boundaries, evaluation, review, cost controls, and fallback behavior.</p></div>
          <div>
            <Reveal>
              <LayeredVisual
                back="/case-studies/telo-hive/rooftop-sunset.jpg"
                front="/case-studies/telo-hive/hero6.png"
                backAlt="Event venue context for a practical AI workflow"
                frontAlt="AI-enabled venue discovery interface"
                label="AI supports the workflow. It does not replace judgement."
              />
            </Reveal>
            <div className="ai-flow">
              {["Input", "AI processing", "Validation", "Human review", "Verified output"].map((step) => <div className="ai-cell" key={step}><p className="mono">{step}</p></div>)}
            </div>
            <div className="tag-row">{aiPrinciples.map((p) => <span className="tag" key={p}>{p}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="section principle-section">
        <div className="container">
          <p className="mono eyebrow">Why Orilto</p>
          <div className="principles">
            {whyOrilto.map(([title, text], index) => (
              <article className="principle-card" key={title} data-tone={index + 1}>
                <div className="principle-topline">
                  <span className="principle-number">{String(index + 1).padStart(2, "0")}</span>
                  <CheckCircle2 className="principle-icon" aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dark section-tight">
        <div className="container">
          <p className="mono eyebrow">Operational trust</p>
          <h2 className="h2">Credibility without invented proof.</h2>
          <div className="trust-grid section-grid">{trustSignals.map((signal) => <div className="trust-card" key={signal}>{signal}</div>)}</div>
        </div>
      </section>

      <section className="dark section cta-band">
        <div className="container grid-12 split">
          <h2 className="h2">What does your business need next?</h2>
          <div><p className="lede muted">Tell us where the friction is, what needs to change, or what you are trying to build. We will help identify the smallest useful next step.</p><div className="hero-actions"><CtaLink href="/contact" event={analyticsEvents.primaryCtaClick} label="final">Start a conversation</CtaLink><a className="btn btn-secondary" href="mailto:hello@orilto.com">Email hello@orilto.com</a></div></div>
        </div>
      </section>
    </>
  );
}
