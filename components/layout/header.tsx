"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site-copy";
import { CtaLink } from "@/components/ui/cta-link";
import { analyticsEvents } from "@/lib/analytics/events";

export function Header() {
  const pathname = usePathname();
  const nav = site.nav;

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/" aria-label="Orilto home">
          <span className="brand-mark">O</span>
          <span>Orilto</span>
        </Link>
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
        <Dialog.Root>
          <Dialog.Trigger className="menu-button" aria-label="Open navigation">
            <Menu size={21} />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay style={{ position: "fixed", inset: 0, background: "rgba(23,42,58,.4)", zIndex: 80 }} />
            <Dialog.Content
              aria-describedby={undefined}
              style={{
                position: "fixed",
                inset: "12px 12px auto 12px",
                background: "var(--canvas)",
                border: "1px solid var(--border)",
                borderRadius: 20,
                zIndex: 90,
                padding: 20
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Dialog.Title className="brand">
                  <span className="brand-mark">O</span> Orilto
                </Dialog.Title>
                <Dialog.Close className="menu-button" aria-label="Close navigation" style={{ display: "flex" }}>
                  <X size={21} />
                </Dialog.Close>
              </div>
              <nav aria-label="Mobile navigation" style={{ display: "grid", gap: 12, marginTop: 24 }}>
                {nav.map((item) => (
                  <Dialog.Close asChild key={item.href}>
                    <Link className="h3" href={item.href}>{item.label}</Link>
                  </Dialog.Close>
                ))}
                <Dialog.Close asChild>
                  <CtaLink href="/contact" event={analyticsEvents.primaryCtaClick} label="mobile-nav">
                    Start a conversation
                  </CtaLink>
                </Dialog.Close>
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
