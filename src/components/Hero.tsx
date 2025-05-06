import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto text-center">
          <p className='text-lg mb-3 text-blue-200'>
            👋 Hello, I'm
          </p>
          <h3 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
            Bhuvaneswari Konakanchi
          </h3>
          <div className="text-1xl sm:text-2xl md:text-2xl font-medium mb-6 h-10">
            <span className='text-gray-300'>I'm a Full Stack Developer</span>
          </div>
      </div>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
        I have over 8 years of experience as a Full Stack Developer in the IT industry. Extensively experienced in Software Analysis, Design, Development, Implementation, Testing, and documentation of professional web-based applications
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-gray-200 text-white rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Me
          </a>
        </div>
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown size={24} className="text-gray-600" />
        </a>
      </div>
    </section>
  );
};

export default Hero;