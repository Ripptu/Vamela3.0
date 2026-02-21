import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  CheckCircle, 
  Loader2, 
  Mail, 
  AlertCircle, 
  ArrowRight, 
  ArrowLeft,
  Globe,
  RefreshCcw,
  Palette,
  Search,
  ShoppingBag,
  Zap,
  PenTool,
  LifeBuoy
} from 'lucide-react';

const PROJECT_TYPES = [
  { id: 'website', label: 'Neue Website', icon: Globe },
  { id: 'relaunch', label: 'Relaunch', icon: RefreshCcw },
  { id: 'ecommerce', label: 'E-Commerce / Shop', icon: ShoppingBag },
  { id: 'branding', label: 'Branding & Logo', icon: Palette },
  { id: 'seo', label: 'SEO / Sichtbarkeit', icon: Search },
  { id: 'performance', label: 'Performance / Speed', icon: Zap },
  { id: 'content', label: 'Content & Texte', icon: PenTool },
  { id: 'maintenance', label: 'Wartung & Support', icon: LifeBuoy },
];

const BUDGET_OPTIONS = [
  "Start-Budget (500€ – 1.500€)",
  "Growth (1.500€ – 3.000€)",
  "Premium (> 3.000€)",
  "Ich brauche erst eine Beratung"
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 20 : -20,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 20 : -20,
    opacity: 0,
  }),
};

const ContactForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    message: '',
    budget: '',
    projectTypes: [] as string[]
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  React.useEffect(() => {
const fetchLocation = async () => {
      try {
        const response = await window.fetch('https://get.geojs.io/v1/ip/geo.json');
        if (!response.ok) throw new Error('Geo fetch failed');
        
        const data = await response.json();
        if (data.city && data.city.length > 0) {
          setFormData(prev => ({ ...prev, city: data.city }));
        }
      } catch (error) {
        console.debug("Locality fetch failed");
      }
    };
    fetchLocation();
  }, []);

  const nextStep = () => {
    if (step < 3) {
      setDirection(1);
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  const toggleProjectType = (typeLabel: string) => {
    setFormData(prev => {
      const types = prev.projectTypes.includes(typeLabel)
        ? prev.projectTypes.filter(t => t !== typeLabel)
        : [...prev.projectTypes, typeLabel];
      return { ...prev, projectTypes: types };
    });
  };

  const handleBudgetSelect = (budget: string) => {
    setFormData(prev => ({ ...prev, budget }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'success') return;
    setStatus('submitting');

    try {
      const payload = {
        ...formData,
        projectTypes: formData.projectTypes.join(', ')
      };

      const response = await fetch("https://formspree.io/f/xqeqnedl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  // Validation
  const isStep1Valid = formData.projectTypes.length > 0;
  const isStep2Valid = formData.budget !== '';
  const isStep3Valid = formData.name !== '' && formData.email !== '';

  return (
    <section id="contact" className="bg-neutral-950 py-32 relative border-t border-white/5 overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-brand-lime/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>
       <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-16 items-start relative z-10">
        
        {/* Left Column: Text */}
        <div className="lg:col-span-2 lg:sticky lg:top-32">
           <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-[1px] bg-brand-lime"></span>
                <span className="text-brand-lime text-sm font-medium uppercase tracking-widest">Kontakt</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
                Lass uns etwas <br/>
                <span className="italic text-gray-500">Einzigartiges schaffen.</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Erzähl mir von deiner Vision. Ich helfe dir, digital sichtbar zu werden. Füll das Formular aus, und ich melde mich in &lt; 24h.
            </p>

            <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-brand-lime" />
                </div>
                <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Schreib mir direkt</p>
                    <a href="mailto:info@vamela.info" className="text-lg font-medium hover:text-brand-lime transition-colors">info@vamela.info</a>
                </div>
            </div>
        </div>

        {/* Right Column: Multi-Step Wizard */}
        <div className="lg:col-span-3">
            <div className="relative bg-white/[0.02] border border-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-2xl min-h-[600px] flex flex-col">
                
                {/* Progress Bar */}
                <div className="w-full h-1 bg-white/5 rounded-full mb-8 relative overflow-hidden">
                    <motion.div 
                        className="absolute left-0 top-0 bottom-0 bg-brand-lime"
                        initial={{ width: "33%" }}
                        animate={{ width: `${(step / 3) * 100}%` }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    ></motion.div>
                </div>

                {/* Wizard Content */}
                <div className="flex-1 relative overflow-hidden flex flex-col">
                    <AnimatePresence mode="wait" custom={direction}>
                        
                        {/* STEP 1 */}
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.3 }}
                                className="h-full flex flex-col"
                            >
                                <h3 className="text-2xl font-serif text-white mb-8">Wobei darf ich dich unterstützen?</h3>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 overflow-y-auto max-h-[450px] pr-2 custom-scrollbar">
                                    {PROJECT_TYPES.map((type) => {
                                        const isSelected = formData.projectTypes.includes(type.label);
                                        const Icon = type.icon;
                                        return (
                                            <button
                                                key={type.id}
                                                onClick={() => toggleProjectType(type.label)}
                                                className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200 group ${
                                                    isSelected 
                                                    ? 'bg-brand-lime/10 border-brand-lime shadow-[0_0_15px_rgba(212,242,80,0.1)]' 
                                                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                                                }`}
                                            >
                                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                                                    isSelected ? 'bg-brand-lime text-brand-dark' : 'bg-white/5 text-gray-400 group-hover:text-white'
                                                }`}>
                                                    <Icon className="w-5 h-5" />
                                                </div>
                                                <span className={`font-medium ${isSelected ? 'text-brand-lime' : 'text-gray-300 group-hover:text-white'}`}>
                                                    {type.label}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                                
                                <div className="mt-auto pt-8 flex justify-end">
                                    <button
                                        onClick={nextStep}
                                        disabled={!isStep1Valid}
                                        className="px-6 py-3 rounded-xl bg-brand-lime text-brand-dark font-bold flex items-center gap-2 hover:bg-[#c2e040] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                    >
                                        Weiter
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 2 */}
                        {step === 2 && (
                            <motion.div
                                key="step2"
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.3 }}
                                className="h-full flex flex-col"
                            >
                                <div className="mb-8">
                                    <h3 className="text-2xl font-serif text-white mb-2">Welches Budget hast du eingeplant?</h3>
                                    <p className="text-gray-400 text-sm">Damit ich dir die passenden Lösungen anbieten kann.</p>
                                </div>

                                <div className="space-y-3">
                                    {BUDGET_OPTIONS.map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => handleBudgetSelect(opt)}
                                            className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                                                formData.budget === opt
                                                ? 'bg-brand-lime/10 border-brand-lime' 
                                                : 'bg-white/5 border-white/10 hover:bg-white/10'
                                            }`}
                                        >
                                            <span className={`font-medium ${formData.budget === opt ? 'text-brand-lime' : 'text-gray-300'}`}>
                                                {opt}
                                            </span>
                                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                                formData.budget === opt ? 'border-brand-lime' : 'border-gray-500'
                                            }`}>
                                                {formData.budget === opt && <div className="w-2.5 h-2.5 rounded-full bg-brand-lime" />}
                                            </div>
                                        </button>
                                    ))}
                                </div>

                                <div className="mt-auto pt-8 flex justify-between">
                                    <button
                                        onClick={prevStep}
                                        className="px-6 py-3 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition-all flex items-center gap-2"
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                        Zurück
                                    </button>
                                    <button
                                        onClick={nextStep}
                                        disabled={!isStep2Valid}
                                        className="px-6 py-3 rounded-xl bg-brand-lime text-brand-dark font-bold flex items-center gap-2 hover:bg-[#c2e040] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                    >
                                        Weiter
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 3 */}
                        {step === 3 && (
                            <motion.div
                                key="step3"
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.3 }}
                                className="h-full flex flex-col"
                            >
                                <h3 className="text-2xl font-serif text-white mb-8">Fast geschafft! Wohin soll ich das Angebot schicken?</h3>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Name Input */}
                                    <div className="relative group">
                                        <input 
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="block px-4 pt-6 pb-2 w-full text-white bg-white/5 border border-white/10 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-brand-lime peer placeholder-transparent"
                                            placeholder="Name"
                                        />
                                        <label 
                                            htmlFor="name" 
                                            className="absolute text-sm text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-brand-lime"
                                        >
                                            Dein Name <span className="text-brand-lime">*</span>
                                        </label>
                                    </div>

                                    {/* Email Input */}
                                    <div className="relative group">
                                        <input 
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="block px-4 pt-6 pb-2 w-full text-white bg-white/5 border border-white/10 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-brand-lime peer placeholder-transparent"
                                            placeholder="Email"
                                        />
                                        <label 
                                            htmlFor="email" 
                                            className="absolute text-sm text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-brand-lime"
                                        >
                                            Deine E-Mail <span className="text-brand-lime">*</span>
                                        </label>
                                    </div>

                                    {/* City Input */}
                                    <div className="relative group">
                                        <input 
                                            type="text"
                                            id="city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            className="block px-4 pt-6 pb-2 w-full text-white bg-white/5 border border-white/10 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-brand-lime peer placeholder-transparent"
                                            placeholder="Stadt"
                                        />
                                        <label 
                                            htmlFor="city" 
                                            className="absolute text-sm text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-brand-lime"
                                        >
                                            Deine Stadt (Optional)
                                        </label>
                                    </div>

                                    {/* Message Textarea */}
                                    <div className="relative group">
                                        <textarea 
                                            id="message"
                                            name="message"
                                            rows={3}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="block px-4 pt-6 pb-2 w-full text-white bg-white/5 border border-white/10 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-brand-lime peer placeholder-transparent resize-none"
                                            placeholder="Nachricht"
                                        />
                                        <label 
                                            htmlFor="message" 
                                            className="absolute text-sm text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-brand-lime"
                                        >
                                            Deine Nachricht / Projektdetails (Optional)
                                        </label>
                                    </div>
                                    
                                    <div className="flex gap-4 pt-4">
                                         <button
                                            type="button"
                                            onClick={prevStep}
                                            className="px-6 py-4 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition-all flex items-center justify-center"
                                        >
                                            <ArrowLeft className="w-5 h-5" />
                                        </button>
                                        <button 
                                            type="submit" 
                                            disabled={status === 'submitting' || status === 'success' || !isStep3Valid}
                                            className={`flex-1 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                                                status === 'success' 
                                                ? 'bg-green-500 text-white cursor-default' 
                                                : 'bg-brand-lime text-brand-dark hover:bg-[#c2e040] hover:shadow-[0_0_20px_rgba(212,242,80,0.4)]'
                                            } disabled:opacity-70 disabled:cursor-not-allowed`}
                                        >
                                            {status === 'submitting' ? (
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                            ) : status === 'success' ? (
                                                <>
                                                    <CheckCircle className="w-5 h-5" />
                                                    <span>Anfrage gesendet</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>Anfrage absenden</span>
                                                    <Send className="w-5 h-5" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>

                                {/* Feedback Messages */}
                                <AnimatePresence>
                                    {status === 'error' && (
                                        <motion.div 
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            className="text-center overflow-hidden"
                                        >
                                            <p className="text-red-400 text-sm mt-4 font-medium bg-red-500/10 py-3 px-4 rounded-lg inline-flex items-center gap-2 border border-red-500/20">
                                                <AlertCircle className="w-4 h-4" />
                                                Fehler beim Senden. Bitte versuche es später.
                                            </p>
                                        </motion.div>
                                    )}
                                     {status === 'success' && (
                                        <motion.div 
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            className="text-center overflow-hidden"
                                        >
                                            <p className="text-green-400 text-sm mt-4 font-medium bg-green-500/10 py-3 px-4 rounded-lg inline-flex items-center gap-2 border border-green-500/20">
                                                <CheckCircle className="w-4 h-4" />
                                                Danke! Ich melde mich in Kürze bei dir.
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;