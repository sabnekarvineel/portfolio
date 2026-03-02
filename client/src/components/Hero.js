import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="section bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 min-h-screen flex items-center">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
      `}</style>
      <div className="container">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-down">
            Hi, I'm <span className="text-primary-600 dark:text-primary-400 animate-pulse-glow">Sabnekar vineel</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-up delay-1">
            Software Developer | Freelancer | Student
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-2">
            Passionate about creating innovative solutions and bringing ideas to life through code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-3">
            <a href="#projects" className="btn btn-primary hover:scale-105 transition-transform duration-300">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary hover:scale-105 transition-transform duration-300">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
