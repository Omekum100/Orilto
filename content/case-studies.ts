export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  summary: string;
  websiteUrl: string;
  tags: string[];
  need: string;
  challenge: string;
  contribution: string;
  delivered: string[];
  evidence: string[];
  images: { src: string; alt: string }[];
  status: { shipped: string[]; inProgress: string[]; planned: string[] };
  sections: Record<string, string>;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "telo-hive",
    client: "Telo-Hive",
    title: "Building an AI-first event marketplace from product idea to production-shaped platform",
    summary:
      "An intelligent venue and event-services marketplace combining conversational discovery, marketplace workflows, operations tooling, APIs, authentication, media, notifications, and AWS infrastructure.",
    websiteUrl: "https://www.telohive.com/",
    tags: ["Product Strategy", "Marketplace UX", "Conversational AI", "Full-stack Engineering", "AWS"],
    need: "A product idea needed to become a coherent marketplace system with a believable first release path.",
    challenge:
      "The concept combined AI discovery, supplier workflows, event planning, operational controls, media, authentication, and infrastructure concerns.",
    contribution:
      "Orilto shaped the product direction, UX flows, system model, engineering approach, AI boundaries, and infrastructure plan.",
    delivered: ["Product architecture", "Marketplace UX flows", "Conversational discovery model", "Application foundation", "AWS-oriented deployment plan"],
    evidence: ["Structured feature inventory", "Architecture diagrams", "Status-based delivery roadmap", "Controlled AI workflow definition"],
    images: [
      { src: "/case-studies/telo-hive/hero6.webp", alt: "TeloHive event discovery interface visual" },
      { src: "/case-studies/telo-hive/rooftop-sunset.jpg", alt: "Rooftop event venue at sunset" },
      { src: "/case-studies/telo-hive/waterfront.jpg", alt: "Waterfront dining venue for events" },
      { src: "/case-studies/telo-hive/live-music.jpg", alt: "Birthday celebration with live music" }
    ],
    status: {
      shipped: ["Core product direction", "Initial marketplace workflows", "Authentication and API foundations"],
      inProgress: ["Operations tooling", "Media and notification paths", "AI evaluation controls"],
      planned: ["Advanced marketplace automation", "Supplier analytics", "Expanded event-service workflows"]
    },
    sections: {
      context: "Telo-Hive is shaped around the messy reality of event discovery: customers need venues and services, suppliers need structured demand, and operators need visibility across the flow.",
      problem: "The risk was not only building screens. The system needed a product model that could make AI useful without making the marketplace opaque.",
      constraints: "The first release needed to balance ambition with controlled scope, explicit AI boundaries, operational visibility, and a path to production infrastructure.",
      direction: "The platform direction connects conversational discovery to structured marketplace records, supplier interactions, and operator review.",
      experience: "The experience model separates customer discovery, supplier presentation, enquiry workflow, and operational oversight so each user has a clear job.",
      architecture: "The technical direction uses a full-stack web application, authenticated APIs, media handling, notifications, and AWS-aligned infrastructure with observability and deployment considerations.",
      limitations: "Automated booking, marketplace scale, revenue impact, and AI accuracy are not claimed because verified production evidence has not been supplied.",
      opportunities: "Next-stage work can deepen supplier tooling, strengthen evaluation, improve operational dashboards, and expand marketplace automation once real usage data exists."
    }
  },
  {
    slug: "ravi-hydraulics",
    client: "Ravi Hydraulics",
    title: "Giving a specialist hydraulics business a clearer digital presence",
    summary:
      "Translating a practical, industry-specific business into a credible digital experience that helps prospective customers understand its capabilities and make contact.",
    websiteUrl: "https://www.ravihydraulic.com/",
    tags: ["Positioning", "Information Architecture", "Responsive Design", "Frontend Development"],
    need: "A specialist business needed a clearer way to explain its capabilities and invite relevant enquiries.",
    challenge:
      "The work had to feel credible and specific without overstating proof, inventing outcomes, or flattening the business into generic B2B copy.",
    contribution:
      "Orilto clarified the positioning, content hierarchy, responsive interface, and contact path for prospective customers.",
    delivered: ["Positioning structure", "Responsive website direction", "Service hierarchy", "Frontend implementation", "Qualified enquiry path"],
    evidence: ["Clear service presentation", "Responsive layouts", "Direct contact route", "No unsupported growth claims"],
    images: [
      { src: "/case-studies/ravi-hydraulics/workshop-mechanic.jpg", alt: "Ravi Hydraulic workshop and maintenance capability" },
      { src: "/case-studies/ravi-hydraulics/services-crane.jpg", alt: "Heavy machinery and crane operations on a project site" },
      { src: "/case-studies/ravi-hydraulics/fleet-excavator-1.jpg", alt: "Excavator fleet asset used by Ravi Hydraulic" }
    ],
    status: {
      shipped: ["Website structure", "Responsive frontend", "Contact path"],
      inProgress: ["Content refinement", "Measurement readiness"],
      planned: ["Expanded service pages", "Approved proof points", "Search content improvements"]
    },
    sections: {
      context: "Ravi Hydraulics represents the kind of practical specialist business where credibility depends on clarity, not decoration.",
      problem: "Prospective customers need to understand what the company does, where it can help, and how to start a serious conversation.",
      constraints: "The site could not rely on fake testimonials, unsupported metrics, or generic industrial imagery to create credibility.",
      direction: "The direction prioritizes plain-language positioning, service clarity, responsive layout, and a direct enquiry path.",
      experience: "The interface presents capabilities in a composed, readable structure with calls to contact at points where intent is likely.",
      architecture: "The build focuses on performant frontend delivery, semantic pages, SEO metadata, accessible interaction, and maintainable content structure.",
      limitations: "Sales lift, lead growth, and search ranking improvements are not claimed without approved evidence.",
      opportunities: "Future work can add approved project examples, technical capability pages, richer enquiry routing, and measurement-led content improvements."
    }
  }
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
