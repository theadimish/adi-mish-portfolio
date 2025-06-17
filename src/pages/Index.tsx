import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Phone, Download, Code, User, ArrowDown, ExternalLink, MapPin, Calendar, Sparkles, Zap } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Index = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Aditya Mishra'
      };

      await emailjs.send(
        'service_qbipqhl', // Service ID
        'template_a5724f3', // Template ID
        templateParams,
        'o7Xz40RlITVY-6FCL' // Public Key
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
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
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      url: "https://github.com/theadimish/FoodieAI.git"
    }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
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

      {/* Modern Hero Section */}
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
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-lg p-4 animate-bounce">
                <div className="flex items-center space-x-2">
                  <Code className="w-6 h-6 text-purple-600" />
                  <span className="text-sm font-bold text-gray-800">Developer</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-2xl shadow-lg p-4 animate-bounce" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-2">
                  <Zap className="w-6 h-6" />
                  <span className="text-sm font-bold">Innovator</span>
                </div>
              </div>
              
              <div className="absolute top-10 -right-10 bg-white rounded-xl shadow-lg p-3 animate-bounce" style={{animationDelay: '2s'}}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">5+</div>
                  <div className="text-xs text-gray-600">Projects</div>
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
                  <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                  <p className="text-gray-600">Projects Completed</p>
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
                      <CardDescription className="text-lg font-medium text-purple-600">
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
                    {project.url && project.url !== "#" && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-6 h-6 text-white" />
                      </a>
                    )}
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
                <a href="mailto:adityaoflnpmishra@gmail.com" className="flex items-center space-x-4 hover:text-purple-200 transition-colors">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-purple-200">adityaoflnpmishra@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-purple-200">+91 70111 66165</p>
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
                <a href="https://github.com/theadimish" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/the-aditya-mishra/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:adityaoflnpmishra@gmail.com" className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input 
                      name="firstName"
                      placeholder="First Name" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder-white/70" 
                    />
                    <Input 
                      name="lastName"
                      placeholder="Last Name" 
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder-white/70" 
                    />
                  </div>
                  <Input 
                    name="email"
                    type="email"
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder-white/70" 
                  />
                  <Input 
                    name="subject"
                    placeholder="Subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder-white/70" 
                  />
                  <Textarea 
                    name="message"
                    placeholder="Your message..." 
                    rows={5} 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder-white/70" 
                  />
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
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
            © 2025 Aditya Mishra. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
