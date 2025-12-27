
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import WhoIsThisFor from './components/WhoIsThisFor';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { IMAGES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-terracotta/30 selection:text-navy">
      <Header />
      
      <main>
        {/* Block 1 - Hero */}
        <Hero />

        {/* Block 2 - Why This Makes Sense */}
        <Section 
          id="why-it-makes-sense"
          title="Why This Makes Sense"
          image={IMAGES.location}
          content={`Udine is a compact Northern Italian city where daily life still works smoothly. The project is located in a quiet residential area, close to all essential services and just a few minutes from the historic center — a combination that offers both calm and practicality without being isolated.

What makes this location particularly balanced is its accessibility. The motorway entrance (Udine Nord) is less than five minutes away, making it easy to move in and out of the city, while everyday needs remain within short distance. This is not about prestige or trends, but about how a place actually functions over time.

From here, the wider region becomes part of everyday life. The Adriatic coast and the Alps are both reachable in under an hour, Venice in about 90 minutes, and the Slovenian border shortly beyond that. It's a setting that offers variety without relying on seasonal tourism or constant movement.

This project is built around a simple idea: clarity reduces risk. It is presented in a structured way to help foreign buyers understand the context, the choices, and the process before making any commitment.`}
        />

        {/* Block 3 - Dual Living Concept */}
        <Section 
          id="concept"
          title="The Dual Living Concept"
          image={IMAGES.concept}
          reverse
          bgColor="white"
          content={`This project is built around a simple but often overlooked idea: a home should adapt to life, not the other way around.

The property is conceived as a single residential asset with two independent living units. This is not about splitting or separating, but about creating a structure that allows different uses to coexist naturally within the same property, without friction or forced choices.

Each unit maintains its own autonomy, offering privacy and independence when needed, while remaining part of a coherent whole. This configuration makes it possible to host family or guests, work remotely, or simply enjoy more space and flexibility — without turning the house into something rigid or overly complex.

An additional element reinforces this logic: a private green plot adjacent to the house, accessible on foot and intentionally non-buildable. Rather than being a technical detail, this space is meant as an extension of everyday life — a quiet area for a garden, outdoor dining, or a relaxed retreat, separate from the street and free from urban constraints.`}
        />

        {/* Block 4 - Transformation Path */}
        <Section 
          id="transformation"
          title="The Transformation Path"
          image={IMAGES.transformation}
          content={`This project is presented with full awareness of its current condition. The property provides a solid and existing base, but its systems and layout reflect an earlier residential logic that no longer aligns with contemporary living standards or with the dual-living concept described above.

For this reason, the transformation is not a reaction to unexpected issues, but a planned and intentional process. The project has been conceived knowing from the start that certain upgrades and reconfigurations are necessary to bring the property in line with its intended use.

Rather than proposing a single, rigid renovation solution, the transformation is structured as a guided path. This path identifies what is essential, what is strategic, and what remains optional — allowing decisions to be taken consciously, with clear priorities and timing.

Technical details, design alternatives, and implementation scenarios are addressed through direct discussion and dedicated documentation, not through simplified descriptions. The transformation path is meant to reduce uncertainty, not to create it — especially for those navigating the process from abroad.`}
        />

        {/* Block 5 - Local Coordination */}
        <Section 
          id="coordination"
          title="Local Coordination & Single Point of Reference"
          image={IMAGES.coordination}
          reverse
          bgColor="dark"
          content={`Managing a property project in another country is rarely about the property alone. The real complexity lies in navigating decisions, timing, regulations, and communication — especially when you are not based locally.

For this reason, the project is coordinated through a single local point of reference, responsible for aligning the technical, administrative, and practical aspects of the process. This role exists to reduce friction, translate local dynamics, and ensure continuity from the initial evaluation through the transformation phase.

At this stage, this role is personally covered by a local technical professional directly involved in the project. This ensures that decisions are assessed with on-the-ground knowledge and accountability.

The coordination does not replace the buyer's control, nor does it impose solutions. Its purpose is to structure choices, clarify implications, and manage the interface between different parties within a coherent framework.

The goal is not to hide complexity, but to make complexity governable.`}
        />

        {/* Block 6 - Who Is This For */}
        <WhoIsThisFor />

        {/* Block 7 - Contact Form */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default App;
