import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wallet, CheckCircle2 } from 'lucide-react';

const BudgetSlider: React.FC = () => {
  const [budget, setBudget] = useState(3000);

  const getPackage = (value: number) => {
    if (value < 2000) return {
      title: "Landingpage / Audit",
      desc: "Perfekt für den schnellen Start oder eine Optimierung.",
      features: ["One-Pager", "Basis SEO", "Kontaktformular"]
    };
    if (value < 5000) return {
      title: "Corporate Website",
      desc: "Der Standard für professionelle Unternehmen.",
      features: ["Bis zu 5 Unterseiten", "CMS Integration", "Erweitertes SEO", "Blog-Funktion"]
    };
    if (value < 10000) return {
      title: "High-End Branding & Web",
      desc: "Kompletter Marken-Relaunch für maximale Wirkung.",
      features: ["Strategie-Workshop", "Logo & CI Design", "Custom Animations", "Copywriting"]
    };
    return {
      title: "Enterprise / Web App",
      desc: "Maßgeschneiderte Lösungen für komplexe Anforderungen.",
      features: ["Individuelle Entwicklung", "Schnittstellen (API)", "Mitgliederbereich", "Mehrsprachigkeit"]
    };
  };

  const currentPackage = getPackage(budget);

  return (
    <section className="bg-neutral-900 py-24 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-lime/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <Wallet className="w-4 h-4 text-brand-lime" />
            <span className="text-xs font-medium text-brand-lime uppercase tracking-widest">Budget Planer</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif mb-6 text-white">
            Was ist dein <span className="italic text-gray-500">Invest?</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Transparenz von Anfang an. Schieb den Regler und sieh, was du für dein Budget erwarten kannst.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-2xl">
          
          {/* Slider */}
          <div className="mb-12">
            <div className="flex justify-between items-end mb-6">
              <label className="text-gray-400 font-medium">Dein Budgetrahmen</label>
              <div className="text-3xl font-bold text-white font-mono">
                {budget >= 15000 ? '> 15.000 €' : `ca. ${budget.toLocaleString()} €`}
              </div>
            </div>
            <input 
              type="range" 
              min="1000" 
              max="15000" 
              step="500" 
              value={budget} 
              onChange={(e) => setBudget(parseInt(e.target.value))}
              className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-lime hover:accent-brand-lime/80 transition-all"
            />
            <div className="flex justify-between text-xs text-gray-600 mt-2 font-mono">
              <span>1.000 €</span>
              <span>15.000 €+</span>
            </div>
          </div>

          {/* Result Card */}
          <motion.div 
            key={currentPackage.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-brand-dark/80 border border-brand-lime/20 rounded-2xl p-8 text-center md:text-left flex flex-col md:flex-row items-center gap-8"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-serif text-brand-lime mb-2">{currentPackage.title}</h3>
              <p className="text-gray-400 mb-6">{currentPackage.desc}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentPackage.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="shrink-0">
               <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-white text-brand-dark font-bold rounded-lg hover:bg-brand-lime transition-colors whitespace-nowrap"
               >
                 Jetzt anfragen
               </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BudgetSlider;
