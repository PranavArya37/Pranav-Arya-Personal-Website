import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: ProjectProps[] = [
  {
    title: 'Brand Identity System',
    description: 'Complete visual identity for a tech startup, including logo design, color palette, and brand guidelines.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '#',
  },
  {
    title: 'Digital Campaign',
    description: 'Multi-channel digital campaign that increased brand awareness by 200% and generated 50% more leads.',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '#',
  },
  {
    title: 'E-commerce Platform',
    description: 'User experience design for a luxury fashion e-commerce platform with a focus on premium aesthetics.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '#',
  },
];

const WorkSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;
    
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section id="work" ref={sectionRef} className="py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Featured Work
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A selection of projects that showcase my approach to creative problem-solving
            and strategic thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-6 hover-scale">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ExternalLink className="text-white" size={24} />
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;