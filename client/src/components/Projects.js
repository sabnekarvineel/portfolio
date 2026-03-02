import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Fondora-x  - Unified collaboration platform',
      description: 'A full-stack  solution with React, Node.js, and MongoDB.',
      image: 'https://res.cloudinary.com/dqpxq0ljn/image/upload/v1772464215/1a3f83f8-6058-46fc-b87f-384fa061ded4_wzxpxs.jpg',
      tech: ['React', 'Node.js', 'MongoDB', 'Cloudinary'],
      liveLink: 'https://fondora-x.vercel.app',
      githubLink: 'https://github.com/sabnekarvineel/Fondora-X',
    },
    {
      title: 'EventzNeventz - Event Management System',
      description: 'A collaborative task management tool with real-time updates change according to events',
      image: 'https://res.cloudinary.com/dqpxq0ljn/image/upload/v1772464708/428d5d28-8c73-4891-b4ca-15a03ac20396_qzfuol.jpg',
      tech: ['React', 'Express', 'Tailwind CSS', 'EmailJS'],
      liveLink: 'https://eventzneventz.com',
      githubLink: 'https://github.com/sabnekarvineel/eventzNeventz',
    },
    {
      title: 'Lost and Found - Have you lost or found something?',
      description: 'Navgating the lost or found items around the campus.',
      image: 'https://res.cloudinary.com/dqpxq0ljn/image/upload/v1772465745/Gold_Simple_Fashion_Store_Logo_v8b2zk.jpg',
      tech: ['JavaScript', 'API', 'CSS', 'react'],
      liveLink: 'https://lost-and-found-delta-six.vercel.app',
      githubLink: 'https://github.com/sabnekarvineel/lost-and-found',
    },
     {
      title: 'Dekho Duniya - Explore the UnExplored',
      description: 'A platform to explore and share experiences of unexplored places.',
      image: 'https://res.cloudinary.com/dqpxq0ljn/image/upload/v1772470703/Cream_and_Orange_Creative_Mily_Art_Gallery_Logo_u245jz.png',
      tech: ['JavaScript', 'API', 'CSS', 'react'],
      liveLink: 'https://dekho-duniya.vercel.app',
      githubLink: 'https://github.com/sabnekarvineel/Dekho-Duniya',
    },
  ];

  return (
    <section id="projects" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    className="flex-1 btn btn-primary text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex-1 btn btn-secondary text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
