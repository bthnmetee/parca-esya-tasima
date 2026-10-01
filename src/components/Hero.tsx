import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  bgImage?: string;
}

export default function Hero({ 
  title, 
  subtitle, 
  bgImage = "/images/122045558_2674360682829285_1270275525547055910_o.jpg" 
}: HeroProps) {
  return (
    <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center mt-20 lg:mt-24">
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          className="object-cover animate-hero-zoom"
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1C42]/90 via-[#0D1C42]/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#e6b422]/20 border border-[#e6b422]/30 backdrop-blur-sm animate-fade-up">
            <span className="text-[#e6b422] font-semibold text-sm tracking-wide uppercase">
              Global Nakliyat Güvencesiyle
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-up-delay font-heading">
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed animate-fade-up-delay-2">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-2">
            <a href="https://wa.me/905324948006" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Ücretsiz Teklif Alın
            </a>
            <a href="tel:05324948006" className="btn-secondary glass !text-white hover:!bg-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0532 494 80 06
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto text-white fill-current">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
}
