/**
 * Journey enquiry shape and validation.
 *
 * Hand-rolled rather than pulled from a schema library: the form has a fixed,
 * small set of fields and adding a dependency for it is not worth the weight.
 * The same rules run on the server for every submission, so client-side HTML
 * validation is a convenience, never the gate.
 */

export const TRIP_TYPES = [
  "Airport transfer",
  "City-to-city transfer",
  "Hotel transfer",
  "Hajj or Umrah journey",
  "Private Ziyarat",
  "Private day trip",
  "Border transfer",
] as const;

export type TripType = (typeof TRIP_TYPES)[number];

export type Inquiry = {
  tripType: string;
  pickup: string;
  destination: string;
  date: string;
  time: string;
  passengers: string;
  luggage: string;
  name: string;
  email: string;
  phone: string;
  flightNumber: string;
  notes: string;
};

/**
 * Validation failures are reported as stable codes, not sentences, so the
 * same validator serves both languages. The message text lives with the form.
 */
export type InquiryErrorCode =
  | "pickupRequired"
  | "destinationRequired"
  | "sameEndpoints"
  | "dateRequired"
  | "dateFormat"
  | "datePast"
  | "timeRequired"
  | "timeFormat"
  | "passengersRequired"
  | "passengersRange"
  | "luggageRange"
  | "nameRequired"
  | "nameTooLong"
  | "contactRequired"
  | "emailInvalid"
  | "phoneInvalid"
  | "notesTooLong"
  | "flightTooLong"
  | "tripTypeInvalid";

export type InquiryErrors = Partial<Record<keyof Inquiry, InquiryErrorCode>>;

export const EMPTY_INQUIRY: Inquiry = {
  tripType: "",
  pickup: "",
  destination: "",
  date: "",
  time: "",
  passengers: "",
  luggage: "",
  name: "",
  email: "",
  phone: "",
  flightNumber: "",
  notes: "",
};

const str = (v: FormDataEntryValue | null) =>
  typeof v === "string" ? v.trim() : "";

export function readInquiry(formData: FormData): Inquiry {
  return {
    tripType: str(formData.get("tripType")),
    pickup: str(formData.get("pickup")),
    destination: str(formData.get("destination")),
    date: str(formData.get("date")),
    time: str(formData.get("time")),
    passengers: str(formData.get("passengers")),
    luggage: str(formData.get("luggage")),
    name: str(formData.get("name")),
    email: str(formData.get("email")),
    phone: str(formData.get("phone")),
    flightNumber: str(formData.get("flightNumber")),
    notes: str(formData.get("notes")),
  };
}

// Deliberately permissive: it rejects obvious typos without turning away
// valid addresses that a stricter pattern would refuse.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Digits, spaces and the usual separators, optional leading +.
const PHONE = /^\+?[\d\s().-]{7,20}$/;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const TIME = /^\d{2}:\d{2}$/;

export function validateInquiry(input: Inquiry): InquiryErrors {
  const errors: InquiryErrors = {};

  if (!input.pickup) errors.pickup = "pickupRequired";
  if (!input.destination) errors.destination = "destinationRequired";
  if (
    input.pickup &&
    input.destination &&
    input.pickup.toLowerCase() === input.destination.toLowerCase()
  ) {
    errors.destination = "sameEndpoints";
  }

  if (!input.date) {
    errors.date = "dateRequired";
  } else if (!ISO_DATE.test(input.date)) {
    errors.date = "dateFormat";
  } else {
    // Compare date-only values so a journey later today is still valid.
    const today = new Date().toISOString().slice(0, 10);
    if (input.date < today) errors.date = "datePast";
  }

  if (!input.time) {
    errors.time = "timeRequired";
  } else if (!TIME.test(input.time)) {
    errors.time = "timeFormat";
  }

  const passengers = Number(input.passengers);
  if (!input.passengers) {
    errors.passengers = "passengersRequired";
  } else if (!Number.isInteger(passengers) || passengers < 1 || passengers > 60) {
    errors.passengers = "passengersRange";
  }

  const luggage = Number(input.luggage);
  if (input.luggage && (!Number.isInteger(luggage) || luggage < 0 || luggage > 99)) {
    errors.luggage = "luggageRange";
  }

  if (!input.name) {
    errors.name = "nameRequired";
  } else if (input.name.length > 120) {
    errors.name = "nameTooLong";
  }

  // At least one way to reply, and whichever is given must be usable.
  if (!input.email && !input.phone) {
    errors.email = "contactRequired";
  }
  if (input.email && !EMAIL.test(input.email)) {
    errors.email = "emailInvalid";
  }
  if (input.phone && !PHONE.test(input.phone)) {
    errors.phone = "phoneInvalid";
  }

  if (input.notes.length > 2000) {
    errors.notes = "notesTooLong";
  }
  if (input.flightNumber.length > 20) {
    errors.flightNumber = "flightTooLong";
  }
  if (input.tripType && !TRIP_TYPES.includes(input.tripType as TripType)) {
    errors.tripType = "tripTypeInvalid";
  }

  return errors;
}
