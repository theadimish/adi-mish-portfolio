
import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download, Code, ArrowDown, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-yellow-200 dark:bg-yellow-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-4 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-pink-200 dark:bg-pink-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
        <div className="space-y-6 sm:space-y-8 lg:space-y-10 animate-fade-in order-2 lg:order-1">
          {/* Status Badge */}
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900 border border-green-200 dark:border-green-700 rounded-full text-green-700 dark:text-green-300 text-xs sm:text-sm font-medium shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="hidden sm:inline">Available for new opportunities</span>
            <span className="sm:hidden">Available</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 dark:text-white leading-none tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent relative block sm:inline">
                Aditya
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 animate-bounce">
                  <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-yellow-400" />
                </div>
              </span>
            </h1>
            
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200">
                Tech Builder & Problem Solver
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                Passionate Computer Science professional specializing in{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">Java</span> &{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">Python</span> development.
                Building innovative solutions that make a difference.
              </p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              asChild
            >
              <a href="mailto:adityaoflnpmishra@gmail.com">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Let's Collaborate
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 pt-4">
            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">Follow me</span>
            <div className="flex space-x-3 sm:space-x-4">
              <a 
                href="https://github.com/theadimish" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 sm:p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/the-aditya-mishra/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 sm:p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="mailto:adityaoflnpmishra@gmail.com" 
                className="p-2 sm:p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-100 dark:hover:bg-green-900 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Profile Image Section */}
        <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative">
            {/* Main Profile Image */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl -rotate-6 opacity-20"></div>
              <img 
                src="https://i.postimg.cc/FKb1zsDy/profile1.png" 
                alt="Aditya Mishra" 
                className="relative w-full h-full object-cover rounded-3xl border-4 border-white dark:border-gray-700 shadow-2xl z-10"
              />
            </div>
            
            {/* Floating Elements - Hidden on mobile */}
            <div className="hidden sm:block absolute -top-4 sm:-top-6 -left-4 sm:-left-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-3 sm:p-4 animate-bounce border-2 border-purple-100 dark:border-purple-700">
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" />
                <span className="text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200">Developer</span>
              </div>
            </div>
            
            <div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-2xl shadow-xl p-3 sm:p-4 animate-bounce border-2 border-white dark:border-gray-700" style={{animationDelay: '1s'}}>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 sm:w-6 sm:h-6" />
                <span className="text-xs sm:text-sm font-bold">Java & Python</span>
              </div>
            </div>
            
            <div className="hidden sm:block absolute top-4 sm:top-6 -right-8 sm:-right-10 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-2 sm:p-3 animate-bounce border-2 border-blue-100 dark:border-blue-700" style={{animationDelay: '2s'}}>
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-purple-600 dark:text-purple-400">5+</div>
                <div className="text-xs text-gray-600 dark:text-gray-300 font-semibold">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Scroll to explore</span>
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 dark:text-gray-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
