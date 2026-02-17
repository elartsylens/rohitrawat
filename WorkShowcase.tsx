import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from './Icons';
import { PROFILE } from '../constants';
import { WorkItem } from '../types';
import ProjectModal from './ProjectModal';

const WorkShowcase: React.FC = () => {
  const [workPage, setWorkPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<WorkItem | null>(null);
  
  const displayedWork = workPage === 1 ? PROFILE.work.slice(0, 4) : PROFILE.work.slice(4, 8);

  return (
    <section className="py-16 px-8 bg-white border-y border-black/5">
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10 text-left">
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-black/40 italic">Work Showcase</h2>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setWorkPage(1)}
              disabled={workPage === 1}
              className={`p-2 rounded-full border border-black/5 transition-all ${workPage === 1 ? 'opacity-10 cursor-not-allowed' : 'opacity-100 hover:bg-black hover:text-white'}`}
            >
              <ChevronLeft />
            </button>
            
            <span className="text-[10px] font-bold tracking-widest tabular-nums opacity-60">
              {workPage.toString().padStart(2, '0')} / 02
            </span>
            
            <button 
              onClick={() => setWorkPage(2)}
              disabled={workPage === 2}
              className={`p-2 rounded-full border border-black/5 transition-all ${workPage === 2 ? 'opacity-10 cursor-not-allowed' : 'opacity-100 hover:bg-black hover:text-white'}`}
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 bg-black/5 border border-black/5 text-left transition-all duration-500 min-h-[500px] gap-px">
          {displayedWork.map((item) => (
            <div 
              key={item.id} 
              onClick={() => item.hasDetailedView && setSelectedProject(item)}
              className={`bg-white p-8 md:p-12 lg:p-14 flex flex-col justify-between group transition-colors duration-500 ${item.hasDetailedView ? 'cursor-pointer hover:bg-[#FDFDFD]' : 'cursor-default'}`}
            >
              <div>
                <div className="flex justify-between mb-6">
                  <span className="font-mono text-xs opacity-30">{item.id}</span>
                  {item.hasDetailedView && (
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                      <ArrowRight />
                    </div>
                  )}
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1 text-left">{item.subtitle}</p>
                <h3 className="text-2xl lg:text-3xl font-light tracking-tight mb-4 leading-tight text-left">{item.title}</h3>
                <p className="text-black/50 text-sm leading-relaxed mb-8 max-w-xs text-left">{item.desc}</p>
              </div>
              <div className="pt-6 border-t border-black/5 text-left">
                <p className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-1">Impact</p>
                <p className="text-xl font-medium tracking-tight">{item.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;