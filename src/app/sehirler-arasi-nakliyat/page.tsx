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

          {/* Extended SEO Content for 1200+ Words Goal */}
          <div className="max-w-4xl mx-auto space-y-16 mt-20 border-t border-gray-100 pt-16">
            
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0D1C42] mb-6">
                Şehirler Arası Nakliyatın Zorlukları ve Çözümlerimiz
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                <strong>Şehirler arası nakliyat</strong>, şehir içi taşımacılığa kıyasla çok daha karmaşık bir planlama gerektirir. Eşyaların yüzlerce, bazen binlerce kilometre yol kat edecek olması; hava şartları, yol durumu ve süspansiyon dayanıklılığı gibi faktörlerin önemini artırır. Global Nakliyat olarak, uzun mesafe taşımacılığının getirdiği tüm zorlukları öngörüyor ve 30 yılı aşkın tecrübemizle bu zorluklara profesyonel çözümler üretiyoruz.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                En büyük hassasiyetimiz, eşyalarınızın yola çıktığı ilk anki sağlamlığı ile yeni evinize ulaşmasıdır. Bunun için kullandığımız tüm nakliye araçlarının periyodik bakımları aksatılmadan yapılır. Araç kasalarımız, evden eve taşımacılık standartlarına uygun olarak tamamen çelik sacdan üretilmiş ve iç kısımları eşyaların sürtünme ile zarar görmesini engelleyecek özel yalıtım malzemeleri ile kaplanmıştır.
              </p>
            </div>

            <div className="bg-[#F8F9FC] p-8 rounded-2xl border border-gray-100">
              <h2 className="text-2xl font-bold text-[#0D1C42] mb-6 flex items-center gap-3">
                <span className="text-3xl">📦</span> Uzun Yola Özel Ekstra Koruyucu Ambalajlama
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Şehirler arası taşınacak eşyalar için standart bir ambalajlama yeterli değildir. Eşyaların araç içerisinde saatlerce seyir halinde olacağı düşünüldüğünde, ekstra güvenlik önlemleri şarttır. Ekibimiz, eşyalarınızı teslim alırken uzun yola uygun <strong>çift katmanlı paketleme tekniği</strong> uygular.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 mt-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#e6b422] font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-[#0D1C42]">Kraft Kağıtlı Patpat:</strong> Normal balonlu naylonların aksine, dış yüzeyi kalın kraft kağıdı ile kaplı patpatlar kullanarak yırtılma direncini artırıyoruz.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#e6b422] font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-[#0D1C42]">Köşe Koruyucular:</strong> Mobilyalarınızın ve beyaz eşyalarınızın sivri köşeleri, darbe emici özel köpük profillerle desteklenir.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#e6b422] font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-[#0D1C42]">Gergili Sabitleme:</strong> Araç içi istifleme yapıldıktan sonra tüm eşyalar, kasada bulunan özel askı ve bağlama noktalarına gergili spanzetlerle sabitlenir.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#e6b422] font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-[#0D1C42]">Sert Kolileme:</strong> Kırılacak eşyalarınız için tek kullanımlık, oluklu kalın karton koliler kullanılır ve içleri destekleyici materyallerle doldurulur.
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0D1C42] mb-6">
                Komple Ev Taşıma vs. Parsiyel (Parça) Eşya Taşıma
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Global Nakliyat olarak müşterilerimize iki farklı <strong>şehirler arası nakliye</strong> seçeneği sunuyoruz. Taşınacak eşyanızın hacmine ve bütçenize göre en uygun olanı tercih edebilirsiniz:
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="border border-gray-200 rounded-xl p-6 hover:border-[#e6b422] transition-colors">
                  <h3 className="text-xl font-bold text-[#0D1C42] mb-3">1. Özel Araçla Komple Ev Taşıma (VIP)</h3>
                  <p className="text-gray-600 mb-0">
                    2+1, 3+1 veya daha büyük evleriniz için uyguladığımız sistemdir. Belirlenen taşıma gününde adresinize gelen nakliye aracı sadece size tahsis edilir. Eşyalarınız yüklenir yüklenmez (veya sizin belirlediğiniz tarihte) direkt olarak yeni evinize doğru yola çıkar. Bu seçenek, taşıma süresinin en kısa olduğu ve aracın tamamen size ait olduğu premium hizmetimizdir.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-6 hover:border-[#e6b422] transition-colors">
                  <h3 className="text-xl font-bold text-[#0D1C42] mb-3">2. Şehirler Arası Parsiyel (Parça Eşya) Taşıma</h3>
                  <p className="text-gray-600 mb-0">
                    Sadece birkaç parça mobilya, çeyiz eşyası, öğrenci evi veya yazlık eşyası göndermek isteyen müşterilerimiz için tasarlanmıştır. Eşyalarınız, sizinle aynı yöne (örneğin İstanbul'dan İzmir'e) gidecek olan diğer müşterilerimizin eşyalarıyla aynı araçta taşınır. Araç içerisinde her müşterinin eşyası fileler veya suntalarla birbirinden net bir şekilde ayrılır, kesinlikle karışma olmaz. Bu yöntemin en büyük avantajı <strong>çok daha ekonomik fiyatlar</strong> sunmasıdır.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0D1C42] mb-6">
                Şehirler Arası Nakliyat Fiyatları Nasıl Belirlenir?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Her taşınma süreci kendi içinde benzersizdir ve bu nedenle <strong>şehirler arası nakliye fiyatları</strong> sabit bir liste üzerinden verilemez. Fiyatlandırma yapılırken adil ve şeffaf bir hesaplama yöntemi kullanıyoruz. Ücreti belirleyen temel kriterler şunlardır:
              </p>
              <ul className="list-disc pl-6 text-gray-600 text-lg leading-relaxed space-y-2 mb-6">
                <li><strong>İki Şehir Arasındaki Mesafe:</strong> İstanbul ile varış noktası arasındaki kilometre bazlı yakıt ve otoban giderleri.</li>
                <li><strong>Eşyanın Hacmi (Metreküp):</strong> Komple araç tahsisi mi yapılacak yoksa parsiyel olarak aracın belirli bir bölümü mü kullanılacak?</li>
                <li><strong>Kat Durumu ve Asansör Gereksinimi:</strong> Eşyaların alınacağı ve teslim edileceği binaların kat yükseklikleri, modüler asansör kurulumu gerekip gerekmediği.</li>
                <li><strong>Paketleme ve Montaj:</strong> Eşyaların tamamının tarafımızca paketlenmesi ve yeni evde kurulumlarının yapılması işlemleri.</li>
              </ul>
              <p className="text-gray-600 text-lg leading-relaxed">
                Müşteri temsilcilerimizle yapacağınız kısa bir görüşme veya WhatsApp üzerinden göndereceğiniz eşya fotoğrafları ile dakikalar içinde en doğru fiyat teklifini alabilirsiniz. Fiyat teklifimiz sözleşme ile sabitlenir ve taşıma günü sürpriz maliyetlerle karşılaşmazsınız.
              </p>
            </div>

          </div>
        </div>
      </section>

      <ServiceSteps />
      <CTABanner title="Şehirler Arası Taşıma Fiyatı Alın" subtitle="Eşyalarınızın hacmine ve gideceği mesafeye göre en uygun fiyat teklifini sunabilmemiz için bizimle iletişime geçin." />
    </>
  );
}
