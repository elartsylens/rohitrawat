import React from 'react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-black/5 px-8 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-[9px] font-bold opacity-20 uppercase tracking-widest">
         <span>{PROFILE.name} — 2026</span>
         <span className="hidden md:inline">STRATEGY & ECONOMETRICS</span>
      </div>
    </footer>
  );
};

export default Footer;