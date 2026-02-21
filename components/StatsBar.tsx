import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface StatProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

const StatItem: React.FC<StatProps> = ({ value, label, prefix = '', suffix = '' }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 60, duration: 2 });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue]);

  return (
    <div className="flex flex-col items-center justify-center p-8 md:p-0">
      <div className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 flex items-center tracking-tight">
        <span className="text-brand-lime mr-1">{prefix}</span>
        <span ref={ref}>0</span>
        <span className="text-brand-lime">{suffix}</span>
      </div>
      <p className="text-gray-400 font-medium uppercase tracking-widest text-xs md:text-sm">{label}</p>
    </div>
  );
};

const StatsBar: React.FC = () => {
  return (
    <section className="bg-brand-dark py-32 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-white/5">
          <StatItem value={50} label="Erfolgreiche Projekte" suffix="+" />
          <StatItem value={100} label="Kundenzufriedenheit" suffix="%" />
          <StatItem value={3} label="Jahre Erfahrung" suffix="+" />
        </div>
      </div>
    </section>
  );
};

export default StatsBar;