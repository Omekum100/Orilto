"use client";

import { cloneElement, useId, useState, type ReactElement } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, projectTypes, type ContactInput } from "@/lib/validation/contact";
import { track } from "@/lib/analytics/track";
import { analyticsEvents } from "@/lib/analytics/events";
import { site } from "@/content/site-copy";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const { register, handleSubmit, reset, setError, formState: { errors, isSubmitting } } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { projectType: "Not sure yet", consent: false }
  });

  async function onSubmit(data: ContactInput) {
    setStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (result.issues && typeof result.issues === "object") {
          Object.entries(result.issues).forEach(([field, messages]) => {
            const message = Array.isArray(messages) ? messages[0] : undefined;
            if (message) setError(field as keyof ContactInput, { type: "server", message });
          });
        }
        setStatus("error");
        setStatusMessage(result.message ?? "The enquiry could not be sent. Please email hello@orilto.com.");
        return;
      }

      reset({ projectType: "Not sure yet", consent: false });
      setStatus("success");
      setStatusMessage(result.message ?? "Thanks. Your enquiry has been received.");
      setShowToast(true);
      window.setTimeout(() => setShowToast(false), 7000);
      track(analyticsEvents.contactFormSubmitted);
    } catch {
      setStatus("error");
      setStatusMessage("The enquiry could not be sent. Please email hello@orilto.com.");
    }
  }

  return (
    <>
      {showToast && (
        <div className="success-toast" role="status" aria-live="polite">
          <strong>Query submitted successfully.</strong>
          <span>Our team will review your enquiry. For faster assistance, call {site.phoneDisplay} or {site.detailsPhone}.</span>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="surface contact-form-card" aria-describedby="form-status">
        <div className="form-grid">
          <Field label="Name" error={errors.name?.message}><input {...register("name")} autoComplete="name" required onFocus={() => track(analyticsEvents.contactFormStarted)} /></Field>
          <Field label="Work email" error={errors.email?.message}><input {...register("email")} type="email" autoComplete="email" required /></Field>
          <Field label="What needs to change?" error={errors.change?.message} full><textarea {...register("change")} required placeholder="Describe the friction, who it affects, and what a useful outcome would look like." /></Field>
          <Field label="Project type" error={errors.projectType?.message}><select {...register("projectType")}>{projectTypes.map((type) => <option key={type}>{type}</option>)}</select></Field>
          <Field label="Timeline" error={errors.timeline?.message}><input {...register("timeline")} placeholder="Now, this quarter, exploring..." /></Field>
          <Field label="Company (optional)" error={errors.company?.message}><input {...register("company")} autoComplete="organization" /></Field>
          <Field label="Contact number (optional)" error={errors.phone?.message}><input {...register("phone")} autoComplete="tel" inputMode="tel" /></Field>
          <Field label="Optional budget range" error={errors.budget?.message}><input {...register("budget")} placeholder="Optional" /></Field>
          <div className="field full">
            <label style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <input type="checkbox" {...register("consent")} required style={{ width: 20, minHeight: 20, marginTop: 4 }} />
              I consent to Orilto using this information to respond to my enquiry.
            </label>
            {errors.consent?.message && <span className="error-text">{errors.consent.message}</span>}
          </div>
        </div>
        <button className="btn btn-primary" type="submit" disabled={isSubmitting} style={{ marginTop: 18 }}>
          {isSubmitting ? "Checking..." : "Send enquiry"}
        </button>
        <div id="form-status" role="status" aria-live="polite">
          {status === "success" && (
            <p className="form-status">
              {statusMessage} For faster assistance, call <a href={site.detailsPhoneHref}>{site.detailsPhone}</a>.
            </p>
          )}
          {status === "error" && <p className="form-status error-text">{statusMessage}</p>}
        </div>
      </form>
    </>
  );
}

type FieldControl = ReactElement<{
  id?: string;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
}>;

function Field({ label, error, full, children }: { label: string; error?: string; full?: boolean; children: FieldControl }) {
  const id = useId();
  const errorId = `${id}-error`;
  const control = cloneElement(children, {
    id,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? errorId : undefined
  });

  return (
    <div className={`field ${full ? "full" : ""}`}>
      <label htmlFor={id}>{label}</label>
      {control}
      {error && <span id={errorId} className="error-text">{error}</span>}
    </div>
  );
}
