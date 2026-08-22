"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site-copy";
import { CtaLink } from "@/components/ui/cta-link";
import { analyticsEvents } from "@/lib/analytics/events";
import { Brand } from "@/components/layout/brand";

export function Header() {
  const pathname = usePathname();
  const nav = site.nav;
  const [menuOpen, setMenuOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className={`site-header ${pathname === "/" ? "site-header-home" : ""}`}>
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
          <div className="mobile-menu">
            <button
              className="menu-button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
              type="button"
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
            {menuOpen && <button className="mobile-overlay" aria-label="Close navigation" onClick={() => setMenuOpen(false)} type="button" />}
            {menuOpen && (
            <div className="mobile-drawer" role="dialog" aria-label="Mobile navigation">
              <div className="mobile-drawer-top">
                <Brand compact />
                <button ref={closeButtonRef} className="mobile-drawer-label mono" onClick={() => setMenuOpen(false)} type="button">Close</button>
              </div>
              <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
                {nav.map((item) => (
                  <Link key={item.href} className="mobile-nav-link" href={item.href}>{item.label}</Link>
                ))}
                <CtaLink href="/contact" event={analyticsEvents.primaryCtaClick} label="mobile-nav">
                  Start a conversation
                </CtaLink>
              </nav>
            </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
