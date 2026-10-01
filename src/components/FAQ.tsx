import { FAQ as FAQType } from "@/data/routes";

interface FAQProps {
  faqs: FAQType[];
  title?: string;
}

export default function FAQ({ faqs, title = "Sıkça Sorulan Sorular" }: FAQProps) {
  if (!faqs || faqs.length === 0) return null;

  // JSON-LD Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-20 bg-[#F8F9FC]">
      {/* Inject SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0D1C42]">{title}</h2>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="text-gray-600">Hizmetlerimiz hakkında merak ettiğiniz tüm soruların cevapları.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="faq-item group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 font-bold text-lg text-[#0D1C42] hover:text-[#e6b422] transition-colors select-none">
                {faq.question}
                <span className="faq-icon transition-transform duration-300 w-8 h-8 flex items-center justify-center rounded-full bg-[#F8F9FC] text-[#0D1C42] group-hover:bg-[#e6b422] group-hover:text-white shrink-0 ml-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <div className="faq-content p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mt-2">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
