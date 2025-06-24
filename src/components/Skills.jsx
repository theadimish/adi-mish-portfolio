
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = [
    { category: "Languages", items: ["Java", "Python", "C"] },
    { category: "Technologies", items: ["GitHub", "VS Code", "Eclipse", "PyCharm"] },
    { category: "Web Dev", items: ["HTML", "CSS", "JavaScript", "React", "Node.js"] },
    { category: "Databases", items: ["MySQL"] },
    { category: "Tools", items: ["Android Studio", "Sublime Text", "QT Designer", "MS Office"] },
    { category: "Fundamentals", items: ["DSA", "DBMS", "Artificial Intelligence"] },
    { category: "Soft Skills", items: ["Problem Solving", "Organizing", "Time Management"] }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Technologies and tools I work with</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-lg text-purple-700 dark:text-purple-400">{skillGroup.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
