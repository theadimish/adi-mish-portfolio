
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
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600">Technologies and tools I work with</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-purple-700">{skillGroup.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="hover:bg-purple-100 transition-colors">
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
