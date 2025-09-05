'use client';
import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDownload } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

interface HeroProps {
    heroRef: React.RefObject<HTMLDivElement | null>;
    typedText: string;
    t: (key: string) => string;
    scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void;
    contactRef: React.RefObject<HTMLDivElement | null>;
}

const Hero: React.FC<HeroProps> = ({ heroRef, typedText, t, scrollToSection, contactRef }) => {
    return (
        <section
            ref={heroRef}
            className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden"
            style={{ paddingTop: 'calc(var(--nav-height, 60px) + 5vh)' }}
        >
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="text-center z-10 max-w-4xl mx-auto">
                <div className="relative mb-8">
                    <Image
                        src="/avatar.png"
                        width={160}
                        height={160}
                        className="w-40 h-40 rounded-full shadow-2xl mx-auto mb-8 border-4 border-white dark:border-gray-700 hover:scale-105 transition-transform duration-300"
                        alt="Avatar"
                    />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-700 animate-pulse"></div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r py-2 from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in-down">
                    {t('name')}
                </h1>

                <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-8">
                    <span className="typing-text">{typedText}</span>
                    <span className="animate-blink">|</span>
                </div>

                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12 animate-fade-in-up-delay leading-relaxed">
                    {t('bio')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delay-2">
                    <button
                        onClick={() => scrollToSection(contactRef)}
                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
                    >
                        <HiOutlineMail className="text-xl" />
                        {t('contactMe')}
                    </button>

                    <a
                        href="/cv.pdf"
                        download
                        className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2"
                    >
                        <FaDownload />
                        {t('downloadCV')}
                    </a>
                </div>

                <div className="flex justify-center gap-6 mt-12 animate-fade-in-up-delay-3">
                    {[
                        { icon: FaGithub, href: 'https://github.com/yourusername', color: 'hover:text-gray-700 dark:hover:text-white' },
                        { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', color: 'hover:text-blue-700 dark:hover:text-blue-400' },
                        { icon: FaTwitter, href: 'https://twitter.com/yourusername', color: 'hover:text-sky-500' },
                        { icon: FaInstagram, href: 'https://instagram.com/yourusername', color: 'hover:text-pink-500' }
                    ].map(({ icon: Icon, href, color }, index) => (
                        <a
                            key={index}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-3xl text-gray-600 dark:text-gray-400 ${color} transition-all duration-300 hover:scale-110`}
                        >
                            <Icon />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;