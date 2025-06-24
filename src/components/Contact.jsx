
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Let's discuss your next project</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  <span className="text-gray-700 dark:text-gray-300">theadimish@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  <span className="text-gray-700 dark:text-gray-300">Bengaluru, India</span>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-white dark:bg-gray-900">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 dark:text-white">Send Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Your Name" className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600" />
              <Input placeholder="Your Email" type="email" className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600" />
              <Input placeholder="Subject" className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600" />
              <Textarea placeholder="Your Message" rows={5} className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600" />
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
