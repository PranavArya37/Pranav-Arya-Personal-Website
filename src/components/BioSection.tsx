import React, { useEffect, useRef } from 'react';
import { Mail, Linkedin, Github, Twitter, Instagram, Copy, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative bg-gray-900 border border-gray-700 rounded-lg p-6 my-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-400 text-sm font-medium">Terminal</span>
        <button
          onClick={copyToClipboard}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded hover:bg-gray-800"
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check size={16} className="text-green-400" />
              <span className="text-sm text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={16} />
              <span className="text-sm">Copy</span>
            </>
          )}
        </button>
      </div>
      <code className="text-green-400 font-mono text-lg block bg-black px-4 py-3 rounded border border-gray-800">
        {code}
      </code>
    </div>
  );
};

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Portrait */}
          <div ref={imageRef} className="relative h-full">
            <div className="h-full rounded-lg overflow-hidden">
              <img
                src="/Pranav's New Image.jpg"
                alt="Pranav Arya"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Bio Content */}
          <div ref={contentRef} className="space-y-6 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                About Me
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate software engineer specializing in <span className="text-accent font-medium">React</span>, <span className="text-accent font-medium">JavaScript</span>, <span className="text-accent font-medium">Java</span>, <span className="text-accent font-medium">Node.js</span>, and <span className="text-accent font-medium">React Native</span>. I love building scalable applications with modern web technologies and creating indie projects that solve real-world problems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Beyond coding, I'm deeply curious about everything around me—always questioning the "why" and "how" behind every task I undertake. I'm an avid space enthusiast who enjoys reading books, listening to music, and exploring new AI tools that push the boundaries of what's possible.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                When I'm not building applications, you'll find me vibe coding on personal projects, diving deep into new technologies, or simply exploring and learning about anything that sparks my curiosity.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                For a quick summary of my profile, you can also try this command in your terminal:
              </p>
              <CodeBlock code="npx pranavarya" />
            </div>

            <div className="space-y-4">
              {/* Social Links */}
              <div className="flex space-x-6">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    aria-label={label}
                    className="text-gray-400 hover:text-accent transition-all duration-300 transform hover:scale-105"
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>

              {/* YouTube Button */}
              <a
                href="https://www.youtube.com/@pranav_arya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#FF0000] hover:bg-[#CC0000] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Subscribe to YouTube Channel
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;