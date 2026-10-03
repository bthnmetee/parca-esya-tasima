import type { Metadata } from "next";
import { Urbanist, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const urbanist = Urbanist({ 
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: "Global Nakliyat | Şehirler Arası Parça Eşya Taşıma",
    template: "%s | Global Nakliyat"
  },
  description: "Şehirler arası parça eşya taşıma, çeyiz ve öğrenci eşyası taşımacılığı. İstanbul çıkışlı Ege ve Akdeniz rotalarında sigortalı, güvenli ve ekonomik parsiyel nakliyat.",
  keywords: ["parça eşya taşıma", "şehirler arası parça eşya taşıma", "parsiyel nakliyat", "az eşya taşıma", "öğrenci eşyası taşıma", "çeyiz taşıma", "yazlık eşya taşıma", "istanbul parça eşya taşıma"],
  authors: [{ name: "Global Nakliyat" }],
  creator: "Global Nakliyat",
  publisher: "Global Nakliyat",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.istanbulparcaesyatasima.com"),
  openGraph: {
    title: "Global Nakliyat | Şehirler Arası Parça Eşya Taşıma",
    description: "İstanbul çıkışlı Ege ve Akdeniz rotalarında sigortalı, güvenli ve ekonomik parsiyel nakliyat hizmeti. Hemen fiyat alın.",
    url: "https://www.istanbulparcaesyatasima.com",
    siteName: "Global Nakliyat",
    images: [
      {
        url: "/images/global-nakliye.jpg",
        width: 1200,
        height: 630,
        alt: "Global Nakliyat Parça Eşya Taşıma",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Nakliyat | Şehirler Arası Parça Eşya Taşıma",
    description: "İstanbul çıkışlı Ege ve Akdeniz rotalarında sigortalı, güvenli parsiyel nakliyat.",
    images: ["/images/global-nakliye.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "dPmy6so5r4KydV1tGPhrVMagp7VIx_rXdBcQe2904oM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${urbanist.variable} ${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
