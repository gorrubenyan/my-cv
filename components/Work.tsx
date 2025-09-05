import React from 'react';

interface WorkProps {
    workRef: React.RefObject<HTMLDivElement | null>;
    t: (key: string) => string;
}

const Work: React.FC<WorkProps> = ({ workRef, t }) => {
    return (
        <section ref={workRef} className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {t('workTitle')}
                </h2>

                <div className="relative">
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>

                    <div className="space-y-12">
                        <div className="relative pl-20">
                            <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Frontend Developer – BeeOnCode</h3>
                                <p className="text-blue-600 dark:text-blue-400 mb-4">2025 - {t('present')}</p>
                                <p className="text-gray-600 dark:text-gray-300">{t('workText')}</p>
                            </div>
                        </div>

                        {/*<div className="relative pl-20">*/}
                        {/*    <div className="absolute left-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>*/}
                        {/*    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">*/}
                        {/*        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{t('educationDegree')}</h3>*/}
                        {/*        <p className="text-purple-600 dark:text-purple-400 mb-4">2018 - 2022</p>*/}
                        {/*        <p className="text-gray-600 dark:text-gray-300">Yerevan State University</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;