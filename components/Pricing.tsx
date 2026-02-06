
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-8 tracking-tight text-navy">
            A Clear Price Positioning
          </h2>

          <p className="text-lg font-body leading-relaxed text-stone mb-12">
            The acquisition of one apartment is positioned within a clear and realistic six-figure range.
          </p>

          <div className="bg-warm-white p-8 md:p-12 rounded-sm shadow-lg mb-12">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-light-gray">
                <span className="font-body text-stone">Indicative minimum</span>
                <span className="text-2xl md:text-3xl font-heading font-semibold text-navy">from approx. €115,000</span>
              </div>

              <p className="font-body text-stone text-sm leading-relaxed">
                Final price depends on configuration and assigned outdoor areas.
              </p>

              <p className="font-body text-stone text-sm leading-relaxed">
                Renovation costs, if desired, are separate and evaluated only after acquisition, based on your priorities and budget.
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 text-stone/60 font-body text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>All figures are indicative and subject to final agreement</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
