"use client";

import React, { createContext, useState, useContext } from 'react';

// Context type for selected technologies
type SelectedTechContextType = {
    selectedTechs: string[];  // Array of selected technologies
    toggleSelectedTech: (tech: string) => void;  // Function to toggle technology selection
};

// Create the context with default values
const SelectedTechContext = createContext<SelectedTechContextType>({
    selectedTechs: [],  // Start with an empty array of selected technologies
    toggleSelectedTech: () => { },  // Placeholder function
});

// Custom hook to use the SelectedTechContext
export const useSelectedTech = () => useContext(SelectedTechContext);

export const SelectedTechProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedTechs, setSelectedTechs] = useState<string[]>([]);  // Store multiple technologies

    // Function to toggle technology selection
    const toggleSelectedTech = (tech: string) => {
        setSelectedTechs((prevSelectedTechs) =>
            prevSelectedTechs.includes(tech)
                ? prevSelectedTechs.filter((t) => t !== tech)  // Remove tech if already selected
                : [...prevSelectedTechs, tech]  // Add tech if not selected
        );
    };

    return (
        <SelectedTechContext.Provider value={{ selectedTechs, toggleSelectedTech }}>
            {children}
        </SelectedTechContext.Provider>
    );
};
