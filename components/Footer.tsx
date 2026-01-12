
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-24 mt-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-gray-400 mb-4">DESCRIBE YOUR PROJECT</h4>
            <a href="mailto:hello@brunoerdison.com" className="text-3xl md:text-4xl font-serif hover:text-gray-400 transition-colors">
              hello@brunoerdison.com
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-[10px] font-bold tracking-widest text-gray-400 mb-4">FOLLOW ME</h4>
            <p className="text-xl font-serif mb-6">@brunoerdison</p>
            <div className="flex gap-4">
               {/* Gallery of small images as seen in design */}
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-12 h-12 bg-white border border-gray-200 p-1">
                   <img src={`https://picsum.photos/seed/footer${i}/100/100`} alt="" className="w-full h-full object-cover" />
                 </div>
               ))}
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-medium tracking-widest text-gray-400">© 2024 BRUNO ERDISON. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-bold tracking-widest hover:text-black text-gray-400 transition-colors">PRIVACY POLICY</a>
            <a href="#" className="text-[10px] font-bold tracking-widest hover:text-black text-gray-400 transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
