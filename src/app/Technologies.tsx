"use client";

import { useSelectedTech } from './SelectedTechContext';

const technologies = [
    { name: 'React', description: 'A JavaScript library for building user interfaces.' },
    { name: 'TypeScript', description: 'A superset of JavaScript that adds static types.' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework for designing sleek, responsive UIs.' },
    { name: 'Vercel', description: 'Deployment platform for modern web applications with seamless integration.' },
    { name: 'OpenAI API', description: 'AI-driven API for generating intelligent content and suggestions.' },
];


export const Technologies = () => {
    const { selectedTechs, toggleSelectedTech } = useSelectedTech();

    return (
        <section className="mt-10">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="grid grid-cols-1 gap-6 mt-6">
                {technologies.map((tech, index) => {
                    const isSelected = selectedTechs.includes(tech.name);

                    return (
                        <div
                            key={index}
                            className={`shadow-md p-4 rounded-lg cursor-pointer transition-all duration-300 ${isSelected ? 'bg-purple-100 border border-purple-400' : 'bg-white'
                                }`}
                            onClick={() => toggleSelectedTech(tech.name)}
                        >
                            <h3 className="text-xl font-bold">{tech.name}</h3>
                            <p className="mt-2">{tech.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
