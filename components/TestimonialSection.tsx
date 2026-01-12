
import React from 'react';

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-32 border-t border-gray-100 max-w-4xl mx-auto text-center">
       <div className="relative inline-block">
          <span className="text-9xl font-serif text-gray-100 absolute -top-16 -left-12 -z-10 select-none">“</span>
          <blockquote className="text-3xl md:text-4xl font-serif leading-relaxed italic mb-12">
            "Bruno was a real pleasure to work with and I look forward to working with him again. He's definitely someone you can trust with a project from start to finish. Highly Recommended."
          </blockquote>
       </div>
       <div>
         <p className="text-sm font-bold tracking-widest mb-1">CANGO KIM</p>
         <p className="text-[10px] font-medium text-gray-400">PRODUCT MANAGER @SPOTIFY</p>
       </div>
    </section>
  );
};

export default TestimonialSection;
