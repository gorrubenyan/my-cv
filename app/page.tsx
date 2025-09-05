'use client';
import React, { useEffect, useState, useRef, useMemo } from 'react';
import { getTranslation } from '@/utils/translations';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Work from '../components/Work';
import Contact from '../components/Contact';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
    // Initialize states
    const [lang, setLang] = useState('hy');
    const [dark, setDark] = useState(true);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [typedText, setTypedText] = useState('');
    const [currentRole, setCurrentRole] = useState(0);

    // Refs for sections
    const heroRef = useRef<HTMLDivElement | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const skillsRef = useRef<HTMLDivElement | null>(null);
    const projectsRef = useRef<HTMLDivElement | null>(null);
    const workRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);
    const navRef = useRef<HTMLElement | null>(null); // Ref for Navigation

    // Load language and theme from localStorage on client-side
    useEffect(() => {
        const savedLang = localStorage.getItem('language');
        if (savedLang) {
            setLang(savedLang);
        }

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDark(true);
        }
    }, []);

    // Update localStorage when lang changes
    useEffect(() => {
        localStorage.setItem('language', lang);
    }, [lang]);

    // Update localStorage and apply theme when dark changes
    useEffect(() => {
        localStorage.setItem('theme', dark ? 'dark' : 'light');
        if (dark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [dark]);

    // Calculate and set Navigation height
    useEffect(() => {
        const updateNavHeight = () => {
            if (navRef.current) {
                const navHeight = navRef.current.getBoundingClientRect().height;
                document.documentElement.style.setProperty('--nav-height', `${navHeight}px`);
            }
        };

        updateNavHeight(); // Initial call
        window.addEventListener('resize', updateNavHeight); // Update on resize
        return () => window.removeEventListener('resize', updateNavHeight);
    }, []);

    const t = (key: string) => getTranslation(lang, key);

    const roles = useMemo(() => [
        t('position'),
        'Full Stack Developer',
        'Front-end Developer',
        'Back-end Developer'
    ], [t]);

    const rolesRef = useRef(roles);
    const animationRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        rolesRef.current = roles;
    }, [roles]);

    useEffect(() => {
        const currentText = rolesRef.current[currentRole];
        let index = 0;

        if (animationRef.current) clearInterval(animationRef.current);

        animationRef.current = setInterval(() => {
            if (index <= currentText.length) {
                setTypedText(currentText.slice(0, index));
                index++;
            } else {
                if (animationRef.current) clearInterval(animationRef.current);
                setTimeout(() => {
                    setCurrentRole((prev) => (prev + 1) % rolesRef.current.length);
                }, 2000);
            }
        }, 100);

        return () => {
            if (animationRef.current) clearInterval(animationRef.current);
        };
    }, [currentRole]);

    useEffect(() => {
        const sections = [
            { id: 'hero', ref: heroRef },
            { id: 'about', ref: aboutRef },
            { id: 'skills', ref: skillsRef },
            { id: 'projects', ref: projectsRef },
            { id: 'work', ref: workRef },
            { id: 'contact', ref: contactRef }
        ];

        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);

            const current = sections.find(section => {
                if (section.ref.current) {
                    const rect = section.ref.current.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom > 100;
                }
                return false;
            });

            if (current) {
                setActiveSection(current.id);
            }
        };

        handleScroll(); // Initial call
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const getRefBySection = (section: string): React.RefObject<HTMLElement | null> => {
        switch(section) {
            case 'hero': return heroRef;
            case 'about': return aboutRef;
            case 'skills': return skillsRef;
            case 'projects': return projectsRef;
            case 'work': return workRef;
            case 'contact': return contactRef;
            default: return heroRef;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
            <Navigation
                ref={navRef}
                lang={lang}
                setLang={setLang}
                dark={dark}
                setDark={setDark}
                activeSection={activeSection}
                scrollToSection={scrollToSection}
                getRefBySection={getRefBySection}
                t={t}
            />
            <main>
                <Hero heroRef={heroRef} typedText={typedText} t={t} scrollToSection={scrollToSection} contactRef={contactRef} />
                <About aboutRef={aboutRef} t={t} />
                <Skills skillsRef={skillsRef} t={t} />
                <Projects projectsRef={projectsRef} t={t} />
                <Work workRef={workRef} t={t} />
                <Contact contactRef={contactRef} t={t} />
            </main>
            <ScrollToTop showScrollTop={showScrollTop} scrollToTop={scrollToTop} />
        </div>
    );
}