
import React, { useEffect } from 'react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-6xl bg-white max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl flex flex-col md:flex-row">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all group"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Area */}
        <div className="md:w-3/5 bg-gray-100 min-h-[400px]">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Area */}
        <div className="md:w-2/5 p-8 md:p-12 lg:p-16 flex flex-col justify-between bg-white">
          <div>
            <p className="text-[10px] font-bold tracking-[0.3em] text-gray-400 mb-4">{project.category.toUpperCase()}</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">{project.title}</h2>
            
            <div className="space-y-8">
              <p className="text-lg font-light leading-relaxed text-gray-600 italic">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-8 py-8 border-y border-gray-100">
                {project.details?.client && (
                  <div>
                    <h4 className="text-[10px] font-bold tracking-widest text-gray-400 mb-1">CLIENT</h4>
                    <p className="text-sm font-medium">{project.details.client}</p>
                  </div>
                )}
                {project.details?.role && (
                  <div>
                    <h4 className="text-[10px] font-bold tracking-widest text-gray-400 mb-1">ROLE</h4>
                    <p className="text-sm font-medium">{project.details.role}</p>
                  </div>
                )}
                {project.details?.year && (
                  <div>
                    <h4 className="text-[10px] font-bold tracking-widest text-gray-400 mb-1">YEAR</h4>
                    <p className="text-sm font-medium">{project.details.year}</p>
                  </div>
                )}
              </div>

              {project.details?.tools && (
                <div>
                  <h4 className="text-[10px] font-bold tracking-widest text-gray-400 mb-3">TOOLS USED</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.details.tools.map(tool => (
                      <span key={tool} className="text-[10px] font-bold border border-gray-200 px-3 py-1 tracking-widest">
                        {tool.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-12">
             <a href="#" className="inline-block text-[10px] font-black tracking-[0.2em] border-b-2 border-black pb-1 hover:text-gray-400 hover:border-gray-400 transition-all">
                LAUNCH PROJECT
             </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
