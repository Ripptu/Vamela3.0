import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import StatsBar from './components/StatsBar';
import BentoGrid from './components/BentoGrid';
import PortfolioFolderSection from './components/PortfolioFolderSection';
import FeatureSpotlight from './components/FeatureSpotlight';
import AboutCreator from './components/AboutCreator';
import ContactForm from './components/ContactForm';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import Legal, { LegalPageType } from './components/Legal';

function App() {
  const [currentView, setCurrentView] = useState<'home' | LegalPageType>('home');

  if (currentView !== 'home') {
    return <Legal type={currentView} onBack={() => setCurrentView('home')} />;
  }

  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-lime selection:text-brand-dark subpixel-antialiased">
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <StatsBar />
        <BentoGrid />
        <PortfolioFolderSection />
        <FeatureSpotlight />
        <AboutCreator />
        <FaqSection />
        <ContactForm />
      </main>
      <Footer onNavigate={(page) => setCurrentView(page)} />
    </div>
  );
}

export default App;