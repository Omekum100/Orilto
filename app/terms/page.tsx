import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms", description: "Orilto website terms.", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return (
    <section className="page-hero terms-page">
      <div className="container terms-layout">
        <div className="terms-heading">
          <p className="mono eyebrow">Orilto</p>
          <h1 className="h1">Website terms</h1>
        </div>
        <div className="copy terms-copy">
          <p>This website provides general information about Orilto services. It is not a binding proposal, warranty, or guarantee of specific outcomes.</p>
          <p>Project work is governed by a separate written agreement covering scope, responsibilities, fees, timelines, confidentiality, intellectual property, and acceptance criteria.</p>
          <p>External links are provided for convenience. Orilto is not responsible for third-party content or services.</p>
          <p>Contact <a href="mailto:hello@orilto.com">hello@orilto.com</a> for questions about these terms.</p>
        </div>
      </div>
    </section>
  );
}
