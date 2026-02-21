import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight } from 'lucide-react';

const RoiCalculator: React.FC = () => {
  const [visitors, setVisitors] = useState(1000);
  const [conversionRate, setConversionRate] = useState(1); // 1%
  const [customerValue, setCustomerValue] = useState(500);
  
  const [lostRevenue, setLostRevenue] = useState(0);

  useEffect(() => {
    // Calculation:
    // Current Revenue = Visitors * (Conversion Rate / 100) * Customer Value
    // Potential Revenue (with good design, assume +2% conversion boost) = Visitors * ((Conversion Rate + 2) / 100) * Customer Value
    // Lost Revenue = Potential - Current
    
    // Simplified for impact: "How much you lose by NOT having a top-tier site"
    // Let's assume a good site converts at least 2% better or just doubles the current rate if it's low.
    // Let's say "Potential Uplift" is +1.5% absolute conversion.
    
    const uplift = 1.5; 
    const monthlyLoss = visitors * (uplift / 100) * customerValue;
    setLostRevenue(monthlyLoss);
  }, [visitors, conversionRate, customerValue]);

  return (
    <section className="bg-brand-dark py-24 relative overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <Calculator className="w-4 h-4 text-brand-lime" />
            <span className="text-xs font-medium text-brand-lime uppercase tracking-widest">ROI Rechner</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif mb-6 text-white">
            Was kostet dich <span className="text-gray-500 italic">schlechtes Design?</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Finde heraus, wie viel Umsatz du jeden Monat liegen lässt, weil deine Website Besucher nicht überzeugt.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Inputs */}
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-4 flex justify-between">
                  <span>Monatliche Besucher</span>
                  <span className="text-white font-mono">{visitors.toLocaleString()}</span>
                </label>
                <input 
                  type="range" 
                  min="100" 
                  max="50000" 
                  step="100" 
                  value={visitors} 
                  onChange={(e) => setVisitors(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-lime hover:accent-brand-lime/80 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-4 flex justify-between">
                  <span>Kundenwert (€)</span>
                  <span className="text-white font-mono">{customerValue.toLocaleString()} €</span>
                </label>
                <input 
                  type="range" 
                  min="50" 
                  max="5000" 
                  step="50" 
                  value={customerValue} 
                  onChange={(e) => setCustomerValue(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-lime hover:accent-brand-lime/80 transition-all"
                />
              </div>
              
              <div className="pt-4">
                 <p className="text-xs text-gray-500 italic">
                    *Basierend auf einer konservativen Conversion-Steigerung von nur 1,5% durch professionelles Design & Strategie.
                 </p>
              </div>
            </div>

            {/* Result */}
            <div className="bg-brand-dark/50 rounded-2xl p-8 border border-white/5 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-2">Mögliches Umsatz-Plus</h3>
              <div className="text-5xl md:text-6xl font-serif font-bold text-white mb-2 tracking-tight">
                <motion.span
                  key={lostRevenue}
                  initial={{ opacity: 0.5, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-brand-lime"
                >
                  +{lostRevenue.toLocaleString('de-DE', { maximumFractionDigits: 0 })} €
                </motion.span>
              </div>
              <p className="text-gray-500 text-sm mb-8">pro Monat</p>

              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-4 bg-white text-brand-dark font-bold rounded-lg hover:bg-brand-lime transition-colors flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(212,242,80,0.3)]"
              >
                Diesen Umsatz sichern
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;
