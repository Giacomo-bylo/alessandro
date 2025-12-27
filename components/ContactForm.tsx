
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulating Formspree submission
    // Replace YOUR_FORM_ID with actual ID in production
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    console.log('Form submission:', data);
    
    // Mock API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-navy text-warm-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-6">Next Step</h2>
            <p className="text-warm-white/70 font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              If this approach resonates with the way you think about property and long-term choices, the next step is a direct conversation.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-sm shadow-2xl">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-semibold text-navy mb-4">Thank you for your interest</h3>
                <p className="text-stone font-body text-lg mb-8">We have received your request and will get back to you within 48 hours to schedule a conversation.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-terracotta font-heading font-semibold uppercase tracking-widest text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-sm font-body font-semibold text-navy uppercase tracking-wider">Full Name *</label>
                    <input 
                      type="text" 
                      id="fullName" 
                      name="fullName" 
                      required 
                      className="w-full px-4 py-3 border border-light-gray rounded-sm focus:outline-none focus:border-terracotta text-navy font-body"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-body font-semibold text-navy uppercase tracking-wider">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className="w-full px-4 py-3 border border-light-gray rounded-sm focus:outline-none focus:border-terracotta text-navy font-body"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="country" className="block text-sm font-body font-semibold text-navy uppercase tracking-wider">Country of Residence *</label>
                  <input 
                    type="text" 
                    id="country" 
                    name="country" 
                    required 
                    className="w-full px-4 py-3 border border-light-gray rounded-sm focus:outline-none focus:border-terracotta text-navy font-body"
                    placeholder="United States"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-body font-semibold text-navy uppercase tracking-wider">Message / Notes (Optional)</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    className="w-full px-4 py-3 border border-light-gray rounded-sm focus:outline-none focus:border-terracotta text-navy font-body resize-none"
                    placeholder="Tell us about your plans..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3 py-2">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    name="privacy" 
                    required 
                    className="mt-1.5 w-4 h-4 border-light-gray text-terracotta focus:ring-terracotta" 
                  />
                  <label htmlFor="privacy" className="text-sm text-stone font-body leading-tight">
                    I agree to the processing of my personal data for the purpose of receiving information about this project.
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className={`w-full bg-terracotta hover:bg-[#b06a4f] text-warm-white py-4 rounded-sm text-sm font-heading font-semibold transition-all uppercase tracking-widest shadow-lg ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {status === 'submitting' ? 'Sending...' : 'Request Information'}
                </button>
                
                {status === 'error' && (
                  <p className="text-red-500 text-sm font-body text-center">Something went wrong. Please try again or contact us via email.</p>
                )}
              </form>
            )}
          </div>
          
          <div className="mt-12 text-center text-warm-white/50 text-sm font-body">
            <p>Or reach out directly at: <a href="mailto:info@duallivingudine.com" className="text-terracotta hover:underline">info@duallivingudine.com</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
