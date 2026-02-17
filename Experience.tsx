import React from 'react';
import { PROFILE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section className="py-16 px-8 bg-white border-t border-black/5 text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
         <div className="md:w-1/3">
           <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-black/40 italic">Tenure</h2>
         </div>
         <div className="md:w-2/3 md:border-l border-black/5 md:pl-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 gap-4">
               <div>
                 <h3 className="text-2xl md:text-4xl font-light tracking-tight text-black/90">Deloitte</h3>
                 <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-40 mt-1">{PROFILE.practice}</p>
               </div>
               <span className="text-[9px] font-bold uppercase tracking-widest opacity-40 italic mb-1">2023 — Present</span>
            </div>
            <p className="text-lg md:text-xl font-light text-black/60 leading-relaxed italic max-w-xl">
              "Designing essential decision frameworks that convert intricate economic indicators into high-level executive strategies with multi-billion dollar implications"
            </p>
         </div>
      </div>
    </section>
  );
};

export default Experience;