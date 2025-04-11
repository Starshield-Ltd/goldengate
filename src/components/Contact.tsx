
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formStatus, setFormStatus] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const message = `Hello! I have a message for Golden Gate Int. School.\n\nDetails:\nName: ${formData.get('name')}\nEmail: ${formData.get('email')}\nSubject: ${formData.get('subject')}\nMessage: ${formData.get('message')}`;
    const whatsappUrl = `https://wa.me/233246186629?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Reset form
    const form = e.currentTarget;
    form.reset();

    // Show success message
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus(null);
    }, 3000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding relative overflow-hidden border-t-0"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FFD700, #FFD700 2px, transparent 2px, transparent 20px)' }}></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-school-yellow/20 to-transparent"></div>

      {/* School-themed pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 5 L55 30 L30 55 L5 30 Z\' stroke=\'%23FFD700\' stroke-width=\'1\' fill=\'none\' /%3E%3C/svg%3E")' }}></div>

      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-school-yellow/10 blur-xl"></div>
      <div className="absolute bottom-40 -left-20 w-48 h-48 rounded-full bg-school-yellow/10 blur-xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className={cn(
            "text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-school-blue to-school-yellow bg-clip-text text-transparent drop-shadow-md transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            Contact Us
          </h2>
          <div className={cn(
            "h-1 w-24 bg-gradient-to-r from-school-blue to-school-yellow mx-auto mb-8 rounded-full shadow-md transition-all duration-700 delay-100",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          )}></div>
          <p className={cn(
            "text-xl text-gray-700 leading-relaxed transition-all duration-700 delay-200",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            Have questions about enrollment or our programs?
            Get in touch with us today, and we'll be happy to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {/* Contact Information */}
          <div className={cn(
            "transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <div className="glass-dark rounded-2xl p-8 shadow-lg h-full border-2 border-school-yellow">
              <h3 className="text-2xl font-bold font-heading text-school-yellow mb-8 drop-shadow-md">Get In Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-school-blue/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-school-yellow" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-school-yellow drop-shadow-sm">Location</h4>
                    <p className="text-white/80 mt-1">Afrancho, Kumasi, Ashanti Region, Ghana<br/>P.O. Box AH 2984</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-school-blue/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-school-yellow" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-school-yellow drop-shadow-sm">Phone</h4>
                    <p className="text-white/80 mt-1 font-medium">0246186629</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-school-blue/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-school-yellow" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-lg font-medium text-school-yellow drop-shadow-sm">Email</h4>
                    <p className="text-white/80 mt-1 break-all font-medium">
                      goldengateintschool@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-lg font-medium text-school-yellow drop-shadow-sm mb-4">Office Hours</h4>
                <div className="space-y-3">
                  <div className="flex justify-between bg-school-blue/20 p-3 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                    <span className="text-white/80">Monday - Friday</span>
                    <span className="font-medium text-white">7:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between bg-school-blue/20 p-3 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                    <span className="text-white/80">Saturday</span>
                    <span className="font-medium text-white">Closed</span>
                  </div>
                  <div className="flex justify-between bg-school-blue/20 p-3 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                    <span className="text-white/80">Sunday</span>
                    <span className="font-medium text-white">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={cn(
            "transition-all duration-700 delay-400",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            <div className="glass-dark rounded-2xl p-8 shadow-lg border-2 border-school-yellow">
              <h3 className="text-2xl font-bold font-heading text-school-yellow mb-6 drop-shadow-md">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-school-yellow mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1 block w-full rounded-xl bg-school-blue/20 backdrop-blur-sm border border-school-yellow/30 shadow-sm focus:border-school-yellow focus:ring-school-yellow transition duration-150 ease-in-out text-white px-4 py-3"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-school-yellow mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1 block w-full rounded-xl bg-school-blue/20 backdrop-blur-sm border border-school-yellow/30 shadow-sm focus:border-school-yellow focus:ring-school-yellow transition duration-150 ease-in-out text-white px-4 py-3"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-school-yellow mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="mt-1 block w-full rounded-xl bg-school-blue/20 backdrop-blur-sm border border-school-yellow/30 shadow-sm focus:border-school-yellow focus:ring-school-yellow transition duration-150 ease-in-out text-white px-4 py-3"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-school-yellow mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-xl bg-school-blue/20 backdrop-blur-sm border border-school-yellow/30 shadow-sm focus:border-school-yellow focus:ring-school-yellow transition duration-150 ease-in-out text-white px-4 py-3"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className={`w-full flex justify-center py-3 px-6 border-2 border-school-yellow rounded-xl shadow-lg text-lg font-semibold text-white bg-gradient-to-r from-school-blue to-school-blue hover:from-school-blue hover:to-school-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-school-yellow transform hover:scale-105 transition-all duration-300 ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>

                  {formStatus === 'success' && (
                    <p className="mt-3 text-white text-sm bg-school-blue/20 p-3 rounded-xl backdrop-blur-sm border border-school-yellow/30">
                      Your message has been sent successfully! We'll get back to you soon.
                    </p>
                  )}

                  {formStatus === 'error' && (
                    <p className="mt-3 text-white text-sm bg-school-blue/20 p-3 rounded-xl backdrop-blur-sm border border-school-yellow/30">
                      There was an error sending your message. Please try again.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
