"use client";

import Link from "next/link";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <section className="page-hero"><div className="container"><p className="mono eyebrow">Error</p><h1 className="h1">Something did not load correctly.</h1><p className="lede">Try again, or return to the home page.</p><div className="hero-actions"><button className="btn btn-primary" onClick={reset}>Try again</button><Link className="btn btn-ghost" href="/">Go home</Link></div></div></section>;
}
