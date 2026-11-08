/**
 * Global navigation, shared by the header and the footer.
 *
 * Built per locale so English and Arabic keep entirely separate internal link
 * sets, as the cluster specification requires. Routes that do not exist yet
 * are marked `planned`; the header renders those as plain text rather than
 * links, so the site never ships a nav item that leads nowhere.
 */

import { type Bilingual, type Locale } from "@/lib/i18n/config";
import { href } from "@/lib/i18n/routes";

export type NavLink = {
  label: string;
  href: string;
  description?: string;
  /** True while the destination page does not exist yet. */
  planned?: boolean;
};

export type NavGroup = {
  label: string;
  href?: string;
  items?: NavLink[];
};

const t = <T,>(value: Bilingual<T>, locale: Locale): T => value[locale];

/**
 * A link to a section of the locale's own homepage.
 *
 * The fragment sits after the trailing slash — `/en/#faq`, not `/en#faq`.
 * The slashless form would answer 308 and lose the fragment on the way.
 */
const homeAnchor = (locale: Locale, anchor: string) =>
  `${href(locale, "home")}#${anchor}`;

export function primaryNav(locale: Locale): NavGroup[] {
  return [
    {
      label: t({ en: "Home", ar: "الرئيسية" }, locale),
      href: href(locale, "home"),
    },
    {
      label: t({ en: "Destinations", ar: "الوجهات" }, locale),
      href: homeAnchor(locale, "destinations"),
      items: [
        {
          label: t({ en: "Riyadh", ar: "الرياض" }, locale),
          href: href(locale, "riyadh"),
          description: t(
            {
              en: "Airport, railway, hotel and intercity",
              ar: "المطار والقطار والفنادق وبين المدن",
            },
            locale
          ),
        },
        {
          // One entry for the region rather than three: keeps the menu
          // manageable. It opens the Riyadh hub's region section, which links
          // to each destination hub.
          label: t({ en: "Riyadh Region", ar: "منطقة الرياض" }, locale),
          href: `${href(locale, "riyadh")}#riyadh-region`,
          description: t(
            { en: "Diriyah, Al Kharj, Shaqra", ar: "الدرعية والخرج وشقراء" },
            locale
          ),
        },
        {
          label: t({ en: "Jeddah", ar: "جدة" }, locale),
          href: href(locale, "jeddah"),
          description: t({ en: "Red Sea gateway", ar: "بوابة البحر الأحمر" }, locale),
        },
        {
          label: t({ en: "Makkah", ar: "مكة المكرمة" }, locale),
          href: homeAnchor(locale, "destinations"),
          description: t({ en: "Pilgrimage transfers", ar: "رحلات الحج والعمرة" }, locale),
          planned: true,
        },
        {
          label: t({ en: "Madinah", ar: "المدينة المنورة" }, locale),
          href: homeAnchor(locale, "destinations"),
          description: t({ en: "Haram and airport runs", ar: "الحرم والمطار" }, locale),
          planned: true,
        },
        {
          label: t({ en: "Dammam & Al Khobar", ar: "الدمام والخبر" }, locale),
          href: homeAnchor(locale, "destinations"),
          description: t({ en: "Eastern Province", ar: "المنطقة الشرقية" }, locale),
          planned: true,
        },
        {
          label: t({ en: "Taif & Abha", ar: "الطائف وأبها" }, locale),
          href: homeAnchor(locale, "destinations"),
          description: t({ en: "Highland routes", ar: "طرق المرتفعات" }, locale),
          planned: true,
        },
      ],
    },
    {
      label: t({ en: "Riyadh routes", ar: "رحلات الرياض" }, locale),
      href: href(locale, "riyadh"),
      items: [
        {
          label: t({ en: "All Riyadh transfers", ar: "جميع خدمات الرياض" }, locale),
          href: href(locale, "riyadh"),
          description: t(
            { en: "Airport, railway, hotels, intercity", ar: "المطار والقطار والفنادق وبين المدن" },
            locale
          ),
        },
        {
          label: t({ en: "Riyadh airport transfers", ar: "النقل من مطار الرياض" }, locale),
          href: href(locale, "riyadhAirport"),
          description: t(
            { en: "Arrivals and departures", ar: "الوصول والمغادرة" },
            locale
          ),
        },
        {
          label: t({ en: "Riyadh railway stations", ar: "محطات قطار الرياض" }, locale),
          href: href(locale, "riyadhRailway"),
          description: t(
            { en: "Both stations, which to use", ar: "المحطتان وأيهما تستخدم" },
            locale
          ),
        },
        {
          label: t({ en: "Riyadh hotel transfers", ar: "النقل من فنادق الرياض" }, locale),
          href: href(locale, "riyadhHotel"),
          description: t({ en: "A named entrance", ar: "مدخل محدد" }, locale),
        },
        {
          label: t({ en: "Riyadh to Jeddah", ar: "الرياض إلى جدة" }, locale),
          href: href(locale, "riyadhToJeddah"),
          description: t({ en: "Across the peninsula", ar: "عبر شبه الجزيرة" }, locale),
        },
        {
          label: t({ en: "Riyadh to Dammam", ar: "الرياض إلى الدمام" }, locale),
          href: href(locale, "riyadhToDammam"),
          description: t({ en: "Out to the Gulf coast", ar: "إلى ساحل الخليج" }, locale),
        },
        {
          label: t({ en: "Riyadh to Al Khobar", ar: "الرياض إلى الخبر" }, locale),
          href: href(locale, "riyadhToAlKhobar"),
          description: t({ en: "Corniche and causeway", ar: "الكورنيش وجسر الملك فهد" }, locale),
        },
        {
          label: t({ en: "Riyadh to Buraydah", ar: "الرياض إلى بريدة" }, locale),
          href: href(locale, "riyadhToBuraydah"),
          description: t({ en: "North into Qassim", ar: "شمالًا إلى القصيم" }, locale),
        },
        {
          label: t({ en: "Riyadh to Taif", ar: "الرياض إلى الطائف" }, locale),
          href: href(locale, "riyadhToTaif"),
          description: t({ en: "Up to the highlands", ar: "صعودًا إلى المرتفعات" }, locale),
        },
        {
          label: t({ en: "Riyadh to Hail", ar: "الرياض إلى حائل" }, locale),
          href: href(locale, "riyadhToHail"),
          description: t({ en: "Six hours north", ar: "ست ساعات شمالًا" }, locale),
        },
        {
          label: t({ en: "Riyadh to AlUla", ar: "الرياض إلى العُلا" }, locale),
          href: href(locale, "riyadhToAlUla"),
          description: t({ en: "Drive or fly, compared", ar: "برًّا أم جوًّا، مقارنة" }, locale),
        },
      ],
    },
    {
      label: t({ en: "Jeddah", ar: "جدة" }, locale),
      href: href(locale, "jeddah"),
      items: [
        {
          label: t({ en: "All Jeddah transfers", ar: "جميع خدمات جدة" }, locale),
          href: href(locale, "jeddah"),
          description: t(
            { en: "Airport, Makkah, intercity", ar: "المطار ومكة وبين المدن" },
            locale
          ),
        },
        {
          label: t({ en: "Jeddah airport transfers", ar: "النقل من مطار جدة" }, locale),
          href: href(locale, "jeddahAirport"),
          description: t(
            { en: "King Abdulaziz arrivals", ar: "الوصول إلى الملك عبدالعزيز" },
            locale
          ),
        },
        {
          label: t({ en: "Jeddah to Makkah", ar: "من جدة إلى مكة" }, locale),
          href: href(locale, "jeddahToMakkah"),
          description: t(
            { en: "Airport or city to your hotel", ar: "من المطار أو المدينة إلى فندقك" },
            locale
          ),
        },
        {
          label: t({ en: "Riyadh to Jeddah", ar: "الرياض إلى جدة" }, locale),
          href: href(locale, "riyadhToJeddah"),
          description: t(
            { en: "The road from the capital", ar: "الطريق من العاصمة" },
            locale
          ),
        },
      ],
    },
    {
      label: t({ en: "Services", ar: "الخدمات" }, locale),
      href: homeAnchor(locale, "services"),
    },
    {
      label: t({ en: "How it works", ar: "كيف نعمل" }, locale),
      href: homeAnchor(locale, "how-it-works"),
    },
    {
      label: t({ en: "FAQ", ar: "الأسئلة الشائعة" }, locale),
      href: homeAnchor(locale, "faq"),
    },
  ];
}

/** The one conversion target repeated across the site. */
export function quoteCta(locale: Locale) {
  return {
    label: t({ en: "Request a quote", ar: "اطلب عرض سعر" }, locale),
    href: href(locale, "getQuote"),
  };
}

export function footerNav(
  locale: Locale
): { heading: string; links: NavLink[] }[] {
  return [
    {
      heading: t({ en: "Riyadh transfers", ar: "رحلات الرياض" }, locale),
      links: [
        {
          label: t({ en: "Riyadh transfers", ar: "خدمات النقل في الرياض" }, locale),
          href: href(locale, "riyadh"),
        },
        {
          label: t({ en: "Riyadh airport transfers", ar: "النقل من مطار الرياض" }, locale),
          href: href(locale, "riyadhAirport"),
        },
        {
          label: t({ en: "Riyadh railway stations", ar: "محطات قطار الرياض" }, locale),
          href: href(locale, "riyadhRailway"),
        },
        {
          label: t({ en: "Riyadh hotel transfers", ar: "النقل من فنادق الرياض" }, locale),
          href: href(locale, "riyadhHotel"),
        },
        {
          label: t({ en: "Diriyah transfers", ar: "التوصيل إلى الدرعية" }, locale),
          href: href(locale, "diriyah"),
        },
        {
          label: t({ en: "Riyadh–Al Kharj transfers", ar: "التوصيل بين الرياض والخرج" }, locale),
          href: href(locale, "alKharj"),
        },
        {
          label: t({ en: "Riyadh to Shaqra", ar: "الرياض إلى شقراء" }, locale),
          href: href(locale, "shaqra"),
        },
        {
          label: t({ en: "Riyadh to Jeddah", ar: "الرياض إلى جدة" }, locale),
          href: href(locale, "riyadhToJeddah"),
        },
        {
          label: t({ en: "Riyadh to Dammam", ar: "الرياض إلى الدمام" }, locale),
          href: href(locale, "riyadhToDammam"),
        },
        {
          label: t({ en: "Riyadh to Al Khobar", ar: "الرياض إلى الخبر" }, locale),
          href: href(locale, "riyadhToAlKhobar"),
        },
        {
          label: t({ en: "Riyadh to Buraydah", ar: "الرياض إلى بريدة" }, locale),
          href: href(locale, "riyadhToBuraydah"),
        },
        {
          label: t({ en: "Riyadh to Taif", ar: "الرياض إلى الطائف" }, locale),
          href: href(locale, "riyadhToTaif"),
        },
        {
          label: t({ en: "Riyadh to Hail", ar: "الرياض إلى حائل" }, locale),
          href: href(locale, "riyadhToHail"),
        },
        {
          label: t({ en: "Riyadh to AlUla", ar: "الرياض إلى العُلا" }, locale),
          href: href(locale, "riyadhToAlUla"),
        },
      ],
    },
    {
      heading: t({ en: "Jeddah transfers", ar: "رحلات جدة" }, locale),
      links: [
        {
          label: t({ en: "Jeddah transfers", ar: "نقل خاص في جدة" }, locale),
          href: href(locale, "jeddah"),
        },
        {
          label: t({ en: "Jeddah airport transfers", ar: "النقل من مطار جدة" }, locale),
          href: href(locale, "jeddahAirport"),
        },
        {
          label: t({ en: "Jeddah to Makkah", ar: "من جدة إلى مكة" }, locale),
          href: href(locale, "jeddahToMakkah"),
        },
        {
          label: t({ en: "Riyadh to Jeddah", ar: "الرياض إلى جدة" }, locale),
          href: href(locale, "riyadhToJeddah"),
        },
      ],
    },
    {
      heading: t({ en: "Services", ar: "الخدمات" }, locale),
      links: [
        // Deliberately still the nationwide services section, not the Riyadh
        // airport page. This column describes the service across Riyadh,
        // Jeddah, Madinah, Dammam and Abha; sending it to a Riyadh-only page
        // would be the wrong answer for four of those five airports. The
        // Riyadh page is linked from the Riyadh column above, from the hub and
        // from the header.
        {
          label: t({ en: "Airport transfers", ar: "النقل من وإلى المطار" }, locale),
          href: homeAnchor(locale, "services"),
        },
        {
          label: t({ en: "City-to-city transfers", ar: "النقل بين المدن" }, locale),
          href: homeAnchor(locale, "intercity"),
        },
        {
          label: t({ en: "Hotel transfers", ar: "النقل من وإلى الفنادق" }, locale),
          href: homeAnchor(locale, "services"),
        },
        {
          label: t({ en: "Private day trips", ar: "رحلات يومية خاصة" }, locale),
          href: homeAnchor(locale, "services"),
        },
      ],
    },
    {
      heading: t({ en: "Pilgrimage", ar: "الحج والعمرة" }, locale),
      links: [
        {
          label: t({ en: "Hajj transfers", ar: "نقل الحجاج" }, locale),
          href: homeAnchor(locale, "pilgrimage"),
        },
        {
          label: t({ en: "Umrah transfers", ar: "نقل المعتمرين" }, locale),
          href: homeAnchor(locale, "pilgrimage"),
        },
        {
          label: t({ en: "Ziyarat journeys", ar: "رحلات الزيارة" }, locale),
          href: homeAnchor(locale, "pilgrimage"),
        },
        {
          label: t({ en: "Makkah to Madinah", ar: "مكة إلى المدينة" }, locale),
          href: homeAnchor(locale, "pilgrimage"),
        },
      ],
    },
    {
      heading: t({ en: "Plan a journey", ar: "خطّط رحلتك" }, locale),
      links: [
        {
          label: t({ en: "How it works", ar: "كيف نعمل" }, locale),
          href: homeAnchor(locale, "how-it-works"),
        },
        {
          label: t({ en: "Vehicle options", ar: "خيارات المركبات" }, locale),
          href: homeAnchor(locale, "vehicles"),
        },
        {
          label: t({ en: "Questions", ar: "الأسئلة الشائعة" }, locale),
          href: homeAnchor(locale, "faq"),
        },
        {
          label: t({ en: "Request a quote", ar: "اطلب عرض سعر" }, locale),
          href: href(locale, "getQuote"),
        },
      ],
    },
  ];
}
