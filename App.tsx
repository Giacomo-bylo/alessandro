
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StartSection from './components/StartSection';
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
        {/* 1. Hero Section - Lake/Mountain */}
        <Hero />

        {/* 2. Start with one apartment */}
        <StartSection />

        {/* 3. Why Udine Section */}
        <WhyUdine />

        {/* 4. Location Within the Region */}
        <LocationMaps />

        {/* 5. The Property - Ground Floor Apartment */}
        <PropertySection />

        {/* 6. Current Condition & Potential */}
        <CurrentCondition />

        {/* 7. Pricing Section */}
        <Pricing />

        {/* 8. Future Possibility (Optional) */}
        <FuturePossibility />

        {/* 9. Renovation: Optional, But Not Undefined */}
        <Renovation />

        {/* 10. How the Process Works */}
        <ProcessSection />

        {/* 11. About Me Section */}
        <AboutMe />

        {/* 12. FAQ Section */}
        <FAQ />

        {/* 13. Final CTA Section */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default App;
