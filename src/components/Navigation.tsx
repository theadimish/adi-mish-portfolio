
import React from 'react';

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ scrollToSection }) => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b border-gray-200/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Aditya Mishra
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium hover:scale-105">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium hover:scale-105">About</button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium hover:scale-105">Experience</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium hover:scale-105">Skills</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium hover:scale-105">Services</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium hover:scale-105">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium hover:scale-105">Contact</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
