import { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceSteps from "@/components/ServiceSteps";
import CTABanner from "@/components/CTABanner";
import Link from "next/link";
import { getPopularRoutes } from "@/data/routes";

export const metadata: Metadata = {
  alternates: { canonical: '/sehirler-arasi-nakliyat' },
  title: "Şehirler Arası Nakliyat | 81 İle Güvenli Taşıma | Global Nakliyat",
  description: "İstanbul merkezli Türkiye'nin tüm illerine şehirler arası nakliyat hizmeti. Düzenli seferler, kapalı çelik kasa araçlar ve tam sigorta güvencesi.",
};

export default function SehirlerArasiNakliyatPage() {
  const popularRoutes = getPopularRoutes();

  return (
    <>
      <Hero 
        title="Şehirler Arası Nakliyat" 
        subtitle="Şehir değiştirmenin zorluklarını bize bırakın. İstanbul'dan Türkiye'nin 81 iline, özel araçlarla veya parsiyel (parça eşya) olarak güvenli nakliyat hizmeti veriyoruz."
        bgImage="/images/118742880_2615638202034867_3408035255474320490_n.jpg"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0D1C42]">
                Şehirler Arası <span className="text-[#e6b422]">Güvenli</span> Yolculuk
              </h2>
              <div className="w-20 h-1.5 bg-[#e6b422] rounded-full mb-6"></div>
              
              <div className="prose max-w-none text-gray-600 space-y-4 text-lg leading-relaxed">
                <p>
                  Şehirler arası nakliyat, şehir içi taşımacılığa göre çok daha fazla dikkat ve profesyonellik gerektiren bir süreçtir. Uzun yol şartlarına uygun, özel dizayn edilmiş kapalı çelik kasa araçlarımızla eşyalarınızı Türkiye'nin her noktasına güvenle taşıyoruz.
                </p>
                <p>
                  <strong>Özel Araç Nakliyesi:</strong> Sadece size tahsis edilen aracımızla, eşyalarınız istediğiniz gün ve saatte yüklenir, direkt olarak yeni adresinize doğru yola çıkar. Tam ev eşyası taşımaları için idealdir.
                </p>
                <p>
                  <strong>Parsiyel (Parça) Eşya Nakliyesi:</strong> Daha az miktardaki eşyalarınız için aynı güzergaha giden diğer müşterilerimizin eşyalarıyla (birbirine karışmadan) aynı araçta taşınır. Bu sayede nakliye maliyetleriniz ciddi oranda düşer. Özelikle Ege ve Akdeniz bölgesine her hafta düzenli parsiyel seferlerimiz bulunmaktadır.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/sehirler-arasi-parca-esya-tasima" className="btn-secondary">
                  Parsiyel (Parça Eşya) Rotalarımız
                </Link>
                <a href="https://wa.me/905324948006" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  WhatsApp Fiyat Al
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <h3 className="text-2xl font-bold text-[#0D1C42] mb-6 border-b border-gray-200 pb-4">Neden Şehirler Arasında Bizi Seçmelisiniz?</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 text-[#0D1C42] rounded-full flex items-center justify-center shrink-0">🛣️</div>
                    <div>
                      <h4 className="font-bold text-[#0D1C42] text-lg">Uzun Yol Deneyimi</h4>
                      <p className="text-gray-600 text-sm mt-1">Şoförlerimiz Türkiye'nin tüm yol şartlarına hakim, SRC belgeli ve uzun yol tecrübesine sahip profesyonellerdir.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 text-[#0D1C42] rounded-full flex items-center justify-center shrink-0">🚛</div>
                    <div>
                      <h4 className="font-bold text-[#0D1C42] text-lg">Çelik Kasa Araçlar</h4>
                      <p className="text-gray-600 text-sm mt-1">Araçlarımız evden eve nakliyat için özel üretilmiş, sarsıntıyı en aza indiren süspansiyon sistemlerine sahip kapalı çelik kasalıdır.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 text-[#0D1C42] rounded-full flex items-center justify-center shrink-0">📑</div>
                    <div>
                      <h4 className="font-bold text-[#0D1C42] text-lg">Emtia Sigortası</h4>
                      <p className="text-gray-600 text-sm mt-1">Şehirler arası yollarda oluşabilecek kaza, yangın vb. risklere karşı eşyalarınız tam değerinden sigortalanmaktadır.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceSteps />
      <CTABanner title="Şehirler Arası Taşıma Fiyatı Alın" subtitle="Eşyalarınızın hacmine ve gideceği mesafeye göre en uygun fiyat teklifini sunabilmemiz için bizimle iletişime geçin." />
    </>
  );
}
