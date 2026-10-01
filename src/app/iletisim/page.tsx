import { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  alternates: { canonical: '/iletisim' },
  title: "İletişim | Global Nakliyat Parça Eşya Taşıma",
  description: "Global Nakliyat iletişim bilgileri. Parça eşya taşıma fiyatları ve ücretsiz ekspertiz için bize ulaşın. 0532 494 80 06",
};

export default function IletisimPage() {
  return (
    <>
      <Hero 
        title="İletişim" 
        subtitle="Taşıma ihtiyaçlarınız için 7/24 bize ulaşabilir, ücretsiz ekspertiz ve fiyat teklifi alabilirsiniz."
        bgImage="/images/122101908_2674360342829319_6697841315808544910_o.jpg"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#0D1C42]">Bize <span className="text-[#e6b422]">Ulaşın</span></h2>
              <p className="text-gray-600 mb-10 text-lg">
                Parsiyel taşıma ve evden eve nakliyat hizmetlerimiz hakkında detaylı bilgi almak, fiyat teklifi istemek veya önerilerinizi paylaşmak için iletişim kanallarımızdan bize ulaşabilirsiniz.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#F8F9FC] text-[#e6b422] rounded-full flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0D1C42] mb-2">Telefon Numaralarımız</h3>
                    <div className="space-y-2">
                      <a href="tel:05324948006" className="block text-gray-600 hover:text-[#e6b422] transition-colors font-bold text-lg">0532 494 80 06 (GSM & WhatsApp)</a>
                      <a href="tel:02122598067" className="block text-gray-600 hover:text-[#e6b422] transition-colors">0212 259 80 67 (Avrupa Yakası)</a>
                      <a href="tel:02163838241" className="block text-gray-600 hover:text-[#e6b422] transition-colors">0216 383 82 41 (Anadolu Yakası)</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#F8F9FC] text-[#e6b422] rounded-full flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0D1C42] mb-2">Merkez Ofisimiz</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Feyzullah mah. Yunus Emre Cad.<br />
                      Lale Apt. 10/5<br />
                      Maltepe / İstanbul
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#F8F9FC] text-[#e6b422] rounded-full flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0D1C42] mb-2">E-Posta</h3>
                    <a href="mailto:info@globalnakliyat.com.tr" className="text-gray-600 hover:text-[#e6b422] transition-colors">
                      info@globalnakliyat.com.tr
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-[#F8F9FC] p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold text-[#0D1C42] mb-6">Fiyat Teklifi Alın</h3>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#0D1C42] mb-2">Adınız Soyadınız</label>
                      <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D1C42] focus:border-[#0D1C42] outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0D1C42] mb-2">Telefon Numaranız</label>
                      <input type="tel" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D1C42] focus:border-[#0D1C42] outline-none transition-all" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#0D1C42] mb-2">Nereden (İl/İlçe)</label>
                      <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D1C42] focus:border-[#0D1C42] outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0D1C42] mb-2">Nereye (İl/İlçe)</label>
                      <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D1C42] focus:border-[#0D1C42] outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0D1C42] mb-2">Eşya Detayı ve Ek Bilgiler</label>
                    <textarea rows={4} placeholder="Taşınacak eşyalar (örn: 1 adet buzdolabı, 3 koli, 1 koltuk) ve kat durumları..." className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D1C42] focus:border-[#0D1C42] outline-none transition-all"></textarea>
                  </div>
                  <button type="button" className="btn-primary w-full py-4 text-lg rounded-xl">
                    Teklif İste
                  </button>
                  <p className="text-xs text-center text-gray-500 mt-4">Formu gönderdiğinizde kvkk aydınlatma metnini kabul etmiş sayılırsınız.</p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-gray-200 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48215.35267156116!2d29.124694498394467!3d40.95758249688009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac46d5c6cc5e9%3A0xc07cf1c33c8b417e!2sMaltepe%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1714041042784!5m2!1str!2str" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Global Nakliyat Konum"
          className="absolute inset-0 grayscale contrast-125 opacity-90"
        ></iframe>
      </section>
    </>
  );
}
