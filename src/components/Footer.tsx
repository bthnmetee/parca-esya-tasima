import Link from "next/link";
import Image from "next/image";
import { getRoutesByRegion } from "@/data/routes";
import { services } from "@/data/services";

export default function Footer() {
  const routesByRegion = getRoutesByRegion();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D1C42] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 border-b border-gray-700 pb-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/images/logo-global-1.png" 
                alt="Global Nakliyat Logo" 
                width={200} 
                height={60} 
                className="w-auto h-12 md:h-14 brightness-0 invert object-contain" 
              />
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed pr-4">
              1992'den beri şehirler arası parça eşya taşıma ve evden eve nakliyat hizmetlerinde güvenin adresi. Tüm taşımalarımız firmamızın öz mal araçlarıyla ve %100 sigorta güvencesiyle yapılmaktadır.
            </p>
            <div className="space-y-4">
              <a href="tel:05324948006" className="flex items-center gap-3 text-gray-300 hover:text-[#e6b422] transition-colors font-bold text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#e6b422]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                0532 494 80 06 (GSM & WhatsApp)
              </a>
              <div className="flex flex-col space-y-2 mt-2 ml-9">
                <a href="tel:02122598067" className="text-sm text-gray-400 hover:text-[#e6b422] transition-colors">0212 259 80 67 (Avrupa)</a>
                <a href="tel:02163838241" className="text-sm text-gray-400 hover:text-[#e6b422] transition-colors">0216 383 82 41 (Anadolu)</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <p className="font-heading font-bold text-xl mb-6 text-white">Hızlı Menü</p>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-[#e6b422] transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/sehirler-arasi-parca-esya-tasima" className="text-gray-300 hover:text-[#e6b422] transition-colors">Parça Eşya Taşıma</Link></li>
              <li><Link href="/evden-eve-nakliyat" className="text-gray-300 hover:text-[#e6b422] transition-colors">Evden Eve Nakliyat</Link></li>
              <li><Link href="/sehirler-arasi-nakliyat" className="text-gray-300 hover:text-[#e6b422] transition-colors">Şehirler Arası Nakliyat</Link></li>
              <li><Link href="/hakkimizda" className="text-gray-300 hover:text-[#e6b422] transition-colors">Hakkımızda</Link></li>
              <li><Link href="/iletisim" className="text-gray-300 hover:text-[#e6b422] transition-colors">İletişim</Link></li>
              <li><a href="https://globalnakliyat.com.tr/" className="text-gray-300 hover:text-[#e6b422] transition-colors">Ofis Taşıma</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <p className="font-heading font-bold text-xl mb-6 text-white">Özel Hizmetlerimiz</p>
            <ul className="space-y-3">
              {services.map(service => (
                <li key={service.id}>
                  <Link href={`/${service.slug}`} className="text-gray-300 hover:text-[#e6b422] transition-colors text-sm">
                    {service.h1.replace(" Hizmeti", "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Regions */}
          <div className="lg:col-span-1">
            <p className="font-heading font-bold text-xl mb-6 text-white">Popüler Rotalar</p>
            <div className="space-y-6">
              {Object.entries(routesByRegion).slice(0, 2).map(([region, routes]) => (
                <div key={region}>
                  <p className="font-bold text-[#e6b422] mb-2 text-xs uppercase tracking-wider">{region} Rotaları</p>
                  <ul className="space-y-2">
                    {routes.slice(0, 3).map(route => (
                      <li key={route.slug}>
                        <Link 
                          href={`/${route.slug}`}
                          className="text-gray-400 hover:text-white transition-colors text-sm"
                        >
                          İstanbul - {route.city}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <Link href="/sehirler-arasi-parca-esya-tasima" className="inline-block mt-2 text-[#e6b422] hover:text-white transition-colors text-sm font-semibold">
                Tüm Rotaları Gör →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>&copy; {currentYear} Global Nakliyat. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="/kvkk" className="hover:text-white transition-colors">KVKK</Link>
            <Link href="/gizlilik-politikasi" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
          </div>
        </div>
        <p className="text-center text-white text-sm mt-6">
          <a href="https://www.spindorai.com/seo/en-iyi-seo-ajansi" className="text-[#e6b422] hover:text-white transition-colors">Seo Firması</a> Spindora Tarafından Çalışması Yapılmıştır.
        </p>
      </div>
    </footer>
  );
}
