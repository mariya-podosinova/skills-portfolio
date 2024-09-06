import React from 'react';

const technologies = [
    { name: 'React with TypeScript', description: 'Modern Front-End framework with type safety for building user interfaces.' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework for designing sleek, responsive UIs.' },
    { name: 'Vercel', description: 'Deployment platform for modern web applications with seamless integration.' },
    { name: 'OpenAI API', description: 'AI-driven API for generating intelligent content and suggestions.' },
];

export const Technologies = () => {
    return (
        <section className="mt-10">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                {technologies.map((tech, index) => (
                    <div key={index} className="bg-white shadow-md p-4 rounded-lg">
                        <h3 className="text-xl font-bold">{tech.name}</h3>
                        <p className="mt-2">{tech.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
