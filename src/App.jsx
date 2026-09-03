import React from 'react';
import { ToastProvider } from './context/ToastContext';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { PlatformsCarousel } from './components/PlatformsCarousel';
import { Services } from './sections/Services';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Education } from './sections/Education';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

export function App() {
  return (
    <ToastProvider>
      <div className="min-h-screen text-slate-100 font-sans selection:bg-[#105ebd] selection:text-white relative">
        {/* Subtle overlay grid texture */}
        <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:36px_36px] opacity-40" />

        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <PlatformsCarousel />
            <Services />
            <Experience />
            <Skills />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ToastProvider>
  );
}

export default App;

