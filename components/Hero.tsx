
import React from 'react';
import { STATS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-12">
      {/* Bio Column */}
      <div className="lg:col-span-3 space-y-12">
        <div>
          <h3 className="text-[10px] font-bold tracking-[0.3em] text-gray-400 mb-6">BIOGRAPHY</h3>
          <p className="text-xl font-light leading-relaxed">
            Work for money and design for love! I'm Bruno, an UI/UX Interaction Designer based in Poland.
          </p>
        </div>

        <div>
          <h3 className="text-[10px] font-bold tracking-[0.3em] text-gray-400 mb-6">CONTACT</h3>
          <p className="text-sm font-medium mb-1">Warsaw, Poland</p>
          <p className="text-sm font-medium mb-1">hello@brunoerdison.com</p>
          <p className="text-sm font-medium">+68 3568 89 86</p>
        </div>

        <div>
          <h3 className="text-[10px] font-bold tracking-[0.3em] text-gray-400 mb-6">SERVICES</h3>
          <p className="text-sm font-medium mb-1">Website Design</p>
          <p className="text-sm font-medium mb-1">Mobile Application Design</p>
          <p className="text-sm font-medium">Animation</p>
        </div>
      </div>

      {/* Image Column */}
      <div className="lg:col-span-6 relative flex justify-center">
        <div className="relative w-full max-w-[500px] aspect-[4/5]">
          {/* Decorative Waves */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 opacity-20 pointer-events-none">
             <svg width="100" height="200" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10C25 10 25 30 50 30S75 10 100 10" stroke="black" strokeWidth="2"/>
                <path d="M0 30C25 30 25 50 50 50S75 30 100 30" stroke="black" strokeWidth="2"/>
                <path d="M0 50C25 50 25 70 50 70S75 50 100 50" stroke="black" strokeWidth="2"/>
                <path d="M0 70C25 70 25 90 50 90S75 70 100 70" stroke="black" strokeWidth="2"/>
             </svg>
          </div>

          <img 
            src="https://picsum.photos/seed/bruno/1000/1200" 
            alt="Bruno Erdison" 
            className="w-full h-full object-cover rounded-full border-[16px] border-white shadow-2xl"
          />
        </div>
      </div>

      {/* Stats Column */}
      <div className="lg:col-span-3 h-full flex flex-col justify-center items-end text-right space-y-12">
        {STATS.map((stat, i) => (
          <div key={i}>
             <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 mb-1">{stat.label}</p>
             <p className="text-5xl font-light">{stat.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
