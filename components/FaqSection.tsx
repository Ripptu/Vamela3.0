import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "Warum kostet das mehr als bei Fiverr & Co.?",
    answer: "Qualität und Strategie. Billig-Anbieter liefern oft nur Templates ohne Ziel. Ich baue verkaufspsychologisch optimierte Webseiten, die Besucher in Kunden verwandeln. Das ist eine Investition, die sich schnell amortisiert, keine Ausgabe."
  },
  {
    question: "Wie lange dauert die Umsetzung eines Projekts?",
    answer: "Im Durchschnitt 2-4 Wochen. Das hängt vom Umfang und deiner Mitarbeit (Feedback, Inhalte) ab. Wir legen zu Beginn einen klaren Zeitplan fest, damit du genau weißt, wann deine neue Seite live geht."
  },
  {
    question: "Was kostet eine professionelle Website bei VAMELA?",
    answer: "Da jedes Projekt unterschiedlich ist, starten meine Pakete meist im mittleren dreistelligen Bereich. Nach einem kostenlosen Erstgespräch erhältst du ein maßgeschneidertes Festpreis-Angebot ohne versteckte Kosten."
  },
  {
    question: "Arbeitest du nur für Kunden aus Haag an der Amper und Freising?",
    answer: "Mein Fokus liegt auf der Region Freising, Moosburg, Landshut und München für persönlichen Kontakt. Dank digitaler Workflows betreue ich aber Kunden in ganz Deutschland erfolgreich remote."
  },
  {
    question: "Ist meine Website für Google optimiert (SEO)?",
    answer: "Ja. Performance und SEO sind das Fundament. Ich achte auf extrem schnelle Ladezeiten, mobile Optimierung und sauberen Code, damit du bei Google optimal gefunden wirst."
  },
  {
    question: "Bietest du auch Logo-Design und Branding an?",
    answer: "Ja, das ist meine Spezialität. Ich entwickle komplette Corporate Identities. Das 'Kombi-Paket' (Logo + Website) ist bei meinen Kunden am beliebtesten, da alles perfekt zusammenpasst."
  },
  {
    question: "Kann ich Inhalte später selbst ändern?",
    answer: "Absolut. Du erhältst ein modernes System (CMS), mit dem du Texte und Bilder kinderleicht selbst tauschen kannst. Auf Wunsch übernehme ich aber auch die monatliche Wartung für dich."
  }
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Generate JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="bg-neutral-950 py-32 relative">
      {/* Inject SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent inline-block">
            Häufige Fragen
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mt-4">
            Alles, was du für den Start deines Projekts wissen musst.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className={`group rounded-2xl transition-all duration-300 ${
                  isOpen ? 'bg-white/[0.03] border-white/10' : 'bg-transparent border-transparent hover:bg-white/[0.01]'
                } border`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-6 md:p-8 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-xl md:text-2xl font-medium transition-colors duration-300 pr-8 ${
                    isOpen ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'
                  }`}>
                    {faq.question}
                  </span>
                  
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isOpen 
                      ? 'bg-brand-lime border-brand-lime text-brand-dark' 
                      : 'border-white/10 text-gray-500 group-hover:border-white/30 group-hover:text-white'
                  }`}>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </motion.div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8">
                        <p className="text-gray-400 leading-relaxed text-lg font-light border-t border-white/5 pt-6">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;