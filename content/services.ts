export type Service = {
  slug: string;
  title: string;
  summary: string;
  forWhom: string;
  problem: string;
  outcome: string;
  activities: string[];
  deliverables: string[];
  boundaries: string;
  relatedCaseStudy: "telo-hive" | "ravi-hydraulics";
};

export const offers = [
  {
    title: "Product Clarity Sprint",
    summary: "Turn an unclear opportunity into a validated direction, first release, risk map, and actionable plan.",
    bestFor: "A useful idea or process problem with no settled product direction.",
    firstOutput: "A buildable first-release brief with priorities, risks, and acceptance criteria.",
    notRight: "When the scope is already fixed and only extra delivery capacity is needed."
  },
  {
    title: "Digital Presence Sprint",
    summary: "Create clear positioning, a premium responsive website, a qualified enquiry path, and launch-ready measurement.",
    bestFor: "Specialist businesses that need clearer credibility, services, and enquiries.",
    firstOutput: "A launch-ready website structure with content, responsive UI, and measurement.",
    notRight: "When the need is only a logo refresh or decorative landing page."
  },
  {
    title: "Product Build",
    summary: "Design, engineer, test, deploy, and document a meaningful first product release.",
    bestFor: "Teams ready to move from direction into a real working release.",
    firstOutput: "A tested product increment with deployment and handover notes.",
    notRight: "When the business problem, users, or release boundary are still unclear."
  },
  {
    title: "AI Opportunity and Build Sprint",
    summary: "Identify a useful AI opportunity, prove it safely, define evaluation and cost controls, and deliver a production-ready slice.",
    bestFor: "Teams exploring AI but needing a real job, guardrails, and fallback.",
    firstOutput: "A controlled AI workflow with evaluation, cost, privacy, and review boundaries.",
    notRight: "When the goal is an impressive demo without operational ownership."
  },
  {
    title: "Product Engineering Partnership",
    summary: "Provide ongoing product and engineering leadership with a clear roadmap, delivery cadence, and capacity boundary.",
    bestFor: "Businesses that need steady product and engineering capability after launch.",
    firstOutput: "A visible roadmap, delivery rhythm, technical backlog, and support boundary.",
    notRight: "When the work is a one-off task with no product ownership need."
  }
];

export const services: Service[] = [
  {
    slug: "product-strategy",
    title: "Product strategy and discovery",
    summary: "Clarify the business case before committing to a build.",
    forWhom: "Founders, operators, and teams with a valuable problem but no settled product direction.",
    problem: "Ideas often move into design or development before the risk, user need, operating model, and first release are clear.",
    outcome: "A product direction that can be understood, estimated, tested, and built in responsible increments.",
    activities: ["Stakeholder interviews", "Workflow mapping", "Opportunity framing", "Release shaping", "Risk and assumption mapping"],
    deliverables: ["Product brief", "First-release scope", "Decision log", "Risk map", "Delivery roadmap"],
    boundaries: "This is not open-ended strategy theatre. It ends with buildable decisions and explicit unknowns.",
    relatedCaseStudy: "telo-hive"
  },
  {
    slug: "ux-ui-design-systems",
    title: "UX, UI, and design systems",
    summary: "Design product experiences that are clear, usable, and ready for engineering.",
    forWhom: "Teams that need customer portals, SaaS workflows, operational tools, marketplaces, or credible digital experiences.",
    problem: "Interfaces fail when they look polished but ignore decision paths, edge cases, accessibility, and real content.",
    outcome: "A usable experience model with screens, states, components, and rules that engineering can trust.",
    activities: ["Information architecture", "Journey design", "Wireframes", "Interface design", "Component systems", "Usability review"],
    deliverables: ["UX flows", "Responsive UI", "Design tokens", "Component specifications", "Accessibility notes"],
    boundaries: "Visual design is tied to product use and content, not decorative reinvention.",
    relatedCaseStudy: "ravi-hydraulics"
  },
  {
    slug: "product-engineering",
    title: "Product engineering",
    summary: "Build dependable web products with thoughtful architecture and visible delivery.",
    forWhom: "Businesses ready to move from plan to useful release without assembling a complete internal product team.",
    problem: "Code can ship quickly while creating avoidable reliability, security, and maintenance debt.",
    outcome: "A tested, documented, deployed product increment that can keep improving after launch.",
    activities: ["Frontend and backend engineering", "API design", "Authentication", "Testing", "Deployment", "Documentation"],
    deliverables: ["Working application", "Source repository", "Tests", "Deployment pipeline", "Handover documentation"],
    boundaries: "We do not hide complexity behind vague velocity. Tradeoffs are surfaced while decisions are still cheap.",
    relatedCaseStudy: "telo-hive"
  },
  {
    slug: "ai-products",
    title: "AI products and intelligent workflows",
    summary: "Use AI where it has a measurable operational job.",
    forWhom: "Teams exploring AI-assisted search, classification, workflow support, content operations, or knowledge interfaces.",
    problem: "Many AI experiments feel impressive in a demo but fail when cost, evaluation, privacy, review, and fallback behavior matter.",
    outcome: "A controlled AI workflow with use-case boundaries, evaluation criteria, cost controls, and human review where needed.",
    activities: ["Use-case selection", "Prompt and retrieval design", "Evaluation setup", "Fallback design", "Monitoring plan"],
    deliverables: ["Prototype or production slice", "Evaluation plan", "Risk controls", "Integration notes", "Operational guidance"],
    boundaries: "AI is recommended only when it meaningfully reduces friction or increases capability.",
    relatedCaseStudy: "telo-hive"
  },
  {
    slug: "cloud-reliability",
    title: "Cloud, platform, and reliability",
    summary: "Make product delivery stable enough for real business use.",
    forWhom: "Existing or new product teams that need better deployment, observability, performance, and failure handling.",
    problem: "A product that works locally or in a demo can still fail users through weak infrastructure, unclear deployment, or poor monitoring.",
    outcome: "A clearer operating baseline for deployment, reliability, performance, and support.",
    activities: ["Architecture review", "Cloud setup", "CI/CD", "Observability", "Performance review", "Failure-path planning"],
    deliverables: ["Deployment architecture", "Environment plan", "Monitoring checklist", "Runbook", "Reliability backlog"],
    boundaries: "Reliability work is scoped to the product’s business risk and operating reality.",
    relatedCaseStudy: "telo-hive"
  },
  {
    slug: "business-websites",
    title: "Business websites and digital platforms",
    summary: "Create credible digital presence for specialist businesses.",
    forWhom: "Traditional, B2B, and specialist businesses that need a clearer story, service structure, and enquiry path.",
    problem: "Many business websites under-explain expertise, bury contact paths, or feel less credible than the work behind them.",
    outcome: "A responsive website or platform that explains the business clearly and supports qualified enquiries.",
    activities: ["Positioning", "Copywriting", "Information architecture", "Responsive design", "Frontend build", "Measurement setup"],
    deliverables: ["Launch-ready website", "Content model", "SEO metadata", "Analytics events", "Handover notes"],
    boundaries: "We avoid inflated claims, fake proof, and thin SEO pages.",
    relatedCaseStudy: "ravi-hydraulics"
  }
];
