import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    )
    .fromTo(
      bioRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    );
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center mesh-gradient"
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      <div className="relative text-center px-6 max-w-4xl mx-auto">
        <h1
          ref={headlineRef}
          className="text-6xl md:text-7xl lg:text-8xl font-semibold text-white mb-6 text-shadow tracking-tight"
        >
          Pranav Arya
        </h1>
        
        <p
          ref={bioRef}
          className="text-xl md:text-2xl font-light text-gray-300 mb-16 max-w-2xl mx-auto"
        >
          Software Engineer specializing in React, JavaScript, Java, and modern web technologies
        </p>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white hover:text-accent transition-colors duration-300 animate-bounce-slow"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;