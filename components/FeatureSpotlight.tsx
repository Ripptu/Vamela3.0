'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, Activity } from 'lucide-react';

const FeatureSpotlight: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const cardY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section ref={containerRef} className="bg-brand-dark py-32 border-t border-white/5 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-lime/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Headline */}
        <div className="text-center mb-32 max-w-5xl mx-auto">
           <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1]">
             Maßgeschneidertes Design für <br/>
             <span className="italic text-gray-500">maximale Sichtbarkeit & Umsatz</span>
           </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column (Text) */}
          <motion.div 
            style={{ y: textY }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <div className="flex items-center gap-3 mb-8">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lime opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-lime"></span>
                </span>
                <span className="text-brand-lime text-xs font-bold uppercase tracking-[0.2em]">Strategische Ausrichtung</span>
             </div>
             
             <h3 className="text-3xl md:text-4xl font-medium text-white mb-8 leading-snug">
               Erreiche genau die Kunden, <br className="hidden md:block" />die du wirklich willst.
             </h3>
             
             <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
               Wir überlassen nichts dem Zufall. Durch gezielte Design-Psychologie und klare Strukturen führen wir deine Besucher intuitiv vom ersten Klick bis zur Anfrage.
             </p>
          </motion.div>

          {/* Right Column (Visual) */}
          <motion.div 
            style={{ y: cardY }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
             {/* Glow Effect behind Graph */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-brand-lime/5 blur-[80px] rounded-full pointer-events-none"></div>
             
             {/* Glass Card */}
             <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl overflow-hidden min-h-[400px] flex flex-col">
                
                {/* Card Header */}
                <div className="flex justify-between items-center mb-8">
                   <div className="flex items-center gap-2">
                      <Activity className="w-5 h-5 text-gray-500" />
                      <span className="text-sm font-medium text-gray-400">Wachstumskurve</span>
                   </div>
                   <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                      Live Analysis
                   </div>
                </div>

                {/* Chart Area */}
                <div className="flex-1 relative w-full flex items-end pb-8 pl-8">
                   
                   {/* Y Axis Label */}
                   <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-[10px] text-gray-600 font-medium uppercase tracking-wider py-2">
                      <span>Sichtbarkeit</span>
                      <span></span>
                   </div>

                   {/* X Axis Label */}
                   <div className="absolute bottom-0 left-8 right-0 flex justify-between text-[10px] text-gray-600 font-medium uppercase tracking-wider px-2">
                      <span>Start</span>
                      <span>Zeit</span>
                      <span>Ziel</span>
                   </div>

                   {/* Grid Lines */}
                   <div className="absolute inset-0 left-8 bottom-8 border-l border-b border-white/5">
                      <div className="absolute top-1/4 w-full h-[1px] bg-white/5"></div>
                      <div className="absolute top-2/4 w-full h-[1px] bg-white/5"></div>
                      <div className="absolute top-3/4 w-full h-[1px] bg-white/5"></div>
                   </div>

                   {/* The Graph Line (SVG) */}
                   <div className="absolute inset-0 left-8 bottom-8 right-0 top-0 overflow-visible">
                      <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <defs>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#22d3ee" />
                            <stop offset="50%" stopColor="#a855f7" />
                            <stop offset="100%" stopColor="#D4F250" />
                          </linearGradient>
                          <filter id="glow">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                          </filter>
                        </defs>
                        <motion.path 
                          d="M0,90 C20,90 30,70 50,60 C70,50 80,20 100,10" 
                          fill="none" 
                          stroke="url(#lineGradient)" 
                          strokeWidth="3"
                          strokeLinecap="round"
                          filter="url(#glow)"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                        />
                      </svg>
                   </div>
                   
                   {/* Floating Badge */}
                   <motion.div 
                     initial={{ y: 20, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     transition={{ delay: 1, duration: 0.5 }}
                     className="absolute top-[10%] right-[10%] bg-[#0A0A0A] border border-white/10 p-4 rounded-xl shadow-2xl flex items-center gap-4 z-20"
                   >
                      <div className="w-10 h-10 rounded-full bg-brand-lime/10 flex items-center justify-center text-brand-lime border border-brand-lime/20">
                         <TrendingUp className="w-5 h-5" />
                      </div>
                      <div>
                         <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Performance</p>
                         <p className="text-white font-bold text-lg leading-none">Conversion +100%</p>
                      </div>
                   </motion.div>

                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSpotlight;