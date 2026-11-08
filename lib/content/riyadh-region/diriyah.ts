import type { Bilingual } from "@/lib/i18n/config";
import type { RouteKey } from "@/lib/i18n/routes";
import type { SiteImageKey } from "@/lib/site-images";
import type { ClusterCta, ClusterFaq, RelatedLink } from "@/lib/content/riyadh/types";

/**
 * Diriyah — Riyadh Region destination hub.
 *
 * Diriyah is ~20 km from central Riyadh on Wadi Hanifa, so a journey here is
 * a city-edge transfer, not an intercity route. What visitors actually need
 * is **access planning**: tickets come from the official operator, Diriyah
 * has more than one place to be dropped, and the return has to be planned.
 *
 * Facts (local research folder, riyadh-region/02):
 * - Governorate of Riyadh Province, north-west of the capital, on the banks of
 *   Wadi Hanifa, no more than ~20 km from central Riyadh — Saudipedia.
 * - At-Turaif District: UNESCO World Heritage Site (2010), first capital of
 *   the Saudi dynasty — UNESCO.
 * - Named attractions: At-Turaif, Bujairi Terrace, Wadi Hanifah, Salwa Palace
 *   — Visit Saudi; official visit booking and on-site Bujairi parking —
 *   diriyah.sa.
 * - RUH → Diriyah ~28–39 km by road (estimates; published as a range).
 *
 * Deliberately absent: opening hours and ticket prices (sources conflict and
 * change — readers are sent to the official site), prices, waiting
 * allowances, guaranteed drop-off points, partner claims.
 */

type B = Bilingual<string>;

export type DiriyahContent = {
  routeKey: RouteKey;
  imageKey: SiteImageKey;
  seo: { title: B; description: B };
  crumbLabel: B;
  hero: { eyebrow: B; h1: B; lead: B };
  facts: { label: B; value: B }[];
  places: { heading: B; lead: B; items: { name: B; detail: B; tell: B }[] };
  plan: { heading: B; lead: B; steps: { label: B; title: B; detail: B }[] };
  tickets: { heading: B; body: B; linkLabel: B; url: string; note: B };
  airport: { heading: B; paragraphs: B[] };
  quotation: { heading: B; items: B[] };
  faqHeading: B;
  faqs: ClusterFaq[];
  related: RelatedLink[];
  cta: ClusterCta;
};

export const diriyah: DiriyahContent = {
  routeKey: "diriyah",
  imageKey: "dest-diriyah",

  seo: {
    title: {
      en: "Diriyah Private Transfers | At-Turaif and Bujairi Terrace",
      ar: "توصيل إلى الدرعية | حي الطريف والبجيري من الرياض والمطار",
    },
    description: {
      en: "Private car to Diriyah from anywhere in Riyadh or King Khalid airport — At-Turaif, Bujairi Terrace or Wadi Hanifah, and the return planned. Get a written quote.",
      ar: "سيارة خاصة إلى الدرعية من أي مكان في الرياض أو من مطار الملك خالد، إلى حي الطريف أو مطل البجيري أو وادي حنيفة، مع ترتيب رحلة العودة. اطلب عرض سعر مكتوبًا.",
    },
  },

  crumbLabel: { en: "Diriyah", ar: "الدرعية" },

  hero: {
    eyebrow: { en: "Riyadh Region · Diriyah", ar: "منطقة الرياض · الدرعية" },
    h1: {
      en: "Private transfers to Diriyah",
      ar: "التوصيل إلى الدرعية بسيارة خاصة",
    },
    lead: {
      en: "Diriyah sits on Wadi Hanifa at Riyadh's north-western edge, about 20 km from the centre — home to At-Turaif, the UNESCO-listed first capital of the Saudi state. Getting there is short; planning where you arrive and how you leave is the part that matters.",
      ar: "تقع الدرعية على ضفاف وادي حنيفة في الطرف الشمالي الغربي من الرياض، على بعد نحو 20 كم من وسطها، وفيها حي الطريف المسجّل في قائمة التراث العالمي لليونسكو، العاصمة الأولى للدولة السعودية. والطريق إليها قصير، والمهم هو تخطيط مكان الوصول وطريقة المغادرة.",
    },
  },

  facts: [
    { label: { en: "From central Riyadh", ar: "من وسط الرياض" }, value: { en: "~20 km", ar: "~20 كم" } },
    { label: { en: "From King Khalid airport", ar: "من مطار الملك خالد" }, value: { en: "~28–39 km", ar: "~28–39 كم" } },
    { label: { en: "UNESCO World Heritage", ar: "تراث عالمي لليونسكو" }, value: { en: "Since 2010", ar: "منذ 2010" } },
  ],

  places: {
    heading: {
      en: "Which part of Diriyah are you going to?",
      ar: "إلى أي جزء من الدرعية تتجه؟",
    },
    lead: {
      en: "“Diriyah” covers more than one destination. Telling us which one is the single most useful detail for an arrival that works.",
      ar: "تشمل «الدرعية» أكثر من وجهة، وإخبارنا بوجهتك تحديدًا هو أهم تفصيل ليكون الوصول سلسًا.",
    },
    items: [
      {
        name: { en: "At-Turaif District", ar: "حي الطريف" },
        detail: {
          en: "The mudbrick seat of the first Saudi state and a UNESCO World Heritage Site since 2010, including Salwa Palace. Visits are booked through the official operator.",
          ar: "مقر الدولة السعودية الأولى المبني من الطين، ومسجّل في قائمة التراث العالمي لليونسكو منذ 2010، ومن معالمه قصر سلوى. وتُحجز الزيارة عبر المشغّل الرسمي.",
        },
        tell: {
          en: "Tell us your visit time, so arrival lines up with it.",
          ar: "أخبرنا بموعد زيارتك ليتوافق الوصول معه.",
        },
      },
      {
        name: { en: "Bujairi Terrace", ar: "مطل البجيري" },
        detail: {
          en: "The dining destination overlooking Wadi Hanifah, beside At-Turaif. A table booking gives the arrival a fixed time to work to.",
          ar: "وجهة المطاعم المطلة على وادي حنيفة بجوار حي الطريف، وحجز الطاولة يمنح الوصول موعدًا ثابتًا نعمل عليه.",
        },
        tell: {
          en: "Tell us your reservation time and when you expect to leave.",
          ar: "أخبرنا بموعد حجزك ومتى تتوقع المغادرة.",
        },
      },
      {
        name: { en: "Wadi Hanifah", ar: "وادي حنيفة" },
        detail: {
          en: "The valley that runs through Diriyah, for walks and photographs rather than a single address.",
          ar: "الوادي الذي يمر بالدرعية، للمشي والتصوير لا لعنوان واحد محدد.",
        },
        tell: {
          en: "Tell us where you want to start and where to meet you afterwards.",
          ar: "أخبرنا من أين تريد البدء وأين نلتقيك بعد ذلك.",
        },
      },
    ],
  },

  plan: {
    heading: { en: "An access plan in three moments", ar: "خطة الوصول في ثلاث لحظات" },
    lead: {
      en: "A short drive, but three moments decide whether the visit runs smoothly.",
      ar: "رحلة قصيرة، لكن ثلاث لحظات تحدد سلاسة الزيارة.",
    },
    steps: [
      {
        label: { en: "Before", ar: "قبل" },
        title: { en: "Book the visit, then the car", ar: "احجز الزيارة ثم السيارة" },
        detail: {
          en: "Tickets and opening hours come from Diriyah's official site and change from season to season. Book your visit first, then send us the time.",
          ar: "التذاكر ومواعيد الفتح تُؤخذ من الموقع الرسمي للدرعية وتتغير من موسم إلى آخر. احجز زيارتك أولًا ثم أرسل إلينا الموعد.",
        },
      },
      {
        label: { en: "Arrive", ar: "الوصول" },
        title: { en: "Name the part of Diriyah", ar: "حدّد جزء الدرعية" },
        detail: {
          en: "At-Turaif, Bujairi Terrace or the wadi. The drop-off is at the point vehicles may use for that part, confirmed when the journey is arranged.",
          ar: "حي الطريف أو مطل البجيري أو الوادي. ويكون النزول عند النقطة المسموح للمركبات باستخدامها لذلك الجزء، ويُؤكَّد ذلك عند ترتيب الرحلة.",
        },
      },
      {
        label: { en: "Leave", ar: "المغادرة" },
        title: { en: "Plan the return now", ar: "خطّط للعودة الآن" },
        detail: {
          en: "A visit or a dinner can run longer than planned. Book the return as its own leg in the same enquiry, with the time you expect to leave, rather than finding a car at the end.",
          ar: "قد تطول الزيارة أو العشاء أكثر من المخطط له. احجز العودة رحلةً مستقلة في الاستفسار نفسه مع الوقت الذي تتوقع المغادرة فيه، بدل البحث عن سيارة في النهاية.",
        },
      },
    ],
  },

  tickets: {
    heading: { en: "Tickets and opening hours", ar: "التذاكر ومواعيد الزيارة" },
    body: {
      en: "We arrange the car, not the visit. Tickets, passes and opening hours are set by the operator and have changed more than once, so we publish none of them — the official site is the only reliable source.",
      ar: "نحن نرتّب السيارة لا الزيارة. فالتذاكر والتصاريح ومواعيد الفتح يحددها المشغّل وقد تغيرت أكثر من مرة، ولهذا لا ننشر شيئًا منها، والموقع الرسمي هو المصدر الموثوق الوحيد.",
    },
    linkLabel: { en: "At-Turaif on Diriyah's official site", ar: "حي الطريف على الموقع الرسمي للدرعية" },
    url: "https://diriyah.sa/at-turaif",
    note: {
      en: "Run by Diriyah Company. Opens in a new tab.",
      ar: "تديره شركة الدرعية. يُفتح في نافذة جديدة.",
    },
  },

  airport: {
    heading: { en: "From King Khalid airport to Diriyah", ar: "من مطار الملك خالد إلى الدرعية" },
    paragraphs: [
      {
        en: "Published estimates put the airport at roughly 28 to 39 km from Diriyah by road — about half an hour outside peak traffic. Send the flight number and the pickup follows your aircraft, so a delay moves it with you.",
        ar: "تضع التقديرات المنشورة المطار على بعد 28 إلى 39 كم تقريبًا من الدرعية برًّا، أي نحو نصف ساعة خارج أوقات الذروة. أرسل رقم الرحلة ليتبع موعد الاستقبال طائرتك، فإن تأخرت تحرّك الموعد معك.",
      },
      {
        en: "If you are staying at a hotel in Diriyah, give us its name and entrance; for a visit straight from the airport, tell us where your luggage is going first.",
        ar: "وإن كنت ستقيم في فندق في الدرعية فزوّدنا باسمه ومدخله، أما إن كانت الزيارة مباشرة من المطار فأخبرنا إلى أين تذهب أمتعتك أولًا.",
      },
    ],
  },

  quotation: {
    heading: { en: "How the quotation works", ar: "كيف يُعدّ عرض السعر" },
    items: [
      {
        en: "Send the pickup, the part of Diriyah, the date and time, how many passengers, and the return time if you want one.",
        ar: "أرسل نقطة الانطلاق وجزء الدرعية والتاريخ والوقت وعدد الركاب، وموعد العودة إن أردتها.",
      },
      {
        en: "We reply with a written price for each leg. Nothing is reserved and no payment is taken until you accept it.",
        ar: "نرد بسعر مكتوب لكل رحلة، ولا يُحجز شيء ولا يُدفع أي مبلغ حتى توافق عليه.",
      },
      {
        en: "We do not sell tickets or arrange entry to any part of Diriyah.",
        ar: "لا نبيع التذاكر ولا نرتّب الدخول إلى أي جزء من الدرعية.",
      },
    ],
  },

  faqHeading: { en: "Diriyah: common questions", ar: "الدرعية: أسئلة شائعة" },

  faqs: [
    {
      question: { en: "How far is Diriyah from Riyadh?", ar: "كم كيلو من الرياض إلى الدرعية؟" },
      answer: {
        en: "About 20 km from central Riyadh, on the north-western edge of the city along Wadi Hanifa. From King Khalid airport, published estimates are roughly 28 to 39 km by road.",
        ar: "نحو 20 كم من وسط الرياض، في الطرف الشمالي الغربي من المدينة على وادي حنيفة. ومن مطار الملك خالد تتراوح التقديرات المنشورة بين 28 و39 كم تقريبًا برًّا.",
      },
    },
    {
      question: { en: "Can you take me from Riyadh airport to Diriyah?", ar: "هل توفرون التوصيل من مطار الرياض إلى الدرعية؟" },
      answer: {
        en: "Yes. Send the flight number, so the pickup follows your aircraft, and tell us whether you are going to a hotel or straight to At-Turaif or Bujairi Terrace.",
        ar: "نعم. أرسل رقم الرحلة ليتبع موعد الاستقبال طائرتك، وأخبرنا إن كنت متجهًا إلى فندق أو مباشرة إلى حي الطريف أو مطل البجيري.",
      },
    },
    {
      question: { en: "Do you sell At-Turaif tickets?", ar: "هل تبيعون تذاكر حي الطريف؟" },
      answer: {
        en: "No. Tickets and opening hours come from Diriyah's official site, and they change, so we do not publish them. Book the visit there first, then send us the time.",
        ar: "لا. التذاكر ومواعيد الفتح تُؤخذ من الموقع الرسمي للدرعية، وهي تتغير، فلا ننشرها. احجز الزيارة هناك أولًا ثم أرسل إلينا الموعد.",
      },
    },
    {
      question: { en: "Where will the car drop us in Diriyah?", ar: "أين تنزلنا السيارة في الدرعية؟" },
      answer: {
        en: "At the point vehicles may use for the part of Diriyah you are visiting — At-Turaif, Bujairi Terrace or the wadi. Tell us which, and we confirm the point when the journey is arranged.",
        ar: "عند النقطة المسموح للمركبات باستخدامها للجزء الذي تزوره: حي الطريف أو مطل البجيري أو الوادي. أخبرنا بوجهتك ونؤكد النقطة عند ترتيب الرحلة.",
      },
    },
    {
      question: { en: "Can you collect us after dinner at Bujairi Terrace?", ar: "هل يمكنكم إعادتنا بعد العشاء في البجيري؟" },
      answer: {
        en: "Yes — book the return as its own leg in the same enquiry, with the time you expect to leave. Planning it in advance is easier than finding a car late in the evening.",
        ar: "نعم، احجز العودة رحلةً مستقلة في الاستفسار نفسه مع الوقت الذي تتوقع المغادرة فيه، فالتخطيط المسبق أيسر من البحث عن سيارة في آخر المساء.",
      },
    },
  ],

  related: [
    {
      routeKey: "riyadh",
      label: { en: "All Riyadh transfers", ar: "جميع خدمات النقل في الرياض" },
      note: {
        en: "The capital's hub: airport, railway stations, hotels and intercity routes.",
        ar: "صفحة العاصمة: المطار ومحطات القطار والفنادق والمسارات بين المدن.",
      },
    },
    {
      routeKey: "riyadhHotel",
      label: { en: "Riyadh hotel transfers", ar: "النقل من فنادق الرياض" },
      note: {
        en: "Starting from a Riyadh hotel? Why the named entrance matters for every pickup.",
        ar: "تبدأ من فندق في الرياض؟ لماذا يهم تحديد المدخل في كل استقبال.",
      },
    },
    {
      routeKey: "shaqra",
      label: { en: "Shaqra and Ushaiqer", ar: "شقراء وأشيقر" },
      note: {
        en: "More Najdi mudbrick heritage, a longer road trip north-west of Riyadh.",
        ar: "مزيد من التراث النجدي الطيني، في رحلة أطول شمال غرب الرياض.",
      },
    },
  ],

  cta: {
    eyebrow: { en: "Arrive and leave", ar: "الوصول والمغادرة" },
    heading: { en: "Request a Diriyah transfer quotation", ar: "اطلب عرض سعر للتوصيل إلى الدرعية" },
    body: {
      en: "Your pickup, the part of Diriyah, the date and time — and the time you expect to leave. We reply with a written price.",
      ar: "نقطة الانطلاق وجزء الدرعية والتاريخ والوقت، والوقت الذي تتوقع المغادرة فيه. ونرد بسعر مكتوب.",
    },
    button: { en: "Get a Diriyah quote", ar: "اطلب سعر رحلة الدرعية" },
  },
};
