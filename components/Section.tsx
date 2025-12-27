
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  content: string | React.ReactNode;
  image?: string;
  reverse?: boolean;
  className?: string;
  bgColor?: 'warm' | 'white' | 'dark';
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  content, 
  image, 
  reverse = false, 
  className = "",
  bgColor = 'warm'
}) => {
  const bgClasses = {
    warm: 'bg-warm-white',
    white: 'bg-white',
    dark: 'bg-navy text-warm-white'
  };

  return (
    <section id={id} className={`py-20 md:py-32 overflow-hidden ${bgClasses[bgColor]} ${className}`}>
      <div className="container mx-auto px-6">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
          {/* Content */}
          <div className="lg:w-1/2">
            <h2 className={`text-3xl md:text-4xl font-heading font-semibold mb-8 tracking-tight ${bgColor === 'dark' ? 'text-warm-white' : 'text-navy'}`}>
              {title}
            </h2>
            <div className={`space-y-6 text-lg font-body leading-relaxed whitespace-pre-line ${bgColor === 'dark' ? 'text-warm-white/80' : 'text-stone'}`}>
              {content}
            </div>
          </div>

          {/* Image */}
          {image && (
            <div className="lg:w-1/2 w-full">
              <div className="relative group overflow-hidden rounded-sm shadow-2xl">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 border-[12px] border-white/10 group-hover:border-white/5 transition-all duration-700 pointer-events-none" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Section;
