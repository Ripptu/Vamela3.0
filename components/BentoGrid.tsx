'use client';

import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { PenTool, Zap, Heart, Cpu, ArrowUpRight } from 'lucide-react';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
}

const BentoCard: React.FC<BentoCardProps> = ({ children, className = "" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative rounded-3xl border border-white/5 bg-brand-surface/50 overflow-hidden backdrop-blur-sm group ${className}`}
    >
      {/* Spotlight Effect Layer */}
      <motion.div
        className="pointer-events-none absolute -inset-px transition duration-300 z-10 opacity-0 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.08), transparent 40%)`,
        }}
      />
      
      {/* Content Container */}
      <div className="relative h-full z-20 flex flex-col justify-between p-10">
        {children}
      </div>
    </motion.div>
  );
};

const BentoGrid: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="bg-brand-dark py-32 relative z-10 border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-gradient-to-r from-brand-lime/5 to-transparent blur-[120px] pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 max-w-3xl">
          <p className="text-sm text-brand-lime font-medium uppercase tracking-widest mb-4">Unsere Expertise</p>
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-8">
            Design trifft auf <span className="italic text-gray-500">Performance.</span>
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed">
            Wir kombinieren ästhetische Exzellenz mit technischer Präzision, um digitale Erlebnisse zu schaffen, die Ihre Marke voranbringen.
          </p>
        </div>

        {/* Static Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[minmax(340px,auto)]">
          
          {/* Card 1: Strategisches Branding (Span 2) */}
          <BentoCard className="md:col-span-2 bg-gradient-to-br from-white/[0.03] to-transparent">
            <div className="flex justify-between items-start mb-12">
              <div className="w-14 h-14 rounded-2xl bg-brand-lime/10 flex items-center justify-center text-brand-lime border border-brand-lime/20">
                <PenTool className="w-7 h-7" />
              </div>
              <button 
                onClick={scrollToContact}
                className="relative z-30 p-2 -mr-2 -mt-2 rounded-full hover:bg-white/10 transition-colors group/btn cursor-pointer"
                aria-label="Zum Kontaktformular"
              >
                <ArrowUpRight className="w-6 h-6 text-gray-600 group-hover:text-white group-hover/btn:text-brand-lime transition-colors" />
              </button>
            </div>
            <div>
              <h3 className="text-3xl font-serif text-white mb-4 group-hover:text-brand-lime transition-colors">Strategisches Branding</h3>
              <p className="text-gray-400 leading-relaxed max-w-lg text-lg">
                Logo & Identität, die nicht nur gesehen werden, sondern im Gedächtnis bleiben. Wir entwickeln visuelle Sprachen, die Vertrauen schaffen und Ihre Werte kommunizieren.
              </p>
            </div>
            {/* Decorative background element */}
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-brand-lime/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 translate-y-1/2"></div>
          </BentoCard>

          {/* Card 2: High-Performance Webdesign (Span 1) */}
          <BentoCard className="md:col-span-1">
             <div className="flex justify-between items-start mb-12">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-serif text-white mb-4">High-Performance</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Blitzschnelle Ladezeiten und perfektes SEO Ranking. Webseiten, die Google liebt und Nutzer nicht warten lassen.
              </p>
            </div>
          </BentoCard>

          {/* Card 3: Persönlicher Partner (Span 1) */}
          <BentoCard className="md:col-span-1">
             <div className="flex justify-between items-start mb-12">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:rotate-12 transition-transform duration-300">
                <Heart className="w-7 h-7" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-serif text-white mb-4">Persönlicher Partner</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Direkte Kommunikation, keine Warteschleifen. Wir sind Ihr Sparringspartner auf Augenhöhe.
              </p>
            </div>
          </BentoCard>

          {/* Card 4: Skalierbare Technik (Span 2) */}
          <BentoCard className="md:col-span-2">
            <div className="flex justify-between items-start mb-12">
              <div className="w-14 h-14 rounded-2xl bg-brand-lime/10 flex items-center justify-center text-brand-lime border border-brand-lime/20">
                <Cpu className="w-7 h-7" />
              </div>
              <button 
                onClick={scrollToContact}
                className="relative z-30 p-2 -mr-2 -mt-2 rounded-full hover:bg-white/10 transition-colors group/btn cursor-pointer"
                aria-label="Zum Kontaktformular"
              >
                <ArrowUpRight className="w-6 h-6 text-gray-600 group-hover:text-white group-hover/btn:text-brand-lime transition-colors" />
              </button>
            </div>
            <div>
              <h3 className="text-3xl font-serif text-white mb-4 group-hover:text-brand-lime transition-colors">Skalierbare Technik</h3>
              <p className="text-gray-400 leading-relaxed max-w-lg text-lg">
                Zukunftssicherer Code, der mit Ihrem Unternehmen wächst. Wir nutzen modernste Stacks (React, Next.js), um Sicherheit und Erweiterbarkeit zu garantieren.
              </p>
            </div>
             {/* Decorative background element */}
             <div className="absolute left-0 top-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
          </BentoCard>

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex justify-center">
             <div className="inline-flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                <div className="text-center md:text-left">
                    <h4 className="text-xl font-serif text-white">Unsicher, was du brauchst?</h4>
                    <p className="text-gray-400 text-sm">Lass uns in 15 Minuten herausfinden, wie wir dir helfen können.</p>
                </div>
                <button 
                    onClick={scrollToContact}
                    className="px-6 py-3 bg-brand-lime text-brand-dark font-bold rounded-lg hover:bg-[#c2e040] transition-colors whitespace-nowrap"
                >
                    Kostenloses Strategiegespräch
                </button>
             </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;