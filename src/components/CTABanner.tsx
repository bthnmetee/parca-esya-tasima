import Link from "next/link";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export default function CTABanner({
  title = "Parça Eşyalarınız İçin Profesyonel Çözüm",
  subtitle = "Hemen bizimle iletişime geçin, eşyalarınızı Türkiye'nin her yerine güvenle taşıyalım. Ücretsiz eksper ve fiyatlandırma hizmetimizden yararlanın.",
  buttonText = "Hemen Teklif Alın"
}: CTABannerProps) {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D1C42] to-[#1a2d5a] z-0"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 opacity-10">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="200" fill="#e6b422" />
        </svg>
      </div>
      <div className="absolute -bottom-20 -left-20 opacity-10">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="150" fill="white" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10">
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
            <p className="text-lg text-gray-300 max-w-2xl">{subtitle}</p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end shrink-0">
            <div className="flex flex-col gap-4 w-full sm:w-auto">
              <a href="https://wa.me/905324948006" target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto text-center shadow-xl shadow-black/20">
                {buttonText}
              </a>
              <a href="tel:05324948006" className="text-white text-center font-bold flex items-center justify-center gap-2 hover:text-[#e6b422] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0532 494 80 06
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
