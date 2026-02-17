import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-12 px-8 lg:pt-36 lg:pb-16">
      <div className="max-w-7xl mx-auto text-left">
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-3 opacity-40 italic">Strategy & Econometrics</p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[96px] font-medium tracking-tighter leading-[0.9] mb-6 text-black/90 text-left">
          Applied <br/>Econometrics <br/>& Strategy.
        </h1>
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <p className="text-base md:text-lg font-light leading-relaxed max-w-xl text-black/60 text-left">
            I translate ambiguous business problems into scalable decision models and executive-ready insights.
          </p>
          <div className="flex justify-start md:justify-end pt-1">
            <div className="md:text-right border-l md:border-l-0 md:border-r border-black/10 pl-5 md:pl-0 md:pr-5">
               <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1 text-left md:text-right">Based in</p>
               <p className="text-sm font-medium text-left md:text-right">India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;