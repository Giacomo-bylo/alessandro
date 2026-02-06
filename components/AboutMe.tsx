
import React from 'react';
import { IMAGES } from '../constants';

const AboutMe: React.FC = () => {
  const roles = [
    "Clarify technical aspects",
    "Guide decisions when needed",
    "Coordinate the process if you choose to move forward"
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-warm-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Photo */}
            <div className="lg:w-1/3">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-sm overflow-hidden shadow-2xl mx-auto">
                  <img
                    src={IMAGES.owner}
                    alt="Property owner and technical professional"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-terracotta/10 rounded-sm -z-10" />
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6 tracking-tight text-navy">
                About Me
              </h2>

              <p className="text-lg font-body leading-relaxed text-stone mb-6">
                I am a building surveyor (Geometra) and real-estate professional based in Friuli Venezia Giulia.
              </p>

              <p className="text-lg font-body leading-relaxed text-stone mb-8">
                I work directly on the technical, urban, and practical aspects of property acquisition and transformation. This project is not mediated by an agency: you deal directly with the person who knows the property, the context, and the regulations.
              </p>

              <div className="bg-white p-6 rounded-sm shadow-md">
                <h3 className="text-lg font-heading font-semibold text-navy mb-4">
                  My role is to:
                </h3>
                <ul className="space-y-3">
                  {roles.map((role, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-body text-stone">{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
