import React from 'react';
import { motion } from 'framer-motion';

const LOGOS = [
  'Meridial',
  'Coremis',
  'HanseTool',
  'MAV7',
  'EcuSolutions',
  'ThomasRott'
];

const LogoMarquee: React.FC = () => {
  return (
    <section className="bg-brand-dark py-20 border-t border-b border-white/5 overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-widest">
            Vertraut von innovativen Unternehmen
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Gradient Masks for fade effect at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex items-center gap-16 md:gap-32 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
          style={{ width: "max-content" }} 
        >
          {/* Repeating logos 4 times to ensure seamless loop on all screen sizes */}
          {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
            <div 
              key={index} 
              className="group cursor-default select-none"
            >
              <span className="text-2xl md:text-4xl font-serif font-bold text-gray-700 group-hover:text-white transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
                {logo}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoMarquee;