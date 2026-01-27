import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-brand-dark py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-20">
          <p className="text-sm text-gray-400 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-white/90">
            Questions? We've got answers
          </h2>
        </div>

        <div className="space-y-6">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-white/10 pb-6"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center py-4 text-left group"
              >
                <span className={`text-xl font-medium transition-colors ${openIndex === index ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                  {faq.question}
                </span>
                <span className="text-gray-500 group-hover:text-white transition-colors">
                  {openIndex === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 pb-4 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;