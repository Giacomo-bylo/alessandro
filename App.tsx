
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyUdine from './components/WhyUdine';
import LocationMaps from './components/LocationMaps';
import PropertySection from './components/PropertySection';
import CurrentCondition from './components/CurrentCondition';
import Pricing from './components/Pricing';
import FuturePossibility from './components/FuturePossibility';
import Renovation from './components/Renovation';
import ProcessSection from './components/ProcessSection';
import AboutMe from './components/AboutMe';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-terracotta/30 selection:text-navy">
      <Header />

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Why Udine Section */}
        <WhyUdine />

        {/* 3. Location Within the Region */}
        <LocationMaps />

        {/* 4. The Property - Ground Floor Apartment */}
        <PropertySection />

        {/* 5. Current Condition & Potential */}
        <CurrentCondition />

        {/* 6. Pricing Section */}
        <Pricing />

        {/* 7. Future Possibility (Optional) */}
        <FuturePossibility />

        {/* 8. Renovation: Optional, But Not Undefined */}
        <Renovation />

        {/* 9. How the Process Works */}
        <ProcessSection />

        {/* 10. About Me Section */}
        <AboutMe />

        {/* 11. FAQ Section */}
        <FAQ />

        {/* 12. Final CTA Section */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default App;
