import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, ShieldCheck, ChevronRight, Settings2 } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState<'idle' | 'accepting' | 'declining'>('idle');

  useEffect(() => {
    const consent = localStorage.getItem('vamela-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAction = (action: 'accept' | 'decline') => {
    setStatus(action === 'accept' ? 'accepting' : 'declining');
    
    // Aesthetic delay for the animation to play out
    setTimeout(() => {
      localStorage.setItem('vamela-cookie-consent', action === 'accept' ? 'true' : 'false');
      setIsVisible(false);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-6 z-[100] max-w-[420px] w-[calc(100%-3rem)] md:w-full"
        >
          {/* Main Glass Container */}
          <div className="relative overflow-hidden rounded-2xl bg-[#0F0F0F]/80 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            
            {/* Ambient Background Glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-lime/10 rounded-full blur-[50px] pointer-events-none"></div>
            
            <AnimatePresence mode="wait">
              {status === 'idle' ? (
                <motion.div 
                  key="ask"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-6"
                >
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-inner">
                      <Cookie className="w-6 h-6 text-brand-lime" />
                    </div>
                    <div>
                      <h4 className="text-white font-serif text-lg mb-1 tracking-wide">Experience Upgrade</h4>
                      <p className="text-gray-400 text-sm leading-relaxed font-light">
                        Wir nutzen Cookies, um die Website-Performance zu maximieren und dir Inhalte zu zeigen, die wirklich relevant sind.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleAction('decline')}
                      className="flex-1 py-3 px-4 rounded-xl border border-white/10 text-xs font-medium text-gray-400 hover:bg-white/5 hover:text-white transition-all hover:border-white/20 uppercase tracking-wider"
                    >
                      Nur Essenziell
                    </button>
                    <button
                      onClick={() => handleAction('accept')}
                      className="relative flex-[1.5] py-3 px-4 rounded-xl bg-brand-lime text-brand-dark text-xs font-bold hover:bg-[#c2e040] transition-all shadow-[0_0_20px_rgba(212,242,80,0.2)] hover:shadow-[0_0_30px_rgba(212,242,80,0.4)] hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wider overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Alles Akzeptieren
                        <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                      {/* Shine Effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-0"></div>
                    </button>
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center px-1">
                      <button className="text-[10px] text-gray-500 hover:text-white flex items-center gap-1 transition-colors">
                          <Settings2 className="w-3 h-3" />
                          Einstellungen
                      </button>
                      <a href="/privacy" className="text-[10px] text-gray-500 hover:text-white transition-colors border-b border-transparent hover:border-gray-500">
                          Datenschutz
                      </a>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 flex flex-col items-center justify-center text-center min-h-[200px]"
                >
                  <motion.div 
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-16 h-16 rounded-full bg-brand-lime flex items-center justify-center mb-4 text-brand-dark shadow-[0_0_30px_rgba(212,242,80,0.4)]"
                  >
                    {status === 'accepting' ? <ShieldCheck className="w-8 h-8" /> : <Settings2 className="w-8 h-8" />}
                  </motion.div>
                  <motion.h4 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-white font-serif text-xl mb-1"
                  >
                    {status === 'accepting' ? 'Einstellungen gespeichert' : 'Minimal-Modus aktiviert'}
                  </motion.h4>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-brand-lime text-xs uppercase tracking-widest"
                  >
                    Viel Spaß auf der Website
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Progress Bar Loader at bottom */}
            {status !== 'idle' && (
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 1.2, ease: "easeInOut" }}
                 className="absolute bottom-0 left-0 h-1 bg-brand-lime"
               />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;