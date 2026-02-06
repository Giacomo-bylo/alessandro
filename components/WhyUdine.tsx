
import React from 'react';
import { IMAGES } from '../constants';

const WhyUdine: React.FC = () => {
  const keyPoints = [
    "1h30 from Venice",
    "45 minutes from the Adriatic coast",
    "1 hour from the Alps and Dolomites (UNESCO area)",
    "Close to Austria and Slovenia"
  ];

  return (
    <section id="why-udine" className="py-20 md:py-32 bg-warm-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-8 tracking-tight text-navy">
              Why Udine
            </h2>

            <p className="text-lg font-body leading-relaxed text-stone mb-8">
              Udine is one of Italy's most livable cities: calm, well-connected, and still largely undiscovered by mass tourism.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {keyPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white p-4 rounded-sm shadow-sm"
                >
                  <svg className="w-5 h-5 text-sage flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm font-body text-navy">{point}</span>
                </div>
              ))}
            </div>

            <p className="text-lg font-body leading-relaxed text-stone mb-8">
              It offers what many buyers look for today: authentic Italian lifestyle, safety, services, and long-term stability — without the pressure or prices of overexposed markets.
            </p>

            <a
              href="https://www.nationalgeographic.com/travel/article/friuli-venezia-giulia-italy-wine-region"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-terracotta hover:text-[#b06a4f] font-body font-medium transition-colors"
            >
              Read more on National Geographic
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 w-full">
            <div className="relative group overflow-hidden rounded-sm shadow-2xl">
              <img
                src={IMAGES.whyUdine}
                alt="Udine historic center"
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 border-[12px] border-white/10 group-hover:border-white/5 transition-all duration-700 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUdine;
