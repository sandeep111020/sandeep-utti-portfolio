import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechStackCarousel from './components/TechStackCarousel';
import Stats from './components/Stats';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App bg-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <TechStackCarousel />
      <Stats />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;
