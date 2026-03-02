import React from 'react';
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiHtml5, SiGit, SiAmazonwebservices } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 90, icon: SiJavascript, color: '#F7DF1E' },
    { name: 'React', level: 85, icon: SiReact, color: '#61DAFB' },
    { name: 'Node.js', level: 80, icon: SiNodedotjs, color: '#339933' },
    { name: 'Java', level: 75, icon: FaJava, color: '#ED8B00' },
    { name: 'MongoDB', level: 70, icon: SiMongodb, color: '#47A248' },
    { name: 'HTML/CSS', level: 95, icon: SiHtml5, color: '#E34F26' },
    { name: 'Git', level: 85, icon: SiGit, color: '#F05032' },
    { name: 'AWS', level: 65, icon: SiAmazonwebservices, color: '#FF9900' },
  ];

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <skill.icon className="text-2xl mr-2" style={{ color: skill.color }} />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div
                  className="bg-primary-600 dark:bg-primary-400 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
