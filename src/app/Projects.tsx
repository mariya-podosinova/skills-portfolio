"use client";
import Image from 'next/image';
import { useSelectedTech } from './SelectedTechContext';

const projects = [
    {
        name: 'AI-Powered Suggestions App',
        description: 'An app that generates intelligent suggestions using the OpenAI API.',
        image: '/screenshot.png',
        link: 'https://github.com/yourusername/ai-powered-suggestions-app',
        technologies: ['React', 'OpenAI API', 'Tailwind CSS'],
    },
    {
        name: 'Portfolio Website',
        description: 'A personal portfolio website showcasing projects and skills.',
        image: '/screenshot.png',
        link: 'https://github.com/yourusername/portfolio',
        technologies: ['Next.js', 'Tailwind CSS', 'Vercel', 'Next.js', 'Tailwind CSS', 'Vercel'],
    },
    {
        name: 'AI-Powered Suggestions App',
        description: 'An app that generates intelligent suggestions using the OpenAI API.',
        image: '/screenshot.png',
        link: 'https://github.com/yourusername/ai-powered-suggestions-app',
        technologies: ['React', 'OpenAI API', 'Tailwind CSS'],
    },
    {
        name: 'Portfolio Website',
        description: 'A personal portfolio website showcasing projects and skills.',
        image: '/screenshot.png',
        link: 'https://github.com/yourusername/portfolio',
        technologies: ['Next.js', 'Tailwind CSS', 'Vercel', 'Next.js', 'Tailwind CSS', 'Vercel'],
    },
    {
        name: 'AI-Powered Suggestions App',
        description: 'An app that generates intelligent suggestions using the OpenAI API.',
        image: '/screenshot.png',
        link: 'https://github.com/yourusername/ai-powered-suggestions-app',
        technologies: ['React', 'OpenAI API', 'Tailwind CSS'],
    },
    {
        name: 'Portfolio Website',
        description: 'A personal portfolio website showcasing projects and skills.',
        image: '/screenshot.png',
        link: 'https://github.com/yourusername/portfolio',
        technologies: ['Next.js', 'Tailwind CSS', 'Vercel', 'Next.js', 'Tailwind CSS', 'Vercel'],
    },
];

export const Projects = () => {
    const { selectedTechs } = useSelectedTech();

    return (
        <section className="mt-10">
            <h2 className="text-2xl font-semibold mb-6 ">Projects</h2>
            <div className="flex flex-wrap  gap-6">
                {projects.map((project, index) => {
                    const isHighlighted = selectedTechs.length === 0 || project.technologies.some((tech) => selectedTechs.includes(tech));

                    return (
                        <div
                            key={index}
                            className={`shadow-md p-2 rounded-lg transition-all duration-300 transform ${isHighlighted
                                ? 'scale-105 shadow-lg border-purple-500'
                                : 'opacity-50'
                                }`}
                            style={{ width: '300px', height: '450px' }}
                        >

                            <div className="relative w-full h-2/3">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    layout="fill"
                                    className="rounded-t-lg object-cover"
                                />
                            </div>


                            <div className="h-1/3 p-2">
                                <h3 className="text-sm font-bold">{project.name}</h3>
                                <p className="text-xs text-gray-700">{project.description}</p>
                                <a
                                    href={project.link}
                                    className="text-xs text-purple-700 mt-2 block"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View on GitHub  →
                                </a>


                                <div className="flex flex-wrap gap-1 mt-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2 py-1 bg-purple-200 text-purple-800 rounded-full text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

        </section>
    );
};
