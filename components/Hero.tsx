
import React from 'react';
import { ICONS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay - Original lake/mountain image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1920')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/80 z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-semibold text-warm-white mb-6 leading-tight animate-fade-in">
          A Flexible Residential Project in Northern Italy
        </h1>
        <p className="text-lg md:text-xl text-warm-white/90 mb-10 font-body leading-relaxed max-w-2xl mx-auto">
          A dual-living property in a quiet residential area of Udine, designed for those
          looking for a solid base in Italy — adaptable over time, without speculation
          or shortcuts.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#start"
            className="w-full sm:w-auto bg-terracotta hover:bg-[#b06a4f] text-warm-white px-10 py-4 rounded-sm text-sm font-heading font-semibold transition-all uppercase tracking-widest shadow-xl"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto border border-warm-white text-warm-white hover:bg-warm-white hover:text-navy px-10 py-4 rounded-sm text-sm font-heading font-semibold transition-all uppercase tracking-widest"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-warm-white animate-bounce">
        <ICONS.ArrowDown />
      </div>
    </section>
  );
};

export default Hero;
