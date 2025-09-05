'use client';
import React, { forwardRef } from 'react';
import LanguageSelector from './UI/LanguageSelector';
import ThemeToggle from './UI/ThemeToggle';

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

// Use forwardRef to pass ref to the nav element
const Navigation = forwardRef<HTMLElement, NavigationProps>(
  ({ lang, setLang, dark, setDark, activeSection, scrollToSection, getRefBySection, t }, ref) => {
    return (
      <nav
        ref={ref}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('name')}
          </div>

          <div className="hidden md:flex space-x-8 px-2">
            {['hero', 'about', 'skills', 'projects', 'work', 'contact'].map((section) => (
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

          <div className="flex items-center space-x-4">
            <LanguageSelector lang={lang} setLang={setLang} />
            <ThemeToggle dark={dark} setDark={setDark} />
          </div>
        </div>
      </nav>
    );
  }
);

// Set display name for better debugging
Navigation.displayName = 'Navigation';

export default Navigation;
