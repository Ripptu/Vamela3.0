import React, { useState, useEffect, useRef } from 'react';
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
import NotFound from './components/NotFound';
import WhatsAppButton from './components/WhatsAppButton';
import BudgetSlider from './components/BudgetSlider';
import RoiCalculator from './components/RoiCalculator';

function App() {
  const [currentView, setCurrentView] = useState<'home' | LegalPageType | '404'>('home');
  const originalTitle = useRef(document.title);

  useEffect(() => {
    const handleVisibilityChange = () => {
      const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
      
      if (document.hidden) {
        document.title = "Komm zurück! 🚀";
        if (favicon) {
           // Change to an exclamation mark or red dot
           favicon.href = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23FF4444' /%3E%3Ctext x='50' y='65' font-size='50' text-anchor='middle' fill='white' font-family='sans-serif' font-weight='bold'%3E!%3C/text%3E%3C/svg%3E";
        }
      } else {
        document.title = originalTitle.current;
        if (favicon) {
           // Restore original (Lime chevron)
           favicon.href = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M20 20 L50 90 L80 20' fill='none' stroke='%23D4F250' stroke-width='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/' || path === '') {
      setCurrentView('home');
    } else if (path === '/imprint') {
      setCurrentView('imprint');
    } else if (path === '/privacy') {
      setCurrentView('privacy');
    } else if (path === '/terms') {
      setCurrentView('terms');
    } else {
      setCurrentView('404');
    }
  }, []);

  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-lime selection:text-brand-dark subpixel-antialiased overflow-x-hidden relative">
      <AnimatePresence mode="wait">
        {currentView === 'home' ? (
          <>
            <motion.div
              key="navbar"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-[100]"
            >
              <Navbar />
            </motion.div>
            <motion.div
              key="home-content"
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(10px)', transition: { duration: 0.5 } }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <main>
                <div className="snap-start"><Hero /></div>
                <LogoMarquee />
                <StatsBar />
                <div className="snap-start"><BentoGrid /></div>
                <div className="snap-start"><ExpandablePortfolio /></div>
                <div className="snap-start"><FeatureSpotlight /></div>
                <div className="snap-start"><TechStack /></div>
                <div className="snap-start"><RoiCalculator /></div>
                <div className="snap-start"><BudgetSlider /></div>
                <div className="snap-start"><Testimonials /></div>
                <div className="snap-start"><AboutCreator /></div>
                <div className="snap-start"><FaqSection /></div>
                <div className="snap-start"><ContactForm /></div>
              </main>
              <Footer onNavigate={(page) => setCurrentView(page)} />
            </motion.div>
          </>
        ) : currentView === '404' ? (
             <motion.div
                key="404"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
             >
                <NotFound />
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
      <WhatsAppButton />
    </div>
  );
}

export default App;