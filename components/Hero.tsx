import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
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
    <div id="hero" className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-brand-dark">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-brand-lime/5 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] mix-blend-overlay animate-blob animation-delay-2000"></div>
        
        {/* Background Image as <img> tag for better reliability */}
        <img 
          src="https://framerusercontent.com/images/dkfZWs67IxX9Sb9uDq2HYuGySQ.png?scale-down-to=4096&width=5184&height=2997"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-lighten"
        />
      </div>

      {/* Main Content */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.1
            }
          }
        }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12"
      >
        {/* Tagline */}
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse"></span>
          <span className="text-xs font-medium text-brand-lime uppercase tracking-widest">Strategisches Webdesign</span>
        </motion.div>

        {/* H1 Headline */}
        <motion.h1 
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } }
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] mb-8 text-white tracking-tight"
        >
          Verwandle Besucher in <br />
          <span className="italic text-brand-lime">zahlende Kunden.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="max-w-2xl mx-auto text-xl text-gray-400 mb-10 font-light leading-relaxed"
        >
          VAMELA baut Webseiten und Brandings, die nicht nur gut aussehen, sondern strategisch verkaufen.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          {/* Primary Button */}
          <button 
            onClick={scrollToContact}
            className="group relative px-8 py-4 bg-brand-lime text-brand-dark font-bold rounded-lg overflow-hidden transition-all hover:bg-[#c2e040] hover:shadow-[0_0_20px_rgba(212,242,80,0.4)]"
          >
            <span className="relative flex items-center gap-2">
              Projekt anfragen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          {/* Secondary Button */}
          <button 
            onClick={scrollToPortfolio}
            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2 backdrop-blur-sm"
          >
            <Play className="w-3 h-3 fill-current" />
            Arbeiten ansehen
          </button>
        </motion.div>
      </motion.div>
      
      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-dark to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default Hero;