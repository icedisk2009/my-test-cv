
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { ProjectItem } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      <Header />
      
      <main className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Main Title Section */}
        <section className="pt-20 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight">
            Bruno Erdison <br />
            UI/UX Interaction Designer <br />
            Based in Poland
          </h1>
        </section>

        <Hero />
        
        {/* Trusted Partners Logos */}
        <div className="py-16 border-b border-gray-100 flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
          {['Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum'].map((logo, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-400 rounded-full" />
              <span className="font-medium tracking-tight text-lg">{logo}</span>
            </div>
          ))}
        </div>

        <ExperienceSection />
        
        <ProjectsSection onProjectClick={setSelectedProject} />

        <TestimonialSection />
      </main>

      <Footer />

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default App;
