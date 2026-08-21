export const site = {
  name: "Orilto",
  url: "https://orilto.com",
  email: "hello@orilto.com",
  phone: "+917510252672",
  phoneDisplay: "+91 75102 52672",
  detailsPhone: "+91 78080 00777",
  detailsPhoneHref: "tel:+917808000777",
  linkedin: "https://www.linkedin.com/company/orilto/posts/?feedView=all",
  location: "India",
  description:
    "Orilto helps ambitious businesses turn ideas and operational problems into dependable digital products through strategy, UX, engineering, responsible AI, and cloud delivery.",
  tagline: "Not just design.Not just code. We build what grows your business",
  nav: [
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ],
  futureNav: [{ href: "/insights", label: "Insights", enabled: false }]
} as const;

export const trustSignals = [
  "Clear scope and acceptance criteria",
  "Security and privacy considered from the start",
  "Accessible and responsive experiences",
  "Documented deployment and handover",
  "Transparent risks, assumptions, and status"
];

export const futureProofSocialProof = {
  testimonials: [],
  metrics: [],
  certifications: [],
  clientLogos: []
} as const;
