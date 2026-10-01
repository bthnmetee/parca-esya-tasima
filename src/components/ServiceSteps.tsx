export default function ServiceSteps() {
  const steps = [
    {
      number: "01",
      title: "İletişim & Keşif",
      desc: "Bize ulaşarak eşyalarınızın detaylarını, nereden nereye taşınacağını bildirirsiniz. Gerekirse ücretsiz görüntülü keşif yapılır ve net fiyat belirlenir."
    },
    {
      number: "02",
      title: "Planlama",
      desc: "Taşıma günü ve saati, sizin ve diğer müşterilerimizin rut planına göre en uygun şekilde organize edilir."
    },
    {
      number: "03",
      title: "Paketleme & Yükleme",
      desc: "Taşıma günü uzman ekibimiz eşyalarınızı balonlu patpatlar ve özel ambalajlarla sarar, güvenle araca yükler."
    },
    {
      number: "04",
      title: "Güvenli Teslimat",
      desc: "Eşyalarınız sigortalı olarak yeni adresinize ulaştırılır. Belirttiğiniz odalara taşınarak sağlam şekilde teslim edilir."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0D1C42]">Nasıl <span className="text-[#e6b422]">Çalışıyoruz?</span></h2>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Parça eşya taşıma sürecimiz 4 basit ve güvenilir adımdan oluşur.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gray-200 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-[#F8F9FC] shadow-xl flex items-center justify-center mb-6 group-hover:border-[#e6b422] transition-colors duration-300 relative">
                <span className="text-3xl font-bold text-[#0D1C42] font-heading">{step.number}</span>
                {/* Ping animation on hover */}
                <div className="absolute inset-0 rounded-full bg-[#e6b422] opacity-0 group-hover:animate-ping -z-10"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0D1C42]">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
