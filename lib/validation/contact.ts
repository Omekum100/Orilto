import { z } from "zod";

export const projectTypes = [
  "Product clarity",
  "Website or digital presence",
  "New product build",
  "AI workflow",
  "Existing product improvement",
  "Ongoing engineering partnership",
  "Not sure yet"
] as const;

export const contactSchema = z.object({
  name: z.string().min(2, "Enter your name."),
  email: z.string().email("Enter a valid work email."),
  company: z.string().min(2, "Enter your company name."),
  change: z.string().min(20, "Describe what needs to change in at least 20 characters."),
  projectType: z.enum(projectTypes),
  timeline: z.string().min(2, "Choose or describe a timeline."),
  budget: z.string().optional(),
  phone: z.string().optional(),
  consent: z.boolean().refine((value) => value, "Consent is required."),
  turnstileToken: z.string().optional()
});

export type ContactInput = z.infer<typeof contactSchema>;
