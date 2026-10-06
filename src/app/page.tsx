import Image from "next/image";
import Link from "next/link";
import { getPopularRoutes, getRoutesByRegion } from "@/data/routes";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const popularRoutes = getPopularRoutes();
  const routesByRegion = getRoutesByRegion();

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MovingCompany",
        "name": "Global Nakliyat",
        "image": "https://www.istanbulparcaesyatasima.com/images/global-nakliye.jpg",
        "description": "İstanbul çıkışlı Ege ve Akdeniz rotalarında sigortalı, güvenli ve ekonomik şehirler arası parça eşya taşıma.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "İstanbul",
          "addressCountry": "TR"
        },
        "telephone": "+905324948006",
        "url": "https://www.istanbulparcaesyatasima.com",
        "areaServed": ["İstanbul", "İzmir", "Muğla", "Antalya", "Balıkesir", "Çanakkale", "Aydın"],
        "priceRange": "₺₺",
        "foundingDate": "1992"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Parça eşya taşıma fiyatları nasıl hesaplanır?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Parça eşya taşıma fiyatları, eşyanızın araçta kapladığı hacim (m3), ağırlığı, taşınacak mesafe ve kat durumuna göre hesaplanır. Sadece kullandığınız alan kadar ücret ödersiniz."
            }
          },
          {
            "@type": "Question",
            "name": "Şehirler arası parça eşya taşıma kaç gün sürer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "İstanbul çıkışlı Ege ve Akdeniz bölgelerine düzenli seferlerimiz sayesinde, eşyalarınız teslim alındıktan sonra genellikle 24 ile 48 saat içerisinde güvenle yeni adresinize ulaştırılır."
            }
          },
          {
            "@type": "Question",
            "name": "Taşıma sırasında eşyalarım sigortalanıyor mu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Evet, taşımasını gerçekleştirdiğimiz tüm eşyalar araca yüklendiği andan teslim edilene kadar anlaşmalı sigorta şirketimiz tarafından olası hasarlara karşı tam kapsamlı olarak sigortalanmaktadır."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Hero Section */}
      <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden flex items-center">
        {/* Background Image with Zoom Effect */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/122101908_2674360342829319_6697841315808544910_o.jpg"
            alt="Global Nakliyat Parça Eşya Taşıma"
            fill
            priority
            className="object-cover animate-hero-zoom"
            sizes="100vw"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1C42]/90 via-[#0D1C42]/70 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#e6b422]/20 border border-[#e6b422]/30 backdrop-blur-sm animate-fade-up">
              <span className="text-[#e6b422] font-semibold text-sm tracking-wide uppercase">
                Türkiye'nin Her Yerine
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-up-delay font-heading">
              Güvenilir <span className="text-[#e6b422]">Parça Eşya</span> Taşıma
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed animate-fade-up-delay-2">
              1992'den günümüze, az miktardaki eşyalarınız için ekonomik ve güvenli parsiyel taşıma çözümleri sunuyoruz. Ege ve Akdeniz rotalarında her hafta düzenli seferler.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-2">
              <a href="https://wa.me/905324948006" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Ücretsiz Teklif Alın
              </a>
              <a href="tel:05324948006" className="btn-secondary glass !text-white hover:!bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Hemen Arayın
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Neden <span className="text-gradient">Global Nakliyat?</span></h2>
            <div className="section-divider mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Parça eşya taşıma sürecinde ihtiyacınız olan tüm güvenceleri ve profesyonelliği tek bir adreste bulacaksınız.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Ekonomik Çözüm",
                desc: "Sadece eşyanızın kapladığı alan kadar ücret ödersiniz. Tam araç kiralamanıza gerek kalmaz.",
                icon: "💰"
              },
              {
                title: "Sigortalı Taşıma",
                desc: "Tüm eşyalarınız taşıma süresi boyunca anlaşmalı sigorta şirketimiz tarafından güvence altındadır.",
                icon: "🛡️"
              },
              {
                title: "Düzenli Seferler",
                desc: "Özellikle Ege ve Akdeniz bölgelerine her hafta düzenli parsiyel taşıma seferlerimiz mevcuttur.",
                icon: "🚚"
              },
              {
                title: "Uzman Paketleme",
                desc: "Eşyalarınız profesyonel ekibimiz tarafından darbelere karşı özel ambalajlarla paketlenir.",
                icon: "📦"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover text-center">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#0D1C42]">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes Section */}
      <section className="py-20 bg-[#F8F9FC]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Popüler <span className="text-gradient">Rotalarımız</span></h2>
              <div className="section-divider mb-6"></div>
              <p className="text-gray-600 max-w-2xl text-lg">İstanbul çıkışlı en çok tercih edilen parça eşya taşıma rotalarımız.</p>
            </div>
            <Link href="/sehirler-arasi-parca-esya-tasima" className="text-[#0D1C42] font-semibold flex items-center gap-2 hover:text-[#e6b422] transition-colors mt-4 md:mt-0">
              Tüm Rotaları Gör
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {popularRoutes.slice(0, 8).map(route => (
              <Link key={route.slug} href={`/${route.slug}`} className="group block h-full">
                <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden h-full card-hover flex flex-col">
                  <div className="bg-[#0D1C42] text-white p-4 flex justify-between items-center">
                    <span className="font-bold">{route.cityFrom}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#e6b422]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <span className="font-bold">{route.city}</span>
                  </div>
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {route.distance}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {route.duration}
                        </span>
                      </div>
                      <p className="text-[#0D1C42] font-semibold group-hover:text-[#e6b422] transition-colors line-clamp-2">
                        {route.cityFrom} {route.city} parsiyel taşıma fiyatları ve detayları
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive SEO Content Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0D1C42]">İstanbul Merkezli <span className="text-[#e6b422]">Parça Eşya Taşıma</span> Hizmetleri</h2>
            <div className="section-divider mx-auto mb-6"></div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-[#0D1C42] mb-4">Şehirler Arası Parsiyel Nakliyat Nedir?</h3>
                <p>
                  <strong>Şehirler arası parsiyel nakliyat</strong> (parça eşya taşıma), tam bir nakliye aracı doldurmayan az miktardaki eşyalarınızın, aynı güzergaha gidecek diğer müşterilerin eşyalarıyla birlikte tek bir araçta, güvenle ve ekonomik olarak taşınması işlemidir. Öğrenci eşyası, yazlık eşyası, çeyiz eşyası veya birkaç parça mobilya ile beyaz eşyanın taşınması için en ideal ve bütçe dostu yöntemdir.
                </p>
                <p className="mt-4">
                  1992 yılından bu yana Global Nakliyat olarak, İstanbul'dan Ege ve Akdeniz bölgelerine her hafta kesintisiz <strong>şehirler arası eşya nakliyatı</strong> seferleri düzenlemekteyiz.
                </p>
              </div>
              <div className="bg-[#F8F9FC] p-6 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-[#0D1C42] mb-4">Hangi Eşyaları Taşıyoruz?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#e6b422]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <strong>Yazlık Eşya Taşıma:</strong> Bodrum, Marmaris, Çeşme gibi tatil beldelerine.
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#e6b422]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <strong>Öğrenci Eşyası:</strong> Valiz, koli, çalışma masası ve kişisel eşyalar.
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#e6b422]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <strong>Çeyiz Taşıma:</strong> Hassas ambalajlama gerektiren yeni ev eşyaları.
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#e6b422]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <strong>Tek Parça Eşya:</strong> Beyaz eşya, piyano, koltuk takımı, dolap vb.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-[#0D1C42] mb-4">Profesyonel Paketleme ve Sigortalı Taşıma</h3>
              <p>
                Eşyalarınızın türü veya miktarı ne olursa olsun, Global Nakliyat kalitesinden ödün verilmez. Eşyalarınız alanında uzman kadromuz tarafından havalı naylonlar (patpat), özel karton koliler ve streç filmler ile darbelere karşı <strong>özenle ambalajlanır</strong>. Ayrıca taşıma esnasında doğabilecek olası risklere karşı tüm eşyalarınız anlaşmalı acentelerimiz aracılığıyla <strong>sigortalı</strong> olarak sevk edilir. Şehirler arası parça eşya taşıma sürecinde aklınız eşyalarınızda kalmaz, güvenle yeni evinize teslim edilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#F8F9FC] border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0D1C42]">Sıkça Sorulan <span className="text-[#e6b422]">Sorular</span></h2>
            <div className="section-divider mx-auto mb-6"></div>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Parça eşya taşıma fiyatları nasıl hesaplanır?",
                a: "Parça eşya taşıma fiyatları, eşyanızın araçta kapladığı hacim (m3), ağırlığı, taşınacak mesafe ve kat durumuna göre hesaplanır. Sadece kullandığınız alan kadar ücret ödersiniz. Ücretsiz ekspertiz ile net fiyat alabilirsiniz."
              },
              {
                q: "Şehirler arası parça eşya taşıma kaç gün sürer?",
                a: "İstanbul çıkışlı Ege ve Akdeniz bölgelerine düzenli seferlerimiz sayesinde, eşyalarınız teslim alındıktan sonra genellikle rotaya bağlı olarak 24 ile 48 saat içerisinde güvenle yeni adresinize ulaştırılır."
              },
              {
                q: "Taşıma sırasında eşyalarım sigortalanıyor mu?",
                a: "Evet, taşımasını gerçekleştirdiğimiz tüm eşyalar araca yüklendiği andan teslim edilene kadar anlaşmalı sigorta şirketimiz tarafından olası hasarlara karşı tam kapsamlı olarak sigortalanmaktadır."
              },
              {
                q: "Paketleme ve ambalajlama hizmeti veriyor musunuz?",
                a: "Kesinlikle. Beyaz eşyalar, mobilyalar ve hassas eşyalarınız uzman ekibimiz tarafından darbe emici özel ambalaj malzemeleriyle sarılır ve araca o şekilde güvenle yüklenir."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-[#0D1C42] mb-3 flex items-start gap-3">
                  <span className="text-[#e6b422] font-black text-xl">S.</span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 pl-8 leading-relaxed">
                  <span className="text-gray-400 font-bold mr-2">C.</span>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/global-nakliye.jpg"
            alt="Global Nakliyat Filo"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0D1C42]/85"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">1992'den Beri Güven Taşıyoruz</h2>
              <div className="w-20 height-4 bg-[#e6b422] rounded-full mb-8" style={{ height: '4px' }}></div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Global Nakliyat olarak 30 yılı aşkın süredir evden eve nakliyat ve parça eşya taşıma sektöründe öncü firmalardan biriyiz. Kendi öz mal araç filomuz ve kadrolu uzman personelimizle hizmet veriyoruz.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Taşeron kullanmıyor, her taşımayı kendi güvencemiz ve sigortamız altında gerçekleştiriyoruz. Müşteri memnuniyetini merkeze alan yaklaşımımızla eşyalarınızı yeni adresinize güvenle ulaştırıyoruz.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold text-[#e6b422] mb-2">30+</div>
                  <div className="text-gray-300">Yıllık Tecrübe</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#e6b422] mb-2">15.000+</div>
                  <div className="text-gray-300">Mutlu Müşteri</div>
                </div>
              </div>
              
              <Link href="/hakkimizda" className="btn-primary">
                Hakkımızda Daha Fazla
              </Link>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl relative">
                <div className="absolute -top-6 -right-6 bg-[#e6b422] text-[#0D1C42] font-bold py-3 px-6 rounded-full shadow-lg transform rotate-3">
                  %100 Garantili
                </div>
                <h3 className="text-2xl font-bold text-[#0D1C42] mb-6">Hızlı Teklif Alın</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nereden</label>
                      <input type="text" placeholder="Örn: İstanbul" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D1C42] focus:border-[#0D1C42] outline-none" defaultValue="İstanbul" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nereye</label>
                      <input type="text" placeholder="Örn: Bodrum" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D1C42] focus:border-[#0D1C42] outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefon Numaranız</label>
                    <input type="tel" placeholder="05XX XXX XX XX" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D1C42] focus:border-[#0D1C42] outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Eşya Detayı</label>
                    <textarea placeholder="Taşınacak eşyalar hakkında kısa bilgi..." rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D1C42] focus:border-[#0D1C42] outline-none"></textarea>
                  </div>
                  <button type="button" className="w-full bg-[#0D1C42] hover:bg-[#1a2d5a] text-white font-bold py-4 rounded-lg transition-colors text-lg">
                    Fiyat İste
                  </button>
                  <p className="text-xs text-gray-500 text-center mt-4">Formu doldurduğunuzda müşteri temsilcimiz en kısa sürede sizi arayacaktır.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
