import type { Bilingual } from "@/lib/i18n/config";
import type { RouteKey } from "@/lib/i18n/routes";
import type { SiteImageKey } from "@/lib/site-images";
import type { ClusterCta, ClusterFaq, RelatedLink } from "@/lib/content/riyadh/types";

/**
 * Jubail — destination hub.
 *
 * One page for two places that share a name, as Saudi searchers already
 * distinguish them (الجبيل البلد / الجبيل الصناعية). Owner-approved
 * architecture (8 Nov 2026): no separate Industrial City page.
 *
 * Owner-confirmed coverage (eastern-province/04):
 * - Journeys in Jubail old town.
 * - Public addresses in Jubail Industrial City, excluding controlled-site
 *   entry. Specific meeting and drop-off points are confirmed per journey.
 * Never claimed: port access, company-gate entry, permits, worker-transport
 * or commuting contracts, restricted-zone access, a Jubail passenger train,
 * or a Dammam–Jubail route service.
 *
 * Facts (eastern-province/02), Saudipedia unless noted:
 * - Jubail Industrial City: 1,016 km² on the Gulf coast, about 100 km north
 *   of Dammam; Royal Commission for Jubail and Yanbu established by royal
 *   decree in 1975; the Commission "ensures housing needs are met".
 * - The province's passenger airports are King Fahd International, Al-Ahsa
 *   International and Al-Qaisumah — none in Jubail.
 * - Ports at Jubail (Saudi Ports Authority list) — named only as places we
 *   do not serve.
 */

type B = Bilingual<string>;

export type JubailContent = {
  routeKey: RouteKey;
  imageKey: SiteImageKey;
  townImageKey: SiteImageKey;
  seo: { title: B; description: B };
  crumbLabel: B;
  hero: { eyebrow: B; h1: B; lead: B };
  places: { arName: string; name: B; role: B; detail: B; tell: B }[];
  access: { heading: B; lead: B; publicTitle: B; publicItems: B[]; controlledTitle: B; controlledItems: B[]; statement: B };
  orientation: { heading: B; facts: { label: B; value: B; note: B }[]; paragraphs: B[] };
  quotation: { heading: B; items: B[] };
  faqHeading: B;
  faqs: ClusterFaq[];
  related: RelatedLink[];
  cta: ClusterCta;
};

export const jubail: JubailContent = {
  routeKey: "jubail",
  imageKey: "jubail-ic-marina",
  townImageKey: "jubail-town-minaret",

  seo: {
    title: {
      en: "Jubail Private Transfers | Old Town and Industrial City",
      ar: "توصيل في الجبيل | الجبيل البلد والجبيل الصناعية",
    },
    description: {
      en: "Private transfers in Jubail: the old town and public addresses in Jubail Industrial City — hotels, homes and offices. Meeting points confirmed per journey.",
      ar: "توصيل خاص في الجبيل: الجبيل البلد والعناوين العامة في الجبيل الصناعية كالفنادق والمنازل والمكاتب، مع تأكيد نقطة اللقاء لكل رحلة. اطلب عرض سعر مكتوبًا.",
    },
  },

  crumbLabel: { en: "Jubail", ar: "الجبيل" },

  hero: {
    eyebrow: { en: "Eastern Province · North of Dammam", ar: "المنطقة الشرقية · شمال الدمام" },
    h1: { en: "Private transfers in Jubail", ar: "توصيل خاص في الجبيل" },
    lead: {
      en: "Jubail is two places with one name: the original town on the Gulf coast, and Jubail Industrial City, the planned city of the Royal Commission for Jubail and Yanbu. We cover journeys in the old town and to public addresses in the Industrial City — hotels, homes, offices and public places — with each meeting point confirmed for the journey.",
      ar: "الجبيل اسم لمكانين: المدينة الأصلية على ساحل الخليج، والجبيل الصناعية، المدينة المخططة التابعة للهيئة الملكية للجبيل وينبع. ونخدم الرحلات في الجبيل البلد وإلى العناوين العامة في الجبيل الصناعية، من فنادق ومنازل ومكاتب وأماكن عامة، مع تأكيد نقطة اللقاء لكل رحلة.",
    },
  },

  places: [
    {
      arName: "الجبيل البلد",
      name: { en: "Jubail old town", ar: "الجبيل البلد" },
      role: { en: "The original coastal town", ar: "المدينة الأصلية على الساحل" },
      detail: {
        en: "The older town on the coast. Saudi searchers call it الجبيل البلد — “Jubail town” — to tell it apart from the Industrial City, and it helps to use the same distinction with us.",
        ar: "المدينة الأقدم على الساحل، ويسميها الناس «الجبيل البلد» تمييزًا لها عن الجبيل الصناعية، ومن المفيد أن تستخدم التمييز نفسه معنا.",
      },
      tell: { en: "Give the street, district or building.", ar: "اذكر الشارع أو الحي أو المبنى." },
    },
    {
      arName: "الجبيل الصناعية",
      name: { en: "Jubail Industrial City", ar: "الجبيل الصناعية" },
      role: { en: "The planned city of the Royal Commission", ar: "المدينة المخططة التابعة للهيئة الملكية" },
      detail: {
        en: "Saudipedia gives its area as 1,016 km² along the coast. Besides the industrial areas and the port, it has residential districts and public places such as the waterfront.",
        ar: "تبلغ مساحتها وفق سعوديبيديا 1,016 كم² على امتداد الساحل، وفيها إلى جانب المناطق الصناعية والميناء أحياء سكنية وأماكن عامة كالواجهة البحرية.",
      },
      tell: { en: "Give the public address: a hotel, home, office or public place.", ar: "اذكر العنوان العام: فندقًا أو منزلًا أو مكتبًا أو مكانًا عامًا." },
    },
  ],

  access: {
    heading: { en: "Public addresses, not controlled sites", ar: "عناوين عامة لا مواقع خاضعة للرقابة" },
    lead: {
      en: "In the Industrial City the difference matters more than anywhere else on the coast. This is what we cover and what we do not.",
      ar: "في الجبيل الصناعية يكتسب هذا الفرق أهمية خاصة، وهذا ما نخدمه وما لا نخدمه.",
    },
    publicTitle: { en: "Public addresses we cover", ar: "عناوين عامة نخدمها" },
    publicItems: [
      { en: "Hotels and residential addresses", ar: "الفنادق والعناوين السكنية" },
      { en: "Offices and business addresses open to visitors", ar: "المكاتب وعناوين الأعمال المفتوحة للزوار" },
      { en: "Public places, such as the waterfront", ar: "الأماكن العامة كالواجهة البحرية" },
    ],
    controlledTitle: { en: "Controlled sites we do not enter", ar: "مواقع خاضعة للرقابة لا ندخلها" },
    controlledItems: [
      { en: "Industrial plants and company sites", ar: "المصانع ومواقع الشركات" },
      { en: "The ports", ar: "الموانئ" },
      { en: "Anywhere behind a gate that needs a pass or security clearance", ar: "أي مكان خلف بوابة تتطلب تصريحًا أو إذنًا أمنيًا" },
    ],
    statement: {
      en: "If a company site is where you are going, drop-off may be possible at a public address or an agreed gate, subject to confirmation. Entry, gate passes, permits and security clearance are not included or guaranteed; they are arranged by your host. We quote individual journeys, not worker transport or commuting contracts.",
      ar: "وإن كانت وجهتك موقع شركة، فقد يكون النزول ممكنًا عند عنوان عام أو بوابة متفق عليها بعد التأكيد. أما الدخول وتصاريح البوابات والأذونات والتصاريح الأمنية فغير مشمولة ولا مضمونة، ويرتّبها الطرف المستضيف. ونحن نُسعّر الرحلات الفردية لا نقل العمال ولا عقود التوصيل اليومي.",
    },
  },

  orientation: {
    heading: { en: "Where Jubail is", ar: "موقع الجبيل" },
    facts: [
      {
        label: { en: "From Dammam", ar: "من الدمام" },
        value: { en: "~100 km", ar: "~100 كم" },
        note: { en: "North along the coast, to the Industrial City (Saudipedia)", ar: "شمالًا على الساحل إلى الجبيل الصناعية (سعوديبيديا)" },
      },
      {
        label: { en: "Industrial City", ar: "الجبيل الصناعية" },
        value: { en: "1,016 km²", ar: "1,016 كم²" },
        note: { en: "Area, which is why the address matters (Saudipedia)", ar: "المساحة، ولهذا يهم العنوان (سعوديبيديا)" },
      },
      {
        label: { en: "Nearest airport", ar: "أقرب مطار" },
        value: { en: "King Fahd International", ar: "مطار الملك فهد الدولي" },
        note: { en: "Jubail has no passenger airport of its own", ar: "لا يوجد في الجبيل مطار للركاب" },
      },
    ],
    paragraphs: [
      {
        en: "Saudipedia lists three passenger airports in the Eastern Province — King Fahd International near Dammam, Al-Ahsa International and Al-Qaisumah — and none is in Jubail. The nearest of the three to Jubail is King Fahd International.",
        ar: "تذكر سعوديبيديا ثلاثة مطارات للركاب في المنطقة الشرقية: مطار الملك فهد الدولي قرب الدمام، ومطار الأحساء الدولي، ومطار القيصومة، وليس بينها مطار في الجبيل، وأقربها إلى الجبيل مطار الملك فهد الدولي.",
      },
      {
        en: "Distances are approximate and depend on which Jubail you are going to. Tell us where your journey starts when you ask for a quotation.",
        ar: "والمسافات تقريبية وتعتمد على وجهتك في الجبيل، فأخبرنا بنقطة انطلاق رحلتك عند طلب عرض السعر.",
      },
    ],
  },

  quotation: {
    heading: { en: "What to send for a quotation", ar: "ما ترسله لطلب عرض السعر" },
    items: [
      {
        en: "Where the journey starts, and whether you are going to the old town or a public address in the Industrial City — with the address.",
        ar: "نقطة انطلاق الرحلة، ووجهتك: الجبيل البلد أو عنوان عام في الجبيل الصناعية، مع العنوان.",
      },
      {
        en: "The date and time, and how many passengers and suitcases.",
        ar: "التاريخ والوقت، وعدد الركاب والحقائب.",
      },
      {
        en: "We reply with a written price and the vehicle category. The meeting point, availability and journey details are confirmed before the booking is accepted.",
        ar: "ونرد بسعر مكتوب وفئة المركبة، وتُؤكَّد نقطة اللقاء والإتاحة وتفاصيل الرحلة قبل قبول الحجز.",
      },
    ],
  },

  faqHeading: { en: "Jubail transfers: common questions", ar: "التوصيل في الجبيل: أسئلة شائعة" },

  faqs: [
    {
      question: { en: "What is the difference between Jubail and Jubail Industrial City?", ar: "ما الفرق بين الجبيل البلد والجبيل الصناعية؟" },
      answer: {
        en: "Jubail old town is the original town on the coast. Jubail Industrial City is the separate planned city of the Royal Commission for Jubail and Yanbu. Tell us which one you need, with the address.",
        ar: "الجبيل البلد هي المدينة الأصلية على الساحل، أما الجبيل الصناعية فمدينة مخططة مستقلة تابعة للهيئة الملكية للجبيل وينبع. أخبرنا بأيهما تقصد مع العنوان.",
      },
    },
    {
      question: { en: "Can you take me inside a plant, a port or a company site?", ar: "هل توصلونني إلى داخل مصنع أو ميناء أو موقع شركة؟" },
      answer: {
        en: "No. Entry to controlled sites, gate passes, permits and security clearance are not included or guaranteed. Drop-off may be possible at a public address or an agreed gate, subject to confirmation; any site access is arranged by your host.",
        ar: "لا. فالدخول إلى المواقع الخاضعة للرقابة وتصاريح البوابات والأذونات والتصاريح الأمنية غير مشمولة ولا مضمونة. وقد يكون النزول ممكنًا عند عنوان عام أو بوابة متفق عليها بعد التأكيد، وأي دخول إلى الموقع يرتّبه الطرف المستضيف.",
      },
    },
    {
      question: { en: "Do you pick up from hotels in Jubail Industrial City?", ar: "هل تستقبلون من فنادق الجبيل الصناعية؟" },
      answer: {
        en: "Yes — hotels are public addresses. Name the hotel and the entrance if there is more than one; the pickup point is confirmed for your journey.",
        ar: "نعم، فالفنادق عناوين عامة. اذكر اسم الفندق والمدخل إن كان له أكثر من مدخل، ونؤكد نقطة الاستقبال لرحلتك.",
      },
    },
    {
      question: { en: "How far is Jubail from Dammam?", ar: "كم تبعد الجبيل عن الدمام؟" },
      answer: {
        en: "Saudipedia puts Jubail Industrial City about 100 km north of Dammam. The exact distance depends on which part of Jubail you are going to.",
        ar: "تقدّر سعوديبيديا بُعد الجبيل الصناعية بنحو 100 كم شمال الدمام، وتتغير المسافة الدقيقة بحسب وجهتك في الجبيل.",
      },
    },
    {
      question: { en: "Does Jubail have its own airport?", ar: "هل يوجد مطار في الجبيل؟" },
      answer: {
        en: "Not for passengers. The Eastern Province's passenger airports listed by Saudipedia are King Fahd International near Dammam, Al-Ahsa International and Al-Qaisumah; the nearest of them to Jubail is King Fahd International.",
        ar: "لا يوجد مطار للركاب. فمطارات الركاب في المنطقة الشرقية وفق سعوديبيديا هي مطار الملك فهد الدولي قرب الدمام ومطار الأحساء الدولي ومطار القيصومة، وأقربها إلى الجبيل مطار الملك فهد الدولي.",
      },
    },
  ],

  related: [
    {
      routeKey: "dammam",
      label: { en: "Dammam, Al Khobar and Dhahran", ar: "الدمام والخبر والظهران" },
      note: {
        en: "South along the coast: King Fahd International Airport and hotels in the three cities.",
        ar: "جنوبًا على الساحل: مطار الملك فهد الدولي والفنادق في المدن الثلاث.",
      },
    },
    {
      routeKey: "yanbu",
      label: { en: "Yanbu", ar: "ينبع" },
      note: {
        en: "Jubail's sister industrial city on the Red Sea, under the same Royal Commission.",
        ar: "المدينة الصناعية الشقيقة للجبيل على البحر الأحمر، تحت الهيئة الملكية نفسها.",
      },
    },
    {
      routeKey: "alAhsa",
      label: { en: "Al Ahsa", ar: "الأحساء" },
      note: {
        en: "Inland to the oasis: the airport and hotels in Hofuf and Al-Mubarraz.",
        ar: "إلى الواحة في الداخل: المطار والفنادق في الهفوف والمبرز.",
      },
    },
  ],

  cta: {
    eyebrow: { en: "Which Jubail?", ar: "أيّ جبيل؟" },
    heading: { en: "Request a Jubail transfer quotation", ar: "اطلب عرض سعر للتوصيل في الجبيل" },
    body: {
      en: "Where you start, whether you are going to the old town or the Industrial City, the address, the date and how many of you. We reply with a written price.",
      ar: "نقطة الانطلاق، ووجهتك بين الجبيل البلد والجبيل الصناعية، والعنوان، والتاريخ وعددكم. ونرد بسعر مكتوب.",
    },
    button: { en: "Get a Jubail quote", ar: "اطلب سعر التوصيل في الجبيل" },
  },
};
