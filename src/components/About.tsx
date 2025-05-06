import React from 'react';


const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="graduation3.png"
              alt="Profile"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate Full Stack Developer with expertise in both frontend and backend technologies.
              With a strong foundation in React, JavaScript, and Java Spring Boot, I create robust and
              scalable web applications that deliver exceptional user experiences.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              My journey in software development started with a deep curiosity for building things from
              scratch. Today, I combine my technical skills with creative problem-solving to develop
              solutions that make a real impact.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="Resume.docx"
                className="px-6 py-2 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;