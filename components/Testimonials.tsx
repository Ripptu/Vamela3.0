import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-brand-dark py-32 relative border-t border-white/5 overflow-hidden">
       {/* Background Ambience */}
       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-lime/5 rounded-full blur-[120px] pointer-events-none translate-y-1/3 translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Intro Text */}
        <div className="text-center mb-20">
           <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
             Ergebnisse, die <span className="text-brand-lime italic">zählen.</span>
           </h2>
           <p className="text-gray-400 text-lg">
             Wir bauen keine digitalen Visitenkarten. Wir bauen Wachstumsmotoren.
           </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-colors"
            >
                <h3 className="text-5xl font-serif text-brand-lime mb-2">+120%</h3>
                <p className="text-sm text-gray-300 font-medium uppercase tracking-wider">Anfragenquote</p>
                <p className="text-sm text-gray-500 mt-2">Durch gezielte UX-Optimierung bei Relaunches.</p>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-colors"
            >
                <h3 className="text-5xl font-serif text-brand-lime mb-2">99</h3>
                <p className="text-sm text-gray-300 font-medium uppercase tracking-wider">Google PageSpeed</p>
                <p className="text-sm text-gray-500 mt-2">Performance-Optimierung für maximales SEO-Ranking.</p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-colors"
            >
                <h3 className="text-5xl font-serif text-brand-lime mb-2">Top 3</h3>
                <p className="text-sm text-gray-300 font-medium uppercase tracking-wider">Ranking</p>
                <p className="text-sm text-gray-500 mt-2">Für relevante lokale Keywords innerhalb von 3 Monaten.</p>
            </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Testimonial 1 */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-all group flex flex-col h-full"
            >
                <Quote className="w-8 h-8 text-brand-lime mb-6 opacity-50" />
                <p className="text-gray-300 text-lg leading-relaxed mb-8 flex-grow">
                    "Die Zusammenarbeit mit VAMELA hat unsere digitale Wahrnehmung komplett verändert. Wir bekommen nicht nur mehr Anfragen, sondern vor allem <span className="text-brand-lime">die richtigen</span>."
                </p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-serif font-bold border border-white/10">
                        MK
                    </div>
                    <div>
                        <p className="text-white font-bold text-sm">Markus Keller</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">CEO, Werklotse</p>
                    </div>
                </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-all group flex flex-col h-full"
            >
                <Quote className="w-8 h-8 text-brand-lime mb-6 opacity-50" />
                <p className="text-gray-300 text-lg leading-relaxed mb-8 flex-grow">
                    "Endlich eine Website, die so schnell ist wie unser Produkt. Das Design ist on-point und die Kommunikation war jederzeit transparent und professionell."
                </p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-serif font-bold border border-white/10">
                        SW
                    </div>
                    <div>
                        <p className="text-white font-bold text-sm">Sarah Weber</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Marketing Lead, TechStart</p>
                    </div>
                </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-all group flex flex-col h-full"
            >
                <Quote className="w-8 h-8 text-brand-lime mb-6 opacity-50" />
                <p className="text-gray-300 text-lg leading-relaxed mb-8 flex-grow">
                    "Ich war skeptisch, ob sich eine neue Website lohnt. Aber seit dem Relaunch melden sich Kunden, die wir vorher nie erreicht hätten. Beste Investition!"
                </p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-serif font-bold border border-white/10">
                        TH
                    </div>
                    <div>
                        <p className="text-white font-bold text-sm">Thomas Huber</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Inhaber, Huber Handwerk</p>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-6">Bereit für ähnliche Ergebnisse?</p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-brand-lime transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(212,242,80,0.4)]"
          >
            Erfolgsgeschichte starten
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;