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
    url: "https://www.globalnakliyat.com.tr/sehirler-arasi-parca-esya-tasima",
  }
};

export default function ParcaEsyaTasimaPage() {
  const routesByRegion = getRoutesByRegion();

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Şehirler Arası Parça Eşya Taşıma",
    "description": "Türkiye genelinde sigortalı şehirler arası parça eşya taşıma ve parsiyel nakliyat hizmeti.",
    "url": "https://www.globalnakliyat.com.tr/sehirler-arasi-parca-esya-tasima"
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
        </div>
      </section>

      <CTABanner />
    </>
  );
}
