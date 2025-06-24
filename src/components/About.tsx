
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { User, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A motivated computer science student with project management experience, seeking a junior role to deliver and grow projects to the next level.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Passionate about utilizing technical knowledge to drive engineering processes, solve complex problems, and lead teams with dedication and innovation.
            </p>
            
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <User className="w-6 h-6 mr-3 text-purple-600 dark:text-purple-400" />
                Education
              </h3>
              <div className="space-y-2">
                <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200">Bachelor of Engineering (B.E.) in Computer Science</h4>
                <p className="text-gray-600 dark:text-gray-400">SJB Institute of Technology, Bengaluru (VTU)</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  2022 – 2026 (Expected)
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">5+</div>
                <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">10+</div>
                <p className="text-gray-600 dark:text-gray-300">Technologies</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow col-span-2 bg-white dark:bg-gray-800">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
                <p className="text-gray-600 dark:text-gray-300">Dedication</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
