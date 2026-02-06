
import React from 'react';
import { IMAGES } from '../constants';

const CurrentCondition: React.FC = () => {
  const options = [
    "Keep the apartment as it is",
    "Plan improvements gradually",
    "Evaluate renovation scenarios after full understanding"
  ];

  return (
    <section id="condition" className="py-20 md:py-32 bg-warm-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6 tracking-tight text-navy">
              Current Condition & Potential
            </h2>
            <p className="text-lg font-body leading-relaxed text-stone max-w-2xl mx-auto">
              The apartment is structurally sound. Some systems reflect the age of the building and can be improved over time.
            </p>
          </div>

          {/* Photo Gallery */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="overflow-hidden rounded-sm shadow-lg">
              <img
                src={IMAGES.house1}
                alt="Property photo 1"
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-sm shadow-lg">
              <img
                src={IMAGES.house2}
                alt="Property photo 2"
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-sm shadow-lg">
              <img
                src={IMAGES.house3}
                alt="Property photo 3"
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="bg-white p-8 md:p-12 rounded-sm shadow-lg">
            <p className="text-lg font-body leading-relaxed text-stone mb-8">
              No predefined renovation package is imposed.
            </p>

            <h3 className="text-xl font-heading font-semibold text-navy mb-6">
              You can:
            </h3>
            <ul className="space-y-4 mb-8">
              {options.map((option, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="font-body text-stone">{option}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg font-body leading-relaxed text-navy font-medium text-center pt-6 border-t border-light-gray">
              No decisions need to be made before understanding the full picture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentCondition;
