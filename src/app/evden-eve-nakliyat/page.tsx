import { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceSteps from "@/components/ServiceSteps";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  alternates: { canonical: '/evden-eve-nakliyat' },
  title: "Evden Eve Nakliyat | Asansörlü ve Sigortalı | Global Nakliyat",
  description: "Şehiriçi ve şehirler arası profesyonel evden eve nakliyat hizmeti. Eşyalarınızı ambalajlı, asansörlü ve sigortalı olarak yeni evinize güvenle taşıyoruz.",
};

export default function EvdenEveNakliyatPage() {
  return (
    <>
      <Hero 
        title="Evden Eve Nakliyat" 
        subtitle="Evinizi taşımak artık stresli bir süreç değil. Uzman kadromuz, kapalı çelik kasalı araçlarımız ve asansörlü taşıma sistemlerimizle eşyalarınız güvende."
        bgImage="/images/118833877_2623351991263488_7009477033501235308_o.jpg"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0D1C42]">
                Profesyonel <span className="text-[#e6b422]">Evden Eve</span> Taşıma
              </h2>
              <div className="w-20 h-1.5 bg-[#e6b422] rounded-full mb-6"></div>
              
              <div className="prose max-w-none text-gray-600 space-y-4 text-lg leading-relaxed">
                <p>
                  Global Nakliyat olarak, ev taşıma sürecinin ne kadar hassas ve yorucu olabileceğinin bilincindeyiz. Bu yüzden tüm yükü sizin omuzlarınızdan alıyor, A'dan Z'ye anahtar teslim evden eve nakliyat hizmeti sunuyoruz.
                </p>
                <p>
                  Taşıma öncesi ücretsiz ekspertiz hizmetimizle eşyalarınızı inceliyor, size en uygun araç ve personel sayısını belirliyoruz. Beyaz eşyalarınız, mobilyalarınız ve hassas eşyalarınız balonlu naylonlar, streç filmler ve özel kılıflarla titizlikle paketlenmektedir.
                </p>
                <p>
                  Yeni evinizde ise mobilyalarınızın montajı uzman marangozlarımız tarafından yapılarak, beyaz eşyalarınızın tesisat bağlantıları (hazır olan noktalara) gerçekleştirilir. Size sadece yeni evinizin keyfini çıkarmak kalır.
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
              <div className="bg-[#F8F9FC] p-8 rounded-2xl border border-gray-100 text-center">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-xl font-bold text-[#0D1C42] mb-2">Özel Ambalaj</h3>
                <p className="text-gray-500 text-sm">Eşyalarınız cinsine uygun malzemelerle paketlenir.</p>
              </div>
              <div className="bg-[#F8F9FC] p-8 rounded-2xl border border-gray-100 text-center mt-8">
                <div className="text-4xl mb-4">🏗️</div>
                <h3 className="text-xl font-bold text-[#0D1C42] mb-2">Asansörlü Taşıma</h3>
                <p className="text-gray-500 text-sm">Yüksek katlara güvenli ve hızlı taşıma için dış cephe asansörü.</p>
              </div>
              <div className="bg-[#F8F9FC] p-8 rounded-2xl border border-gray-100 text-center -mt-8">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-bold text-[#0D1C42] mb-2">Montaj Desteği</h3>
                <p className="text-gray-500 text-sm">Mobilya ve beyaz eşyalarınızın söküm/kurulum işlemleri.</p>
              </div>
              <div className="bg-[#0D1C42] p-8 rounded-2xl border border-gray-100 text-center">
                <div className="text-4xl mb-4 text-[#e6b422]">🛡️</div>
                <h3 className="text-xl font-bold text-white mb-2">Tam Sigorta</h3>
                <p className="text-gray-300 text-sm">Tüm süreç anlaşmalı sigorta şirketimiz güvencesinde.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceSteps />

      <CTABanner title="Evinizi Güvenle Taşıyalım" subtitle="Ücretsiz ekspertiz hizmetimizden yararlanmak ve evden eve nakliyat fiyatlarımızı öğrenmek için hemen iletişime geçin." />
    </>
  );
}
