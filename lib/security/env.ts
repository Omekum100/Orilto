import { z } from "zod";

export const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
  TURNSTILE_SECRET_KEY: z.string().optional(),
  TRANSACTIONAL_EMAIL_PROVIDER: z.enum(["console", "resend", "postmark"]).optional(),
  TRANSACTIONAL_EMAIL_API_KEY: z.string().optional()
});

export function validateEnv() {
  return envSchema.parse(process.env);
}
