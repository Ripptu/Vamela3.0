import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, FolderOpen } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  url: string;
  description: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "COREMIS",
    category: "SaaS Dashboard",
    image: "https://i.postimg.cc/G2PBQv3Y/hf-20260127-160126-3174ec87-a3b0-462b-ab22-aee9397ec3a9.webp",
    url: "https://coremis.ch",
    description: "Eine hochkomplexe SaaS-Plattform für Ressourcenmanagement. Fokus auf Datenvisualisierung, intuitive UX für große Datenmengen und ein skalierbares Frontend-System."
  },
  {
    id: 2,
    title: "Rott Facility",
    category: "Garten- & Landschaftsbauer",
    image: "https://i.postimg.cc/FRbfZ0FD/hf-20260127-160137-85045bee-68d0-4d2a-b66c-092cdcec603e.webp",
    url: "https://thomasrott.de",
    description: "Ein moderner, bildgewaltiger Webauftritt für ein Gartenbau-Unternehmen. Das Design unterstreicht die Qualität der handwerklichen Arbeit durch großflächige Typografie und High-End Fotografie."
  },
  {
    id: 3,
    title: "HANSETOOL",
    category: "Handwerk & Service",
    image: "https://i.postimg.cc/G2PBQv3X/hf-20260127-160207-d38c6024-b67f-4e63-916b-c626d9420341.webp",
    url: "https://hansetool2.netlify.app",
    description: "Ein professioneller Webauftritt für ein Handwerksunternehmen mit vielfältigen Einsatzmöglichkeiten. Das Design fokussiert sich auf die klare Darstellung des breiten Leistungsspektrums und schafft Vertrauen bei Auftraggebern."
  }
];

const PortfolioFolderSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="bg-neutral-950 py-40 relative overflow-hidden flex flex-col items-center justify-center min-h-[800px]">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="text-center mb-16 relative z-10 px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Ausgewählte Arbeiten</h2>
        <p className="text-gray-400">Fahren Sie mit der Maus über den Ordner</p>
      </div>

      {/* 3D Scene Container */}
      <div className="relative w-full max-w-4xl h-[400px] flex justify-center items-center perspective-[2000px]">
        
        <motion.div 
          className="relative w-[340px] md:w-[400px] h-[280px] cursor-pointer group"
          initial="closed"
          whileHover="open"
          animate="closed"
        >
          {/* Back Folder Plate */}
          <div className="absolute inset-0 bg-emerald-950 rounded-lg border border-emerald-900/50 shadow-2xl transform translate-z-[-20px]">
             {/* Tab on top right */}
             <div className="absolute -top-6 right-0 w-32 h-8 bg-emerald-950 rounded-t-lg border-t border-x border-emerald-900/50"></div>
          </div>

          {/* Cards Container (Middle Layer) */}
          <div className="absolute inset-x-4 bottom-4 top-4 z-10 flex justify-center items-end">
            
            {PROJECTS.map((project, index) => {
               // Calculate fan angles and positions
               const rotation = index === 0 ? -12 : index === 2 ? 12 : 0;
               const xOffset = index === 0 ? -60 : index === 2 ? 60 : 0;
               const yOffset = -20 * (index + 1); // Staggering
               
               const isCenter = index === 1;

               return (
                <motion.div
                  key={project.id}
                  variants={{
                    closed: { y: 0, x: 0, rotate: 0, scale: 0.95 },
                    open: { 
                      y: -160 + (isCenter ? -30 : 0), 
                      x: xOffset, 
                      rotate: rotation, 
                      scale: 1,
                      transition: { type: "spring", stiffness: 120, damping: 15, delay: 0.1 } 
                    }
                  }}
                  style={{ zIndex: isCenter ? 30 : 20, transformOrigin: "bottom center" }}
                  className="absolute bottom-0 w-[240px] md:w-[280px] aspect-[4/3] bg-neutral-900 rounded-lg shadow-xl overflow-hidden border border-white/10 hover:border-brand-lime/50 transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover/card:opacity-100 transition-opacity" />
                  
                  {/* Card Label Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                    <p className="text-white text-sm font-medium">{project.title}</p>
                    <p className="text-emerald-400 text-xs">{project.category}</p>
                  </div>

                  {/* Hover Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none"></div>
                </motion.div>
               );
            })}
          </div>

          {/* Front Folder Plate */}
          <motion.div 
            className="absolute inset-0 z-40 bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-lg border-t border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden origin-bottom preserve-3d"
            style={{ transformStyle: 'preserve-3d' }}
            variants={{
              closed: { rotateX: 0 },
              open: { rotateX: -35 }
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
             {/* Noise Texture */}
             <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
             
             {/* Content on Folder Cover */}
             <div className="text-center transform translate-z-[1px]">
                <div className="w-16 h-16 bg-emerald-950/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-400/20 backdrop-blur-sm">
                   <FolderOpen className="w-8 h-8 text-emerald-200" />
                </div>
                <h3 className="text-2xl font-serif text-white tracking-wide">Mein Portfolio</h3>
                <p className="text-emerald-200/60 text-sm mt-2 font-mono uppercase tracking-widest">Vertraulich</p>
             </div>

             {/* Shine Reflection */}
             <div className="absolute -inset-full top-0 block h-[200%] w-1/2 -rotate-12 bg-gradient-to-r from-transparent to-white/10 opacity-20 pointer-events-none" />
          </motion.div>

        </motion.div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-5xl w-full bg-neutral-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                 <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-full bg-black/50 backdrop-blur text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                 >
                   <X className="w-5 h-5" />
                 </button>
              </div>

              <div className="grid md:grid-cols-2">
                 <div className="h-[300px] md:h-[600px] bg-neutral-800">
                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                 </div>
                 <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className="text-brand-lime text-sm font-medium uppercase tracking-widest mb-4">{selectedProject.category}</span>
                    <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">{selectedProject.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                       {selectedProject.description}
                    </p>
                    
                    <a 
                      href={selectedProject.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white border-b border-brand-lime pb-1 hover:text-brand-lime transition-colors self-start cursor-pointer"
                    >
                       Website ansehen <ExternalLink className="w-4 h-4" />
                    </a>
                 </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </section>
  );
};

export default PortfolioFolderSection;