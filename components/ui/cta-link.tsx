"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { track } from "@/lib/analytics/track";
import type { AnalyticsEvent } from "@/lib/analytics/events";

export function CtaLink({
  href,
  children,
  variant = "primary",
  event,
  label
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  event?: AnalyticsEvent;
  label?: string;
}) {
  return (
    <Link
      href={href}
      className={`btn btn-${variant}`}
      onClick={() => event && track(event, label ? { label } : undefined)}
    >
      {children}
      <ArrowRight className="arrow" size={17} aria-hidden="true" />
    </Link>
  );
}
