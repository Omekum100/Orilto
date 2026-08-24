import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy", description: "Orilto privacy notice.", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return <Policy title="Privacy notice" items={["We collect contact details and project information only when you submit them.", "We use enquiry information to respond, qualify fit, and maintain communication records.", "We do not sell personal information.", "Form submissions may be processed by email, hosting, spam-protection, and analytics providers configured for the site.", "You can request access, correction, or deletion by emailing hello@orilto.com."]} />;
}

function Policy({ title, items }: { title: string; items: string[] }) {
  return <section className="page-hero legal-page"><div className="container"><p className="mono eyebrow">Orilto</p><h1 className="h1">{title}</h1><div className="copy">{items.map((item) => <p key={item}>{item}</p>)}</div></div></section>;
}
