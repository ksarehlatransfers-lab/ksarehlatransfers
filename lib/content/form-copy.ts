import type { Bilingual } from "@/lib/i18n/config";
import type { FormValues } from "@/lib/inquiry/schema";

/**
 * Everything the quote form says, in both languages.
 *
 * The fields, their order of meaning, options and rules follow the original
 * Saudi Private Transfers form (see lib/inquiry/schema.ts); the wording is
 * this website's own. It makes no promise the site does not make elsewhere:
 * a written quotation, not a "fixed price".
 */

type B = Bilingual<string>;

export const formCopy = {
  ariaLabel: { en: "Quote request form", ar: "نموذج طلب عرض سعر" } satisfies B,
  intro: {
    title: { en: "Plan your journey", ar: "خطّط رحلتك" } satisfies B,
    lead: {
      en: "Send the details and we reply with a written quotation. This is a request, not a confirmed booking.",
      ar: "أرسل التفاصيل ونرد عليك بعرض سعر مكتوب. هذا طلب وليس حجزًا مؤكدًا.",
    } satisfies B,
  },
  labels: {
    name: { en: "Full name", ar: "الاسم الكامل" } satisfies B,
    namePlaceholder: { en: "Your name", ar: "اسمك" } satisfies B,
    phone: { en: "Phone / WhatsApp number", ar: "رقم الجوال / واتساب" } satisfies B,
    phoneHint: {
      en: "Include the country code, e.g. +966",
      ar: "أضف رمز الدولة، مثل ‎+966",
    } satisfies B,
    email: { en: "Email", ar: "البريد الإلكتروني" } satisfies B,
    emailHint: {
      en: "Optional — to receive a confirmation",
      ar: "اختياري — لتلقي تأكيد باستلام الطلب",
    } satisfies B,
    pickup: { en: "Pickup location", ar: "مكان الانطلاق" } satisfies B,
    pickupPlaceholder: { en: "Airport, hotel or address", ar: "مطار أو فندق أو عنوان" } satisfies B,
    dropoff: { en: "Drop-off location", ar: "الوجهة" } satisfies B,
    dropoffPlaceholder: { en: "Where the journey ends", ar: "أين تنتهي الرحلة" } satisfies B,
    date: { en: "Date", ar: "التاريخ" } satisfies B,
    time: { en: "Time", ar: "الوقت" } satisfies B,
    passengers: { en: "Passengers", ar: "عدد الركاب" } satisfies B,
    luggage: { en: "Luggage", ar: "الأمتعة" } satisfies B,
    vehicle: { en: "Vehicle type", ar: "نوع المركبة" } satisfies B,
    flight: { en: "Flight number", ar: "رقم الرحلة" } satisfies B,
    flightPlaceholder: { en: "e.g. SV1234", ar: "مثال: SV1234" } satisfies B,
    message: { en: "Message", ar: "رسالة" } satisfies B,
    messagePlaceholder: {
      en: "Child seats, extra stops, group details…",
      ar: "مقاعد أطفال، توقفات إضافية، تفاصيل المجموعة…",
    } satisfies B,
    optional: { en: "Optional", ar: "اختياري" } satisfies B,
    company: { en: "Company", ar: "الشركة" } satisfies B,
  },
  submit: {
    idle: { en: "Request a quotation", ar: "اطلب عرض سعر" } satisfies B,
    pending: { en: "Sending…", ar: "جارٍ الإرسال…" } satisfies B,
  },
  privacy: {
    en: "We use your details only to answer this request. No payment is taken here and no booking is confirmed until you accept a quotation.",
    ar: "نستخدم بياناتك للرد على هذا الطلب فقط. لا يُدفع أي مبلغ هنا ولا يُؤكَّد أي حجز حتى توافق على عرض السعر.",
  } satisfies B,
  outcomes: {
    sentTitle: { en: "Request received", ar: "تم استلام طلبك" } satisfies B,
    sentBody: {
      en: "We have your journey details and will reply with a written quotation. Your reference is",
      ar: "لدينا تفاصيل رحلتك وسنرد عليك بعرض سعر مكتوب. رقمك المرجعي هو",
    } satisfies B,
    sendAnother: { en: "Send another request", ar: "إرسال طلب آخر" } satisfies B,
    unconfiguredTitle: { en: "Your details were not sent", ar: "لم تُرسَل بياناتك" } satisfies B,
    unconfiguredBody: {
      en: "The form is working and your details are valid, but no destination is connected on this deployment yet, so nothing was delivered and nothing has been booked.",
      ar: "النموذج يعمل وبياناتك صحيحة، لكن لا توجد جهة استقبال مرتبطة بهذه النسخة بعد، لذلك لم يُرسَل شيء ولم يُحجز شيء.",
    } satisfies B,
    errorTitle: { en: "That did not go through", ar: "لم تتم العملية" } satisfies B,
    errorBody: {
      en: "Something went wrong and your request was not sent. Please try again in a moment.",
      ar: "حدث خطأ ولم يُرسَل طلبك. يرجى المحاولة مرة أخرى بعد قليل.",
    } satisfies B,
    busyBody: {
      en: "We are receiving a lot of requests from your connection. Your request was not sent — please wait a minute and try again.",
      ar: "نستقبل طلبات كثيرة من اتصالك. لم يُرسَل طلبك — يرجى الانتظار دقيقة ثم المحاولة مرة أخرى.",
    } satisfies B,
    invalidTitle: { en: "Check the highlighted fields", ar: "راجع الحقول المحددة" } satisfies B,
    invalidBody: {
      en: "A few details need fixing before we can send your request.",
      ar: "بعض التفاصيل تحتاج تصحيحًا قبل أن نتمكن من إرسال طلبك.",
    } satisfies B,
  },
} as const;

/** Per-field messages for fields the CRM schema can reject. */
export const fieldErrors: Partial<Record<keyof FormValues, B>> = {
  phone: {
    en: "Enter a phone / WhatsApp number (at least 5 characters).",
    ar: "أدخل رقم جوال / واتساب (5 خانات على الأقل).",
  },
  email: { en: "That email address does not look right.", ar: "البريد الإلكتروني لا يبدو صحيحًا." },
  name: { en: "That name is too long.", ar: "الاسم طويل جدًا." },
  pickup: { en: "That location is too long.", ar: "الموقع طويل جدًا." },
  dropoff: { en: "That location is too long.", ar: "الموقع طويل جدًا." },
  flight: { en: "That flight number is too long.", ar: "رقم الرحلة طويل جدًا." },
  message: { en: "Please keep the message under 2000 characters.", ar: "يرجى إبقاء الرسالة أقل من 2000 حرف." },
};
