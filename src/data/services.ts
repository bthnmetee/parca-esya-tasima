export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  intro: string;
  features: string[];
  content: {
    whatIsIt: string;
    howWeDoIt: string;
    pricing: string;
  };
}

export const services: ServiceData[] = [
  {
    id: "beyaz-esya",
    slug: "beyaz-esya-tasima",
    title: "Beyaz Eşya Taşıma | Güvenli ve Sigortalı | Global Nakliyat",
    h1: "Beyaz Eşya Taşıma Hizmeti",
    metaDescription: "Buzdolabı, çamaşır makinesi, bulaşık makinesi gibi beyaz eşyalarınızı özel ambalajlı, çiziksiz ve sigortalı şekilde Türkiye'nin her yerine taşıyoruz.",
    intro: "Sadece tek bir buzdolabı veya fırın taşıtmak için büyük bir nakliye aracı kiralamanıza gerek yok. Beyaz eşyalarınız darbelere karşı özel havalı naylonlarla sarılır ve parsiyel araçlarımızda güvenle taşınır.",
    features: [
      "Özel havalı patpat ve karton ambalajlama",
      "Taşıma sırasında %100 sigorta güvencesi",
      "Türkiye geneli ekonomik parsiyel taşıma",
      "Adresten alıp, adrese güvenli teslimat"
    ],
    content: {
      whatIsIt: "Beyaz eşya taşıma hizmeti; buzdolabı, çamaşır makinesi, fırın gibi elektronik ve hassas ev aletlerinizin şehir içi veya şehirler arası rotalarda diğer eşyalarınızdan bağımsız (veya onlarla birlikte) güvenli bir şekilde nakledilmesi işlemidir.",
      howWeDoIt: "Uzman ekibimiz eşyanızı teslim almaya geldiğinde ilk olarak çizilme ve ezilmelere karşı kalın streç filmler ve koruyucu havalı patpatlarla paketleme yapar. Taşıma esnasında sarsıntıları en aza indiren çelik kasalı araçlarımızda sabitlenerek yeni adresinize ulaştırılır.",
      pricing: "Beyaz eşya nakliye fiyatı, eşyanın ebatına, sayısına ve taşınacağı şehirler arası mesafeye göre belirlenir. Parsiyel (parça eşya) taşıma konseptimiz sayesinde son derece ekonomik bir şekilde tek parça beyaz eşya taşıması yapabilirsiniz."
    }
  },
  {
    id: "ceyiz-esyasi",
    slug: "ceyiz-esyasi-tasima",
    title: "Çeyiz Eşyası Taşıma | Özenli ve Hassas Nakliyat | Global Nakliyat",
    h1: "Çeyiz Eşyası Taşıma Hizmeti",
    metaDescription: "Yeni evlenecek çiftlerimizin çeyiz eşyalarını sıfır hasar garantisiyle, özenle ve sigortalı olarak taşıyoruz. Çeyiz taşıma fiyatları için hemen ulaşın.",
    intro: "En mutlu gününüze hazırlık yaparken gözünüz arkada kalmasın. Değerli çeyiz eşyalarınızı büyük bir hassasiyetle, özel paketleme malzemeleriyle sararak Türkiye'nin dört bir yanına güvenle taşıyoruz.",
    features: [
      "Hassas ve kırılacak eşyalara özel ambalajlama",
      "Tam kapsamlı emtia taşıma sigortası",
      "Zamanında teslimat garantisi",
      "Gelin arabası kadar özenli VIP taşıma"
    ],
    content: {
      whatIsIt: "Çeyiz eşyası taşıma, evlilik hazırlığı yapan çiftlerin yeni evlerine götürecekleri beyaz eşya, mobilya, kırılacak mutfak eşyası ve tekstil ürünlerinin yüksek hassasiyet gösterilerek nakledilmesi sürecidir.",
      howWeDoIt: "Kırılacak eşyalarınız için içi dolgulu özel koliler kullanıyoruz. Mobilya ve beyaz eşyalarınız fabrikadan çıktığı korunaklılıkta ambalajlanıp, araç içerisinde en güvenli noktalara istiflenir. Teslimatta yine büyük bir özenle evinize yerleştirilir.",
      pricing: "Çeyiz taşıma fiyatları; çeyizin toplam hacmine, asansör gerekip gerekmediğine ve mesafeye göre hesaplanır. Bizimle iletişime geçerek hızlı ve en uygun çeyiz taşıma teklifini alabilirsiniz."
    }
  },
  {
    id: "ogrenci-esyasi",
    slug: "ogrenci-esyasi-tasima",
    title: "Öğrenci Eşyası Taşıma | Ekonomik Öğrenci Nakliyesi | Global Nakliyat",
    h1: "Öğrenci Eşyası Taşıma Hizmeti",
    metaDescription: "Üniversite öğrencilerine özel indirimli fiyatlarla, bütçe dostu öğrenci eşyası taşıma ve parsiyel nakliyat hizmeti. Şehirler arası uygun fiyatlar.",
    intro: "Eğitim hayatınız için şehir değiştirirken eşya taşıma masraflarını dert etmeyin. Öğrencilere özel ekonomik parsiyel taşıma seçeneklerimizle valizlerinizi, kitaplarınızı ve ufak tefek eşyalarınızı çok uygun fiyata taşıyoruz.",
    features: [
      "Öğrencilere özel indirimli fiyat tarifesi",
      "1-2 parça eşya için bile hizmet imkanı",
      "Bavul, koli ve tekli mobilya taşıma",
      "Zamanında ve söz verilen tarihte teslim"
    ],
    content: {
      whatIsIt: "Öğrenci eşyası taşıma; üniversite kazanıp farklı bir şehre gidecek veya mezun olup dönecek öğrencilerin genellikle az hacimli (valiz, bilgisayar, mini buzdolabı, yatak vb.) eşyalarının nakliyesi işlemidir.",
      howWeDoIt: "Miktar az olduğu için eşyalarınız parsiyel (parça eşya) taşıma güzergahımıza dahil edilir. Eşyalarınız barkodlanarak araçlara alınır, başka eşyalarla karışma riski olmadan, diğer müşterilerimizle aynı aracı paylaştığınız için uygun fiyata taşınır.",
      pricing: "Öğrenci nakliye fiyatlarında en önemli faktör eşya hacmidir. Sadece eşyanızın kapladığı yer kadar ödeme yaparsınız, tam araç fiyatı ödemezsiniz. Öğrenci belgelerini ibraz eden müşterilerimize ekstra indirimler uyguluyoruz."
    }
  },
  {
    id: "valiz",
    slug: "valiz-tasima",
    title: "Valiz Taşıma ve Gönderimi | Şehirler Arası Bagaj Nakliyesi",
    h1: "Şehirler Arası Valiz Taşıma",
    metaDescription: "Fazla valiz, bavul ve bagajlarınızı kargo fiyatlarından çok daha uygun maliyetlerle şehirler arası parça eşya taşıma sistemimizle adresinize gönderiyoruz.",
    intro: "Tatile giderken, memlekete dönerken veya uçakta ekstra bagaj ücreti ödemek istemediğinizde valizlerinizi bize emanet edin. Kapınızdan alıp kapınıza bırakıyoruz.",
    features: [
      "Kargo şirketlerinden daha uygun fiyat garantisi",
      "Adresten teslim alma ve adrese teslim etme",
      "Ağırlık sınırı olmaksızın taşıma imkanı",
      "Hasarsız ve güvenli gönderim"
    ],
    content: {
      whatIsIt: "Valiz taşıma hizmeti; havayolu ve otobüs firmalarının bagaj kısıtlamalarına takılan veya kargo şirketlerinin yüksek fiyat talep ettiği valiz, bavul ve şahsi eşyaların nakliye araçlarımızla adresinize ulaştırılmasıdır.",
      howWeDoIt: "Valizleriniz tarafımızdan teslim alındıktan sonra ekstra kalın streç filmlerle kaplanarak çizilmelere karşı koruma altına alınır. Düzenli parsiyel taşıma araçlarımızın özel bölmelerinde güvenle yeni adresinize doğru yola çıkarılır.",
      pricing: "Valiz taşıma fiyatları taşınacak valiz adedine ve gidilecek şehre göre değişiklik gösterir. Uçak kargosu veya standart kargo firmalarına kıyasla çok daha ekonomik ve güvenilir bir yöntemdir."
    }
  },
  {
    id: "koli",
    slug: "koli-tasima",
    title: "Koli Taşıma | Şehirler Arası Koli ve Eşya Gönderimi",
    h1: "Koli Taşıma Hizmeti",
    metaDescription: "Her türlü kişisel eşya, evrak, kitap veya kıyafet kolilerinizi parsiyel nakliye araçlarımızla en uygun koli taşıma fiyatlarıyla adresinize teslim ediyoruz.",
    intro: "Taşınması gereken onlarca koliniz mi var? Kargo şirketlerinin yüksek desi ücretlerine takılmadan, şehirler arası parça eşya taşıma hizmetimizle kolilerinizi ekonomik şekilde gönderin.",
    features: [
      "Hacimli koliler için en uygun fiyatlar",
      "Kırılacak eşya kolilerine ekstra özen",
      "Evden alıp eve teslimat kolaylığı",
      "Düzenli seferlerle hızlı ulaşım"
    ],
    content: {
      whatIsIt: "Koli taşıma hizmeti; içerisine kitap, kıyafet, mutfak eşyası gibi kişisel eşyalarınızı yerleştirdiğiniz koli ve kutuların, şehir içi veya şehirler arası noktalara tek araçta birleştirilerek taşınmasıdır.",
      howWeDoIt: "Kolilerinizi teslim alırken üzerinde 'Kırılacak Eşya' veya 'Hassas' uyarıları olup olmadığına dikkat ederiz. Araçta istifleme yapılırken ağır koliler alta, hafif ve hassas koliler üste gelecek şekilde titiz bir yükleme düzeni oluşturulur.",
      pricing: "Koli nakliye fiyatı belirlenirken kolilerin sayısı, toplam ağırlığı ve kapladığı hacim (metreküp/desi) dikkate alınır. Ne kadar çok koliniz varsa, parça eşya nakliye avantajından o kadar çok kârlı çıkarsınız."
    }
  },
  {
    id: "yazlik",
    slug: "yazlik-esya-tasima",
    title: "Yazlık Eşya Taşıma | Ege ve Akdeniz Yazlık Eşya Nakliyatı",
    h1: "Yazlık Eşya Taşıma Hizmeti",
    metaDescription: "İstanbul'dan Bodrum, Marmaris, Çeşme, Datça, Antalya gibi tüm Ege ve Akdeniz yazlık bölgelerine sigortalı yazlık eşya ve mobilya taşıyoruz.",
    intro: "Yazlığınıza giderken ihtiyacınız olan eşyaları, mobilyaları veya beyaz eşyaları sizin yerinize biz taşıyalım. Ege ve Akdeniz rotalarına her hafta düzenli seferlerimiz mevcut.",
    features: [
      "Ege ve Akdeniz rotalarına haftalık düzenli sefer",
      "Bahçe mobilyaları, beyaz eşya vb. güvenli taşıma",
      "Yazlık bölgelerin dar sokaklarına uygun araçlar",
      "Yaz sezonu öncesi esnek planlama"
    ],
    content: {
      whatIsIt: "Yazlık eşya taşıma, özellikle bahar ve yaz aylarında tatil bölgelerindeki evlerine gidecek olan müşterilerimizin; bahçe mobilyası, ekstra ev eşyası veya kişisel ürünlerinin İstanbul ve çevre illerden yazlık beldelere taşınması işlemidir.",
      howWeDoIt: "Yazlık rotalarımız olan İzmir, Muğla, Antalya ve Aydın ilçelerine her hafta düzenli parsiyel kamyonlarımız yola çıkar. Eşyalarınız alınır, ambalajlanır ve tatiliniz başlamadan önce yazlığınıza teslim edilmiş olur.",
      pricing: "Yazlık bölgelere eşya gönderme fiyatları, yaz sezonunun yoğunluğu ve taşınacak eşyanın hacmine göre belirlenir. Haftalık rutin seferlerimize eşyanızı dahil ettiğinizde oldukça ucuz fiyatlara taşıma yaptırabilirsiniz."
    }
  },
  {
    id: "koltuk",
    slug: "koltuk-tasima",
    title: "Koltuk Taşıma | Şehirler Arası Tek Koltuk ve Mobilya Nakliyat",
    h1: "Koltuk Taşıma Hizmeti",
    metaDescription: "Sadece tek bir koltuk, kanepe veya oturma grubu göndermek istiyorsanız şehirler arası parsiyel taşıma hizmetimizle en ucuz fiyatlarla hizmetinizdeyiz.",
    intro: "Beğendiğiniz o koltuğu aldınız fakat nakliyesi sorun mu oldu? Ya da eski koltuğunuzu memlekete mi göndereceksiniz? Tek parça koltuk taşıma hizmetimizle kapınızdan alıp güvenle ulaştırıyoruz.",
    features: [
      "Tekli kanepe veya tam oturma grubu taşıma",
      "Leke tutmaz kalın streç ve patpat ile paketleme",
      "Söküm ve kurulum (demontaj/montaj) desteği",
      "Çizilme ve yırtılmalara karşı sigorta garantisi"
    ],
    content: {
      whatIsIt: "Koltuk taşıma hizmeti; çekyat, L koltuk, berjer veya 3+3+1+1 gibi tam oturma gruplarının adresler arası nakliye sürecidir. İster tek bir parça, ister tüm takım olsun sorunsuzca taşınır.",
      howWeDoIt: "Koltuğunuzun kumaş yapısının veya derisinin zarar görmemesi, lekelenmemesi için önce streç film ile kaplanır, ardından kalın havalı patpat ile sarılır. Nakliye aracımızda diğer eşyaların üzerine baskı yapmayacağı özel bir konumda güvenle sabitlenir.",
      pricing: "Tek parça koltuk nakliye fiyatı veya koltuk takımı gönderme ücretleri, eşyanın ne kadar yer kapladığına göre belirlenir. Şehirler arası parsiyel (parça eşya) sistemini kullandığımız için kargo şirketlerine göre katbekat ucuzdur."
    }
  }
];

export const getServiceBySlug = (slug: string) => {
  return services.find(s => s.slug === slug);
};
