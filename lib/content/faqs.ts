import type { Bilingual } from "@/lib/i18n/config";

/**
 * Homepage FAQ.
 *
 * Answers describe how the quote process actually works and avoid claiming
 * licences, permits, instant confirmation or operational guarantees that are
 * not in place. They are also the source for the FAQPage structured data, so
 * every answer here must be literally true of the service.
 *
 * Route and city pages carry their own, different questions — this list is
 * never reused on another page.
 */
export type Faq = { question: Bilingual<string>; answer: Bilingual<string> };

export const faqs: Faq[] = [
  {
    question: {
      en: "Can I book private transfers across Saudi Arabia?",
      ar: "هل يمكنني حجز نقل خاص في جميع أنحاء السعودية؟",
    },
    answer: {
      en: "You can request a private transfer between cities, airports, hotels and other destinations anywhere in Saudi Arabia. Send your journey details through the quote form and we confirm availability and price for that specific journey before anything is booked. Nothing is reserved until you accept a quotation.",
      ar: "يمكنك طلب نقل خاص بين المدن والمطارات والفنادق وأي وجهة داخل المملكة. أرسل تفاصيل رحلتك عبر نموذج طلب السعر، ونؤكد لك التوفّر والسعر لتلك الرحلة تحديدًا قبل أي حجز. لا يُحجز شيء حتى توافق على عرض السعر.",
    },
  },
  {
    question: {
      en: "Can I arrange transportation between Makkah and Madinah?",
      ar: "هل يمكن ترتيب النقل بين مكة المكرمة والمدينة المنورة؟",
    },
    answer: {
      en: "Yes. Makkah to Madinah and Madinah to Makkah are among the most requested intercity journeys. The road route is approximately 440–450 km and typically takes four and a half to five and a half hours without stops. The whole vehicle is reserved for your party.",
      ar: "نعم. رحلتا مكة إلى المدينة والمدينة إلى مكة من أكثر الرحلات طلبًا بين المدن. المسار البري نحو 440–450 كم ويستغرق عادة من أربع ساعات ونصف إلى خمس ساعات ونصف دون توقف. تُحجز السيارة بالكامل لمجموعتك.",
    },
  },
  {
    question: {
      en: "Do you provide Jeddah Airport to Makkah transfers?",
      ar: "هل توفرون النقل من مطار جدة إلى مكة المكرمة؟",
    },
    answer: {
      en: "Yes. King Abdulaziz International Airport to a Makkah hotel is a standard arrival transfer of around 90 km. Give us your flight number and arrival time in the quote form so the pickup can be matched to the flight rather than a fixed clock time.",
      ar: "نعم. الرحلة من مطار الملك عبدالعزيز الدولي إلى فندق في مكة رحلة وصول معتادة بطول 90 كم تقريبًا. أدرج رقم رحلتك ووقت الوصول في النموذج ليُربط الاستقبال بموعد هبوط الطائرة لا بتوقيت ثابت.",
    },
  },
  {
    question: {
      en: "Can I arrange private Umrah transportation?",
      ar: "هل يمكن ترتيب نقل خاص للعمرة؟",
    },
    answer: {
      en: "Yes. Umrah journeys can be arranged at any time of year, including the arrival leg from Jeddah, hotel transfers in Makkah, the road journey to Madinah and the departure transfer. We are a private transport provider and are not an official Hajj or Umrah operator, so we arrange road transport only, not visas, permits or pilgrimage packages.",
      ar: "نعم. يمكن ترتيب رحلات العمرة في أي وقت من السنة، بما في ذلك الوصول من جدة، والتنقل بين فنادق مكة، والرحلة البرية إلى المدينة، ورحلة المغادرة. نحن مزوّد نقل خاص ولسنا مشغّلاً رسميًا للحج أو العمرة، لذا نرتّب النقل البري فقط، لا التأشيرات ولا التصاريح ولا البرامج السياحية.",
    },
  },
  {
    question: {
      en: "Are group transfers available?",
      ar: "هل تتوفر رحلات للمجموعات؟",
    },
    answer: {
      en: "Yes. Vans seat up to seven passengers and minibuses up to fourteen. Tell us the number of travellers and how much luggage you have in the quote form and we will propose a suitable vehicle category.",
      ar: "نعم. تتسع الڤانات حتى سبعة ركاب والحافلات الصغيرة حتى أربعة عشر راكبًا. أخبرنا بعدد المسافرين وكمية الحقائب في النموذج ونقترح فئة المركبة المناسبة.",
    },
  },
  {
    question: {
      en: "Can I request a private Ziyarat journey?",
      ar: "هل يمكنني طلب رحلة زيارة خاصة؟",
    },
    answer: {
      en: "Yes. A vehicle and driver can be reserved for a Ziyarat itinerary around Madinah or Makkah. You choose the sites and the order, and the quotation for your journey sets out the time and distance it covers.",
      ar: "نعم. يمكن حجز سيارة وسائق لبرنامج زيارة حول المدينة المنورة أو مكة المكرمة. أنت تختار المواقع وترتيبها، ويوضح عرض السعر لرحلتك الوقت والمسافة اللذين يشملهما.",
    },
  },
  {
    question: {
      en: "How do I receive a transfer quotation?",
      ar: "كيف أحصل على عرض سعر للرحلة؟",
    },
    answer: {
      en: "Fill in the journey form with your pickup point, destination, date, time, passenger and luggage count, and the best way to reach you. We reply with a price for that journey and the vehicle category it covers. The form sends an enquiry — it does not confirm or charge for a booking.",
      ar: "املأ نموذج الرحلة بنقطة الانطلاق والوجهة والتاريخ والوقت وعدد الركاب والحقائب وأفضل وسيلة للتواصل معك. نرد بسعر لتلك الرحلة وفئة المركبة التي يشملها. النموذج يرسل استفسارًا فقط — لا يؤكد حجزًا ولا يتقاضى أي مبلغ.",
    },
  },
  {
    question: {
      en: "How far in advance should I request a transfer?",
      ar: "قبل كم من الوقت ينبغي أن أطلب الرحلة؟",
    },
    answer: {
      en: "As early as you can, particularly for airport pickups, Makkah and Madinah journeys, and travel during Ramadan and the Hajj season, when demand on those routes is highest. Short-notice requests are still worth sending; we will tell you honestly whether the journey can be covered.",
      ar: "في أقرب وقت ممكن، خصوصًا لرحلات الاستقبال من المطار، ورحلات مكة والمدينة، والسفر في رمضان وموسم الحج حين يبلغ الطلب على هذه المسارات ذروته. ومع ذلك يستحق الطلب المتأخر الإرسال، وسنخبرك بصراحة إن كان بالإمكان تغطية الرحلة.",
    },
  },
];
