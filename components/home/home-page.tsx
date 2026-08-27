import Link from "next/link";
import Image from "next/image";
import { CtaLink } from "@/components/ui/cta-link";
import { offers } from "@/content/services";
import { caseStudies } from "@/content/case-studies";
import { oriltoStarts, site, trustSignals } from "@/content/site-copy";
import { analyticsEvents } from "@/lib/analytics/events";
import { HeroMottoTypewriter } from "@/components/home/hero-motto-typewriter";

const systemRows = [
  ["Unclear intent", "A written product decision", "Decide"],
  ["Scattered work", "One visible workflow", "Connect"],
  ["Risky delivery", "A releasable product slice", "Build"],
  ["Hidden status", "Evidence: delivered, verified and supportable", "Verify"]
] as const;

const evidenceRows = [
  ["Decision", "Begin with typed discovery and a marketplace-shaped first release."],
  ["Product", "Consumer discovery, partner workflows, operations tooling and connected APIs."],
  ["AI boundary", "AI assists discovery; structured tools, guardrails and fallback paths carry the workflow."],
  ["Evidence", "Delivered capabilities are explained without invented impact claims."]
] as const;

const aiChecks = ["Job", "Boundary", "Evaluation", "Fallback", "Cost", "Oversight"] as const;

const heroMottos = oriltoStarts.map((start) => ({
  code: start.code,
  label: start.label,
  text:
    start.code === "01"
      ? "Turn ideas into products."
      : start.code === "02"
        ? "Make products feel credible."
        : "Make daily work easier."
}));

const heroCollageImages = [
  {
    src: "/business-situations/enquiry-flow.png",
    alt: "Connected enquiry inputs across calls, messages and email."
  },
  {
    src: "/business-situations/product-clarity.png",
    alt: "Product notes and interface sketches arranged into a clear direction."
  },
  {
    src: "/business-situations/stable-release.png",
    alt: "A visual release path from tangled dependencies to clearer delivery."
  },
  {
    src: "/business-situations/bounded-workflow.png",
    alt: "A bounded workflow with review points and connected operational steps."
  }
] as const;

export function HomePage() {
  const teloHive = caseStudies.find((study) => study.slug === "telo-hive") ?? caseStudies[0];
  const ravi = caseStudies.find((study) => study.slug === "ravi-hydraulics") ?? caseStudies[1];

  return (
    <div className="draft-home">
      <section className="draft-hero" aria-labelledby="home-hero-title">
        <div className="hero-collage" aria-hidden="true">
          {heroCollageImages.map((image, index) => (
            <figure className={`hero-collage-frame frame-${index + 1}`} key={image.src}>
              <Image
                src={image.src}
                alt=""
                fill
                sizes="(max-width: 640px) 60vw, 34vw"
                priority={index === 0}
              />
            </figure>
          ))}
        </div>
        <div className="draft-rail" aria-hidden="true"><span />01</div>
        <div className="container draft-hero-grid">
          <div className="draft-hero-copy">
            <p className="mono draft-kicker">Product strategy · engineering · responsible AI</p>
            <HeroMottoTypewriter headingId="home-hero-title" mottos={heroMottos} />
            <div className="draft-rule" aria-hidden="true" />
            <div className="draft-body draft-hero-description">
              <p>An opportunity taking shape. A process slowing the team down. Software that no longer fits.</p>
              <p>We help you understand what matters, decide what should be built, and deliver a dependable system your team can use in the real world.</p>
            </div>
            <p className="draft-tagline" aria-label={site.tagline}>
              <span>Not just design.</span>
              <span>Not just code.</span>
              <strong>We build what grows your business.</strong>
            </p>
            <div className="draft-actions">
              <CtaLink href="/contact" event={analyticsEvents.primaryCtaClick} label="hero">Tell us what should work better</CtaLink>
              <CtaLink href="#situations" variant="secondary" event={analyticsEvents.secondaryCtaClick} label="hero">Find your starting point</CtaLink>
            </div>
          </div>
        </div>
      </section>

      <section className="draft-section" id="situations" aria-labelledby="situations-title">
        <div className="draft-rail" aria-hidden="true"><span />02</div>
        <div className="container">
          <div className="draft-two-col draft-section-head">
            <div>
              <p className="mono draft-kicker">Find your starting point</p>
              <h2 id="situations-title" className="draft-heading">Three ways Orilto helps work move.</h2>
            </div>
            <p className="draft-body">Start with the pressure you can already feel. We turn it into a clearer decision, a better product, or a controlled AI workflow.</p>
          </div>
          <div className="situation-register motto-register">
            {oriltoStarts.map((item) => (
              <article className="situation-row motto-row" key={item.code}>
                <p className="mono">{item.code}</p>
                <h3>{item.label}</h3>
                <p>{item.summary}</p>
                <span>{item.route}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="draft-section draft-system-section" aria-labelledby="system-title">
        <div className="draft-rail" aria-hidden="true"><span />03</div>
        <div className="container">
          <div className="draft-two-col draft-section-head">
            <div>
              <p className="mono draft-kicker">From friction to a working system</p>
              <h2 id="system-title" className="draft-heading">The product is not the pile of features.</h2>
            </div>
            <p className="draft-editorial small">It is the change the business can finally see and operate.</p>
          </div>
          <div className="system-table" role="list">
            {systemRows.map(([before, after, action]) => (
              <div className="system-row" role="listitem" key={before}>
                <span>{before}</span>
                <i aria-hidden="true" />
                <strong>{after}</strong>
                <b>{action}</b>
              </div>
            ))}
          </div>
          <div className="system-summary">
            <span>A decision</span>
            <span>A product</span>
            <span>Evidence</span>
            <span>Ownership</span>
          </div>
        </div>
      </section>

      <section className="case-file-section" aria-labelledby="proof-title">
        <div className="draft-rail dark-rail" aria-hidden="true"><span />04</div>
        <div className="container">
          <div className="case-file-head">
            <div>
              <p className="mono draft-kicker">One case, opened</p>
              <h2 id="proof-title" className="draft-heading">Proof should read like a decision trail.</h2>
            </div>
            <Link className="draft-button signal" href={`/work/${teloHive.slug}`}>Open case file</Link>
          </div>
          <div className="case-file-grid">
            <div>
              <p className="mono">Lead case / Telo-Hive</p>
              <h3>From an event-planning problem to a connected AI-first marketplace.</h3>
            </div>
            <blockquote>
              Help people describe an event naturally and make the answer useful to venues, vendors and operations.
            </blockquote>
          </div>
          <div className="evidence-trail">
            {evidenceRows.map(([label, text]) => (
              <div key={label}>
                <span className="mono">{label}</span>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div className="secondary-case">
            <p>Also relevant: {ravi.client} makes a specialist business easier to understand and contact.</p>
            <Link href={`/work/${ravi.slug}`}>Open file</Link>
          </div>
        </div>
      </section>

      <section className="draft-section" aria-labelledby="offers-title">
        <div className="draft-rail" aria-hidden="true"><span />05</div>
        <div className="container">
          <div className="draft-two-col draft-section-head">
            <div>
              <p className="mono draft-kicker">The smallest useful engagement</p>
              <h2 id="offers-title" className="draft-heading">Start where the uncertainty is.</h2>
            </div>
            <p className="draft-body">Orilto does not force every client into a large build. The first engagement should create a useful decision or working outcome.</p>
          </div>
          <div className="engagement-register">
            {offers.map((offer, index) => (
              <article className="engagement-row" key={offer.title}>
                <span className="mono">{String.fromCharCode(65 + index)} / {index === 0 ? "Clarify" : index === 1 ? "Explain" : index === 2 ? "Build" : index === 3 ? "Bound" : "Continue"}</span>
                <h3>{offer.title}</h3>
                <p>{offer.summary}</p>
                <Link href="/contact">Discuss this start</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="draft-section ai-check-section" aria-labelledby="ai-title">
        <div className="draft-rail" aria-hidden="true"><span />06</div>
        <div className="container draft-two-col">
          <div>
            <p className="mono draft-kicker">AI with a job to do</p>
            <h2 id="ai-title" className="draft-heading">No AI theatre. No black box.</h2>
            <p className="draft-body">We use AI when it meaningfully reduces friction or increases capability. The product still needs boundaries, evidence, review and a fallback.</p>
            <p className="draft-editorial small">If the workflow is not clearer with AI, it does not belong in the first release.</p>
          </div>
          <div className="ai-sheet">
            <p className="mono">AI operating check</p>
            {aiChecks.map((check, index) => (
              <div key={check}><span className="mono">{String(index + 1).padStart(2, "0")}</span><strong>{check}</strong></div>
            ))}
            <Link href="/services">Evaluate an AI workflow</Link>
          </div>
        </div>
      </section>

      <section className="draft-section contact-draft-section" aria-labelledby="contact-title">
        <div className="draft-rail" aria-hidden="true"><span />07</div>
        <div className="container draft-two-col">
          <div>
            <p className="mono draft-kicker">Start with the rough version</p>
            <h2 id="contact-title" className="draft-heading">What should work better next?</h2>
            <p className="draft-body">A useful first message does not need a polished requirements document. Tell us where the friction is, what feels stuck and what a better outcome would look like.</p>
            <p className="draft-contact"><span>Email</span><a href={`mailto:${site.email}`}>{site.email}</a></p>
            <p className="draft-contact"><span>Call</span><a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></p>
          </div>
          <form className="mini-brief" action="/contact">
            <h3 className="mini-brief-heading">Share your starting brief</h3>
            <label>Name<input name="name" placeholder="Your name" /></label>
            <label>Work email<input name="email" placeholder="you@company.com" /></label>
            <label>What needs to change?<textarea name="message" placeholder="Describe the friction, affected people and useful outcome..." /></label>
            <button className="draft-button signal" type="submit">Send the rough version</button>
          </form>
        </div>
      </section>

      <section className="draft-trust-strip" aria-label="Operational trust signals">
        <div className="container">
          {trustSignals.map((signal) => <span key={signal}>{signal}</span>)}
        </div>
      </section>
    </div>
  );
}
