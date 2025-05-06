import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Achievements } from './components/Achievements';

function App() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <footer className="bg-gray-600 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Bhuvaneswari. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;