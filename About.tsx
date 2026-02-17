import React from 'react';
import { ChevronRight } from './Icons';

const About: React.FC = () => {
  const skills = ["R (Advanced)", "Python", "SQL", "Power BI", "LaTeX", "Adobe Suite"];

  return (
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 text-left">
        <div className="lg:col-span-7">
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-black/40 mb-8 italic">Background</h2>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-[1.15] tracking-tight text-black/80">
            Quantitative expertise rooted in the <span className="text-black font-normal underline decoration-black/10 underline-offset-4">Delhi School of Economics</span>. Specialized in diagnostics and surfacing hidden value.
          </p>
          
          <div className="mt-12 lg:mt-16 grid sm:grid-cols-2 gap-10 border-t border-black/10 pt-10">
             <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-3 text-left">Education</p>
                <div className="space-y-4 text-left text-sm">
                  <div>
                    <p className="font-bold uppercase tracking-tight">Master in Economics</p>
                    <p className="text-black/50 italic font-light">DSE Delhi, 2023</p>
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-tight">Bachelors in Economics</p>
                    <p className="text-black/50 italic font-light">Kirori Mal College, 2021</p>
                  </div>
                </div>
             </div>
             <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-3">Leadership</p>
                <p className="text-sm leading-relaxed text-black/60 font-light">
                  Managing client-facing analytics deliveries and mentoring a team of 4+ analysts at Deloitte.
                </p>
             </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-[#1A1A1A] text-white p-8 md:p-10 flex flex-col justify-between h-full border border-black/5 shadow-2xl">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-6">Technical Stack</p>
              <div className="space-y-4">
                {skills.map((skill, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/10 pb-1.5 text-xs">
                     <span className="font-light">{skill}</span>
                     <ChevronRight className="opacity-20" />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 flex justify-between items-end">
              <div className="text-left">
                 <p className="text-[10px] font-bold uppercase opacity-40 mb-1 italic tracking-widest">Interests</p>
                 <p className="text-[10px] font-medium tracking-tight">Photography • Drumming</p>
              </div>
              <div className="text-right">
                 <p className="text-[10px] font-bold uppercase opacity-40 mb-1 tracking-tight">National Rank</p>
                 <p className="text-[10px] font-medium tracking-tight">198</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;