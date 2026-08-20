"use client";

import type { AnalyticsEvent } from "./events";

export function track(event: AnalyticsEvent, properties?: Record<string, string>) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("orilto:analytics", { detail: { event, properties } }));
}
