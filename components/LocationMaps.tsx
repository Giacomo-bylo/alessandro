
import React from 'react';
import { IMAGES } from '../constants';

const LocationMaps: React.FC = () => {
  const locationFeatures = [
    "Close to daily services",
    "Minutes from the city center",
    "Easy highway access (Udine Nord)"
  ];

  return (
    <section id="location" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6 tracking-tight text-navy">
            Location Within the Region
          </h2>
          <p className="text-lg font-body leading-relaxed text-stone">
            The property is located in a well-served residential area:
          </p>
        </div>

        {/* Location Features */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {locationFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-warm-white px-6 py-3 rounded-sm"
            >
              <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-body text-navy">{feature}</span>
            </div>
          ))}
        </div>

        <p className="text-lg font-body leading-relaxed text-stone text-center max-w-2xl mx-auto mb-16">
          A practical base for living, working, or spending extended periods in Italy.
        </p>

        {/* Maps Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Italy Map */}
          <div className="bg-warm-white p-6 rounded-sm shadow-lg">
            <h3 className="text-xl font-heading font-semibold text-navy mb-4 text-center">
              Italy — Udine Location
            </h3>
            <div className="overflow-hidden rounded-sm">
              <img
                src={IMAGES.mapItaly}
                alt="Map of Italy with Udine highlighted"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* FVG Map */}
          <div className="bg-warm-white p-6 rounded-sm shadow-lg">
            <h3 className="text-xl font-heading font-semibold text-navy mb-4 text-center">
              Friuli Venezia Giulia — Travel Times
            </h3>
            <div className="overflow-hidden rounded-sm">
              <img
                src={IMAGES.mapFVG}
                alt="Map of Friuli Venezia Giulia with travel times"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMaps;
