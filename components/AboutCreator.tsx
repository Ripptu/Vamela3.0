import React from 'react';
import { motion } from 'framer-motion';

const AboutCreator: React.FC = () => {
  return (
    <section id="about" className="bg-brand-dark py-32 relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-[1px] bg-brand-lime"></span>
                <span className="text-brand-lime text-sm font-medium uppercase tracking-widest">Über den Creator</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
              Mehr als nur <br/>
              <span className="italic text-gray-500">Pixel.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed mb-12">
              <p>
                Ich bin <strong className="text-white font-medium">Christian Stockmeier</strong>. Freelance Designer & Developer.
              </p>
              <p>
                Ich schlage die Brücke zwischen ästhetischem Design und technischer Performance. Mein Ziel: Digitale Assets zu bauen, die echten Umsatz generieren.
              </p>
            </div>

            {/* Signature */}
            <div className="relative">
                <p className="font-signature text-5xl text-white/90 transform -rotate-2 origin-left">
                    Christian Stockmeier
                </p>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 md:order-2"
          >
            {/* Glow/Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-lime/20 to-transparent blur-[80px] rounded-full pointer-events-none transform translate-x-10 -translate-y-10"></div>
            
            {/* Image without border container */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-brand-surface shadow-2xl">
                <img 
                    src="https://i.postimg.cc/cZPmBdCM/4995ad88-01bd-465e-9b20-c3178ee83d1e.png" 
                    alt="Christian Stockmeier" 
                    className="w-full h-full object-cover"
                />
                
                {/* Subtle Overlay to blend image into dark theme slightly, but keep it colored */}
                <div className="absolute inset-0 bg-brand-dark/10 mix-blend-overlay"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutCreator;