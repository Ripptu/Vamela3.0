import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE_STEPS } from '../constants';

const Timeline: React.FC = () => {
  return (
    <section className="bg-brand-dark py-32 relative overflow-hidden">
        
      {/* Background Gradient Blob */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-lime/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl font-serif text-white/90 leading-tight">
            Personalized marketing to each visitor's<br />
            <span className="italic text-white/40">behavior, interests & timing</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-[1px] bg-white/10 hidden md:block"></div>

          <div className="space-y-40">
            {TIMELINE_STEPS.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative grid md:grid-cols-2 gap-12 md:gap-24 items-center"
              >
                {/* Connector Dot */}
                <div className="absolute left-0 top-8 w-4 h-4 bg-brand-lime rounded-sm hidden md:block -ml-[0.5px] shadow-[0_0_10px_rgba(212,242,80,0.5)]"></div>

                {/* Text Content */}
                <div className="pl-0 md:pl-12">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 bg-brand-lime rounded-sm md:hidden"></div>
                    <span className="text-sm text-gray-400 uppercase tracking-widest">{step.label}</span>
                  </div>
                  <h3 className="text-4xl font-medium text-white mb-6">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">{step.description}</p>
                </div>

                {/* Image Content (Glass Card Effect) */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-brand-lime/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
                    <div className="aspect-[4/3] bg-gray-900 relative">
                        {/* Mock UI overlay based on screenshot */}
                        <img 
                            src={step.image} 
                            alt={step.title}
                            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                        />
                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                             {/* Abstract UI Elements to mimic the screenshot's detailed cards */}
                             <div className="w-full bg-brand-dark/80 backdrop-blur-md p-4 rounded-lg border border-white/10 mb-2">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="h-2 w-20 bg-gray-600 rounded-full"></div>
                                    <div className="h-4 px-2 bg-brand-lime/20 text-brand-lime text-[10px] rounded-full flex items-center">Active</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 w-full bg-gray-700 rounded-full opacity-50"></div>
                                    <div className="h-2 w-2/3 bg-gray-700 rounded-full opacity-30"></div>
                                </div>
                             </div>
                        </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;