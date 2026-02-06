
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Is this sold through an agency?",
      answer: "No. I am the owner and a licensed technical professional. There are no brokerage fees."
    },
    {
      question: "Can I buy only one apartment?",
      answer: "Yes. The project is intentionally designed to start with one unit."
    },
    {
      question: "Do I need to renovate immediately?",
      answer: "No. Renovation is optional and evaluated only after acquisition."
    },
    {
      question: "Can you assist after the purchase?",
      answer: "Yes, technical and coordination support can be provided separately if requested."
    },
    {
      question: "Is financing required?",
      answer: "Most buyers proceed with available capital, but each case is evaluated individually."
    },
    {
      question: "Is this suitable for non-Italian buyers?",
      answer: "Yes. The process is designed to be clear and accessible also for international buyers seeking a calm, well-structured acquisition in Italy."
    },
    {
      question: "Is there a predefined renovation budget?",
      answer: "No fixed package is imposed. Different scenarios have already been studied and can be discussed openly."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6 tracking-tight text-navy">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-light-gray rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-warm-white hover:bg-warm-white/80 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-heading font-semibold text-navy pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-stone flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                >
                  <div className="p-6 pt-0 bg-warm-white">
                    <p className="font-body text-stone leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
