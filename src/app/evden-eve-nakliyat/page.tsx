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

          {/* Extended SEO Content */}
          <div className="max-w-4xl mx-auto space-y-16 mt-20 border-t border-gray-100 pt-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0D1C42] mb-6">
                Şehir İçi ve Şehirler Arası Evden Eve Nakliyat Çözümleri
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                <strong>Evden eve nakliyat</strong>, yalnızca eşyaların bir adresten başka bir adrese taşınmasından ibaret değildir; aynı zamanda insanların anılarını, yaşam alanlarını ve değer verdikleri tüm eşyaları yeni bir mekana güvenle taşıma sürecidir. Global Nakliyat olarak, gerek İstanbul içi gerekse şehirler arası tüm taşınma ihtiyaçlarınızda modern, güvenilir ve yenilikçi çözümler sunmaktayız. Taşınma gününün getirdiği stresi ve yorgunluğu üzerinizden alarak, süreci sizin için son derece konforlu bir deneyime dönüştürüyoruz.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Nakliyat sürecine başlamadan önce gönderdiğimiz ücretsiz ekspertiz ekibi, eşyalarınızın hacmini, bulunduğunuz ve taşınacağınız evlerin kat durumunu, asansör kullanım imkanlarını detaylı bir şekilde analiz eder. Bu analiz sonucunda size en uygun araç tipi ve personel sayısı belirlenir. Bu şeffaf fiyatlandırma politikası sayesinde taşıma günü hiçbir kötü sürprizle veya ek ücret talebiyle karşılaşmazsınız.
              </p>
            </div>

            <div className="bg-[#F8F9FC] p-8 rounded-2xl border border-gray-100">
              <h2 className="text-2xl font-bold text-[#0D1C42] mb-6 flex items-center gap-3">
                <span className="text-3xl">🛡️</span> Asansörlü Evden Eve Nakliyat İle %100 Güvenlik
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Özellikle büyük şehirlerdeki yüksek katlı binalarda veya bina asansörünün eşya taşımasına uygun olmadığı apartmanlarda <strong>asansörlü evden eve nakliyat</strong> hizmeti büyük bir avantaj sağlamaktadır. Dış cephe asansör sistemlerimiz sayesinde, eşyalarınız bina merdivenlerinden taşınırken oluşabilecek çarpma, çizilme ve kırılma risklerinden tamamen korunur.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Asansörlü taşıma aynı zamanda nakliyat sürecini yarı yarıya hızlandırır. Saatlerce sürecek olan bedensel taşıma işlemleri, hidrolik asansör sistemlerimizle dakikalar içinde tamamlanır. Bu durum hem çevreye ve komşulara verilen rahatsızlığı en aza indirir hem de eşyalarınızın çok daha sarsıntısız ve güvenli bir şekilde nakliye aracına yüklenmesini sağlar. Dış cephe asansörlerimiz 20. kata kadar güvenle ulaşabilme kapasitesine sahiptir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0D1C42] mb-6">
                Eksiksiz Ambalajlama ve Marangozlu Taşıma Hizmeti
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Sıfır hata prensibiyle yürüttüğümüz nakliye işlemlerinin en önemli aşaması paketleme ve ambalajlamadır. Evinizdeki tüm eşyalar, cinsine ve hassasiyet derecesine göre gruplandırılarak özel malzemelerle sarılır.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex gap-3">
                  <span className="text-[#e6b422] font-bold text-xl">✓</span>
                  <p className="text-gray-600"><strong>Mobilyalar:</strong> Gardırop, yemek masası, yatak odası takımları gibi büyük mobilyalarınız, uzman marangozlarımız tarafından özenle sökülür. Parçalar havalı balonlu naylonlar ve kalın streç filmlerle kaplanarak çizilmelere karşı koruma altına alınır.</p>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#e6b422] font-bold text-xl">✓</span>
                  <p className="text-gray-600"><strong>Beyaz Eşyalar:</strong> Buzdolabı, çamaşır ve bulaşık makineleriniz tesisatlarından söküldükten sonra taşıma esnasında sarsıntıdan etkilenmemesi için sabitleyici köpükler ve kalın kılıflarla sarılır.</p>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#e6b422] font-bold text-xl">✓</span>
                  <p className="text-gray-600"><strong>Kırılacak Eşyalar:</strong> Mutfak gereçleri, vitrin eşyaları ve dekoratif ürünleriniz özel ambalaj kağıtlarına sarılarak darbeye dayanıklı sert karton koliler içerisine istiflenir. Kolilerin üzerine gerekli uyarı etiketleri yapıştırılır.</p>
                </li>
              </ul>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Yeni evinize ulaştığımızda ise tüm bu işlemler tersine uygulanır. Marangozlarımız mobilyalarınızın kurulumunu sizin istediğiniz odalara ve belirttiğiniz dizayna göre gerçekleştirir. Beyaz eşyalarınızın bağlantıları yapılır ve eşyalarınız tam kullanıma hazır halde size teslim edilir.
              </p>
            </div>

            <div className="bg-[#0D1C42] text-white p-8 md:p-12 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="100" fill="#e6b422" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
                Garantili ve Sigortalı Evden Eve Taşımacılık
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed relative z-10 mb-4">
                Ne kadar dikkatli ve özenli taşıma yapılırsa yapılsın, karayolu taşımacılığında beklenmedik durumlar (kaza, yangın vb.) yaşanma ihtimali her zaman vardır. Bu nedenle Global Nakliyat, gerçekleştirdiği tüm evden eve nakliyat işlemlerinde <strong>tam kapsamlı emtia sigortası</strong> uygulamaktadır.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed relative z-10">
                Eşyalarınız araca yüklendiği andan itibaren başlayan bu sigorta güvencesi, yeni evinizde kurulumların tamamlanıp eşyaların teslim edilmesine kadar devam eder. Bizimle çalıştığınızda eşyalarınızın maddi değerinin daima koruma altında olduğunu bilirsiniz. Güvenli, stressiz ve profesyonel bir taşınma deneyimi için, müşteri memnuniyeti odaklı hizmetimizden yararlanmak üzere hemen bizimle iletişime geçin ve randevunuzu oluşturun.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServiceSteps />

      <CTABanner title="Evinizi Güvenle Taşıyalım" subtitle="Ücretsiz ekspertiz hizmetimizden yararlanmak ve evden eve nakliyat fiyatlarımızı öğrenmek için hemen iletişime geçin." />
    </>
  );
}
