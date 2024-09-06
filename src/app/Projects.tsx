import React from 'react';

const projects = [
    {
        name: 'AI-Powered Suggestions App',
        description: 'An app that generates intelligent suggestions using the OpenAI API.',
        image: '/screenshot.png',
        link: 'https://github.com/yourusername/ai-powered-suggestions-app',
    },
];

export const Projects = () => {
    return (
        <section className="mt-10">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-100 shadow-md p-4 rounded-lg">
                        <h3 className="text-xl font-bold">{project.name}</h3>
                        <img src={project.image} alt={project.name} className="w-full h-auto mt-4 rounded-md" />
                        <p className="mt-2">{project.description}</p>
                        <a href={project.link} className="text-purple-700 mt-4 block" target="_blank" rel="noopener noreferrer">
                            View on GitHub
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};
