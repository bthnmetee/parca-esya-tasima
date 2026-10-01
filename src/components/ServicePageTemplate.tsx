import Image from "next/image";
import Link from "next/link";
import { ServiceData } from "@/data/services";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import ServiceSteps from "@/components/ServiceSteps";

export default function ServicePageTemplate({ service }: { service: ServiceData }) {
  // Schema for SEO
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.h1,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Global Nakliyat",
      "image": "https://www.globalnakliyat.com.tr/logo.png",
      "telephone": "0532 494 80 06"
    },
    "description": service.metaDescription,
    "areaServed": "Türkiye"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Hero 
        title={service.h1} 
        subtitle={service.intro}
        bgImage="/images/118833877_2623351991263488_7009477033501235308_o.jpg"
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="container mx-auto px-4 md:px-8">
          <nav className="flex text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-[#e6b422] transition-colors">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <span className="text-[#0D1C42] font-semibold">{service.h1}</span>
          </nav>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-6 text-[#0D1C42]">
                {service.h1.split(" ")[0]} <span className="text-[#e6b422]">Taşıma Nedir?</span>
              </h2>
              <div className="prose max-w-none text-gray-600 text-lg leading-relaxed mb-10">
                <p>{service.content.whatIsIt}</p>
              </div>

              <div className="bg-[#F8F9FC] p-8 rounded-2xl border border-gray-100 mb-10">
                <h3 className="text-2xl font-bold text-[#0D1C42] mb-4 flex items-center gap-3">
                  <span className="text-3xl">📦</span> Nasıl Yapıyoruz?
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">{service.content.howWeDoIt}</p>
              </div>

              <h3 className="text-2xl font-bold text-[#0D1C42] mb-4 flex items-center gap-3">
                <span className="text-3xl">💰</span> Fiyatlandırma
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">{service.content.pricing}</p>

              <div className="border-l-4 border-[#e6b422] pl-6 py-2 mt-8">
                <h4 className="font-bold text-xl text-[#0D1C42] mb-2">Avantajlarımız</h4>
                <ul className="grid sm:grid-cols-2 gap-4 mt-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-2 items-center text-gray-600">
                      <span className="text-[#e6b422] font-bold">✔</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:w-1/3 w-full sticky top-32">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#e6b422]/10 rounded-bl-full -z-0"></div>
                <h3 className="text-2xl font-bold text-[#0D1C42] mb-4 relative z-10">Hızlı Fiyat Alın</h3>
                <p className="text-gray-600 mb-6 text-sm relative z-10">Eşyanızın detaylarını bize ileterek anında teklif alabilirsiniz.</p>
                <div className="flex flex-col gap-4 relative z-10">
                  <a href="https://wa.me/905324948006" target="_blank" rel="noopener noreferrer" className="bg-[#e6b422] hover:bg-[#d4a51e] text-[#0D1C42] font-bold py-4 rounded-xl text-center transition-colors">
                    WhatsApp Destek
                  </a>
                  <a href="tel:05324948006" className="bg-[#0D1C42] hover:bg-[#1a2d5a] text-white font-bold py-4 rounded-xl text-center transition-colors">
                    0532 494 80 06 Ara
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceSteps />
      <CTABanner />
    </>
  );
}
