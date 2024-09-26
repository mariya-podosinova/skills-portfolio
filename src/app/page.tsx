import React from 'react';
import { Technologies } from './Technologies';
import { Projects } from './Projects';
import { SelectedTechProvider } from './SelectedTechContext';

export default function Home() {
  return (
    <SelectedTechProvider>
      <div className="p-6 font-sans">
        <header>
          <h1 className="text-4xl font-bold text-purple-700 border-b-2 border-purple-700 pb-2">
            Technology Skills Portfolio
          </h1>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-[3fr,1fr] gap-6 mt-6">
          <div>
            <Projects />
          </div>
          <aside className="lg:col-start-2">
            <Technologies />
          </aside>
        </div>
      </div>
    </SelectedTechProvider>
  );
}
