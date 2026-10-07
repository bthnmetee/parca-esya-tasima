import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import QuietScroll from "@/components/QuietScroll";
import ReviewSlider from "@/components/ReviewSlider";
import { buildHomeSchema } from "@/data/homeSchema";

export const metadata: Metadata = {
  title: {
    absolute: "İstanbul Parça Eşya Taşımacılığı - Global Nakliyat A.Ş",
  },
  description:
    "İstanbul Parça Eşya Taşıma Şirketi Global Nakliyat, az miktardaki eşyalarınızı uygun araçlarla adresinizden alarak güvenli şekilde yeni adresinize taşır.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "İstanbul Parça Eşya Taşımacılığı - Global Nakliyat A.Ş",
    description:
      "İstanbul Parça Eşya Taşıma Şirketi Global Nakliyat, az miktardaki eşyalarınızı uygun araçlarla adresinizden alarak güvenli şekilde yeni adresinize taşır.",
    url: "https://istanbulparcaesyatasima.com",
    siteName: "İstanbul Parça Eşya Taşıma",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "/images/global-nakliye.jpg",
        width: 1280,
        height: 852,
        alt: "İstanbul Parça Eşya Taşıma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@globalnakliyat",
    creator: "@globalnakliyat",
    title: "İstanbul Parça Eşya Taşımacılığı - Global Nakliyat A.Ş",
    description:
      "İstanbul Parça Eşya Taşıma Şirketi Global Nakliyat, az miktardaki eşyalarınızı uygun araçlarla adresinizden alarak güvenli şekilde yeni adresinize taşır.",
    images: [
      {
        url: "/images/global-nakliye.jpg",
        width: 1280,
        height: 852,
        alt: "İstanbul Parça Eşya Taşıma",
      },
    ],
  },
};

export default function Home() {
  const serviceCards = [
    {
      title: "Yazlık Eşya Taşıma",
      image: "/images/yazlik-esya-tasima.webp",
      text: "Bodrum, Marmaris ve Çeşme gibi yazlıklara koltuk, beyaz eşya ve sezonluk kolileriniz adresinizden alınır, yeni adrese teslim edilir.",
    },
    {
      title: "Öğrenci Eşyası Taşıma",
      image: "/images/ogrenci-esyasi-tasima.webp",
      text: "Valiz, koli, çalışma masası ve kişisel eşyalar uygun araçla evden veya yurttan alınır. Az parça için tam kamyon kiralamazsınız.",
    },
    {
      title: "Çeyiz Eşyası Taşıma",
      image: "/images/ceyiz-esyasi-tasima.webp",
      text: "Çeyiz, züccaciye ve yeni ev eşyası özel ambalajla sarılır. Kırılacak parçalar ayrı kolilenir, mobilya aynı gün kurulur.",
    },
    {
      title: "Tek Parça Eşya Taşıma",
      image: "/images/tek-parca-esya-tasima.webp",
      text: "Buzdolabı, koltuk takımı, dolap veya piyano gibi tek parçalar sabitlenerek taşınır. Yalnızca giden parça kadar ücret ödersiniz.",
    },
  ];

  const faqs = [
    {
      q: "Parça eşya taşıma fiyatları nasıl hesaplanır?",
      a: "Fiyat, eşyanın araçta kapladığı hacme, ağırlığına, mesafeye ve kat durumuna göre belirlenir. Tam kamyon kiralamazsınız. Yalnızca kendi yükünüzün kapladığı alan kadar ücret ödersiniz. Net rakam için eşya listesi ve iki adres yeterlidir."
    },
    {
      q: "Şehirler arası parça eşya taşıma kaç gün sürer?",
      a: "İstanbul çıkışlı İzmir ve Çeşme hattında teslim çoğu zaman bir ile iki gün sürer. Bodrum, Marmaris, Fethiye ve Antalya gibi daha uzun sahil hatlarında süre genellikle iki ile üç gündür. Yaz haftalarında erken gün ayırtmak teslimi rahatlatır."
    },
    {
      q: "Taşıma sırasında eşyalarım sigortalanıyor mu?",
      a: "Evet. Eşya araca yüklendiği andan teslim edilene kadar anlaşmalı sigorta kapsamındadır. Hasar olursa teslim tutanağı ve fotoğraf ile başvuru yapılır. Kapsam, yola çıkmadan size anlatılır."
    },
    {
      q: "Paketleme ve ambalajlama hizmeti veriyor musunuz?",
      a: "Evet. Beyaz eşya, mobilya ve kırılacak parçalar ekibimiz tarafından balonlu naylon, köşe koruyucu ve streç film ile sarılır. Buzdolabı ve çamaşır makinesi dik taşınır. Koliler numaralanır ve teslimde sayılır."
    },
    {
      q: "Hangi eşyalar parça eşya kapsamında taşınır?",
      a: "Birkaç koli, valiz, koltuk, yatak, gardırop, buzdolabı, çeyiz ve yazlık eşyası bu kapsamdadır. Evin tamamını boşaltmayan, yalnızca seçtiği parçaları götürmek isteyenler için planlanır. Tüp, yanıcı madde ve evcil hayvan alınmaz."
    },
    {
      q: "İstanbul içinde taşıma aynı gün biter mi?",
      a: "Şehir içi işlerde alım ve teslim çoğu zaman aynı gün tamamlanır. Saat, kat, asansör ve eşya listesine göre kurulur. Asansörsüz üst katlar ve dar merdivenler süreyi uzatabilir. Bunu baştan söylerseniz ekip doğru kişi sayısıyla gelir."
    },
    {
      q: "Eşyam başka müşterinin yüküyle karışır mı?",
      a: "Hayır. Aynı yöne giden yükler tek araçta ilerler ama sizin eşyanız ayrı bölmede durur ve numaralı listeyle teslim edilir. Yolda başka bir firmaya aktarma yapılmaz. Teslimde sayım birlikte yapılır."
    },
    {
      q: "Teklif almak için hangi bilgileri iletmeliyim?",
      a: "Alım adresi, teslim adresi, kat ve asansör durumu ile kısa bir eşya listesi yeterlidir. Piyano, çelik kasa veya çok camlı vitrin varsa fotoğraf gönderin. Yazılı teyit edilmeden gün kilitlenmez. Formu doldurduğunuzda temsilcimiz sizi arar."
    }
  ];

  const schema = buildHomeSchema(faqs);

  const priceRows = [
    { to: "İzmir", price: "6.000 TL'den başlayan", duration: "1-2 gün", popular: true, href: "/istanbul-izmir-parca-esya-tasima" },
    { to: "Çeşme", price: "7.000 TL'den başlayan", duration: "1-2 gün", popular: true, href: "/istanbul-cesme-parca-esya-tasima" },
    { to: "Ankara", price: "4.000 TL'den başlayan", duration: "1-2 gün", popular: false, href: "/istanbul-ankara-parca-esya-tasima" },
    { to: "Antalya", price: "7.000 TL'den başlayan", duration: "2-3 gün", popular: true, href: "/istanbul-antalya-parca-esya-tasima" },
    { to: "Bodrum", price: "8.500 TL'den başlayan", duration: "2-3 gün", popular: true, href: "/istanbul-bodrum-parca-esya-tasima" },
    { to: "Marmaris", price: "9.500 TL'den başlayan", duration: "2-3 gün", popular: false, href: "/istanbul-marmaris-parca-esya-tasima" },
    { to: "Fethiye", price: "10.000 TL'den başlayan", duration: "2-3 gün", popular: false, href: "/istanbul-fethiye-parca-esya-tasima" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Hero Section */}
      <div className="relative h-[92vh] min-h-[680px] w-full overflow-hidden flex items-center">
        {/* Background Image with Zoom Effect */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-parca-esya-tasima.webp"
            alt="Global Nakliyat Parça Eşya Taşıma"
            fill
            priority
            className="object-cover animate-hero-zoom"
            sizes="100vw"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1C42]/88 via-[#0D1C42]/55 to-[#0D1C42]/25"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-5xl">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#e6b422]/20 border border-[#e6b422]/30 backdrop-blur-sm animate-fade-up">
              <span className="text-[#e6b422] font-semibold text-sm tracking-wide uppercase">
                Türkiye'nin Her Yerine
              </span>
            </div>
            
            <h1 className="text-[clamp(1.05rem,4.6vw,4.5rem)] font-bold text-white mb-6 leading-tight tracking-tight whitespace-nowrap animate-fade-up-delay font-heading">
              İstanbul <span className="text-[#e6b422]">Parça Eşya</span> Taşıma
            </h1>
            
            <p className="text-lg md:text-xl text-white mb-10 max-w-2xl leading-relaxed animate-fade-up-delay-2">
              1992'den günümüze İstanbul çıkışlı Parça Eşya Taşıma hizmetiyle az miktardaki eşyalarınız için ekonomik ve güvenli çözümler sunuyoruz. Ege ve Akdeniz rotalarında her hafta düzenli seferler.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-2">
              <a href="https://wa.me/905324948006" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Ücretsiz Teklif Alın
              </a>
              <a href="tel:05324948006" className="btn-secondary !bg-[#25D366] !text-white hover:!bg-[#1DAA54] hover:!text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Hemen Arayın
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Parça eşya bilgi kutuları ve fiyat tablosu */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <article className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover">
              <p className="text-[#e6b422] font-semibold text-sm tracking-wide mb-4">01</p>
              <h2 className="text-2xl font-bold text-[#0D1C42] mb-4 leading-snug">İstanbul Parça Eşya Taşıma Nedir?</h2>
              <p className="text-gray-600 leading-relaxed">
                İstanbul Parça Eşya Taşıma, kamyon doldurmayacak az miktardaki eşyanın aynı hatta giden diğer yüklerle birlikte taşınmasıdır. Parça Eşya Taşıma ile birkaç koli, beyaz eşya, koltuk, çeyiz veya yazlık eşyası için tam araç kiralamazsınız; yalnızca eşyanızın kapladığı alan kadar ödersiniz.
              </p>
            </article>

            <article className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover">
              <p className="text-[#e6b422] font-semibold text-sm tracking-wide mb-4">02</p>
              <h3 className="text-2xl font-bold text-[#0D1C42] mb-4 leading-snug">İstanbul Parça Eşya Taşıma Şirketi</h3>
              <p className="text-gray-600 leading-relaxed">
                Global Nakliyat, 1992&apos;den bu yana hizmet veren bir Parça Eşya Taşıma Şirketi&apos;dir. Eşyalarınız adresinizden alınır, taşımaya uygun şekilde paketlenir, sigortalanır ve Ege ile Akdeniz rotalarında yeni adresinize teslim edilir.
              </p>
            </article>

            <article className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover">
              <p className="text-[#e6b422] font-semibold text-sm tracking-wide mb-4">03</p>
              <h3 className="text-2xl font-bold text-[#0D1C42] mb-4 leading-snug">İstanbul İçinde Parça Eşya Taşıma Nasıl Yapılır?</h3>
              <p className="text-gray-600 leading-relaxed">
                İstanbul içinde Parça Eşya Taşımacılığı, eşya listesine göre panelvan veya kamyonet seçilerek yapılır. Eşyalar bulunduğu adresten alınır, darbelere karşı sarılır ve aynı gün ya da ertesi gün İstanbul&apos;daki yeni adrese bırakılır. Kat, asansör ve hacim hem süreyi hem ücreti belirler.
              </p>
            </article>
          </div>

          <div className="mt-16 bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-6 md:px-8 py-6 border-b border-gray-100">
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#e6b422] mb-2">Güncel Fiyat Listesi</p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0D1C42]">İstanbul Parça Eşya Taşıma Fiyatları 2026</h3>
              </div>
              <a href="https://wa.me/905324948006?text=Merhaba%2C%20%C4%B0stanbul%20par%C3%A7a%20e%C5%9Fya%20ta%C5%9F%C4%B1ma%20i%C3%A7in%20%C3%B6zel%20fiyat%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="btn-primary rounded-full whitespace-nowrap">
                Özel Fiyat Alın →
              </a>
            </div>

            <div className="md:hidden divide-y divide-gray-100">
              {priceRows.map((row) => (
                <div key={row.to} className="px-5 py-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-[#0D1C42]">İstanbul → {row.to}</p>
                    {row.popular && (
                      <span className="text-[11px] font-semibold uppercase tracking-wide bg-[#e6b422]/20 text-[#0D1C42] px-2 py-0.5 rounded-full shrink-0">Popüler</span>
                    )}
                  </div>
                  <p className="mt-1 text-[#b8890f] font-semibold">{row.price}</p>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="text-gray-600">{row.duration}</span>
                    <Link href={row.href} className="text-[#0D1C42] font-semibold">
                      Teklif İste →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden md:block overflow-x-auto">
              <table className="w-full min-w-[760px] text-left">
                <thead>
                  <tr className="bg-[#e6b422] text-[#0D1C42] text-xs md:text-sm uppercase tracking-wide">
                    <th className="px-6 py-4 font-bold">Çıkış Şehri</th>
                    <th className="px-6 py-4 font-bold">Varış Şehri</th>
                    <th className="px-6 py-4 font-bold">Ortalama Fiyat (TL)</th>
                    <th className="px-6 py-4 font-bold">Tahmini Süre</th>
                    <th className="px-6 py-4 font-bold">İşlem</th>
                  </tr>
                </thead>
                <tbody>
                  {priceRows.map((row, i) => (
                    <tr key={row.to} className={i % 2 === 0 ? "bg-white" : "bg-[#F8F9FC]"}>
                      <td className="px-6 py-4 text-[#0D1C42] font-medium">İstanbul</td>
                      <td className="px-6 py-4 text-[#0D1C42]">
                        <span className="inline-flex items-center gap-2">
                          {row.to}
                          {row.popular && (
                            <span className="text-[11px] font-semibold uppercase tracking-wide bg-[#e6b422]/20 text-[#0D1C42] px-2 py-0.5 rounded-full">Popüler</span>
                          )}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[#b8890f] font-semibold">{row.price}</td>
                      <td className="px-6 py-4 text-gray-600">{row.duration}</td>
                      <td className="px-6 py-4">
                        <Link href={row.href} className="text-[#0D1C42] font-semibold hover:text-[#e6b422] transition-colors whitespace-nowrap">
                          Teklif İste →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="px-6 md:px-8 py-4 text-sm text-gray-500 border-t border-gray-100">
              Fiyatlar 2026 parça eşya taşıma ilanlarındaki başlangıç bedellerine göre hazırlanmış tahmini rakamlardır. Kesin ücret eşya hacmi, kat ve adrese göre değişir.
            </p>
          </div>

          <div className="mt-8 grid rounded-2xl border border-[#e6b422]/50 bg-white shadow-sm">
            <div className="invisible col-start-1 row-start-1 hidden md:block px-6 py-7 md:-mb-3 md:px-8 pointer-events-none select-none" aria-hidden="true">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Parça Eşya Taşıma</h2>
              <p className="leading-relaxed">
                Az sayıda eşyanızı yeni bir adrese götürmek istediğinizde planlı bir taşıma gerekir. İstanbul Parça Eşya Taşıma bu ihtiyacı, komple evi boşaltmadan karşılar. Koltuk, buzdolabı, birkaç koli veya tek oda eşyası aynı gün programına alınabilir. Global Nakliyat ekibi yükü bulunduğunuz adresten alır ve teslim noktasında size bırakır.
              </p>
              <p className="leading-relaxed mt-4">
                İnsanlar çoğu zaman tüm evi boşaltmadan bir koltuk takımını, buzdolabını, öğrenci yatağını veya yazlık için ayırdıkları kolileri yeni bir adrese götürmek ister. Bütün kamyonu tutmak bu yük için gereksizdir. Boş kalan alan da ücrete yazılır. Dar sokakta uzun araç manevra yapamaz ve site girişi saatlerce dolabilir. Global Nakliyat aynı yöne giden yükleri tek seferde toplar. Sizin eşyanız araç içinde ayrı durur ve başka bir müşterinin kolisiyle karışmaz. Alım saati, kat, asansör ve teslimde bulunacak kişi daha ilk görüşmede sorulur. Eksik bilgi ekibin kapıda beklemesine yol açar. Kısa bir liste bile günü sakinleştirir. Fotoğrafta görülen piyano, çelik kasa veya çok camlı vitrin ekip sayısını ve aracı değiştirir. Bunları son anda söylemek planı bozar. Park yeri, yük asansörü ve apartman yöneticisinin izni de aynı hazırlığın parçasıdır. Bu ayrıntılar tamamlanınca ekip tek seferde alım yapar ve teslim saatini net söyler.
              </p>
            </div>
            <QuietScroll className="col-start-1 row-start-1 h-[17rem] min-h-0 overflow-y-auto px-6 py-7 md:h-0 md:min-h-full md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0D1C42] mb-4">Parça Eşya Taşıma</h2>
            <p className="text-gray-600 leading-relaxed">
              Az sayıda eşyanızı yeni bir adrese götürmek istediğinizde planlı bir taşıma gerekir. İstanbul Parça Eşya Taşıma bu ihtiyacı, komple evi boşaltmadan karşılar. Koltuk, buzdolabı, birkaç koli veya tek oda eşyası aynı gün programına alınabilir. Global Nakliyat ekibi yükü bulunduğunuz adresten alır ve teslim noktasında size bırakır.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              İnsanlar çoğu zaman tüm evi boşaltmadan bir koltuk takımını, buzdolabını, öğrenci yatağını veya yazlık için ayırdıkları kolileri yeni bir adrese götürmek ister. Bütün kamyonu tutmak bu yük için gereksizdir. Boş kalan alan da ücrete yazılır. Dar sokakta uzun araç manevra yapamaz ve site girişi saatlerce dolabilir. Global Nakliyat aynı yöne giden yükleri tek seferde toplar. Sizin eşyanız araç içinde ayrı durur ve başka bir müşterinin kolisiyle karışmaz. Alım saati, kat, asansör ve teslimde bulunacak kişi daha ilk görüşmede sorulur. Eksik bilgi ekibin kapıda beklemesine yol açar. Kısa bir liste bile günü sakinleştirir. Fotoğrafta görülen piyano, çelik kasa veya çok camlı vitrin ekip sayısını ve aracı değiştirir. Bunları son anda söylemek planı bozar. Park yeri, yük asansörü ve apartman yöneticisinin izni de aynı hazırlığın parçasıdır. Bu ayrıntılar tamamlanınca ekip tek seferde alım yapar ve teslim saatini net söyler.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              İşe başlamadan önce evde küçük bir ayıklama yapmak da süreyi kısaltır. Gitmeyecek eşyayı kapı önüne yığmayın. Gidecek olanları bir odaya toplayın ki ekip evi aramasın. Çekmecenin içindeki evrak, takı ve yedek anahtar sizde kalsın. Biz mobilyayı ve koliyi taşırız, kişisel değerliyi kasada tutmayız. Buzdolabının suyu ve buzu bir gece önceden boşaltılmalıdır. Çamaşır makinesinin hortumu sökülür, içindeki su bir kaba alınır. Bu iki hazırlık, araçta su sızıntısını ve koku oluşmasını engeller. Halıyı rulo yapmaya vaktiniz yoksa ekip yerinde yapar. Yine de yerdeki küçük objeleri, tabloyu ve avizeyi önceden ayırmanız darbeyi azaltır. Kapı ölçüsünü bilmiyorsanız telefonla fotoğraf yeter. Dar antre, spiral merdiven ve alçak tavan daha ilk dakikada konuşulursa ekip doğru kişi sayısıyla gelir.
            </p>

            <h3 className="text-xl font-bold text-[#0D1C42] mt-8 mb-3">Parça Eşya Taşıma Nedir?</h3>
            <p className="text-gray-600 leading-relaxed">
              Komple bir ev veya ofis boşaltmadan da taşınma yapılabilir. Parça Eşya Taşıma, az sayıdaki eşyanın ayrı olarak başka bir adrese nakledilmesi hizmetidir. Mobilya, beyaz eşya, koli, tek bir oda eşyası veya birkaç parça bu kapsamda gider. Araçta yalnızca sizin yükünüzün kapladığı alan ücretlendirilir. İstanbul Parça Eşya Taşıma sayesinde tam kamyon kiralamak zorunda kalmazsınız. Teslim aynı ekibin sorumluluğunda biter. Bu işi üstlenen Parça Eşya Taşıma Şirketi eşyayı yolda başka bir firmaya devretmez.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Bu iş, evi tamamen kapatmayan kişiler içindir. Öğrenci odaya çıkan genç, yazlığa birkaç parça götüren aile, yeni evine çeyiz yetiştiren çift veya ofisinde yalnızca arşivini ayıran işletme aynı mantıkla ilerler. Yük azdır ama değersiz değildir. Bir buzdolabının çizilmesi veya bir gardırobun köşesinin kırılması küçük bir işte de büyük masraf açar. Araç paylaşımı ücreti düşürür, özensizlik anlamına gelmez. Eşyanız diğer yüklerden ayrılır, sabitlenir ve teslim listesiyle iner. Komple nakliyede bütün oda takımları, mutfak ve yatak odası aynı anda boşalır. Burada ise seçtiğiniz parçalar gider, gerisi evde kalır. Ücret de giden parçanın hacmine göre kurulur.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Aynı şehir içinde iş çoğu zaman birkaç saatte biter. Şehir dışına çıkan yükte süreyi aracın kalkış günü belirler. Erken haber, istediğiniz güne denk gelmenizi kolaylaştırır. Geç kalan talep dolu araca sıkışmayabilir ve bir sonraki çıkışı bekler. Bu yüzden tarih konuşulurken esnek bir gün aralığı vermek işinizi hızlandırır. Tek bir saate kilitlenmek, özellikle yaz hattında sizi sıranın sonuna atabilir. Ne kadar parça gideceğini baştan söylemek de aynı kapıya çıkar. Üç koli sandığınız yük, yerinde bir gardırop ve iki bazayla birleşince aracın payı değişir. Dürüst liste, hem sizi hem arkadan gelen müşteriyi korur.
            </p>

            <h3 className="text-xl font-bold text-[#0D1C42] mt-8 mb-3">Parça Eşya Taşıma Nasıl Yapılır?</h3>
            <p className="text-gray-600 leading-relaxed">
              Talep bize ulaşınca önce neyin gideceği ve iki adres netleşir. İstanbul Parça Eşya Taşıma için uygun araç ve gün birlikte seçilir. Eşyalar korunaklı şekilde araca yerleştirilir ve yeni adreste teslim edilir. Süreci baştan sona aynı kadro yönetir. Parça Eşya Taşıma Şirketi olarak ara duraklarda yükünüzü başkasına bırakmayız.
            </p>
            <ol className="mt-4 space-y-2 text-gray-600 list-decimal pl-5">
              <li>Eşya listesi ve her iki adres alınır.</li>
              <li>Araç ve taşıma günü birlikte belirlenir.</li>
              <li>Eşyalar bulunduğu adresten toplanır.</li>
              <li>Yeni adreste sayılarak teslim edilir.</li>
            </ol>
            <p className="text-gray-600 leading-relaxed mt-4">
              Bu sıra işin dağılmadan bitmesini sağlar. Parça Eşya Taşıma adımları böylece tek elde toplanır. İş bitiminde tutanak paylaşılır. İstanbul Parça Eşya Taşıma kaydı da bu tutanakla birlikte size iletilir.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Müşterinin yapması gerekenler de basittir. Eşyayı gizlemeyin, çekmecelerin içinde değerli evrak bırakmayın ve teslim alacak kişiyi önceden haber verin. Bina yönetimi yük asansörünü belirli saatte açıyorsa bunu ekibe söyleyin. Sokakta park yasağı varsa alternatif durak noktasını tarif edin. Ekip kapıya geldiğinde listeyi birlikte okur. Eksik veya fazla parça varsa yola çıkmadan düzeltilir. Yolda bir gecikme olursa sorumlu kişi sizi arar. Teslimde koliler tek tek indirilir, numaralar tutanakla karşılaştırılır ve sağlamlık gözle kontrol edilir. İtirazınız varsa tutanağa işlenir. Sessiz teslim, sonradan çıkan tartışmayı zorlaştırır. Bu yüzden teslim anında evde bir yetişkinin bulunması gerekir.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Anahtar komşuda kalacaksa bunu da baştan yazın. Böylece eşya kapı önünde bekletilmez. Saat sözü verdiysek o aralığın içinde olmaya çalışırız. Trafik veya feribot kuyruğu uzarsa yeni saati haber veririz, kapıda sürpriz bırakmayız. Siz de alım günü evi kilitli bırakmayın. Görevli gelmeden site güvenliğine isim bildirin. Bazı siteler kimlik ve plaka ister. Bu evrakı bir gün önce paylaşmak kapıdaki beklemeyi bitirir. İş bitince kısa bir mesaj yeter. Eksik gördüğünüz bir koliyi aynı gün söyleyin. Ertesi hafta hatırlanan bir eksiği yerinde ayırmak zorlaşır.
            </p>

            <h3 className="text-xl font-bold text-[#0D1C42] mt-8 mb-3">Parça Eşya Taşıma Hizmetinde Eşyalar Nasıl Paketlenir?</h3>
            <p className="text-gray-600 leading-relaxed">
              Kırılacak parçalarla mobilya aynı yöntemle sarılmaz. Parça Eşya Taşıma Firması bünyesinde malzeme, eşyanın cinsine göre seçilir. Cam ve seramik balonlu naylon ile örtülür. Mobilya köşeleri korumaya alınır. Beyaz eşya dik duracak şekilde sabitlenir. Koliler numaralanır ki teslimde eksik parça kalmasın. İstanbul Parça Eşya Taşıma gününde bu numaralar sayım listesiyle eşleşir. Doğru sarım çizik riskini düşürür. Parça Eşya Taşıma sırasında kullanılan malzeme teslimde sizde kalır. Hassas yükte ekstra özen istenir. Parça Eşya Taşımacılığı standardı balonlu naylon ve köşe korumayı birlikte kullanır.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600 list-disc pl-5">
              <li>Balonlu naylon kırılacak parçalar için kullanılır.</li>
              <li>Köşe koruyucu mobilya uçlarını darbeye karşı kapatır.</li>
              <li>Streç film koltuk ve baza yüzeyini tozdan korur.</li>
              <li>Numaralı koli teslim sayımını hızlandırır.</li>
              <li>Askılı örtü elbise ve perdeyi kırışmadan taşır.</li>
              <li>Kayış ve takoz ağır parçanın araçta oynamasını engeller.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Her eşyanın sarımı farklıdır. Buzdolabı ve çamaşır makinesi dik tutulur, yatırılmaz. Kapaklar bantla sabitlenir, iç raflar çıkarılır. Koltuk kumaşı streç ile örtülür ki toz ve sürtünme leke bırakmasın. Cam masa ve ayna karton köşelik ister. Avize ve abajur ayrı koliye girer, içi boşluk bırakılmadan doldurulur. Kitaplar küçük kolilere bölünür. Tek dev koli hem ağır olur hem merdivende yırtılır. Halı rulo yapılır ve ağzı bağlanır. Bitkiler ve evcil hayvan bu işin dışındadır. Akvaryum suyu boşaltılmadan araca alınmaz. Gıda, tüp ve yanıcı madde de yüklenmez.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Müşteri kendi poşetlediği kırılganı ayrıca söylemeli. Üzerine yalnızca koli yazmak yetmez. Ekip o koliyi yeniden açıp doğru malzemeyle sarabilir. Kullanılan naylon ve köşe koruyucu teslimde sizde kalır. İsterseniz bir sonraki küçük nakliyede de işe yarar. Tablo ve ayna camı asla çıplak bırakılmaz. Çerçeve köşesi kartonla kalınlaştırılır. Mermer tabla ve piyano için ayrı kişi planlanır, tek kişiye bırakılmaz. Elektronik cihazın orijinal kutusu duruyorsa onu kullanırız. Kutu yoksa boşluklar kumaşla değil, darbeyi emen malzeme ile doldurulur. Islak temizlik bezi veya su dolu vazo araçta kabul edilmez. Bu sade kurallar, teslimde tartışmayı daha başlamadan bitirir.
            </p>

            <h3 className="text-xl font-bold text-[#0D1C42] mt-8 mb-3">Parça Eşya Taşıma Fiyatları Nasıl Belirlenir?</h3>
            <p className="text-gray-600 leading-relaxed">
              Ücret tek bir cetvele sıkışmaz. İstanbul Parça Eşya Taşıma bedeli hacim, mesafe, kat durumu ve paketleme ihtiyacına göre şekillenir. Aşağıdaki ölçütler teklifin neden değiştiğini gösterir. Parça Eşya Taşımacılığı kapsamında sadece kullandığınız araç payı ücretlendirilir.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead>
                  <tr className="bg-[#0D1C42] text-white">
                    <th className="px-4 py-3 font-semibold">Ölçüt</th>
                    <th className="px-4 py-3 font-semibold">Ücrete etkisi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 text-[#0D1C42] font-medium">Hacim</td>
                    <td className="px-4 py-3 text-gray-600">Araçta kaplanan alan büyüdükçe bedel artar.</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-[#F8F9FC]">
                    <td className="px-4 py-3 text-[#0D1C42] font-medium">Mesafe</td>
                    <td className="px-4 py-3 text-gray-600">Uzak şehirlerde yol ve zaman maliyeti yükselir.</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 text-[#0D1C42] font-medium">Kat ve asansör</td>
                    <td className="px-4 py-3 text-gray-600">Merdiven kullanımı daha fazla iş gücü ister.</td>
                  </tr>
                  <tr className="bg-[#F8F9FC]">
                    <td className="px-4 py-3 text-[#0D1C42] font-medium">Paketleme</td>
                    <td className="px-4 py-3 text-gray-600">Özel sarma ve malzeme bedele ayrı yansır.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 leading-relaxed mt-4">
              Bu başlıklar teklifin şişmeden kalmasına yardım eder. Parça Eşya Taşıma fiyatı fotoğraflı listeyle daha net konuşulur. Kat, asansör ve dar merdiven ayrıca değerlendirilir. Net rakamı ancak Parça Eşya Taşıma Firması keşfi veya liste sonrası söyleyebilir.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Teklif konuşulurken dört soru işi belirler. Ne gidiyor, nereden nereye, hangi katta ve ne zaman. Hacim arttıkça araçtaki pay büyür. Mesafe uzadıkça yakıt, zaman ve yol maliyeti eklenir. Asansörsüz üçüncü kat, giriş katıyla aynı sürede bitmez. Merdiven dönüşü dar ise ek kişi gerekir. Özel sarım, söküm ve kurulum da bedele yansır. Hafta sonu ve resmi tatil, bina kuralları yüzünden daha pahalı olabilir. Yaz aylarında Ege ve Akdeniz hatları dolar. Erken gün ayırtan kişi hem yer bulur hem acele pazarlık baskısı yaşamaz.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Fiyata genellikle alım, araç payı, temel sarım ve teslim girer. Kat farkı, bahçeden kapıya uzun yürüme mesafesi ve depolama ayrı sorulur. Sözlü rakamı yazılı teyit etmeden gün kilitlemeyin. Fotoğraflı liste, yerinde bakış kadar net olmasa da sürprizi azaltır. Eksik söylenen bir gardırop, kapıda yeni bir pazarlığa döner. Sigorta bedeli de yükün beyan değerine bağlıdır. Çok değerli bir parçayı sıradan koli gibi söylemek, hasarda düşük karşılık doğurur. Bunu gizlemeyin. Depoda bekletme istiyorsanız süreyi gün olarak yazın. Belirsiz bir süre, hem yer hem ücret açısından sonra tartışma çıkarır. Net liste, net gün ve net adres üçlüsü teklifi sakin tutar.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0D1C42] mt-10 mb-4">İstanbul Parça Eşya Taşıma Firması</h2>
            <p className="text-gray-600 leading-relaxed">
              Global Nakliyat, İstanbul çıkışlı işlerde düzenli sefer mantığıyla çalışır. Parça Eşya Taşıma Şirketi olarak eşyanızı depoda bekletmeden planlanan günde yola çıkarırız. Site ve apartman teslimlerinde aynı gün de kurulabilir. İstanbul Parça Eşya Taşıma bu tempo içinde adresinizden alınıp yeni adrese bırakılır.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Araçlar firmanın kendi planına bağlıdır. Yük, tanımadığınız bir aracıya devredilip yolda kaybolmaz. Aynı kişi sizinle konuşur, aynı ekip kapınıza gelir. Şehir içinde gün içi saatler daha esnektir. Şehir dışında ise haftalık çıkışlar vardır. Bu düzen, az eşyası olan kişinin büyük nakliye bütçesine girmesini engeller. Ofis, ev ve yazlık aynı ciddiyetle ele alınır. Çünkü küçük yük de sigorta ve tutanak ister. Müşteri temsilcisi eşya listesini alınca aracı ve günü söyler. Uygun değilse alternatif gün önerir. Zorla dolu araca sıkıştırma yapılmaz.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Site yönetimi evrak istiyorsa örnek yazı paylaşılır. Kapı kodu, bekçi notu ve teslim kişisinin telefonu operasyon notuna işlenir. Böylece ekip sahada tahmin yürütmez. Avrupa yakası ve Anadolu yakası çıkışları ayrı saatlerde kurulabilir. Köprü ve otoyol yoğunluğu alım sırasını değiştirir. Bunu sizden gizlemeyiz. Sabah erken alım, akşam teslim sözü şehir içinde mümkündür. Şehir dışında aynı gün teslim vaadi verilmez. Verilen her saat, yolun gerçek süresine dayanır. Müşteri bu yüzden hem fiyatı hem günü tek muhataptan duyar. Araya giren tanıdık nakliyeci veya ilan sitesindeki belirsiz fiyat, işi dağıtır.
            </p>

            <h3 className="text-xl font-bold text-[#0D1C42] mt-8 mb-3">Evden Eve Parça Eşya Taşıma</h3>
            <p className="text-gray-600 leading-relaxed">
              Bir odalık ev eşyasından birkaç parça mobilyaya kadar ev içi yükler bu başlığın içindedir. İstanbul Parça Eşya Taşıma yatak, baza, gardırop ve mutfak kolilerini aynı planda götürür. Söküm gerektiğinde kurulum da taşıma gününe bağlanır. Parça Eşya Taşıma Firması ekibi bunu ayrıca bir güne yaymadan bitirmeye çalışır. Küçük evlerde tam kamyon çoğu zaman fazla gelir. Parça Eşya Taşıma bu yüzden daha hesaplı bir yol olur.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Ev içi işlerde en sık görülen yükler bellidir. Tek kişilik yatak ve baza, çalışma masası, iki kapılı gardırop, buzdolabı, çamaşır makinesi ve birkaç valiz. Yeni evlenen çiftte çeyiz kolileri, mutfak aletleri ve hassas züccaciye eklenir. Yazlığa giden ailede ise sezonluk tekstil, çocuk bisikleti ve küçük mutfak kabı öne çıkar. Bunların hepsi aynı yöntemle gitmez. Tekstil koliye girer, bisiklet sabitlenir, camlı vitrin köşelenir. Söküm isteyen gardırop alım günü sökülür ve yeni adreste kurulur. Kurulum için prize ve su tesisatına bağlama, elektrikçi veya tesisatçı işidir. Ekip mobilyayı yerine koyar. Cihazı fişe takıp çalıştırmayı ayrıca vaat etmez.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Bunu baştan konuşmak hayal kırıklığını önler. Dar koridor ve spiral merdiven varsa fotoğraf gönderin. Ölçü uymayan parça kapıda kalmasın. Balkon eşyası, saksı ve mangal da listeye yazılmalıdır. Unutulan bir parça ikinci bir geliş doğurur ve o geliş ayrı ücretlenir. Çocuk odasında küçük vida ve rayları bir poşete koyup ilgili kolinin içine bırakın. Kurulum günü eksik vida, işi yarım bırakır. Yatak başlığı duvara sabitlenecekse dübel işi ayrıca söylensin. Biz mobilyayı odaya taşır ve kurarız. Duvar delme işi bina iznine bağlıdır ve her sitede serbest değildir. Komşu saati ve gürültü kuralı da alım saatini değiştirir. Öğle arasını site yönetimi yasaklıyorsa sabah dilimini seçeriz.
            </p>

            <h3 className="text-xl font-bold text-[#0D1C42] mt-8 mb-3">Ofis ve İş Yeri Parça Eşya Taşıma</h3>
            <p className="text-gray-600 leading-relaxed">
              Masa, evrak dolabı, birkaç bilgisayar ve arşiv kolisi için ofisi tamamen kapatmaya gerek kalmaz. İstanbul Parça Eşya Taşıma ile iş yeriniz mesai dışı bir saatte boşaltılabilir. Evrak sırası bozulmadan kolilenir. Parça Eşya Taşımacılığı bu tür az hacimli ofis yüklerinde tam kamyon kiralamayı gereksiz kılar. Ertesi sabah çalışma düzeni yeniden kurulabilir. Küçük ofislerde İstanbul Parça Eşya Taşıma masaları sökülmüş halde araca alır.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              İş yeri taşınırken asıl kaygı eşyanın kırılması değil, ertesi gün çalışamamaktır. Evrak sırası bozulursa bir hafta arama yapılır. Bu yüzden klasörler çıktığı raf sırasıyla kolilenir ve koli ağzına oda adı yazılır. Masa ayakları sökülür. Cam bölme özel ister. Sunucu ve yazıcı için kablo torbası ayrıdır. Mesai bitiminde alım, çalışanı bölmez. Sabah teslim ise ofis açılmadan önce bitecek şekilde saat kurulur. Bilgisayarları siz kapatıp kişisel eşyayı çekmeceden almalısınız. Ekip açık ekranlı cihazı sökmez. Kasa ve önemli sözleşme sizde kalabilir veya ayrı teslim tutanağına yazılır.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Az sayıda masa ve koli için tüm ofisi günlerce kapatmaya gerek yoktur. Aynı katta oda değiştirmek bile bu düzene girer. Asansör rezervasyonu bina yönetimine bir gün önceden bildirilmelidir. Yük asansörü yoksa servis merdiveni kullanılır ve bu süre uzar. Bunu teklif aşamasında söyleyin. Toplantı odası camı, beyaz tahta ve projeksiyon askısı unutulmasın. Kablolar etiketlensin ki yeni ofiste hangi prize gittiği belli olsun. Personel masası üzerindeki çerçeve ve saksı kişisel sayılır, koliye siz koyun. Gece alımı için bina güvenliğinin yazılı izni şarttır. İzin yoksa ekip kapıda bekler ve o bekleme günü kaydırabilir. Arşiv odası nemliyse koliyi çift kat kullanırız. Islak evrak araçta küflenmesin.
            </p>

            <h3 className="text-xl font-bold text-[#0D1C42] mt-8 mb-3">Şehirler Arası Parça Eşya Taşıma</h3>
            <p className="text-gray-600 leading-relaxed">
              İstanbul çıkışlı Ege ve Akdeniz hatlarında haftalık düzenli çıkış vardır. İstanbul Parça Eşya Taşıma ile İzmir, Bodrum, Marmaris veya Antalya adresine giden yük aynı araçta diğer parçalarla ilerler. Süre genellikle bir ile üç gün arasında tamamlanır. Sigortalı teslimat bu hatlarda standarttır. Parça Eşya Taşıma Şirketi yolda haber vermeden rota değiştirmez. Yoğun yaz haftalarında erken gün ayırtmak teslimi rahatlatır. İstanbul Parça Eşya Taşıma için bu erken haber, aracı dolu göndermemenizi sağlar.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Yakın mesafede teslim çoğu zaman bir ile iki gün sürer. Daha uzun sahil hatlarında iki ile üç gün olağandır. Süre, aracın doluluk gününe ve teslim adresinin ilçe içi konumuna bağlıdır. Yarımada ve ada bağlantısı feribot saatini ekler. Bunu baştan söylemezseniz plan kayar. Yazın cuma çıkışları hızla dolar. Salı ve çarşamba daha rahat günlerdir. Kışın aynı hatlar daha esnek yürür. Eşya yolda depoda bekletilmeden, çıktığı araçla gider. Ara teslimde başka bir kamyona aktarma yapılmaz. Böylece çizik riski ve kayıp ihtimali azalır. Teslim saatini bir gece önceden teyit ederiz. Evde kimse olmayacaksa yeni bir saat kurulur. Eşya kapı önüne bırakılmaz.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead>
                  <tr className="bg-[#0D1C42] text-white">
                    <th className="px-4 py-3 font-semibold">Hat</th>
                    <th className="px-4 py-3 font-semibold">Sık görülen süre</th>
                    <th className="px-4 py-3 font-semibold">Dikkat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 text-[#0D1C42] font-medium">İstanbul İzmir ve Çeşme</td>
                    <td className="px-4 py-3 text-gray-600">Bir ile iki gün</td>
                    <td className="px-4 py-3 text-gray-600">Yaz hafta sonu doluluk artar.</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-[#F8F9FC]">
                    <td className="px-4 py-3 text-[#0D1C42] font-medium">İstanbul Bodrum ve Marmaris</td>
                    <td className="px-4 py-3 text-gray-600">İki ile üç gün</td>
                    <td className="px-4 py-3 text-gray-600">Site girişi ve dar sokak önceden bildirilmeli.</td>
                  </tr>
                  <tr className="bg-[#F8F9FC]">
                    <td className="px-4 py-3 text-[#0D1C42] font-medium">İstanbul Fethiye ve Antalya</td>
                    <td className="px-4 py-3 text-gray-600">İki ile üç gün</td>
                    <td className="px-4 py-3 text-gray-600">İlçe içi mesafe süreyi uzatabilir.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 leading-relaxed mt-4">
              Tablodaki süreler ortalama yoldur, sözleşme günü değildir. Hava, feribot ve yol çalışması bir gün kaydırabilir. Kayma olursa sizi bekletmeden ararız. Teslim adresi yazlık siteyse güvenlik prosedürünü baştan iletin. Plaka bildirimi, depozito ve giriş saati bizde yazılı olsun. Ada ve yarımadada akşam feribotu kaçarsa teslim ertesi sabaha kalabilir. Bunu gizlemek yerine baştan söyleriz. Koli sayısı az olsa bile adres tarifi tam olmalıdır. Mahalle, site adı ve kapı kodu olmadan şoför ilçe içinde tur atar. Bu tur hem süreyi hem diğer müşterinin teslimini geciktirir.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0D1C42] mt-10 mb-4">Parça Eşya Taşıma İçin Neden Global Parça Eşya Taşımacılığı Tercih Etmelisiniz?</h2>
            <p className="text-gray-600 leading-relaxed">
              Tercih, fiyatın yanında teslim güveninden gelir. İstanbul Parça Eşya Taşıma yaptırırken aracın kime ait olduğunu ve ekibin kadrolu olup olmadığını sorun. Global Nakliyat taşeron zinciri kurmadan kendi planıyla çalışır. Hasar halinde muhatap bulmak da bu yüzden kolaydır. Parça Eşya Taşıma Firması arayanların baktığı konu tam olarak budur. Düzenli hat maliyeti de aşağı çeker. Parça Eşya Taşımacılığı bu tekrar eden seferler sayesinde daha sade bir ücret sunar.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              İnsanlar ucuz görünen ilanı seçip sonra muhatap bulamayınca asıl maliyeti anlar. Aracı kimin kullandığı, ekibin kadrolu olup olmadığı ve hasarda kimin telefonu açacağı üç ayrı sorudur. Global Nakliyat bu üçünü de kendi bünyesinde tutar. Taşeron zinciri yoktur. Fiyat konuşulurken sürpriz kalem gizlenmez. Kat, sarım ve mesafe baştan yazılır. Yolda haber vermeden ek ücret çıkarılmaz. İletişim de aynı kişide kalır. Sabah alınan söz, akşam başka bir çağrı merkezinde kaybolmaz. Müşteri teslim saatini sorunca operasyon notuna bakılır ve net cevap verilir. Küçük yükte bile tutanak tutulur. Bu tutanak hem sizin hem ekibin korumasıdır.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Referans da buradan çıkar. Zamanında gelen, sayımı yapan ve telefona dönen ekip bir sonraki yaz yine aranır. Karşılaştırma yaparken yalnızca rakama bakmayın. Araç fotoğrafı, sigorta anlatımı ve yazılı teyit isteyin. Bunları veremeyen ilan, kapıda başka bir ekip çıkarabilir. Global Nakliyat 1992 yılından beri aynı isimle çalışır. Söz, o günkü personele değil firmaya aittir. Bir kişi izinli olsa da plan ve evrak durmaz. Siz de karar vermeden önce eşya listenizi iki firmaya aynı şekilde gönderin. Farklı listelerle alınan fiyatlar kıyaslanamaz. Aynı liste, aynı kat ve aynı tarih konuşulursa rakam dürüst olur.
            </p>

            <h3 className="text-xl font-bold text-[#0D1C42] mt-8 mb-3">30+ Yıllık Kurumsal Parça Eşya Taşıma Deneyimi</h3>
            <p className="text-gray-600 leading-relaxed">
              1992 yılında kurulan Global Nakliyat, şehir içi ve şehirler arası yükü aynı ciddiyetle ele alır. Otuz yılı aşkın bu süre, dar sokak, site girişi ve yazlık sezonu gibi ayrıntıları önceden görmeyi sağlar. İstanbul Parça Eşya Taşıma konusunda biriken tecrübe, sürpriz kat ve asansör sorunlarını daha plan aşamasında yakalar. Her sezon aynı güzergahlar tekrar edilir. Parça Eşya Taşımacılığı tarafında bu tekrar, operasyonu sadeleştirir. Kurumsal yapı sezon yoğunluğunda da dağılmaz. Parça Eşya Taşıma Şirketi kadrosu yaz aylarında da aynı ekibi sahada tutar.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Bu birikim, İstanbul sokaklarını ezberlemekten ibaret değildir. Hangi sitede yük asansörü vardır, hangi sahil beldesinde cuma öğleden sonra feribot kuyruğu uzar, hangi ilçede pazar kurulunca sokak kapanır. Bunlar yıllar içinde deftere değil ekibin hafızasına işlenir. Yeni başlayan bir ekip her adresi ilk kez görür ve süreyi şaşırır. Otuz yılı aşkın çalışan bir kadro ise aynı hatları defalarca yürüdüğü için alım saatini gerçekçi kurar. Yaz sezonu ayrıca bir okuldur. Bodrum ve Marmaris dolunca araç sırası değişir. Bunu bilen operasyon, müşteriye olmayan günü satmaz.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Kurumsal taraf da budur. Söz, kişiye değil düzene bağlıdır. Bir çalışan izinli olsa da plan durmaz. Evrak, sigorta ve tutanak aynı klasörde ilerler. 1992 yılından bugüne gelen bu düzen, her yaz aynı ailelerin yeniden aramasını sağlar. Tecrübe iddiası broşür cümlesi olarak kalmasın. Adresi duyunca süreyi doğru söylemek, asansörsüz katı baştan fiyatlamak ve dolu günü gizlememek tecrübenin kendisidir. Otuz yılı aşan bir firma bunları deneme yanılma ile değil, tekrar eden seferle öğrenir. Siz de ilk görüşmede bu netliği arayın. Tarihi olmayan, kat sormayan ve liste istemeyen teklif, tecrübesiz bir tahmindir.
            </p>

            <h3 className="text-xl font-bold text-[#0D1C42] mt-8 mb-3">Profesyonel Parça Eşya Taşıma Ekibi</h3>
            <p className="text-gray-600 leading-relaxed">
              Taşımayı yapan kişiler o gün çağrılmış yabancı ekipler değildir. Parça Eşya Taşıma Şirketi çatısı altında çalışan ekip paketlemeyi, araca dizmeyi ve teslimi kendi üstlenir. Sorularınız için sorumlu kişi gün boyu ulaşılabilir kalır. İstanbul Parça Eşya Taşıma sırasında bu kişi teslim saatini netleştirir. Sahadaki kişiler dışarıdan toplanmaz. Parça Eşya Taşıma Firması kadrosundan çıkar.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Sahada üç iş bir arada yürür. Paketleyen, araca dizen ve teslimde sayan kişiler aynı kadrodandır. Birinci kişi kırılganı ayırır. İkinci kişi ağır parçayı merdivende doğru tutar. Üçüncü kişi listeyi okur ve tutanağı yazar. Hepsi o gün başka bir ilandan çağrılmış değildir. Bu ayrım önemlidir. Tanışık ekip birbirinin temposunu bilir ve kapıda tartışmaz. Müşteriyle konuşan sorumlu telefonunu kapatmaz. Gecikme olursa sebebini söyler, sessizce yok olmaz. İş kıyafeti, yedek battaniye ve temel sarım malzemesi araçta hazırdır. Eksik malzeme için market aranmaz.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Ağır parçada kaç kişi gerektiği listeden anlaşılır. Tek kişiye buzdolabı taşıtmak hem iş güvenliğini bozar hem eşyayı riske atar. Kadroyu buna göre çıkarmak, profesyonel çalışmanın görünür halidir. Ekip eve ayakkabı ile girmez, koridoru korur ve iş bitince ambalaj artıklarını toplar. Müşteriden poşet veya battaniye istemek zorunda kalmaz. Genç yardımcı ile usta aynı araçta gider. Usta söküm sırasını bilir, yardımcı yalnızca koliyi taşımaz. Bu paylaşım, gardırop kapağının ters takılmasını engeller. Sorumlu kişi teslimden sonra da aynı gün telefonu açık tutar. Eksik vida veya unutulan bir koli için ertesi sabah dönüş planlanır. Dönüş, sonsuz bir taahhüt değildir. Aynı gün bildirilen eksik için bakılır.
            </p>

            <h3 className="text-xl font-bold text-[#0D1C42] mt-8 mb-3">Güvenli ve Sigortalı Parça Eşya Taşıma Referansları</h3>
            <p className="text-gray-600 leading-relaxed">
              Sigorta, eşya araca yüklendiği andan teslim edilene kadar geçerlidir. İstanbul Parça Eşya Taşıma sonrasında oluşabilecek hasar için poliçe kapsamı teslimden önce anlatılır. Müşteriler özellikle yazlık ve öğrenci eşyasında aynı ekiple tekrar çalışmayı tercih eder. Parça Eşya Taşıma Firması seçiminde bu tekrar, sözden daha güçlü bir işarettir. Zamanında teslim ve eksiksiz sayım referansı besler. Parça Eşya Taşımacılığı bu iki başlık üzerinden değerlendirilir. Sözlü fiyatın yazılı teyidini de isteyin. Parça Eşya Taşıma Şirketi ile çalışırken bu teyit sürpriz bedeli önler.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Poliçe, eşya araca bindiği anda başlar ve teslim imzasıyla biter. Kapsam, konuşmada genel lafla geçiştirilmez. Nelerin dahil olduğu ve nelerin kullanıcı hatası sayıldığı size sade bir dille anlatılır. Hasar görürseniz tutanaktaki not ve fotoğraf yeterlidir. Sözlü şikayet günler sonra zayıf kalır. Bu yüzden teslimi aceleye getirmeyin. Yazlık ve öğrenci işlerinde aynı ailenin her yıl geri gelmesi bizim için en sade referanstır. İlan metninden çok, ikinci yıl yine aranmak güvenin ölçüsüdür. Fiyat teyidi de bu güvenin parçasıdır. Telefonda söylenen rakam mesajda da aynı yazılmalıdır.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Fark görürseniz yola çıkmadan sorun. Yola çıkmış araçta pazarlık hem sizi hem planı zorlar. Global Nakliyat bu yüzden rakamı kilitlemeden ekip çıkarmaz. Hasar dosyasında üç şey isteriz. Tutanaktaki cümle, eşyanın fotoğrafı ve beyan edilen değer. Bunlar tamamsa süreç uzamaz. Eşyayı teslimden sonra siz çizdiyseniz veya ıslak bıraktıysanız bu kapsam dışıdır. Bunu baştan duymanız, sonradan kırgınlık yaşatmaması içindir. Memnun kalan müşteri komşusuna tarih ve ekip adını söyler. Bu söz, bizim için reklam metninden daha ağırdır.               Siz de karar verirken son işin tutanağını ve sigorta anlatımını sorun. Cevap netse işe başlayın.
            </p>
            </QuietScroll>
          </div>
        </div>
      </section>

      {/* Hizmet kartları */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0D1C42] leading-tight">İstanbul Parça Eşya Taşıma Hizmetlerimiz</h2>
            <div className="section-divider"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {serviceCards.map((card) => (
              <article key={card.title} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm flex flex-col">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-[#0D1C42] mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ReviewSlider />

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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Kurumsal Parça Eşya Taşıma Firması Global Nakliyat Kimdir?</h2>
              <div className="w-20 height-4 bg-[#e6b422] rounded-full mb-8" style={{ height: '4px' }}></div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Global Nakliyat, 1992 yılında İstanbul'da kurulan kurumsal bir parça eşya taşıma firmasıdır. Az miktardaki eşyayı adresinden alır, kendi araç filosu ve kadrolu ekibiyle Ege ve Akdeniz hatlarında yeni adrese ulaştırır.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Taşeron kullanmaz. Yazlık, öğrenci, çeyiz ve tek parça yüklerde her taşımayı kendi sigortası ve tutanağıyla yapar. Otuz yılı aşkın tecrübesiyle planı baştan netleştirir, eşyayı yolda başka bir firmaya devretmez.
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

      {/* FAQ Section */}
      <section className="py-20 bg-[#F7F8FB] border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-8 max-w-[75rem]">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0D1C42] mb-10">Parça Eşya Taşımacılığında Sıkça Sorulan Sorular</h2>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <details key={idx} className="faq-item group bg-white rounded-xl border border-gray-200">
                <summary className="flex items-center gap-4 px-5 py-4 md:px-6 md:py-5">
                  <span className="text-sm font-medium text-gray-400 tabular-nums w-6 shrink-0">{String(idx + 1).padStart(2, "0")}</span>
                  <span className="hidden sm:block w-4 h-px bg-gray-300 shrink-0" aria-hidden="true"></span>
                  <h3 className="flex-1 text-base md:text-lg font-medium text-[#0D1C42]">{faq.q}</h3>
                  <span className="ml-2 text-2xl leading-none text-gray-500 transition-transform duration-200 group-open:rotate-45 shrink-0">+</span>
                </summary>
                <div className="px-5 md:px-6 pb-5 sm:pl-16 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
