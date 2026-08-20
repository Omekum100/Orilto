import Link from "next/link";
import { Linkedin } from "lucide-react";
import { site } from "@/content/site-copy";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="dark section-tight">
      <div className="container footer-grid">
        <div>
          <Link className="brand" href="/">
            <span className="brand-mark" style={{ background: "#fff", color: "var(--ink)" }}>O</span>
            <span>Orilto</span>
          </Link>
          <p className="copy muted">{site.description}</p>
          <p className="editorial h3">{site.tagline}</p>
        </div>
        <div><p className="mono eyebrow">Services</p><Link href="/services">Offers</Link></div>
        <div><p className="mono eyebrow">Company</p><Link href="/work">Work</Link><br /><Link href="/about">About</Link></div>
        <div><p className="mono eyebrow">Contact</p><a href={`mailto:${site.email}`}>{site.email}</a><br /><span>{site.location}</span></div>
        <div>
          <p className="mono eyebrow">Links</p>
          <a href="https://www.linkedin.com/company/orilto/" target="_blank" rel="noreferrer noopener"><Linkedin size={16} /> LinkedIn</a><br />
          <Link href="/privacy">Privacy</Link><br /><Link href="/terms">Terms</Link>
        </div>
      </div>
      <div className="container" style={{ marginTop: 48, color: "rgba(255,255,255,.55)", fontSize: 14 }}>
        Copyright {year} Orilto. All rights reserved.
      </div>
    </footer>
  );
}
