export const analyticsEvents = {
  primaryCtaClick: "primary_cta_click",
  secondaryCtaClick: "secondary_cta_click",
  caseStudyOpen: "case_study_open",
  serviceEnquiryClick: "service_enquiry_click",
  contactFormStarted: "contact_form_started",
  contactFormSubmitted: "contact_form_submitted",
  contactFormFailed: "contact_form_failed",
  emailLinkClicked: "email_link_clicked"
} as const;

export type AnalyticsEvent = (typeof analyticsEvents)[keyof typeof analyticsEvents];
