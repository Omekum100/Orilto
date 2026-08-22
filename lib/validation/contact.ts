import { z } from "zod";

export const projectTypes = [
  "Product clarity",
  "Website or digital presence",
  "New product build",
  "AI workflow",
  "Existing product improvement",
  "Ongoing engineering partnership",
  "UX/UI design",
  "Cloud and reliability",
  "E-commerce or marketplace",
  "Internal tool or portal",
  "Website redesign",
  "Maintenance and support",
  "Consulting or audit",
  "Other",
  "Not sure yet"
] as const;

export const contactSchema = z.object({
  name: z.string().min(2, "Enter your name."),
  email: z.string().email("Enter a valid work email."),
  company: z.string().min(2, "Enter your company name.").optional().or(z.literal("")),
  change: z.string().min(20, "Describe what needs to change in at least 20 characters."),
  projectType: z.enum(projectTypes),
  timeline: z.string().min(2, "Choose or describe a timeline.").optional().or(z.literal("")),
  budget: z.string().optional(),
  phone: z.string().trim().regex(/^[+()\-\s\d]{8,20}$/, "Enter a valid phone or WhatsApp number.").optional().or(z.literal("")),
  consent: z.boolean().refine((value) => value === true, "Please confirm consent before submitting."),
  turnstileToken: z.string().optional()
});

export type ContactInput = z.infer<typeof contactSchema>;
