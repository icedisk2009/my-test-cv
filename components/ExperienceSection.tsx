
import React from 'react';
import { EDUCATION_EXP } from '../constants.tsx';

const ExperienceSection: React.FC = () => {
  return (
    <section className="py-24 border-b border-gray-100">
      <h2 className="text-4xl font-serif text-center mb-24">Education & Experience</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div>
          <p className="text-[10px] font-bold tracking-[0.3em] text-gray-300 mb-12">2014</p>
          <div className="space-y-12">
            {EDUCATION_EXP.education.map((item, i) => (
              <div key={i}>
                <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.company}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[10px] font-bold tracking-[0.3em] text-gray-300 mb-12">2015 - 2019</p>
          <div className="space-y-12">
            {EDUCATION_EXP.experience.map((item, i) => (
              <div key={i}>
                <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.company}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[10px] font-bold tracking-[0.3em] text-gray-300 mb-12">2020 - PRESENT</p>
          <div className="space-y-12">
            {EDUCATION_EXP.management.map((item, i) => (
              <div key={i}>
                <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
