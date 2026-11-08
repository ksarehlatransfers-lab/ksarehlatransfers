import type { Bilingual } from "@/lib/i18n/config";
import type { RouteKey } from "@/lib/i18n/routes";
import type { SiteImageKey } from "@/lib/site-images";
import type { ClusterFaq, ClusterCta, ClusterStat, RelatedLink } from "@/lib/content/riyadh/types";

/**
 * Jeddah airport transfers.
 *
 * ## Why this page is organised around the onward journey
 *
 * The Riyadh airport page is organised around **two directions** — arrivals
 * and departures, side by side — because at Riyadh the question is which way
 * you are travelling.
 *
 * At Jeddah the question is different. Almost nobody lands at King Abdulaziz
 * and stays at the airport's own city: they land and go to Makkah, or to
 * Madinah, or into Jeddah. **Where you are going changes everything else** —
 * the drive, whether a checkpoint is involved, whether the train is a better
 * answer. So the page opens with that choice and hangs the rest off it.
 *
 * ## The competitor position, stated honestly
 *
 * This intent is **not** unclaimed. The competitor has a substantial
 * nationwide airport page and a Jeddah-specific one, and they publish more
 * than we can: a named terminal, a named meeting point, free-waiting minutes,
 * named vehicle models and indicative fares. None of that is confirmed for
 * us, so this page does not try to match it.
 *
 * What it does instead is be right where being concrete is fragile:
 *
 * - **Rail.** A Haramain high-speed station sits at this airport. Their page
 *   does not mention rail at all. Ours does, and says when the train wins.
 * - **The Makkah access restriction.** Not on their pages, on a page selling
 *   Jeddah→Makkah transfers.
 * - **Terminals.** They name one, with a meeting point beside a named
 *   landmark. Published sources disagree about how many terminals here are in
 *   use and what they are called, and a named landmark can move. We answer
 *   from the flight instead, which cannot go stale.
 *
 * ## Sources and their limits
 *
 * **No operator source was readable.** `jed.sa`, `jeddahairports.com.sa` and
 * `matarat.sa` all failed at DNS; all four `kaia.sa` pages tried returned
 * HTTP 403. So nothing here is attributed to the airport or its operator —
 * the facts come from the English Wikipedia article and are labelled in
 * docs/research/jeddah/jeddah-sources-and-limitations.md.
 *
 * Deliberately absent: prices, free-waiting minutes, vehicle models, rail
 * schedules and fares, any terminal chart or numbered terminal, Hajj Terminal
 * operating dates, any named meeting point, any Hajj or Umrah operator claim.
 */
export type JeddahAirportContent = {
  routeKey: RouteKey;
  imageKey: SiteImageKey;
  seo: { title: Bilingual<string>; description: Bilingual<string> };
  crumbLabel: Bilingual<string>;
  hero: {
    eyebrow: Bilingual<string>;
    h1: Bilingual<string>;
    lead: Bilingual<string>;
  };
  /** The signature element: the choice everything else depends on. */
  onward: {
    heading: Bilingual<string>;
    lead: Bilingual<string>;
    options: {
      name: Bilingual<string>;
      detail: Bilingual<string>;
      meta: Bilingual<string>;
      caveat?: Bilingual<string>;
      routeKey?: RouteKey;
      /** Anchor text for `routeKey`; the page falls back to a generic label. */
      linkLabel?: Bilingual<string>;
      plannedNote?: Bilingual<string>;
    }[];
  };
  stats: ClusterStat[];
  statsChecked: Bilingual<string>;
  /** Both directions as one ruled comparison, not as twin panels. */
  directions: {
    heading: Bilingual<string>;
    lead: Bilingual<string>;
    columns: {
      title: Bilingual<string>;
      points: { title: Bilingual<string>; detail: Bilingual<string> }[];
    }[];
  };
  flightNumber: {
    eyebrow: Bilingual<string>;
    heading: Bilingual<string>;
    paragraphs: Bilingual<string>[];
  };
  terminal: { heading: Bilingual<string>; paragraphs: Bilingual<string>[] };
  rail: { heading: Bilingual<string>; paragraphs: Bilingual<string>[] };
  hotels: { heading: Bilingual<string>; paragraphs: Bilingual<string>[] };
  quotation: {
    heading: Bilingual<string>;
    lead: Bilingual<string>;
    items: Bilingual<string>[];
  };
  faqHeading: Bilingual<string>;
  faqs: ClusterFaq[];
  related: RelatedLink[];
  cta: ClusterCta;
};

export const jeddahAirport: JeddahAirportContent = {
  routeKey: "jeddahAirport",
  imageKey: "svc-airport",

  seo: {
    // 56 characters.
    title: {
      en: "Jeddah Airport Transfers | King Abdulaziz | Get a Quote",
      ar: "نقل خاص من مطار جدة | الملك عبدالعزيز | عرض سعر",
    },
    description: {
      en: "Private transfers at King Abdulaziz International Airport — met inside the terminal, the terminal confirmed from your flight, and honest guidance on Makkah, Madinah and the train.",
      ar: "نقل خاص في مطار الملك عبدالعزيز الدولي — استقبال داخل الصالة، والصالة تُحدَّد من رحلتك، وإرشاد صادق عن مكة والمدينة والقطار.",
    },
  },

  crumbLabel: { en: "Airport transfers", ar: "النقل من المطار" },

  hero: {
    eyebrow: {
      en: "Jeddah · King Abdulaziz International",
      ar: "جدة · الملك عبدالعزيز الدولي",
    },
    h1: {
      en: "Jeddah airport transfers",
      ar: "نقل خاص من مطار جدة",
    },
    lead: {
      en: "Hardly anyone lands here and stays. Where you are going next decides the drive, the timing and whether a car is even the right answer — so that is the first thing this page asks.",
      ar: "قليل من يهبط هنا ويبقى. فوجهتك التالية تحدد الرحلة والتوقيت وما إن كانت السيارة هي الجواب الصحيح أصلًا — ولهذا هو أول ما تسأله هذه الصفحة.",
    },
  },

  onward: {
    heading: { en: "Where are you going from the airport?", ar: "إلى أين تتجه من المطار؟" },
    lead: {
      en: "Three answers cover almost everyone who lands at King Abdulaziz, and each one changes what you need to know.",
      ar: "ثلاثة أجوبة تغطي تقريبًا كل من يهبط في مطار الملك عبدالعزيز، وكل منها يغيّر ما تحتاج معرفته.",
    },
    options: [
      {
        name: { en: "To Makkah", ar: "إلى مكة المكرمة" },
        meta: { en: "80–100 km · 1–1.5 hrs", ar: "80–100 كم · 1–1.5 ساعة" },
        detail: {
          en: "The journey most arrivals here are making, usually to a Haram-area hotel. The hotel name is enough to quote on; whether the car reaches its entrance or the nearest permitted point depends on the hotel, and is confirmed when the journey is arranged.",
          ar: "الرحلة التي يقوم بها معظم القادمين إلى هنا، وغالبًا إلى فندق في منطقة الحرم. واسم الفندق يكفي للتسعير، أما وصول السيارة إلى مدخله أو إلى أقرب نقطة مسموح بها فيعتمد على الفندق ويُؤكَّد عند ترتيب الرحلة.",
        },
        caveat: {
          en: "Entry to Makkah is restricted to Muslims under Saudi law and enforced at checkpoints on the road. We will not accept or carry a passenger who is not legally permitted to enter Makkah on their travel date.",
          ar: "دخول مكة المكرمة مقصور على المسلمين بموجب النظام السعودي ويُطبَّق عند نقاط التفتيش على الطريق. ولا نقبل ولا ننقل أي راكب لا يحق له نظامًا دخول مكة في تاريخ رحلته.",
        },
        routeKey: "jeddahToMakkah",
        linkLabel: { en: "Jeddah airport to Makkah, in full", ar: "من مطار جدة إلى مكة بالتفصيل" },
      },
      {
        name: { en: "To Madinah", ar: "إلى المدينة المنورة" },
        meta: { en: "405–450 km · ~3.75–5 hrs", ar: "405–450 كم · ~3.75–5 ساعات" },
        detail: {
          en: "A long drive north, and often the second leg of a pilgrimage trip. Worth planning rather than deciding at the carousel: it is most of a day once you have already flown.",
          ar: "رحلة طويلة شمالًا، وغالبًا المرحلة الثانية في رحلة حج أو عمرة. وتستحق التخطيط لا القرار عند سير الأمتعة: فهي معظم يوم بعد أن سافرت جوًّا أصلًا.",
        },
        caveat: {
          en: "The Haramain train reaches Madinah from a station at this airport, and for one or two people travelling light it is usually the better answer. We will tell you so.",
          ar: "وقطار الحرمين يصل إلى المدينة من محطة في هذا المطار، ولشخص أو شخصين بأمتعة خفيفة يكون عادةً الجواب الأفضل. وسنخبرك بذلك.",
        },
      },
      {
        name: { en: "Into Jeddah", ar: "إلى داخل جدة" },
        meta: { en: "~19 km to the centre", ar: "~19 كم إلى المركز" },
        detail: {
          en: "A short run by the standards of this site — the airport sits around 19 km north of the city. A hotel on the corniche, a business address, or Al-Balad for the old town.",
          ar: "مشوار قصير بمقاييس هذا الموقع — فالمطار يقع على نحو 19 كم شمال المدينة. فندق على الكورنيش أو عنوان عمل أو البلد للمدينة التاريخية.",
        },
        routeKey: "jeddah",
      },
    ],
  },

  stats: [
    {
      label: { en: "To the city centre", ar: "إلى وسط المدينة" },
      value: { en: "~19 km", ar: "~19 كم" },
      note: {
        en: "Published as about 19 km north of Jeddah. Notably closer in than Riyadh's airport, which is around 35 km out.",
        ar: "يُذكر بنحو 19 كم شمال جدة. وهو أقرب بوضوح من مطار الرياض الذي يبعد نحو 35 كم.",
      },
    },
    {
      label: { en: "Passenger terminals", ar: "صالات المسافرين" },
      value: { en: "Contested", ar: "متعارض عليها" },
      note: {
        en: "Sources disagree on how many are in use and what they are called — so we publish no chart and confirm yours from your flight. See below.",
        ar: "تتعارض المصادر في عددها العامل وفي أسمائها — فلا ننشر جدولًا ونؤكد صالتك من رحلتك. انظر أدناه.",
      },
    },
    {
      label: { en: "Haramain station", ar: "محطة قطار الحرمين" },
      value: { en: "At the airport", ar: "في المطار" },
      note: {
        en: "A high-speed station serving Makkah and Madinah is linked to the terminal. The competitor's airport page does not mention it at all.",
        ar: "محطة قطار سريع تخدم مكة والمدينة متصلة بالصالة. وصفحة المنافس للمطار لا تذكرها إطلاقًا.",
      },
    },
    {
      label: { en: "Busiest arrivals", ar: "أكثر أوقات الوصول" },
      value: { en: "Pilgrimage seasons", ar: "مواسم الحج والعمرة" },
      note: {
        en: "A dedicated Hajj terminal operates in those seasons. We publish no dates for it, because no source we could read states them reliably.",
        ar: "تعمل صالة مخصصة للحج في تلك المواسم. ولا ننشر مواعيدها، لأن أي مصدر أمكننا قراءته لا يذكرها على وجه موثوق.",
      },
    },
  ],

  statsChecked: {
    en: "Airport figures last checked November 2026. No operator source was reachable; see the terminal section.",
    ar: "آخر تحقق من أرقام المطار: نوفمبر 2026. ولم يكن أي مصدر للمشغّل متاحًا؛ انظر قسم الصالات.",
  },

  directions: {
    heading: { en: "Arriving, and leaving", ar: "الوصول والمغادرة" },
    lead: {
      en: "One page for both, because it is one journey read two ways. What actually differs is which end you are anxious about.",
      ar: "صفحة واحدة لكليهما، لأنها رحلة واحدة تُقرأ باتجاهين. وما يختلف فعلًا هو أي الطرفين يقلقك.",
    },
    columns: [
      {
        title: { en: "On arrival", ar: "عند الوصول" },
        points: [
          {
            title: { en: "Send the flight number", ar: "أرسل رقم الرحلة" },
            detail: {
              en: "Not just a landing time. It tells us the terminal and lets the pickup follow the aircraft.",
              ar: "لا وقت الهبوط فقط. فهو يخبرنا بالصالة ويتيح للاستقبال أن يتبع الطائرة.",
            },
          },
          {
            title: { en: "You are met inside the terminal", ar: "يُستقبل داخل الصالة" },
            detail: {
              en: "Inside the building, not at a kerb you have to find. The arrangement is confirmed to you in writing before the day.",
              ar: "داخل المبنى لا على رصيف تبحث عنه. ويُؤكَّد الترتيب لك مكتوبًا قبل اليوم.",
            },
          },
          {
            title: { en: "A delay moves the pickup", ar: "التأخير يحرّك الموعد" },
            detail: {
              en: "Because the pickup is set from the flight. You do not need to call ahead or rebook.",
              ar: "لأن الموعد محدد من الرحلة. ولا تحتاج إلى الاتصال مسبقًا أو إعادة الحجز.",
            },
          },
          {
            title: { en: "Say if you are on a pilgrimage flight", ar: "اذكر إن كانت رحلتك للحج أو العمرة" },
            detail: {
              en: "It can change which building you arrive at, and it changes how long the hall takes to clear.",
              ar: "فقد يغيّر ذلك المبنى الذي تصل إليه، ويغيّر الوقت اللازم لإنهاء إجراءات الصالة.",
            },
          },
        ],
      },
      {
        title: { en: "On departure", ar: "عند المغادرة" },
        points: [
          {
            title: { en: "We work back from your flight", ar: "نحسب تراجعيًا من رحلتك" },
            detail: {
              en: "Give us the departure time and the flight number and we set the pickup from them.",
              ar: "زوّدنا بوقت الإقلاع ورقم الرحلة ونحدد الاستقبال منهما.",
            },
          },
          {
            title: { en: "The terminal comes from the flight too", ar: "والصالة تُؤخذ من الرحلة أيضًا" },
            detail: {
              en: "Dropping at the wrong building costs a shuttle ride and a lot of nerves at an airport this size.",
              ar: "فالتوصيل إلى المبنى الخطأ يكلفك نقلًا داخليًّا وقلقًا كثيرًا في مطار بهذا الحجم.",
            },
          },
          {
            title: { en: "Check-in timing is your airline's", ar: "توقيت الإجراءات من شأن شركتك" },
            detail: {
              en: "No airport source we could read states a lead time, and we will not invent one. Ask your airline, tell us the time you want to be there, and we build to it.",
              ar: "لا يذكر أي مصدر مطار أمكننا قراءته وقتًا مسبقًا، ولن نختلقه. اسأل شركة طيرانك، وأخبرنا بالوقت الذي تريد أن تكون فيه هناك، ونبني عليه.",
            },
          },
          {
            title: { en: "Coming from Makkah or Madinah", ar: "القدوم من مكة أو المدينة" },
            detail: {
              en: "That is the long leg, not the airport run. Book both together and the departure is already timed from your flight.",
              ar: "تلك هي المرحلة الطويلة لا مشوار المطار. احجزهما معًا ويكون موعد المغادرة محددًا سلفًا من رحلتك.",
            },
          },
        ],
      },
    ],
  },

  flightNumber: {
    eyebrow: { en: "Why we ask for it", ar: "لماذا نطلبه" },
    heading: {
      en: "The flight number is the whole booking",
      ar: "رقم الرحلة هو الحجز كله",
    },
    paragraphs: [
      {
        en: "It identifies the terminal and it lets the pickup follow the aircraft instead of the clock. Those are the two things that go wrong with airport transfers, and one piece of information settles both.",
        ar: "فهو يحدد الصالة ويتيح للاستقبال أن يتبع الطائرة بدل الساعة. وهذان هما الأمران اللذان يفسدان رحلات المطار، ومعلومة واحدة تحسمهما.",
      },
      {
        en: "If you do not have the number yet, book anyway and send it when you do. What we will not do is take a landing time, assume a building, and leave you to discover the result in an arrivals hall.",
        ar: "وإن لم يكن الرقم بحوزتك بعد فاحجز على أي حال وأرسله حين يتوفر. أما ما لن نفعله فهو أن نأخذ وقت هبوط ونفترض مبنى ونتركك تكتشف النتيجة في صالة الوصول.",
      },
    ],
  },

  terminal: {
    heading: { en: "Which terminal — and why we will not print a chart", ar: "أي صالة — ولماذا لا نطبع جدولًا" },
    paragraphs: [
      {
        en: "We confirm your terminal from your flight number and put it in writing before the day. You can check it yourself too: your airline's booking confirmation, its app, and its flight-status page on the day are the live sources.",
        ar: "نؤكد صالتك من رقم رحلتك ونرسلها مكتوبة قبل اليوم. ويمكنك التحقق بنفسك أيضًا: فتأكيد الحجز من شركة طيرانك وتطبيقها وصفحة حالة الرحلة في اليوم نفسه هي المصادر الحيّة.",
      },
      {
        en: "What we will not do is publish a terminal chart, and the reason is specific rather than squeamish. Published references to this airport disagree with each other: one describes three operational passenger terminals including the Hajj terminal, another records a terminal being closed with its operations moved, and a third describes one of them as mainly serving non-Saudi airlines. We could not read the airport's own site to settle it — every official route we tried refused the request.",
        ar: "أما ما لن نفعله فهو نشر جدول صالات، والسبب محدد لا مجرد تحرّج. فالمراجع المنشورة عن هذا المطار تتعارض فيما بينها: إحداها تذكر ثلاث صالات مسافرين عاملة منها صالة الحج، وأخرى تسجّل إغلاق صالة ونقل عملياتها، وثالثة تصف إحداها بأنها تخدم بصورة رئيسية شركات طيران غير سعودية. ولم نتمكن من قراءة موقع المطار نفسه للحسم — فكل مسار رسمي جرّبناه رفض الطلب.",
      },
      {
        en: "You will find transfer sites that name a terminal and even a landmark to stand beside. That is more specific than we are willing to be from sources that contradict each other, and a landmark can be moved or renamed while a printed page cannot. Your flight is the one source that is never out of date.",
        ar: "وستجد مواقع نقل تذكر صالة بل ومعلمًا تقف عنده. وهذا أكثر تحديدًا مما نرضى به من مصادر تتعارض، والمعلم قد يُنقل أو يُعاد تسميته بينما الصفحة المطبوعة لا تتغير. ورحلتك هي المصدر الوحيد الذي لا يتقادم أبدًا.",
      },
    ],
  },

  rail: {
    heading: { en: "There is a high-speed railway station here", ar: "هنا محطة قطار سريع" },
    paragraphs: [
      {
        en: "A Haramain high-speed railway station is linked to the terminal, and the line serves both Makkah and Madinah. That is unusual — most airports do not put a station to the holy cities inside the building — and it is worth knowing before you book a car.",
        ar: "محطة لقطار الحرمين السريع متصلة بالصالة، والخط يخدم مكة والمدينة المنورة. وهذا غير معتاد — فمعظم المطارات لا تضع محطة إلى المدينتين المقدستين داخل المبنى — ويستحق المعرفة قبل حجز سيارة.",
      },
      {
        en: "For one or two people travelling light to a central address, the train is often the better answer and we will say so rather than sell you a car. The car wins for families, for real luggage, for a hotel away from a station, for a late arrival, and for anyone who would rather not change mode and platform after a long flight.",
        ar: "فلشخص أو شخصين بأمتعة خفيفة إلى عنوان مركزي يكون القطار غالبًا الجواب الأفضل، وسنقول ذلك بدل أن نبيعك سيارة. أما السيارة فتتفوق للعائلات وللأمتعة الفعلية ولفندق بعيد عن محطة وللوصول المتأخر، ولكل من يفضّل ألا يغيّر وسيلته ورصيفه بعد رحلة طويلة.",
      },
      {
        en: "We arrange the road journey and sell no rail tickets, so there is nothing in this for us either way. Schedules and fares are the operator's to publish and they change — check them directly. We can also do the short leg to or from the station itself, in either direction.",
        ar: "ونحن نرتّب الرحلة البرية ولا نبيع تذاكر قطار، فلا مصلحة لنا في أي من الخيارين. والمواعيد والأسعار من شأن المشغّل أن ينشرها وهي تتغير — تحقق منها مباشرة. ويمكننا أيضًا تنفيذ المرحلة القصيرة إلى المحطة نفسها أو منها، في كلا الاتجاهين.",
      },
    ],
  },

  hotels: {
    heading: { en: "Hotel connections", ar: "ربط الفنادق" },
    paragraphs: [
      {
        en: "Almost every journey from this airport ends at a hotel — in Makkah most often, in Jeddah or Madinah otherwise. The hotel name is enough for us to quote on; you do not need to find a street address.",
        ar: "تكاد كل رحلة من هذا المطار تنتهي عند فندق — في مكة غالبًا، وفي جدة أو المدينة فيما عدا ذلك. واسم الفندق يكفينا للتسعير؛ ولا تحتاج إلى البحث عن عنوان شارع.",
      },
      {
        en: "For a departure, give us the hotel and the flight and we will tell you the pickup time rather than asking you to work it out. For a Jeddah hotel, name the entrance as well if you know it — the larger properties have more than one, and the car being at one door while you are at another is the commonest way a hotel pickup goes wrong.",
        ar: "وللمغادرة، زوّدنا بالفندق وبيانات الرحلة ونخبرك بموعد الاستقبال بدل أن نطلب منك حسابه. وللفندق في جدة، اذكر المدخل أيضًا إن كنت تعرفه — فالمنشآت الكبيرة لها أكثر من مدخل، ووجود السيارة عند باب وأنت عند آخر هو أشيع ما يفسد الاستقبال من فندق.",
      },
    ],
  },

  quotation: {
    heading: { en: "What your quotation covers", ar: "ما يشمله عرض السعر" },
    lead: {
      en: "We describe how the price is arrived at rather than publishing a list of inclusions nobody has confirmed with our driver partners. You will find competitors who publish waiting minutes and vehicle models; we would rather be right than specific.",
      ar: "نشرح كيف يُحتسب السعر بدل نشر قائمة بما يشمله لم يتحقق منها أحد مع شركائنا من السائقين. وستجد منافسين ينشرون دقائق انتظار وطُرز مركبات؛ ونحن نفضّل أن نكون على صواب على أن نكون محددين.",
    },
    items: [
      {
        en: "The terminal and the meeting arrangement, confirmed in writing before the day.",
        ar: "الصالة وترتيب اللقاء، مؤكدين مكتوبين قبل اليوم.",
      },
      {
        en: "The pickup time, derived from your flight rather than chosen by you.",
        ar: "موعد الاستقبال، مستخرجًا من رحلتك لا مختارًا منك.",
      },
      {
        en: "The vehicle category, matched to the passengers and the luggage you describe.",
        ar: "فئة المركبة، مطابقة للركاب والأمتعة التي تصفها.",
      },
      {
        en: "The total price, in writing, before anything is reserved — and nothing added afterwards.",
        ar: "السعر الإجمالي، مكتوبًا، قبل حجز أي شيء — ولا شيء يُضاف بعد ذلك.",
      },
      {
        en: "What it does not state: a waiting-time allowance in minutes, a named vehicle model, a named meeting landmark, or a rail schedule. The first three are confirmed for your booking; the last belongs to the operator.",
        ar: "وما لا يذكره: مدة انتظار بالدقائق، أو طراز مركبة بالاسم، أو معلم لقاء بالاسم، أو جدول قطارات. فالثلاثة الأولى تُؤكَّد لحجزك، والأخير من شأن المشغّل.",
      },
      {
        en: "We arrange road transport only — not flights, not rail tickets, not hotels, and not Hajj or Umrah visas, permits or packages.",
        ar: "ونحن نرتّب النقل البري فقط — لا تذاكر طيران ولا قطارات ولا فنادق ولا تأشيرات حج أو عمرة ولا تصاريح ولا برامج.",
      },
    ],
  },

  faqHeading: {
    en: "Jeddah airport transfers: common questions",
    ar: "النقل من مطار جدة: أسئلة شائعة",
  },

  faqs: [
    {
      question: {
        en: "How will I find you when I land?",
        ar: "كيف أجدكم عند هبوطي؟",
      },
      answer: {
        en: "You are met inside the terminal, and the terminal and meeting arrangement are confirmed to you in writing before the day rather than in a message on the morning. That advance confirmation is the part worth having: at an airport this size, “meet you at arrivals” is not specific enough to be useful.",
        ar: "يُستقبل داخل الصالة، وتُؤكَّد لك الصالة وترتيب اللقاء مكتوبين قبل اليوم لا برسالة في الصباح. وهذا التأكيد المسبق هو ما يستحق الحصول عليه: ففي مطار بهذا الحجم لا تكون عبارة «نلقاك في صالة الوصول» محددة بما يكفي لتكون مفيدة.",
      },
    },
    {
      question: {
        en: "Which terminal does my flight use?",
        ar: "أي صالة تستخدمها رحلتي؟",
      },
      answer: {
        en: "We confirm it from your flight number, and your airline's confirmation or app will say the same. We publish no terminal chart on purpose: published references to this airport contradict each other on how many terminals are in use and what they are called, and we could not read the airport's own site to settle it — every official route we tried refused the request. Your flight is the one source that cannot be out of date.",
        ar: "نؤكدها من رقم رحلتك، وتأكيد شركة طيرانك أو تطبيقها سيذكر الشيء نفسه. ولا ننشر جدول صالات عن قصد: فالمراجع المنشورة عن هذا المطار تتعارض في عدد الصالات العاملة وفي أسمائها، ولم نتمكن من قراءة موقع المطار نفسه للحسم — فكل مسار رسمي جرّبناه رفض الطلب. ورحلتك هي المصدر الوحيد الذي لا يتقادم.",
      },
    },
    {
      question: {
        en: "Should I take the train to Makkah or Madinah instead?",
        ar: "هل آخذ القطار إلى مكة أو المدينة بدلًا من ذلك؟",
      },
      answer: {
        en: "Quite possibly, and we would rather say so than sell you a car you do not need. A Haramain high-speed station is linked to this terminal and the line serves both holy cities. For one or two people travelling light to a central address the train is usually the better answer. The car wins for families, for real luggage, for an address away from a station, for a late arrival, and for anyone who would rather not change platform after a long flight. We sell no rail tickets, so check schedules and fares with the operator.",
        ar: "من المحتمل جدًّا، ونفضّل قول ذلك على بيعك سيارة لا تحتاجها. فمحطة قطار الحرمين السريع متصلة بهذه الصالة والخط يخدم المدينتين المقدستين. ولشخص أو شخصين بأمتعة خفيفة إلى عنوان مركزي يكون القطار عادةً الجواب الأفضل. أما السيارة فتتفوق للعائلات وللأمتعة الفعلية ولعنوان بعيد عن محطة وللوصول المتأخر، ولكل من يفضّل ألا يغيّر رصيفه بعد رحلة طويلة. ونحن لا نبيع تذاكر قطار، فتحقق من المواعيد والأسعار لدى المشغّل.",
      },
    },
    {
      question: {
        en: "Can you take me straight from the airport to Makkah?",
        ar: "هل يمكنكم نقلي من المطار مباشرة إلى مكة المكرمة؟",
      },
      answer: {
        en: "Yes — it is the most common journey from this airport, closer to 100 km from here and an hour to an hour and a half to a Haram-area hotel. One thing to settle first: entry to Makkah is restricted to Muslims under Saudi law and enforced at checkpoints on the road, and further restrictions are announced around the Hajj season. We will not accept or carry a passenger who is not legally permitted to enter on their travel date. Our Jeddah to Makkah page covers the journey in full, including hotel drop-off near the Haram. We arrange the road transport only and are not an official Hajj or Umrah operator.",
        ar: "نعم — وهي أكثر رحلة شيوعًا من هذا المطار، أقرب إلى 100 كم من هنا وساعة إلى ساعة ونصف إلى فندق في منطقة الحرم. وأمر يجب حسمه أولًا: دخول مكة المكرمة مقصور على المسلمين بموجب النظام السعودي ويُطبَّق عند نقاط التفتيش على الطريق، وتُعلَن حول موسم الحج قيود إضافية. ولا نقبل ولا ننقل أي راكب لا يحق له نظامًا الدخول في تاريخ رحلته. وصفحة التوصيل من جدة إلى مكة لدينا تغطي الرحلة كاملة، ومنها مكان النزول عند الفنادق قرب الحرم. ونحن نرتّب النقل البري فقط ولسنا مشغّلاً رسميًا للحج أو العمرة.",
      },
    },
    {
      question: {
        en: "How early should I leave for my flight home?",
        ar: "متى ينبغي أن أنطلق لرحلة عودتي؟",
      },
      answer: {
        en: "Ask your airline how early you need to be at the desk, then tell us that time and we build the journey backwards from it. We will not invent a check-in rule: no airport source we could read states one, and the airline's requirement is the one that counts. What we do handle is the drive — and if you are coming from Makkah or Madinah rather than Jeddah, that is the long leg and it drives the whole timing.",
        ar: "اسأل شركة طيرانك عن مدى التبكير اللازم للوصول إلى مكتب الإجراءات، ثم أخبرنا بذلك الوقت ونبني الرحلة تراجعيًا منه. ولن نختلق قاعدة لإجراءات السفر: فلم يذكرها أي مصدر مطار أمكننا الوصول إليه، ومتطلب شركة الطيران هو المعتبر. أما ما نتولاه فهو الطريق — وإن كنت قادمًا من مكة أو المدينة لا من جدة فتلك هي المرحلة الطويلة وهي التي تحدد التوقيت كله.",
      },
    },
    {
      question: {
        en: "Do you offer free waiting time if my flight is delayed?",
        ar: "هل توفرون وقت انتظار مجانيًا إذا تأخرت رحلتي؟",
      },
      answer: {
        en: "A delay does not leave you without a vehicle, because the pickup is set from your flight number rather than a clock time — that is the point of asking for it. What we will not do is publish an allowance in minutes, because our waiting arrangements have not been confirmed with our driver partners and a number we cannot stand behind is worse than none. It is stated in your quotation for your booking. You will find competitors who publish a figure; we would rather be right than specific.",
        ar: "التأخير لا يتركك بلا سيارة، لأن موعد الاستقبال محدد من رقم رحلتك لا من توقيت الساعة — وهذا هو الغرض من طلبه. أما ما لن نفعله فهو نشر مدة بالدقائق، لأن ترتيبات الانتظار لدينا لم تُؤكَّد مع شركائنا من السائقين، ورقم لا نستطيع الدفاع عنه أسوأ من لا رقم. ويُذكر ذلك في عرض سعرك لحجزك. وستجد منافسين ينشرون رقمًا؛ ونحن نفضّل أن نكون على صواب على أن نكون محددين.",
      },
    },
    {
      question: {
        en: "I am arriving for Umrah — is there anything I should sort out before landing?",
        ar: "أنا قادم للعمرة — هل هناك ما ينبغي ترتيبه قبل الهبوط؟",
      },
      answer: {
        en: "From our side, only the flight number, the hotel and the number of passengers and bags. On the pilgrimage side there are questions about when to enter Ihram that depend on your routing, and those are for the Ministry of Hajj and Umrah or your group organiser to answer, not for a transport company. We arrange road transport only — no visas, no permits, no packages — and we would rather point you at the right authority than guess.",
        ar: "من جانبنا، رقم الرحلة والفندق وعدد الركاب والحقائب فقط. وأما في جانب العمرة فهناك مسائل عن وقت الإحرام تعتمد على مسار رحلتك، وتلك من شأن وزارة الحج والعمرة أو منظّم حملتك لا من شأن شركة نقل. ونحن نرتّب النقل البري فقط — لا تأشيرات ولا تصاريح ولا برامج — ونفضّل أن ندلّك على الجهة الصحيحة على أن نخمّن.",
      },
    },
    {
      question: {
        en: "Can I book the return at the same time?",
        ar: "هل يمكنني حجز العودة في الوقت نفسه؟",
      },
      answer: {
        en: "Yes, and it is simpler. Both legs are quoted together and the departure pickup is set from your return flight details at the same time — arranged while you are planning calmly rather than at the end of a trip. If the return starts in Makkah or Madinah, say so: that changes the timing far more than the airport end does.",
        ar: "نعم، وهو أبسط. فتُسعَّر المرحلتان معًا ويُحدَّد موعد استقبال المغادرة من بيانات رحلة عودتك في الوقت نفسه — فيُرتَّب وأنت تخطط بهدوء لا في نهاية السفر. وإن كانت العودة تبدأ من مكة أو المدينة فاذكر ذلك: فهو يغيّر التوقيت أكثر بكثير من جانب المطار.",
      },
    },
  ],

  related: [
    {
      routeKey: "jeddahToMakkah",
      label: { en: "Jeddah to Makkah", ar: "من جدة إلى مكة" },
      note: {
        en: "The journey most arrivals make: the entry rules, the road, and hotel drop-off near the Haram.",
        ar: "الرحلة التي يقوم بها معظم القادمين: شروط الدخول والطريق ومكان النزول عند الفنادق قرب الحرم.",
      },
    },
    {
      routeKey: "jeddah",
      label: { en: "All Jeddah transfers", ar: "جميع خدمات النقل في جدة" },
      note: {
        en: "The hub: where to go from Jeddah, with distances, caveats and the Makkah access notice.",
        ar: "الصفحة الرئيسية: إلى أين تتجه من جدة، ومعها المسافات والتنبيهات وتنبيه دخول مكة.",
      },
    },
    {
      routeKey: "riyadhToJeddah",
      label: { en: "Riyadh to Jeddah", ar: "الرياض إلى جدة" },
      note: {
        en: "The 950 km road from the capital, if you are joining or leaving a longer journey.",
        ar: "الطريق 950 كم من العاصمة، إن كنت تنضم إلى رحلة أطول أو تتركها.",
      },
    },
    {
      routeKey: "riyadhAirport",
      label: { en: "Riyadh airport transfers", ar: "النقل من مطار الرياض" },
      note: {
        en: "The same service at King Khalid, where the terminal question is just as contested.",
        ar: "الخدمة نفسها في مطار الملك خالد، حيث سؤال الصالات متعارض عليه بالقدر نفسه.",
      },
    },
  ],

  cta: {
    eyebrow: { en: "Send the flight", ar: "أرسل بيانات الرحلة" },
    heading: {
      en: "Tell us the flight and where you are going",
      ar: "أخبرنا بالرحلة وإلى أين تتجه",
    },
    body: {
      en: "The flight number, the date and the destination — a Makkah hotel, a Madinah address, or somewhere in Jeddah. We reply with a written price, the vehicle and the terminal confirmed.",
      ar: "رقم الرحلة والتاريخ والوجهة — فندق في مكة أو عنوان في المدينة أو مكان في جدة. ونرد بسعر مكتوب والمركبة والصالة مؤكدة.",
    },
    button: { en: "Get an airport quote", ar: "اطلب سعر النقل من المطار" },
  },
};
