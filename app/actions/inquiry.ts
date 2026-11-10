"use server";

import { headers } from "next/headers";

import { deliverLead } from "@/lib/inquiry/delivery";
import {
  buildLeadPayload,
  readFormValues,
  validateLead,
  type FormValues,
} from "@/lib/inquiry/schema";
import { site } from "@/lib/site";

export type InquiryState =
  | { status: "idle" }
  /** The CRM's validation (`leadSchema`) rejected the submission. */
  | { status: "invalid"; fields: (keyof FormValues)[]; values: FormValues }
  /** Delivered: saved in the CRM (or the configured fallback). */
  | { status: "sent"; reference: string }
  /** Valid, but no destination is configured — nothing was delivered. */
  | { status: "unconfigured"; values: FormValues }
  /** The destination refused or failed — nothing is claimed as sent. */
  | { status: "error"; kind: "busy" | "failed"; values: FormValues };

/**
 * Handles a quote request.
 *
 * A Server Action is reachable by direct POST, not only through the form, so
 * the payload is rebuilt and validated here with the CRM's own schema
 * regardless of what the browser checked. Secrets never leave the server.
 */
export async function submitInquiry(
  _prev: InquiryState,
  formData: FormData
): Promise<InquiryState> {
  const values = readFormValues(formData);

  // Bot trap: a field hidden from people, so anything in it is a bot. Report a
  // success-shaped state without delivering anything.
  const trap = formData.get("company");
  if (typeof trap === "string" && trap) {
    return { status: "sent", reference: makeReference(null) };
  }

  const payload = buildLeadPayload(formData, { siteUrl: site.url });
  const result = validateLead(payload);
  if (!result.ok) return { status: "invalid", fields: result.fields, values };

  const reference = makeReference(formData.get("submissionId"));
  const delivery = await deliverLead(result.lead, { reference, clientIp: await clientIp() });

  if (delivery.ok) return { status: "sent", reference: delivery.reference };
  if (delivery.reason === "not_configured") return { status: "unconfigured", values };
  if (delivery.reason === "rejected") {
    // Same schema on both sides, so this should not happen; report honestly.
    return { status: "invalid", fields: [], values };
  }
  return { status: "error", kind: delivery.reason === "busy" ? "busy" : "failed", values };
}

/**
 * Customer-facing reference, also the CRM idempotency key. Derived from the
 * per-form-render id so a repeated submission of the same form carries the
 * same key; generated here when the form did not send a usable one.
 */
function makeReference(submissionId: FormDataEntryValue | null): string {
  const raw = typeof submissionId === "string" ? submissionId.replace(/[^A-Za-z0-9]/g, "") : "";
  const core = raw.length >= 10 ? raw.slice(0, 10) : crypto.randomUUID().replace(/-/g, "").slice(0, 10);
  return `SPT-${core.toUpperCase()}`;
}

async function clientIp(): Promise<string | null> {
  const h = await headers();
  const ip =
    h.get("cf-connecting-ip") ||
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    h.get("x-real-ip") ||
    "";
  return /^[0-9a-fA-F:.]{3,64}$/.test(ip) ? ip : null;
}
