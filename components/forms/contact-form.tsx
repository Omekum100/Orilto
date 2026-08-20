"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, projectTypes, type ContactInput } from "@/lib/validation/contact";
import { track } from "@/lib/analytics/track";
import { analyticsEvents } from "@/lib/analytics/events";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "rate">("idle");
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { projectType: "Not sure yet", consent: false }
  });

  async function onSubmit(data: ContactInput) {
    setStatus("loading");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      setStatus("success");
      track(analyticsEvents.contactFormSubmitted);
      return;
    }
    setStatus(response.status === 429 ? "rate" : "error");
    track(analyticsEvents.contactFormFailed, { status: String(response.status) });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="surface" style={{ padding: 24 }} aria-describedby="form-status">
      <div className="form-grid">
        <Field label="Name" error={errors.name?.message}><input {...register("name")} autoComplete="name" onFocus={() => track(analyticsEvents.contactFormStarted)} /></Field>
        <Field label="Work email" error={errors.email?.message}><input {...register("email")} type="email" autoComplete="email" /></Field>
        <Field label="Company" error={errors.company?.message}><input {...register("company")} autoComplete="organization" /></Field>
        <Field label="Project type" error={errors.projectType?.message}><select {...register("projectType")}>{projectTypes.map((type) => <option key={type}>{type}</option>)}</select></Field>
        <Field label="Timeline" error={errors.timeline?.message}><input {...register("timeline")} placeholder="Now, this quarter, exploring..." /></Field>
        <Field label="Optional budget range" error={errors.budget?.message}><input {...register("budget")} placeholder="Optional" /></Field>
        <Field label="Optional phone or WhatsApp" error={errors.phone?.message}><input {...register("phone")} autoComplete="tel" /></Field>
        <Field label="What needs to change?" error={errors.change?.message} full><textarea {...register("change")} /></Field>
        <div className="field full">
          <label style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <input type="checkbox" {...register("consent")} style={{ width: 20, minHeight: 20, marginTop: 4 }} />
            I consent to Orilto using this information to respond to my enquiry.
          </label>
          {errors.consent?.message && <span className="error-text">{errors.consent.message}</span>}
        </div>
      </div>
      <button className="btn btn-primary" type="submit" disabled={isSubmitting} style={{ marginTop: 18 }}>
        {isSubmitting ? "Sending..." : "Send enquiry"}
      </button>
      <div id="form-status" role="status" aria-live="polite">
        {status === "loading" && <p className="form-status">Sending your enquiry.</p>}
        {status === "success" && <p className="form-status">Thanks. Your enquiry has been received.</p>}
        {status === "rate" && <p className="form-status">Too many attempts. Please wait a minute and try again.</p>}
        {status === "error" && <p className="form-status">Something went wrong. Please email hello@orilto.com.</p>}
      </div>
    </form>
  );
}

function Field({ label, error, full, children }: { label: string; error?: string; full?: boolean; children: React.ReactElement }) {
  return <div className={`field ${full ? "full" : ""}`}><label>{label}</label>{children}{error && <span className="error-text">{error}</span>}</div>;
}
