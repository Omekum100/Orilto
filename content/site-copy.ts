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
  tagline: "Not just design. Not just code. We build what grows your business.",
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

export const oriltoStarts = [
  {
    code: "01",
    label: "Idea to growth",
    summary: "Turn rough ideas into focused product direction.",
    route: "Clarify the first useful product",
    contactPrompt:
      "We have an idea or opportunity, but the first useful product and priorities are not clear yet."
  },
  {
    code: "02",
    label: "Product to brand",
    summary: "Strengthen existing products into credible brand experiences.",
    route: "Improve the product and experience",
    contactPrompt:
      "We already have a product or business workflow, but the experience, credibility, or delivery path needs to improve."
  },
  {
    code: "03",
    label: "AI roadmap",
    summary: "Use bounded AI to make daily operations easier.",
    route: "Define one responsible AI workflow",
    contactPrompt:
      "We want to use AI in a real workflow, with a clear job, limits, review, and fallback before building."
  }
] as const;

export const futureProofSocialProof = {
  testimonials: [],
  metrics: [],
  certifications: [],
  clientLogos: []
} as const;
