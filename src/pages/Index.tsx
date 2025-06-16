
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Phone, Download, Code, User, ArrowDown, ExternalLink, MapPin, Calendar } from 'lucide-react';

const Index = () => {
  const skills = [
    { category: "Languages", items: ["Java", "Python", "C"] },
    { category: "Technologies", items: ["GitHub", "VS Code", "Eclipse", "PyCharm"] },
    { category: "Web Dev", items: ["HTML", "CSS", "JavaScript", "React", "Node.js"] },
    { category: "Databases", items: ["MySQL"] },
    { category: "Tools", items: ["Android Studio", "Sublime Text", "QT Designer", "MS Office"] },
    { category: "Fundamentals", items: ["DSA", "DBMS", "Artificial Intelligence"] },
    { category: "Soft Skills", items: ["Problem Solving", "Organizing", "Time Management"] }
  ];

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

  const projects = [
    {
      title: "TIMI – AI Assistant",
      description: "Built to automate PC tasks like file handling, music control, shutdown.",
      tech: ["Python", "QT Designer"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop"
    },
    {
      title: "Train Ticket Booking System",
      description: "GUI-based system for booking train tickets and calculating charges.",
      tech: ["Java", "Swing GUI"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop"
    },
    {
      title: "Foodie AI",
      description: "AI-powered system for detecting food and analyzing macros (calories, protein, fat).",
      tech: ["React.js", "Node.js", "Flask", "OpenCV", "NumPy", "Render"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop"
    }
  ];

  const experiences = [
    {
      title: "Project Intern",
      company: "Oasis Infobyte",
      description: "Completed 5 Java development tasks and gained hands-on experience in designing and testing Java applications",
      period: "2024"
    },
    {
      title: "Project Coordinator",
      company: "Young Mind Creations Technologies Pvt. Ltd.",
      description: "Managed team execution for a confidential mobile app project and enhanced Android app development skills",
      period: "2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Aditya Mishra
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
              <a href="#experience" className="text-gray-700 hover:text-purple-600 transition-colors">Experience</a>
              <a href="#skills" className="text-gray-700 hover:text-purple-600 transition-colors">Skills</a>
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Services</a>
              <a href="#projects" className="text-gray-700 hover:text-purple-600 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                👋 Hello, I'm
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Aditya 
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Mishra</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 font-medium">
                Tech Builder in Java & Python | CSE Professional
              </p>
              <p className="text-lg text-gray-500 max-w-xl">
                "Passionate about building tech that solves problems."
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </Button>
              <Button size="lg" variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                View Portfolio
              </Button>
              <Button size="lg" variant="outline" className="border-orange-200 text-orange-700 hover:bg-orange-50">
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </div>

            <div className="flex space-x-6 pt-8">
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 mx-auto w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                alt="Aditya Mishra" 
                className="absolute inset-8 w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
              />
            </div>
            <div className="absolute top-10 right-10 bg-white rounded-lg shadow-lg p-4 animate-bounce">
              <Code className="w-8 h-8 text-purple-600" />
            </div>
            <div className="absolute bottom-10 left-10 bg-orange-500 text-white rounded-lg shadow-lg p-3 animate-bounce" style={{animationDelay: '1s'}}>
              <span className="text-sm font-bold">Java & Python</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A motivated computer science student with project management experience, seeking a junior role to deliver and grow projects to the next level.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Passionate about utilizing technical knowledge to drive engineering processes, solve complex problems, and lead teams with dedication and innovation.
              </p>
              
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <User className="w-6 h-6 mr-3 text-purple-600" />
                  Education
                </h3>
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg text-gray-800">Bachelor of Engineering (B.E.) in Computer Science</h4>
                  <p className="text-gray-600">SJB Institute of Technology, Bengaluru (VTU)</p>
                  <p className="text-sm text-gray-500 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    2022 – 2026 (Expected)
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <p className="text-gray-600">Projects Completed</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
                  <p className="text-gray-600">Years Experience</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
                  <p className="text-gray-600">Technologies</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <p className="text-gray-600">Dedication</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Experience</h2>
            <p className="text-xl text-gray-600">My professional journey and achievements</p>
          </div>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-900">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-purple-600">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="secondary">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
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

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Services</h2>
            <p className="text-xl text-gray-600">What I can help you with</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <CardHeader>
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Some of my recent work</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-purple-200">Ready to start your next project?</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-purple-200">aditya.mishra@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-purple-200">+91 XXXXX XXXXX</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-600 p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-purple-200">Bengaluru, India</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 pt-8">
                <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="bg-white/10 border-white/20 text-white placeholder-white/70" />
                  <Input placeholder="Last Name" className="bg-white/10 border-white/20 text-white placeholder-white/70" />
                </div>
                <Input placeholder="Email" className="bg-white/10 border-white/20 text-white placeholder-white/70" />
                <Input placeholder="Subject" className="bg-white/10 border-white/20 text-white placeholder-white/70" />
                <Textarea placeholder="Your message..." rows={5} className="bg-white/10 border-white/20 text-white placeholder-white/70" />
                <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-lg font-medium mb-2">
            "Code with purpose. Build with passion."
          </p>
          <p className="text-gray-400">
            © 2024 Aditya Mishra. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
