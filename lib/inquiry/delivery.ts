import type { LeadFormInput } from "./lead-schema";

/**
 * ============================================================================
 * INTEGRATION POINT — where a validated quote request goes.
 * ============================================================================
 *
 * Primary destination: the shared CRM (the Saudi Private Transfers CRM, same
 * `public.leads` table as the original website). Configure, server-side only:
 *
 *   CRM_INTAKE_URL    https://saudiprivatetransfers.com/api/leads/intake
 *   CRM_INTAKE_TOKEN  the bearer token the CRM knows as PTAS_INTAKE_TOKEN
 *
 * Never put either in a NEXT_PUBLIC_ variable: this module runs only inside
 * the Server Action, and the browser never talks to the CRM directly. The CRM
 * decides which website a lead came from from the token, not from anything in
 * the payload.
 *
 * Fallback (kept from the original design): if the CRM is not configured but
 * INQUIRY_WEBHOOK_URL is, the lead is POSTed there instead (optional bearer
 * INQUIRY_WEBHOOK_TOKEN). If neither is set the result is `not_configured`
 * and the UI says plainly that nothing was sent.
 */

export type DeliveryResult =
  | { ok: true; reference: string }
  | { ok: false; reason: "not_configured" }
  | { ok: false; reason: "rejected" | "busy" | "failed"; detail: string };

export type DeliveryMeta = {
  /** Shown to the customer and used by the CRM as the idempotency key. */
  reference: string;
  /** The customer's IP, so the CRM rate-limits per customer, not per server. */
  clientIp: string | null;
};

const TIMEOUT_MS = 10_000;

export async function deliverLead(
  lead: LeadFormInput,
  meta: DeliveryMeta
): Promise<DeliveryResult> {
  const crmUrl = process.env.CRM_INTAKE_URL;
  const crmToken = process.env.CRM_INTAKE_TOKEN;

  if (crmUrl && crmToken) return deliverToCrm(crmUrl, crmToken, lead, meta);
  if (crmUrl || crmToken) {
    // Half-configured is a deployment mistake; refuse rather than guess.
    console.error("[inquiry] CRM_INTAKE_URL and CRM_INTAKE_TOKEN must both be set.");
    return { ok: false, reason: "failed", detail: "CRM intake half-configured" };
  }

  const webhook = process.env.INQUIRY_WEBHOOK_URL;
  if (webhook) return deliverToWebhook(webhook, lead, meta);

  console.warn("[inquiry] No destination configured (CRM_INTAKE_URL / INQUIRY_WEBHOOK_URL) — lead NOT delivered.", {
    reference: meta.reference,
  });
  return { ok: false, reason: "not_configured" };
}

async function deliverToCrm(
  url: string,
  token: string,
  lead: LeadFormInput,
  meta: DeliveryMeta
): Promise<DeliveryResult> {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "Idempotency-Key": meta.reference,
        ...(meta.clientIp ? { "X-Client-IP": meta.clientIp } : {}),
      },
      body: JSON.stringify(lead),
      // Never follow a redirect with the token attached to an unexpected host.
      // "manual", not "error": Cloudflare Workers rejects redirect: "error"
      // ("won't be implemented … use manual and check the status"), which
      // made every live delivery throw before reaching the CRM. A 3xx is
      // treated as a failure below, so the token is still never re-sent.
      redirect: "manual",
      cache: "no-store",
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (res.status >= 300 && res.status < 400) {
      console.error("[inquiry] CRM intake redirected; not followed", { status: res.status, reference: meta.reference });
      return { ok: false, reason: "failed", detail: `CRM responded ${res.status} (redirect not followed)` };
    }
    const json = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;

    if (res.ok && json?.ok) return { ok: true, reference: meta.reference };
    if (res.status === 429 || res.status === 409) {
      return { ok: false, reason: "busy", detail: `CRM responded ${res.status}` };
    }
    if (res.status === 400) {
      return { ok: false, reason: "rejected", detail: json?.error ?? "CRM rejected the lead" };
    }
    console.error("[inquiry] CRM intake failed", { status: res.status, error: json?.error, reference: meta.reference });
    return { ok: false, reason: "failed", detail: `CRM responded ${res.status}` };
  } catch (error) {
    console.error("[inquiry] CRM intake unreachable", { reference: meta.reference, error: error instanceof Error ? error.message : error });
    return { ok: false, reason: "failed", detail: error instanceof Error ? error.message : "Unknown error" };
  }
}

async function deliverToWebhook(
  url: string,
  lead: LeadFormInput,
  meta: DeliveryMeta
): Promise<DeliveryResult> {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.INQUIRY_WEBHOOK_TOKEN
          ? { Authorization: `Bearer ${process.env.INQUIRY_WEBHOOK_TOKEN}` }
          : {}),
      },
      body: JSON.stringify({ reference: meta.reference, receivedAt: new Date().toISOString(), ...lead }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) return { ok: false, reason: "failed", detail: `Endpoint responded ${res.status}` };
    return { ok: true, reference: meta.reference };
  } catch (error) {
    return { ok: false, reason: "failed", detail: error instanceof Error ? error.message : "Unknown error" };
  }
}
