
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { User, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            A motivated computer science student with project management experience, seeking a junior role to deliver and grow projects to the next level.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Passionate about utilizing technical knowledge to drive engineering processes, solve complex problems, and lead teams with dedication and innovation.
            </p>
            
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <User className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-purple-600 dark:text-purple-400" />
                Education
              </h3>
              <div className="space-y-2">
                <h4 className="font-semibold text-base sm:text-lg text-gray-800 dark:text-gray-200">Bachelor of Engineering (B.E.) in Computer Science</h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">SJB Institute of Technology, Bengaluru (VTU)</p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex items-center">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  2022 – 2026 (Expected)
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2">
            <Card className="text-center p-4 sm:p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
              <CardContent className="pt-4 sm:pt-6">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">5+</div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Projects Completed</p>
              </CardContent>
            </Card>
            <Card className="text-center p-4 sm:p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
              <CardContent className="pt-4 sm:pt-6">
                <div className="text-2xl sm:text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">10+</div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Technologies</p>
              </CardContent>
            </Card>
            <Card className="text-center p-4 sm:p-6 hover:shadow-lg transition-shadow col-span-2 bg-white dark:bg-gray-800">
              <CardContent className="pt-4 sm:pt-6">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Dedication</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
