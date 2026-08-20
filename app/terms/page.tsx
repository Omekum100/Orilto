import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms", description: "Orilto website terms.", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return <section className="page-hero"><div className="container"><p className="mono eyebrow">Orilto</p><h1 className="h1">Website terms</h1><div className="copy"><p>This website provides general information about Orilto services. It is not a binding proposal, warranty, or guarantee of specific outcomes.</p><p>Project work is governed by a separate written agreement covering scope, responsibilities, fees, timelines, confidentiality, intellectual property, and acceptance criteria.</p><p>External links are provided for convenience. Orilto is not responsible for third-party content or services.</p><p>Contact hello@orilto.com for questions about these terms.</p></div></div></section>;
}
