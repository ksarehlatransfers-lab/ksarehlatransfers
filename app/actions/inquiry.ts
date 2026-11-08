"use server";

import { deliverInquiry } from "@/lib/inquiry/delivery";
import {
  EMPTY_INQUIRY,
  readInquiry,
  validateInquiry,
  type Inquiry,
  type InquiryErrors,
} from "@/lib/inquiry/schema";

export type InquiryState =
  | { status: "idle" }
  /** Server-side validation rejected the submission. */
  | { status: "invalid"; errors: InquiryErrors; values: Inquiry }
  /** Delivered to the configured destination. */
  | { status: "sent"; reference: string }
  /** Valid, but no destination is configured yet — see lib/inquiry/delivery.ts. */
  | { status: "unconfigured"; values: Inquiry }
  /** Destination configured but the call failed. */
  | { status: "error"; message: string; values: Inquiry };

export const initialInquiryState: InquiryState = { status: "idle" };

/**
 * Handles a journey enquiry.
 *
 * This is a public endpoint — a Server Action is reachable by direct POST, not
 * only through the form — so every field is re-validated here regardless of
 * what the browser checked.
 */
export async function submitInquiry(
  _prev: InquiryState,
  formData: FormData
): Promise<InquiryState> {
  // Simple bot trap: a field hidden from people, so anything in it is a bot.
  // Report success-shaped state without delivering anything.
  if (typeof formData.get("company") === "string" && formData.get("company")) {
    return { status: "unconfigured", values: EMPTY_INQUIRY };
  }

  const values = readInquiry(formData);
  const errors = validateInquiry(values);

  if (Object.keys(errors).length > 0) {
    return { status: "invalid", errors, values };
  }

  const result = await deliverInquiry(values);

  if (result.ok) {
    return { status: "sent", reference: result.reference };
  }

  if (result.reason === "not_configured") {
    return { status: "unconfigured", values };
  }

  return {
    status: "error",
    message:
      "We could not pass your details on just now. Please try again in a moment.",
    values,
  };
}
