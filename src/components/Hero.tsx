
import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download, Code, ArrowDown, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-10 animate-fade-in">
          {/* Status Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full text-green-700 text-sm font-medium shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Available for new opportunities
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-6xl lg:text-8xl font-black text-gray-900 leading-none tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent relative">
                Aditya
                <div className="absolute -top-4 -right-4 animate-bounce">
                  <Sparkles className="w-8 h-8 text-yellow-400" />
                </div>
              </span>
            </h1>
            
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-800">
                Tech Builder & Problem Solver
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Passionate Computer Science professional specializing in{" "}
                <span className="font-semibold text-purple-600">Java</span> &{" "}
                <span className="font-semibold text-blue-600">Python</span> development.
                Building innovative solutions that make a difference.
              </p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="mailto:adityaoflnpmishra@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Let's Collaborate
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 pt-4">
            <span className="text-sm text-gray-500 font-medium">Follow me</span>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/theadimish" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-gray-100 rounded-full text-gray-600 hover:text-purple-600 hover:bg-purple-100 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/the-aditya-mishra/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-gray-100 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-100 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:adityaoflnpmishra@gmail.com" 
                className="p-3 bg-gray-100 rounded-full text-gray-600 hover:text-green-600 hover:bg-green-100 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Profile Image Section */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Main Profile Image */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl -rotate-6 opacity-20"></div>
              <img 
                src="https://i.postimg.cc/FKb1zsDy/profile1.png" 
                alt="Aditya Mishra" 
                className="relative w-full h-full object-cover rounded-3xl border-4 border-white shadow-2xl z-10"
              />
            </div>
            
            {/* Floating Elements - Repositioned for better visibility */}
            <div className="absolute -top-8 -left-8 bg-white rounded-2xl shadow-xl p-4 animate-bounce border-2 border-purple-100">
              <div className="flex items-center space-x-2">
                <Code className="w-6 h-6 text-purple-600" />
                <span className="text-sm font-bold text-gray-800">Developer</span>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-2xl shadow-xl p-4 animate-bounce border-2 border-white" style={{animationDelay: '1s'}}>
              <div className="flex items-center space-x-2">
                <Zap className="w-6 h-6" />
                <span className="text-sm font-bold">Java & Python</span>
              </div>
            </div>
            
            <div className="absolute top-8 -right-12 bg-white rounded-xl shadow-xl p-3 animate-bounce border-2 border-blue-100" style={{animationDelay: '2s'}}>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">5+</div>
                <div className="text-xs text-gray-600 font-semibold">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-500">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
