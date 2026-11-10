import { z } from "zod";

/**
 * The CRM's canonical lead contract.
 *
 * VERBATIM COPY of `lib/leadSchema.ts` in the Saudi Private Transfers CRM
 * repository (taxiservicesaudiaa/sauditaxi). Both websites feed the same
 * `public.leads` table, and the CRM's `/api/leads/intake` endpoint validates
 * every lead from this website with the original schema again — so the two
 * copies must stay identical. Change the CRM's copy first, then this one.
 */

/** Trim strings, convert "" to undefined, and cap length to sanitize input. */
const str = (max = 500) =>
  z
    .string()
    .trim()
    .max(max)
    .optional()
    .transform((v) => (v ? v : undefined));

/**
 * Validation for the public lead/quote forms. Phone is required (every form
 * collects a WhatsApp number); everything else is optional.
 */
export const leadSchema = z.object({
  fullName: str(120),
  email: z.string().trim().email().max(160).optional().or(z.literal("").transform(() => undefined)),
  phone: z.string().trim().min(5, "A valid phone/WhatsApp number is required").max(40),
  pickupLocation: str(200),
  dropoffLocation: str(200),
  date: str(40),
  time: str(40),
  passengers: str(20),
  luggage: str(20),
  vehicleType: str(60),
  flightNumber: str(40),
  message: str(2000),
  sourcePage: str(300),
  serviceType: str(120),
  // Multi-touch lead attribution
  firstLandingPage: str(300),
  firstReferrer: str(300),
  firstUtmSource: str(100),
  firstUtmMedium: str(100),
  firstUtmCampaign: str(100),
  landingPage: str(300),
  referrer: str(300),
  utmSource: str(100),
  utmMedium: str(100),
  utmCampaign: str(100),
  gclid: str(100),
  searchSource: str(100),
});

export type LeadFormInput = z.infer<typeof leadSchema>;

/** Canonical lead keys, in schema order. */
export const LEAD_KEYS = Object.keys(leadSchema.shape) as (keyof LeadFormInput)[];
