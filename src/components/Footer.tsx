
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 mt-20">
      <div className="absolute inset-0 gradient-bg" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Kishore R</h3>
            <p className="text-white/80">Building the future, one line of code at a time</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="#home" 
              className="text-white/80 hover:text-white transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-white/80 hover:text-white transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-white/80 hover:text-white transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-white/80 hover:text-white transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </a>
          </div>
          
          <div className="border-t border-white/20 pt-8">
            <p className="text-white/60">
              © {currentYear} Kishore. Made with ❤️ and lots of ☕
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </footer>
  );
};

export default Footer;
