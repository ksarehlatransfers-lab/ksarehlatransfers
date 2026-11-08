import type { Bilingual } from "@/lib/i18n/config";

/**
 * Vehicle categories available to request.
 *
 * These are *categories*, not an owned fleet. No make, model, year, plate or
 * photograph is published, because none of that is confirmed — the section is
 * deliberately data-driven so real vehicle details can be filled in later
 * without touching the component.
 *
 * `seats` and `luggage` describe the request bracket used when quoting, not a
 * promise about a specific car.
 */
export type VehicleClass = {
  slug: string;
  name: Bilingual<string>;
  /** Passenger bracket this category is quoted for. */
  seats: Bilingual<string>;
  /** Approximate suitcase capacity for the bracket. */
  luggage: Bilingual<string>;
  summary: Bilingual<string>;
  bestFor: Bilingual<string[]>;
};

export const vehicleClasses: VehicleClass[] = [
  {
    slug: "sedan",
    name: { en: "Private Sedan", ar: "سيارة سيدان خاصة" },
    seats: { en: "Up to 3 passengers", ar: "حتى 3 ركاب" },
    luggage: { en: "2–3 suitcases", ar: "2–3 حقائب" },
    summary: {
      en: "The standard choice for one or two travellers on an airport or hotel run.",
      ar: "الخيار المعتاد لمسافر أو مسافرَين في رحلة مطار أو فندق.",
    },
    bestFor: {
      en: ["Airport pickups", "Hotel transfers", "Short city journeys"],
      ar: ["الاستقبال من المطار", "النقل من الفنادق", "تنقلات قصيرة داخل المدينة"],
    },
  },
  {
    slug: "suv",
    name: { en: "SUV", ar: "سيارة دفع رباعي" },
    seats: { en: "Up to 4 passengers", ar: "حتى 4 ركاب" },
    luggage: { en: "3–4 suitcases", ar: "3–4 حقائب" },
    summary: {
      en: "More room for luggage and a higher ride for longer stretches of motorway.",
      ar: "مساحة أكبر للحقائب وجلسة أعلى للمسافات الطويلة على الطرق السريعة.",
    },
    bestFor: {
      en: ["Intercity routes", "Families", "Day trips"],
      ar: ["الرحلات بين المدن", "العائلات", "الرحلات اليومية"],
    },
  },
  {
    slug: "van",
    name: { en: "Passenger Van", ar: "ڤان للركاب" },
    seats: { en: "Up to 7 passengers", ar: "حتى 7 ركاب" },
    luggage: { en: "6–8 suitcases", ar: "6–8 حقائب" },
    summary: {
      en: "Keeps a family or small group together in one vehicle with the bags.",
      ar: "يُبقي العائلة أو المجموعة الصغيرة في سيارة واحدة مع الحقائب.",
    },
    bestFor: {
      en: ["Families", "Umrah groups", "Makkah–Madinah"],
      ar: ["العائلات", "مجموعات العمرة", "مكة — المدينة"],
    },
  },
  {
    slug: "minibus",
    name: { en: "Minibus", ar: "حافلة صغيرة" },
    seats: { en: "Up to 14 passengers", ar: "حتى 14 راكبًا" },
    luggage: { en: "On request", ar: "حسب الطلب" },
    summary: {
      en: "For larger parties travelling on one itinerary, quoted per journey.",
      ar: "للمجموعات الأكبر المسافرة ببرنامج واحد، ويُسعّر لكل رحلة.",
    },
    bestFor: {
      en: ["Group travel", "Ziyarat itineraries", "Pilgrimage groups"],
      ar: ["سفر المجموعات", "برامج الزيارة", "مجموعات الحج والعمرة"],
    },
  },
];
