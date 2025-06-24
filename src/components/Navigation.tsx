
import React, { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ scrollToSection }) => {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg z-50 border-b border-gray-200/50 dark:border-gray-700/50">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Aditya Mishra
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 font-medium hover:scale-105 text-sm xl:text-base"
              >
                {item.label}
              </button>
            ))}
            
            {/* Theme Toggle */}
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
              <Sun className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-purple-600"
              />
              <Moon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Mobile Theme Toggle */}
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-purple-600"
              />
              <Moon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </div>
            
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => handleNavClick(item.id)} 
                  className="text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium py-2 px-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
