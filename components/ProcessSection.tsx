
import React from 'react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "First conversation",
      description: "No commitment"
    },
    {
      number: "2",
      title: "On-site visit",
      description: "Or detailed walkthrough"
    },
    {
      number: "3",
      title: "Property acquisition",
      description: "Clear and structured"
    },
    {
      number: "4",
      title: "Optional guidance",
      description: "Post-purchase support"
    }
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6 tracking-tight text-navy">
              How the Process Works
            </h2>
            <p className="text-lg font-body leading-relaxed text-stone">
              The process is designed to reduce friction, not to accelerate decisions.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-light-gray -translate-y-1/2" />

            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative text-center">
                  {/* Step Circle */}
                  <div className="relative z-10 w-16 h-16 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-2xl font-heading font-semibold text-warm-white">{step.number}</span>
                  </div>

                  {/* Step Content */}
                  <h3 className="text-lg font-heading font-semibold text-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-stone">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="mt-16 bg-warm-white p-8 rounded-sm text-center">
            <svg className="w-8 h-8 text-sage mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="font-body text-stone italic">
              "The process is designed to reduce friction, not to accelerate decisions."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
