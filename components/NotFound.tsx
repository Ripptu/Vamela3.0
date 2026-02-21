import React from 'react';
import { motion } from 'framer-motion';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-lime/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-2xl"
      >
        <motion.div 
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_40px_rgba(212,242,80,0.1)]"
        >
            <AlertTriangle className="w-10 h-10 text-brand-lime" />
        </motion.div>

        <h1 className="text-8xl md:text-9xl font-serif text-white mb-4 opacity-10 font-bold select-none">
          404
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 -mt-12 relative z-20">
          Ups, hier gibt es <br/>
          <span className="text-brand-lime italic">nichts zu sehen.</span>
        </h2>
        
        <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          Die Seite, die du suchst, wurde verschoben, gelöscht oder hat nie existiert. Aber keine Sorge, der Weg zurück ist kurz.
        </p>

        <a 
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand-lime text-brand-dark font-bold rounded-xl hover:bg-[#c2e040] transition-all hover:scale-105 shadow-[0_0_20px_rgba(212,242,80,0.3)] group"
        >
          <Home className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          Zurück zur Startseite
        </a>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-dark to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none"></div>
    </div>
  );
};

export default NotFound;
