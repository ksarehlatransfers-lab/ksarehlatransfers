import type { Bilingual } from "@/lib/i18n/config";
import type { RouteKey } from "@/lib/i18n/routes";
import type { SiteImageKey } from "@/lib/site-images";
import type { ClusterCta, ClusterFaq, RelatedLink } from "@/lib/content/riyadh/types";

/**
 * Al Kharj — Riyadh Region destination hub.
 *
 * A working city rather than a tourist destination: agriculture and dairy,
 * Prince Sattam bin Abdulaziz University, the 1940 King Abdulaziz Palace and
 * a set of historic springs. Journeys run between Al Kharj and Riyadh in both
 * directions, and some start at King Khalid airport on the far side of the
 * capital — so the page is built as a **planner**, not a brochure.
 *
 * Facts (sources in the local research folder, riyadh-region/02):
 * - ~80 km south-east of Riyadh; population ~373,000 (2022 census) — Saudipedia.
 * - Palace (1940), dairy/agriculture, springs, university — Saudipedia and
 *   Prince Sattam University (psau.edu.sa).
 * - No passenger rail station: published station lists for the Riyadh–Dammam
 *   passenger line are Riyadh, Hofuf, Abqaiq and Dammam. Stated as "published
 *   station lists" because the rail operator's site could not be read.
 *
 * Deliberately absent: a road distance or driving time (not independently
 * checked), prices, vehicle models, waiting allowances, bus timetables, and
 * any claim about local partners — operational coverage for this destination
 * is still to be confirmed by the owner.
 *
 * No separate Riyadh→Al Kharj route page: this hub answers that whole intent.
 */

type B = Bilingual<string>;

export type AlKharjContent = {
  routeKey: RouteKey;
  imageKey: SiteImageKey;
  seo: { title: B; description: B };
  crumbLabel: B;
  hero: { eyebrow: B; h1: B; lead: B };
  answer: { question: B; answer: B };
  planner: {
    heading: B;
    lead: B;
    columns: { journey: B; decides: B; send: B };
    rows: { journey: B; decides: B; send: B }[];
  };
  rail: { heading: B; paragraphs: B[] };
  context: {
    heading: B;
    lead: B;
    facts: { label: B; value: B; note: B }[];
    springsLabel: B;
    springs: B[];
    springsNote: B;
  };
  quotation: { heading: B; items: B[] };
  faqHeading: B;
  faqs: ClusterFaq[];
  related: RelatedLink[];
  cta: ClusterCta;
};

export const alKharj: AlKharjContent = {
  routeKey: "alKharj",
  imageKey: "dest-alkharj",

  seo: {
    title: {
      en: "Riyadh to Al Kharj Private Transfer | City or Airport",
      ar: "نقل خاص بين الرياض والخرج | من المطار أو أي عنوان",
    },
    description: {
      en: "Private car between Riyadh and Al Kharj, about 80 km south-east of the capital — from any address or King Khalid airport, either way. Request a written quote.",
      ar: "توصيل بسيارة خاصة بين الرياض والخرج التي تبعد نحو 80 كم جنوب شرق العاصمة: من أي عنوان أو من مطار الملك خالد، ذهابًا أو عودة. اطلب عرض سعر مكتوبًا.",
    },
  },

  crumbLabel: { en: "Al Kharj", ar: "الخرج" },

  hero: {
    eyebrow: { en: "Riyadh Region · Al Kharj", ar: "منطقة الرياض · الخرج" },
    h1: {
      en: "Private transfers between Riyadh and Al Kharj",
      ar: "نقل خاص بين الرياض والخرج",
    },
    lead: {
      en: "Al Kharj is a working city south-east of the capital — farms and dairies, a university, a royal palace from 1940 and a string of old springs. Most journeys run between the two cities, in either direction; some begin at the airport on the far side of Riyadh.",
      ar: "الخرج مدينة منتجة جنوب شرق العاصمة، فيها المزارع ومصانع الألبان وجامعة الأمير سطام وقصر الملك عبدالعزيز الذي بُني عام 1940 وعيون قديمة. ومعظم الرحلات بين المدينتين في الاتجاهين، وبعضها يبدأ من المطار في الطرف الآخر من الرياض.",
    },
  },

  answer: {
    question: {
      en: "How far is Al Kharj from Riyadh?",
      ar: "كم تبعد الخرج عن الرياض؟",
    },
    answer: {
      en: "About 80 km south-east of the capital, city to city. The distance you actually drive depends on where in Riyadh you start: the city is large, and King Khalid International Airport is on its northern side, so an airport pickup crosses Riyadh before the road to Al Kharj begins.",
      ar: "نحو 80 كم جنوب شرق العاصمة بين المدينتين. أما المسافة التي تقطعها فعلًا فتعتمد على نقطة انطلاقك في الرياض: فالمدينة واسعة، ومطار الملك خالد الدولي في جهتها الشمالية، فيعبر الاستقبال من المطار الرياض قبل أن يبدأ طريق الخرج.",
    },
  },

  planner: {
    heading: {
      en: "Plan the journey you are actually making",
      ar: "خطّط للرحلة التي تقوم بها فعلًا",
    },
    lead: {
      en: "Four journeys cover almost everyone travelling to or from Al Kharj. Each is decided by something different, so each needs slightly different details from you.",
      ar: "أربع رحلات تغطي تقريبًا كل من يسافر إلى الخرج أو منها. ولكل منها ما يحددها، فتحتاج كل واحدة إلى تفاصيل مختلفة قليلًا منك.",
    },
    columns: {
      journey: { en: "Journey", ar: "الرحلة" },
      decides: { en: "What decides it", ar: "ما الذي يحددها" },
      send: { en: "What to send us", ar: "ما ترسله إلينا" },
    },
    rows: [
      {
        journey: { en: "A Riyadh address to Al Kharj", ar: "من عنوان في الرياض إلى الخرج" },
        decides: {
          en: "Where in Riyadh you start and the time of day. Riyadh's traffic, not the open road, usually sets the pace.",
          ar: "نقطة انطلاقك في الرياض ووقت اليوم، فزحام الرياض لا الطريق المفتوح هو ما يحدد الإيقاع غالبًا.",
        },
        send: {
          en: "Both addresses, the date and the time you want to leave.",
          ar: "العنوانان والتاريخ ووقت الانطلاق الذي تريده.",
        },
      },
      {
        journey: { en: "King Khalid airport to Al Kharj", ar: "من مطار الملك خالد إلى الخرج" },
        decides: {
          en: "Your flight. The pickup follows the aircraft rather than a clock time, and the drive crosses Riyadh from north to south-east.",
          ar: "رحلتك الجوية، فموعد الاستقبال يتبع الطائرة لا توقيت الساعة، والطريق يعبر الرياض من الشمال إلى الجنوب الشرقي.",
        },
        send: {
          en: "The flight number, the address in Al Kharj, and how many passengers and suitcases.",
          ar: "رقم الرحلة والعنوان في الخرج وعدد الركاب والحقائب.",
        },
      },
      {
        journey: { en: "Al Kharj to Riyadh or the airport", ar: "من الخرج إلى الرياض أو المطار" },
        decides: {
          en: "The time you need to arrive. For a flight, that is your airline's check-in time, and we work backwards from it.",
          ar: "الوقت الذي تحتاج الوصول فيه، وللطيران هو موعد إجراءات شركة الطيران الذي نبني الرحلة تراجعيًا منه.",
        },
        send: {
          en: "Your Al Kharj address, the destination, and the arrival or check-in time.",
          ar: "عنوانك في الخرج والوجهة وموعد الوصول أو موعد الإجراءات.",
        },
      },
      {
        journey: { en: "There and back on the same day", ar: "ذهاب وعودة في اليوم نفسه" },
        decides: {
          en: "How long you need in Al Kharj — a meeting, a university visit, a family call.",
          ar: "المدة التي تحتاجها في الخرج: اجتماع أو زيارة للجامعة أو زيارة عائلية.",
        },
        send: {
          en: "Both legs in one enquiry, with the times, so they are quoted together.",
          ar: "الرحلتين في استفسار واحد مع المواعيد، فتُسعَّران معًا.",
        },
      },
    ],
  },

  rail: {
    heading: {
      en: "Is there a train from Riyadh to Al Kharj?",
      ar: "هل يوجد قطار من الرياض إلى الخرج؟",
    },
    paragraphs: [
      {
        en: "Not for passengers, on the published information. Station lists for the Riyadh–Dammam passenger line name Riyadh, Hofuf, Abqaiq and Dammam; Al Kharj sits on the freight route, which the passenger line leaves at Hofuf. If rail matters to your plans, check with Saudi Arabia Railways — we do not sell tickets and could not read the operator's own station list.",
        ar: "ليس للركاب وفق المعلومات المنشورة. فقوائم محطات خط الركاب بين الرياض والدمام تذكر الرياض والهفوف وأبقيق والدمام، والخرج تقع على مسار الشحن الذي يفترق عنه خط الركاب عند الهفوف. وإن كان القطار مهمًا لخطتك فتحقق لدى الخطوط الحديدية السعودية، فنحن لا نبيع التذاكر ولم نتمكن من قراءة قائمة المحطات لدى المشغّل نفسه.",
      },
      {
        en: "People also ask about buses on this road. We do not publish bus timetables; the bus operator is the right source for those.",
        ar: "ويسأل الناس أيضًا عن الحافلات على هذا الطريق. ونحن لا ننشر جداول الحافلات، والمصدر الصحيح لها هو مشغّل الحافلات.",
      },
    ],
  },

  context: {
    heading: { en: "Al Kharj in brief", ar: "الخرج في سطور" },
    lead: {
      en: "Why people travel here — useful for knowing which part of the city you are going to.",
      ar: "لماذا يسافر الناس إلى هنا، وهو مفيد لمعرفة أي جزء من المدينة تقصده.",
    },
    facts: [
      {
        label: { en: "Population", ar: "السكان" },
        value: { en: "~373,000", ar: "~373 ألف" },
        note: {
          en: "2022 census — the second-largest governorate in Riyadh Province after the capital.",
          ar: "تعداد 2022، وهي ثاني أكبر محافظة في منطقة الرياض بعد العاصمة.",
        },
      },
      {
        label: { en: "Landmark", ar: "معلم بارز" },
        value: { en: "King Abdulaziz Palace", ar: "قصر الملك عبدالعزيز" },
        note: {
          en: "Built in 1940 in al-Saih — the city's best-known historic building.",
          ar: "بُني عام 1940 في السيح، وهو أشهر مبنى تاريخي في المدينة.",
        },
      },
      {
        label: { en: "Economy", ar: "الاقتصاد" },
        value: { en: "Farms and dairy", ar: "الزراعة والألبان" },
        note: {
          en: "Farms, dairy factories and food plants surround the city: vegetables, wheat, dates and milk.",
          ar: "تحيط بالمدينة المزارع ومصانع الألبان والأغذية: الخضروات والقمح والتمور والحليب.",
        },
      },
      {
        label: { en: "University", ar: "الجامعة" },
        value: { en: "Prince Sattam bin Abdulaziz", ar: "جامعة الأمير سطام بن عبدالعزيز" },
        note: {
          en: "A public university — a common reason for journeys from Riyadh.",
          ar: "جامعة حكومية، وهي سبب شائع للرحلات من الرياض.",
        },
      },
    ],
    springsLabel: { en: "Historic springs", ar: "عيون تاريخية" },
    springs: [
      { en: "Ain Al-Dhalaa", ar: "عين الضلع" },
      { en: "Ain Samha", ar: "عين سمحة" },
      { en: "Al-Saih spring", ar: "عين السيح" },
    ],
    springsNote: {
      en: "Al Kharj grew around its water. Its springs once fed the farms and orchards and are now visited as landmarks — name the one you want and we quote to it.",
      ar: "نشأت الخرج حول مياهها، فقد كانت عيونها تسقي المزارع والبساتين، وهي اليوم معالم تُزار. اذكر العين التي تريدها ونُسعّر الرحلة إليها.",
    },
  },

  quotation: {
    heading: { en: "How the quotation works", ar: "كيف يُعدّ عرض السعر" },
    items: [
      {
        en: "You send the two addresses (or the flight number), the date and time, and how many passengers and suitcases.",
        ar: "ترسل العنوانين (أو رقم الرحلة) والتاريخ والوقت وعدد الركاب والحقائب.",
      },
      {
        en: "We reply with a written price and the vehicle category. Nothing is reserved and no payment is taken until you accept it.",
        ar: "نرد بسعر مكتوب وفئة المركبة، ولا يُحجز شيء ولا يُدفع أي مبلغ حتى توافق عليه.",
      },
      {
        en: "No prices are published here: the journey is priced on your details, and nothing is added afterwards.",
        ar: "لا ننشر أسعارًا هنا، فالرحلة تُسعَّر بحسب تفاصيلك، ولا يُضاف شيء بعد ذلك.",
      },
    ],
  },

  faqHeading: {
    en: "Riyadh and Al Kharj: common questions",
    ar: "الرياض والخرج: أسئلة شائعة",
  },

  faqs: [
    {
      question: { en: "How far is Al Kharj from Riyadh?", ar: "من الرياض إلى الخرج كم كيلو؟" },
      answer: {
        en: "About 80 km south-east, city to city. The distance you drive depends on your start point in Riyadh — from King Khalid airport, on the north side of the capital, it is noticeably further. We quote on your actual addresses.",
        ar: "نحو 80 كم جنوب شرق الرياض بين المدينتين. وتعتمد المسافة التي تقطعها على نقطة انطلاقك في الرياض، فمن مطار الملك خالد في شمال العاصمة تكون أطول بوضوح. ونحن نُسعّر على عناوينك الفعلية.",
      },
    },
    {
      question: { en: "Is there a train from Riyadh to Al Kharj?", ar: "هل يوجد قطار من الرياض إلى الخرج؟" },
      answer: {
        en: "Not for passengers, on the published station lists for the Riyadh–Dammam line, which name Riyadh, Hofuf, Abqaiq and Dammam. Al Kharj is on the freight route. Check with Saudi Arabia Railways if rail matters to your plans.",
        ar: "ليس للركاب وفق قوائم المحطات المنشورة لخط الرياض والدمام، التي تذكر الرياض والهفوف وأبقيق والدمام، فالخرج على مسار الشحن. وتحقق لدى الخطوط الحديدية السعودية إن كان القطار مهمًا لخطتك.",
      },
    },
    {
      question: {
        en: "Can you pick me up at Riyadh airport and take me to Al Kharj?",
        ar: "هل توفرون التوصيل من مطار الرياض إلى الخرج؟",
      },
      answer: {
        en: "Yes. Send the flight number so the pickup follows your aircraft, plus the Al Kharj address and how many passengers and suitcases. The drive crosses Riyadh from the airport on its northern side before heading south-east.",
        ar: "نعم. أرسل رقم الرحلة ليتبع موعد الاستقبال طائرتك، مع العنوان في الخرج وعدد الركاب والحقائب. ويعبر الطريق الرياض من المطار في شمالها قبل أن يتجه جنوبًا شرقًا.",
      },
    },
    {
      question: {
        en: "How much is a private transfer from Riyadh to Al Kharj?",
        ar: "كم سعر التوصيل من الرياض إلى الخرج؟",
      },
      answer: {
        en: "We do not publish a fixed price, because it depends on the two addresses, the time, and how many passengers and suitcases you have. Send those and we reply with a written price; nothing is reserved or paid until you accept it.",
        ar: "لا ننشر سعرًا ثابتًا لأنه يعتمد على العنوانين والوقت وعدد الركاب والحقائب. أرسلها ونرد بسعر مكتوب، ولا يُحجز شيء ولا يُدفع حتى توافق عليه.",
      },
    },
    {
      question: {
        en: "Can I go to Al Kharj and come back the same day?",
        ar: "هل يمكنني الذهاب إلى الخرج والعودة في اليوم نفسه؟",
      },
      answer: {
        en: "Yes — send both legs in one enquiry with the times you need, and they are quoted together.",
        ar: "نعم، أرسل الرحلتين في استفسار واحد مع المواعيد التي تحتاجها، وتُسعَّران معًا.",
      },
    },
  ],

  related: [
    {
      routeKey: "riyadh",
      label: { en: "All Riyadh transfers", ar: "جميع خدمات النقل في الرياض" },
      note: {
        en: "The capital's hub: airport, railway stations, hotels and the intercity routes.",
        ar: "صفحة العاصمة: المطار ومحطات القطار والفنادق والمسارات بين المدن.",
      },
    },
    {
      routeKey: "riyadhAirport",
      label: { en: "Riyadh airport transfers", ar: "النقل من مطار الرياض" },
      note: {
        en: "King Khalid International in detail, if your Al Kharj journey starts with a flight.",
        ar: "مطار الملك خالد الدولي بالتفصيل، إن بدأت رحلتك إلى الخرج برحلة جوية.",
      },
    },
    {
      routeKey: "riyadhToDammam",
      label: { en: "Riyadh to Dammam", ar: "الرياض إلى الدمام" },
      note: {
        en: "Further east to the Gulf coast — and the corridor where the passenger train does run.",
        ar: "أبعد شرقًا إلى ساحل الخليج، وهو الممر الذي يعمل فيه قطار الركاب فعلًا.",
      },
    },
  ],

  cta: {
    eyebrow: { en: "Either direction", ar: "في الاتجاهين" },
    heading: {
      en: "Request a Riyadh–Al Kharj quotation",
      ar: "اطلب عرض سعر للتوصيل بين الرياض والخرج",
    },
    body: {
      en: "The two addresses or your flight number, the date and time, and how many of you. We reply with a written price.",
      ar: "العنوانان أو رقم رحلتك، والتاريخ والوقت، وعددكم. ونرد بسعر مكتوب.",
    },
    button: { en: "Get an Al Kharj quote", ar: "اطلب سعر رحلة الخرج" },
  },
};
