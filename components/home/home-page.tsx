import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { WorkflowDiagram } from "@/components/hero/workflow-diagram";
import { CtaLink } from "@/components/ui/cta-link";
import { offers } from "@/content/services";
import { caseStudies } from "@/content/case-studies";
import { aiPrinciples, processSteps, whyOrilto } from "@/content/principles";
import { trustSignals } from "@/content/site-copy";
import { analyticsEvents } from "@/lib/analytics/events";

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container grid-12 hero-grid">
          <div className="hero-copy">
            <p className="mono eyebrow">Product engineering + responsible AI</p>
            <h1 className="h1">Turn business intent into <span className="editorial">products that work.</span></h1>
            <p className="lede muted">Orilto brings product strategy, design, engineering, AI, and cloud delivery together to build digital systems that solve real business problems-and continue working beyond the demo.</p>
            <div className="hero-actions">
              <CtaLink href="/contact" event={analyticsEvents.primaryCtaClick} label="hero">Tell us what needs to change</CtaLink>
              <CtaLink href="/work" variant="secondary" event={analyticsEvents.secondaryCtaClick} label="hero">See our work</CtaLink>
            </div>
            <p className="cap-line mono">Strategy · UX · Engineering · AI · Cloud</p>
            <p className="location">Built in India. Working with ambitious businesses everywhere.</p>
          </div>
          <div className="hero-visual"><WorkflowDiagram /></div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-12 split">
          <h2 className="h2">Between the idea and the outcome, important decisions get lost.</h2>
          <div>
            <p className="lede">Design providers can struggle to build the product. Development vendors can miss the business reason. AI experiments can look impressive but never become safe, dependable workflows.</p>
            <p className="copy">Orilto connects business intent to product decisions, product decisions to software, and software to measurable progress.</p>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <p className="mono eyebrow">Who we help</p>
          <div className="grid-12" style={{ marginTop: 20 }}>
            <article className="surface lane-card" style={{ gridColumn: "span 6" }}>
              <div><h3 className="h3">Products that need to become real</h3><p>For founders and teams creating SaaS platforms, marketplaces, internal tools, customer portals, and AI-enabled products.</p></div>
              <div><p className="muted">The problem is not only building faster. It is deciding what should exist first.</p><Link href="/services" className="btn btn-ghost">Shape the first release</Link></div>
            </article>
            <article className="surface lane-card" style={{ gridColumn: "span 6" }}>
              <div><h3 className="h3">Businesses that need to work better</h3><p>For growing and specialist businesses replacing fragmented workflows, improving customer journeys, or establishing a clearer digital presence.</p></div>
              <div><p className="muted">The problem is operational friction becoming normal.</p><Link href="/contact" className="btn btn-ghost">Explain the friction</Link></div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="mono eyebrow">Offers</p>
          <h2 className="h2">Outcome-shaped work, not generic service menus.</h2>
          <div className="offer-grid">
            {offers.map((offer, index) => (
              <article className="surface offer-card" key={offer.title}>
                <p className="mono muted">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="h3">{offer.title}</h3>
                <p>{offer.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dark section">
        <div className="container">
          <p className="mono eyebrow">Featured work</p>
          <h2 className="h2">Two examples of practical product judgement.</h2>
          <div style={{ display: "grid", gap: 22, marginTop: 34 }}>
            {caseStudies.map((study) => (
              <article className="surface case-preview" key={study.slug} style={{ color: "var(--ink)" }}>
                <div className="case-art">
                  <p className="mono">{study.client}</p>
                  <div className="diagram-box">Need → Direction → System → Evidence</div>
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="mono eyebrow">How Orilto works</p>
          <h2 className="h2">A calm path from ambiguity to operation.</h2>
          <div className="process">
            {processSteps.map(([num, title, text]) => (
              <article className="process-step" key={num}><span className="step-dot" /><p className="mono eyebrow">{num}</p><h3>{title}</h3><p className="muted">{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container grid-12 split">
          <div><p className="mono eyebrow">Responsible AI</p><h2 className="h2">AI with a job to do.</h2><p className="lede">Orilto uses AI when it meaningfully reduces friction or increases capability. The work includes boundaries, evaluation, review, cost controls, and fallback behavior.</p></div>
          <div>
            <div className="ai-flow">
              {["Input", "AI processing", "Validation", "Human review", "Verified output"].map((step) => <div className="ai-cell" key={step}><p className="mono">{step}</p></div>)}
            </div>
            <div className="tag-row">{aiPrinciples.map((p) => <span className="tag" key={p}>{p}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="mono eyebrow">Why Orilto</p>
          <div className="principles">{whyOrilto.map(([title, text]) => <article className="surface offer-card" key={title}><CheckCircle2 color="var(--success)" /><h3>{title}</h3><p className="muted">{text}</p></article>)}</div>
        </div>
      </section>

      <section className="dark section-tight">
        <div className="container">
          <p className="mono eyebrow">Operational trust</p>
          <h2 className="h2">Credibility without invented proof.</h2>
          <div className="trust-grid" style={{ marginTop: 28 }}>{trustSignals.map((signal) => <div className="trust-card" key={signal}>{signal}</div>)}</div>
        </div>
      </section>

      <section className="dark section">
        <div className="container grid-12 split">
          <h2 className="h2">What does your business need next?</h2>
          <div><p className="lede muted">Tell us where the friction is, what needs to change, or what you are trying to build. We will help identify the smallest useful next step.</p><div className="hero-actions"><CtaLink href="/contact" event={analyticsEvents.primaryCtaClick} label="final">Start a conversation</CtaLink><a className="btn btn-secondary" href="mailto:hello@orilto.com">Email hello@orilto.com</a></div></div>
        </div>
      </section>
    </>
  );
}
