import Link from "next/link";

export default function NotFound() {
  return <section className="page-hero"><div className="container"><p className="mono eyebrow">404</p><h1 className="h1">This page is not available.</h1><p className="lede">The page may have moved, or the link may be incomplete.</p><Link className="btn btn-primary" href="/">Go home</Link></div></section>;
}
