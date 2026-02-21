'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
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
    title: "Architect",
    category: "Real Estate",
    image: "https://i.postimg.cc/3rZF400t/hf-20260131-102306-465e3086-33bb-4b34-a2ed-a0eec9ba1d82.png",
    url: "https://architectdigital.netlify.app/",
    description: "Moderne Real Estate Plattform für Architektur und Immobilienpräsentation. Minimalistisches Design trifft auf immersive Objekt-Visualisierung."
  },
  {
    id: 2,
    title: "Solaris AI",
    category: "AI Marketing SaaS",
    image: "https://i.postimg.cc/8kbmJffw/hf-20260131-102310-b929d837-2a8d-49dd-8dd0-0dfe4cad72e5.png",
    url: "https://solaris-ai-saas-template.aura.build/",
    description: "Solaris agiert als 24/7 Marketing-Orchestrator. Skalierung durch prädiktive AI-Agenten auf Meta & TikTok. Ein High-Tech Dashboard für Marketing-Automatisierung."
  },
  {
    id: 3,
    title: "VAMELA",
    category: "Agency Portfolio",
    image: "https://i.postimg.cc/Y2xzGLL0/hf-20260131-102458-7dbca7c3-0d46-45fc-87db-c75ff3479c84.jpg",
    url: "https://vamela.info/",
    description: "Strategisches Webdesign & Branding. Wir bauen Webseiten, die nicht nur gut aussehen, sondern strategisch verkaufen. High-End Animationen und Conversion-Fokus."
  },
  {
    id: 4,
    title: "Barnekow",
    category: "Construction & Recycling",
    image: "https://i.postimg.cc/GhhJk3vG/hf-20260131-102337-33acfd6c-14c7-4fc7-b0f6-c1094684ea64.png",
    url: "https://barnekow.netlify.app/",
    description: "Containerdienst, Recycling und Baustoffe für private Bauherren und Gewerbe. Einfach. Schnell. Zuverlässig. Digitale Transformation eines klassischen Handwerksbetriebs."
  },
  {
    id: 5,
    title: "Werklotse",
    category: "Handwerk Service",
    image: "https://i.postimg.cc/zB4v3jSB/hf-20260131-102922-a0c4b1cb-772b-46a4-a680-d7b7b340c1f4.png",
    url: "https://werklotse.netlify.app/",
    description: "Ihr Partner für geprüfte Fachbetriebe im Norden. Wir vermitteln nicht nur – wir begleiten Bauvorhaben von der Planung bis zur Abnahme."
  }
];

const PortfolioFolderSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const folderY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  return (
    <section ref={containerRef} id="portfolio" className="bg-neutral-950 py-40 relative overflow-hidden flex flex-col items-center justify-center min-h-[900px]">
      
      <motion.div 
        style={{ scale: glowScale }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none"
      ></motion.div>

      <div className="text-center mb-24 relative z-10 px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Ausgewählte Arbeiten</h2>
        <p className="text-gray-400 hidden md:block">Fahren Sie mit der Maus über den Ordner</p>
        <p className="text-gray-400 md:hidden block">Tippen Sie auf den Ordner zum Öffnen</p>
      </div>

      <motion.div 
        style={{ y: folderY, transformStyle: 'preserve-3d' }}
        className="relative w-full max-w-5xl h-[450px] flex justify-center items-center perspective-[2000px]"
      >
        
        <motion.div 
          className="relative w-[340px] md:w-[400px] h-[280px] cursor-pointer group"
          initial="closed"
          animate={isFolderOpen ? "open" : "closed"}
          onMouseEnter={() => setIsFolderOpen(true)}
          onMouseLeave={() => setIsFolderOpen(false)}
          onClick={() => setIsFolderOpen(!isFolderOpen)}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Back Folder Plate */}
          <div className="absolute inset-0 bg-emerald-950 rounded-lg border border-emerald-900/50 shadow-2xl transform translate-z-[-20px]">
             <div className="absolute -top-6 right-0 w-32 h-8 bg-emerald-950 rounded-t-lg border-t border-x border-emerald-900/50"></div>
          </div>

          {/* Cards Container (Middle Layer) */}
          <div className="absolute inset-x-4 bottom-4 top-4 z-10 flex justify-center items-end" style={{ transformStyle: 'preserve-3d' }}>
            
            {PROJECTS.map((project, index) => {
               const total = PROJECTS.length;
               const centerIndex = Math.floor(total / 2);
               const offset = index - centerIndex;
               
               const rotation = offset * 5; 
               const xOffset = offset * 45;
               const yArc = Math.abs(offset) * 10;
               
               const zIndex = 50 - Math.abs(offset);

               return (
                <motion.div
                  key={project.id}
                  variants={{
                    closed: { y: 0, x: 0, rotate: 0, scale: 0.95 },
                    open: { 
                      y: -180 + yArc, 
                      x: xOffset, 
                      rotate: rotation, 
                      scale: 1,
                      transition: { type: "spring", stiffness: 120, damping: 15, delay: 0.05 * index } 
                    }
                  }}
                  style={{ zIndex, transformOrigin: "bottom center" }}
                  className="absolute bottom-0 w-[220px] md:w-[260px] aspect-[4/5] bg-neutral-900 rounded-lg shadow-xl overflow-hidden border border-white/10 hover:border-brand-lime/50 transition-colors duration-300 hover:z-[60]"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover/card:opacity-100 transition-opacity" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                    <p className="text-white text-sm font-medium truncate">{project.title}</p>
                    <p className="text-emerald-400 text-[10px] uppercase tracking-wider truncate">{project.category}</p>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none"></div>
                </motion.div>
               );
            })}
          </div>

          {/* Front Folder Plate */}
          <motion.div 
            className="absolute inset-0 z-[60] bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-lg border-t border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden origin-bottom"
            style={{ transformStyle: 'preserve-3d' }}
            variants={{
              closed: { rotateX: 0 },
              open: { rotateX: -35 }
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
             <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
             
             <div className="text-center transform translate-z-[1px]">
                <div className="w-16 h-16 bg-emerald-950/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-400/20 backdrop-blur-sm">
                   <FolderOpen className="w-8 h-8 text-emerald-200" />
                </div>
                <h3 className="text-2xl font-serif text-white tracking-wide">Mein Portfolio</h3>
                <p className="text-emerald-200/60 text-sm mt-2 font-mono uppercase tracking-widest">Vertraulich</p>
             </div>

             <div className="absolute -inset-full top-0 block h-[200%] w-1/2 -rotate-12 bg-gradient-to-r from-transparent to-white/10 opacity-20 pointer-events-none" />
          </motion.div>

        </motion.div>
      </motion.div>

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
              className="relative max-w-5xl w-full bg-neutral-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
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

              <div className="h-[250px] md:h-auto md:w-1/2 bg-neutral-800">
                 <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center overflow-y-auto">
                 <span className="text-brand-lime text-sm font-medium uppercase tracking-widest mb-4">{selectedProject.category}</span>
                 <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">{selectedProject.title}</h3>
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

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </section>
  );
};

export default PortfolioFolderSection;