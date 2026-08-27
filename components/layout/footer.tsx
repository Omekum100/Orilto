import Link from "next/link";
import { oriltoStarts, site } from "@/content/site-copy";
import { Brand } from "@/components/layout/brand";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="dark site-footer">
      <div className="container footer-callout">
        <div>
          <p className="mono eyebrow">Start with the rough version</p>
          <h2>Have a useful problem to solve?</h2>
        </div>
        <Link className="footer-cta" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
      </div>
      <nav className="container footer-starts" aria-label="Choose a starting point">
        {oriltoStarts.map((start) => (
          <Link href="/contact" key={start.code}>
            <span className="mono">{start.code}</span>
            <strong>{start.label}</strong>
          </Link>
        ))}
      </nav>
      <div className="container footer-grid">
        <div className="footer-brand-block">
          <Brand />
          <p className="copy muted">{site.description}</p>
        </div>
        <div><p className="mono eyebrow">Services</p><Link href="/services">Offers</Link></div>
        <div><p className="mono eyebrow">Company</p><Link href="/work">Work</Link><br /><Link href="/about">About</Link></div>
        <div>
          <p className="mono eyebrow">Contact</p>
          <a href={`mailto:${site.email}`}>{site.email}</a><br />
          <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a><br />
          <a href={site.detailsPhoneHref}>{site.detailsPhone}</a><br />
          <span>{site.location}</span>
        </div>
        <div>
          <p className="mono eyebrow">Links</p>
          <a href={site.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn</a><br />
          <Link href="/privacy">Privacy</Link><br /><Link href="/terms">Terms</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        Copyright {year} Orilto. All rights reserved.
      </div>
    </footer>
  );
}
