import React, { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Copy, Check } from './Icons';
import { PROFILE } from '../constants';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isEmailExpanded, setIsEmailExpanded] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);
  const emailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    
    const handleClickOutside = (event: MouseEvent) => {
      if (emailRef.current && !emailRef.current.contains(event.target as Node)) {
        setIsEmailExpanded(false);
        setHasCopied(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const copyToClipboard = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000);
    } catch (err) {
      console.error('Unable to copy', err);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-black/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center text-left">
        <span className="font-bold tracking-tighter text-xl uppercase leading-none select-none">{PROFILE.name}</span>
        
        <div className="flex items-center gap-12">
          <div 
            ref={emailRef}
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsEmailExpanded(true)}
            onClick={(e) => {
              e.stopPropagation();
              setIsEmailExpanded(!isEmailExpanded);
            }}
          >
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-50 transition-opacity">
              <Mail /> Email
            </div>

            {isEmailExpanded && (
              <div 
                className="absolute right-0 top-full mt-4 bg-white border border-black/5 shadow-2xl p-4 flex items-center gap-4 animate-fade-in-down"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="text-xs font-medium lowercase tracking-normal text-black/60 select-all">
                  {PROFILE.email}
                </span>
                <button 
                  onClick={copyToClipboard}
                  className="p-2 hover:bg-black/5 transition-colors flex items-center gap-2 border-l border-black/5 pl-4"
                >
                  {hasCopied ? (
                    <>
                      <Check />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-green-600">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Copy</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-50 transition-opacity flex items-center gap-2">
            <Linkedin /> LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;