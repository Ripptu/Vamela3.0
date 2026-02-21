'use client';

import React, { useState } from "react";
import { ExternalLink, ArrowUpRight, X, TrendingUp, CheckCircle, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Expanded Project Data with Case Study info
const PROJECTS = [
  {
    id: 1,
    title: "Architect",
    category: "Real Estate",
    image: "https://i.postimg.cc/3rZF400t/hf-20260131-102306-465e3086-33bb-4b34-a2ed-a0eec9ba1d82.png",
    url: "https://architectdigital.netlify.app/",
    description: "Moderne Real Estate Plattform für Architektur und Immobilienpräsentation. Minimalistisches Design trifft auf immersive Objekt-Visualisierung.",
    challenge: "Die alte Website war statisch und mobil nicht optimiert, was zu hohen Absprungraten bei mobilen Nutzern führte.",
    solution: "Entwicklung eines 'Mobile-First' Designs mit WebGL-Visualisierungen für Immobilien, gehostet auf einem High-Performance Edge Network.",
    result: "+45% längere Verweildauer und eine Verdopplung der Kontaktanfragen über mobile Endgeräte."
  },
  {
    id: 2,
    title: "Solaris AI",
    category: "AI Marketing SaaS",
    image: "https://i.postimg.cc/8kbmJffw/hf-20260131-102310-b929d837-2a8d-49dd-8dd0-0dfe4cad72e5.png",
    url: "https://solaris-ai-saas-template.aura.build/",
    description: "Solaris agiert als 24/7 Marketing-Orchestrator. Skalierung durch prädiktive AI-Agenten auf Meta & TikTok.",
    challenge: "Komplexes SaaS-Produkt, das für Laien schwer verständlich war. Nutzer verstanden den Mehrwert nicht.",
    solution: "Interaktive Produkt-Demos und vereinfachte UX-Flows, die den Nutzen der KI in Echtzeit visualisieren.",
    result: "30% Anstieg der Demo-Buchungen innerhalb von 4 Wochen nach Launch."
  },
  {
    id: 3,
    title: "Barnekow",
    category: "Construction & Recycling",
    image: "https://i.postimg.cc/GhhJk3vG/hf-20260131-102337-33acfd6c-14c7-4fc7-b0f6-c1094684ea64.png",
    url: "https://barnekow.netlify.app/",
    description: "Containerdienst, Recycling und Baustoffe für private Bauherren und Gewerbe. Einfach. Schnell. Zuverlässig.",
    challenge: "Veralteter Bestellprozess per Telefon. Kunden wussten oft nicht, welche Containergröße sie benötigen.",
    solution: "Implementierung eines digitalen Container-Beraters und Online-Bestellsystems.",
    result: "Reduzierung der telefonischen Rückfragen um 60%, während Online-Bestellungen um 25% stiegen."
  },
  {
    id: 4,
    title: "VAMELA",
    category: "Agency Portfolio",
    image: "https://i.postimg.cc/Y2xzGLL0/hf-20260131-102458-7dbca7c3-0d46-45fc-87db-c75ff3479c84.jpg",
    url: "https://vamela.info/",
    description: "Strategisches Webdesign & Branding. Wir bauen Webseiten, die nicht nur gut aussehen, sondern strategisch verkaufen.",
    challenge: "Markenwahrnehmung als Premium-Dienstleister schärfen und 'Baukasten'-Image vermeiden.",
    solution: "High-End Dark Mode Design mit Custom Animations und starker Typografie.",
    result: "98% Kundenzufriedenheit und Positionierung als Top-Adresse für digitales Branding in der Region."
  },
  {
    id: 5,
    title: "HanseTool",
    category: "Industrial Tools",
    image: "https://i.postimg.cc/jSyF1dkF/modernes-webdesign-agentur-freising-hansetool-jpg.webp",
    url: "#",
    description: "Präzisionswerkzeuge für Industrie und Handwerk. Robuste E-Commerce Plattform mit umfangreichem Produktkatalog.",
    challenge: "Riesiger Produktkatalog war unübersichtlich und langsam.",
    solution: "Headless Commerce Ansatz mit Algolia Search für millisekundenschnelle Suchergebnisse.",
    result: "Warenkorbabbruchrate um 15% gesenkt durch optimierte UX."
  },
  {
    id: 6,
    title: "Werklotse",
    category: "Handwerk Service",
    image: "https://i.postimg.cc/zB4v3jSB/hf-20260131-102922-a0c4b1cb-772b-46a4-a680-d7b7b340c1f4.png",
    url: "https://werklotse.netlify.app/",
    description: "Ihr Partner für geprüfte Fachbetriebe im Norden. Wir begleiten Ihr Bauvorhaben von der Planung bis zur Abnahme.",
    challenge: "Vertrauen bei Endkunden aufbauen in einer Branche mit 'schwarzen Schafen'.",
    solution: "Trust-Elemente, transparente Prozesse und echte Kundenstimmen in den Fokus gerückt.",
    result: "Signifikante Steigerung der qualifizierten Leads."
  },
  {
    id: 7,
    title: "Coremis",
    category: "Tech & Consulting",
    image: "https://i.postimg.cc/2yXsCc4n/hf-20260131-093913-af8f4bc9-28b7-4f75-9907-cd0653e7ca30.png",
    url: "#",
    description: "Innovative IT-Lösungen und Unternehmensberatung. Moderne Webpräsenz für digitale Transformation.",
    challenge: "Abstrakte Dienstleistungen verständlich visualisieren.",
    solution: "Nutzung von abstrakten 3D-Elementen und klarer Business-Sprache.",
    result: "Verbesserte Wahrnehmung bei Enterprise-Kunden."
  },
  {
    id: 8,
    title: "Thomas Rott",
    category: "Personal Brand",
    image: "https://i.postimg.cc/vTSJGqW9/hf-20260131-093208-fa0f1ac6-5829-4c3b-9fc1-0b801232456c.png",
    url: "https://thomasrott.de",
    description: "Exklusives Interior Design und Architektur. Minimalistisches Portfolio für anspruchsvolle Wohnkonzepte.",
    challenge: "Die Arbeit soll für sich sprechen, ohne von UI-Elementen überlagert zu werden.",
    solution: "Radikaler Minimalismus mit Fokus auf großflächige Bilder und Typografie.",
    result: "Perfekte digitale Visitenkarte für High-Net-Worth Clients."
  }
];

const ExpandablePortfolio: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(3);
  const [modalProject, setModalProject] = useState<typeof PROJECTS[0] | null>(null);

  const handleOpenModal = (e: React.MouseEvent, project: typeof PROJECTS[0]) => {
    e.stopPropagation();
    e.preventDefault();
    setModalProject(project);
  };

  return (
    <section id="portfolio" className="bg-neutral-950 py-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-lime/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Ausgewählte Arbeiten</h2>
          <p className="text-gray-400">Entdecke die Strategie hinter den Pixeln.</p>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-3 h-[800px] lg:h-[600px]">
          {PROJECTS.map((project, idx) => {
            const isExpanded = idx === expandedIndex;
            
            return (
              <div
                key={project.id}
                onClick={() => setExpandedIndex(idx)}
                onMouseEnter={() => setExpandedIndex(idx)}
                className={`
                  relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                  ${isExpanded ? 'lg:flex-[4] lg:w-[40rem] flex-[4]' : 'lg:flex-[0.5] lg:w-16 flex-[1] opacity-60 hover:opacity-100'}
                  bg-neutral-900 group h-full w-full min-h-[60px] lg:min-h-auto
                `}
              >
                {/* Image Background */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    className={`w-full h-full object-cover transition-transform duration-700 ${isExpanded ? 'scale-100' : 'scale-125 grayscale hover:grayscale-0'}`}
                    src={project.image}
                    alt={project.title}
                  />
                  <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isExpanded ? 'opacity-20' : 'opacity-60'}`}></div>
                  
                  {/* Vertical Text for collapsed state (Desktop) */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isExpanded ? 'opacity-0' : 'opacity-100'}`}>
                    <span className="hidden lg:block -rotate-90 text-white font-medium tracking-widest text-xs whitespace-nowrap uppercase">
                      {project.title}
                    </span>
                  </div>
                </div>

                {/* Expanded Content Overlay */}
                <div 
                  className={`
                    absolute bottom-0 left-0 right-0 p-5 md:p-8 bg-gradient-to-t from-black/90 via-black/70 to-transparent
                    flex flex-col justify-end items-start transition-all duration-500 delay-100
                    ${isExpanded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
                  `}
                >
                  <div className="mb-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lime/20 border border-brand-lime/30 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse"></span>
                    <span className="text-[10px] md:text-xs font-bold text-brand-lime uppercase tracking-wider">{project.category}</span>
                  </div>
                  
                  <h3 className="text-xl md:text-3xl font-serif text-white mb-2 leading-tight">{project.title}</h3>
                  <p className="text-gray-300 max-w-md mb-6 line-clamp-2 text-xs md:text-base">
                    {project.description}
                  </p>
                  
                  <button 
                    onClick={(e) => handleOpenModal(e, project)}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-black font-bold rounded-lg hover:bg-brand-lime transition-colors text-sm md:text-base shadow-lg"
                  >
                    Case Study ansehen
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setModalProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setModalProject(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-white hover:text-black transition-colors text-white"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Image */}
              <div className="md:w-5/12 h-48 md:h-auto relative bg-neutral-900 shrink-0">
                <img 
                  src={modalProject.image} 
                  alt={modalProject.title} 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent md:bg-gradient-to-r"></div>
              </div>

              {/* Right Side: Content */}
              <div className="md:w-7/12 p-6 md:p-10 flex flex-col overflow-y-auto">
                <div className="mb-6">
                  <span className="text-brand-lime text-xs font-bold uppercase tracking-wider mb-2 block">{modalProject.category}</span>
                  <h3 className="text-3xl font-serif text-white">{modalProject.title}</h3>
                </div>

                <div className="space-y-6 mb-8 flex-1">
                  <div className="p-4 bg-white/[0.03] rounded-xl border border-white/5">
                    <div className="flex items-center gap-2 mb-2 text-red-400">
                      <Target className="w-4 h-4" />
                      <h4 className="text-sm font-bold uppercase tracking-wide">Challenge</h4>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{modalProject.challenge}</p>
                  </div>

                  <div className="p-4 bg-white/[0.03] rounded-xl border border-white/5">
                    <div className="flex items-center gap-2 mb-2 text-blue-400">
                      <CheckCircle className="w-4 h-4" />
                      <h4 className="text-sm font-bold uppercase tracking-wide">Solution</h4>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{modalProject.solution}</p>
                  </div>

                  <div className="p-4 bg-brand-lime/10 rounded-xl border border-brand-lime/20">
                    <div className="flex items-center gap-2 mb-2 text-brand-lime">
                      <TrendingUp className="w-4 h-4" />
                      <h4 className="text-sm font-bold uppercase tracking-wide">Result</h4>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{modalProject.result}</p>
                  </div>
                </div>

                <a 
                  href={modalProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-brand-lime transition-colors flex items-center justify-center gap-2"
                >
                  Live Website ansehen
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Portfolio CTA */}
      <div className="relative z-10 mt-20 text-center">
        <h3 className="text-2xl font-serif text-white mb-6">Dein Projekt könnte das nächste sein.</h3>
        <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-3 px-8 py-4 border border-brand-lime/30 bg-brand-lime/10 text-brand-lime font-bold rounded-full hover:bg-brand-lime hover:text-brand-dark transition-all duration-300"
        >
            Projekt anfragen
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default ExpandablePortfolio;