
import React from 'react';
import { IMAGES } from '../constants';

const StartSection: React.FC = () => {
  return (
    <section id="start" className="py-20 md:py-32 bg-warm-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-4 tracking-tight text-navy">
            Start with one apartment.
          </h2>
          <p className="text-xl md:text-2xl font-heading text-stone">
            Possibility to scale over time
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image */}
          <div className="lg:w-1/2 w-full">
            <div className="relative group overflow-hidden rounded-sm shadow-2xl">
              <img
                src={IMAGES.hero}
                alt="Udine - Italian city lifestyle"
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 border-[12px] border-white/10 group-hover:border-white/5 transition-all duration-700 pointer-events-none" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <p className="text-lg font-body leading-relaxed text-stone mb-6">
              An independent ground-floor apartment with private outdoor space, located in a quiet residential area of Udine.
            </p>

            <p className="text-lg font-body leading-relaxed text-stone mb-6">
              A solid property with clear potential, guided by a transparent and professional acquisition process.
            </p>

            <div className="bg-white p-6 rounded-sm shadow-md border-l-4 border-terracotta">
              <p className="text-lg font-body leading-relaxed text-navy font-medium mb-4">
                This is not a speculative listing.
              </p>
              <p className="text-lg font-body leading-relaxed text-stone">
                It's a concrete opportunity to acquire a property in Italy with clarity, structure, and room to grow over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartSection;
