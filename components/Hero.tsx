'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, Play, Linkedin, Twitter, Instagram, MapPin, Star, MessageCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [locationText, setLocationText] = useState("Strategisches Webdesign");
  
  const textY = useTransform(scrollY, [0, 500], [0, 100]); 
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    // Robust Local SEO Logic using geojs.io (more reliable than ipapi free tier)
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
        if (!response.ok) throw new Error('Geo fetch failed');
        
        const data = await response.json();
        // Check for city and ensure it's not empty
        if (data.city && data.city.length > 0) {
          setLocationText(`Webdesign für ${data.city}`);
        }
      } catch (error) {
        // Silent fallback to default text
        console.debug("Locality fetch failed, keeping default.");
      }
    };
    fetchLocation();
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={ref} 
      id="hero" 
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-brand-dark"
    >
      {/* Background Ambience Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-brand-lime/5 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] mix-blend-overlay animate-blob animation-delay-2000"></div>
        
        <img 
          src="https://framerusercontent.com/images/dkfZWs67IxX9Sb9uDq2HYuGySQ.png?scale-down-to=4096&width=5184&height=2997"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-lighten"
        />
      </div>

      {/* Texture Layer */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

      {/* Socials Sidebar */}
      <motion.div 
        style={{ opacity }} 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-6 items-center"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-white/20"></div>
        <div className="flex flex-col gap-5">
            <a href="https://www.linkedin.com/in/christian-stockmeier-5663773a9/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-lime transition-colors duration-300 transform hover:scale-110">
            <Linkedin size={20} strokeWidth={1.5} />
            </a>
            <a href="https://x.com/Vamela_design" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-lime transition-colors duration-300 transform hover:scale-110">
            <Twitter size={20} strokeWidth={1.5} />
            </a>
            <a href="https://www.instagram.com/vamela_studio" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-lime transition-colors duration-300 transform hover:scale-110">
            <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a href="https://wa.me/4917624200179" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-500 transition-colors duration-300 transform hover:scale-110" aria-label="WhatsApp">
            <MessageCircle size={20} strokeWidth={1.5} />
            </a>
        </div>
        <div className="w-[1px] h-20 bg-gradient-to-t from-transparent to-white/20"></div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        style={{ y: textY, opacity }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.1,
              duration: 0.8
            }
          }
        }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12 flex flex-col items-center"
      >
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse"></span>
          <span className="text-xs font-medium text-brand-lime uppercase tracking-widest flex items-center gap-2">
            {locationText.includes("für") && <MapPin className="w-3 h-3" />}
            {locationText}
          </span>
        </motion.div>

        <motion.h1 
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] mb-8 text-white tracking-tight drop-shadow-2xl"
        >
          Verwandle Besucher in <br />
          <span className="italic text-brand-lime">zahlende Kunden.</span>
        </motion.h1>

        <motion.p 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="max-w-2xl mx-auto text-xl text-gray-400 mb-10 font-light leading-relaxed"
        >
          VAMELA baut Webseiten und Brandings, die nicht nur gut aussehen, sondern strategisch verkaufen.
        </motion.p>

        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button 
              onClick={scrollToContact}
              className="group relative px-8 py-4 bg-brand-lime text-brand-dark font-bold rounded-lg overflow-hidden transition-all hover:bg-[#c2e040] hover:shadow-[0_0_20px_rgba(212,242,80,0.6)] animate-pulse hover:animate-none"
            >
              <span className="relative flex items-center gap-2">
                Kostenloses Erstgespräch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button 
              onClick={scrollToPortfolio}
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2 backdrop-blur-sm"
            >
              <Play className="w-3 h-3 fill-current" />
              Arbeiten ansehen
            </button>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-xs font-medium text-brand-lime/80 uppercase tracking-wider flex items-center gap-2 bg-brand-lime/5 px-3 py-1 rounded-full border border-brand-lime/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lime opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-lime"></span>
            </span>
            Nur noch 2 Slots für diesen Monat verfügbar
          </motion.p>

          <motion.a
            href="https://www.google.com/maps/place/Vamela/@48.3285839,11.4930196,10z/data=!4m8!3m7!1s0x80770147f9f01323:0x8e9cefe2762f3b7f!8m2!3d48.3285982!4d11.8226616!9m1!1b1!16s%2Fg%2F11yxzjnj68?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="mt-6 flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all group backdrop-blur-sm"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]" />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
              Bewerte uns auf Google
            </span>
          </motion.a>
        </motion.div>

        {/* Mobile Socials */}
        <motion.div 
            variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
            }}
            className="md:hidden mt-12 flex gap-6 z-20"
        >
            <a href="https://www.linkedin.com/in/christian-stockmeier-5663773a9/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
            <Linkedin size={18} strokeWidth={1.5} />
            </a>
            <a href="https://x.com/Vamela_design" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
            <Twitter size={18} strokeWidth={1.5} />
            </a>
            <a href="https://www.instagram.com/vamela_studio" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
            <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a href="https://wa.me/4917624200179" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-green-500 hover:bg-white/10 transition-colors">
            <MessageCircle size={18} strokeWidth={1.5} />
            </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-dark to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default Hero;