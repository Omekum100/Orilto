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
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) return;
      const focusable = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
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
            <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile navigation" ref={drawerRef}>
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
