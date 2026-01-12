
import React from 'react';
import { PROJECTS } from '../constants';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  onProjectClick: (project: ProjectItem) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onProjectClick }) => {
  return (
    <section className="py-24">
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-4xl font-serif">My Latest Projects</h2>
        <a href="#" className="text-[10px] font-bold tracking-widest border-b-2 border-black pb-1 hover:text-gray-400 hover:border-gray-400 transition-all">VIEW ALL PROJECTS</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="group cursor-pointer"
            onClick={() => onProjectClick(project)}
          >
            <div className="overflow-hidden bg-gray-50 aspect-[3/4] mb-6 relative">
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center">
                 <span className="text-white text-[10px] font-bold tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300 border border-white px-4 py-2">
                    VIEW DETAILS
                 </span>
              </div>
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <p className="text-[10px] font-bold tracking-widest text-gray-400 mb-1">{project.category.toUpperCase()}</p>
            <h3 className="text-2xl font-serif">{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
