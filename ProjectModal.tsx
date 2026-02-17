import React from 'react';
import { WorkItem } from '../types';
import { X, ChevronRight, Target, TrendingUp } from './Icons';

interface ProjectModalProps {
  project: WorkItem;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose}></div>
        <div className="relative w-full max-w-6xl bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] h-[95vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300 rounded-sm">
            
            <div className="flex justify-between items-center px-8 md:px-16 py-8 border-b border-black/5 bg-[#FDFDFD]">
                <div className="flex flex-col">
                    <div className="flex items-center gap-3 opacity-30 mb-2">
                        <span className="font-mono text-[10px] tracking-widest">{project.id}</span>
                        <span className="w-8 h-px bg-black"></span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">{project.details?.type || project.subtitle}</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-light tracking-tight text-black/90">{project.details?.title}</h2>
                </div>
                <button 
                    className="p-3 hover:bg-black/5 rounded-full transition-all group border border-transparent hover:border-black/5"
                    onClick={onClose}
                >
                    <X />
                </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8 md:p-16 text-left">
                <div className="max-w-5xl mx-auto">
                    
                    {/* CASE 01: MAHKUMBH IMPACT ANALYSIS */}
                    {project.id === "01" && (
                        <div className="visual-fade-in">
                            <div className="grid md:grid-cols-12 gap-12 mb-20">
                                <div className="md:col-span-7">
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-6 italic">— Strategic Briefing</h4>
                                    <p className="text-xl md:text-2xl font-light leading-relaxed text-black/70 italic border-l-2 border-black/10 pl-8">
                                        {project.details?.objective}
                                    </p>
                                </div>
                                <div className="md:col-span-5 bg-black/[0.02] p-8 border border-black/5">
                                    <div className="grid grid-cols-1 gap-6 text-left">
                                        {project.details?.stats?.map((s, i) => (
                                            <div key={i} className="flex justify-between items-end border-b border-black/5 pb-2">
                                                <span className="text-[10px] font-bold uppercase tracking-widest opacity-30">{s.label}</span>
                                                <span className="text-2xl font-medium tracking-tighter">{s.val}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-16 mb-24">
                                <div className="text-left">
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-10 italic">— The Consumption Shock</h4>
                                    <div className="space-y-4">
                                        {project.details?.demandMap?.map((d, i) => (
                                            <div key={i} className="flex flex-col gap-1">
                                                <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider">
                                                    <span>{d.sector}</span>
                                                    <span className="opacity-40">{d.share}</span>
                                                </div>
                                                <div className="w-full h-1.5 bg-black/5"><div className="h-full bg-black/80" style={{width: d.share}}></div></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-black text-white p-10 flex flex-col justify-between text-left">
                                    <div>
                                        <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-10 italic text-left text-white/60">Direct Value Creation</h4>
                                        <div className="space-y-6">
                                            {project.details?.valueChain?.map((v, i) => (
                                                <div key={i} className="flex justify-between items-center border-b border-white/10 pb-2">
                                                    <span className="text-xs font-light">{v.sector}</span>
                                                    <span className="font-mono text-sm">$ {v.value} B</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mt-12 flex justify-between items-end">
                                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Total Direct GVA</span>
                                        <span className="text-4xl font-medium tracking-tighter">$ 12.20 B</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-24 pt-16 border-t border-black/5 text-left">
                                <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-12 italic">— Inter-Industry Transmission Map</h4>
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                                    {project.details?.transmission?.map((t, i) => (
                                        <div key={i} className="border-l border-black/10 pl-6">
                                            <p className="text-[9px] font-bold uppercase tracking-widest opacity-30 mb-1">{t.desc}</p>
                                            <p className="text-sm font-bold mb-2 leading-tight">{t.sector}</p>
                                            <p className="text-xl font-medium tracking-tight">$ {t.value} B</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-12 gap-12 pt-16 border-t border-black/5 text-left">
                                <div className="md:col-span-4">
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-8 italic">— Empirical Validation</h4>
                                    <div className="space-y-8">
                                        {project.details?.validation?.map((v, i) => (
                                            <div key={i} className="flex flex-col">
                                                <span className="text-[10px] font-bold uppercase tracking-widest opacity-30">{v.metric}</span>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-2xl font-medium">{v.change}</span>
                                                    <TrendingUp />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="md:col-span-8 bg-[#FDFDFD] p-10 border border-black/5">
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-8 italic">Methodological Anchors</h4>
                                    <div className="space-y-6">
                                        {project.details?.anchors?.map((a, i) => (
                                            <div key={i} className="flex gap-4 items-start">
                                                <span className="font-mono text-xs opacity-20">0{i+1}</span>
                                                <p className="text-sm font-light text-black/60 leading-relaxed">{a}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-12 pt-8 border-t border-black/5">
                                        <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-30">Final Economic Outcome</p>
                                        <p className="text-lg font-medium leading-relaxed uppercase tracking-tight">
                                            $12.2B Direct + $11.3B Supply-Chain Effects → ~$23.5B Impact.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* CASE 04: PRICING OPTIMIZATION (Original Layout) */}
                    {project.id === "04" && (
                        <div className="visual-fade-in text-left">
                            <div className="grid md:grid-cols-12 gap-12 mb-20">
                                <div className="md:col-span-7">
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-6 italic">— Strategic Objective</h4>
                                    <p className="text-xl md:text-2xl font-light leading-relaxed text-black/70 italic border-l-2 border-black/10 pl-8 mb-6 whitespace-pre-line">
                                        {project.details?.objective}
                                    </p>
                                    {project.details?.microPoints && (
                                        <ul className="pl-8 space-y-3">
                                            {project.details.microPoints.map((point, index) => (
                                                <li key={index} className="flex items-center gap-3 text-sm font-light text-black/60 tracking-wide">
                                                    <span className="w-1 h-1 rounded-full bg-black/20"></span>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <div className="md:col-span-5 bg-black/[0.02] p-8 flex flex-col justify-center">
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-6 text-center">Econometric Framework</h4>
                                    <div className="flex flex-col gap-4 items-center">
                                        <div className="w-full text-center py-3 border border-black/5 bg-white text-[10px] font-bold tracking-widest uppercase">Inputs: Market Benchmarks</div>
                                        <ChevronRight className="rotate-90 opacity-20" />
                                        <div className="w-full text-center py-3 border-2 border-black/10 bg-white text-[10px] font-bold tracking-widest uppercase shadow-sm">Process: Elasticity Simulation</div>
                                        <ChevronRight className="rotate-90 opacity-20" />
                                        <div className="w-full text-center py-3 border border-black/5 bg-white text-[10px] font-bold tracking-widest uppercase">Output: Optimized Tax Design</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-24">
                                <div className="flex justify-between items-end mb-12">
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40 italic">— Segmented Demand Response</h4>
                                    <span className="text-[9px] font-mono opacity-20 uppercase tracking-tighter">Fig 01: Multi-Segment Elasticity Map</span>
                                </div>
                                
                                <div className="grid md:grid-cols-3 gap-8">
                                    {project.details?.table?.map((row, i) => (
                                        <div key={i} className="flex flex-col gap-6 p-8 border border-black/5 hover:border-black/10 transition-colors bg-white">
                                            <div className="flex justify-between items-start">
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">{row.type}</span>
                                                <span className={`text-[10px] font-bold px-2 py-1 ${row.val > 0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                                    {row.revenue} Rev
                                                </span>
                                            </div>
                                            <div className="h-32 flex items-end justify-center gap-4 py-2 border-b border-black/5">
                                                <div className="flex flex-col items-center gap-2 w-full">
                                                    <div className="w-full bg-black/5 relative overflow-hidden" style={{height: '100px'}}>
                                                        <div 
                                                            className={`absolute bottom-0 left-0 w-full transition-all duration-1000 delay-300 ${row.val > 0 ? 'bg-black/80' : 'bg-red-400'}`} 
                                                            style={{height: `${Math.abs(row.val) * 8}px`}}
                                                        ></div>
                                                    </div>
                                                    <span className="text-[8px] font-bold uppercase opacity-30">Yield Performance</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-3 mt-2">
                                                <div className="flex justify-between items-center gap-4">
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/30 whitespace-nowrap">Price Sensitivity</span>
                                                    <span className="text-[11px] font-mono text-right text-black/70">{row.elasticity}</span>
                                                </div>
                                                <div className="flex justify-between items-center gap-4">
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/30 whitespace-nowrap">Demand Shift</span>
                                                    <span className="text-[11px] font-mono text-right text-black/70 italic">{row.consumption}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-16 lg:gap-24 mb-20 border-t border-black/5 pt-16">
                                <div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-10 italic">— Market Mechanisms Captured</h4>
                                    <div className="space-y-12">
                                        {project.details?.mechanisms?.map((m, i) => (
                                            <div key={i} className="group text-left">
                                                <div className="flex items-center gap-4 mb-3">
                                                    <span className="font-mono text-xs opacity-10 group-hover:opacity-40 transition-opacity">0{i+1}</span>
                                                    <h5 className="text-xs font-bold uppercase tracking-widest text-black/80">{m.title}</h5>
                                                </div>
                                                <p className="text-sm font-light text-black/50 leading-relaxed pl-10 border-l border-black/5">
                                                    {m.desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col h-full justify-between gap-12">
                                    <div className="bg-black text-white p-10 lg:p-14 flex flex-col justify-center h-full">
                                        <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-10 italic text-white/60">Optimization Insight</h4>
                                        <p className="text-xl font-light italic leading-[1.3] text-white/90">
                                            "{project.details?.insight}"
                                        </p>
                                        <div className="mt-12 flex justify-end">
                                            <Target />
                                        </div>
                                    </div>
                                    <div className="border border-black/10 p-10">
                                        <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-4 italic">Economic Outcome</h4>
                                        <p className="text-sm font-medium leading-relaxed uppercase tracking-tight">
                                            {project.details?.outcome}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            
            <div className="px-16 py-6 border-t border-black/5 bg-[#FDFDFD] flex justify-between items-center">
                <span className="text-[9px] font-bold opacity-20 uppercase tracking-widest">Confidential Briefing • Rohit Rawat Strategic Analysis</span>
                <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-black/5"></div>
                    <div className="w-2 h-2 rounded-full bg-black/10"></div>
                    <div className="w-2 h-2 rounded-full bg-black/20"></div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProjectModal;