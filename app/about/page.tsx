import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { whyOrilto, aiPrinciples } from "@/content/principles";
import { oriltoStarts } from "@/content/site-copy";

export const metadata: Metadata = {
  title: "About",
  description: "Orilto exists to help ambitious businesses connect strategy, user experience, software, AI, and cloud delivery with accountability.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="mono eyebrow">About</p>
          <h1 className="h1">A product engineering company built for accountable work.</h1>
          <p className="lede">Orilto exists because serious businesses need more than isolated design files, disconnected code, or AI experiments without operational judgement.</p>
        </div>
      </section>
      <section className="section-tight">
        <div className="container grid-12 split">
          <div><h2 className="h2">Vision</h2><p className="lede">A world where practical businesses can build dependable digital systems without losing the intent that made the work worth doing.</p></div>
          <div><h2 className="h2">Mission</h2><p className="lede">To turn business intent into products that work through clear strategy, humane experience design, quality engineering, responsible AI, and reliable cloud delivery.</p></div>
        </div>
      </section>
      <section className="section-tight about-starts-section">
        <div className="container">
          <div className="about-starts-head">
            <p className="mono eyebrow">What that means in practice</p>
            <h2 className="h2">We help from the point where momentum gets stuck.</h2>
          </div>
          <div className="about-starts-grid">
            {oriltoStarts.map((start) => (
              <article className="about-start-card" key={start.code}>
                <span className="mono">{start.code}</span>
                <h3>{start.label}</h3>
                <p>{start.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container principles">
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
      </section>
      <section className="dark section-tight">
        <div className="container grid-12 split ai-philosophy">
          <div><h2 className="h2">Responsible AI philosophy</h2><p className="lede muted">AI should have a useful job, a measurable boundary, and a fallback when confidence is not enough.</p></div>
          <div className="ai-principle-chips">{aiPrinciples.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
        </div>
      </section>
      <section className="section-tight">
        <div className="container grid-12 split">
          <div><h2 className="h2">Founder and team</h2><p className="lede">Orilto is India-based and globally capable, built around senior product judgement, clear communication, and dependable delivery.</p></div>
          <div><h2 className="h2">Delivery philosophy</h2><p className="lede">We define the smallest useful next step, build in visible increments, verify what matters, and leave the product easier to operate than we found it.</p><Link className="btn btn-primary" href="/contact">Start a conversation</Link></div>
        </div>
      </section>
    </>
  );
}
