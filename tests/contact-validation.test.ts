import { describe, expect, it } from "vitest";
import { contactSchema } from "../lib/validation/contact";

describe("contactSchema", () => {
  it("accepts a valid project enquiry", () => {
    const result = contactSchema.safeParse({
      name: "Asha Rao",
      email: "asha@example.com",
      company: "Serious Systems",
      change: "We need to replace a manual quotation process with a controlled customer portal.",
      projectType: "Product clarity",
      timeline: "This quarter",
      consent: true
    });
    expect(result.success).toBe(true);
  });

  it("rejects short problem descriptions", () => {
    const result = contactSchema.safeParse({
      name: "Asha",
      email: "asha@example.com",
      company: "Serious Systems",
      change: "Build app",
      projectType: "Product clarity",
      timeline: "Soon",
      consent: true
    });
    expect(result.success).toBe(false);
  });
});
