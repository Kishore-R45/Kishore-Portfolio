
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with payment integration, user authentication, and admin dashboard.',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: '🛒',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      techStack: ['React', 'Express', 'Socket.io', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: '📋',
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive charts, and beautiful UI.',
      techStack: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: '🌤️',
    },
    {
      title: 'Blog Platform',
      description: 'A modern blogging platform with markdown support, comment system, and SEO optimization.',
      techStack: ['React', 'Spring Boot', 'MySQL', 'JWT'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: '📝',
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with group messaging, file sharing, and emoji support.',
      techStack: ['React', 'Socket.io', 'Node.js', 'Redis'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: '💬',
    },
    {
      title: 'Portfolio Website',
      description: 'This very portfolio website you\'re viewing, built with modern technologies and animations.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: '🚀',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50 dark:from-purple-950/20 dark:to-blue-950/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`}>
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`}>
            Here are some of the projects I've worked on, showcasing my skills in various technologies
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 glass border-white/20 hover:border-primary/30 overflow-hidden ${
                isVisible 
                  ? 'animate-fadeInUp' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              
              <CardHeader className="text-center relative z-10">
                <div className="text-6xl mb-4 transform group-hover:scale-110 group-hover:animate-float transition-all duration-300">
                  {project.image}
                </div>
                <CardTitle className="group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium transition-all duration-300 hover:bg-primary/20 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-2 relative z-10">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 group-hover:border-primary/50 transition-colors duration-300 flex items-center gap-2"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github size={16} />
                  GitHub
                </Button>
                <Button 
                  size="sm" 
                  className="flex-1 gradient-bg hover:opacity-90 flex items-center gap-2"
                  onClick={() => window.open(project.demo, '_blank')}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </Button>
              </CardFooter>
              
              <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse-slow"></div>
              <div className="absolute -top-2 -left-2 w-24 h-24 bg-blue-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
