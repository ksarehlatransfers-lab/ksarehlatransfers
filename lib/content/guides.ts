import type { Bilingual } from "@/lib/i18n/config";
import type { SiteImageKey } from "@/lib/site-images";

/**
 * Travel inspiration entries.
 *
 * Each one becomes a guide page in a later stage. `planned` keeps the UI
 * honest about which ones are not written yet — those render as cards without
 * a link rather than pointing at a page that 404s.
 */
export type Guide = {
  slug: string;
  title: Bilingual<string>;
  kicker: Bilingual<string>;
  summary: Bilingual<string>;
  imageKey: SiteImageKey;
  planned?: boolean;
};

export const guides: Guide[] = [
  {
    slug: "alula-from-madinah",
    title: { en: "Reaching AlUla by road", ar: "الوصول إلى العُلا برًّا" },
    kicker: { en: "Day trips", ar: "رحلات يومية" },
    summary: {
      en: "AlUla sits about three hours north-east of Madinah. What the drive involves and why travellers usually hire a vehicle for the full day rather than a one-way transfer.",
      ar: "تقع العُلا على نحو ثلاث ساعات شمال شرق المدينة المنورة. ما الذي تتضمنه الرحلة، ولماذا يفضّل المسافرون استئجار سيارة ليوم كامل بدل رحلة باتجاه واحد.",
    },
    imageKey: "guide-alula",
    planned: true,
  },
  {
    slug: "edge-of-the-world",
    title: {
      en: "The Tuwaiq escarpment from Riyadh",
      ar: "حافة طويق انطلاقًا من الرياض",
    },
    kicker: { en: "Day trips", ar: "رحلات يومية" },
    summary: {
      en: "The cliff edge known as the Edge of the World lies roughly 90 km from Riyadh, with the last stretch off sealed road — which is why the vehicle category matters on this trip.",
      ar: "تبعد الحافة المعروفة بـ«نهاية العالم» نحو 90 كم عن الرياض، والجزء الأخير من الطريق غير معبّد — ولهذا تكون فئة المركبة مهمة في هذه الرحلة.",
    },
    imageKey: "guide-edge",
    planned: true,
  },
  {
    slug: "makkah-madinah-road",
    title: {
      en: "The Makkah to Madinah road journey",
      ar: "الرحلة البرية من مكة إلى المدينة",
    },
    kicker: { en: "Pilgrimage routes", ar: "مسارات الحج والعمرة" },
    summary: {
      en: "What to expect on the 450 km drive between the two holy cities: typical timings, where people stop, and how to plan the leg around hotel check-in.",
      ar: "ما الذي تتوقعه في رحلة 450 كم بين المدينتين المقدستين: التوقيتات المعتادة، وأماكن التوقف، وكيفية ترتيب الرحلة حول موعد دخول الفندق.",
    },
    imageKey: "guide-desert",
    planned: true,
  },
];
