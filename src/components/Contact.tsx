
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Phone, MapPin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
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

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-purple-900 to-blue-900 dark:from-purple-950 dark:to-blue-950 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg sm:text-xl text-purple-200 dark:text-purple-300">Ready to start your next project?</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Get in Touch</h3>
            
            <div className="space-y-4">
              <a href="mailto:adityaoflnpmishra@gmail.com" className="flex items-center space-x-4 hover:text-purple-200 dark:hover:text-purple-300 transition-colors">
                <div className="bg-purple-600 dark:bg-purple-700 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-sm sm:text-base">Email</p>
                  <p className="text-purple-200 dark:text-purple-300 text-sm sm:text-base break-all">adityaoflnpmishra@gmail.com</p>
                </div>
              </a>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 dark:bg-blue-700 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="font-medium text-sm sm:text-base">Phone</p>
                  <p className="text-purple-200 dark:text-purple-300 text-sm sm:text-base">+91 70111 66165</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-orange-600 dark:bg-orange-700 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="font-medium text-sm sm:text-base">Location</p>
                  <p className="text-purple-200 dark:text-purple-300 text-sm sm:text-base">Bengaluru, India</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3 sm:space-x-4 pt-6 sm:pt-8">
              <a href="https://github.com/theadimish" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-lg transition-colors">
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://www.linkedin.com/in/the-aditya-mishra/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="mailto:adityaoflnpmishra@gmail.com" className="bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-lg transition-colors">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
          
          <Card className="bg-white/10 dark:bg-white/5 backdrop-blur-md border-white/20 dark:border-white/10 order-1 lg:order-2">
            <CardHeader className="pb-4">
              <CardTitle className="text-white text-lg sm:text-xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input 
                    name="firstName"
                    placeholder="First Name" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 dark:bg-white/5 border-white/20 dark:border-white/10 text-white placeholder-white/70 text-sm sm:text-base" 
                  />
                  <Input 
                    name="lastName"
                    placeholder="Last Name" 
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 dark:bg-white/5 border-white/20 dark:border-white/10 text-white placeholder-white/70 text-sm sm:text-base" 
                  />
                </div>
                <Input 
                  name="email"
                  type="email"
                  placeholder="Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-white/10 dark:bg-white/5 border-white/20 dark:border-white/10 text-white placeholder-white/70 text-sm sm:text-base" 
                />
                <Input 
                  name="subject"
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-white/10 dark:bg-white/5 border-white/20 dark:border-white/10 text-white placeholder-white/70 text-sm sm:text-base" 
                />
                <Textarea 
                  name="message"
                  placeholder="Your message..." 
                  rows={4} 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="bg-white/10 dark:bg-white/5 border-white/20 dark:border-white/10 text-white placeholder-white/70 text-sm sm:text-base resize-none" 
                />
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold text-sm sm:text-base py-2 sm:py-3"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
