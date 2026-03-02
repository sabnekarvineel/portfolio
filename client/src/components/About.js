import React from 'react';

const About = () => {
  return (
    <section id="about" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://res.cloudinary.com/dqpxq0ljn/image/upload/v1763642334/techconhub/rtdwykzkn5imdn3jvezn.jpg"
                alt="Sabnekar Vineel"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                I'm a passionate software developer with expertise in full-stack development.
                I love creating innovative solutions and bringing ideas to life through clean,
                efficient code. With experience in various technologies, I strive to deliver
                high-quality products that meet user needs and exceed expectations.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing
                to open-source projects, or sharing knowledge with the developer community.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
