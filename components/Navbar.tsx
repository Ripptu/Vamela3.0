'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Twitter, Instagram, MessageCircle } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1] as const
      }
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1] as const,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const linkVariants = {
    closed: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1 }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 border-b ${
          scrolled || isMobileMenuOpen 
            ? 'bg-neutral-950 border-white/10 py-4 shadow-lg' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-[101]">
          
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" onClick={(e) => handleScrollToSection(e, 'hero')} className="block w-32 md:w-40 transition-opacity hover:opacity-80">
              <img src="https://i.postimg.cc/Lm8nq1Sf/Logo-weiss.png" alt="VAMELA" className="w-full h-auto" />
            </a>
          </div>

          {/* Desktop Links (Centered) */}
          <div className="hidden md:flex items-center gap-10 absolute left-1/2 transform -translate-x-1/2">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={`#${item.href}`}
                onClick={(e) => handleScrollToSection(e, item.href)}
                className="text-sm font-medium text-gray-300 hover:text-brand-lime transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(212,242,80,0.6)]"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={(e) => handleScrollToSection(e, 'contact')}
              className="hidden md:block px-5 py-2.5 rounded-lg border border-white/10 text-sm font-medium text-white hover:bg-white/5 transition-colors hover:border-brand-lime/50 hover:text-brand-lime hover:shadow-[0_0_15px_rgba(212,242,80,0.1)]"
            >
              Projekt anfragen
            </button>
            
            {/* Mobile Toggle */}
            <button 
              className="md:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors relative z-[102]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-neutral-950 z-[90] flex flex-col items-center justify-center md:hidden"
          >
             {/* Decorative Background Blob */}
             <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-brand-lime/5 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="flex flex-col items-center justify-between h-full py-24">
              
              {/* Navigation Links */}
              <div className="flex flex-col items-center space-y-6">
                {NAV_ITEMS.map((item, i) => (
                  <motion.a 
                    key={item.label} 
                    href={`#${item.href}`} 
                    custom={i}
                    variants={{
                        closed: { y: 20, opacity: 0 },
                        open: (i) => ({ y: 0, opacity: 1, transition: { delay: 0.1 + i * 0.1 } })
                    }}
                    className="text-5xl font-serif font-medium text-white hover:text-brand-lime transition-colors tracking-tight"
                    onClick={(e) => handleScrollToSection(e, item.href)}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              {/* Footer Actions */}
              <div className="flex flex-col items-center gap-8 w-full">
                 <motion.button 
                    variants={linkVariants}
                    onClick={(e) => handleScrollToSection(e, 'contact')}
                    className="w-64 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white hover:text-brand-dark transition-all uppercase tracking-widest text-sm"
                  >
                    Projekt starten
                  </motion.button>

                  {/* Social Icons */}
                  <motion.div 
                    variants={linkVariants}
                    className="flex items-center gap-8"
                  >
                    <a href="https://www.linkedin.com/in/christian-stockmeier-5663773a9/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin size={24} strokeWidth={1.5} />
                    </a>
                    <a href="https://x.com/Vamela_design" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Twitter size={24} strokeWidth={1.5} />
                    </a>
                    <a href="https://www.instagram.com/vamela_studio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Instagram size={24} strokeWidth={1.5} />
                    </a>
                    <a href="https://wa.me/4917624200179" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-lime transition-colors">
                        <MessageCircle size={24} strokeWidth={1.5} />
                    </a>
                  </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;