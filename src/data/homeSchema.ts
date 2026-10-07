import { reviews } from "@/data/reviews";

const SITE = "https://istanbulparcaesyatasima.com";
const ORG_ID = `${SITE}/#organization`;

type Faq = { q: string; a: string };

function imageObject(path: string, caption: string, description: string, id = `${SITE}${path}#image`) {
  const url = `${SITE}${path}`;
  return {
    "@type": "ImageObject",
    "@id": id,
    url,
    contentUrl: url,
    caption,
    description,
    inLanguage: "tr-TR",
    license: `${SITE}/`,
    creditText: "Global Nakliyat",
    copyrightNotice: "© 2026 Global Nakliyat. Tüm hakları saklıdır.",
    acquireLicensePage: `${SITE}/iletisim`,
    creator: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "Global Nakliyat",
    },
  };
}

function offer(
  path: string,
  price: string,
  handling: [string, string],
  transit: [string, string]
) {
  const url = `${SITE}${path}`;
  return {
    "@type": "Offer",
    url,
    priceCurrency: "TRY",
    price,
    validFrom: "2026-01-01",
    priceValidUntil: "2027-12-31",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: {
      "@type": "Organization",
      name: "Global Nakliyat",
    },
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      applicableCountry: "TR",
      returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
    },
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingRate: {
        "@type": "MonetaryAmount",
        value: "0",
        currency: "TRY",
      },
      shippingDestination: {
        "@type": "DefinedRegion",
        addressCountry: "TR",
      },
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        handlingTime: {
          "@type": "QuantitativeValue",
          minValue: handling[0],
          maxValue: handling[1],
          unitCode: "d",
        },
        transitTime: {
          "@type": "QuantitativeValue",
          minValue: transit[0],
          maxValue: transit[1],
          unitCode: "d",
        },
        businessDays: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          cutoffTime: "20:00:00",
        },
      },
    },
  };
}

const products = [
  {
    position: 1,
    path: "/sehirler-arasi-parca-esya-tasima",
    name: "Parça Eşya Taşıma",
    image: "/images/tek-parca-esya-tasima.webp",
    sku: "GLB-1",
    price: "6000",
    handling: ["0", "1"] as [string, string],
    transit: ["1", "2"] as [string, string],
    description:
      "Parça eşya taşıma, evin tamamını boşaltmadan birkaç koli, beyaz eşya, koltuk veya yazlık parçasını İstanbul adresinden alıp yeni adrese teslim etme işidir. Global Nakliyat A.Ş. yükü ayrı bölmede tutar, tam kamyon ücreti yazmaz ve yalnızca kaplanan hacme göre fiyat çıkarır. İstanbul İzmir hattında başlangıç bedeli 6.000 TL'dir. Eşya araca bindiği andan teslim imzasına kadar sigorta dosyadadır.",
  },
  {
    position: 2,
    path: "/evden-eve-nakliyat",
    name: "Evden Eve Nakliyat",
    image: "/images/global-04-768x946.jpg",
    sku: "GLB-2",
    price: "10000",
    handling: ["0", "1"] as [string, string],
    transit: ["0", "1"] as [string, string],
    description:
      "Evden eve nakliyat, dairenin eşyasını söküp paketleyen, kapalı kasada taşıyan ve yeni evde kuran anahtar teslim iştir. Keşifte kat, asansör ve park yazılır. Beyaz eşya dik sabitlenir, kırılacaklar ayrı kolilenir. İstanbul içi işlerde alım ve teslim çoğu zaman aynı gün biter. Yayınlanan hat başlangıçları içinde en yüksek taban 10.000 TL'dir ve net rakam keşiften sonra kilitlenir.",
  },
  {
    position: 3,
    path: "/sehirler-arasi-nakliyat",
    name: "Şehirler Arası Nakliyat",
    image: "/images/global-nakliye.jpg",
    sku: "GLB-3",
    price: "4000",
    handling: ["0", "1"] as [string, string],
    transit: ["1", "3"] as [string, string],
    description:
      "Şehirler arası nakliyat, İstanbul çıkışlı yükün öz mal kapalı kasa araçla başka ile gitmesidir. Ankara hattında yayınlanan başlangıç 4.000 TL, süre bir ile iki gündür. Daha uzun sahil hatlarında süre iki ile üç güne çıkar. Yolda başka firmaya aktarma yapılmaz. Teslim saati bir gece önceden teyit edilir, liste teslimde birlikte sayılır.",
  },
  {
    position: 4,
    path: "/yazlik-esya-tasima",
    name: "Yazlık Eşya Taşıma",
    image: "/images/yazlik-esya-tasima.webp",
    sku: "GLB-4",
    price: "8500",
    handling: ["0", "1"] as [string, string],
    transit: ["2", "3"] as [string, string],
    description:
      "Yazlık eşya taşıma, sezonluk koltuk, beyaz eşya ve tekstilin İstanbul'dan Ege ve Akdeniz yazlıklarına gitmesidir. Bodrum hattında başlangıç 8.500 TL, süre iki ile üç gündür. Dar site yolu ve feribot saati planı baştan yazılır. Eşya ayrı sarılır, teslimde eksik kontrolü yapılır. Yaz haftalarında erken gün ayırtmak teslimi rahatlatır.",
  },
  {
    position: 5,
    path: "/ogrenci-esyasi-tasima",
    name: "Öğrenci Eşyası Taşıma",
    image: "/images/ogrenci-esyasi-tasima.webp",
    sku: "GLB-5",
    price: "7000",
    handling: ["0", "2"] as [string, string],
    transit: ["1", "2"] as [string, string],
    description:
      "Öğrenci eşyası taşıma, valiz, çalışma masası, baza ve birkaç kolinin yurt ya da öğrenci evine gitmesidir. Çeşme hattında yayınlanan başlangıç 7.000 TL'dir. Tam araç tutulmaz. Asansörsüz kat baştan söylenirse ekip doğru kişi sayısıyla gelir. Koliler numaralanır ve teslimde sayılır.",
  },
  {
    position: 6,
    path: "/ceyiz-esyasi-tasima",
    name: "Çeyiz Eşyası Taşıma",
    image: "/images/ceyiz-esyasi-tasima.webp",
    sku: "GLB-6",
    price: "9500",
    handling: ["1", "2"] as [string, string],
    transit: ["2", "3"] as [string, string],
    description:
      "Çeyiz eşyası taşıma, züccaciye, camlı vitrin ve yeni ev mobilyasının özel ambalajla gitmesidir. Marmaris hattında başlangıç 9.500 TL, süre iki ile üç gündür. Kırılacak parçalar ayrı kolilenir, köşeler korunur, mobilya teslimde kurulur. Sigorta kapsamı yola çıkmadan anlatılır.",
  },
];

export function buildHomeSchema(faqs: Faq[]) {
  const images = [
    imageObject(
      "/images/hero-parca-esya-tasima.webp",
      "İstanbul Parça Eşya Taşıma",
      "İstanbul Parça Eşya Taşıma - Global Nakliyat görsel 1",
      `${SITE}/#primaryimage`
    ),
    imageObject(
      "/images/tek-parca-esya-tasima.webp",
      "Parça Eşya Taşıma - görsel 2",
      "Global Nakliyat tek parça eşya taşıma görseli 2"
    ),
    imageObject(
      "/images/global-04-768x946.jpg",
      "Evden Eve Nakliyat - görsel 3",
      "Global Nakliyat evden eve nakliyat görseli 3"
    ),
    imageObject(
      "/images/global-nakliye.jpg",
      "Şehirler Arası Nakliyat - görsel 4",
      "Global Nakliyat şehirler arası nakliyat görseli 4"
    ),
    imageObject(
      "/images/yazlik-esya-tasima.webp",
      "Yazlık Eşya Taşıma - görsel 5",
      "Global Nakliyat yazlık eşya taşıma görseli 5"
    ),
    imageObject(
      "/images/ogrenci-esyasi-tasima.webp",
      "Öğrenci Eşyası Taşıma - görsel 6",
      "Global Nakliyat öğrenci eşyası taşıma görseli 6"
    ),
    imageObject(
      "/images/ceyiz-esyasi-tasima.webp",
      "Çeyiz Eşyası Taşıma - görsel 7",
      "Global Nakliyat çeyiz eşyası taşıma görseli 7"
    ),
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: "Global Nakliyat",
        url: SITE,
        logo: {
          "@type": "ImageObject",
          url: `${SITE}/images/logo-global-1.png`,
          width: 1222,
          height: 267,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+905324948006",
          contactType: "customer service",
          areaServed: "TR",
          availableLanguage: "Turkish",
        },
        sameAs: ["https://globalnakliyat.com.tr/"],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE}/#localbusiness`,
        name: "Global Nakliyat",
        url: SITE,
        telephone: "+905324948006",
        image: `${SITE}/images/end-global-nakliyat.png`,
        priceRange: "₺₺",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Feyzullah Mahallesi, Yunus Emre Caddesi, Lale Apt. No: 10/5",
          addressLocality: "Maltepe",
          addressRegion: "İstanbul",
          postalCode: "34843",
          addressCountry: "TR",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: String(reviews.length),
          bestRating: "5",
          worstRating: "1",
        },
        review: reviews.map((review) => ({
          "@type": "Review",
          author: {
            "@type": "Person",
            name: review.name,
          },
          datePublished: review.iso,
          reviewBody: review.text,
          reviewRating: {
            "@type": "Rating",
            bestRating: "5",
            worstRating: "1",
            ratingValue: "5",
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: SITE,
        name: "Global Nakliyat",
        description:
          "Şehirler arası parça eşya taşıma, çeyiz ve öğrenci eşyası taşımacılığı. İstanbul çıkışlı Ege ve Akdeniz rotalarında sigortalı, güvenli ve ekonomik parsiyel nakliyat.",
        publisher: { "@id": ORG_ID },
        inLanguage: "tr-TR",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE}/?s={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE}/#webpage`,
        url: SITE,
        name: "İstanbul Parça Eşya Taşımacılığı - Global Nakliyat A.Ş",
        description:
          "İstanbul Parça Eşya Taşıma Şirketi Global Nakliyat, az miktardaki eşyalarınızı uygun araçlarla adresinizden alarak güvenli şekilde yeni adresinize taşır.",
        isPartOf: { "@id": `${SITE}/#website` },
        about: { "@id": ORG_ID },
        inLanguage: "tr-TR",
        primaryImageOfPage: { "@id": `${SITE}/#primaryimage` },
        breadcrumb: { "@id": `${SITE}/#breadcrumb` },
      },
      ...images,
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Ana Sayfa",
            item: `${SITE}/`,
          },
        ],
      },
      {
        "@type": "ItemList",
        numberOfItems: products.length,
        itemListElement: products.map((product) => ({
          "@type": "ListItem",
          position: product.position,
          item: {
            "@type": "Product",
            "@id": `${SITE}${product.path}#product`,
            name: product.name,
            image: { "@id": `${SITE}${product.image}#image` },
            description: product.description,
            brand: {
              "@type": "Brand",
              name: "Global Nakliyat",
            },
            url: `${SITE}${product.path}`,
            sku: product.sku,
            mpn: product.sku,
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: String(reviews.length),
              bestRating: "5",
              worstRating: "1",
            },
            offers: offer(product.path, product.price, product.handling, product.transit),
          },
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };
}
