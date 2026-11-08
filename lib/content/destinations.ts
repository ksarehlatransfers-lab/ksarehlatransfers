import type { Bilingual } from "@/lib/i18n/config";
import type { SiteImageKey } from "@/lib/site-images";

/**
 * Destination categories the quote form and the coverage section are built
 * around. These describe where journeys can be *requested*, which is why the
 * copy talks about planning and arranging rather than claiming a permanent
 * local presence in each city.
 */
export type Destination = {
  slug: string;
  name: Bilingual<string>;
  region: Bilingual<string>;
  /** One line on why people travel there — used on the coverage cards. */
  note: Bilingual<string>;
  imageKey: SiteImageKey;
  /** Marks the two pilgrimage cities for the layout's visual emphasis. */
  pilgrimage?: boolean;
};

export const destinations: Destination[] = [
  {
    slug: "riyadh",
    name: { en: "Riyadh", ar: "الرياض" },
    region: { en: "Central — Najd", ar: "الوسط — نجد" },
    note: {
      en: "The capital, King Khalid International Airport and the business districts.",
      ar: "العاصمة، ومطار الملك خالد الدولي، وأحياء الأعمال.",
    },
    imageKey: "dest-riyadh",
  },
  {
    slug: "jeddah",
    name: { en: "Jeddah", ar: "جدة" },
    region: { en: "West — Red Sea coast", ar: "الغرب — ساحل البحر الأحمر" },
    note: {
      en: "King Abdulaziz International Airport and the main gateway for pilgrims.",
      ar: "مطار الملك عبدالعزيز الدولي، والبوابة الرئيسية للمعتمرين والحجاج.",
    },
    imageKey: "dest-jeddah",
  },
  {
    slug: "makkah",
    name: { en: "Makkah", ar: "مكة المكرمة" },
    region: { en: "West — Holy city", ar: "الغرب — مدينة مقدسة" },
    note: {
      en: "Haram-area hotels, arrivals from Jeddah and onward travel to Madinah.",
      ar: "فنادق منطقة الحرم، والوصول من جدة، والانتقال إلى المدينة المنورة.",
    },
    imageKey: "dest-makkah",
    pilgrimage: true,
  },
  {
    slug: "madinah",
    name: { en: "Madinah", ar: "المدينة المنورة" },
    region: { en: "West — Holy city", ar: "الغرب — مدينة مقدسة" },
    note: {
      en: "Prince Mohammad bin Abdulaziz Airport, Haram hotels and Ziyarat sites.",
      ar: "مطار الأمير محمد بن عبدالعزيز، وفنادق الحرم، ومواقع الزيارة.",
    },
    imageKey: "dest-madinah",
    pilgrimage: true,
  },
  {
    slug: "dammam",
    name: { en: "Dammam", ar: "الدمام" },
    region: { en: "East — Gulf coast", ar: "الشرق — ساحل الخليج" },
    note: {
      en: "King Fahd International Airport and the Eastern Province.",
      ar: "مطار الملك فهد الدولي، والمنطقة الشرقية.",
    },
    imageKey: "dest-dammam",
  },
  {
    slug: "al-khobar",
    name: { en: "Al Khobar", ar: "الخبر" },
    region: { en: "East — Gulf coast", ar: "الشرق — ساحل الخليج" },
    note: {
      en: "Corniche hotels and the causeway route towards Bahrain.",
      ar: "فنادق الكورنيش وطريق جسر الملك فهد باتجاه البحرين.",
    },
    imageKey: "dest-khobar",
  },
  {
    slug: "taif",
    name: { en: "Taif", ar: "الطائف" },
    region: { en: "West — Highlands", ar: "الغرب — المرتفعات" },
    note: {
      en: "The mountain road from Makkah and the Al Hada escarpment.",
      ar: "الطريق الجبلي من مكة المكرمة وعقبة الهدا.",
    },
    imageKey: "dest-taif",
  },
  {
    slug: "abha",
    name: { en: "Abha", ar: "أبها" },
    region: { en: "South — Asir", ar: "الجنوب — عسير" },
    note: {
      en: "Highland travel in the Asir region and Abha Airport.",
      ar: "التنقل في مرتفعات منطقة عسير ومطار أبها.",
    },
    imageKey: "dest-abha",
  },
];

/** Options offered in the journey form's location fields. */
export const locationOptions: Bilingual<string[]> = {
  en: [
    "Riyadh",
    "King Khalid International Airport (RUH)",
    "Jeddah",
    "King Abdulaziz International Airport (JED)",
    "Makkah",
    "Madinah",
    "Prince Mohammad bin Abdulaziz Airport (MED)",
    "Dammam",
    "King Fahd International Airport (DMM)",
    "Al Khobar",
    "Taif",
    "Abha",
    "Other location in Saudi Arabia",
  ],
  ar: [
    "الرياض",
    "مطار الملك خالد الدولي (RUH)",
    "جدة",
    "مطار الملك عبدالعزيز الدولي (JED)",
    "مكة المكرمة",
    "المدينة المنورة",
    "مطار الأمير محمد بن عبدالعزيز (MED)",
    "الدمام",
    "مطار الملك فهد الدولي (DMM)",
    "الخبر",
    "الطائف",
    "أبها",
    "موقع آخر داخل المملكة",
  ],
};
