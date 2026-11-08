import type { Bilingual } from "@/lib/i18n/config";
import type { InquiryErrorCode, TripType } from "@/lib/inquiry/schema";

/**
 * Everything the enquiry form says, in both languages.
 *
 * Validation codes come back from the shared validator and are turned into
 * sentences here, so the server-side rules stay language-neutral and there is
 * exactly one place to fix a wording.
 */

type B = Bilingual<string>;

export const formCopy = {
  intro: {
    title: { en: "Plan your journey", ar: "خطّط رحلتك" } satisfies B,
    lead: {
      en: "Send the details and we reply with a price. This is an enquiry, not a confirmed booking.",
      ar: "أرسل التفاصيل ونرد عليك بالسعر. هذا استفسار وليس حجزًا مؤكدًا.",
    } satisfies B,
  },
  labels: {
    tripType: { en: "Journey type", ar: "نوع الرحلة" } satisfies B,
    tripTypePlaceholder: {
      en: "Select a journey type",
      ar: "اختر نوع الرحلة",
    } satisfies B,
    pickup: { en: "Pickup location", ar: "مكان الانطلاق" } satisfies B,
    pickupPlaceholder: {
      en: "Airport, hotel or address",
      ar: "مطار أو فندق أو عنوان",
    } satisfies B,
    destination: { en: "Destination", ar: "الوجهة" } satisfies B,
    destinationPlaceholder: {
      en: "Where the journey ends",
      ar: "أين تنتهي الرحلة",
    } satisfies B,
    date: { en: "Travel date", ar: "تاريخ السفر" } satisfies B,
    time: { en: "Pickup time", ar: "وقت الانطلاق" } satisfies B,
    passengers: { en: "Passengers", ar: "عدد الركاب" } satisfies B,
    luggage: { en: "Suitcases", ar: "عدد الحقائب" } satisfies B,
    flightNumber: { en: "Flight number", ar: "رقم الرحلة" } satisfies B,
    flightHint: {
      en: "Optional — helps us track arrivals",
      ar: "اختياري — يساعدنا على متابعة موعد الوصول",
    } satisfies B,
    name: { en: "Your name", ar: "الاسم" } satisfies B,
    namePlaceholder: { en: "Full name", ar: "الاسم الكامل" } satisfies B,
    email: { en: "Email", ar: "البريد الإلكتروني" } satisfies B,
    phone: { en: "Phone or WhatsApp", ar: "الجوال أو واتساب" } satisfies B,
    notes: { en: "Anything else", ar: "ملاحظات إضافية" } satisfies B,
    notesHint: {
      en: "Optional — child seats, extra stops, group details",
      ar: "اختياري — مقاعد أطفال، توقفات إضافية، تفاصيل المجموعة",
    } satisfies B,
    notesPlaceholder: {
      en: "Tell us anything that affects the journey",
      ar: "أخبرنا بأي شيء يؤثر على الرحلة",
    } satisfies B,
    optional: { en: "Optional", ar: "اختياري" } satisfies B,
    company: { en: "Company", ar: "الشركة" } satisfies B,
  },
  submit: {
    idle: { en: "Request a quotation", ar: "اطلب عرض سعر" } satisfies B,
    pending: { en: "Sending…", ar: "جارٍ الإرسال…" } satisfies B,
  },
  privacy: {
    en: "We use your details only to answer this enquiry. No payment is taken here and no booking is confirmed until you accept a quotation.",
    ar: "نستخدم بياناتك للرد على هذا الاستفسار فقط. لا يُدفع أي مبلغ هنا ولا يُؤكَّد أي حجز حتى توافق على عرض السعر.",
  } satisfies B,
  outcomes: {
    sentTitle: {
      en: "Your enquiry is with us",
      ar: "وصلنا استفسارك",
    } satisfies B,
    sentBody: {
      en: "We have your journey details and will reply with a quotation. Your reference is",
      ar: "لدينا تفاصيل رحلتك وسنرد عليك بعرض سعر. رقمك المرجعي هو",
    } satisfies B,
    unconfiguredTitle: {
      en: "Your details were not sent",
      ar: "لم تُرسَل بياناتك",
    } satisfies B,
    unconfiguredBody: {
      en: "The form is working and your details are valid, but no enquiry destination is connected on this deployment yet, so nothing was delivered. Nothing has been booked. See",
      ar: "النموذج يعمل وبياناتك صحيحة، لكن لا توجد جهة استقبال مرتبطة بهذه النسخة بعد، لذلك لم يُرسَل شيء. ولم يُحجز شيء. راجع",
    } satisfies B,
    unconfiguredSuffix: {
      en: "to connect one.",
      ar: "لربط جهة استقبال.",
    } satisfies B,
    errorTitle: {
      en: "That did not go through",
      ar: "لم تتم العملية",
    } satisfies B,
    errorBody: {
      en: "We could not pass your details on just now. Please try again in a moment.",
      ar: "تعذّر تمرير بياناتك في هذه اللحظة. يرجى المحاولة بعد قليل.",
    } satisfies B,
    invalidTitle: {
      en: "Check the highlighted fields",
      ar: "راجع الحقول المحددة",
    } satisfies B,
    invalidBody: {
      en: "A few details need fixing before we can quote.",
      ar: "بعض التفاصيل تحتاج تصحيحًا قبل أن نتمكن من التسعير.",
    } satisfies B,
  },
} as const;

export const tripTypeLabels: Record<TripType, B> = {
  "Airport transfer": { en: "Airport transfer", ar: "نقل من وإلى المطار" },
  "City-to-city transfer": { en: "City-to-city transfer", ar: "نقل بين المدن" },
  "Hotel transfer": { en: "Hotel transfer", ar: "نقل من وإلى الفندق" },
  "Hajj or Umrah journey": {
    en: "Hajj or Umrah journey",
    ar: "رحلة حج أو عمرة",
  },
  "Private Ziyarat": { en: "Private Ziyarat", ar: "زيارة خاصة" },
  "Private day trip": { en: "Private day trip", ar: "رحلة يومية خاصة" },
  "Border transfer": { en: "Border transfer", ar: "نقل إلى منفذ حدودي" },
};

export const errorMessages: Record<InquiryErrorCode, B> = {
  pickupRequired: {
    en: "Tell us where the journey starts.",
    ar: "أخبرنا من أين تبدأ الرحلة.",
  },
  destinationRequired: {
    en: "Tell us where the journey ends.",
    ar: "أخبرنا أين تنتهي الرحلة.",
  },
  sameEndpoints: {
    en: "Pickup and destination are the same.",
    ar: "مكان الانطلاق والوجهة متطابقان.",
  },
  dateRequired: { en: "Choose a travel date.", ar: "اختر تاريخ السفر." },
  dateFormat: {
    en: "Use the date picker to choose a date.",
    ar: "استخدم أداة التقويم لاختيار التاريخ.",
  },
  datePast: {
    en: "Choose a date that has not passed.",
    ar: "اختر تاريخًا لم يمضِ بعد.",
  },
  timeRequired: { en: "Choose a pickup time.", ar: "اختر وقت الانطلاق." },
  timeFormat: {
    en: "Use the time picker to choose a time.",
    ar: "استخدم أداة الوقت لاختيار الوقت.",
  },
  passengersRequired: {
    en: "How many passengers are travelling?",
    ar: "كم عدد الركاب المسافرين؟",
  },
  passengersRange: {
    en: "Enter a number between 1 and 60.",
    ar: "أدخل رقمًا بين 1 و60.",
  },
  luggageRange: {
    en: "Enter a number between 0 and 99.",
    ar: "أدخل رقمًا بين 0 و99.",
  },
  nameRequired: {
    en: "Tell us who the booking is for.",
    ar: "أخبرنا باسم صاحب الحجز.",
  },
  nameTooLong: { en: "That name is too long.", ar: "الاسم طويل جدًا." },
  contactRequired: {
    en: "Add an email address or a phone number so we can reply.",
    ar: "أضف بريدًا إلكترونيًا أو رقم جوال حتى نتمكن من الرد.",
  },
  emailInvalid: {
    en: "That email address does not look right.",
    ar: "البريد الإلكتروني لا يبدو صحيحًا.",
  },
  phoneInvalid: {
    en: "Use digits, spaces and an optional leading +.",
    ar: "استخدم أرقامًا ومسافات مع علامة + في البداية إن رغبت.",
  },
  notesTooLong: {
    en: "Please keep notes under 2000 characters.",
    ar: "يرجى إبقاء الملاحظات أقل من 2000 حرف.",
  },
  flightTooLong: {
    en: "That flight number is too long.",
    ar: "رقم الرحلة طويل جدًا.",
  },
  tripTypeInvalid: {
    en: "Choose one of the listed journey types.",
    ar: "اختر نوعًا من أنواع الرحلات المدرجة.",
  },
};
