import React from 'react';
import { Technologies } from './Technologies';
import { Projects } from './Projects';

export default function Home() {
  return (
    <div className="p-6 font-sans">
      <header>
        <h1 className="text-4xl font-bold text-purple-700 border-b-2 border-purple-700 pb-2">
          Technology Skills Portfolio
        </h1>
      </header>

      <Technologies />
      <Projects />
    </div>
  );
}
