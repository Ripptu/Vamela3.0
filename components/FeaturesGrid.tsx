import React from 'react';
import { FEATURES } from '../constants';
import { motion } from 'framer-motion';

const FeaturesGrid: React.FC = () => {
  return (
    <section className="bg-brand-dark py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-10 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-300 flex flex-col items-start justify-between min-h-[280px]"
            >
              <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/5 text-gray-300 group-hover:text-brand-lime group-hover:border-brand-lime/50 transition-all mb-8">
                {React.cloneElement(feature.icon as React.ReactElement<any>, { className: "w-6 h-6" })}
              </div>
              
              <div className="mt-auto">
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-base text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesGrid;