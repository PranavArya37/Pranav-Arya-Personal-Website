import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import Projects from './Projects';

gsap.registerPlugin(ScrollTrigger);

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: ProjectProps[] = [
  {
    title: 'Stay Awake',
    description: 'Keep your screen awake! A web app preventing sleep mode only while this tab is active (foreground). Features draggable & toggleable widgets: Clock ⏰, Battery 🔋, To-Do List ✅, and Pomodoro Timer 🍅. Installable as a PWA.',
    image: 'images/StayAwake_Minimal_Mode_Awake.jpeg',
    link: 'https://stayawake.pages.dev',
  },
  {
    title: 'InstaCaption',
    description: 'AI-powered Instagram caption generator. Upload your photo and get creative captions instantly! Built with Next.js, Genkit, and ShadCN UI.',
    image: 'images/InstaCaption-Full.jpeg',
    link: 'https://instacaptionxp.vercel.app/',
  },
  {
    title: 'Business Directory App',
    description: 'A React Native mobile app built with Expo that makes exploring local businesses easy! Search, discover, and connect with businesses in your community. Built with Firebase and Clerk.',
    image: '/images/Business-Directory-HomeScreen.PNG',
    link: 'https://github.com/PranavArya37/Business-Directory-App',
  },
  {
    title: 'CurrencyXpress',
    description: 'CurrencyXpress is a modern web application that allows users to convert amounts between various currencies with real-time exchange rates. It also provides a history of past conversions.',
    image: '/images/currencyXpress-Full.jpeg',
    link: 'https://currencyxpress.vercel.app/',
  },
  {
    title: 'Personal Task Manager',
    description: 'Personal Task Manager is a React Native application built with Expo, designed to help users manage their tasks efficiently. This app allows users to create, update, and delete tasks, filter tasks based on their status, and set due dates for tasks.',
    image: 'images/splash-personal-task-manager.png',
    link: 'https://github.com/PranavArya37/PersonalTaskManager-App',
  },
  {
    title: 'Kaleidoscope',
    description: 'Interactive kaleidoscope using p5.js that generates symmetrical patterns based on mouse movement.',
    image: 'images/kaleidoscope-pattern.jpg',
    link: 'https://pranavarya37.github.io/Kaleidoscope/',
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

  const handleProjectClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="work" ref={sectionRef} className="py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent software development projects, demonstrating
            my skills in full-stack development and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="group cursor-pointer"
              onClick={() => handleProjectClick(project.link)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleProjectClick(project.link);
                }
              }}
              aria-label={`View ${project.title} project`}
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
        <div className="flex justify-center mt-10">
          <Link
            to="/Projects"
            className="inline-flex items-center px-6 py-3 bg-accent hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            Check More Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;