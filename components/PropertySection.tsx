
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
              <div className="overflow-hidden rounded-sm bg-white min-h-[400px]">
                <object
                  data={IMAGES.floorPlan}
                  type="application/pdf"
                  className="w-full h-[400px]"
                >
                  <div className="flex flex-col items-center justify-center h-[400px] bg-white/10 p-8">
                    <p className="text-warm-white/70 font-body text-center mb-4">
                      Floor plan preview not available in this browser.
                    </p>
                    <a
                      href={IMAGES.floorPlan}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-terracotta hover:bg-[#b06a4f] text-warm-white px-6 py-3 rounded-sm text-sm font-heading font-semibold transition-all"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      View Floor Plan (PDF)
                    </a>
                  </div>
                </object>
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
