import { Metadata } from "next";
import Link from "next/link";
import { getRoutesByRegion } from "@/data/routes";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  alternates: { canonical: '/sehirler-arasi-parca-esya-tasima' },
  title: "Şehirler Arası Parça Eşya Taşıma | Parsiyel Nakliyat ve Nakliye Fiyatları",
  description: "Şehirler arası parça eşya taşıma hizmeti ile İstanbul'dan tüm Türkiye'ye sigortalı, asansörlü ve ekonomik parsiyel nakliyat sağlıyoruz.",
  keywords: ["şehirler arası parça eşya taşıma", "parsiyel nakliyat", "şehirler arası nakliye", "şehirler arası eşya taşıma fiyatları"],
  openGraph: {
    title: "Şehirler Arası Parça Eşya Taşıma",
    description: "İstanbul'dan tüm Türkiye'ye sigortalı parsiyel nakliyat çözümleri.",
    url: "https://www.istanbulparcaesyatasima.com/sehirler-arasi-parca-esya-tasima",
  }
};

export default function ParcaEsyaTasimaPage() {
  const routesByRegion = getRoutesByRegion();

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Şehirler Arası Parça Eşya Taşıma",
    "description": "Türkiye genelinde sigortalı şehirler arası parça eşya taşıma ve parsiyel nakliyat hizmeti.",
    "url": "https://www.istanbulparcaesyatasima.com/sehirler-arasi-parca-esya-tasima"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero 
        title="Şehirler Arası Parça Eşya Taşıma" 
        subtitle="İstanbul'dan Türkiye'nin dört bir yanına düzenli, sigortalı ve ekonomik parsiyel taşıma hizmeti veriyoruz. Az miktardaki eşyalarınız için tam kamyon kiralama derdine son!"
        bgImage="/images/118833877_2623351991263488_7009477033501235308_o.jpg"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0D1C42]">Neden <span className="text-[#e6b422]">Şehirler Arası</span> Parsiyel Nakliyat?</h2>
            <div className="section-divider mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed mb-6">
              <strong>Şehirler arası parça eşya taşıma</strong> hizmetimiz ile tek bir araçta farklı müşterilerimize ait eşyaları aynı rota üzerinde güvenle taşıyoruz. Bu sayede sadece eşyanızın kapladığı alan kadar ücret ödersiniz. Global Nakliyat güvencesiyle eşyalarınız darbelere karşı profesyonelce paketlenir ve sigortalanır.
            </p>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0D1C42]">Türkiye Geneli Hizmet <span className="text-[#e6b422]">Bölgelerimiz</span></h2>
            <div className="section-divider mx-auto mb-6"></div>
          </div>

          <div className="space-y-16">
            {Object.entries(routesByRegion).map(([region, routes]) => (
              <div key={region} className="bg-[#F8F9FC] rounded-2xl p-8 md:p-12 border border-gray-100">
                <div className="flex items-center gap-4 mb-8 border-b border-gray-200 pb-4">
                  <h3 className="text-2xl font-bold text-[#0D1C42]">{region} Bölgesi</h3>
                  <span className="bg-[#e6b422] text-[#0D1C42] font-bold text-sm px-3 py-1 rounded-full">
                    {routes.length} Rota
                  </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {routes.map(route => (
                    <Link 
                      key={route.slug} 
                      href={`/${route.slug}`}
                      className="group flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 hover:border-[#e6b422] transition-all"
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3 group-hover:bg-[#e6b422] transition-colors shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#0D1C42] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-0.5">{route.cityFrom} Çıkışlı</div>
                        <div className="font-semibold text-[#0D1C42] group-hover:text-[#e6b422] transition-colors">
                          {route.city} Taşıma
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Extended SEO Content for 1200+ Words Goal */}
          <div className="max-w-4xl mx-auto space-y-16 mt-20 border-t border-gray-100 pt-16">
            
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0D1C42] mb-6">
                Şehirler Arası Parsiyel (Parça) Eşya Taşıma Nedir?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                <strong>Parsiyel eşya taşıma</strong> ya da halk arasındaki adıyla <strong>parça eşya taşıma</strong>, aynı veya benzer güzergahlara giden birden fazla müşteriye ait eşyaların, ortak bir nakliye aracında taşınması sistemidir. Bu sistemin temel amacı, bir aracı tamamen doldurmayacak kadar az sayıda eşyası olan kişilerin (örneğin birkaç koli, tek bir çamaşır makinesi veya bir öğrenci evi eşyası) yüksek tam kamyon ücretleri ödemesini engellemektir.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Özellikle İstanbul çıkışlı <strong>Ege, Akdeniz ve Marmara</strong> rotalarında yazlıklarına eşya göndermek isteyenler, atanan memurlar, öğrenciler veya çeyiz eşyası taşıtan çiftler için en ideal taşıma yöntemi parsiyel taşımacılıktır. Global Nakliyat olarak her hafta düzenlediğimiz Ege ve Akdeniz seferlerimizle, müşterilerimize kargo şirketlerinden çok daha ucuz, klasik nakliyeden ise çok daha güvenli bir alternatif sunuyoruz.
              </p>
            </div>

            <div className="bg-[#F8F9FC] p-8 rounded-2xl border border-gray-100">
              <h2 className="text-2xl font-bold text-[#0D1C42] mb-6 flex items-center gap-3">
                <span className="text-3xl">💡</span> Parça Eşya Taşımanın Avantajları Nelerdir?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0D1C42] text-[#e6b422] rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0D1C42] mb-1">Maliyet Tasarrufu (Ekonomik Fiyat)</h3>
                    <p className="text-gray-600 text-base">Komple araç kiralamak yerine sadece eşyanızın araçta kapladığı alan (metreküp) kadar ödeme yaparsınız. Bu sayede taşıma maliyetleriniz %60 ila %70 oranında azalır.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0D1C42] text-[#e6b422] rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0D1C42] mb-1">Kargolara Göre Daha Güvenli</h3>
                    <p className="text-gray-600 text-base">Standart kargo firmaları eşyalarınızı aktarma merkezlerinde defalarca indirip bindirir. Parsiyel nakliyede ise eşyanız evinizden alınır ve direkt olarak yeni evinize götürülür. Çarpma ve kırılma riski minimize edilir.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0D1C42] text-[#e6b422] rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0D1C42] mb-1">Ambalajlama ve Kurulum Hizmeti</h3>
                    <p className="text-gray-600 text-base">Eşyalarınız alanında uzman personelimiz tarafından balonlu naylonlar ve kalın streçlerle paketlenir. İhtiyaç halinde demonte mobilyalarınız sökülür ve varış yerinde tekrar kurulur.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0D1C42] text-[#e6b422] rounded-full flex items-center justify-center shrink-0 font-bold">4</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0D1C42] mb-1">Esnek Sefer Programı</h3>
                    <p className="text-gray-600 text-base">Özellikle yaz aylarında artan sefer sayılarımız sayesinde eşyalarınız günlerce beklemez. En yakın sefer programına dahil edilerek kısa sürede teslimatı sağlanır.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0D1C42] mb-6">
                Eşyalarım Diğer Müşterilerin Eşyalarıyla Karışır Mı?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Parsiyel eşya taşımacılığı yaptırmak isteyen müşterilerimizin en çok endişe ettiği konu "Acaba eşyalarım başka birinin eşyasıyla karışır mı veya yanlış yere gider mi?" sorusudur. Global Nakliyat'ın yıllara dayanan tecrübesi ve sistematik çalışma prensibi sayesinde <strong>bu risk sıfırdır.</strong>
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Araçlarımıza yükleme yapılırken <strong>son teslim edilecek eşya en ilk, ilk teslim edilecek eşya ise en son</strong> yüklenir (LIFO prensibi - Last In, First Out). Ayrıca her müşterinin eşyası; araç içerisinde sunta bölmeler, gergi spanzetleri veya taşıma ağları (fileler) ile fiziksel olarak birbirinden tamamen ayrılır. Her müşterinin eşyalarının üzerine özel etiketler ve barkodlar yapıştırılarak takip kolaylığı sağlanır.
              </p>
            </div>

            <div className="bg-[#0D1C42] text-white p-8 md:p-12 rounded-2xl relative overflow-hidden">
              <div className="absolute right-0 top-0 opacity-10">
                <svg width="250" height="250" viewBox="0 0 24 24" fill="none" stroke="#e6b422" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
                Tam Kapsamlı Taşıma Sigortası
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed relative z-10 mb-6">
                Şehirler arası yollarda eşyalarınızın başına gelebilecek trafik kazası, yangın veya çalınma gibi tüm elde olmayan risklere karşı Global Nakliyat olarak önlemimizi alıyoruz. Taşımasını gerçekleştirdiğimiz tüm eşyalar yola çıkmadan önce poliçelendirilerek <strong>emtia taşıma sigortası</strong> güvencesi altına alınır.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 relative z-10">
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                  <h3 className="font-bold text-[#e6b422] mb-1">Maddi Güvence</h3>
                  <p className="text-gray-300 text-sm">Olası hasar durumlarında zararınız sigorta acentesi tarafından eksiksiz karşılanır.</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                  <h3 className="font-bold text-[#e6b422] mb-1">Resmi Sözleşme</h3>
                  <p className="text-gray-300 text-sm">Taşıma günü, fiyat ve sigorta şartları resmi nakliye sözleşmesi ile imza altına alınır.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0D1C42] mb-6">
                Parsiyel Nakliyat Fiyatları Nasıl Hesaplanır?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                <strong>Şehirler arası parça eşya taşıma fiyatları</strong> belirlenirken, kargo şirketlerinin aksine desiden (ağırlık) ziyade hacim (metreküp) dikkate alınır. Çünkü nakliye araçlarımızda eşyaların kapladığı alan maliyeti belirleyen ana unsurdur. Fiyatlandırma yapılırken şu kriterler göz önünde bulundurulur:
              </p>
              <ul className="list-none space-y-2 mb-6">
                <li className="flex items-center gap-2 text-gray-600 text-lg"><span className="text-[#e6b422]">■</span> Toplam eşyanın araçta kapladığı alan (m3)</li>
                <li className="flex items-center gap-2 text-gray-600 text-lg"><span className="text-[#e6b422]">■</span> Eşyaların alınacağı il/ilçe ile teslim edileceği il/ilçe arasındaki mesafe</li>
                <li className="flex items-center gap-2 text-gray-600 text-lg"><span className="text-[#e6b422]">■</span> Binaların kat durumları (Asansörlü mü, merdivenli mi?)</li>
                <li className="flex items-center gap-2 text-gray-600 text-lg"><span className="text-[#e6b422]">■</span> İstenilen ekstra hizmetler (Montaj, ekstra ambalajlama vb.)</li>
              </ul>
              <p className="text-gray-600 text-lg leading-relaxed">
                Müşteri hizmetlerimizi arayarak veya WhatsApp hattımız üzerinden taşınacak eşyalarınızın fotoğrafını ya da listesini ileterek çok kısa sürede <strong>net parça eşya taşıma fiyatı</strong> alabilirsiniz. Size verilen fiyat sabittir, taşıma günü geldiğinde anlaşılmayan hiçbir ekstra ücret (mazot farkı, kat farkı vs.) talep edilmez.
              </p>
            </div>

          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
