import React from 'react';
import Image from 'next/image';

interface AboutProps {
    aboutRef: React.RefObject<HTMLDivElement | null>;
    t: (key: string) => string;
}

const About: React.FC<AboutProps> = ({ aboutRef, t }) => {
    return (
        <section ref={aboutRef} className="py-20 px-6 bg-white dark:bg-gray-800">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {t('aboutTitle')}
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            {t('aboutText')}
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            {t('aboutText2')}
                        </p>

                        {/*<div className="grid grid-cols-2 gap-6 mt-8">*/}
                        {/*    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">*/}
                        {/*        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>*/}
                        {/*        <div className="text-sm text-gray-600 dark:text-gray-300">{t('projectsCompleted')}</div>*/}
                        {/*    </div>*/}
                        {/*    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">*/}
                        {/*        <div className="text-3xl font-bold text-green-600 dark:text-green-400">3+</div>*/}
                        {/*        <div className="text-sm text-gray-600 dark:text-gray-300">{t('yearsExperience')}</div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg transform rotate-6"></div>
                        <div className="relative h-80">
                            <Image
                                sizes='15'
                                src="/about.png"
                                alt="About"
                                priority={true}
                                fill
                                className="rounded-lg shadow-xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;