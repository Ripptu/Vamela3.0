import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import StatsBar from './components/StatsBar';
import BentoGrid from './components/BentoGrid';
import ExpandablePortfolio from './components/ExpandablePortfolio';
import FeatureSpotlight from './components/FeatureSpotlight';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import AboutCreator from './components/AboutCreator';
import ContactForm from './components/ContactForm';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import Legal, { LegalPageType } from './components/Legal';
import CookieConsent from './components/CookieConsent';

function App() {
  const [currentView, setCurrentView] = useState<'home' | LegalPageType>('home');

  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-lime selection:text-brand-dark subpixel-antialiased overflow-x-hidden relative">
      <AnimatePresence mode="wait">
        {currentView === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)', transition: { duration: 0.5 } }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Navbar />
            <main>
              <Hero />
              <LogoMarquee />
              <StatsBar />
              <BentoGrid />
              <ExpandablePortfolio />
              <FeatureSpotlight />
              <TechStack />
              <Testimonials />
              <AboutCreator />
              <FaqSection />
              <ContactForm />
            </main>
            <Footer onNavigate={(page) => setCurrentView(page)} />
          </motion.div>
        ) : (
          <motion.div
            key="legal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="min-h-screen"
          >
            <Legal type={currentView} onBack={() => setCurrentView('home')} />
          </motion.div>
        )}
      </AnimatePresence>
      <CookieConsent />
    </div>
  );
}

export default App;