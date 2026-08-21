"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site-copy";
import { CtaLink } from "@/components/ui/cta-link";
import { analyticsEvents } from "@/lib/analytics/events";
import { Brand } from "@/components/layout/brand";

export function Header() {
  const pathname = usePathname();
  const nav = site.nav;

  return (
    <header className="site-header">
      <div className="container nav-frame">
        <div className="nav-wrap">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map((item) => (
              <Link key={item.href} className="nav-link" href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
            <CtaLink href="/contact" variant="primary" event={analyticsEvents.primaryCtaClick} label="header">
              Start a conversation
            </CtaLink>
          </nav>
          <details className="mobile-menu">
            <summary className="menu-button" aria-label="Open navigation">
              <span className="menu-icon-open"><Menu size={21} /></span>
              <span className="menu-icon-close"><X size={21} /></span>
            </summary>
            <div className="mobile-overlay" aria-hidden="true" />
            <div className="mobile-drawer" role="dialog" aria-label="Mobile navigation">
              <div className="mobile-drawer-top">
                <Brand compact />
                <span className="mobile-drawer-label mono">Menu</span>
              </div>
              <nav className="mobile-nav" aria-label="Mobile navigation">
                {nav.map((item) => (
                  <Link key={item.href} className="mobile-nav-link" href={item.href}>{item.label}</Link>
                ))}
                <CtaLink href="/contact" event={analyticsEvents.primaryCtaClick} label="mobile-nav">
                  Start a conversation
                </CtaLink>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
