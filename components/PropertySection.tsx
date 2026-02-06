
import React from 'react';
import { IMAGES } from '../constants';

const PropertySection: React.FC = () => {
  const specifications = [
    "Approx. 75 sqm internal space",
    "Private garden (approx. 125 sqm)",
    "Additional connected green area (approx. 450 sqm)",
    "Patio, garage, and external storage"
  ];

  const youAcquire = [
    "An independent living space",
    "Outdoor areas rarely found at this price level",
    "A structure with long-term flexibility"
  ];

  return (
    <section id="property" className="py-20 md:py-32 bg-navy text-warm-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-6">
              The opportunity starts with one apartment.
            </h2>
            <p className="text-warm-white/70 font-body text-lg leading-relaxed">
              Start with one apartment. Possibility to scale over time.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Specifications */}
            <div>
              <h3 className="text-xl font-heading font-semibold mb-6 text-terracotta">
                Ground-floor unit with:
              </h3>
              <ul className="space-y-4 mb-8">
                {specifications.map((spec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-body text-warm-white/90">{spec}</span>
                  </li>
                ))}
              </ul>

              <p className="font-body text-warm-white/70 text-sm leading-relaxed mb-8">
                The apartment is part of a bifamily property, originally built as a single home and later divided into two units.
              </p>

              <h3 className="text-xl font-heading font-semibold mb-6 text-terracotta">
                You acquire:
              </h3>
              <ul className="space-y-4">
                {youAcquire.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-body text-warm-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Floor Plan */}
            <div className="bg-white/5 p-6 rounded-sm">
              <h3 className="text-lg font-heading font-semibold mb-4 text-center text-warm-white/80">
                Floor Plan — Ground Floor
              </h3>
              <div className="overflow-hidden rounded-sm bg-white/10 min-h-[300px] flex items-center justify-center">
                <img
                  src={IMAGES.floorPlan}
                  alt="Floor plan of the ground floor apartment"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<p class="text-warm-white/50 font-body text-center p-8">Floor plan coming soon</p>';
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-16 text-center">
            <p className="text-lg font-body text-warm-white/80 italic">
              "This is the starting point. Nothing more is required at this stage."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySection;
