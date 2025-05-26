
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phrases = ['Programmer', 'Developer', 'Problem solver','Video editor','UI/UX designer'];
  const typingSpeed = 100; // milliseconds per character
  const deletingSpeed = 50; // milliseconds per character
  const pauseTime = 1000; // pause time after typing a phrase
  const isDeleting = useRef(false);
  const charIndex = useRef(0);

  useEffect(() => {
    let timer;
    
    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (!isDeleting.current) {
        setTypedText(currentPhrase.substring(0, charIndex.current + 1));
        charIndex.current++;
        
        if (charIndex.current >= currentPhrase.length) {
          isDeleting.current = true;
          timer = setTimeout(type, pauseTime);
          return;
        }
      } else {
        setTypedText(currentPhrase.substring(0, charIndex.current));
        charIndex.current--;
        
        if (charIndex.current < 0) {
          isDeleting.current = false;
          setCurrentPhraseIndex((prevIndex) => 
            (prevIndex + 1) % phrases.length
          );
          charIndex.current = 0;
        }
      }
      
      timer = setTimeout(type, isDeleting.current ? deletingSpeed : typingSpeed);
    };
    
    timer = setTimeout(type, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [currentPhraseIndex]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = 'Kishore Resume.pdf'; // You'll need to add your resume.pdf to the public folder
    link.download = 'Kishore_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-5" />
      
      <div className="container mx-auto px-4 text-center z-10">
        <div className="animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="gradient-text animate-pulse-slow">Kishore</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            <span className="inline-block">👨‍💻</span> | <span className="gradient-text">{typedText}</span>
            <span className="animate-blink ml-1">|</span>
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Building amazing web applications with modern technologies and problem solver
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={scrollToAbout}
              className="gradient-bg hover:opacity-90 transition-opacity duration-300 px-8 py-3 text-lg animate-float"
            >
              Explore My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={downloadResume}
              className="px-8 py-3 text-lg glass border-white/20 hover:bg-white/10 group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Check Resume
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 text-lg glass border-white/20 hover:bg-white/10"
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-400/10 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-blue-400/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-400/10 rounded-full animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Hero;
