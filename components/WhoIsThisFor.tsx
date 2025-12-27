
import React from 'react';
import { ICONS } from '../constants';

const WhoIsThisFor: React.FC = () => {
  const forPoints = [
    "Are looking for a long-term base in Italy, not a short-term speculation",
    "Value clarity, flexibility, and control over promises",
    "Appreciate functional locations over purely touristic ones",
    "Prefer a guided process rather than improvisation"
  ];

  const notForPoints = [
    "Quick flips or guaranteed returns",
    "Fully finished, turnkey products without involvement",
    "Standardized solutions imposed from the outside"
  ];

  return (
    <section id="who-is-it-for" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-navy mb-6">Who This Project Is For</h2>
          <p className="text-stone font-body text-lg">
            This project is intentionally designed for a specific mindset. It is as much about who it's for as it is about who it's not.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">
          {/* For Column */}
          <div className="bg-warm-white p-8 md:p-12 rounded-sm border-t-4 border-sage shadow-sm">
            <h3 className="text-2xl font-heading font-semibold text-navy mb-8">This project is designed for buyers who:</h3>
            <ul className="space-y-6">
              {forPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0"><ICONS.Check /></div>
                  <span className="text-stone font-body text-lg leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For Column */}
          <div className="bg-warm-white p-8 md:p-12 rounded-sm border-t-4 border-stone/30 shadow-sm opacity-90">
            <h3 className="text-2xl font-heading font-semibold text-navy mb-8">It is not intended for those seeking:</h3>
            <ul className="space-y-6">
              {notForPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0"><ICONS.X /></div>
                  <span className="text-stone font-body text-lg leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
