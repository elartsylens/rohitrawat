import React from 'react';
import { ArrowRight } from './Icons';
import { PROFILE } from '../constants';

const CreativePerspective: React.FC = () => {
  return (
    <section className="py-20 px-8 bg-[#FDFDFD] border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 text-left">
        <div className="w-full md:w-1/2">
          <div className="aspect-[4/3] bg-white relative overflow-hidden group flex items-center justify-center border border-black/5 p-8 lg:p-12 shadow-sm transition-shadow hover:shadow-md duration-500">
             <img 
               src={PROFILE.logoUrl} 
               alt="El Artsy Lens Logo" 
               className="w-full h-full object-contain mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-black/40 mb-4 italic">Beyond the Data</h2>
          <h3 className="text-4xl font-light tracking-tight mb-8">Creative Perspective</h3>
          <p className="text-xl font-light text-black/60 leading-relaxed italic mb-10 max-w-md">
            "Applying the same precision of an econometrician’s lens to the geometry of the world."
          </p>
          <a 
            href={PROFILE.photography} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] pb-1 border-b border-black/20 hover:border-black transition-all"
          >
            Explore elartsylens.com 
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CreativePerspective;