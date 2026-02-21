import React from 'react';
import { ArrowRight, Instagram, Linkedin, Mail, Twitter, Zap } from 'lucide-react';
import { LegalPageType } from './Legal';

interface FooterProps {
  onNavigate?: (page: LegalPageType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-dark relative border-t border-white/5">
      {/* Final CTA Section */}
      <div className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-tight">
          Bereit für dein <br className="md:hidden" />
          <span className="text-brand-lime italic">nächstes Level?</span>
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto font-light leading-relaxed">
          Lass uns gemeinsam deine Vision in die Realität umsetzen. Strategisches Design, das wirkt und verkauft.
        </p>
        <button 
          onClick={scrollToContact}
          className="group relative px-10 py-5 bg-brand-lime text-brand-dark font-bold text-lg rounded-xl overflow-hidden transition-all hover:bg-[#c2e040] hover:shadow-[0_0_30px_rgba(212,242,80,0.3)] inline-flex items-center gap-2"
        >
          <span className="relative flex items-center gap-2">
            Jetzt starten
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>

      {/* Footer Links & Info */}
      <div className="border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
            
            {/* Brand Column */}
            <div className="flex flex-col items-start gap-6">
               <a href="#" className="block w-32 md:w-40 transition-opacity hover:opacity-80">
                <img src="https://i.postimg.cc/Lm8nq1Sf/Logo-weiss.png" alt="VAMELA" className="w-full h-auto" />
              </a>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Wir erschaffen digitale Erlebnisse, die Marken definieren und Umsätze steigern. Dein Partner für strategisches Webdesign.
              </p>
            </div>

            {/* Socials Column */}
            <div>
              <h4 className="text-white font-medium mb-6">Socials</h4>
              <div className="flex gap-4">
                 <a href="https://www.linkedin.com/in/christian-stockmeier-5663773a9/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all">
                    <Linkedin className="w-5 h-5"/>
                 </a>
                 <a href="https://www.instagram.com/vamela_studio" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all">
                    <Instagram className="w-5 h-5"/>
                 </a>
                 <a href="https://x.com/Vamela_design" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all">
                    <Twitter className="w-5 h-5"/>
                 </a>
              </div>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="text-white font-medium mb-6">Rechtliches</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <button 
                    onClick={() => onNavigate?.('imprint')} 
                    className="text-gray-500 hover:text-white transition-colors text-left"
                  >
                    Impressum
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate?.('privacy')} 
                    className="text-gray-500 hover:text-white transition-colors text-left"
                  >
                    Datenschutz
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate?.('terms')} 
                    className="text-gray-500 hover:text-white transition-colors text-left"
                  >
                    AGB
                  </button>
                </li>
              </ul>
            </div>

             {/* Contact Column */}
             <div>
              <h4 className="text-white font-medium mb-6">Kontakt</h4>
               <ul className="space-y-4 text-sm">
                <li>
                  <a href="mailto:info@vamela.info" className="text-gray-500 hover:text-white transition-colors flex items-center gap-3">
                    <Mail className="w-5 h-5 shrink-0" /> 
                    info@vamela.info
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2026 VAMELA. Made in Bavaria.
            </p>
            
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                <Zap className="w-3 h-3 text-green-500 fill-current" />
                <span className="text-xs font-bold text-green-500 uppercase tracking-wider">100% Performance</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;