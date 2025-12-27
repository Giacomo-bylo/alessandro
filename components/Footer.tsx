
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121d2e] py-12 text-warm-white/60">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-warm-white font-heading font-semibold text-lg mb-2">Dual Living Udine</h4>
            <p className="font-body text-sm">© {new Date().getFullYear()} Nuvo' S.r.l. All rights reserved.</p>
          </div>
          
          <div className="flex gap-8 text-sm font-body">
            <a href="#" className="hover:text-terracotta transition-colors">Privacy Policy</a>
            <a href="mailto:info@duallivingudine.com" className="hover:text-terracotta transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-warm-white/5 text-center text-xs font-body tracking-wider">
          <p>UDINE • FRIULI VENEZIA GIULIA • ITALY</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
