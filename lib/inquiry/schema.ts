/**
 * The quote form's functional specification.
 *
 * Mirrors the original Saudi Private Transfers quote form
 * (`components/QuoteForm.tsx` in taxiservicesaudiaa/sauditaxi) field for
 * field, because both websites feed one CRM and one `public.leads` table:
 *
 * | form `name`   | input        | browser-required | CRM key           |
 * |---------------|--------------|------------------|-------------------|
 * | name          | text         | yes              | fullName          |
 * | phone         | tel          | yes              | phone             |
 * | email         | email        | no               | email             |
 * | pickup        | text         | yes              | pickupLocation    |
 * | dropoff       | text         | yes              | dropoffLocation   |
 * | date          | date         | yes              | date              |
 * | time          | time         | yes              | time              |
 * | passengers    | select (2)   | no (defaulted)   | passengers        |
 * | luggage       | select (2)   | no (defaulted)   | luggage           |
 * | vehicle       | select (Comfort) | no (defaulted) | vehicleType     |
 * | flight        | text         | no               | flightNumber      |
 * | message       | textarea     | no               | message           |
 *
 * plus the hidden attribution fields, `serviceType` and `sourcePage`.
 * Server-side validation is the original `leadSchema` (see lead-schema.ts):
 * only `phone` is required there, exactly as on the original site. Design is
 * the only thing this website does differently.
 */

import { leadSchema, type LeadFormInput } from "./lead-schema";

/** Identical to the original form's options and values. */
export const PASSENGER_OPTIONS = ["1", "2", "3", "4", "5", "6", "7+"] as const;
export const LUGGAGE_OPTIONS = ["0", "1", "2", "3", "4", "5+"] as const;

/**
 * The original form's vehicle values (`data/vehicles.ts` names). The value
 * sent to the CRM is the English name, exactly as on the original site; only
 * the visible label is translated on Arabic pages.
 */
export const VEHICLE_OPTIONS = [
  { value: "Economy", label: { en: "Economy", ar: "اقتصادية" } },
  { value: "Comfort", label: { en: "Comfort", ar: "مريحة" } },
  { value: "Business", label: { en: "Business", ar: "رجال الأعمال" } },
  { value: "SUV", label: { en: "SUV", ar: "دفع رباعي (SUV)" } },
  { value: "Van", label: { en: "Van", ar: "ڤان" } },
  { value: "Minibus", label: { en: "Minibus", ar: "حافلة صغيرة" } },
] as const;

/** The original form's defaults. */
export const FORM_DEFAULTS = {
  passengers: "2",
  luggage: "2",
  vehicle: "Comfort",
  serviceType: "General taxi quote",
} as const;

/** Query-string fields the original form prefills from (same list). */
export const QUERY_PREFILL_FIELDS = ["pickup", "dropoff", "date", "time", "passengers"] as const;

/** Visible field values a form can be seeded with or returned with. */
export type FormValues = {
  name: string;
  phone: string;
  email: string;
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  passengers: string;
  luggage: string;
  vehicle: string;
  flight: string;
  message: string;
};

export const EMPTY_FORM_VALUES: FormValues = {
  name: "",
  phone: "",
  email: "",
  pickup: "",
  dropoff: "",
  date: "",
  time: "",
  passengers: FORM_DEFAULTS.passengers,
  luggage: FORM_DEFAULTS.luggage,
  vehicle: FORM_DEFAULTS.vehicle,
  flight: "",
  message: "",
};

/** Hidden attribution inputs, named exactly like the CRM keys they fill. */
export const ATTRIBUTION_FIELDS = [
  "firstLandingPage",
  "firstReferrer",
  "firstUtmSource",
  "firstUtmMedium",
  "firstUtmCampaign",
  "landingPage",
  "referrer",
  "utmSource",
  "utmMedium",
  "utmCampaign",
  "gclid",
  "searchSource",
] as const;

const text = (formData: FormData, key: string) => {
  const v = formData.get(key);
  return typeof v === "string" ? v.trim() : "";
};

export function readFormValues(formData: FormData): FormValues {
  return {
    name: text(formData, "name"),
    phone: text(formData, "phone"),
    email: text(formData, "email"),
    pickup: text(formData, "pickup"),
    dropoff: text(formData, "dropoff"),
    date: text(formData, "date"),
    time: text(formData, "time"),
    passengers: text(formData, "passengers"),
    luggage: text(formData, "luggage"),
    vehicle: text(formData, "vehicle"),
    flight: text(formData, "flight"),
    message: text(formData, "message"),
  };
}

/**
 * Build the CRM payload exactly as the original form's `handleSubmit` does
 * (`get(x) || undefined` for every field, `phone` always sent), with
 * `sourcePage` = this website's URL + the page path.
 */
export function buildLeadPayload(
  formData: FormData,
  { siteUrl }: { siteUrl: string }
): Record<string, string | undefined> {
  const get = (k: string) => text(formData, k);
  const pathname = get("pathname");
  const safePath = /^\/[^\s]{0,250}$/.test(pathname) ? pathname : "";

  const payload: Record<string, string | undefined> = {
    fullName: get("name") || undefined,
    email: get("email") || undefined,
    phone: get("phone"),
    pickupLocation: get("pickup") || undefined,
    dropoffLocation: get("dropoff") || undefined,
    date: get("date") || undefined,
    time: get("time") || undefined,
    passengers: get("passengers") || undefined,
    luggage: get("luggage") || undefined,
    vehicleType: get("vehicle") || undefined,
    flightNumber: get("flight") || undefined,
    message: get("message") || undefined,
    serviceType: get("serviceType") || FORM_DEFAULTS.serviceType,
    sourcePage: `${siteUrl}${safePath}`,
  };
  for (const key of ATTRIBUTION_FIELDS) payload[key] = get(key) || undefined;
  return payload;
}

export type ValidationResult =
  | { ok: true; lead: LeadFormInput }
  | { ok: false; fields: (keyof FormValues)[] };

/** Map CRM keys back to the visible field that caused a schema error. */
const FIELD_FOR_KEY: Partial<Record<keyof LeadFormInput, keyof FormValues>> = {
  fullName: "name",
  email: "email",
  phone: "phone",
  pickupLocation: "pickup",
  dropoffLocation: "dropoff",
  date: "date",
  time: "time",
  passengers: "passengers",
  luggage: "luggage",
  vehicleType: "vehicle",
  flightNumber: "flight",
  message: "message",
};

/** The original server-side validation: `leadSchema`, nothing added. */
export function validateLead(payload: Record<string, string | undefined>): ValidationResult {
  const parsed = leadSchema.safeParse(payload);
  if (parsed.success) return { ok: true, lead: parsed.data };
  const keys = Object.keys(parsed.error.flatten().fieldErrors) as (keyof LeadFormInput)[];
  const fields = keys.map((k) => FIELD_FOR_KEY[k]).filter((f): f is keyof FormValues => Boolean(f));
  return { ok: false, fields };
}
