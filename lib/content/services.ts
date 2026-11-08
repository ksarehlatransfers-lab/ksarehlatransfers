import type { Bilingual } from "@/lib/i18n/config";
import type { SiteImageKey } from "@/lib/site-images";

/**
 * The eight transfer services. Each one gets its own page later, which is why
 * the slug and the summary live here rather than inside a component.
 */
export type Service = {
  slug: string;
  name: Bilingual<string>;
  /** Short card description. */
  summary: Bilingual<string>;
  /** Plain-language answer to "what is this", used for AI and search snippets. */
  detail: Bilingual<string>;
  imageKey: SiteImageKey;
  /** Drives the editorial grid: featured cards span two columns. */
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "airport-transfers",
    name: { en: "Airport Transfers", ar: "النقل من وإلى المطار" },
    summary: {
      en: "Meet-on-arrival pickups and departure runs at Saudi Arabia's main airports.",
      ar: "استقبال عند الوصول ورحلات المغادرة في مطارات المملكة الرئيسية.",
    },
    detail: {
      en: "A private vehicle and driver booked for a specific flight, covering Riyadh, Jeddah, Madinah, Dammam and Abha airports. Arrival time is matched to the flight you give us so the pickup follows the aircraft, not the clock.",
      ar: "سيارة خاصة مع سائق محجوزة لرحلة طيران محددة، تشمل مطارات الرياض وجدة والمدينة المنورة والدمام وأبها. نربط موعد الاستقبال برقم رحلتك، فيتبع السائق وصول الطائرة لا توقيت الساعة.",
    },
    imageKey: "svc-airport",
    featured: true,
  },
  {
    slug: "city-to-city-transfers",
    name: { en: "City-to-City Transfers", ar: "النقل بين المدن" },
    summary: {
      en: "Long-distance road journeys between Saudi cities in a private vehicle.",
      ar: "رحلات برية طويلة بين المدن السعودية بسيارة خاصة.",
    },
    detail: {
      en: "Point-to-point travel by road — Riyadh to Jeddah, Makkah to Madinah, Dammam to Riyadh and other intercity routes — with the whole vehicle reserved for your party and stops arranged as you need them.",
      ar: "تنقّل مباشر من نقطة إلى نقطة برًّا — الرياض إلى جدة، ومكة إلى المدينة، والدمام إلى الرياض وغيرها — مع حجز السيارة بالكامل لمجموعتك وترتيب الاستراحات حسب رغبتك.",
    },
    imageKey: "svc-intercity",
    featured: true,
  },
  {
    slug: "hotel-transfers",
    name: { en: "Hotel Transfers", ar: "النقل من وإلى الفنادق" },
    summary: {
      en: "Door-to-door journeys between hotels, residences and terminals.",
      ar: "رحلات من الباب إلى الباب بين الفنادق والمساكن وصالات السفر.",
    },
    detail: {
      en: "Pickups and drop-offs at a named hotel entrance, including Haram-area hotels in Makkah and Madinah where vehicle access is restricted and the drop-off point matters.",
      ar: "استقبال وتوصيل عند مدخل الفندق المحدد، بما في ذلك فنادق منطقة الحرم في مكة والمدينة حيث يكون دخول المركبات مقيّدًا وتكون نقطة الإنزال مهمة.",
    },
    imageKey: "svc-hotel",
  },
  {
    slug: "hajj-transfers",
    name: { en: "Hajj Transfers", ar: "نقل الحجاج" },
    summary: {
      en: "Road transport arrangements for pilgrims during the Hajj season.",
      ar: "ترتيبات النقل البري للحجاج خلال موسم الحج.",
    },
    detail: {
      en: "Private vehicle arrangements for pilgrims travelling between Jeddah, Makkah and Madinah around the Hajj season. Availability and routing depend on the access rules in force at the time, which we confirm with you before quoting.",
      ar: "ترتيب سيارات خاصة للحجاج المتنقلين بين جدة ومكة والمدينة في موسم الحج. يعتمد التوفّر والمسار على أنظمة الدخول السارية في حينه، ونؤكدها معك قبل إصدار عرض السعر.",
    },
    imageKey: "svc-hajj",
  },
  {
    slug: "umrah-transfers",
    name: { en: "Umrah Transfers", ar: "نقل المعتمرين" },
    summary: {
      en: "Airport, hotel and intercity journeys for Umrah travellers.",
      ar: "رحلات المطار والفنادق وبين المدن للمعتمرين.",
    },
    detail: {
      en: "Transport for Umrah trips taken at any time of year: Jeddah airport to a Makkah hotel, Makkah to Madinah by road, and the return to the airport at the end of the journey.",
      ar: "نقل لرحلات العمرة في أي وقت من السنة: من مطار جدة إلى فندق في مكة، ومن مكة إلى المدينة برًّا، والعودة إلى المطار في ختام الرحلة.",
    },
    imageKey: "svc-umrah",
  },
  {
    slug: "ziyarat-transfers",
    name: { en: "Ziyarat Transfers", ar: "رحلات الزيارة" },
    summary: {
      en: "Private half-day and full-day visits to sites around the holy cities.",
      ar: "زيارات خاصة لنصف يوم أو يوم كامل للمواقع حول المدينتين المقدستين.",
    },
    detail: {
      en: "A vehicle and driver reserved for a Ziyarat itinerary around Madinah or Makkah. You set the list of sites and the pace; the quotation sets out what your journey covers.",
      ar: "سيارة وسائق محجوزان لبرنامج زيارة حول المدينة المنورة أو مكة المكرمة. أنت تحدد قائمة المواقع وإيقاع الرحلة، ويوضح عرض السعر ما تشمله رحلتك.",
    },
    imageKey: "svc-ziyarat",
  },
  {
    slug: "private-day-trips",
    name: { en: "Private Day Trips", ar: "رحلات يومية خاصة" },
    summary: {
      en: "A car and driver for a full day, on an itinerary you decide.",
      ar: "سيارة وسائق ليوم كامل، وفق برنامج تختاره أنت.",
    },
    detail: {
      en: "Day hire for destinations such as Diriyah, the Tuwaiq escarpment outside Riyadh, Taif's mountain road or AlUla, with the vehicle staying with you throughout.",
      ar: "استئجار ليوم كامل لوجهات مثل الدرعية، وحافة طويق قرب الرياض، وطريق الطائف الجبلي، أو العُلا، مع بقاء السيارة معك طوال اليوم.",
    },
    imageKey: "svc-daytrip",
  },
  {
    slug: "border-transfers",
    name: { en: "Border Transfers", ar: "النقل إلى المنافذ الحدودية" },
    summary: {
      en: "Road journeys to and from Saudi Arabia's land border crossings.",
      ar: "رحلات برية من وإلى المنافذ الحدودية البرية في المملكة.",
    },
    detail: {
      en: "Road journeys to land crossings such as the King Fahd Causeway to Bahrain, on the Saudi side only, to an agreed drop-off point before the crossing. The crossing and any transport beyond it are arranged separately by the traveller, as are visas and border formalities.",
      ar: "رحلات برية إلى المنافذ البرية مثل جسر الملك فهد إلى البحرين، على الجانب السعودي فقط، حتى نقطة نزول متفق عليها قبل المعبر. أما العبور وأي نقل بعده فيرتّبه المسافر بنفسه، وكذلك التأشيرات وإجراءات الحدود.",
    },
    imageKey: "svc-border",
  },
];

/**
 * Pilgrimage-specific journey categories. Deliberately phrased as journeys we
 * can quote for, with no claim of official Hajj authorisation or permits.
 */
export const pilgrimageJourneys: {
  name: Bilingual<string>;
  detail: Bilingual<string>;
}[] = [
  {
    name: { en: "Jeddah Airport to Makkah", ar: "مطار جدة إلى مكة المكرمة" },
    detail: {
      en: "The standard arrival leg for Umrah, roughly 90 km by motorway.",
      ar: "مرحلة الوصول المعتادة للعمرة، نحو 90 كم عبر الطريق السريع.",
    },
  },
  {
    name: { en: "Madinah Airport Transfers", ar: "النقل من مطار المدينة" },
    detail: {
      en: "Prince Mohammad bin Abdulaziz Airport to Haram-area hotels.",
      ar: "من مطار الأمير محمد بن عبدالعزيز إلى فنادق منطقة الحرم.",
    },
  },
  {
    name: { en: "Makkah to Madinah", ar: "مكة إلى المدينة" },
    detail: {
      en: "The intercity road journey north, approximately 440–450 km.",
      ar: "الرحلة البرية شمالًا بين المدينتين، نحو 440–450 كم.",
    },
  },
  {
    name: { en: "Madinah to Makkah", ar: "المدينة إلى مكة" },
    detail: {
      en: "The return leg south, timed around your hotel check-in.",
      ar: "رحلة العودة جنوبًا، بتوقيت يناسب موعد دخولك الفندق.",
    },
  },
  {
    name: { en: "Private Ziyarat", ar: "زيارة خاصة" },
    detail: {
      en: "A reserved vehicle for visits around Madinah or Makkah.",
      ar: "سيارة محجوزة لزيارات حول المدينة المنورة أو مكة المكرمة.",
    },
  },
  {
    name: { en: "Hotel Transportation", ar: "التنقل بين الفنادق" },
    detail: {
      en: "Movements between Haram-area hotels and transport points.",
      ar: "التنقل بين فنادق منطقة الحرم ونقاط المواصلات.",
    },
  },
];
