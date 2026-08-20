export const processSteps = [
  ["01", "Understand", "Clarify the business, users, constraints, urgency, and desired outcome."],
  ["02", "Shape", "Define the smallest useful release, experience, architecture, risks, and success measures."],
  ["03", "Build", "Design and engineer in reviewed increments with visible progress and decisions."],
  ["04", "Verify", "Test usability, accessibility, performance, security, deployment, analytics, and important failure paths."],
  ["05", "Operate", "Measure what happens after launch and improve the highest-value areas."]
] as const;

export const whyOrilto = [
  ["Clarity before construction", "We slow down at the start so the build has a reason, a shape, and a way to be judged."],
  ["Business outcomes before feature volume", "Scope is chosen around the change the business needs, not a long list of features."],
  ["Engineering quality as business quality", "Architecture, testing, accessibility, security, and reliability affect trust and operating cost."],
  ["Built for the real operating environment", "Products are shaped around users, constraints, handover, support, and failure paths."],
  ["Partnership beyond handoff", "Launch is the start of measurement, learning, and focused improvement."]
] as const;

export const aiPrinciples = [
  "Clear use case",
  "Human review where consequences matter",
  "Measurable evaluation",
  "Cost and rate controls",
  "Fallback behavior"
] as const;
