import type { Bilingual } from "@/lib/i18n/config";
import type { SiteImageKey } from "@/lib/site-images";

/**
 * Example intercity routes.
 *
 * Distances are straight road distances on the usual motorway routing and are
 * given as approximations. Durations are typical driving times without stops,
 * not guarantees — traffic, weather and checkpoints all change them, so the
 * UI labels them as estimates.
 */
export type Route = {
  from: Bilingual<string>;
  to: Bilingual<string>;
  /** Approximate road distance in kilometres. */
  km: number;
  /** Typical driving time, expressed as a range. */
  duration: Bilingual<string>;
  note: Bilingual<string>;
  fromImageKey: SiteImageKey;
  toImageKey: SiteImageKey;
  /**
   * Where the card links: the route's own page once it has one. Until then a
   * Jeddah-touching route points at the Jeddah hub, which covers it.
   */
  routeKey?:
    | "riyadhToJeddah"
    | "riyadhToDammam"
    | "riyadhToAlKhobar"
    | "jeddahToMakkah"
    | "jeddah"
    | "makkah"
    | "taif"
    | "madinah";
};

export const routes: Route[] = [
  {
    from: { en: "Riyadh", ar: "الرياض" },
    to: { en: "Jeddah", ar: "جدة" },
    km: 950,
    duration: { en: "9–10 hrs", ar: "9–10 ساعات" },
    note: {
      en: "The long crossing of the Kingdom, west over the Najd plateau.",
      ar: "العبور الطويل للمملكة غربًا فوق هضبة نجد.",
    },
    fromImageKey: "dest-riyadh",
    toImageKey: "dest-jeddah",
    routeKey: "riyadhToJeddah",
  },
  {
    from: { en: "Jeddah", ar: "جدة" },
    to: { en: "Makkah", ar: "مكة المكرمة" },
    km: 90,
    duration: { en: "1–1.5 hrs", ar: "ساعة إلى ساعة ونصف" },
    note: {
      en: "The usual arrival leg from the airport for Umrah travellers.",
      ar: "مرحلة الوصول المعتادة من المطار للمعتمرين.",
    },
    fromImageKey: "dest-jeddah",
    toImageKey: "dest-makkah",
    routeKey: "jeddahToMakkah",
  },
  {
    from: { en: "Makkah", ar: "مكة المكرمة" },
    to: { en: "Madinah", ar: "المدينة المنورة" },
    km: 450,
    duration: { en: "4.5–5.5 hrs", ar: "4.5–5.5 ساعات" },
    note: {
      en: "North by motorway between the two holy cities.",
      ar: "شمالًا عبر الطريق السريع بين المدينتين المقدستين.",
    },
    fromImageKey: "dest-makkah",
    toImageKey: "dest-madinah",
    // No Madinah page yet: the Makkah hub covers the journey onward.
    routeKey: "makkah",
  },
  {
    from: { en: "Madinah", ar: "المدينة المنورة" },
    to: { en: "Jeddah", ar: "جدة" },
    km: 420,
    duration: { en: "4–5 hrs", ar: "4–5 ساعات" },
    note: {
      en: "A common departure routing at the end of a pilgrimage trip.",
      ar: "مسار مغادرة شائع في ختام رحلة الحج أو العمرة.",
    },
    fromImageKey: "dest-madinah",
    toImageKey: "dest-jeddah",
    // The journey starts in Madinah, whose hub covers the road to Jeddah.
    routeKey: "madinah",
  },
  {
    from: { en: "Riyadh", ar: "الرياض" },
    to: { en: "Dammam", ar: "الدمام" },
    km: 400,
    duration: { en: "3.5–4.5 hrs", ar: "3.5–4.5 ساعات" },
    note: {
      en: "East to the Gulf coast and the Eastern Province.",
      ar: "شرقًا إلى ساحل الخليج والمنطقة الشرقية.",
    },
    fromImageKey: "dest-riyadh",
    toImageKey: "dest-dammam",
    routeKey: "riyadhToDammam",
  },
  {
    from: { en: "Makkah", ar: "مكة المكرمة" },
    to: { en: "Taif", ar: "الطائف" },
    km: 90,
    duration: { en: "1.5–2 hrs", ar: "ساعة ونصف إلى ساعتين" },
    note: {
      en: "The climb up the Al Hada escarpment into the highlands.",
      ar: "الصعود عبر عقبة الهدا إلى المرتفعات.",
    },
    fromImageKey: "dest-makkah",
    toImageKey: "dest-taif",
    routeKey: "taif",
  },
];
