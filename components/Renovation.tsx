
import React from 'react';

const Renovation: React.FC = () => {
  const studiedBasis = [
    "Different levels of intervention",
    "Varying budgets",
    "Different lifestyle preferences"
  ];

  const guarantees = [
    "No predefined packages",
    "No forced paths",
    "No obligation to proceed beyond your comfort level"
  ];

  return (
    <section id="renovation" className="py-20 md:py-32 bg-navy text-warm-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">
              Renovation: Optional, But Not Undefined
            </h2>
            <p className="text-lg font-body leading-relaxed text-warm-white/80">
              Renovation is optional, but it is not vague or improvised.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 p-8 rounded-sm">
              <p className="font-body text-warm-white/90 leading-relaxed mb-6">
                Several renovation and layout scenarios have already been studied, based on:
              </p>
              <ul className="space-y-3">
                {studiedBasis.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-sage flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="font-body text-warm-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="font-body text-warm-white/90 leading-relaxed text-center">
              If you decide to renovate, you may choose to be guided through a structured and technically evaluated process, from concept to execution.
            </p>

            <div className="bg-white/5 p-8 rounded-sm">
              <p className="font-body text-warm-white/90 leading-relaxed mb-6">
                There are:
              </p>
              <ul className="space-y-3">
                {guarantees.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-terracotta flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-body text-warm-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="font-body text-warm-white/90 leading-relaxed text-center">
              The process adapts to your priorities, not the other way around.
            </p>

            <div className="text-center pt-8 border-t border-white/10">
              <p className="text-lg font-body text-warm-white font-medium italic">
                "No decisions need to be made before understanding the full picture."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Renovation;
