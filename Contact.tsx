import React, { useState } from 'react';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000);
    } catch (err) {
      console.error('Unable to copy', err);
    }
  };

  return (
    <section className="py-24 px-8 text-left bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-black/40 mb-10 italic">Let's Connect</h2>
            <h3 className="text-3xl font-light tracking-tight mb-4">Open for Strategic Collaborations.</h3>
            <p className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-12 select-all leading-[0.9] text-black/90">
              Let's build the future of <br/>evidence-led strategy.
            </p>
          </div>
          
          <div className="flex flex-col gap-6 md:pt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 border-t border-black/5 pt-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-2">LinkedIn</p>
                <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:opacity-50 transition-opacity flex items-center gap-2 underline underline-offset-4 decoration-black/10">
                  {PROFILE.linkedinHandle}
                </a>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-2">Photography</p>
                <a href={PROFILE.photography} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:opacity-50 transition-opacity flex items-center gap-2 underline underline-offset-4 decoration-black/10">
                  elartsylens.com
                </a>
              </div>
              <div className="sm:col-span-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-2">Email</p>
                <div 
                  onClick={copyToClipboard}
                  className="text-sm font-medium hover:opacity-50 transition-all flex items-center gap-3 underline underline-offset-4 decoration-black/10 cursor-pointer select-all"
                >
                  <span>{PROFILE.email}</span>
                  {hasCopied && (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-green-600 animate-in fade-in slide-in-from-left-2 duration-300">
                      Copied
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;