import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IntroSection: React.FC = () => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p
          ref={textRef}
          className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-relaxed tracking-tight"
        >
          I'm passionate about{' '}
          <span className="text-accent font-semibold">React</span> and{' '}
          <span className="text-accent font-semibold">JavaScript</span>, creating{' '}
          <span className="text-accent font-semibold">indie projects</span> and exploring the endless possibilities of modern web development.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;