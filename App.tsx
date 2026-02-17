import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WorkShowcase from './components/WorkShowcase';
import About from './components/About';
import Experience from './components/Experience';
import CreativePerspective from './components/CreativePerspective';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#1A1A1A] font-sans selection:bg-black selection:text-white transition-colors duration-500">
      <Navigation />
      <Hero />
      <WorkShowcase />
      <About />
      <Experience />
      <CreativePerspective />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;