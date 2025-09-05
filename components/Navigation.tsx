'use client';
import React, { forwardRef, useState } from 'react';
import LanguageSelector from './UI/LanguageSelector';
import ThemeToggle from './UI/ThemeToggle';
import hero from "@/components/Hero";

interface NavigationProps {
  lang: string;
  setLang: (lang: string) => void;
  dark: boolean;
  setDark: (dark: boolean) => void;
  activeSection: string;
  scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void;
  getRefBySection: (section: string) => React.RefObject<HTMLElement | null>;
  t: (key: string) => string;
}

const Navigation = forwardRef<HTMLElement, NavigationProps>(
    ({ lang, setLang, dark, setDark, activeSection, scrollToSection, getRefBySection, t }, ref) => {
      const [isOpen, setIsOpen] = useState(false);

      const sections = ['hero', 'about', 'skills', 'projects', 'work', 'contact'];

      return (
          <nav
              ref={ref}
              className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80
        backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
              {/* Logo */}
              <div
                  onClick={() => scrollToSection(getRefBySection("hero"))}
                  className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('name')}
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8 px-2">
                {sections.map((section) => (
                    <button
                        key={section}
                        onClick={() => scrollToSection(getRefBySection(section))}
                        className={`capitalize transition-colors ${
                            activeSection === section
                                ? 'text-blue-600 dark:text-blue-400'
                                : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                        }`}
                    >
                      {t(`nav${section.charAt(0).toUpperCase() + section.slice(1)}`)}
                    </button>
                ))}
              </div>

              {/* Right side (lang + theme) */}
              <div className="flex items-center space-x-4">
                <LanguageSelector lang={lang} setLang={setLang} />
                <ThemeToggle dark={dark} setDark={setDark} />

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? '✕' : '☰'}
                </button>
              </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-6 py-4 space-y-4">
                  {sections.map((section) => (
                      <button
                          key={section}
                          onClick={() => {
                            scrollToSection(getRefBySection(section));
                            setIsOpen(false); // փակվի մենյուն սեղմելուց հետո
                          }}
                          className={`block w-full text-left capitalize transition-colors ${
                              activeSection === section
                                  ? 'text-blue-600 dark:text-blue-400'
                                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                          }`}
                      >
                        {t(`nav${section.charAt(0).toUpperCase() + section.slice(1)}`)}
                      </button>
                  ))}
                </div>
            )}
          </nav>
      );
    }
);

Navigation.displayName = 'Navigation';

export default Navigation;
