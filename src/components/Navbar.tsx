
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'education', 'experience', 'leetcode', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'leetcode', label: 'LeetCode' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div 
            className="text-2xl font-bold gradient-text cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            {"< Kishore/R >"}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative overflow-hidden"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="text-xl font-bold gradient-text mb-6">
                    Navigation
                  </div>
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center px-4 py-3 text-left rounded-lg transition-colors duration-200 hover:bg-accent ${
                        activeSection === item.id 
                          ? 'bg-primary/10 text-primary border-l-4 border-primary' 
                          : 'text-foreground/80'
                      }`}
                    >
                      <span className="text-lg font-medium">{item.label}</span>
                    </button>
                  ))}
                  
                  {/* Dark Mode Toggle in Mobile Menu */}
                  <div className="pt-4 border-t border-border">
                    <button
                      onClick={toggleDarkMode}
                      className="flex items-center justify-between w-full px-4 py-3 text-left rounded-lg transition-colors duration-200 hover:bg-accent"
                    >
                      <span className="text-lg font-medium">Theme</span>
                      <div className={`transition-transform duration-300 ${darkMode ? 'rotate-180' : 'rotate-0'}`}>
                        {darkMode ? '☀️' : '🌙'}
                      </div>
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Dark Mode Toggle */}
          <div className="hidden md:block">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="relative overflow-hidden"
            >
              <div className={`transition-transform duration-300 ${darkMode ? 'rotate-180' : 'rotate-0'}`}>
                {darkMode ? '☀️' : '🌙'}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
