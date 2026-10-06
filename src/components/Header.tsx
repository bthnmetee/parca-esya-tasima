"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Mega menü kategorileri - Tüm Hizmetler (4 sütun yapısı)
const megaMenuCategories = [
  {
    title: "ANA HİZMETLER",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    items: [
      { name: "Evden Eve Nakliyat", href: "/evden-eve-nakliyat" },
      { name: "Şehirler Arası Nakliyat", href: "/sehirler-arasi-nakliyat" },
      { name: "Şehirler Arası Parça Eşya Taşıma", href: "/sehirler-arasi-parca-esya-tasima" },
      { name: "Yazlık Eşya Taşıma", href: "/yazlik-esya-tasima" },
      { name: "Öğrenci Eşyası Taşıma", href: "/ogrenci-esyasi-tasima" },
      { name: "Çeyiz Eşyası Taşıma", href: "/ceyiz-esyasi-tasima" },
      { name: "Beyaz Eşya Taşıma", href: "/beyaz-esya-tasima" },
      { name: "Koltuk Taşıma", href: "/koltuk-tasima" },
      { name: "Koli Taşıma", href: "/koli-tasima" },
      { name: "Valiz Taşıma", href: "/valiz-tasima" },
      { name: "İstanbul Ankara Taşıma", href: "/istanbul-ankara-parca-esya-tasima" },
      { name: "İstanbul Trabzon Taşıma", href: "/istanbul-trabzon-parca-esya-tasima" },
      { name: "İstanbul Konya Taşıma", href: "/istanbul-konya-parca-esya-tasima" },
      { name: "İstanbul Kayseri Taşıma", href: "/istanbul-kayseri-parca-esya-tasima" },
    ],
  },
  {
    title: "EGE BÖLGESİ",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    items: [
      { name: "İstanbul İzmir Taşıma", href: "/istanbul-izmir-parca-esya-tasima" },
      { name: "İstanbul Bodrum Taşıma", href: "/istanbul-bodrum-parca-esya-tasima" },
      { name: "İstanbul Marmaris Taşıma", href: "/istanbul-marmaris-parca-esya-tasima" },
      { name: "İstanbul Fethiye Taşıma", href: "/istanbul-fethiye-parca-esya-tasima" },
      { name: "İstanbul Datça Taşıma", href: "/istanbul-datca-parca-esya-tasima" },
      { name: "İstanbul Çeşme Taşıma", href: "/istanbul-cesme-parca-esya-tasima" },
      { name: "İstanbul Alaçatı Taşıma", href: "/istanbul-alacati-parca-esya-tasima" },
      { name: "İstanbul Urla Taşıma", href: "/istanbul-urla-parca-esya-tasima" },
      { name: "İstanbul Seferihisar Taşıma", href: "/istanbul-seferihisar-parca-esya-tasima" },
      { name: "İstanbul Kuşadası Taşıma", href: "/istanbul-kusadasi-parca-esya-tasima" },
      { name: "İstanbul Didim Taşıma", href: "/istanbul-didim-parca-esya-tasima" },
      { name: "İstanbul Göcek Taşıma", href: "/istanbul-gocek-parca-esya-tasima" },
      { name: "İstanbul Milas Taşıma", href: "/istanbul-milas-parca-esya-tasima" },
      { name: "İstanbul Ortaca Taşıma", href: "/istanbul-ortaca-parca-esya-tasima" },
      { name: "İstanbul Foça Taşıma", href: "/istanbul-foca-parca-esya-tasima" },
    ],
  },
  {
    title: "AKDENİZ BÖLGESİ",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
    items: [
      { name: "İstanbul Antalya Taşıma", href: "/istanbul-antalya-parca-esya-tasima" },
      { name: "İstanbul Alanya Taşıma", href: "/istanbul-alanya-parca-esya-tasima" },
      { name: "İstanbul Kaş Taşıma", href: "/istanbul-kas-parca-esya-tasima" },
      { name: "İstanbul Kalkan Taşıma", href: "/istanbul-kalkan-parca-esya-tasima" },
      { name: "İstanbul Kemer Taşıma", href: "/istanbul-kemer-parca-esya-tasima" },
      { name: "İstanbul Belek Taşıma", href: "/istanbul-belek-parca-esya-tasima" },
      { name: "İstanbul Manavgat Taşıma", href: "/istanbul-manavgat-parca-esya-tasima" },
      { name: "İstanbul Side Taşıma", href: "/istanbul-side-parca-esya-tasima" },
      { name: "İstanbul Mersin Taşıma", href: "/istanbul-mersin-parca-esya-tasima" },
      { name: "İstanbul Adana Taşıma", href: "/istanbul-adana-parca-esya-tasima" },
    ],
  },
  {
    title: "MARMARA BÖLGESİ",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    items: [
      { name: "İstanbul Balıkesir Taşıma", href: "/istanbul-balikesir-parca-esya-tasima" },
      { name: "İstanbul Ayvalık Taşıma", href: "/istanbul-ayvalik-parca-esya-tasima" },
      { name: "İstanbul Edremit Taşıma", href: "/istanbul-edremit-parca-esya-tasima" },
      { name: "İstanbul Akçay Taşıma", href: "/istanbul-akcay-parca-esya-tasima" },
      { name: "İstanbul Altınoluk Taşıma", href: "/istanbul-altinoluk-parca-esya-tasima" },
      { name: "İstanbul Gömeç Taşıma", href: "/istanbul-gomec-parca-esya-tasima" },
      { name: "İstanbul Burhaniye Taşıma", href: "/istanbul-burhaniye-parca-esya-tasima" },
      { name: "İstanbul Çanakkale Taşıma", href: "/istanbul-canakkale-parca-esya-tasima" },
      { name: "İstanbul Bozcaada Taşıma", href: "/istanbul-bozcaada-parca-esya-tasima" },
      { name: "İstanbul Gökçeada Taşıma", href: "/istanbul-gokceada-parca-esya-tasima" },
      { name: "İstanbul Erdek Taşıma", href: "/istanbul-erdek-parca-esya-tasima" },
      { name: "İstanbul Bandırma Taşıma", href: "/istanbul-bandirma-parca-esya-tasima" },
    ],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const megaMenuWrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        megaMenuWrapperRef.current && !megaMenuWrapperRef.current.contains(target) &&
        triggerRef.current && !triggerRef.current.contains(target)
      ) {
        setMegaMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Body scroll lock when mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMegaMenuOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 250);
  }, []);

  const navLinks = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hakkımızda", path: "/hakkimizda" },
    { name: "İletişim", path: "/iletisim" },
  ];

  return (
    <>
      {/* Spacer - fixed header yüksekliği kadar boşluk */}
      <div className={`transition-all duration-300 ${isScrolled ? "h-[75px]" : "h-[115px]"}`} />

      {/* ========== FIXED HEADER WRAPPER ========== */}
      <div className="fixed top-0 left-0 right-0 z-50">

      {/* ========== TOP INFO BAR ========== */}
      <div className={`bg-[#0D1C42] text-white transition-all duration-300 ${isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"}`}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-10 text-[12px]">
            <div className="flex items-center gap-6">
              {/* Telefon */}
              <a href="tel:05324948006" className="flex items-center gap-1.5 text-gray-300 hover:text-[#e6b422] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-[#e6b422]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0532 494 80 06
              </a>
              {/* Email */}
              <a href="mailto:info@globalnakliyat.com" className="hidden md:flex items-center gap-1.5 text-gray-300 hover:text-[#e6b422] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-[#e6b422]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@globalnakliyat.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              {/* Çalışma Saatleri */}
              <span className="hidden sm:flex items-center gap-1.5 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-[#e6b422]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Pzt - Cmt: 08:00 - 20:00
              </span>
              {/* Sosyal Medya */}
              <div className="flex items-center gap-2">
                <a href="https://wa.me/905324948006" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#25D366] transition-colors" aria-label="WhatsApp">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#1877F2] transition-colors" aria-label="Facebook">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#E4405F] transition-colors" aria-label="Instagram">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== MAIN HEADER ========== */}
      <header 
        className={`relative transition-all duration-300 ${
          isScrolled 
            ? "bg-white shadow-lg shadow-black/5" 
            : "bg-white"
        }`}
      >
        {/* Sarı accent çizgi */}
        <div className="h-[3px] bg-gradient-to-r from-[#e6b422] via-[#f0c94d] to-[#e6b422]"></div>
        
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 z-50 shrink-0">
              <Image 
                src="/images/logo-global-1.png" 
                alt="Global Nakliyat Logo" 
                width={180} 
                height={50} 
                className="w-auto h-10 md:h-12 object-contain" 
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-stretch gap-1 h-full">
              {/* Ana Sayfa */}
              <div className="flex items-center h-full">
                <Link 
                  href="/"
                  className={`relative text-[14px] font-semibold transition-all duration-200 px-4 py-2 rounded-lg ${
                    pathname === "/" 
                      ? "text-[#e6b422]" 
                      : "text-[#0D1C42] hover:text-[#e6b422] hover:bg-[#e6b422]/5"
                  }`}
                >
                  Ana Sayfa
                  {pathname === "/" && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[3px] bg-[#e6b422] rounded-full" />
                  )}
                </Link>
              </div>

              {/* Hizmetlerimiz Trigger */}
              <div 
                ref={triggerRef}
                className="flex items-center h-full"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`relative text-[14px] font-semibold transition-all duration-200 flex items-center gap-1.5 px-4 py-2 rounded-lg ${
                    megaMenuOpen 
                      ? "text-[#e6b422] bg-[#e6b422]/5" 
                      : "text-[#0D1C42] hover:text-[#e6b422] hover:bg-[#e6b422]/5"
                  }`}
                  onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                  aria-expanded={megaMenuOpen}
                  aria-haspopup="true"
                >
                  Hizmetlerimiz
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-3.5 w-3.5 transition-transform duration-300 ${megaMenuOpen ? "rotate-180" : ""}`} 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  {megaMenuOpen && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[3px] bg-[#e6b422] rounded-full" />
                  )}
                </button>
              </div>

              {/* Diğer Nav Linkleri */}
              {navLinks.slice(1).map((link) => (
                <div key={link.name} className="flex items-center h-full">
                  <Link 
                    href={link.path}
                    className={`relative text-[14px] font-semibold transition-all duration-200 px-4 py-2 rounded-lg ${
                      pathname === link.path 
                        ? "text-[#e6b422]" 
                        : "text-[#0D1C42] hover:text-[#e6b422] hover:bg-[#e6b422]/5"
                    }`}
                  >
                    {link.name}
                    {pathname === link.path && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[3px] bg-[#e6b422] rounded-full" />
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Sağ taraf - Telefon + CTA */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <a href="tel:05324948006" className="flex items-center gap-2 text-[#0D1C42] font-semibold hover:text-[#e6b422] transition-colors group">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#e6b422]/10 group-hover:bg-[#e6b422]/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#e6b422]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <span className="text-[13px]">0532 494 80 06</span>
              </a>
              <a 
                href="https://wa.me/905324948006" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative overflow-hidden bg-gradient-to-r from-[#e6b422] to-[#d4a41e] text-[#0D1C42] font-bold py-2.5 px-6 rounded-lg text-[13px] tracking-wide uppercase transition-all duration-300 hover:shadow-lg hover:shadow-[#e6b422]/30 hover:-translate-y-0.5 group"
              >
                <span className="relative z-10">Teklif Al</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#f0c94d] to-[#e6b422] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menüyü aç/kapat"
            >
              <div className="w-5 h-4 flex flex-col justify-between relative">
                <span className={`w-full h-[2px] bg-[#0D1C42] rounded-full transition-all duration-300 origin-center ${mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                <span className={`w-full h-[2px] bg-[#0D1C42] rounded-full transition-all duration-300 ${mobileMenuOpen ? "opacity-0 scale-0" : ""}`} />
                <span className={`w-full h-[2px] bg-[#0D1C42] rounded-full transition-all duration-300 origin-center ${mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* ========== MEGA MENU DROPDOWN ========== */}
        <div
          ref={megaMenuWrapperRef}
          className={`absolute left-0 right-0 top-full transition-all duration-300 ease-out z-40 hidden lg:block ${
            megaMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2 pointer-events-none"
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Backdrop overlay */}
          <div className={`fixed inset-0 bg-black/20 -z-10 transition-opacity duration-300 ${megaMenuOpen ? "opacity-100" : "opacity-0"}`} />
          
          <div className="bg-[#0D1C42] shadow-2xl shadow-black/20">
            {/* Sarı gradient accent çizgi */}
            <div className="h-[3px] bg-gradient-to-r from-[#e6b422] via-[#f0c94d] to-[#e6b422]"></div>
            
            <div className="container mx-auto px-4 md:px-8">
              <div className="grid grid-cols-4 gap-0 py-8 px-2">
                
                {megaMenuCategories.map((category, colIdx) => (
                  <div 
                    key={category.title} 
                    className={`${colIdx === 0 ? "pr-6" : colIdx === 3 ? "pl-6" : "px-6"} ${colIdx > 0 ? "border-l border-white/[0.06]" : ""}`}
                    style={{ 
                      animationDelay: `${colIdx * 60}ms`,
                      animation: megaMenuOpen ? `megaMenuFadeIn 0.35s ease-out ${colIdx * 60}ms both` : "none"
                    }}
                  >
                    {/* Kategori başlığı - ikon ile */}
                    <div className="flex items-center gap-2.5 mb-4 pb-3 border-b-2 border-[#e6b422]">
                      <span className="text-[#e6b422]">{category.icon}</span>
                      <span className="text-white font-bold text-[13px] tracking-wider uppercase">
                        {category.title}
                      </span>
                    </div>
                    
                    {/* Ana liste */}
                    <ul className="space-y-[2px]">
                      {category.items.map((item) => (
                        <li key={item.href + item.name}>
                          <Link
                            href={item.href}
                            className="text-gray-400 hover:text-white text-[13px] py-[7px] px-2 -mx-2 flex items-center gap-2 transition-all duration-200 rounded group hover:bg-white/[0.04]"
                            onClick={() => setMegaMenuOpen(false)}
                          >
                            <span className="text-[#e6b422] text-[10px] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200">›</span>
                            <span className="group-hover:translate-x-0.5 transition-transform duration-200">{item.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>

                  </div>
                ))}

              </div>

              {/* Alt CTA band */}
              <div className="border-t border-white/[0.06] py-4 flex items-center justify-between">
                <p className="text-gray-500 text-[12px]">
                  1992&apos;den beri güvenilir taşımacılık hizmeti
                </p>
                <a 
                  href="https://wa.me/905324948006" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#e6b422] hover:text-[#f0c94d] text-[13px] font-semibold transition-colors"
                >
                  Ücretsiz Teklif Alın
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      </div>{/* END FIXED HEADER WRAPPER */}

      {/* ========== MOBILE MENU ========== */}
      <div 
        className={`fixed inset-0 z-[60] transition-all duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "visible" : "invisible pointer-events-none"
        }`}
      >
        {/* Dark overlay */}
        <div 
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-full max-w-[380px] bg-white shadow-2xl transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobil header */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-100">
            <span className="text-[#0D1C42] font-bold text-lg">Menü</span>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Menüyü kapat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col h-[calc(100%-64px)] overflow-y-auto">
            <div className="flex-1 px-4 py-4">
              {/* Ana Sayfa */}
              <Link 
                href="/"
                className={`flex items-center gap-3 py-3 px-3 rounded-xl text-[15px] font-semibold transition-all duration-200 ${
                  pathname === "/" 
                    ? "text-[#e6b422] bg-[#e6b422]/5" 
                    : "text-[#0D1C42] hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#e6b422]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Ana Sayfa
              </Link>

              {/* Hizmetlerimiz Accordion */}
              <div className="mt-1">
                <button
                  className={`w-full flex items-center justify-between py-3 px-3 rounded-xl text-[15px] font-semibold transition-all duration-200 ${
                    mobileServicesOpen 
                      ? "text-[#e6b422] bg-[#e6b422]/5" 
                      : "text-[#0D1C42] hover:bg-gray-50"
                  }`}
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  <span className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#e6b422]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Hizmetlerimiz
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${mobileServicesOpen ? "bg-[#e6b422] rotate-180" : "bg-gray-100"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-3.5 w-3.5 transition-colors ${mobileServicesOpen ? "text-white" : "text-gray-500"}`} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    mobileServicesOpen ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pt-2 pb-2 space-y-4 ml-4 pl-4 border-l-2 border-[#e6b422]/20">
                    {megaMenuCategories.map((category) => (
                      <div key={category.title}>
                        <p className="text-[11px] font-bold text-[#e6b422] uppercase tracking-widest mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#e6b422] rounded-full" />
                          {category.title}
                        </p>
                        <ul className="space-y-0.5">
                          {category.items.map((item) => (
                            <li key={item.href + item.name}>
                              <Link
                                href={item.href}
                                className="text-gray-600 text-[13px] py-2 px-3 flex items-center gap-2 hover:text-[#e6b422] hover:bg-[#e6b422]/5 rounded-lg transition-all duration-200"
                                onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}
                              >
                                <span className="text-[#e6b422]/50 text-[10px]">›</span>
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Diğer sayfalar */}
              <Link 
                href="/hakkimizda"
                className={`flex items-center gap-3 py-3 px-3 mt-1 rounded-xl text-[15px] font-semibold transition-all duration-200 ${
                  pathname === "/hakkimizda" 
                    ? "text-[#e6b422] bg-[#e6b422]/5" 
                    : "text-[#0D1C42] hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#e6b422]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Hakkımızda
              </Link>

              <Link 
                href="/iletisim"
                className={`flex items-center gap-3 py-3 px-3 mt-1 rounded-xl text-[15px] font-semibold transition-all duration-200 ${
                  pathname === "/iletisim" 
                    ? "text-[#e6b422] bg-[#e6b422]/5" 
                    : "text-[#0D1C42] hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#e6b422]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                İletişim
              </Link>
            </div>

            {/* Mobil alt bölüm */}
            <div className="px-4 py-5 border-t border-gray-100 bg-gray-50/50 space-y-3">
              <a href="tel:05324948006" className="flex items-center gap-3 text-[#0D1C42] font-semibold">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e6b422]/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#e6b422]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <div>
                  <span className="text-[15px] font-bold">0532 494 80 06</span>
                  <span className="text-[11px] text-gray-500 block">Hemen Arayın</span>
                </div>
              </a>
              <a 
                href="https://wa.me/905324948006" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#e6b422] to-[#d4a41e] text-[#0D1C42] font-bold py-3.5 rounded-xl text-[14px] uppercase tracking-wide shadow-lg shadow-[#e6b422]/20"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp&apos;tan Teklif Al
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
