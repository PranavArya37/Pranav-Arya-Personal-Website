import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Mail, Linkedin, Github, Twitter, Instagram, Youtube } from 'lucide-react';

const NotFound: React.FC = () => {
    const socialLinks = [
        { icon: Mail, href: 'mailto:pranavarya2799@gmail.com', label: 'Email' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/pranavarya37/', label: 'LinkedIn' },
        { icon: Github, href: 'https://github.com/PranavArya37', label: 'GitHub' },
        { icon: Twitter, href: 'https://twitter.com/PranavArya37', label: 'Twitter' },
        { icon: Instagram, href: 'https://www.instagram.com/pranavarya37', label: 'Instagram' },
        { icon: Youtube, href: 'https://www.youtube.com/@pranav_arya', label: 'Youtube' }
    ];

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-6">
            <div className="max-w-3xl w-full">
                <div className="text-left space-y-8">
                    {/* 404 Header */}
                    <div>
                        <h1 className="text-5xl md:text-6xl font-semibold text-white mb-4">
                            404. Page not available.
                        </h1>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                            <span className="text-white">But </span>
                            <span className="text-accent">Pranav</span>
                            <span className="text-white"> is.</span>
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="space-y-4">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Pranav Arya is a passionate software engineer specializing in <span className="text-accent font-semibold">React</span>, <span className="text-accent font-semibold">JavaScript</span>, <span className="text-accent font-semibold">Java</span>, <span className="text-accent font-semibold">Node.js</span>, and <span className="text-accent font-semibold">React Native</span>. He loves building scalable applications with modern web technologies and creating <span className="text-accent font-semibold">indie projects</span>.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            When not coding, you'll find him exploring new AI tools, reading about{' '}
                            <a
                                href="https://space.pranavarya.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent underline"
                            >space</a>
                            , or listening to music.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link
                            to="/"
                            className="inline-flex items-center px-6 py-3 bg-accent hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                        >
                            <Home size={20} className="mr-2" />
                            Back to Home
                        </Link>

                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-dark-700 hover:bg-dark-700/80 text-white rounded-lg font-medium transition-all duration-300 border border-gray-600 hover:border-accent"
                        >
                            Visit Blog
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="pt-6">
                        <p className="text-gray-400 mb-4">Connect with me:</p>
                        <div className="flex space-x-6">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith('mailto:') ? '_self' : '_blank'}
                                    rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                                    aria-label={label}
                                    className="text-gray-400 hover:text-accent transition-all duration-300 transform hover:scale-110"
                                >
                                    <Icon size={24} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;