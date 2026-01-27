import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

export type LegalPageType = 'imprint' | 'privacy' | 'terms';

interface LegalProps {
  type: LegalPageType;
  onBack: () => void;
}

const Legal: React.FC<LegalProps> = ({ type, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const renderContent = () => {
    switch (type) {
      case 'imprint':
        return (
          <>
            <h1 className="text-4xl font-serif text-white mb-12">Impressum</h1>
            
            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="text-gray-300 leading-relaxed">
                Christian Stockmeier<br />
                Vamela<br />
                In der Leiten 10<br />
                85410 Haag an der Amper
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">Kontakt</h2>
              <p className="text-gray-300 leading-relaxed">
                Telefon: <a href="tel:+4917624200179" className="hover:text-brand-lime transition-colors">+49 176 24200179</a><br />
                E-Mail: <a href="mailto:stockmeier.ch@gmail.com" className="hover:text-brand-lime transition-colors">stockmeier.ch@gmail.com</a>
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">Umsatzsteuer-ID</h2>
              <p className="text-gray-300 leading-relaxed">
                Steuernummer: 115/278/10061
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">Verantwortlich für den Inhalt</h2>
              <p className="text-gray-300 leading-relaxed">
                Christian Stockmeier<br />
                In der Leiten 10<br />
                85410 Haag an der Amper
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">EU-Streitschlichtung</h2>
              <p className="text-gray-300 leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-lime transition-colors">https://ec.europa.eu/consumers/odr/</a>.<br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>
          </>
        );
      case 'privacy':
        return (
          <>
            <h1 className="text-4xl font-serif text-white mb-12">Datenschutzerklärung</h1>
            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">1. Datenschutz auf einen Blick</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Allgemeine Hinweise<br />
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
              <p className="text-gray-300 leading-relaxed">
                Datenschutz<br />
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
            </section>
          </>
        );
      case 'terms':
        return (
          <>
            <h1 className="text-4xl font-serif text-white mb-12">Allgemeine Geschäftsbedingungen</h1>
            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">§ 1 Geltungsbereich</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Für die Geschäftsbeziehung zwischen dem Anbieter und dem Kunden gelten ausschließlich die nachfolgenden Allgemeinen Geschäftsbedingungen in ihrer zum Zeitpunkt der Bestellung gültigen Fassung.
              </p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">§ 2 Vertragsschluss</h2>
              <p className="text-gray-300 leading-relaxed">
                 Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot, sondern einen unverbindlichen Online-Katalog dar.
              </p>
            </section>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-lime selection:text-brand-dark">
      {/* Navigation Bar Area */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <button 
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-medium tracking-wide"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Zurück zur Startseite
        </button>
      </div>

      {/* Main Content Area - Narrow & Focused */}
      <main className="max-w-2xl mx-auto px-6 pb-32 pt-4">
        {renderContent()}
      </main>
    </div>
  );
};

export default Legal;