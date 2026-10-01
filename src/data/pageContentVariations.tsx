import React from 'react';

export function getVariationIndex(str: string, max: number) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash) % max;
}

export const getIntroContent = (cityFrom: string, city: string, v: number) => {
  const contents = [
    (
      <>
        <p>
          <strong>{cityFrom} {city} parça eşya taşıma</strong>, bir aracı tamamen doldurmayacak miktardaki az sayıdaki eşyalarınızın (örneğin birkaç koli, beyaz eşya, tek bir koltuk takımı veya öğrenci eşyası) aynı güzergaha giden diğer müşterilerimizin eşyalarıyla birlikte, birbirine karışmayacak şekilde aynı araçta taşınması işlemidir. 
        </p>
        <p className="mt-4">
          Bu sistem sayesinde tam kamyon kiralama maliyetinden kurtulur ve sadece eşyanızın araçta kapladığı alan kadar ücret ödersiniz. Parça eşya taşıma hizmeti, özellikle <strong>{cityFrom} {city} arası parsiyel taşıma</strong> ihtiyaçlarınızda en ekonomik ve güvenli çözümdür.
        </p>
      </>
    ),
    (
      <>
        <p>
          Kısıtlı sayıdaki eşyalarınız için koca bir nakliye aracı tutmanıza gerek yok. <strong>{cityFrom} {city} parsiyel eşya taşımacılığı</strong> tam olarak bu ihtiyaca cevap verir. Farklı kişilere ait eşyalar, aynı rota üzerinde hareket eden tek bir kamyonda profesyonelce toplanır ve yeni adreslerine teslim edilir.
        </p>
        <p className="mt-4">
          <strong>{cityFrom} ile {city} arasında</strong> her hafta gerçekleştirdiğimiz düzenli seferler sayesinde, çeyiz eşyası, öğrenci evi veya tek parça mobilya gibi gönderilerinizi bütçenizi yormadan sigortalı olarak taşıyoruz. Hem hızlı hem de maliyet etkin bir taşınma yöntemidir.
        </p>
      </>
    ),
    (
      <>
        <p>
          Geleneksel nakliyatın aksine, <strong>{cityFrom} {city} parça eşya nakliyesi</strong> az yer kaplayan eşyalarınız için özel olarak organize edilmiş bir lojistik çözümüdür. Eşyalarınız barkodlanıp özenle ambalajlanarak diğer yüklerden bağımsız bir şekilde istiflenir.
        </p>
        <p className="mt-4">
          İster yazlık eviniz için birkaç parça beyaz eşya, ister tayin nedeniyle taşınacak kısıtlı mobilyalarınız olsun; <strong>{cityFrom} - {city} parsiyel taşıma</strong> hizmetimiz ile yükünüz tam vaktinde ve hasarsız olarak kapınıza kadar ulaştırılır.
        </p>
      </>
    )
  ];
  return contents[v];
};

export const getProcessContent = (cityFrom: string, city: string, v: number) => {
  const contents = [
    (
      <>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          <strong>{cityFrom} {city} parça eşya nakliyesi</strong> sürecimiz son derece şeffaf ve profesyonel bir şekilde yürütülür. İlk adımda müşteri temsilcilerimizle iletişime geçerek eşyalarınızın detaylarını paylaşırsınız. Dilerseniz WhatsApp üzerinden fotoğraflarını göndererek hızlıca fiyat alabilirsiniz.
        </p>
        <ul className="space-y-4">
          <li className="flex gap-3">
            <span className="text-[#e6b422] font-bold text-xl">✓</span>
            <p className="text-gray-600">Taşınma günü planlanır ve eşyalarınız belirlediğiniz saatte adresinizden uzman ekibimiz tarafından paketlenerek teslim alınır.</p>
          </li>
          <li className="flex gap-3">
            <span className="text-[#e6b422] font-bold text-xl">✓</span>
            <p className="text-gray-600">Alınan eşyalar, araç içerisine diğer müşterilerin eşyalarıyla karışmayacak biçimde güvenle istiflenir ve yola çıkarılır.</p>
          </li>
          <li className="flex gap-3">
            <span className="text-[#e6b422] font-bold text-xl">✓</span>
            <p className="text-gray-600">Belirtilen teslimat aralığında eşyalarınız <strong>{city}</strong> adresindeki evinize veya iş yerinize sorunsuz şekilde ulaştırılır.</p>
          </li>
        </ul>
      </>
    ),
    (
      <>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Güvenilir bir taşınma deneyimi için <strong>{cityFrom} - {city} parsiyel taşımacılık</strong> adımlarımız belli standartlar üzerinden ilerler. Bizimle iletişime geçtiğiniz an, eşyalarınızın hacmine ve ebatlarına göre özel bir sevkiyat planı çıkarılır.
        </p>
        <ul className="space-y-4">
          <li className="flex gap-3">
            <span className="text-[#e6b422] font-bold text-xl">1.</span>
            <p className="text-gray-600"><strong>Ücretsiz Keşif ve Fiyatlandırma:</strong> Hacim hesaplaması yapılarak bütçenize en uygun taşıma ücreti belirlenir.</p>
          </li>
          <li className="flex gap-3">
            <span className="text-[#e6b422] font-bold text-xl">2.</span>
            <p className="text-gray-600"><strong>Koruyucu Ambalajlama:</strong> Eşyalarınız alınacağı gün özel balonlu naylonlar ile sarılarak taşıma risklerine karşı korunur.</p>
          </li>
          <li className="flex gap-3">
            <span className="text-[#e6b422] font-bold text-xl">3.</span>
            <p className="text-gray-600"><strong>Teslimat Aşaması:</strong> Araçlarımız {cityFrom} bölgesinden çıkarak belirlenen güzergah üzerinden {city} konumundaki adresinize sorunsuz varış yapar.</p>
          </li>
        </ul>
      </>
    ),
    (
      <>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          <strong>{cityFrom} ile {city} arasında parça eşya göndermek</strong> Global Nakliyat ile çok kolay. Gözünüzü korkutan tüm o stresli aşamaları biz sizin yerinize yönetiyoruz. Adım adım profesyonel taşıma organizasyonumuz şu şekilde işler:
        </p>
        <ul className="space-y-4">
          <li className="flex gap-3">
            <span className="text-[#e6b422] font-bold text-xl">●</span>
            <p className="text-gray-600">Eşya listenizi veya görselleri bize iletmenizle başlayan rezervasyon süreci.</p>
          </li>
          <li className="flex gap-3">
            <span className="text-[#e6b422] font-bold text-xl">●</span>
            <p className="text-gray-600">Belirlenen gün ve saatte adresinize gelen ekibimizin de-montaj ve ambalajlama işlemlerini tamamlaması.</p>
          </li>
          <li className="flex gap-3">
            <span className="text-[#e6b422] font-bold text-xl">●</span>
            <p className="text-gray-600">Eşyalarınızın sigorta işlemleri yapılarak çelik kasalı araçlarımıza yüklenmesi ve <strong>{city}</strong> hedefine doğru yola çıkması.</p>
          </li>
        </ul>
      </>
    )
  ];
  return contents[v];
};

export const getPricingContent = (cityFrom: string, city: string, v: number) => {
  const contents = [
    (
      <>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          <strong>{cityFrom} {city} parça eşya taşıma fiyatları</strong> hesaplanırken birçok kriter göz önünde bulundurulur. Sektördeki en büyük avantaj, tüm aracı kiralamak yerine sadece kullandığınız alan kadar ücret ödemenizdir. Fiyatları belirleyen temel unsurlar:
        </p>
        <ul className="grid sm:grid-cols-2 gap-4">
          <li className="flex gap-2 items-center bg-gray-50 p-3 rounded-lg"><span className="text-[#e6b422]">✔</span> Eşyaların kapladığı hacim (m3)</li>
          <li className="flex gap-2 items-center bg-gray-50 p-3 rounded-lg"><span className="text-[#e6b422]">✔</span> Evlerin bulunduğu kat durumu</li>
          <li className="flex gap-2 items-center bg-gray-50 p-3 rounded-lg"><span className="text-[#e6b422]">✔</span> Dış cephe asansörü gereksinimi</li>
          <li className="flex gap-2 items-center bg-gray-50 p-3 rounded-lg"><span className="text-[#e6b422]">✔</span> Paketleme ve de-montaj detayları</li>
        </ul>
      </>
    ),
    (
      <>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Pek çok müşterimizin ilk sorduğu soru <strong>{cityFrom} - {city} parsiyel nakliye ücretlerinin</strong> nasıl belirlendiğidir. Kısaca özetlemek gerekirse; taşınacak yükün ebatları ve ağırlığı bu bütçeyi oluşturan en önemli parametredir. Aşağıdaki unsurlar maliyet profilini belirler:
        </p>
        <ul className="grid sm:grid-cols-2 gap-4">
          <li className="flex gap-2 items-center bg-gray-50 p-3 rounded-lg"><span className="text-[#e6b422]">✔</span> Gönderilecek toplam eşya adedi</li>
          <li className="flex gap-2 items-center bg-gray-50 p-3 rounded-lg"><span className="text-[#e6b422]">✔</span> Taşıma işleminin yapılacağı katlar</li>
          <li className="flex gap-2 items-center bg-gray-50 p-3 rounded-lg"><span className="text-[#e6b422]">✔</span> Özel koruma/sandıklama talepleri</li>
          <li className="flex gap-2 items-center bg-gray-50 p-3 rounded-lg"><span className="text-[#e6b422]">✔</span> İki lokasyon arası net km mesafesi</li>
        </ul>
      </>
    ),
    (
      <>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          <strong>{cityFrom} konumundan {city} konumuna parça eşya göndermek</strong> istediğinizde maliyetleri optimize etmenin en iyi yolu parsiyel taşımacılıktır. Tam kamyon yüküne göre %60'a varan tasarruf sağlarsınız. Ücretlendirme algoritmamız şu metriklere dayanır:
        </p>
        <ul className="grid sm:grid-cols-2 gap-4">
          <li className="flex gap-2 items-center bg-gray-50 p-3 rounded-lg"><span className="text-[#e6b422]">✔</span> Eşya yoğunluğuna göre metreküp hesabı</li>
          <li className="flex gap-2 items-center bg-gray-50 p-3 rounded-lg"><span className="text-[#e6b422]">✔</span> Alış ve varış noktalarındaki asansör durumu</li>
          <li className="flex gap-2 items-center bg-gray-50 p-3 rounded-lg"><span className="text-[#e6b422]">✔</span> Mobilya kurulumu gibi ekstra işçilikler</li>
          <li className="flex gap-2 items-center bg-gray-50 p-3 rounded-lg"><span className="text-[#e6b422]">✔</span> Sefer yoğunluğu ve tarih aralığı</li>
        </ul>
      </>
    )
  ];
  return contents[v];
};
