'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const AboutCreator: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]); 
  
  const smoothImageY = useSpring(imageY, { stiffness: 60, damping: 20 });
  const smoothTextY = useSpring(textY, { stiffness: 60, damping: 20 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }
    }
  };

  return (
    <section ref={ref} id="about" className="bg-brand-dark py-32 relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Text Column */}
          <motion.div 
            style={{ y: smoothTextY }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="order-2 md:order-1"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-[1px] bg-brand-lime"></span>
                <span className="text-brand-lime text-sm font-medium uppercase tracking-widest">Über mich</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
              Hi, ich bin <br/>
              <span className="italic text-gray-400">Christian.</span>
            </motion.h2>
            
            <div className="mb-12 space-y-6">
               <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                 Design ist für mich mehr als nur hübsche Bilder. Es ist die Sprache, mit der deine Marke Vertrauen aufbaut.
               </motion.p>
               <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                 Ich entwickle digitale Erlebnisse, die nicht nur technisch perfekt funktionieren, sondern deine Besucher emotional abholen. Keine leeren Versprechen, sondern echtes Handwerk aus Bayern.
               </motion.p>
            </div>

            {/* Signature */}
            <motion.div variants={itemVariants} className="relative">
                <p className="font-signature text-5xl text-white/90 transform -rotate-2 origin-left">
                    Christian Stockmeier
                </p>
            </motion.div>
          </motion.div>

          {/* Image Column - Parallaxed Container */}
          <motion.div 
            style={{ y: smoothImageY }}
            className="relative order-1 md:order-2"
          >
            {/* Glow/Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-lime/20 to-transparent blur-[80px] rounded-full pointer-events-none transform translate-x-10 -translate-y-10"></div>
            
            {/* Image without border container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-brand-surface shadow-2xl group"
            >
                <img 
                    src="https://i.postimg.cc/cZPmBdCM/4995ad88-01bd-465e-9b20-c3178ee83d1e.png" 
                    alt="Christian Stockmeier" 
                    className="w-full h-full object-cover scale-105 transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Subtle Overlay to blend image into dark theme slightly, but keep it colored */}
                <div className="absolute inset-0 bg-brand-dark/10 mix-blend-overlay"></div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutCreator;