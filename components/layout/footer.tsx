import Link from "next/link";
import { site } from "@/content/site-copy";
import { Brand } from "@/components/layout/brand";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="dark site-footer">
      <div className="container footer-grid">
        <div>
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
