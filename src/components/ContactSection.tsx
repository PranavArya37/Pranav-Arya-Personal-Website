import React, { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  
  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
  });

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormState({ isSubmitting: true, isSuccess: false, isError: false });
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormState({ isSubmitting: false, isSuccess: true, isError: false });
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setFormState({ isSubmitting: false, isSuccess: false, isError: false });
      }, 3000);
    } catch (error) {
      setFormState({ isSubmitting: false, isSuccess: false, isError: true });
    }
  };

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your vision to life? I'd love to hear about your project
            and explore how we can create something amazing together.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={formState.isSubmitting}
              className={`inline-flex items-center px-8 py-4 rounded-lg font-medium text-white transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                formState.isSuccess
                  ? 'bg-green-600 hover:bg-green-700'
                  : formState.isError
                  ? 'bg-red-600 hover:bg-red-700'
                  : 'bg-accent hover:bg-blue-700'
              }`}
            >
              {formState.isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : formState.isSuccess ? (
                'Message Sent!'
              ) : formState.isError ? (
                'Try Again'
              ) : (
                <>
                  <Send size={20} className="mr-2" />
                  Send Message
                </>
              )}
            </button>
          </div>

          {formState.isSuccess && (
            <div className="text-center">
              <p className="text-green-400 font-medium">
                Thank you! I'll get back to you within 24 hours.
              </p>
            </div>
          )}

          {formState.isError && (
            <div className="text-center">
              <p className="text-red-400 font-medium">
                Oops! Something went wrong. Please try again.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;