import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { routes, getRouteBySlug, getRelatedRoutes } from "@/data/routes";
import Hero from "@/components/Hero";
import ServiceSteps from "@/components/ServiceSteps";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import { getIntroContent, getProcessContent, getPricingContent, getVariationIndex } from "@/data/pageContentVariations";

export async function generateStaticParams() {
  return routes.map((route) => ({
    slug: route.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const route = getRouteBySlug(resolvedParams.slug);
  
  if (!route) {
    return {
      title: "Sayfa Bulunamadı - Global Nakliyat"
    };
  }

  return {
    title: route.metaTitle,
    description: route.metaDescription,
    alternates: {
      canonical: `/${route.slug}`,
    },
    openGraph: {
      title: route.metaTitle,
      description: route.metaDescription,
      url: `https://www.istanbulparcaesyatasima.com/${route.slug}`,
      siteName: "Global Nakliyat",
      locale: "tr_TR",
      type: "website",
    }
  };
}

export default async function RoutePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const route = getRouteBySlug(resolvedParams.slug);

  if (!route) {
    notFound();
  }

  const relatedRoutes = getRelatedRoutes(route.slug, 4);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Ana Sayfa",
            "item": "https://www.istanbulparcaesyatasima.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Parça Eşya Taşıma",
            "item": "https://www.istanbulparcaesyatasima.com/sehirler-arasi-parca-esya-tasima"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `${route.cityFrom} ${route.city} Parça Eşya Taşıma`,
            "item": `https://www.istanbulparcaesyatasima.com/${route.slug}`
          }
        ]
      },
      {
        "@type": "Service",
        "name": `${route.cityFrom} ${route.city} Parça Eşya Taşıma`,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Global Nakliyat",
          "image": "https://www.istanbulparcaesyatasima.com/logo.png",
          "telephone": "0532 494 80 06",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Feyzullah mah. Yunus Emre Cad. Lale Apt. 10/5",
            "addressLocality": "Maltepe",
            "addressRegion": "İstanbul",
            "addressCountry": "TR"
          }
        },
        "areaServed": [
          {
            "@type": "City",
            "name": route.cityFrom
          },
          {
            "@type": "City",
            "name": route.city
          }
        ],
        "description": route.metaDescription
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Hero 
        title={route.h1} 
        subtitle={`${route.cityFrom} ve ${route.city} arasında düzenli, sigortalı ve ekonomik parsiyel taşıma hizmeti.`}
        bgImage="/images/global-nakliye.jpg"
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="container mx-auto px-4 md:px-8">
          <nav className="flex text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-[#e6b422] transition-colors">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <Link href="/sehirler-arasi-parca-esya-tasima" className="hover:text-[#e6b422] transition-colors">Parça Eşya Taşıma</Link>
            <span className="mx-2">/</span>
            <Link href={`/bolge/${route.regionSlug}`} className="hover:text-[#e6b422] transition-colors">{route.region}</Link>
            <span className="mx-2">/</span>
            <span className="text-[#0D1C42] font-semibold">{route.cityFrom} {route.city}</span>
          </nav>
        </div>
      </div>
            {/* SEO Introduction Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0D1C42]">
                {route.cityFrom} {route.city} <span className="text-[#e6b422]">Parça Eşya Taşıma Nedir?</span>
              </h2>
              <div className="w-20 h-1.5 bg-[#e6b422] rounded-full mb-6"></div>
              
              <div className="prose max-w-none text-gray-600 text-lg leading-relaxed">
                {getIntroContent(route.cityFrom, route.city, getVariationIndex(route.slug, 3))}
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 bg-blue-50 text-[#0D1C42] px-4 py-3 rounded-lg font-semibold">
                  <span className="text-2xl">🛣️</span> Mesafe: {route.distance}
                </div>
                <div className="flex items-center gap-2 bg-blue-50 text-[#0D1C42] px-4 py-3 rounded-lg font-semibold">
                  <span className="text-2xl">⏱️</span> Süre: {route.duration}
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/global-nakliye.jpg"
                  alt={`${route.cityFrom} ${route.city} parsiyel eşya taşıma - Global Nakliyat`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1C42]/80 to-transparent flex items-end">
                  <div className="p-8">
                    <h3 className="text-white text-2xl font-bold mb-2">Sigortalı ve Garantili Taşıma</h3>
                    <p className="text-gray-200">Eşyalarınız yola çıktığı andan itibaren güvencemiz altındadır.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Long Form SEO Content Sections */}
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0D1C42] mb-4">
                {route.cityFrom} {route.city} Parça Eşya Taşıma Nasıl Yapılır?
              </h2>
              {getProcessContent(route.cityFrom, route.city, getVariationIndex(route.slug + "process", 3))}
            </div>

            {/* Section 2 */}
            <div className="bg-[#F8F9FC] p-8 rounded-2xl border border-gray-100">
              <h2 className="text-2xl font-bold text-[#0D1C42] mb-4 flex items-center gap-3">
                <span className="text-3xl">⏳</span> {route.cityFrom} {route.city} Parça Eşya Taşıma Kaç Gün Sürer?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Müşterilerimizin en çok merak ettiği konulardan biri de eşyalarının ne zaman teslim edileceğidir. <strong>{route.cityFrom} {route.city}</strong> rotasındaki mesafemiz ortalama <strong>{route.distance}</strong> civarındadır. Parsiyel taşıma planlamalarımız doğrultusunda, eşyalarınız teslim alındıktan sonra ortalama <strong>{route.duration}</strong> içerisinde varış noktasına ulaştırılır. Taşıma öncesinde size net bir tarih ve saat aralığı bildirilir.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0D1C42] mb-4">
                {route.cityFrom} {route.city} Arası Parsiyel Taşıma: Paketleme ve Demontaj
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Nakliye sürecinin en önemli aşaması hiç şüphesiz eşyaların zarar görmeden taşınmasını sağlayan paketleme işlemidir. <strong>{route.cityFrom} {route.city} arası parsiyel taşıma</strong> hizmetimiz kapsamında;
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="border border-gray-200 p-6 rounded-xl shadow-sm hover:border-[#e6b422] transition-colors">
                  <h3 className="font-bold text-lg text-[#0D1C42] mb-2">Profesyonel Paketleme</h3>
                  <p className="text-gray-600 text-sm">Eşyalarınız patpat naylonlar, streç filmler ve oluklu kartonlar kullanılarak titizlikle sarılır. Çizilmelere ve darbelere karşı tam koruma sağlanır.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl shadow-sm hover:border-[#e6b422] transition-colors">
                  <h3 className="font-bold text-lg text-[#0D1C42] mb-2">Montaj ve Demontaj</h3>
                  <p className="text-gray-600 text-sm">Gardırop, yemek masası, yatak gibi sökülmesi gereken demonte mobilyalarınız uzman marangozlarımız tarafından özenle sökülür ve yeni adresinizde tekrar kurulur.</p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0D1C42] mb-4">
                {route.cityFrom} {route.city} Parça Eşya Taşıma Avantajları & Ekonomik Çözüm
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Birkaç parça eşya için koskoca bir nakliye aracı kiralamak ciddi bir maliyet yükü getirir. İşte bu noktada <strong>{route.cityFrom} {route.city} parça eşya taşıma avantajları</strong> devreye girer. Maliyetler, aynı güzergaha eşya gönderen diğer müşterilerle paylaşıldığı için taşıma ücretleri oldukça makul seviyelere iner. Bu sayede hem <strong>ekonomik çözüm</strong> elde eder hem de Global Nakliyat'ın profesyonel ve sigortalı taşıma güvencesinden faydalanmış olursunuz.
              </p>
            </div>

            {/* Section 5 */}
            <div className="bg-[#0D1C42] text-white p-8 md:p-12 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="100" fill="#e6b422" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
                {route.cityFrom} {route.city} Arası Tek Parça Eşya Taşıma
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed relative z-10">
                Müşterilerimizden sıkça gelen "Sadece bir buzdolabı veya sadece bir koltuk takımı taşıyor musunuz?" sorusunun cevabı: Evet. <strong>{route.cityFrom} {route.city} arası tek parça eşya taşıma</strong> hizmetimizle, ne kadar az eşyanız olursa olsun, aynı titizlik ve özenle adresinizden alıp yeni adresinize güvenle ulaştırıyoruz.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0D1C42] mb-4">
                {route.cityFrom} {route.city} Parça Eşya Taşıma Fiyatları Neye Göre Belirlenir?
              </h2>
              {getPricingContent(route.cityFrom, route.city, getVariationIndex(route.slug + "price", 3))}
              
              <div className="mt-8 border-l-4 border-[#e6b422] pl-6 py-2">
                <h3 className="font-bold text-xl text-[#0D1C42] mb-2">Sigorta Güvencesi</h3>
                <p className="text-gray-600">
                  Global Nakliyat olarak taşıdığımız her bir eşyayı yola çıkmadan önce teminat altına alıyoruz. <strong>Sigorta</strong> sayesinde eşyalarınızın başına gelebilecek olası kaza, yangın vb. durumlarda maddi kayıplarınızın önüne geçiyor ve tam güvence sağlıyoruz.
                </p>
              </div>
            </div>

            {/* Section 7 - Taşınabilecek Eşya Türleri */}
            <div className="bg-[#F8F9FC] p-8 rounded-2xl border border-gray-100">
              <h2 className="text-2xl font-bold text-[#0D1C42] mb-4 flex items-center gap-3">
                <span className="text-3xl">📋</span> {route.cityFrom} {route.city} Arası Hangi Eşyalar Taşınabilir?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                <strong>{route.cityFrom} {route.city} arası parsiyel taşıma</strong> hizmetimiz kapsamında neredeyse her türlü ev eşyasını güvenle taşıyabiliyoruz. Müşterilerimizin en sık gönderdiği eşya kategorileri aşağıda listelenmiştir. Listede yer almayan özel eşyalarınız için de mutlaka bizimle iletişime geçmenizi öneririz.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: "🧊", title: "Beyaz Eşya", desc: "Buzdolabı, çamaşır makinesi, bulaşık makinesi, kurutma makinesi, fırın gibi büyük ev aletleri." },
                  { icon: "🛋️", title: "Mobilya ve Koltuk", desc: "Koltuk takımı, berjer, yemek masası, sandalye, sehpa, TV ünitesi ve vitrin." },
                  { icon: "🛏️", title: "Yatak Odası Eşyaları", desc: "Yatak, baza, gardırop, şifonyer, komodin ve makyaj masası." },
                  { icon: "📦", title: "Koli ve Kutu", desc: "Kitap, kıyafet, mutfak gereçleri, kişisel eşyalar ve evrak kolileri." },
                  { icon: "🎓", title: "Öğrenci Eşyası", desc: "Valiz, bavul, çalışma masası, mini buzdolabı ve kişisel eşyalar." },
                  { icon: "💍", title: "Çeyiz Eşyası", desc: "Porselen takımlar, kristal vazolar, tekstil ürünleri ve hassas dekoratif eşyalar." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{item.icon}</span>
                      <h3 className="font-bold text-[#0D1C42]">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-6 italic">
                Bunların dışında piyano, antika mobilya, spor aletleri (koşu bandı, kondisyon bisikleti), bahçe mobilyaları ve elektronik eşyalar da parsiyel taşıma kapsamında güvenle gönderilebilmektedir.
              </p>
            </div>

            {/* Section 8 - Neden Global Nakliyat */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0D1C42] mb-4">
                {route.cityFrom} {route.city} Parsiyel Taşımada Neden Global Nakliyat?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Şehirler arası parça eşya taşıma sektöründe onlarca firma faaliyet göstermektedir, ancak <strong>Global Nakliyat</strong> olarak 1992'den bu yana sürdürdüğümüz deneyimimizle fark yaratıyoruz. <strong>{route.cityFrom} {route.city} parsiyel nakliyat</strong> rotasında bizi tercih etmeniz için önemli sebepler:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-blue-50 text-[#0D1C42] rounded-full flex items-center justify-center shrink-0 text-xl">🚛</div>
                  <div>
                    <h3 className="font-bold text-[#0D1C42] text-lg mb-1">Öz Mal Araç Filosu</h3>
                    <p className="text-gray-600 text-sm">Kiralık veya taşeron araç kullanmıyoruz. Tüm araçlarımız kendi bünyemize ait, bakımlı ve kapalı çelik kasalıdır. Bu sayede taşıma kalitesinden asla ödün vermiyoruz.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-blue-50 text-[#0D1C42] rounded-full flex items-center justify-center shrink-0 text-xl">👷</div>
                  <div>
                    <h3 className="font-bold text-[#0D1C42] text-lg mb-1">Kadrolu ve Deneyimli Personel</h3>
                    <p className="text-gray-600 text-sm">Günübirlik çalışanlar yerine, yıllardır bizimle çalışan eğitimli paketleme ve taşıma ekibimizle iş güvencesi sağlıyoruz. Her eşya profesyonel ellerde.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-blue-50 text-[#0D1C42] rounded-full flex items-center justify-center shrink-0 text-xl">📅</div>
                  <div>
                    <h3 className="font-bold text-[#0D1C42] text-lg mb-1">Düzenli Haftalık Seferler</h3>
                    <p className="text-gray-600 text-sm">Ege ve Akdeniz rotalarına her hafta düzenli sefer programımız bulunmaktadır. Bu sayede eşyalarınız kısa sürede ve planlanmış bir takvimle taşınır.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-blue-50 text-[#0D1C42] rounded-full flex items-center justify-center shrink-0 text-xl">📞</div>
                  <div>
                    <h3 className="font-bold text-[#0D1C42] text-lg mb-1">Şeffaf İletişim ve Takip</h3>
                    <p className="text-gray-600 text-sm">Eşyalarınız yola çıktığı andan teslimatına kadar sizi bilgilendiriyoruz. WhatsApp veya telefon üzerinden her an durumu öğrenebilirsiniz.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 9 - Ödeme ve Güvence */}
            <div className="bg-gradient-to-r from-[#0D1C42] to-[#1a2d5a] text-white p-8 md:p-12 rounded-2xl relative overflow-hidden">
              <div className="absolute bottom-0 left-0 opacity-5">
                <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="50" y="50" width="200" height="200" rx="20" fill="#e6b422" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
                {route.cityFrom} {route.city} Parça Eşya Taşıma: Ödeme ve Müşteri Güvencesi
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 relative z-10">
                Taşıma ücretiniz, eşyalarınız teslim alınmadan önce sizinle mutabık kalınan sabit fiyat üzerinden belirlenir. <strong className="text-white">Sonradan ek ücret veya gizli maliyet talep edilmez.</strong> Ödeme, eşyalarınız yeni adresinize sorunsuz teslim edildikten sonra yapılır. Bu, müşterilerimize sunduğumuz en önemli güvencelerden biridir.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 relative z-10">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <div className="text-[#e6b422] text-2xl mb-2">💳</div>
                  <h3 className="font-bold text-white mb-1">Esnek Ödeme</h3>
                  <p className="text-gray-300 text-sm">Nakit, havale veya EFT ile ödeme imkanı.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <div className="text-[#e6b422] text-2xl mb-2">🔒</div>
                  <h3 className="font-bold text-white mb-1">Sabit Fiyat</h3>
                  <p className="text-gray-300 text-sm">Anlaşılan fiyat değişmez, gizli ücret yoktur.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <div className="text-[#e6b422] text-2xl mb-2">✅</div>
                  <h3 className="font-bold text-white mb-1">Teslimatta Ödeme</h3>
                  <p className="text-gray-300 text-sm">Eşyalarınız güvenle teslim edildikten sonra ödeme yapılır.</p>
                </div>
              </div>
            </div>

            {/* Section 10 - Kapanış / Sonuç */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0D1C42] mb-4">
                {route.cityFrom} {route.city} Parça Eşya Taşıma Hakkında Sonuç
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Sonuç olarak, <strong>{route.cityFrom} {route.city} arası parça eşya taşıma</strong> ihtiyacınız için Global Nakliyat size en güvenli, en ekonomik ve en profesyonel hizmeti sunmaktadır. 1992 yılından bu yana binlerce müşterinin eşyasını hasarsız şekilde yeni adreslerine ulaştıran deneyimimiz, bu alanda neden ilk tercih olduğumuzu açıkça ortaya koymaktadır.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                İster tek bir buzdolabı, ister birkaç koli kişisel eşya, ister tam bir çeyiz seti taşıtmak isteyin; <strong>{route.cityFrom} - {route.city} parsiyel nakliyat</strong> hizmetimizle eşyalarınız profesyonelce paketlenir, sigortalanır ve zamanında teslim edilir. Araçlarımız her hafta düzenli olarak bu rotaya sefer düzenlemekte olup, eşyalarınızın teslim alınmasından itibaren ortalama <strong>{route.duration}</strong> içerisinde yeni adresinize ulaştırılması sağlanır.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Ücretsiz fiyat teklifi almak, eşyalarınızın hacmine göre net maliyet bilgisi öğrenmek veya sefer takvimimiz hakkında bilgi edinmek için bizi hemen arayabilir ya da WhatsApp üzerinden eşya fotoğraflarınızı göndererek dakikalar içinde teklif alabilirsiniz. <strong>Global Nakliyat</strong> güvencesiyle, eşyalarınız güvende.
              </p>
            </div>

          </div>
        </div>
      </section>

      <ServiceSteps />

      {/* Pricing Information Section CTA */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4 text-[#0D1C42]">
                {route.cityFrom} {route.city} Parsiyel Taşıma İçin Net Fiyat Alın
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Hızlı, güvenli ve bütçe dostu fiyatlarımız hakkında bilgi almak için formu doldurabilir veya doğrudan bizi arayarak eşyanızın hacmine özel ücretsiz fiyat teklifi isteyebilirsiniz.
              </p>
            </div>
            <div className="md:w-1/3 flex flex-col w-full">
              <a href="https://wa.me/905324948006" target="_blank" rel="noopener noreferrer" className="bg-[#e6b422] hover:bg-[#d4a51e] text-[#0D1C42] font-bold text-lg py-4 px-6 rounded-xl text-center shadow-md transition-all mb-4">
                WhatsApp'tan Fiyat Sor
              </a>
              <a href="tel:05324948006" className="bg-[#0D1C42] hover:bg-[#1a2d5a] text-white font-bold text-lg py-4 px-6 rounded-xl text-center shadow-md transition-all">
                Hemen Bizi Arayın
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={route.faqs} title={`${route.cityFrom} ${route.city} Parsiyel Nakliyat Hakkında SSS`} />

      {/* Cross Linking - Other Routes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-3 text-[#0D1C42]">Diğer Popüler <span className="text-[#e6b422]">Rotalarımız</span></h2>
              <p className="text-gray-600">İlginizi çekebilecek diğer parça eşya nakliyesi güzergahlarımız.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedRoutes.map(relatedRoute => (
              <Link key={relatedRoute.slug} href={`/${relatedRoute.slug}`} className="group block">
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 hover:border-[#e6b422] hover:shadow-md transition-all">
                  <h3 className="font-bold text-[#0D1C42] group-hover:text-[#e6b422] transition-colors mb-2">
                    {relatedRoute.cityFrom} {relatedRoute.city}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{relatedRoute.region} Bölgesi</p>
                  <span className="text-sm font-semibold text-[#0D1C42] flex items-center gap-1 group-hover:gap-2 transition-all">
                    Detayları İncele →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner 
        title={`${route.cityFrom} ${route.city} Arası Güvenli Taşıma`} 
        subtitle="Hemen arayın, eşyalarınız için en uygun fiyat garantisiyle profesyonel taşıma planlamanızı yapalım."
      />
    </>
  );
}
