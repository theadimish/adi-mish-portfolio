
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Project Intern",
      company: "Oasis Infobyte",
      description: "Completed 5 Java development tasks and gained hands-on experience in designing and testing Java applications",
      period: "2024",
      url: "https://oasisinfobyte.com/validation/validated.html"
    },
    {
      title: "Project Coordinator",
      company: "Young Mind Creations Technologies Pvt. Ltd.",
      description: "Managed team execution for a confidential mobile app project and enhanced Android app development skills",
      period: "2024"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">My professional journey and achievements</p>
        </div>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-white dark:bg-gray-900">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-purple-600 dark:text-purple-400">
                      {exp.url ? (
                        <a 
                          href={exp.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:underline flex items-center gap-1"
                        >
                          {exp.company}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        exp.company
                      )}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">{exp.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
