import React from 'react';

interface Skill {
    name: string;
    level: number;
    color: string;
}

interface SkillsProps {
    skillsRef: React.RefObject<HTMLDivElement | null>;
    t: (key: string) => string;
}

const skills: Skill[] = [
    { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-yellow-600' },
    // { name: 'TypeScript', level: 90, color: 'from-blue-400 to-blue-600' },
    { name: 'React', level: 90, color: 'from-cyan-400 to-cyan-600' },
    // { name: 'Next.js', level: 88, color: 'from-gray-400 to-gray-600' },
    { name: 'Tailwind CSS', level: 95, color: 'from-teal-400 to-teal-600' },
    // { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600' },
    { name: 'Git', level: 90, color: 'from-orange-400 to-orange-600' },
    // { name: 'REST API', level: 87, color: 'from-purple-400 to-purple-600' }
];

const Skills: React.FC<SkillsProps> = ({ skillsRef, t }) => {
    return (
        <section ref={skillsRef} className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {t('skillsTitle')}
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {skills.map((skill) => (
                        <div key={skill.name} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-lg font-semibold text-gray-800 dark:text-white">{skill.name}</span>
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                                <div
                                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;