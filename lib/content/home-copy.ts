import type { Bilingual } from "@/lib/i18n/config";

/**
 * Every string the homepage renders that is not already part of a data list.
 *
 * Kept in one module so the two languages sit beside each other and a missing
 * translation is visible at a glance rather than discovered on the page. The
 * Arabic is written for Arabic readers, not transposed word for word — where
 * an English phrase has no natural equivalent the Arabic says the same thing
 * a different way.
 */

type B = Bilingual<string>;

export const homeCopy = {
  hero: {
    eyebrow: {
      en: "Nationwide · Kingdom of Saudi Arabia",
      ar: "في كل مناطق المملكة العربية السعودية",
    } satisfies B,
    title: {
      en: "Private transfers across Saudi Arabia",
      ar: "نقل خاص في جميع أنحاء السعودية",
    } satisfies B,
    lead: {
      en: "One private vehicle and driver for your whole party — airport pickups, hotel transfers, long intercity routes and pilgrimage journeys between Makkah and Madinah. Tell us where you are going and we reply with a price.",
      ar: "سيارة خاصة وسائق لمجموعتك وحدها — استقبال من المطار، ونقل من الفنادق، ورحلات طويلة بين المدن، ورحلات الحج والعمرة بين مكة والمدينة. أخبرنا بوجهتك ونرد عليك بالسعر.",
    } satisfies B,
    facts: {
      coverage: {
        term: { en: "Coverage", ar: "نطاق الخدمة" } satisfies B,
        detail: {
          en: "Riyadh, Jeddah, Makkah, Madinah, Dammam, Al Khobar, Taif and Abha",
          ar: "الرياض، جدة، مكة المكرمة، المدينة المنورة، الدمام، الخبر، الطائف، أبها",
        } satisfies B,
      },
      airports: {
        term: { en: "Airports", ar: "المطارات" } satisfies B,
        detail: {
          en: "RUH, JED, MED, DMM and regional arrivals",
          ar: "الرياض وجدة والمدينة والدمام والمطارات الإقليمية",
        } satisfies B,
      },
      process: {
        term: { en: "How it works", ar: "كيف نعمل" } satisfies B,
        detail: {
          en: "Send details, get a quotation, confirm, travel",
          ar: "أرسل التفاصيل، استلم عرض السعر، أكّد، وسافر",
        } satisfies B,
      },
    },
  },

  starter: {
    pickup: { en: "Pickup location", ar: "مكان الانطلاق" } satisfies B,
    pickupPlaceholder: {
      en: "Airport, hotel or address",
      ar: "مطار أو فندق أو عنوان",
    } satisfies B,
    dropoff: { en: "Drop-off location", ar: "مكان الوصول" } satisfies B,
    dropoffPlaceholder: {
      en: "Where the journey ends",
      ar: "أين تنتهي الرحلة",
    } satisfies B,
    date: { en: "Travel date", ar: "تاريخ السفر" } satisfies B,
    submit: { en: "Continue", ar: "متابعة" } satisfies B,
    note: {
      en: "Next step asks for passengers, luggage and contact details. This is an enquiry — no payment is taken and no booking is confirmed here.",
      ar: "الخطوة التالية تطلب عدد الركاب والحقائب وبيانات التواصل. هذا استفسار فقط — لا يُدفع أي مبلغ ولا يُؤكَّد أي حجز هنا.",
    } satisfies B,
  },

  summary: {
    label: { en: "Service summary", ar: "ملخّص الخدمة" } satisfies B,
    facts: [
      {
        term: { en: "What this is", ar: "ما هذه الخدمة" } satisfies B,
        detail: {
          en: "A private transfer service: a car, SUV, van or minibus with a driver, reserved for one party at a time. Not a taxi app, not a shared shuttle.",
          ar: "خدمة نقل خاص: سيارة أو دفع رباعي أو ڤان أو حافلة صغيرة مع سائق، محجوزة لمجموعة واحدة في كل مرة. ليست تطبيق أجرة ولا نقلاً مشتركًا.",
        } satisfies B,
      },
      {
        term: { en: "Where it operates", ar: "أين تعمل" } satisfies B,
        detail: {
          en: "Across Saudi Arabia, including Riyadh, Jeddah, Makkah, Madinah, Dammam, Al Khobar, Taif and Abha, and the airports serving them.",
          ar: "في جميع أنحاء المملكة، وتشمل الرياض وجدة ومكة المكرمة والمدينة المنورة والدمام والخبر والطائف وأبها، والمطارات التي تخدمها.",
        } satisfies B,
      },
      {
        term: { en: "What it covers", ar: "ماذا تشمل" } satisfies B,
        detail: {
          en: "Airport transfers, city-to-city journeys, hotel transfers, Hajj and Umrah travel, Ziyarat visits, private day trips and border transfers.",
          ar: "النقل من وإلى المطارات، والرحلات بين المدن، والنقل من الفنادق، ورحلات الحج والعمرة، وبرامج الزيارة، والرحلات اليومية الخاصة، والنقل إلى المنافذ الحدودية.",
        } satisfies B,
      },
      {
        term: { en: "How to arrange one", ar: "كيف ترتّب رحلة" } satisfies B,
        detail: {
          en: "Send your journey details through the form on this page. You receive a written quotation; the journey is booked only once you accept it.",
          ar: "أرسل تفاصيل رحلتك عبر النموذج في هذه الصفحة. ستصلك عرض سعر مكتوب، ولا تُحجز الرحلة إلا بعد موافقتك عليه.",
        } satisfies B,
      },
    ],
  },

  destinations: {
    eyebrow: { en: "Nationwide coverage", ar: "تغطية على مستوى المملكة" } satisfies B,
    title: {
      en: "Journeys arranged the length of the Kingdom",
      ar: "رحلات مُرتَّبة على امتداد المملكة",
    } satisfies B,
    lead: {
      en: "From the Gulf coast to the Red Sea and the Asir highlands. These are the destinations we plan journeys around most often — tell us anywhere else in Saudi Arabia and we will quote for it.",
      ar: "من ساحل الخليج إلى البحر الأحمر ومرتفعات عسير. هذه الوجهات التي نرتّب حولها أكثر رحلاتنا — واذكر لنا أي مكان آخر في المملكة وسنُسعّره لك.",
    } satisfies B,
    footnote: {
      en: "Travelling somewhere not listed? Journeys to other Saudi cities, industrial sites and border crossings are quoted on request.",
      ar: "وجهتك غير مذكورة؟ نُسعّر الرحلات إلى بقية المدن السعودية والمواقع الصناعية والمنافذ الحدودية عند الطلب.",
    } satisfies B,
  },

  services: {
    eyebrow: { en: "Our services", ar: "خدماتنا" } satisfies B,
    title: { en: "Eight ways we move you", ar: "ثماني طرق لنقلك" } satisfies B,
    lead: {
      en: "Every journey is private: one vehicle, one driver, reserved for your party alone. Choose the service closest to your plan and we will shape the detail around it.",
      ar: "كل رحلة خاصة: سيارة واحدة وسائق واحد، محجوزان لمجموعتك وحدها. اختر الخدمة الأقرب لخطتك ونُفصّل التفاصيل حولها.",
    } satisfies B,
    cardCta: { en: "Get a quote", ar: "اطلب عرض سعر" } satisfies B,
    cardCtaFor: { en: "for", ar: "لخدمة" } satisfies B,
  },

  pilgrimage: {
    eyebrow: { en: "Hajj · Umrah · Ziyarat", ar: "الحج · العمرة · الزيارة" } satisfies B,
    title: {
      en: "Transport for pilgrims, between Makkah and Madinah",
      ar: "نقل الحجاج والمعتمرين بين مكة والمدينة",
    } satisfies B,
    lead: {
      en: "The journeys pilgrims ask for most, in a private vehicle with room for the whole family and the luggage. Timed around flight arrivals and hotel check-in rather than a fixed schedule.",
      ar: "أكثر الرحلات طلبًا لدى الحجاج والمعتمرين، بسيارة خاصة تتسع للعائلة كاملة ولحقائبها، بتوقيت يُبنى على وصول الرحلات ومواعيد دخول الفنادق لا على جدول ثابت.",
    } satisfies B,
    disclosureLabel: { en: "What we are:", ar: "ما نحن عليه:" } satisfies B,
    disclosure: {
      en: "a private road transport provider. We are not an official Hajj or Umrah operator and we do not issue visas, pilgrimage permits or packages. During the Hajj season, access to some areas is controlled by the authorities — we confirm what is possible for your dates before quoting.",
      ar: "مزوّد نقل بري خاص. لسنا مشغّلاً رسميًا للحج أو العمرة ولا نُصدر تأشيرات أو تصاريح أو برامج. وفي موسم الحج تُنظّم الجهات المختصة الدخول إلى بعض المناطق — ونؤكد لك ما هو ممكن في تواريخك قبل إصدار السعر.",
    } satisfies B,
    cta: { en: "Plan a pilgrimage journey", ar: "خطّط رحلة حج أو عمرة" } satisfies B,
  },

  intercity: {
    eyebrow: { en: "Intercity journeys", ar: "الرحلات بين المدن" } satisfies B,
    title: {
      en: "Long distances, one private vehicle",
      ar: "مسافات طويلة بسيارة خاصة واحدة",
    } satisfies B,
    lead: {
      en: "Saudi Arabia is large and its cities are far apart. A private car on these routes means no transfers, no waiting at terminals and stops whenever you want them.",
      ar: "المملكة واسعة ومدنها متباعدة. السيارة الخاصة على هذه المسارات تعني بلا تنقّل بين وسائل، وبلا انتظار في الصالات، ومع توقف متى شئت.",
    } satisfies B,
    to: { en: "to", ar: "إلى" } satisfies B,
    distanceLabel: { en: "Approximate distance", ar: "المسافة التقريبية" } satisfies B,
    durationLabel: { en: "Typical driving time", ar: "زمن القيادة المعتاد" } satisfies B,
    readMore: { en: "Route details", ar: "تفاصيل المسار" } satisfies B,
    footnote: {
      en: "Distances and driving times are approximate and shown as examples. Actual timing depends on traffic, weather, checkpoints and the stops you ask for — your quotation confirms the detail.",
      ar: "المسافات وأزمنة القيادة تقريبية ومعروضة كأمثلة. التوقيت الفعلي يعتمد على الحركة المرورية والطقس ونقاط التفتيش والاستراحات التي تطلبها — ويُحدَّد في عرض السعر.",
    } satisfies B,
    cta: { en: "Quote another route", ar: "سعّر مسارًا آخر" } satisfies B,
  },

  howItWorks: {
    eyebrow: { en: "How it works", ar: "كيف نعمل" } satisfies B,
    title: {
      en: "Four steps from enquiry to journey",
      ar: "أربع خطوات من الاستفسار إلى الرحلة",
    } satisfies B,
    lead: {
      en: "No apps to install and no account to create. You tell us the journey, we price it, you decide.",
      ar: "لا تطبيق تُثبّته ولا حساب تُنشئه. تخبرنا بالرحلة، ونُسعّرها، وأنت تقرر.",
    } satisfies B,
    stepLabel: { en: "Step", ar: "الخطوة" } satisfies B,
    steps: [
      {
        title: { en: "Share your journey", ar: "شاركنا تفاصيل رحلتك" } satisfies B,
        body: {
          en: "Pickup point, destination, date, time, how many of you and how much luggage. Add a flight number if you are arriving.",
          ar: "نقطة الانطلاق والوجهة والتاريخ والوقت وعددكم وكمية الحقائب. وأضف رقم الرحلة إن كنت قادمًا بالطائرة.",
        } satisfies B,
      },
      {
        title: { en: "Receive your quotation", ar: "استلم عرض السعر" } satisfies B,
        body: {
          en: "We reply with a price for that journey and the vehicle category it covers. No account, no deposit, no obligation.",
          ar: "نرد بسعر تلك الرحلة وفئة المركبة التي يشملها. بلا حساب، وبلا عربون، وبلا التزام.",
        } satisfies B,
      },
      {
        title: { en: "Confirm your transport", ar: "أكّد رحلتك" } satisfies B,
        body: {
          en: "Accept the quotation and we confirm the booking in writing with the pickup details and how to reach your driver.",
          ar: "وافق على عرض السعر ونؤكد الحجز كتابةً مع تفاصيل الاستقبال وطريقة التواصل مع السائق.",
        } satisfies B,
      },
      {
        title: { en: "Travel", ar: "سافر" } satisfies B,
        body: {
          en: "Your driver meets you at the agreed point. The vehicle is yours for the journey — no sharing, no detours.",
          ar: "يلتقيك السائق في النقطة المتفق عليها. السيارة لك طوال الرحلة — بلا مشاركة وبلا تحويلات.",
        } satisfies B,
      },
    ],
  },

  whyUs: {
    eyebrow: { en: "Why choose us", ar: "لماذا نحن" } satisfies B,
    title: { en: "What you can rely on", ar: "ما يمكنك الاعتماد عليه" } satisfies B,
    lead: {
      en: "Plain commitments about how the service works — not claims we cannot evidence.",
      ar: "التزامات واضحة حول طريقة عمل الخدمة — لا ادعاءات لا نملك إثباتها.",
    } satisfies B,
    reasons: [
      {
        title: { en: "Private by default", ar: "خاصة بطبيعتها" } satisfies B,
        body: {
          en: "The vehicle is reserved for your party alone. No shared rides, no other passengers picked up along the way.",
          ar: "السيارة محجوزة لمجموعتك وحدها. بلا رحلات مشتركة وبلا ركاب آخرين في الطريق.",
        } satisfies B,
      },
      {
        title: { en: "Built around your timing", ar: "مبنية على توقيتك" } satisfies B,
        body: {
          en: "Pickups are set to your flight or your hotel check-out, not to a fixed timetable. Waiting time is agreed up front.",
          ar: "يُضبط موعد الاستقبال على رحلتك أو على مغادرتك الفندق، لا على جدول ثابت. ويُتفق على وقت الانتظار مسبقًا.",
        } satisfies B,
      },
      {
        title: { en: "Planned nationwide", ar: "تغطية على مستوى المملكة" } satisfies B,
        body: {
          en: "One point of contact for a journey anywhere in the Kingdom, whether it is 20 minutes across a city or 950 km across it.",
          ar: "جهة تواصل واحدة لأي رحلة في المملكة، سواء كانت عشرين دقيقة داخل مدينة أو 950 كم عبرها.",
        } satisfies B,
      },
      {
        title: {
          en: "Room for families and groups",
          ar: "تتسع للعائلات والمجموعات",
        } satisfies B,
        body: {
          en: "Vehicle categories from sedans to 14-seat minibuses, matched to the passenger and luggage counts you give us.",
          ar: "فئات مركبات من السيدان إلى حافلات بأربعة عشر مقعدًا، تُختار وفق عدد الركاب والحقائب الذي تذكره.",
        } satisfies B,
      },
      {
        title: { en: "Written quotations", ar: "عروض أسعار مكتوبة" } satisfies B,
        body: {
          en: "The price, the vehicle category and what it includes are confirmed in writing before you commit to anything.",
          ar: "يُؤكَّد السعر وفئة المركبة وما يشمله العرض كتابةً قبل أن تلتزم بأي شيء.",
        } satisfies B,
      },
      {
        title: { en: "Straightforward to arrange", ar: "سهلة الترتيب" } satisfies B,
        body: {
          en: "One form, one reply. No account to create, no app to install and no deposit taken to get a price.",
          ar: "نموذج واحد ورد واحد. بلا إنشاء حساب، وبلا تثبيت تطبيق، وبلا عربون للحصول على سعر.",
        } satisfies B,
      },
    ],
  },

  vehicles: {
    eyebrow: { en: "Vehicle options", ar: "خيارات المركبات" } satisfies B,
    title: {
      en: "Choose by the size of your party",
      ar: "اختر حسب حجم مجموعتك",
    } satisfies B,
    lead: {
      en: "Tell us how many are travelling and how much luggage there is, and we match a category to it. The exact vehicle is confirmed in your quotation.",
      ar: "أخبرنا بعدد المسافرين وكمية الحقائب ونختار الفئة المناسبة. وتُحدَّد المركبة بالتحديد في عرض السعر.",
    } satisfies B,
    passengersLabel: { en: "Passengers", ar: "الركاب" } satisfies B,
    luggageLabel: { en: "Luggage", ar: "الحقائب" } satisfies B,
    footnotePrefix: {
      en: "Passenger and luggage figures describe the category we quote against, not a specific car. If you need child seats, extra luggage space or a wheelchair-accessible vehicle,",
      ar: "أرقام الركاب والحقائب تصف الفئة التي نُسعّر على أساسها لا سيارة بعينها. وإن احتجت مقاعد أطفال أو مساحة إضافية للحقائب أو مركبة مهيأة لكرسي متحرك،",
    } satisfies B,
    footnoteLink: {
      en: "say so in your enquiry",
      ar: "اذكر ذلك في استفسارك",
    } satisfies B,
    footnoteSuffix: {
      en: "and we will tell you what can be arranged.",
      ar: "وسنخبرك بما يمكن ترتيبه.",
    } satisfies B,
  },

  guides: {
    eyebrow: { en: "Travel inspiration", ar: "أفكار للرحلات" } satisfies B,
    title: {
      en: "Where people ask us to drive them",
      ar: "إلى أين يطلب منّا الناس القيادة",
    } satisfies B,
    lead: {
      en: "Notes on the routes beyond the obvious ones — what the drive involves and how long to allow.",
      ar: "ملاحظات عن المسارات غير المعتادة — ما الذي تتضمنه الرحلة وكم من الوقت ينبغي تخصيصه لها.",
    } satisfies B,
    comingSoon: { en: "Full guide coming soon", ar: "الدليل الكامل قريبًا" } satisfies B,
  },

  faq: {
    eyebrow: { en: "Questions", ar: "أسئلة" } satisfies B,
    title: {
      en: "What people ask before booking",
      ar: "ما يسأل عنه الناس قبل الحجز",
    } satisfies B,
    leadPrefix: {
      en: "Something not covered here?",
      ar: "لم تجد ما تبحث عنه؟",
    } satisfies B,
    leadLink: { en: "Ask in your enquiry", ar: "اسأل في استفسارك" } satisfies B,
    leadSuffix: {
      en: "and we will answer it with your quotation.",
      ar: "وسنجيبك عنه مع عرض السعر.",
    } satisfies B,
  },

  finalCta: {
    eyebrow: { en: "Ready when you are", ar: "جاهزون متى كنت جاهزًا" } satisfies B,
    title: {
      en: "Two million square kilometres. One vehicle that is only yours.",
      ar: "مليونا كيلومتر مربع. وسيارة واحدة لك وحدك.",
    } satisfies B,
    lead: {
      en: "Send the journey — where you start, where you finish and when. We reply with a price and the vehicle to match.",
      ar: "أرسل تفاصيل الرحلة — من أين تبدأ وأين تنتهي ومتى. ونرد بالسعر وبالمركبة المناسبة.",
    } satisfies B,
    primary: { en: "Request your quotation", ar: "اطلب عرض السعر" } satisfies B,
    secondary: {
      en: "Read the questions first",
      ar: "اقرأ الأسئلة الشائعة أولًا",
    } satisfies B,
    note: {
      en: "Enquiring is free and nothing is booked until you accept a quotation.",
      ar: "الاستفسار مجاني ولا يُحجز شيء حتى توافق على عرض السعر.",
    } satisfies B,
  },
} as const;
