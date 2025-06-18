import React, { useEffect, useRef } from 'react';
import { Mail, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BioSection: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(
      imageRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
    ).fromTo(
      contentRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out' },
      '-=0.5'
    );
  }, []);

  const socialLinks = [
    { icon: Mail, href: 'mailto:pranavarya2799@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/pranavarya37/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/PranavArya37', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/PranavArya37', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/pranavarya37', label: 'Instagram' }
  ];

  return (
    <section id="about" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Portrait */}
          <div ref={imageRef} className="relative">
            <div className="aspect-[3/4] rounded-lg overflow-hidden">
              <img
                src="/Pranav's New Image.jpg"
                alt="Pranav Arya"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Bio Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                About Me
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                With over a decade of experience in creative direction and digital strategy, 
                I've had the privilege of working with Fortune 500 companies and innovative 
                startups to craft compelling brand experiences that resonate with audiences 
                and drive meaningful results.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My approach combines analytical thinking with creative intuition, ensuring 
                every project not only looks exceptional but also performs at the highest level.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-gray-400 hover:text-accent transition-all duration-300 transform hover:scale-105"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>

            {/* YouTube Button */}
            <button className="bg-accent hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              Subscribe to YouTube
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;