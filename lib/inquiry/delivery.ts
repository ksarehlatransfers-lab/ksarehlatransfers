import type { Inquiry } from "./schema";

/**
 * ============================================================================
 * INTEGRATION POINT — connect the enquiry form to a real destination here.
 * ============================================================================
 *
 * The form in front of this is complete and validated, but an enquiry is only
 * useful once it reaches a person. Until a destination is configured this
 * module reports `not_configured`, and the UI tells the visitor plainly that
 * their details were not sent. That is deliberate: a form that says "thank
 * you, we'll be in touch" while dropping the message on the floor is worse
 * than one that admits it is not wired up.
 *
 * To connect it, set INQUIRY_WEBHOOK_URL to an endpoint that accepts a JSON
 * POST — an email service, a CRM intake, a Slack or Teams incoming webhook, or
 * your own route handler. Optionally set INQUIRY_WEBHOOK_TOKEN to have it sent
 * as a bearer token.
 *
 * If you would rather send email directly, replace the fetch below with your
 * provider's SDK call. Nothing outside this file needs to change.
 */

export type DeliveryResult =
  | { ok: true; reference: string }
  | { ok: false; reason: "not_configured" }
  | { ok: false; reason: "failed"; detail: string };

/** Short, human-quotable reference so the visitor can refer to the enquiry. */
function makeReference(): string {
  const stamp = Date.now().toString(36).toUpperCase().slice(-5);
  const rand = Math.floor(Math.random() * 36 ** 3)
    .toString(36)
    .toUpperCase()
    .padStart(3, "0");
  return `SPT-${stamp}${rand}`;
}

export async function deliverInquiry(
  inquiry: Inquiry
): Promise<DeliveryResult> {
  const endpoint = process.env.INQUIRY_WEBHOOK_URL;

  if (!endpoint) {
    // Nowhere to send it. Record it in the server log so a submission made
    // during setup is not silently lost, then report the truth upwards.
    console.warn(
      "[inquiry] INQUIRY_WEBHOOK_URL is not set — enquiry was not delivered.",
      { pickup: inquiry.pickup, destination: inquiry.destination }
    );
    return { ok: false, reason: "not_configured" };
  }

  const reference = makeReference();

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.INQUIRY_WEBHOOK_TOKEN
          ? { Authorization: `Bearer ${process.env.INQUIRY_WEBHOOK_TOKEN}` }
          : {}),
      },
      body: JSON.stringify({
        reference,
        receivedAt: new Date().toISOString(),
        ...inquiry,
      }),
      // Don't let a hanging endpoint hold the request open.
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) {
      return {
        ok: false,
        reason: "failed",
        detail: `Endpoint responded ${res.status}`,
      };
    }

    return { ok: true, reference };
  } catch (error) {
    return {
      ok: false,
      reason: "failed",
      detail: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
