
import React from 'react';

const FuturePossibility: React.FC = () => {
  const benefits = [
    "Scaling the investment gradually",
    "Avoiding upfront overexposure",
    "Keeping decisions aligned with real experience, not assumptions"
  ];

  return (
    <section id="future" className="py-20 md:py-32 bg-warm-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-sage/10 text-sage font-body text-sm font-medium rounded-sm mb-6">
              Optional
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6 tracking-tight text-navy">
              Future Possibility
            </h2>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-sm shadow-lg">
            <p className="text-lg font-body leading-relaxed text-stone mb-8">
              If, over time, the experience proves positive, there is the possibility — not the obligation — to evaluate the second unit.
            </p>

            <h3 className="text-lg font-heading font-semibold text-navy mb-6">
              This allows:
            </h3>
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-body text-stone">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Schematic Illustration */}
            <div className="mt-10 pt-10 border-t border-light-gray">
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-terracotta/20 rounded-sm flex items-center justify-center mb-3">
                    <span className="text-2xl font-heading font-semibold text-terracotta">1</span>
                  </div>
                  <p className="font-body text-sm text-stone">First Unit</p>
                  <p className="font-body text-xs text-stone/60">Start here</p>
                </div>
                <div className="text-stone/30">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <div className="text-center opacity-50">
                  <div className="w-24 h-24 bg-stone/10 rounded-sm flex items-center justify-center mb-3 border-2 border-dashed border-stone/30">
                    <span className="text-2xl font-heading font-semibold text-stone/50">2</span>
                  </div>
                  <p className="font-body text-sm text-stone">Second Unit</p>
                  <p className="font-body text-xs text-stone/60">Future option</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturePossibility;
