import React from 'react';
import { 
  Code2, 
  Database, 
  Server, 
  Layout, 
  PenTool, 
  RefreshCw,  
  Cloud,
  TestTube,
  Github,
  Terminal,
  LineChart,
  Workflow,
  Lock,
  
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
}

interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: Layout,
      skills: [
        { name: 'HTML/CSS', icon: Code2, color: 'text-orange-500' },
        { name: 'JavaScript', icon: Code2, color: 'text-yellow-500' },
        { name: 'React', icon: Code2, color: 'text-blue-400' },
        { name: 'TypeScript', icon: Code2, color: 'text-blue-600' },
        { name: 'Angular', icon: Code2, color: 'text-black' },
        { name: 'Tailwind CSS', icon: PenTool, color: 'text-cyan-500' },
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: 'java', icon: Server, color: 'text-green-500' },
        { name: 'SpringBoot', icon: Server, color: 'text-gray-500' },
        { name: 'Node.js', icon: Server, color: 'text-yellow-600' },
        { name: 'MYSQL', icon: Database, color: 'text-green-700' },
        { name: 'PostgreSQL', icon: Database, color: 'text-blue-700' },
        { name: 'MongoDB', icon: Database, color: 'text-green-600' },
        { name: 'API Design', icon: RefreshCw, color: 'text-blue-500' },
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Workflow,
      skills: [
        { name: 'Git/GitHub', icon: Github, color: 'text-gray-700' },
        { name: 'Docker', icon: Cloud, color: 'text-blue-500' },
        { name: 'CI/CD', icon: RefreshCw, color: 'text-green-500' },
        { name: 'Testing', icon: TestTube, color: 'text-red-500' },
        { name: 'AWS', icon: Cloud, color: 'text-orange-500' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <category.icon size={24} className="mr-2 text-blue-400" />
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <div 
                      key={skillIndex} 
                      className="flex flex-col items-center bg-gray-200 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <div className='p-3 rounded-full mb-4 bg-gray-900'>
                        <Icon size={28} className={skill.color} />
                      </div>
                      <span className="text-gray-700 font-medium text-center">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;