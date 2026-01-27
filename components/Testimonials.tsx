import React from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-brand-dark py-32 relative">
       {/* Background Image for section */}
       <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="texture" />
       </div>
       <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/90 to-brand-dark"></div>


      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-10 rounded-2xl bg-[#1A1A1A]/80 backdrop-blur border border-white/10">
                <h3 className="text-6xl font-serif text-brand-lime mb-3">43%</h3>
                <p className="text-base text-gray-300 font-medium">cart recovery vs.<br/>12% industry baseline</p>
            </div>
            <div className="p-10 rounded-2xl bg-[#1A1A1A]/80 backdrop-blur border border-white/10">
                <h3 className="text-6xl font-serif text-brand-lime mb-3">67%</h3>
                <p className="text-base text-gray-300 font-medium">mobile conversion lift through<br/>behavioral intent prediction</p>
            </div>
            <div className="p-10 rounded-2xl bg-[#1A1A1A]/80 backdrop-blur border border-white/10">
                <h3 className="text-6xl font-serif text-brand-lime mb-3">2.4s</h3>
                <p className="text-base text-gray-300 font-medium">response time: AI<br/>predicts exit intent</p>
            </div>
        </div>

        {/* Big Card */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden relative min-h-[600px] border border-white/10"
        >
             <img src="https://images.unsplash.com/photo-1542259681-dadcd2331854?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" alt="Background" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
             
             <div className="absolute bottom-12 left-8 md:bottom-20 md:left-20 max-w-2xl">
                <h3 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
                    From 12% to 43% Cart Recovery for Carnival Internet
                </h3>
             </div>

             <div className="absolute bottom-12 right-8 md:bottom-20 md:right-20 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 flex flex-col gap-5 max-w-xs">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
                </div>
                <div>
                    <p className="text-white font-semibold text-lg">Alec Paterson</p>
                    <p className="text-sm text-gray-300">Director, Dotlines UK</p>
                </div>
             </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;