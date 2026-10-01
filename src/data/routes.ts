export interface FAQ {
  question: string;
  answer: string;
}

export interface RouteData {
  slug: string;
  city: string;
  cityFrom: string;
  region: string;
  regionSlug: string;
  distance: string;
  duration: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  introText: string;
  faqs: FAQ[];
}

// Tüm rotalar için FAQ oluşturucu
function generateFAQs(cityFrom: string, cityTo: string, distance: string, duration: string): FAQ[] {
  return [
    {
      question: `${cityFrom} ${cityTo} parça eşya taşıma fiyatları ne kadar?`,
      answer: `${cityFrom} ${cityTo} parça eşya taşıma fiyatları, taşınacak eşyanın boyutu, ağırlığı ve adedi gibi faktörlere göre belirlenir. ${distance} mesafedeki bu rota için en uygun fiyat teklifini almak adına bizimle iletişime geçebilirsiniz. Global Nakliyat olarak ekonomik ve şeffaf fiyatlandırma sunuyoruz.`
    },
    {
      question: `${cityFrom} ${cityTo} parsiyel taşıma nasıl yapılır?`,
      answer: `${cityFrom} ${cityTo} parsiyel taşıma hizmetimizde eşyalarınız önce profesyonel ekibimiz tarafından özenle paketlenir. Ardından güvenli araçlarımızla ${cityTo} adresinize taşınır. Tüm süreç sigortalı ve takip edilebilir şekilde gerçekleşir.`
    },
    {
      question: `${cityFrom} ${cityTo} arası parsiyel taşıma kaç gün sürer?`,
      answer: `${cityFrom} ${cityTo} arası parsiyel taşıma genellikle ${duration} arasında tamamlanır. ${distance} mesafedeki bu rotada, eşyalarınızın güvenliği önceliğimizdir. Kesin teslimat süresi için planlama ekibimizle görüşebilirsiniz.`
    },
    {
      question: `${cityFrom} ${cityTo} parça eşya nakliyesi güvenli mi?`,
      answer: `Evet, ${cityFrom} ${cityTo} parça eşya nakliyesi hizmetimiz tamamen sigortalıdır. 1992'den beri sektörde olan Global Nakliyat, profesyonel paketleme malzemeleri ve deneyimli ekibiyle eşyalarınızın güvenliğini garanti eder.`
    },
    {
      question: `${cityFrom} ${cityTo} parsiyel nakliyat için minimum eşya sayısı var mı?`,
      answer: `Hayır, ${cityFrom} ${cityTo} parsiyel nakliyat hizmetimizde minimum eşya sayısı şartı yoktur. Tek bir parça eşyanızı bile ${cityTo} adresinize güvenle taşıyoruz. Bu hizmet tam kamyon yükü gerektirmeyen taşımalar için idealdir.`
    },
    {
      question: `${cityFrom} ${cityTo} parsiyel eşya taşıma sigortası var mı?`,
      answer: `Evet, ${cityFrom} ${cityTo} parsiyel eşya taşıma hizmetimizde tüm eşyalarınız sigorta kapsamındadır. Taşıma sürecinde oluşabilecek her türlü hasara karşı eşyalarınız güvence altındadır.`
    },
    {
      question: `${cityFrom}'dan ${cityTo}'a tek parça eşya taşınır mı?`,
      answer: `Evet, ${cityFrom}'dan ${cityTo}'a tek parça eşya taşıma hizmeti sunuyoruz. Koltuk, çamaşır makinesi, buzdolabı gibi tek parça eşyalarınızı bile güvenle taşıyoruz. Parsiyel taşıma sistemiyle ekonomik çözümler sunuyoruz.`
    },
    {
      question: `${cityFrom} ${cityTo} parça eşya taşıma fiyatları neye göre belirlenir?`,
      answer: `${cityFrom} ${cityTo} parça eşya taşıma fiyatları; eşya boyutu, ağırlığı, adedi, kat durumu ve teslimat zamanlamasına göre belirlenir. ${distance} mesafe de fiyatı etkileyen faktörlerdendir. Ücretsiz keşif hizmetimizle net fiyat teklifi alabilirsiniz.`
    }
  ];
}

export const routes: RouteData[] = [
  // ============================================
  // MARMARA & GÜNEY MARMARA BÖLGESİ (6 rota)
  // ============================================
  {
    slug: "istanbul-erdek-parca-esya-tasima",
    city: "Erdek",
    cityFrom: "İstanbul",
    region: "Marmara",
    regionSlug: "marmara",
    distance: "290 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Erdek Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Erdek parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Erdek arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Erdek Parça Eşya Taşıma",
    introText: "İstanbul Erdek parça eşya taşıma hizmetimizle, Marmara Denizi'nin incisi Erdek'e eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak 1992'den beri sunduğumuz parsiyel taşıma hizmetiyle, tam kamyon yükü gerektirmeyen eşyalarınızı ekonomik ve güvenli şekilde Erdek'e ulaştırıyoruz. İstanbul Erdek arası parsiyel taşıma sürecinde profesyonel paketleme, sigortalı sevkiyat ve kapıda teslimat hizmeti sunuyoruz. İstanbul Erdek parça eşya nakliyesi için hemen bizimle iletişime geçin.",
    faqs: generateFAQs("İstanbul", "Erdek", "290 km", "1-2 gün")
  },
  {
    slug: "istanbul-bandirma-parca-esya-tasima",
    city: "Bandırma",
    cityFrom: "İstanbul",
    region: "Marmara",
    regionSlug: "marmara",
    distance: "250 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Bandırma Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Bandırma parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Bandırma arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Bandırma Parça Eşya Taşıma",
    introText: "İstanbul Bandırma parça eşya taşıma hizmetimizle, Güney Marmara'nın önemli liman şehri Bandırma'ya eşyalarınızı güvenle ulaştırıyoruz. Global Nakliyat olarak İstanbul Bandırma parsiyel taşıma rotasında düzenli seferlerimizle ekonomik ve hızlı çözümler sunuyoruz. İstanbul Bandırma arası parsiyel taşıma hizmetimizde eşyalarınız profesyonelce paketlenir ve sigortalı olarak taşınır. İstanbul Bandırma parça eşya nakliyesi için uygun fiyat teklifimizi almak adına hemen arayın.",
    faqs: generateFAQs("İstanbul", "Bandırma", "250 km", "1-2 gün")
  },
  {
    slug: "istanbul-gonen-parca-esya-tasima",
    city: "Gönen",
    cityFrom: "İstanbul",
    region: "Marmara",
    regionSlug: "marmara",
    distance: "310 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Gönen Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Gönen parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Gönen arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Gönen Parça Eşya Taşıma",
    introText: "İstanbul Gönen parça eşya taşıma hizmetimizle, kaplıcalarıyla ünlü Gönen'e eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Gönen parsiyel taşıma hizmetinde deneyimli ekibimiz ve modern filomuzla yanınızdayız. İstanbul Gönen arası parsiyel taşıma sürecinde her eşyanız özenle paketlenir ve sigortalı olarak taşınır. İstanbul Gönen parça eşya nakliyesi için en uygun fiyat teklifini hemen alın.",
    faqs: generateFAQs("İstanbul", "Gönen", "310 km", "1-2 gün")
  },
  {
    slug: "istanbul-balikesir-parca-esya-tasima",
    city: "Balıkesir",
    cityFrom: "İstanbul",
    region: "Marmara",
    regionSlug: "marmara",
    distance: "330 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Balıkesir Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Balıkesir parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Balıkesir arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Balıkesir Parça Eşya Taşıma",
    introText: "İstanbul Balıkesir parça eşya taşıma hizmetimizle, Güney Marmara'nın merkez şehri Balıkesir'e eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Balıkesir parsiyel taşıma rotasında yıllardır kesintisiz hizmet veriyoruz. İstanbul Balıkesir arası parsiyel taşıma sürecinde profesyonel paketleme ve sigortalı sevkiyat standartlarımızla eşyalarınız güvende. İstanbul Balıkesir parça eşya nakliyesi için hemen ücretsiz teklif alın.",
    faqs: generateFAQs("İstanbul", "Balıkesir", "330 km", "1-2 gün")
  },
  {
    slug: "istanbul-burhaniye-parca-esya-tasima",
    city: "Burhaniye",
    cityFrom: "İstanbul",
    region: "Marmara",
    regionSlug: "marmara",
    distance: "400 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Burhaniye Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Burhaniye parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Burhaniye arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Burhaniye Parça Eşya Taşıma",
    introText: "İstanbul Burhaniye parça eşya taşıma hizmetimizle, Ege'nin güzel kıyı kasabası Burhaniye'ye eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Burhaniye parsiyel taşıma hizmetinde yılların tecrübesiyle yanınızdayız. İstanbul Burhaniye arası parsiyel taşıma sürecinde eşyalarınız profesyonel ekibimiz tarafından paketlenir ve sigortalı olarak taşınır. İstanbul Burhaniye parça eşya nakliyesi için ekonomik fiyat teklifimizi hemen alın.",
    faqs: generateFAQs("İstanbul", "Burhaniye", "400 km", "1-2 gün")
  },
  {
    slug: "istanbul-edremit-parca-esya-tasima",
    city: "Edremit",
    cityFrom: "İstanbul",
    region: "Marmara",
    regionSlug: "marmara",
    distance: "380 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Edremit Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Edremit parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Edremit arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Edremit Parça Eşya Taşıma",
    introText: "İstanbul Edremit parça eşya taşıma hizmetimizle, Kaz Dağları'nın eteklerindeki Edremit'e eşyalarınızı güvenle ulaştırıyoruz. Global Nakliyat olarak İstanbul Edremit parsiyel taşıma hizmetinde düzenli seferler düzenliyoruz. İstanbul Edremit arası parsiyel taşıma sürecinde eşyalarınız özenle paketlenir ve sigortalı araçlarımızla taşınır. İstanbul Edremit parça eşya nakliyesi için uygun fiyat teklifimizi almak adına hemen arayın.",
    faqs: generateFAQs("İstanbul", "Edremit", "380 km", "1-2 gün")
  },

  // ============================================
  // ÇANAKKALE BÖLGESİ (4 rota)
  // ============================================
  {
    slug: "istanbul-canakkale-parca-esya-tasima",
    city: "Çanakkale",
    cityFrom: "İstanbul",
    region: "Çanakkale",
    regionSlug: "canakkale",
    distance: "320 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Çanakkale Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Çanakkale parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Çanakkale arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Çanakkale Parça Eşya Taşıma",
    introText: "İstanbul Çanakkale parça eşya taşıma hizmetimizle, tarihi ve doğal güzellikleriyle ünlü Çanakkale'ye eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Çanakkale parsiyel taşıma rotasında düzenli seferlerimizle ekonomik çözümler sunuyoruz. İstanbul Çanakkale arası parsiyel taşıma hizmetimizde eşyalarınız profesyonel paketleme ile korunur ve sigortalı olarak taşınır. İstanbul Çanakkale parça eşya nakliyesi için hemen teklif alın.",
    faqs: generateFAQs("İstanbul", "Çanakkale", "320 km", "1-2 gün")
  },
  {
    slug: "istanbul-gelibolu-parca-esya-tasima",
    city: "Gelibolu",
    cityFrom: "İstanbul",
    region: "Çanakkale",
    regionSlug: "canakkale",
    distance: "260 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Gelibolu Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Gelibolu parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Gelibolu arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Gelibolu Parça Eşya Taşıma",
    introText: "İstanbul Gelibolu parça eşya taşıma hizmetimizle, tarihi yarımadanın kalbindeki Gelibolu'ya eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Gelibolu parsiyel taşıma hizmetinde güvenilir ve ekonomik çözümler sunuyoruz. İstanbul Gelibolu arası parsiyel taşıma sürecinde eşyalarınız uzman ekibimiz tarafından paketlenir ve sigortalı olarak taşınır. İstanbul Gelibolu parça eşya nakliyesi için uygun fiyat teklifimizi alın.",
    faqs: generateFAQs("İstanbul", "Gelibolu", "260 km", "1-2 gün")
  },
  {
    slug: "istanbul-bozcaada-parca-esya-tasima",
    city: "Bozcaada",
    cityFrom: "İstanbul",
    region: "Çanakkale",
    regionSlug: "canakkale",
    distance: "340 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Bozcaada Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Bozcaada parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Bozcaada arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Bozcaada Parça Eşya Taşıma",
    introText: "İstanbul Bozcaada parça eşya taşıma hizmetimizle, Ege'nin en güzel adasına eşyalarınızı güvenle ulaştırıyoruz. Global Nakliyat olarak İstanbul Bozcaada parsiyel taşıma hizmetinde feribot koordinasyonu dahil tüm lojistik süreçleri yönetiyoruz. İstanbul Bozcaada arası parsiyel taşıma sürecinde ada ulaşımına uygun paketleme ve taşıma planı oluşturuyoruz. İstanbul Bozcaada parça eşya nakliyesi için hemen arayın.",
    faqs: generateFAQs("İstanbul", "Bozcaada", "340 km", "2-3 gün")
  },
  {
    slug: "istanbul-gokceada-parca-esya-tasima",
    city: "Gökçeada",
    cityFrom: "İstanbul",
    region: "Çanakkale",
    regionSlug: "canakkale",
    distance: "360 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Gökçeada Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Gökçeada parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Gökçeada arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Gökçeada Parça Eşya Taşıma",
    introText: "İstanbul Gökçeada parça eşya taşıma hizmetimizle, Türkiye'nin en büyük adası Gökçeada'ya eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Gökçeada parsiyel taşıma hizmetinde feribot ve kara taşımacılığını koordineli yönetiyoruz. İstanbul Gökçeada arası parsiyel taşıma sürecinde ada koşullarına uygun özel paketleme yapıyoruz. İstanbul Gökçeada parça eşya nakliyesi için teklif almak adına hemen bizimle iletişime geçin.",
    faqs: generateFAQs("İstanbul", "Gökçeada", "360 km", "2-3 gün")
  },

  // ============================================
  // KUZEY EGE - BALIKESİR KIYILARI (4 rota)
  // ============================================
  {
    slug: "istanbul-ayvalik-parca-esya-tasima",
    city: "Ayvalık",
    cityFrom: "İstanbul",
    region: "Kuzey Ege",
    regionSlug: "kuzey-ege",
    distance: "430 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Ayvalık Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Ayvalık parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Ayvalık arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Ayvalık Parça Eşya Taşıma",
    introText: "İstanbul Ayvalık parça eşya taşıma hizmetimizle, zeytinlikleri ve taş evleriyle ünlü Ayvalık'a eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Ayvalık parsiyel taşıma rotasında düzenli seferler düzenliyoruz. İstanbul Ayvalık arası parsiyel taşıma sürecinde eşyalarınız uzman ekibimizce paketlenir ve sigortalı taşınır. İstanbul Ayvalık parça eşya nakliyesi için ekonomik fiyat teklifimizi hemen alın.",
    faqs: generateFAQs("İstanbul", "Ayvalık", "430 km", "1-2 gün")
  },
  {
    slug: "istanbul-altinoluk-parca-esya-tasima",
    city: "Altınoluk",
    cityFrom: "İstanbul",
    region: "Kuzey Ege",
    regionSlug: "kuzey-ege",
    distance: "390 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Altınoluk Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Altınoluk parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Altınoluk arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Altınoluk Parça Eşya Taşıma",
    introText: "İstanbul Altınoluk parça eşya taşıma hizmetimizle, Kaz Dağları'nın eteğindeki tatil beldesine eşyalarınızı güvenle ulaştırıyoruz. Global Nakliyat olarak İstanbul Altınoluk parsiyel taşıma hizmetinde profesyonel ve ekonomik çözümler sunuyoruz. İstanbul Altınoluk arası parsiyel taşıma sürecinde her eşyanız özenle paketlenir ve güvenle taşınır. İstanbul Altınoluk parça eşya nakliyesi için hemen arayın.",
    faqs: generateFAQs("İstanbul", "Altınoluk", "390 km", "1-2 gün")
  },
  {
    slug: "istanbul-akcay-parca-esya-tasima",
    city: "Akçay",
    cityFrom: "İstanbul",
    region: "Kuzey Ege",
    regionSlug: "kuzey-ege",
    distance: "385 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Akçay Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Akçay parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Akçay arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Akçay Parça Eşya Taşıma",
    introText: "İstanbul Akçay parça eşya taşıma hizmetimizle, Edremit Körfezi'nin popüler sahil beldesine eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Akçay parsiyel taşıma hizmetinde yılların deneyimiyle yanınızdayız. İstanbul Akçay arası parsiyel taşıma sürecinde sigortalı ve profesyonel hizmet sunuyoruz. İstanbul Akçay parça eşya nakliyesi için uygun fiyat teklifini hemen alın.",
    faqs: generateFAQs("İstanbul", "Akçay", "385 km", "1-2 gün")
  },
  {
    slug: "istanbul-kucukkuyu-parca-esya-tasima",
    city: "Küçükkuyu",
    cityFrom: "İstanbul",
    region: "Kuzey Ege",
    regionSlug: "kuzey-ege",
    distance: "370 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Küçükkuyu Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Küçükkuyu parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Küçükkuyu arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Küçükkuyu Parça Eşya Taşıma",
    introText: "İstanbul Küçükkuyu parça eşya taşıma hizmetimizle, Assos yakınlarındaki şirin sahil kasabasına eşyalarınızı güvenle ulaştırıyoruz. Global Nakliyat olarak İstanbul Küçükkuyu parsiyel taşıma hizmetinde titiz ve güvenilir hizmet anlayışımızla fark yaratıyoruz. İstanbul Küçükkuyu arası parsiyel taşıma sürecinde eşyalarınız özenle paketlenir ve sigortalı taşınır. İstanbul Küçükkuyu parça eşya nakliyesi için hemen arayın.",
    faqs: generateFAQs("İstanbul", "Küçükkuyu", "370 km", "1-2 gün")
  },

  // ============================================
  // İZMİR BÖLGESİ (10 rota)
  // ============================================
  {
    slug: "istanbul-izmir-parca-esya-tasima",
    city: "İzmir",
    cityFrom: "İstanbul",
    region: "İzmir",
    regionSlug: "izmir",
    distance: "480 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul İzmir Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul İzmir parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul İzmir arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul İzmir Parça Eşya Taşıma",
    introText: "İstanbul İzmir parça eşya taşıma hizmetimizle, Ege'nin başkenti İzmir'e eşyalarınızı güvenle ve ekonomik olarak taşıyoruz. Global Nakliyat olarak İstanbul İzmir parsiyel taşıma rotasında her hafta düzenli seferler düzenliyoruz. 1992'den beri bu rotada binlerce başarılı taşıma gerçekleştirdik. İstanbul İzmir arası parsiyel taşıma hizmetimizde profesyonel paketleme, sigortalı sevkiyat ve kapıda teslimat standartlarımızla eşyalarınız güvende. İstanbul İzmir parça eşya nakliyesi için en uygun fiyat teklifini hemen alın.",
    faqs: generateFAQs("İstanbul", "İzmir", "480 km", "1-2 gün")
  },
  {
    slug: "istanbul-cesme-parca-esya-tasima",
    city: "Çeşme",
    cityFrom: "İstanbul",
    region: "İzmir",
    regionSlug: "izmir",
    distance: "570 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Çeşme Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Çeşme parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Çeşme arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Çeşme Parça Eşya Taşıma",
    introText: "İstanbul Çeşme parça eşya taşıma hizmetimizle, Ege'nin en gözde tatil destinasyonu Çeşme'ye eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Çeşme parsiyel taşıma hizmetinde yazlık ev ve villa taşımacılığında uzmanız. İstanbul Çeşme arası parsiyel taşıma sürecinde her eşyanız özenle paketlenir ve sigortalı olarak taşınır. İstanbul Çeşme parça eşya nakliyesi için hemen teklif alın.",
    faqs: generateFAQs("İstanbul", "Çeşme", "570 km", "1-2 gün")
  },
  {
    slug: "istanbul-alacati-parca-esya-tasima",
    city: "Alaçatı",
    cityFrom: "İstanbul",
    region: "İzmir",
    regionSlug: "izmir",
    distance: "560 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Alaçatı Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Alaçatı parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Alaçatı arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Alaçatı Parça Eşya Taşıma",
    introText: "İstanbul Alaçatı parça eşya taşıma hizmetimizle, rüzgar sörfü ve butik otelleriyle ünlü Alaçatı'ya eşyalarınızı güvenle ulaştırıyoruz. Global Nakliyat olarak İstanbul Alaçatı parsiyel taşıma hizmetinde dar sokaklara uygun taşıma planlaması yapıyoruz. İstanbul Alaçatı arası parsiyel taşıma sürecinde profesyonel ekibimizle yanınızdayız. İstanbul Alaçatı parça eşya nakliyesi için hemen arayın.",
    faqs: generateFAQs("İstanbul", "Alaçatı", "560 km", "1-2 gün")
  },
  {
    slug: "istanbul-urla-parca-esya-tasima",
    city: "Urla",
    cityFrom: "İstanbul",
    region: "İzmir",
    regionSlug: "izmir",
    distance: "530 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Urla Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Urla parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Urla arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Urla Parça Eşya Taşıma",
    introText: "İstanbul Urla parça eşya taşıma hizmetimizle, bağ evleri ve sakin yaşam tarzıyla bilinen Urla'ya eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Urla parsiyel taşıma hizmetinde titiz ve profesyonel hizmet sunuyoruz. İstanbul Urla arası parsiyel taşıma sürecinde eşyalarınız özenle paketlenir ve sigortalı olarak taşınır. İstanbul Urla parça eşya nakliyesi için uygun fiyat teklifimizi alın.",
    faqs: generateFAQs("İstanbul", "Urla", "530 km", "1-2 gün")
  },
  {
    slug: "istanbul-seferihisar-parca-esya-tasima",
    city: "Seferihisar",
    cityFrom: "İstanbul",
    region: "İzmir",
    regionSlug: "izmir",
    distance: "540 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Seferihisar Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Seferihisar parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Seferihisar arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Seferihisar Parça Eşya Taşıma",
    introText: "İstanbul Seferihisar parça eşya taşıma hizmetimizle, Türkiye'nin ilk Cittaslow şehrine eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Seferihisar parsiyel taşıma hizmetinde deneyimli ekibimizle yanınızdayız. İstanbul Seferihisar arası parsiyel taşıma sürecinde her eşyanız profesyonelce paketlenir ve sigortalı taşınır. İstanbul Seferihisar parça eşya nakliyesi için hemen teklif alın.",
    faqs: generateFAQs("İstanbul", "Seferihisar", "540 km", "1-2 gün")
  },
  {
    slug: "istanbul-foca-parca-esya-tasima",
    city: "Foça",
    cityFrom: "İstanbul",
    region: "İzmir",
    regionSlug: "izmir",
    distance: "500 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Foça Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Foça parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Foça arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Foça Parça Eşya Taşıma",
    introText: "İstanbul Foça parça eşya taşıma hizmetimizle, antik limanı ve doğal güzellikleriyle ünlü Foça'ya eşyalarınızı güvenle ulaştırıyoruz. Global Nakliyat olarak İstanbul Foça parsiyel taşıma hizmetinde ekonomik ve güvenilir çözümler sunuyoruz. İstanbul Foça arası parsiyel taşıma sürecinde eşyalarınız uzman ekibimiz tarafından özenle taşınır. İstanbul Foça parça eşya nakliyesi için hemen arayın.",
    faqs: generateFAQs("İstanbul", "Foça", "500 km", "1-2 gün")
  },
  {
    slug: "istanbul-dikili-parca-esya-tasima",
    city: "Dikili",
    cityFrom: "İstanbul",
    region: "İzmir",
    regionSlug: "izmir",
    distance: "460 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Dikili Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Dikili parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Dikili arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Dikili Parça Eşya Taşıma",
    introText: "İstanbul Dikili parça eşya taşıma hizmetimizle, termal turizmiyle bilinen Dikili'ye eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Dikili parsiyel taşıma hizmetinde profesyonel ve titiz hizmet anlayışımızla fark yaratıyoruz. İstanbul Dikili arası parsiyel taşıma sürecinde sigortalı ve güvenli taşıma garantisi sunuyoruz. İstanbul Dikili parça eşya nakliyesi için uygun fiyat teklifini alın.",
    faqs: generateFAQs("İstanbul", "Dikili", "460 km", "1-2 gün")
  },
  {
    slug: "istanbul-bergama-parca-esya-tasima",
    city: "Bergama",
    cityFrom: "İstanbul",
    region: "İzmir",
    regionSlug: "izmir",
    distance: "450 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Bergama Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Bergama parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Bergama arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Bergama Parça Eşya Taşıma",
    introText: "İstanbul Bergama parça eşya taşıma hizmetimizle, UNESCO Dünya Mirası listesindeki antik kent Bergama'ya eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Bergama parsiyel taşıma rotasında güvenilir ve ekonomik hizmet veriyoruz. İstanbul Bergama arası parsiyel taşıma sürecinde eşyalarınız profesyonelce paketlenir ve sigortalı olarak taşınır. İstanbul Bergama parça eşya nakliyesi için hemen teklif alın.",
    faqs: generateFAQs("İstanbul", "Bergama", "450 km", "1-2 gün")
  },
  {
    slug: "istanbul-selcuk-parca-esya-tasima",
    city: "Selçuk",
    cityFrom: "İstanbul",
    region: "İzmir",
    regionSlug: "izmir",
    distance: "530 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Selçuk Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Selçuk parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Selçuk arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Selçuk Parça Eşya Taşıma",
    introText: "İstanbul Selçuk parça eşya taşıma hizmetimizle, Efes Antik Kenti'nin yanı başındaki Selçuk'a eşyalarınızı güvenle ulaştırıyoruz. Global Nakliyat olarak İstanbul Selçuk parsiyel taşıma hizmetinde yılların tecrübesiyle hizmet veriyoruz. İstanbul Selçuk arası parsiyel taşıma sürecinde her eşyanız özenle paketlenir ve sigortalı olarak taşınır. İstanbul Selçuk parça eşya nakliyesi için hemen arayın.",
    faqs: generateFAQs("İstanbul", "Selçuk", "530 km", "1-2 gün")
  },
  {
    slug: "istanbul-kusadasi-parca-esya-tasima",
    city: "Kuşadası",
    cityFrom: "İstanbul",
    region: "İzmir",
    regionSlug: "izmir",
    distance: "540 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Kuşadası Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Kuşadası parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Kuşadası arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Kuşadası Parça Eşya Taşıma",
    introText: "İstanbul Kuşadası parça eşya taşıma hizmetimizle, Ege'nin en popüler tatil ve yerleşim merkezlerinden Kuşadası'na eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Kuşadası parsiyel taşıma rotasında düzenli seferler düzenliyoruz. İstanbul Kuşadası arası parsiyel taşıma sürecinde yazlık ev ve villa taşımacılığında da uzman hizmet sunuyoruz. İstanbul Kuşadası parça eşya nakliyesi için ekonomik teklifimizi alın.",
    faqs: generateFAQs("İstanbul", "Kuşadası", "540 km", "1-2 gün")
  },

  // ============================================
  // AYDIN BÖLGESİ (6 rota)
  // ============================================
  {
    slug: "istanbul-aydin-parca-esya-tasima",
    city: "Aydın",
    cityFrom: "İstanbul",
    region: "Aydın",
    regionSlug: "aydin",
    distance: "540 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Aydın Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Aydın parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Aydın arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Aydın Parça Eşya Taşıma",
    introText: "İstanbul Aydın parça eşya taşıma hizmetimizle, incir ve zeytin diyarı Aydın'a eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Aydın parsiyel taşıma hizmetinde düzenli seferlerimiz ve profesyonel ekibimizle yanınızdayız. İstanbul Aydın arası parsiyel taşıma sürecinde her eşyanız sigortalı olarak taşınır. İstanbul Aydın parça eşya nakliyesi için uygun fiyat teklifini alın.",
    faqs: generateFAQs("İstanbul", "Aydın", "540 km", "1-2 gün")
  },
  {
    slug: "istanbul-didim-parca-esya-tasima",
    city: "Didim",
    cityFrom: "İstanbul",
    region: "Aydın",
    regionSlug: "aydin",
    distance: "590 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Didim Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Didim parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Didim arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Didim Parça Eşya Taşıma",
    introText: "İstanbul Didim parça eşya taşıma hizmetimizle, Apollon Tapınağı'nın ve Altınkum plajının şehri Didim'e eşyalarınızı güvenle ulaştırıyoruz. Global Nakliyat olarak İstanbul Didim parsiyel taşıma hizmetinde yazlık ve müstakil ev taşımacılığında uzmanız. İstanbul Didim arası parsiyel taşıma sürecinde profesyonel paketleme ve sigortalı taşıma hizmeti sunuyoruz. İstanbul Didim parça eşya nakliyesi için ekonomik teklifimizi hemen alın.",
    faqs: generateFAQs("İstanbul", "Didim", "590 km", "1-2 gün")
  },
  {
    slug: "istanbul-soke-parca-esya-tasima",
    city: "Söke",
    cityFrom: "İstanbul",
    region: "Aydın",
    regionSlug: "aydin",
    distance: "560 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Söke Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Söke parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Söke arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Söke Parça Eşya Taşıma",
    introText: "İstanbul Söke parça eşya taşıma hizmetimizle, verimli Söke Ovası'nın merkezi Söke'ye eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Söke parsiyel taşıma hizmetinde güvenilir ve ekonomik çözümler sunuyoruz. İstanbul Söke arası parsiyel taşıma sürecinde eşyalarınız profesyonel ekibimiz tarafından özenle taşınır. İstanbul Söke parça eşya nakliyesi için hemen arayın.",
    faqs: generateFAQs("İstanbul", "Söke", "560 km", "1-2 gün")
  },
  {
    slug: "istanbul-nazilli-parca-esya-tasima",
    city: "Nazilli",
    cityFrom: "İstanbul",
    region: "Aydın",
    regionSlug: "aydin",
    distance: "570 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Nazilli Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Nazilli parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Nazilli arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Nazilli Parça Eşya Taşıma",
    introText: "İstanbul Nazilli parça eşya taşıma hizmetimizle, tekstil sanayi şehri Nazilli'ye eşyalarınızı güvenle ulaştırıyoruz. Global Nakliyat olarak İstanbul Nazilli parsiyel taşıma hizmetinde yılların tecrübesiyle hizmet veriyoruz. İstanbul Nazilli arası parsiyel taşıma sürecinde her eşyanız sigortalı ve güvenli şekilde taşınır. İstanbul Nazilli parça eşya nakliyesi için uygun fiyat teklifini alın.",
    faqs: generateFAQs("İstanbul", "Nazilli", "570 km", "1-2 gün")
  },
  {
    slug: "istanbul-tire-parca-esya-tasima",
    city: "Tire",
    cityFrom: "İstanbul",
    region: "Aydın",
    regionSlug: "aydin",
    distance: "520 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Tire Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Tire parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Tire arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Tire Parça Eşya Taşıma",
    introText: "İstanbul Tire parça eşya taşıma hizmetimizle, tarihi çarşısı ve doğal güzellikleriyle bilinen Tire'ye eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Tire parsiyel taşıma hizmetinde profesyonel ve ekonomik çözümler sunuyoruz. İstanbul Tire arası parsiyel taşıma sürecinde eşyalarınız özenle paketlenir ve sigortalı olarak taşınır. İstanbul Tire parça eşya nakliyesi için hemen teklif alın.",
    faqs: generateFAQs("İstanbul", "Tire", "520 km", "1-2 gün")
  },
  {
    slug: "istanbul-odemis-parca-esya-tasima",
    city: "Ödemiş",
    cityFrom: "İstanbul",
    region: "Aydın",
    regionSlug: "aydin",
    distance: "510 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Ödemiş Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Ödemiş parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Ödemiş arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Ödemiş Parça Eşya Taşıma",
    introText: "İstanbul Ödemiş parça eşya taşıma hizmetimizle, Bozdağ'ın eteklerindeki Ödemiş'e eşyalarınızı güvenle ulaştırıyoruz. Global Nakliyat olarak İstanbul Ödemiş parsiyel taşıma hizmetinde güvenilir ve titiz hizmet sunuyoruz. İstanbul Ödemiş arası parsiyel taşıma sürecinde eşyalarınız uzman ekibimiz tarafından paketlenir ve sigortalı taşınır. İstanbul Ödemiş parça eşya nakliyesi için hemen arayın.",
    faqs: generateFAQs("İstanbul", "Ödemiş", "510 km", "1-2 gün")
  },

  // ============================================
  // MUĞLA BÖLGESİ (14 rota)
  // ============================================
  {
    slug: "istanbul-mugla-parca-esya-tasima",
    city: "Muğla",
    cityFrom: "İstanbul",
    region: "Muğla",
    regionSlug: "mugla",
    distance: "680 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Muğla Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Muğla parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Muğla arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Muğla Parça Eşya Taşıma",
    introText: "İstanbul Muğla parça eşya taşıma hizmetimizle, Ege'nin ve Akdeniz'in buluştuğu Muğla'ya eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Muğla parsiyel taşıma rotasında düzenli seferler düzenliyoruz. İstanbul Muğla arası parsiyel taşıma sürecinde profesyonel paketleme ve sigortalı sevkiyat hizmeti sunuyoruz. İstanbul Muğla parça eşya nakliyesi için uygun fiyat teklifini alın.",
    faqs: generateFAQs("İstanbul", "Muğla", "680 km", "2-3 gün")
  },
  {
    slug: "istanbul-bodrum-parca-esya-tasima",
    city: "Bodrum",
    cityFrom: "İstanbul",
    region: "Muğla",
    regionSlug: "mugla",
    distance: "720 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Bodrum Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Bodrum parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Bodrum arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Bodrum Parça Eşya Taşıma",
    introText: "İstanbul Bodrum parça eşya taşıma hizmetimizle, Türk Rivierası'nın incisi Bodrum'a eşyalarınızı güvenle ulaştırıyoruz. Global Nakliyat olarak İstanbul Bodrum parsiyel taşıma hizmetinde villa, yazlık ve müstakil ev taşımacılığında uzmanız. 1992'den beri bu rotada binlerce başarılı taşıma gerçekleştirdik. İstanbul Bodrum arası parsiyel taşıma sürecinde her eşyanız özenle paketlenir ve sigortalı olarak taşınır. İstanbul Bodrum parça eşya nakliyesi için hemen teklif alın.",
    faqs: generateFAQs("İstanbul", "Bodrum", "720 km", "2-3 gün")
  },
  {
    slug: "istanbul-marmaris-parca-esya-tasima",
    city: "Marmaris",
    cityFrom: "İstanbul",
    region: "Muğla",
    regionSlug: "mugla",
    distance: "790 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Marmaris Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Marmaris parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Marmaris arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Marmaris Parça Eşya Taşıma",
    introText: "İstanbul Marmaris parça eşya taşıma hizmetimizle, muhteşem koyu ve marina yaşamıyla ünlü Marmaris'e eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Marmaris parsiyel taşıma hizmetinde deneyimli ekibimiz ve modern filomuzla hizmet veriyoruz. İstanbul Marmaris arası parsiyel taşıma sürecinde profesyonel paketleme ve sigortalı sevkiyat standartlarımızla eşyalarınız güvende. İstanbul Marmaris parça eşya nakliyesi için hemen arayın.",
    faqs: generateFAQs("İstanbul", "Marmaris", "790 km", "2-3 gün")
  },
  {
    slug: "istanbul-fethiye-parca-esya-tasima",
    city: "Fethiye",
    cityFrom: "İstanbul",
    region: "Muğla",
    regionSlug: "mugla",
    distance: "800 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Fethiye Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Fethiye parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Fethiye arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Fethiye Parça Eşya Taşıma",
    introText: "İstanbul Fethiye parça eşya taşıma hizmetimizle, Ölüdeniz ve Kelebekler Vadisi'nin şehri Fethiye'ye eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Fethiye parsiyel taşıma rotasında düzenli seferlerimizle hizmet veriyoruz. İstanbul Fethiye arası parsiyel taşıma sürecinde her eşyanız özenle paketlenir ve sigortalı olarak taşınır. İstanbul Fethiye parça eşya nakliyesi için uygun fiyat teklifimizi hemen alın.",
    faqs: generateFAQs("İstanbul", "Fethiye", "800 km", "2-3 gün")
  },
  {
    slug: "istanbul-datca-parca-esya-tasima",
    city: "Datça",
    cityFrom: "İstanbul",
    region: "Muğla",
    regionSlug: "mugla",
    distance: "830 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Datça Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Datça parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Datça arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Datça Parça Eşya Taşıma",
    introText: "İstanbul Datça parça eşya taşıma hizmetimizle, bademli yarımadasıyla ünlü sakin cennet Datça'ya eşyalarınızı güvenle ulaştırıyoruz. Global Nakliyat olarak İstanbul Datça parsiyel taşıma hizmetinde yarımadanın dar yollarına uygun araçlarımızla hizmet veriyoruz. İstanbul Datça arası parsiyel taşıma sürecinde eşyalarınız profesyonelce paketlenir ve sigortalı olarak taşınır. İstanbul Datça parça eşya nakliyesi için hemen teklif alın.",
    faqs: generateFAQs("İstanbul", "Datça", "830 km", "2-3 gün")
  },
  {
    slug: "istanbul-ortaca-parca-esya-tasima",
    city: "Ortaca",
    cityFrom: "İstanbul",
    region: "Muğla",
    regionSlug: "mugla",
    distance: "770 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Ortaca Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Ortaca parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Ortaca arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Ortaca Parça Eşya Taşıma",
    introText: "İstanbul Ortaca parça eşya taşıma hizmetimizle, Dalyan ve İztuzu Plajı'na yakınlığıyla bilinen Ortaca'ya eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Ortaca parsiyel taşıma hizmetinde güvenilir ve ekonomik çözümler sunuyoruz. İstanbul Ortaca arası parsiyel taşıma sürecinde eşyalarınız uzman ekibimiz tarafından özenle taşınır. İstanbul Ortaca parça eşya nakliyesi için hemen arayın.",
    faqs: generateFAQs("İstanbul", "Ortaca", "770 km", "2-3 gün")
  },
  {
    slug: "istanbul-dalaman-parca-esya-tasima",
    city: "Dalaman",
    cityFrom: "İstanbul",
    region: "Muğla",
    regionSlug: "mugla",
    distance: "750 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Dalaman Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Dalaman parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Dalaman arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Dalaman Parça Eşya Taşıma",
    introText: "İstanbul Dalaman parça eşya taşıma hizmetimizle, havalimanı ve doğal güzellikleriyle bilinen Dalaman'a eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Dalaman parsiyel taşıma hizmetinde profesyonel ve hızlı çözümler sunuyoruz. İstanbul Dalaman arası parsiyel taşıma sürecinde eşyalarınız sigortalı ve güvenli şekilde taşınır. İstanbul Dalaman parça eşya nakliyesi için uygun fiyat teklifini alın.",
    faqs: generateFAQs("İstanbul", "Dalaman", "750 km", "2-3 gün")
  },
  {
    slug: "istanbul-koycegiz-parca-esya-tasima",
    city: "Köyceğiz",
    cityFrom: "İstanbul",
    region: "Muğla",
    regionSlug: "mugla",
    distance: "760 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Köyceğiz Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Köyceğiz parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Köyceğiz arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Köyceğiz Parça Eşya Taşıma",
    introText: "İstanbul Köyceğiz parça eşya taşıma hizmetimizle, gölü ve çamur banyolarıyla ünlü Köyceğiz'e eşyalarınızı güvenle ulaştırıyoruz. Global Nakliyat olarak İstanbul Köyceğiz parsiyel taşıma hizmetinde deneyimli ekibimizle yanınızdayız. İstanbul Köyceğiz arası parsiyel taşıma sürecinde her eşyanız özenle paketlenir ve sigortalı olarak taşınır. İstanbul Köyceğiz parça eşya nakliyesi için hemen teklif alın.",
    faqs: generateFAQs("İstanbul", "Köyceğiz", "760 km", "2-3 gün")
  },
  {
    slug: "istanbul-milas-parca-esya-tasima",
    city: "Milas",
    cityFrom: "İstanbul",
    region: "Muğla",
    regionSlug: "mugla",
    distance: "690 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Milas Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Milas parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Milas arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Milas Parça Eşya Taşıma",
    introText: "İstanbul Milas parça eşya taşıma hizmetimizle, antik tarihi ve havalimanıyla önemli bir merkez olan Milas'a eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Milas parsiyel taşıma hizmetinde güvenilir ve ekonomik çözümler sunuyoruz. İstanbul Milas arası parsiyel taşıma sürecinde eşyalarınız profesyonel ekibimiz tarafından özenle taşınır. İstanbul Milas parça eşya nakliyesi için hemen arayın.",
    faqs: generateFAQs("İstanbul", "Milas", "690 km", "2-3 gün")
  },
  {
    slug: "istanbul-akyaka-parca-esya-tasima",
    city: "Akyaka",
    cityFrom: "İstanbul",
    region: "Muğla",
    regionSlug: "mugla",
    distance: "740 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Akyaka Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Akyaka parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Akyaka arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Akyaka Parça Eşya Taşıma",
    introText: "İstanbul Akyaka parça eşya taşıma hizmetimizle, Türkiye'nin Cittaslow kentlerinden Akyaka'ya eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Akyaka parsiyel taşıma hizmetinde sakin kasaba yaşamına uygun özenli taşıma hizmeti sunuyoruz. İstanbul Akyaka arası parsiyel taşıma sürecinde eşyalarınız sigortalı ve güvenli şekilde taşınır. İstanbul Akyaka parça eşya nakliyesi için uygun fiyat teklifini alın.",
    faqs: generateFAQs("İstanbul", "Akyaka", "740 km", "2-3 gün")
  },
  {
    slug: "istanbul-yalikavak-parca-esya-tasima",
    city: "Yalıkavak",
    cityFrom: "İstanbul",
    region: "Muğla",
    regionSlug: "mugla",
    distance: "740 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Yalıkavak Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Yalıkavak parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Yalıkavak arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Yalıkavak Parça Eşya Taşıma",
    introText: "İstanbul Yalıkavak parça eşya taşıma hizmetimizle, marinası ve lüks yaşam tarzıyla ünlü Yalıkavak'a eşyalarınızı güvenle ulaştırıyoruz. Global Nakliyat olarak İstanbul Yalıkavak parsiyel taşıma hizmetinde villa ve rezidans taşımacılığında uzmanız. İstanbul Yalıkavak arası parsiyel taşıma sürecinde eşyalarınız profesyonelce paketlenir ve sigortalı olarak taşınır. İstanbul Yalıkavak parça eşya nakliyesi için hemen teklif alın.",
    faqs: generateFAQs("İstanbul", "Yalıkavak", "740 km", "2-3 gün")
  },
  {
    slug: "istanbul-turgutreis-parca-esya-tasima",
    city: "Turgutreis",
    cityFrom: "İstanbul",
    region: "Muğla",
    regionSlug: "mugla",
    distance: "750 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Turgutreis Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Turgutreis parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Turgutreis arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Turgutreis Parça Eşya Taşıma",
    introText: "İstanbul Turgutreis parça eşya taşıma hizmetimizle, Bodrum yarımadasının batısındaki Turgutreis'e eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Turgutreis parsiyel taşıma hizmetinde gün batımı sahilinin güzel kasabasına düzenli seferler düzenliyoruz. İstanbul Turgutreis arası parsiyel taşıma sürecinde eşyalarınız özenle paketlenir ve sigortalı taşınır. İstanbul Turgutreis parça eşya nakliyesi için hemen arayın.",
    faqs: generateFAQs("İstanbul", "Turgutreis", "750 km", "2-3 gün")
  },
  {
    slug: "istanbul-gocek-parca-esya-tasima",
    city: "Göcek",
    cityFrom: "İstanbul",
    region: "Muğla",
    regionSlug: "mugla",
    distance: "770 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Göcek Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Göcek parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Göcek arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Göcek Parça Eşya Taşıma",
    introText: "İstanbul Göcek parça eşya taşıma hizmetimizle, 12 adalar ve marinalarıyla ünlü Göcek'e eşyalarınızı güvenle ulaştırıyoruz. Global Nakliyat olarak İstanbul Göcek parsiyel taşıma hizmetinde lüks villa ve yazlık taşımacılığında uzmanız. İstanbul Göcek arası parsiyel taşıma sürecinde profesyonel ekibimizle yanınızdayız. İstanbul Göcek parça eşya nakliyesi için ekonomik fiyat teklifini alın.",
    faqs: generateFAQs("İstanbul", "Göcek", "770 km", "2-3 gün")
  },
  {
    slug: "istanbul-oludeniz-parca-esya-tasima",
    city: "Ölüdeniz",
    cityFrom: "İstanbul",
    region: "Muğla",
    regionSlug: "mugla",
    distance: "810 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Ölüdeniz Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Ölüdeniz parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Ölüdeniz arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Ölüdeniz Parça Eşya Taşıma",
    introText: "İstanbul Ölüdeniz parça eşya taşıma hizmetimizle, turkuaz lagünüyle dünyaca ünlü Ölüdeniz'e eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Ölüdeniz parsiyel taşıma hizmetinde tatil bölgesine uygun esnek taşıma planlaması yapıyoruz. İstanbul Ölüdeniz arası parsiyel taşıma sürecinde eşyalarınız sigortalı ve güvenli şekilde taşınır. İstanbul Ölüdeniz parça eşya nakliyesi için hemen teklif alın.",
    faqs: generateFAQs("İstanbul", "Ölüdeniz", "810 km", "2-3 gün")
  },

  // ============================================
  // DENİZLİ & İÇ EGE (3 rota)
  // ============================================
  {
    slug: "istanbul-denizli-parca-esya-tasima",
    city: "Denizli",
    cityFrom: "İstanbul",
    region: "İç Ege",
    regionSlug: "ic-ege",
    distance: "600 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Denizli Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Denizli parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Denizli arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Denizli Parça Eşya Taşıma",
    introText: "İstanbul Denizli parça eşya taşıma hizmetimizle, Pamukkale'nin şehri Denizli'ye eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Denizli parsiyel taşıma rotasında düzenli seferler düzenliyoruz. İstanbul Denizli arası parsiyel taşıma sürecinde her eşyanız profesyonelce paketlenir ve sigortalı olarak taşınır. İstanbul Denizli parça eşya nakliyesi için hemen teklif alın.",
    faqs: generateFAQs("İstanbul", "Denizli", "600 km", "1-2 gün")
  },
  {
    slug: "istanbul-pamukkale-parca-esya-tasima",
    city: "Pamukkale",
    cityFrom: "İstanbul",
    region: "İç Ege",
    regionSlug: "ic-ege",
    distance: "610 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Pamukkale Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Pamukkale parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Pamukkale arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Pamukkale Parça Eşya Taşıma",
    introText: "İstanbul Pamukkale parça eşya taşıma hizmetimizle, beyaz travertenleriyle dünyaca ünlü Pamukkale'ye eşyalarınızı güvenle ulaştırıyoruz. Global Nakliyat olarak İstanbul Pamukkale parsiyel taşıma hizmetinde güvenilir ve ekonomik çözümler sunuyoruz. İstanbul Pamukkale arası parsiyel taşıma sürecinde eşyalarınız özenle paketlenir ve sigortalı olarak taşınır. İstanbul Pamukkale parça eşya nakliyesi için hemen arayın.",
    faqs: generateFAQs("İstanbul", "Pamukkale", "610 km", "1-2 gün")
  },
  {
    slug: "istanbul-manisa-parca-esya-tasima",
    city: "Manisa",
    cityFrom: "İstanbul",
    region: "İç Ege",
    regionSlug: "ic-ege",
    distance: "460 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Manisa Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Manisa parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Manisa arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Manisa Parça Eşya Taşıma",
    introText: "İstanbul Manisa parça eşya taşıma hizmetimizle, mesir macunu ve Spil Dağı'nın şehri Manisa'ya eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Manisa parsiyel taşıma hizmetinde düzenli seferlerimizle hizmet veriyoruz. İstanbul Manisa arası parsiyel taşıma sürecinde eşyalarınız uzman ekibimiz tarafından paketlenir ve sigortalı taşınır. İstanbul Manisa parça eşya nakliyesi için uygun fiyat teklifini alın.",
    faqs: generateFAQs("İstanbul", "Manisa", "460 km", "1-2 gün")
  },

  // ============================================
  // GÖL BÖLGESİ (2 rota)
  // ============================================
  {
    slug: "istanbul-burdur-parca-esya-tasima",
    city: "Burdur",
    cityFrom: "İstanbul",
    region: "Göl Bölgesi",
    regionSlug: "gol-bolgesi",
    distance: "620 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Burdur Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Burdur parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Burdur arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Burdur Parça Eşya Taşıma",
    introText: "İstanbul Burdur parça eşya taşıma hizmetimizle, Salda Gölü'nün şehri Burdur'a eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Burdur parsiyel taşıma hizmetinde profesyonel ve ekonomik çözümler sunuyoruz. İstanbul Burdur arası parsiyel taşıma sürecinde eşyalarınız sigortalı ve güvenli şekilde taşınır. İstanbul Burdur parça eşya nakliyesi için hemen teklif alın.",
    faqs: generateFAQs("İstanbul", "Burdur", "620 km", "1-2 gün")
  },
  {
    slug: "istanbul-isparta-parca-esya-tasima",
    city: "Isparta",
    cityFrom: "İstanbul",
    region: "Göl Bölgesi",
    regionSlug: "gol-bolgesi",
    distance: "580 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Isparta Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Isparta parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Isparta arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Isparta Parça Eşya Taşıma",
    introText: "İstanbul Isparta parça eşya taşıma hizmetimizle, güller diyarı Isparta'ya eşyalarınızı güvenle ulaştırıyoruz. Global Nakliyat olarak İstanbul Isparta parsiyel taşıma hizmetinde güvenilir ve titiz hizmet sunuyoruz. İstanbul Isparta arası parsiyel taşıma sürecinde her eşyanız özenle paketlenir ve sigortalı olarak taşınır. İstanbul Isparta parça eşya nakliyesi için uygun fiyat teklifini alın.",
    faqs: generateFAQs("İstanbul", "Isparta", "580 km", "1-2 gün")
  },

  // ============================================
  // AKDENİZ - ANTALYA BÖLGESİ (12 rota)
  // ============================================
  {
    slug: "istanbul-antalya-parca-esya-tasima",
    city: "Antalya",
    cityFrom: "İstanbul",
    region: "Antalya",
    regionSlug: "antalya",
    distance: "720 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Antalya Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Antalya parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Antalya arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Antalya Parça Eşya Taşıma",
    introText: "İstanbul Antalya parça eşya taşıma hizmetimizle, Türk Rivierası'nın başkenti Antalya'ya eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Antalya parsiyel taşıma rotasında her hafta düzenli seferler düzenliyoruz. 1992'den beri bu rotada binlerce başarılı taşıma gerçekleştirdik. İstanbul Antalya arası parsiyel taşıma sürecinde profesyonel paketleme, sigortalı sevkiyat ve kapıda teslimat hizmeti sunuyoruz. İstanbul Antalya parça eşya nakliyesi için en uygun fiyat teklifini hemen alın.",
    faqs: generateFAQs("İstanbul", "Antalya", "720 km", "2-3 gün")
  },
  {
    slug: "istanbul-alanya-parca-esya-tasima",
    city: "Alanya",
    cityFrom: "İstanbul",
    region: "Antalya",
    regionSlug: "antalya",
    distance: "860 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Alanya Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Alanya parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Alanya arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Alanya Parça Eşya Taşıma",
    introText: "İstanbul Alanya parça eşya taşıma hizmetimizle, kalesi ve kumsallarıyla ünlü Alanya'ya eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Alanya parsiyel taşıma hizmetinde deneyimli ekibimizle yanınızdayız. İstanbul Alanya arası parsiyel taşıma sürecinde eşyalarınız profesyonelce paketlenir ve sigortalı olarak taşınır. İstanbul Alanya parça eşya nakliyesi için hemen teklif alın.",
    faqs: generateFAQs("İstanbul", "Alanya", "860 km", "2-3 gün")
  },
  {
    slug: "istanbul-side-parca-esya-tasima",
    city: "Side",
    cityFrom: "İstanbul",
    region: "Antalya",
    regionSlug: "antalya",
    distance: "800 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Side Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Side parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Side arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Side Parça Eşya Taşıma",
    introText: "İstanbul Side parça eşya taşıma hizmetimizle, antik tiyatrosu ve apollon tapınağıyla ünlü Side'ye eşyalarınızı güvenle ulaştırıyoruz. Global Nakliyat olarak İstanbul Side parsiyel taşıma hizmetinde profesyonel ve güvenilir çözümler sunuyoruz. İstanbul Side arası parsiyel taşıma sürecinde eşyalarınız sigortalı ve güvenli şekilde taşınır. İstanbul Side parça eşya nakliyesi için hemen arayın.",
    faqs: generateFAQs("İstanbul", "Side", "800 km", "2-3 gün")
  },
  {
    slug: "istanbul-manavgat-parca-esya-tasima",
    city: "Manavgat",
    cityFrom: "İstanbul",
    region: "Antalya",
    regionSlug: "antalya",
    distance: "790 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Manavgat Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Manavgat parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Manavgat arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Manavgat Parça Eşya Taşıma",
    introText: "İstanbul Manavgat parça eşya taşıma hizmetimizle, şelalesi ve Manavgat Çayı'yla ünlü Manavgat'a eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Manavgat parsiyel taşıma hizmetinde düzenli seferlerimizle hizmet veriyoruz. İstanbul Manavgat arası parsiyel taşıma sürecinde eşyalarınız özenle paketlenir ve sigortalı olarak taşınır. İstanbul Manavgat parça eşya nakliyesi için uygun fiyat teklifini alın.",
    faqs: generateFAQs("İstanbul", "Manavgat", "790 km", "2-3 gün")
  },
  {
    slug: "istanbul-kemer-parca-esya-tasima",
    city: "Kemer",
    cityFrom: "İstanbul",
    region: "Antalya",
    regionSlug: "antalya",
    distance: "740 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Kemer Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Kemer parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Kemer arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Kemer Parça Eşya Taşıma",
    introText: "İstanbul Kemer parça eşya taşıma hizmetimizle, Toros Dağları'nın denizle buluştuğu Kemer'e eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Kemer parsiyel taşıma hizmetinde profesyonel ve ekonomik çözümler sunuyoruz. İstanbul Kemer arası parsiyel taşıma sürecinde her eşyanız sigortalı ve güvenli şekilde taşınır. İstanbul Kemer parça eşya nakliyesi için hemen teklif alın.",
    faqs: generateFAQs("İstanbul", "Kemer", "740 km", "2-3 gün")
  },
  {
    slug: "istanbul-belek-parca-esya-tasima",
    city: "Belek",
    cityFrom: "İstanbul",
    region: "Antalya",
    regionSlug: "antalya",
    distance: "760 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Belek Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Belek parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Belek arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Belek Parça Eşya Taşıma",
    introText: "İstanbul Belek parça eşya taşıma hizmetimizle, golf sahaları ve lüks tatil köyleriyle ünlü Belek'e eşyalarınızı güvenle ulaştırıyoruz. Global Nakliyat olarak İstanbul Belek parsiyel taşıma hizmetinde villa ve rezidans taşımacılığında uzmanız. İstanbul Belek arası parsiyel taşıma sürecinde eşyalarınız profesyonelce paketlenir ve sigortalı olarak taşınır. İstanbul Belek parça eşya nakliyesi için hemen arayın.",
    faqs: generateFAQs("İstanbul", "Belek", "760 km", "2-3 gün")
  },
  {
    slug: "istanbul-kas-parca-esya-tasima",
    city: "Kaş",
    cityFrom: "İstanbul",
    region: "Antalya",
    regionSlug: "antalya",
    distance: "880 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Kaş Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Kaş parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Kaş arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Kaş Parça Eşya Taşıma",
    introText: "İstanbul Kaş parça eşya taşıma hizmetimizle, Akdeniz'in en güzel sahil kasabası Kaş'a eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Kaş parsiyel taşıma hizmetinde dağ yollarına uygun araçlarımızla hizmet veriyoruz. İstanbul Kaş arası parsiyel taşıma sürecinde eşyalarınız uzman ekibimiz tarafından özenle taşınır. İstanbul Kaş parça eşya nakliyesi için uygun fiyat teklifini alın.",
    faqs: generateFAQs("İstanbul", "Kaş", "880 km", "2-3 gün")
  },
  {
    slug: "istanbul-kalkan-parca-esya-tasima",
    city: "Kalkan",
    cityFrom: "İstanbul",
    region: "Antalya",
    regionSlug: "antalya",
    distance: "870 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Kalkan Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Kalkan parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Kalkan arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Kalkan Parça Eşya Taşıma",
    introText: "İstanbul Kalkan parça eşya taşıma hizmetimizle, şirin limanı ve butik villarıyla ünlü Kalkan'a eşyalarınızı güvenle ulaştırıyoruz. Global Nakliyat olarak İstanbul Kalkan parsiyel taşıma hizmetinde dar ve eğimli sokaklara uygun taşıma planlaması yapıyoruz. İstanbul Kalkan arası parsiyel taşıma sürecinde eşyalarınız sigortalı ve güvenli şekilde taşınır. İstanbul Kalkan parça eşya nakliyesi için hemen teklif alın.",
    faqs: generateFAQs("İstanbul", "Kalkan", "870 km", "2-3 gün")
  },
  {
    slug: "istanbul-finike-parca-esya-tasima",
    city: "Finike",
    cityFrom: "İstanbul",
    region: "Antalya",
    regionSlug: "antalya",
    distance: "830 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Finike Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Finike parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Finike arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Finike Parça Eşya Taşıma",
    introText: "İstanbul Finike parça eşya taşıma hizmetimizle, portakal bahçeleriyle ünlü Finike'ye eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Finike parsiyel taşıma hizmetinde profesyonel ve güvenilir çözümler sunuyoruz. İstanbul Finike arası parsiyel taşıma sürecinde eşyalarınız özenle paketlenir ve sigortalı olarak taşınır. İstanbul Finike parça eşya nakliyesi için hemen arayın.",
    faqs: generateFAQs("İstanbul", "Finike", "830 km", "2-3 gün")
  },
  {
    slug: "istanbul-demre-parca-esya-tasima",
    city: "Demre",
    cityFrom: "İstanbul",
    region: "Antalya",
    regionSlug: "antalya",
    distance: "850 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Demre Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Demre parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Demre arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Demre Parça Eşya Taşıma",
    introText: "İstanbul Demre parça eşya taşıma hizmetimizle, Noel Baba'nın şehri ve antik Myra'nın kalbi Demre'ye eşyalarınızı güvenle ulaştırıyoruz. Global Nakliyat olarak İstanbul Demre parsiyel taşıma hizmetinde deneyimli ekibimizle hizmet veriyoruz. İstanbul Demre arası parsiyel taşıma sürecinde eşyalarınız sigortalı ve güvenli şekilde taşınır. İstanbul Demre parça eşya nakliyesi için uygun fiyat teklifini alın.",
    faqs: generateFAQs("İstanbul", "Demre", "850 km", "2-3 gün")
  },
  {
    slug: "istanbul-kumluca-parca-esya-tasima",
    city: "Kumluca",
    cityFrom: "İstanbul",
    region: "Antalya",
    regionSlug: "antalya",
    distance: "820 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Kumluca Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Kumluca parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Kumluca arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Kumluca Parça Eşya Taşıma",
    introText: "İstanbul Kumluca parça eşya taşıma hizmetimizle, sera tarımı ve doğal güzellikleriyle bilinen Kumluca'ya eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Kumluca parsiyel taşıma hizmetinde profesyonel ve ekonomik çözümler sunuyoruz. İstanbul Kumluca arası parsiyel taşıma sürecinde her eşyanız özenle paketlenir ve sigortalı olarak taşınır. İstanbul Kumluca parça eşya nakliyesi için hemen teklif alın.",
    faqs: generateFAQs("İstanbul", "Kumluca", "820 km", "2-3 gün")
  },
  {
    slug: "istanbul-gazipasa-parca-esya-tasima",
    city: "Gazipaşa",
    cityFrom: "İstanbul",
    region: "Antalya",
    regionSlug: "antalya",
    distance: "900 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Gazipaşa Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Gazipaşa parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Gazipaşa arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Gazipaşa Parça Eşya Taşıma",
    introText: "İstanbul Gazipaşa parça eşya taşıma hizmetimizle, havalimanı ve muz bahçeleriyle bilinen Gazipaşa'ya eşyalarınızı güvenle ulaştırıyoruz. Global Nakliyat olarak İstanbul Gazipaşa parsiyel taşıma hizmetinde güvenilir ve titiz hizmet sunuyoruz. İstanbul Gazipaşa arası parsiyel taşıma sürecinde eşyalarınız sigortalı ve güvenli şekilde taşınır. İstanbul Gazipaşa parça eşya nakliyesi için hemen arayın.",
    faqs: generateFAQs("İstanbul", "Gazipaşa", "900 km", "2-3 gün")
  },

  // ============================================
  // AKDENİZ - MERSİN & DOĞU AKDENİZ (7 rota)
  // ============================================
  {
    slug: "istanbul-mersin-parca-esya-tasima",
    city: "Mersin",
    cityFrom: "İstanbul",
    region: "Doğu Akdeniz",
    regionSlug: "dogu-akdeniz",
    distance: "950 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Mersin Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Mersin parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Mersin arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Mersin Parça Eşya Taşıma",
    introText: "İstanbul Mersin parça eşya taşıma hizmetimizle, Akdeniz'in önemli liman şehri Mersin'e eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Mersin parsiyel taşıma rotasında düzenli seferler düzenliyoruz. İstanbul Mersin arası parsiyel taşıma sürecinde profesyonel paketleme ve sigortalı sevkiyat hizmeti sunuyoruz. İstanbul Mersin parça eşya nakliyesi için uygun fiyat teklifini alın.",
    faqs: generateFAQs("İstanbul", "Mersin", "950 km", "2-3 gün")
  },
  {
    slug: "istanbul-adana-parca-esya-tasima",
    city: "Adana",
    cityFrom: "İstanbul",
    region: "Doğu Akdeniz",
    regionSlug: "dogu-akdeniz",
    distance: "920 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Adana Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Adana parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Adana arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Adana Parça Eşya Taşıma",
    introText: "İstanbul Adana parça eşya taşıma hizmetimizle, Çukurova'nın merkezi Adana'ya eşyalarınızı güvenle ulaştırıyoruz. Global Nakliyat olarak İstanbul Adana parsiyel taşıma hizmetinde düzenli seferlerimizle yanınızdayız. İstanbul Adana arası parsiyel taşıma sürecinde eşyalarınız profesyonelce paketlenir ve sigortalı olarak taşınır. İstanbul Adana parça eşya nakliyesi için ekonomik fiyat teklifini alın.",
    faqs: generateFAQs("İstanbul", "Adana", "920 km", "2-3 gün")
  },
  {
    slug: "istanbul-anamur-parca-esya-tasima",
    city: "Anamur",
    cityFrom: "İstanbul",
    region: "Doğu Akdeniz",
    regionSlug: "dogu-akdeniz",
    distance: "980 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Anamur Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Anamur parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Anamur arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Anamur Parça Eşya Taşıma",
    introText: "İstanbul Anamur parça eşya taşıma hizmetimizle, muz bahçeleri ve Anamur Kalesi'yle ünlü Anamur'a eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Anamur parsiyel taşıma hizmetinde deneyimli ekibimizle hizmet veriyoruz. İstanbul Anamur arası parsiyel taşıma sürecinde eşyalarınız sigortalı ve güvenli şekilde taşınır. İstanbul Anamur parça eşya nakliyesi için hemen teklif alın.",
    faqs: generateFAQs("İstanbul", "Anamur", "980 km", "2-3 gün")
  },
  {
    slug: "istanbul-silifke-parca-esya-tasima",
    city: "Silifke",
    cityFrom: "İstanbul",
    region: "Doğu Akdeniz",
    regionSlug: "dogu-akdeniz",
    distance: "930 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Silifke Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Silifke parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Silifke arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Silifke Parça Eşya Taşıma",
    introText: "İstanbul Silifke parça eşya taşıma hizmetimizle, Göksu Vadisi'nin şehri Silifke'ye eşyalarınızı güvenle ulaştırıyoruz. Global Nakliyat olarak İstanbul Silifke parsiyel taşıma hizmetinde güvenilir ve ekonomik çözümler sunuyoruz. İstanbul Silifke arası parsiyel taşıma sürecinde eşyalarınız özenle paketlenir ve sigortalı olarak taşınır. İstanbul Silifke parça eşya nakliyesi için hemen arayın.",
    faqs: generateFAQs("İstanbul", "Silifke", "930 km", "2-3 gün")
  },
  {
    slug: "istanbul-tarsus-parca-esya-tasima",
    city: "Tarsus",
    cityFrom: "İstanbul",
    region: "Doğu Akdeniz",
    regionSlug: "dogu-akdeniz",
    distance: "910 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Tarsus Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Tarsus parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Tarsus arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Tarsus Parça Eşya Taşıma",
    introText: "İstanbul Tarsus parça eşya taşıma hizmetimizle, tarihi Kleopatra Kapısı ve şelalesiyle ünlü Tarsus'a eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Tarsus parsiyel taşıma hizmetinde profesyonel ve titiz hizmet sunuyoruz. İstanbul Tarsus arası parsiyel taşıma sürecinde eşyalarınız sigortalı ve güvenli şekilde taşınır. İstanbul Tarsus parça eşya nakliyesi için uygun fiyat teklifini alın.",
    faqs: generateFAQs("İstanbul", "Tarsus", "910 km", "2-3 gün")
  },
  {
    slug: "istanbul-hatay-parca-esya-tasima",
    city: "Hatay",
    cityFrom: "İstanbul",
    region: "Doğu Akdeniz",
    regionSlug: "dogu-akdeniz",
    distance: "1100 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Hatay Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Hatay parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Hatay arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Hatay Parça Eşya Taşıma",
    introText: "İstanbul Hatay parça eşya taşıma hizmetimizle, medeniyetler şehri Hatay'a eşyalarınızı güvenle ulaştırıyoruz. Global Nakliyat olarak İstanbul Hatay parsiyel taşıma rotasında düzenli seferler düzenliyoruz. İstanbul Hatay arası parsiyel taşıma sürecinde her eşyanız profesyonelce paketlenir ve sigortalı olarak taşınır. İstanbul Hatay parça eşya nakliyesi için ekonomik fiyat teklifini alın.",
    faqs: generateFAQs("İstanbul", "Hatay", "1100 km", "2-3 gün")
  },
  {
    slug: "istanbul-iskenderun-parca-esya-tasima",
    city: "İskenderun",
    cityFrom: "İstanbul",
    region: "Doğu Akdeniz",
    regionSlug: "dogu-akdeniz",
    distance: "1080 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul İskenderun Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul İskenderun parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul İskenderun arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul İskenderun Parça Eşya Taşıma",
    introText: "İstanbul İskenderun parça eşya taşıma hizmetimizle, körfezi ve limanıyla önemli bir sanayi şehri İskenderun'a eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul İskenderun parsiyel taşıma hizmetinde güvenilir ve profesyonel çözümler sunuyoruz. İstanbul İskenderun arası parsiyel taşıma sürecinde eşyalarınız sigortalı ve güvenli şekilde taşınır. İstanbul İskenderun parça eşya nakliyesi için hemen teklif alın.",
    faqs: generateFAQs("İstanbul", "İskenderun", "1080 km", "2-3 gün")
  },

  // ============================================
  // İÇ ANADOLU (1 rota)
  // ============================================
  {
    slug: "istanbul-ankara-parca-esya-tasima",
    city: "Ankara",
    cityFrom: "İstanbul",
    region: "İç Anadolu",
    regionSlug: "ic-anadolu",
    distance: "450 km",
    duration: "1-2 gün",
    metaTitle: "İstanbul Ankara Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Ankara parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Ankara arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Ankara Parça Eşya Taşıma",
    introText: "İstanbul Ankara parça eşya taşıma hizmetimizle, başkent Ankara'ya eşyalarınızı güvenle ve hızlı şekilde taşıyoruz. Global Nakliyat olarak İstanbul Ankara parsiyel taşıma rotasında her gün düzenli seferler düzenliyoruz. 1992'den beri Türkiye'nin en yoğun taşıma hattında binlerce başarılı teslimat gerçekleştirdik. İstanbul Ankara arası parsiyel taşıma sürecinde profesyonel paketleme, sigortalı sevkiyat ve kapıda teslimat hizmeti sunuyoruz. İstanbul Ankara parça eşya nakliyesi için en uygun fiyat teklifini hemen alın.",
    faqs: generateFAQs("İstanbul", "Ankara", "450 km", "1-2 gün")
  },
  {
    slug: "istanbul-trabzon-parca-esya-tasima",
    city: "Trabzon",
    cityFrom: "İstanbul",
    region: "Karadeniz",
    regionSlug: "karadeniz",
    distance: "1060 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Trabzon Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Trabzon parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Trabzon arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Trabzon Parça Eşya Taşıma",
    introText: "İstanbul Trabzon parça eşya taşıma hizmetimizle, Karadeniz'in incisi Trabzon'a eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Trabzon parsiyel taşıma rotasında güvenilir hizmet veriyoruz. İstanbul Trabzon arası parsiyel taşıma sürecinde eşyalarınız profesyonelce paketlenir ve sigortalı taşınır. İstanbul Trabzon parça eşya nakliyesi için hemen teklif alın.",
    faqs: generateFAQs("İstanbul", "Trabzon", "1060 km", "2-3 gün")
  },
  {
    slug: "istanbul-konya-parca-esya-tasima",
    city: "Konya",
    cityFrom: "İstanbul",
    region: "İç Anadolu",
    regionSlug: "ic-anadolu",
    distance: "710 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Konya Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Konya parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Konya arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Konya Parça Eşya Taşıma",
    introText: "İstanbul Konya parça eşya taşıma hizmetimizle, İç Anadolu'nun en büyük şehirlerinden Konya'ya eşyalarınızı güvenle ulaştırıyoruz. Global Nakliyat olarak İstanbul Konya parsiyel taşıma rotasında profesyonel hizmet sunuyoruz. İstanbul Konya arası parsiyel taşıma sürecinde eşyalarınız özenle paketlenir ve sigortalı taşınır. İstanbul Konya parça eşya nakliyesi için uygun fiyat teklifini alın.",
    faqs: generateFAQs("İstanbul", "Konya", "710 km", "2-3 gün")
  },
  {
    slug: "istanbul-kayseri-parca-esya-tasima",
    city: "Kayseri",
    cityFrom: "İstanbul",
    region: "İç Anadolu",
    regionSlug: "ic-anadolu",
    distance: "770 km",
    duration: "2-3 gün",
    metaTitle: "İstanbul Kayseri Parça Eşya Taşıma | Parsiyel Nakliyat - Global Nakliyat",
    metaDescription: "İstanbul Kayseri parça eşya taşıma ve parsiyel taşıma hizmetinde Global Nakliyat güvencesi. İstanbul Kayseri arası parça eşya nakliyesi için hemen teklif alın. ☎ 0532 494 80 06",
    h1: "İstanbul Kayseri Parça Eşya Taşıma",
    introText: "İstanbul Kayseri parça eşya taşıma hizmetimizle, İç Anadolu'nun sanayi ve ticaret merkezi Kayseri'ye eşyalarınızı güvenle taşıyoruz. Global Nakliyat olarak İstanbul Kayseri parsiyel taşıma rotasında düzenli hizmet veriyoruz. İstanbul Kayseri arası parsiyel taşıma sürecinde eşyalarınız sigortalı ve güvenli şekilde taşınır. İstanbul Kayseri parça eşya nakliyesi için hemen arayın.",
    faqs: generateFAQs("İstanbul", "Kayseri", "770 km", "2-3 gün")
  }
];

// Bölgelere göre rotaları grupla
export function getRoutesByRegion(): Record<string, RouteData[]> {
  const grouped: Record<string, RouteData[]> = {};
  routes.forEach(route => {
    if (!grouped[route.region]) {
      grouped[route.region] = [];
    }
    grouped[route.region].push(route);
  });
  return grouped;
}

// Slug ile rota bul
export function getRouteBySlug(slug: string): RouteData | undefined {
  return routes.find(r => r.slug === slug);
}

// Aynı bölgedeki diğer rotaları getir
export function getRelatedRoutes(slug: string, limit: number = 6): RouteData[] {
  const currentRoute = getRouteBySlug(slug);
  if (!currentRoute) return routes.slice(0, limit);
  
  const sameRegion = routes.filter(r => r.region === currentRoute.region && r.slug !== slug);
  const otherRoutes = routes.filter(r => r.region !== currentRoute.region && r.slug !== slug);
  
  return [...sameRegion, ...otherRoutes].slice(0, limit);
}

// Popüler rotalar
export function getPopularRoutes(): RouteData[] {
  const popularSlugs = [
    "istanbul-izmir-parca-esya-tasima",
    "istanbul-antalya-parca-esya-tasima",
    "istanbul-bodrum-parca-esya-tasima",
    "istanbul-ankara-parca-esya-tasima",
    "istanbul-fethiye-parca-esya-tasima",
    "istanbul-marmaris-parca-esya-tasima",
    "istanbul-cesme-parca-esya-tasima",
    "istanbul-kusadasi-parca-esya-tasima",
    "istanbul-alanya-parca-esya-tasima",
    "istanbul-kas-parca-esya-tasima",
    "istanbul-datca-parca-esya-tasima",
    "istanbul-didim-parca-esya-tasima"
  ];
  return routes.filter(r => popularSlugs.includes(r.slug));
}
