'use client';

import React, { useRef } from 'react';
import { 
  motion, 
  useScroll, 
  useSpring, 
  useTransform, 
  useMotionValue, 
  useVelocity, 
  useAnimationFrame 
} from 'framer-motion';

const LOGOS = [
  'Meridial',
  'Coremis',
  'HanseTool',
  'MAV7',
  'EcuSolutions',
  'ThomasRott',
  'Podo-Aktiv',
  'Werklotse'
];

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ParallaxTextProps {
  children: React.ReactNode;
  baseVelocity: number;
}

const ParallaxText: React.FC<ParallaxTextProps> = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div 
        className="flex whitespace-nowrap gap-16 md:gap-32 items-center" 
        style={{ x }}
      >
        <span className="block mr-16 md:mr-32">{children}</span>
        <span className="block mr-16 md:mr-32">{children}</span>
        <span className="block mr-16 md:mr-32">{children}</span>
        <span className="block mr-16 md:mr-32">{children}</span>
        <span className="block mr-16 md:mr-32">{children}</span>
        <span className="block mr-16 md:mr-32">{children}</span>
      </motion.div>
    </div>
  );
}

const LogoMarquee: React.FC = () => {
  return (
    <section className="bg-brand-dark py-24 border-t border-b border-white/5 overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-widest">
            Vertraut von innovativen Unternehmen
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none"></div>

        <ParallaxText baseVelocity={-2}>
             <span className="flex items-center gap-16 md:gap-32">
                {LOGOS.map((logo, index) => (
                    <span 
                        key={index} 
                        className="text-3xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20 select-none opacity-50 hover:opacity-100 transition-opacity duration-500"
                    >
                        {logo}
                    </span>
                ))}
             </span>
        </ParallaxText>
      </div>
    </section>
  );
};

export default LogoMarquee;