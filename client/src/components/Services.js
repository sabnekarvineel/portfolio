import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive and modern web applications using the latest technologies.',
      icon: '🌐',
    },
    {
      title: 'Front-End Development',
      description: 'Creating interactive and user-friendly interfaces with modern frameworks and libraries.',
      icon: '💻',
    },
    {
      title: 'Backend Development',
      description: 'Developing robust server-side applications and APIs.',
      icon: '⚙️',
    },
  ];

  return (
    <section id="services" className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;