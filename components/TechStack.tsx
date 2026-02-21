'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Cpu, 
  Globe, 
  Layers, 
  LayoutTemplate, 
  Smartphone, 
  Zap, 
  Database 
} from 'lucide-react';

const TECH_STACK = [
  { name: 'Next.js', icon: Globe, desc: 'Market Leader für SEO & Speed' },
  { name: 'React', icon: Code2, desc: 'Interaktive User Interfaces' },
  { name: 'TypeScript', icon: Cpu, desc: 'Fehlerfreier, sicherer Code' },
  { name: 'Tailwind', icon: LayoutTemplate, desc: 'Modernes, responsive Design' },
  { name: 'Framer Motion', icon: Zap, desc: 'High-End Animationen' },
  { name: 'Node.js', icon: Database, desc: 'Skalierbares Backend' },
  { name: 'Vercel', icon: Layers, desc: 'Globales Edge Hosting' },
  { name: 'PWA', icon: Smartphone, desc: 'Installierbar wie eine App' },
];

const TechStack: React.FC = () => {
  return (
    <section className="bg-brand-dark border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-4 text-center">
        <p className="text-xs font-medium text-gray-600 uppercase tracking-widest">
            Powered by modern Tech Stack
        </p>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          className="flex gap-12 md:gap-24 items-center whitespace-nowrap py-16"
          animate={{ x: [0, -1035] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 40 
          }}
        >
          {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div key={index} className="group/item relative flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-help">
                <Icon className="w-5 h-5 text-brand-lime" />
                <span className="text-lg font-medium text-gray-300">{tech.name}</span>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-white text-brand-dark text-xs font-bold rounded-lg opacity-0 group-hover/item:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-50">
                    {tech.desc}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white"></div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;