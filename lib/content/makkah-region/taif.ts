import type { Bilingual } from "@/lib/i18n/config";
import type { RouteKey } from "@/lib/i18n/routes";
import type { SiteImageKey } from "@/lib/site-images";
import type { ClusterCta, ClusterFaq, RelatedLink } from "@/lib/content/riyadh/types";

/**
 * Taif — destination hub.
 *
 * Intent: private transfers to, from and around Taif. This hub owns the
 * Makkah↔Taif and Jeddah↔Taif journeys (no separate route pages), Taif
 * airport, and the Al Hada and Al Shafa highlands. Riyadh→Taif keeps its own
 * page and is linked, not repeated.
 *
 * Facts (local research folder, makkah-region/01), Saudipedia unless noted:
 * - Largest governorate in Makkah Province; ~1,800 m; ~913,374 people (2022);
 *   rose hub (~650 million roses a year, 70+ distilleries; roses grown in
 *   al-Shafa, al-Hada and nearby wadis); prickly pear in al-Shafa.
 * - Taif International Airport ~27 km north-east of central Taif.
 * - Al Hada road (Aqabat al-Kurr), Makkah–Taif: 87 km in total, peak ~2,177 m,
 *   trucks and large buses prohibited all year, frequent temporary closures in
 *   fog and rain. Al Sail road is the alternative.
 * - Jeddah–Taif 163–201 km (published range, as on the Jeddah hub).
 * - Non-Muslim route from Jeddah: only travel guides describe the bypass, so
 *   the page states the requirement and that the route is planned for it.
 *
 * Deliberately absent: cable-car status or tickets, hotel names, prices,
 * vehicle models, road-condition promises, miqat locations or rulings.
 */

type B = Bilingual<string>;

export type TaifContent = {
  routeKey: RouteKey;
  imageKey: SiteImageKey;
  seo: { title: B; description: B };
  crumbLabel: B;
  hero: { eyebrow: B; h1: B; lead: B };
  distances: { from: B; value: B; note: B; link?: { routeKey: RouteKey; label: B } }[];
  roads: {
    heading: B;
    lead: B;
    hada: { name: B; facts: B[] };
    sail: { name: B; facts: B[] };
    note: B;
  };
  jeddah: { heading: B; paragraphs: B[]; nonMuslim: B };
  airport: { heading: B; paragraphs: B[] };
  highlands: {
    heading: B;
    lead: B;
    places: { name: B; detail: B }[];
    roses: B;
  };
  quotation: { heading: B; items: B[] };
  faqHeading: B;
  faqs: ClusterFaq[];
  related: RelatedLink[];
  cta: ClusterCta;
};

export const taif: TaifContent = {
  routeKey: "taif",
  imageKey: "taif-al-shafa",

  seo: {
    title: {
      en: "Taif Private Transfers | Makkah, Jeddah and Taif Airport",
      ar: "توصيل خاص في الطائف | من مكة وجدة ومطار الطائف",
    },
    description: {
      en: "Private transfers to and around Taif: up from Makkah via Al Hada or Al Sail, from Jeddah, Taif airport pickups and Al Hada or Al Shafa stays. Get a quote.",
      ar: "توصيل خاص إلى الطائف وداخلها: من مكة عبر طريق الهدا أو طريق السيل، ومن جدة، واستقبال من مطار الطائف الدولي، والتوصيل إلى الهدا والشفا. اطلب عرض سعر مكتوبًا.",
    },
  },

  crumbLabel: { en: "Taif", ar: "الطائف" },

  hero: {
    eyebrow: { en: "Makkah Region · Taif", ar: "منطقة مكة المكرمة · الطائف" },
    h1: {
      en: "Private transfers to and around Taif",
      ar: "توصيل خاص إلى الطائف وداخلها",
    },
    lead: {
      en: "Taif sits about 1,800 metres up on the eastern slopes of the Sarawat mountains — the largest governorate in the Makkah Region and the Kingdom's rose city. Getting here means climbing, from Makkah, from Jeddah, or from the airport on the city's north-east side.",
      ar: "تقع الطائف على ارتفاع نحو 1,800 متر على المنحدرات الشرقية لجبال السروات، وهي أكبر محافظات منطقة مكة المكرمة ومدينة الورد في المملكة. والوصول إليها صعود: من مكة أو من جدة أو من المطار في شمالها الشرقي.",
    },
  },

  distances: [
    {
      from: { en: "From Makkah", ar: "من مكة" },
      value: { en: "~90 km", ar: "~90 كم" },
      note: { en: "Via the Al Hada road (87 km end to end).", ar: "عبر طريق الهدا (87 كم بطوله)." },
    },
    {
      from: { en: "From Jeddah", ar: "من جدة" },
      value: { en: "163–201 km", ar: "163–201 كم" },
      note: { en: "Depending on route and start point.", ar: "بحسب الطريق ونقطة الانطلاق." },
    },
    {
      from: { en: "From Taif airport", ar: "من مطار الطائف" },
      value: { en: "~27 km", ar: "~27 كم" },
      note: { en: "North-east of the city centre.", ar: "شمال شرق وسط المدينة." },
    },
    {
      from: { en: "From Riyadh", ar: "من الرياض" },
      value: { en: "~790 km", ar: "~790 كم" },
      note: { en: "A full day west.", ar: "يوم كامل غربًا." },
      link: { routeKey: "riyadhToTaif", label: { en: "Riyadh to Taif", ar: "الرياض إلى الطائف" } },
    },
  ],

  roads: {
    heading: { en: "From Makkah: two roads up", ar: "من مكة: طريقان إلى الطائف" },
    lead: {
      en: "The Makkah–Taif journey is the one people ask about most. There are two ways up, and which one we use depends on the weather, the vehicle and where in Taif you are going.",
      ar: "رحلة مكة والطائف هي الأكثر سؤالًا. وهناك طريقان للصعود، ويعتمد اختيارنا بينهما على الطقس والمركبة والوجهة داخل الطائف.",
    },
    hada: {
      name: { en: "Al Hada road (Aqabat al-Kurr)", ar: "طريق الهدا (عقبة الكر)" },
      facts: [
        { en: "87 km from Makkah, via Arafat, Kara and the Al Hada peak at about 2,177 m.", ar: "87 كم من مكة، عبر عرفات والكر وقمة الهدا على ارتفاع نحو 2,177 مترًا." },
        { en: "A twisting mountain road. Permanent restriction: trucks and large buses are not permitted on it at any time of year. The restriction does not apply to private cars.", ar: "طريق جبلي متعرج. وقيد دائم: يُمنع عليه سير الشاحنات والحافلات الكبيرة طوال العام، ولا يشمل هذا المنع السيارات الخاصة." },
        { en: "Separately, it closes temporarily for all traffic in fog and heavy rain — one of the Kingdom's most frequently closed roads.", ar: "وبمعزل عن ذلك، يُغلق مؤقتًا أمام جميع المركبات في الضباب والأمطار الغزيرة، وهو من أكثر الطرق في المملكة تعرضًا للإغلاق." },
      ],
    },
    sail: {
      name: { en: "Al Sail road", ar: "طريق السيل" },
      facts: [
        { en: "The alternative route between Makkah and Taif, without the Al Hada climb.", ar: "الطريق البديل بين مكة والطائف دون صعود عقبة الهدا." },
        { en: "The route for a group travelling in a large bus, which is not permitted on Al Hada.", ar: "الطريق المخصص لرحلات المجموعات بالحافلات الكبيرة، لأنها ممنوعة من طريق الهدا." },
        { en: "Longer than Al Hada; we quote the time on the route actually planned.", ar: "أطول من طريق الهدا، ونُسعّر الوقت على الطريق المخطط فعلًا." },
      ],
    },
    note: {
      en: "If Al Hada is temporarily closed on the day, the journey goes via Al Sail. Want a stop on the way, at the miqat or anywhere else? Put it in the enquiry.",
      ar: "وإن أُغلق طريق الهدا مؤقتًا يوم الرحلة فتكون عبر السيل. وإن أردت التوقف في الطريق، عند الميقات أو في أي مكان آخر، فاذكر ذلك في الاستفسار.",
    },
  },

  jeddah: {
    heading: { en: "From Jeddah to Taif", ar: "من جدة إلى الطائف" },
    paragraphs: [
      {
        en: "Between 163 and 201 km depending on the route and where in Jeddah you start — published figures disagree, which is why we give the range. From King Abdulaziz airport, send the flight number and the pickup follows the aircraft.",
        ar: "بين 163 و201 كم بحسب الطريق ونقطة انطلاقك في جدة، والأرقام المنشورة متعارضة ولهذا نذكر النطاق. ومن مطار الملك عبدالعزيز أرسل رقم الرحلة ليتبع موعد الاستقبال طائرتك.",
      },
    ],
    nonMuslim: {
      en: "The most direct road from Jeddah runs past Makkah, and non-Muslim travellers may not enter the city. If anyone in your party is not Muslim, say so in the enquiry: the journey is planned on a route that avoids Makkah.",
      ar: "يمر الطريق الأقصر من جدة بمكة المكرمة، ولا يجوز لغير المسلمين دخولها. فإن كان في مجموعتك من ليس مسلمًا فاذكر ذلك في الاستفسار، وتُخطَّط الرحلة على طريق لا يمر بمكة.",
    },
  },

  airport: {
    heading: { en: "Taif International Airport", ar: "مطار الطائف الدولي" },
    paragraphs: [
      {
        en: "The airport is about 27 km north-east of central Taif, reached by the Taif Airport Road, and serves domestic and international flights. For a pickup, send the flight number so the pickup follows the aircraft rather than a clock time.",
        ar: "يقع المطار على بعد نحو 27 كم شمال شرق وسط الطائف، ويُوصل إليه عبر طريق مطار الطائف، ويخدم الرحلات الداخلية والدولية. وللاستقبال أرسل رقم الرحلة ليتبع موعد الاستقبال طائرتك لا توقيت الساعة.",
      },
      {
        en: "Going on to Makkah from here crosses Taif first and then comes down the mountain road — the airport is on the far side of the city from Makkah.",
        ar: "والتوجه منه إلى مكة يعبر الطائف أولًا ثم ينزل الطريق الجبلي، فالمطار في الجهة المقابلة لمكة من المدينة.",
      },
    ],
  },

  highlands: {
    heading: { en: "Al Hada and Al Shafa", ar: "الهدا والشفا" },
    lead: {
      en: "Many summer stays are not in the city itself but in the highlands around it. Name the area and the address, and the last climb is part of the quote.",
      ar: "كثير من الإقامات الصيفية ليست في المدينة نفسها بل في المرتفعات حولها. اذكر المنطقة والعنوان، ويدخل الصعود الأخير في عرض السعر.",
    },
    places: [
      {
        name: { en: "Al Hada", ar: "الهدا" },
        detail: {
          en: "On the Makkah side of Taif, at the top of the Al Hada road — around 2,177 m at its peak. The first highland you reach coming up from Makkah.",
          ar: "في جهة مكة من الطائف، أعلى طريق الهدا، ويبلغ ارتفاع قمته نحو 2,177 مترًا. وهو أول المرتفعات التي تصلها صاعدًا من مكة.",
        },
      },
      {
        name: { en: "Al Shafa", ar: "الشفا" },
        detail: {
          en: "Highland country within Taif Governorate, known for its rose farms and its prickly pear. Mountain roads lead up to it from the city.",
          ar: "مرتفعات تابعة لمحافظة الطائف، معروفة بمزارع الورد والتين الشوكي، وتصعد إليها طرق جبلية من المدينة.",
        },
      },
    ],
    roses: {
      en: "Taif is the Kingdom's rose hub — around 650 million roses a year, grown in Al Shafa, Al Hada and the surrounding wadis, with more than seventy distilleries and workshops.",
      ar: "الطائف مركز الورد في المملكة، إذ تنتج نحو 650 مليون وردة سنويًا تُزرع في الشفا والهدا والأودية المحيطة، وفيها أكثر من سبعين مصنعًا وورشة للتقطير.",
    },
  },

  quotation: {
    heading: { en: "What to send for a quotation", ar: "ما ترسله لطلب عرض السعر" },
    items: [
      {
        en: "The pickup — a Makkah hotel, a Jeddah address, or Taif airport with the flight number — and the address in Taif, Al Hada or Al Shafa.",
        ar: "نقطة الانطلاق، سواء فندق في مكة أو عنوان في جدة أو مطار الطائف مع رقم الرحلة، والعنوان في الطائف أو الهدا أو الشفا.",
      },
      {
        en: "The date and time, how many passengers and suitcases, and whether anyone in the party is not Muslim, so the route is planned correctly.",
        ar: "التاريخ والوقت وعدد الركاب والحقائب، وهل في المجموعة من ليس مسلمًا ليُخطَّط الطريق بشكل صحيح.",
      },
      {
        en: "We reply with a written price and the vehicle category. Availability and trip details are confirmed before the booking is accepted.",
        ar: "ونرد بسعر مكتوب وفئة المركبة، وتُؤكَّد الإتاحة وتفاصيل الرحلة قبل قبول الحجز.",
      },
    ],
  },

  faqHeading: { en: "Taif transfers: common questions", ar: "التوصيل في الطائف: أسئلة شائعة" },

  faqs: [
    {
      question: { en: "How far is Taif from Makkah?", ar: "من مكة إلى الطائف كم كيلو؟" },
      answer: {
        en: "About 90 km via the Al Hada road, which is 87 km end to end. The alternative via Al Sail is longer. Which one we use depends on the weather, the vehicle and your address in Taif.",
        ar: "نحو 90 كم عبر طريق الهدا الذي يبلغ طوله 87 كم، والطريق البديل عبر السيل أطول. ويعتمد اختيارنا على الطقس والمركبة وعنوانك في الطائف.",
      },
    },
    {
      question: { en: "Do you go by Al Hada or Al Sail?", ar: "هل تسلكون طريق الهدا أم طريق السيل؟" },
      answer: {
        en: "A private car normally goes via Al Hada when it is open. Two things send a journey via Al Sail instead: a large bus, which is never permitted on Al Hada (trucks are excluded too), or a temporary closure of Al Hada in fog or heavy rain.",
        ar: "تسلك السيارة الخاصة عادةً طريق الهدا إن كان مفتوحًا. ويحوّل الرحلة إلى طريق السيل أمران: حافلة كبيرة، فهي ممنوعة من طريق الهدا دائمًا (وكذلك الشاحنات)، أو إغلاق مؤقت لطريق الهدا في الضباب أو الأمطار الغزيرة.",
      },
    },
    {
      question: { en: "Can a non-Muslim travel from Jeddah to Taif?", ar: "هل يمكن لغير المسلم السفر من جدة إلى الطائف؟" },
      answer: {
        en: "Yes — Taif is open to everyone, but Makkah is not, and the most direct road passes it. Tell us in the enquiry and the journey is planned on a route that avoids Makkah.",
        ar: "نعم، فالطائف متاحة للجميع، لكن مكة ليست كذلك، والطريق الأقصر يمر بها. أخبرنا في الاستفسار وتُخطَّط الرحلة على طريق لا يمر بمكة.",
      },
    },
    {
      question: { en: "How far is Taif airport from the city?", ar: "كم يبعد مطار الطائف عن المدينة؟" },
      answer: {
        en: "About 27 km north-east of central Taif. Send the flight number for a pickup, and tell us if you are going on to Makkah — that crosses the city first.",
        ar: "نحو 27 كم شمال شرق وسط الطائف. أرسل رقم الرحلة للاستقبال، وأخبرنا إن كنت متجهًا إلى مكة، فذلك يعبر المدينة أولًا.",
      },
    },
    {
      question: { en: "Can you take us up to Al Hada or Al Shafa?", ar: "هل توصلوننا إلى الهدا أو الشفا؟" },
      answer: {
        en: "Yes — give us the address there. Both are reached by mountain roads, so the last climb is part of the quotation.",
        ar: "نعم، زوّدنا بالعنوان هناك. فكلاهما يُوصل إليه بطرق جبلية، ويدخل الصعود الأخير في عرض السعر.",
      },
    },
  ],

  related: [
    {
      routeKey: "makkah",
      label: { en: "Private transfers in Makkah", ar: "توصيل خاص في مكة المكرمة" },
      note: {
        en: "The other end of the mountain road: arrivals, hotels and the Haramain station.",
        ar: "الطرف الآخر من الطريق الجبلي: الوصول والفنادق ومحطة قطار الحرمين.",
      },
    },
    {
      routeKey: "jeddah",
      label: { en: "All Jeddah transfers", ar: "جميع خدمات النقل في جدة" },
      note: {
        en: "The coast below the escarpment, and the airport most visitors fly into.",
        ar: "الساحل أسفل الحافة الجبلية، والمطار الذي يصل عبره معظم الزوار.",
      },
    },
    {
      routeKey: "riyadhToTaif",
      label: { en: "Riyadh to Taif", ar: "الرياض إلى الطائف" },
      note: {
        en: "The long way: about 790 km west from the capital, with the climb at the end.",
        ar: "الطريق الطويل: نحو 790 كم غربًا من العاصمة، والصعود في آخره.",
      },
    },
    {
      routeKey: "abha",
      label: { en: "Abha & Khamis Mushait", ar: "أبها وخميس مشيط" },
      note: {
        en: "The other highland hub, in the Asir region: local transfers in both cities.",
        ar: "المحور الجبلي الآخر في منطقة عسير: التوصيل داخل المدينتين.",
      },
    },
  ],

  cta: {
    eyebrow: { en: "Up the mountain", ar: "صعودًا إلى الجبل" },
    heading: { en: "Request a Taif transfer quotation", ar: "اطلب عرض سعر للتوصيل إلى الطائف" },
    body: {
      en: "Where you start, the address in Taif, Al Hada or Al Shafa, the date and how many of you. We reply with a written price and the route it is based on.",
      ar: "من أين تنطلق والعنوان في الطائف أو الهدا أو الشفا والتاريخ وعددكم. ونرد بسعر مكتوب وبالطريق الذي بُني عليه.",
    },
    button: { en: "Get a Taif quote", ar: "اطلب سعر رحلة الطائف" },
  },
};
