'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, Play, Linkedin, Twitter, Instagram, MapPin, Star, MessageCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Typewriter from 'typewriter-effect';

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
        className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12 pt-[50px] md:pt-0 flex flex-col items-center"
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
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] mb-8 text-white tracking-tight drop-shadow-2xl"
        >
          Verwandle Besucher in <br />
          <span className="italic text-brand-lime inline-block min-h-[1.1em]">
            <Typewriter
              options={{
                strings: ['zahlende Kunden.', 'begeisterte Fans.', 'mehr Umsatz.'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
              }}
            />
          </span>
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
          
          <motion.a
            href="https://www.google.com/maps/place/Vamela/@48.3285839,11.4930196,10z/data=!4m8!3m7!1s0x80770147f9f01323:0x8e9cefe2762f3b7f!8m2!3d48.3285982!4d11.8226616!9m1!1b1!16s%2Fg%2F11yxzjnj68?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-12 flex items-center gap-3 px-4 py-2 rounded-full hover:bg-white/5 transition-all group cursor-pointer"
          >
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center p-1">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
            </div>
            <div className="flex flex-col items-start">
                <div className="flex gap-0.5">
                    {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                    <div className="relative">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <div className="absolute inset-0 overflow-hidden w-[80%]">
                             <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        </div>
                    </div>
                </div>
                <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider group-hover:text-white transition-colors">
                    4.8 auf Google
                </span>
            </div>
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