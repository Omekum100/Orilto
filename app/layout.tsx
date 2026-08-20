import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { site } from "@/content/site-copy";
import { organizationJsonLd, professionalServiceJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Orilto | Product Engineering and Responsible AI Partner",
    template: "%s | Orilto"
  },
  description: site.description,
  applicationName: "Orilto",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Orilto | We turn business intent into products that work",
    description: site.description,
    url: site.url,
    siteName: "Orilto",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Orilto",
    description: site.description
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd()) }} />
      </body>
    </html>
  );
}
