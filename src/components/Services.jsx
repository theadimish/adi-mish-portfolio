
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Frontend (HTML, CSS, JS, React) & Backend (Node.js) development",
      icon: "🌐"
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces",
      icon: "🎨"
    },
    {
      title: "Python Services",
      description: "ML & AI, Web Dev, Desktop App development with Qt Designer",
      icon: "🐍"
    },
    {
      title: "Java Services",
      description: "Web App Dev, Android App Dev, Desktop GUI with Java Swing",
      icon: "☕"
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">What I can help you with</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800">
              <CardHeader>
                <div className="text-6xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-gray-900 dark:text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
