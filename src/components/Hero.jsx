
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const floatingElements = [
    { text: "Developer", position: "top-16 left-12", delay: "0s" },
    { text: "5+ Projects", position: "top-32 right-16", delay: "0.5s" },
    { text: "Java & Python", position: "bottom-32 left-8", delay: "1s" },
    { text: "Problem Solver", position: "bottom-16 right-12", delay: "1.5s" }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="container mx-auto">
        <div className="text-center relative">
          {/* Floating Elements */}
          {floatingElements.map((element, index) => (
            <div
              key={index}
              className={`absolute ${element.position} hidden lg:block animate-bounce z-10`}
              style={{ 
                animationDelay: element.delay,
                animationDuration: '3s'
              }}
            >
              <div className="bg-white/95 dark:bg-gray-800/95 px-4 py-2 rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{element.text}</span>
              </div>
            </div>
          ))}

          {/* Profile Image */}
          <div className="mb-8 relative inline-block">
            <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                <span className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200">AM</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Aditya Mishra
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-medium">
            Computer Science Student & Developer
          </p>
          
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions through code, leading projects, and turning ideas into reality with Java, Python, and modern web technologies.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-gray-300 dark:border-gray-600 px-8 py-3 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/theadimish" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a href="https://linkedin.com/in/theadimish" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
              <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </a>
            <a href="mailto:theadimish@gmail.com" className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
              <Mail className="w-6 h-6 text-red-500 dark:text-red-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
