import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { site } from "@/content/site-copy";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell Orilto where the friction is, what needs to change, or what you are trying to build.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container grid-12 split">
          <div><p className="mono eyebrow">Contact</p><h1 className="h1">Tell us what needs to change.</h1></div>
          <div><p className="lede">Use the form to explain the problem before booking anything. For a direct route, email <a href={`mailto:${site.email}`}>{site.email}</a>.</p></div>
        </div>
      </section>
      <section className="section-tight">
        <div className="container"><ContactForm /></div>
      </section>
    </>
  );
}
