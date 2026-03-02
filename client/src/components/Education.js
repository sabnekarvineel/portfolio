import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of computer application',
      school: "Bhavan's Vivekananda College of Science, Humanities & Commerce Sainikpur",
      period: '2023-2026',
      description: 'Pursuing focused studies in computer applications.',
    },
    {
      degree: 'Computer science and engineering',
      school: 'Sri Sri Vocational Jr college',
      period: '2021-2023',
      description: 'Completed vocational studies in computer science and engineering.',
    },
  ];

  return (
    <section id="education" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full mt-1"></div>
                  <div className="ml-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {edu.school}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {edu.period}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
