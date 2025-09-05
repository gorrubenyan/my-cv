import React from 'react';
import {FaCode, FaEye, FaGithub} from 'react-icons/fa';
import Image from "next/image";

interface Project {
    title: string;
    description: string;
    image: string;
    tech: string[];
    github: string;
    live: string;
}

interface ProjectsProps {
    projectsRef: React.RefObject<HTMLDivElement | null>;
    t: (key: string) => string;
}

const projects: Project[] = [
    {
        title: 'Portfolio Website',
        description: 'projectsPortfolio',
        image: '/project1.jpg',
        tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
        github: 'https://github.com/gorrubenyan/my-cv',
        live: 'https://my-cv-beta-mauve.vercel.app/'
    },
    // {
    //     title: 'Task Manager App',
    //     description: 'projectsTask',
    //     image: '/project2.jpg',
    //     tech: ['React', 'Node.js', 'MongoDB'],
    //     github: 'https://github.com/yourusername/task-manager',
    //     live: 'https://yourtaskapp.com'
    // },
    // {
    //     title: 'E-commerce Platform',
    //     description: 'projectsEcommerce',
    //     image: '/project3.jpg',
    //     tech: ['Next.js', 'Stripe', 'PostgresSQL'],
    //     github: 'https://github.com/yourusername/ecommerce',
    //     live: 'https://yourecommerce.com'
    // }
];

const Projects: React.FC<ProjectsProps> = ({ projectsRef, t }) => {
    return (
        <section ref={projectsRef} className="py-20 px-6 bg-white dark:bg-gray-800">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {t('projectsTitle')}
                </h2>

                <div className="flex justify-center md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="w-full md:w-1/3 bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                                {/*<div className="absolute inset-0 bg-black/20 flex items-center justify-center">*/}
                                {/*    <FaCode className="text-white text-4xl" />*/}
                                {/*</div>*/}
                                <Image
                                    sizes='15'
                                    src="/screen.png"
                                    alt="About"
                                    priority={true}
                                    fill
                                    className="rounded-lg shadow-xl object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{t(project.description)}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, techIndex) => (
                                        <span key={techIndex} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                      {tech}
                    </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        <FaGithub /> {t('code')}
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                                    >
                                        <FaEye /> {t('live')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;