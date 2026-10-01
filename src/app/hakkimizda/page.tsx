import { Metadata } from "next";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: { canonical: '/hakkimizda' },
  title: "Hakkımızda | Global Nakliyat 1992'den Beri Güvenle",
  description: "Global Nakliyat olarak 1992 yılından bu yana parça eşya taşıma, evden eve nakliyat alanında öz mal araçlarımız ve uzman kadromuzla hizmet veriyoruz.",
};

export default function HakkimizdaPage() {
  return (
    <>
      <Hero 
        title="Hakkımızda" 
        subtitle="1992 yılından bu yana, sektörde güvenin ve kalitenin adresi olarak parça eşya taşıma ve evden eve nakliyat hizmetleri sunuyoruz."
        bgImage="/images/118833877_2623351991263488_7009477033501235308_o.jpg"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0D1C42]">
                Global Nakliyat <span className="text-[#e6b422]">Kimdir?</span>
              </h2>
              <div className="w-20 h-1.5 bg-[#e6b422] rounded-full mb-8"></div>
              
              <div className="prose max-w-none text-gray-600 space-y-6 text-lg leading-relaxed">
                <p>
                  Global Nakliyat, 1992 yılında İstanbul'da kurulan ve o günden bu yana müşteri memnuniyetini en üst düzeyde tutmayı ilke edinen köklü bir nakliye firmasıdır. Çeyrek asrı aşan tecrübemizle, evden eve nakliyat ve özellikle parsiyel (parça) eşya taşımacılığında sektörün öncü markalarından biri konumundayız.
                </p>
                <p>
                  Sürekli yenilediğimiz ve büyüttüğümüz <strong>öz mal araç filomuz</strong> sayesinde Türkiye'nin 81 iline güvenle ulaşıyoruz. Taşıma sürecinde dışarıdan kiralık araç veya taşeron kullanmıyor, tüm operasyonu kendi bünyemizdeki eğitimli ve kadrolu personelimizle yönetiyoruz. Bu sayede taşıma kalitemizi her zaman aynı yüksek standartta tutabiliyoruz.
                </p>
                <p>
                  Özellikle İstanbul çıkışlı <strong>Ege, Akdeniz ve Marmara</strong> bölgelerine haftalık düzenli seferlerimizle, müşterilerimize ekonomik ve güvenilir parça eşya taşıma imkanı sunuyoruz. Taşıdığımız her bir eşyanın manevi ve maddi değerinin farkında olarak, anlaşmalı sigorta şirketlerimiz aracılığıyla tam kapsamlı sigorta yapıyor ve riskleri sıfıra indiriyoruz.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#0D1C42] mb-2 font-heading">30+</div>
                  <div className="text-gray-500 font-medium">Yıllık Tecrübe</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#0D1C42] mb-2 font-heading">15K+</div>
                  <div className="text-gray-500 font-medium">Mutlu Müşteri</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#0D1C42] mb-2 font-heading">81</div>
                  <div className="text-gray-500 font-medium">İle Hizmet</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#0D1C42] mb-2 font-heading">%100</div>
                  <div className="text-gray-500 font-medium">Sigortalı</div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-[250px] rounded-2xl overflow-hidden shadow-lg mt-8">
                  <Image src="/images/118742880_2615638202034867_3408035255474320490_n.jpg" alt="Global Nakliyat Filo" fill className="object-cover" />
                </div>
                <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/122045558_2674360682829285_1270275525547055910_o.jpg" alt="Global Nakliyat Ekip" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/122055663_2674360646162622_5170425712521992497_o.jpg" alt="Global Nakliyat Çalışma" fill className="object-cover" />
                </div>
                <div className="relative h-[250px] rounded-2xl overflow-hidden shadow-lg bg-[#0D1C42] flex items-center justify-center p-8 text-center">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#e6b422] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <h3 className="text-white font-bold text-xl mb-2">Kalite Politikamız</h3>
                    <p className="text-gray-300 text-sm">Sıfır hasar ve %100 müşteri memnuniyeti hedefiyle çalışıyoruz.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F9FC]">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0D1C42]">Neden Bizi <span className="text-[#e6b422]">Tercih Etmelisiniz?</span></h2>
            <div className="section-divider mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6">
              <div className="w-16 h-16 bg-blue-50 text-[#0D1C42] rounded-xl flex items-center justify-center shrink-0 text-3xl">🚛</div>
              <div>
                <h3 className="text-xl font-bold text-[#0D1C42] mb-3">Öz Mal Filo</h3>
                <p className="text-gray-600 leading-relaxed">Farklı kapasitelerdeki tamamen kendi bünyemize ait kapalı çelik kasalı araçlarımızla taşımalarımızı gerçekleştiriyoruz.</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6">
              <div className="w-16 h-16 bg-blue-50 text-[#0D1C42] rounded-xl flex items-center justify-center shrink-0 text-3xl">👨‍🔧</div>
              <div>
                <h3 className="text-xl font-bold text-[#0D1C42] mb-3">Kadrolu Personel</h3>
                <p className="text-gray-600 leading-relaxed">Günübirlik çalışanlar değil, yıllardır bizimle olan tecrübeli ve eğitimli paketleme/taşıma ekibiyle çalışıyoruz.</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6">
              <div className="w-16 h-16 bg-blue-50 text-[#0D1C42] rounded-xl flex items-center justify-center shrink-0 text-3xl">🛡️</div>
              <div>
                <h3 className="text-xl font-bold text-[#0D1C42] mb-3">Sigortalı Taşımacılık</h3>
                <p className="text-gray-600 leading-relaxed">Tüm yüklerinizi, yola çıktığı ilk andan yeni adresinize teslim edilene dek oluşabilecek risklere karşı sigortalıyoruz.</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6">
              <div className="w-16 h-16 bg-blue-50 text-[#0D1C42] rounded-xl flex items-center justify-center shrink-0 text-3xl">⏱️</div>
              <div>
                <h3 className="text-xl font-bold text-[#0D1C42] mb-3">Zamanında Teslimat</h3>
                <p className="text-gray-600 leading-relaxed">Önceden planlanmış rotalarımız sayesinde, size söz verdiğimiz gün ve saatte eşyalarınızın alımını ve teslimatını yapıyoruz.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
