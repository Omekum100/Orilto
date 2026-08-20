import type { ContactInput } from "@/lib/validation/contact";

export type EmailResult = { ok: true; id: string } | { ok: false; reason: string };

export interface TransactionalEmailProvider {
  sendProjectEnquiry(input: ContactInput): Promise<EmailResult>;
}

export class ConsoleEmailProvider implements TransactionalEmailProvider {
  async sendProjectEnquiry(input: ContactInput): Promise<EmailResult> {
    console.info("Project enquiry received", {
      name: input.name,
      email: input.email,
      company: input.company,
      projectType: input.projectType,
      timeline: input.timeline
    });
    return { ok: true, id: `local-${Date.now()}` };
  }
}

export function getEmailProvider(): TransactionalEmailProvider {
  return new ConsoleEmailProvider();
}
