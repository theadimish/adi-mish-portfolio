import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "TIMI – AI Assistant",
      description: "Built to automate PC tasks like file handling, music control, shutdown.",
      tech: ["Python", "QT Designer"],
      image: "https://i.postimg.cc/4dKhxVNj/TiMi.png",
      url: "https://github.com/theadimish/TiMi.git"
    },
    {
      title: "Train Ticket Booking System", 
      description: "GUI-based system for booking train tickets and calculating charges.",
      tech: ["Java", "Swing GUI"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      url: "https://github.com/theadimish/TrainBookingSoftware.git"
    },
    {
      title: "Foodie AI",
      description: "AI-powered system for detecting food and analyzing macros (calories, protein, fat).",
      tech: ["React.js", "Node.js", "Flask", "OpenCV", "NumPy", "Render"],
      image: "https://i.postimg.cc/tTmwhQbY/Foodie-AI.png",
      url: "https://github.com/theadimish/FoodieAI.git"
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">Some of my recent work</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                  {project.url && project.url !== "#" && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </a>
                  )}
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg sm:text-xl text-gray-900 dark:text-white">{project.title}</CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                      {tech}
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

export default Projects;
