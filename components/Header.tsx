
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-heading font-semibold text-warm-white tracking-tight">
          DUAL LIVING <span className="text-terracotta">UDINE</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="text-sm font-body font-medium text-warm-white hover:text-terracotta transition-colors uppercase tracking-wider"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact"
            className="bg-terracotta hover:bg-[#b06a4f] text-warm-white px-6 py-2.5 rounded-sm text-sm font-heading font-semibold transition-all uppercase tracking-widest"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-warm-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-navy absolute top-full left-0 right-0 border-t border-navy/20 flex flex-col items-center py-8 space-y-6 shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="text-lg font-body text-warm-white hover:text-terracotta transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact"
            className="bg-terracotta text-warm-white px-8 py-3 rounded-sm text-sm font-heading font-semibold transition-all uppercase tracking-widest"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get in Touch
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
