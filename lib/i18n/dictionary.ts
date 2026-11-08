import type { Bilingual } from "@/lib/i18n/config";

/**
 * Global interface strings — chrome rather than page content.
 *
 * Page copy is not here: it lives beside the page that owns it, so a
 * translation can be read next to the sentence it translates. This file is
 * only for strings that appear on every page.
 *
 * The Arabic is written, not transliterated from the English word order.
 */
export const ui = {
  skipToContent: {
    en: "Skip to content",
    ar: "تخطّي إلى المحتوى",
  },
  openMenu: {
    en: "Open menu",
    ar: "فتح القائمة",
  },
  closeMenu: {
    en: "Close menu",
    ar: "إغلاق القائمة",
  },
  menu: {
    en: "Menu",
    ar: "القائمة",
  },
  mainNavigation: {
    en: "Main",
    ar: "التنقل الرئيسي",
  },
  footerNavigation: {
    en: "Footer",
    ar: "روابط التذييل",
  },
  breadcrumb: {
    en: "Breadcrumb",
    ar: "مسار التصفح",
  },
  home: {
    en: "Home",
    ar: "الرئيسية",
  },
  switchLanguage: {
    en: "العربية",
    ar: "English",
  },
  switchLanguageLabel: {
    en: "Read this page in Arabic",
    ar: "اقرأ هذه الصفحة بالإنجليزية",
  },
  quoteCta: {
    en: "Request a quote",
    ar: "اطلب عرض سعر",
  },
  footerIntro: {
    en:
      "Private car, SUV, van and minibus transfers arranged across Saudi " +
      "Arabia — airports, hotels, intercity routes and pilgrimage journeys. " +
      "Tell us the journey and we send a quotation.",
    ar:
      "نُرتّب رحلات نقل خاصة بسيارات وسيارات دفع رباعي وڤانات وحافلات صغيرة " +
      "في جميع أنحاء المملكة العربية السعودية — من المطارات والفنادق وبين " +
      "المدن وفي رحلات الحج والعمرة. أخبرنا بتفاصيل رحلتك ونرسل لك عرض سعر.",
  },
  footerDisclaimer: {
    en:
      "arranges private road transport. We are not an official Hajj or Umrah " +
      "operator and do not issue visas, pilgrimage permits or travel " +
      "packages. Journey times and distances shown on this site are " +
      "approximate. Availability and price are confirmed in writing for each " +
      "journey before it is booked.",
    ar:
      "يُرتّب النقل البري الخاص. نحن لسنا مشغّلاً رسمياً للحج أو العمرة ولا " +
      "نُصدر تأشيرات أو تصاريح حج أو برامج سياحية. أزمنة الرحلات والمسافات " +
      "المذكورة في هذا الموقع تقريبية. يتم تأكيد التوفّر والسعر كتابةً لكل " +
      "رحلة قبل الحجز.",
  },
  footerRights: {
    en: "All rights reserved.",
    ar: "جميع الحقوق محفوظة.",
  },
  footerPhotoCredit: {
    en:
      "Photography by Wikimedia Commons contributors, used under Creative " +
      "Commons and public domain licences.",
    ar:
      "الصور من مساهمي ويكيميديا كومنز، مستخدمة بموجب رخص المشاع الإبداعي " +
      "والملكية العامة.",
  },
} satisfies Record<string, Bilingual<string>>;

export type UiKey = keyof typeof ui;
