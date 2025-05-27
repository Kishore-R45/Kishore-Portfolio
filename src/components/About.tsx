
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [skillProgress, setSkillProgress] = useState<Record<string, number>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'React', level: 90, color: 'bg-blue-500' },
    { name: 'Node.js', level: 85, color: 'bg-green-500' },
    { name: 'JavaScript', level: 88, color: 'bg-yellow-500' },
    { name: 'HTML/CSS', level: 92, color: 'bg-orange-500' },
    { name: 'MySQL', level: 80, color: 'bg-blue-600' },
    { name: 'PostgreSQL', level: 75, color: 'bg-blue-700' },
    { name: 'Spring Boot', level: 70, color: 'bg-green-600' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars
          setTimeout(() => {
            const newProgress: Record<string, number> = {};
            skills.forEach(skill => {
              newProgress[skill.name] = skill.level;
            });
            setSkillProgress(newProgress);
          }, 500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`}>
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className={`flex justify-center lg:justify-start transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-slideInLeft' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden glass p-2 animate-float group hover:animate-glow cursor-pointer transition-all duration-500">
                <img 
                  src="/image/image.jpg" 
                  alt="Kishore Profile" 
                  className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              
              {/* Add glowing dots */}
              <div className="absolute top-1/4 -right-8 w-3 h-3 bg-purple-400 rounded-full animate-pulse-slow" />
              <div className="absolute bottom-1/4 -left-8 w-3 h-3 bg-blue-400 rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
              <div className="absolute top-1/2 -right-12 w-2 h-2 bg-indigo-400 rounded-full animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>

          {/* About Content */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'animate-slideInRight' : 'opacity-0 translate-x-8'
          }`}>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              Hey! I'm Kishore <span className="ml-2 animate-wave inline-block">👋</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed relative">
              <span className="absolute -left-3 top-0 text-primary text-xl opacity-50"></span>
              I’m a passionate B.Tech Information Technology student with a strong drive for building innovative and impactful web applications. With a solid foundation in modern web technologies, I enjoy crafting user-friendly interfaces and developing robust backend systems.
              <span className="absolute -right-3 bottom-0 text-primary text-xl opacity-50"></span>
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My journey in programming began with curiosity and quickly grew into a deep passion for solving real-world problems through code. I'm a dedicated problem solver with excellent DSA skills, constantly exploring and adapting to emerging technologies. I’ve built numerous projects — both big and small — that reflect my love for practical learning and technical creativity. 
            </p>

            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold mb-4">Skills & Technologies</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2 glassmorphism p-3 rounded-lg border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:shadow-primary/10">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out skill-bar relative`}
                        style={{
                          width: `${skillProgress[skill.name] || 0}%`,
                          transitionDelay: `${index * 200}ms`
                        }}
                      >
                        <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/20 animate-pulse-slow" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/4 right-10 w-40 h-40 rounded-full bg-blue-500/5 animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-purple-500/5 animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
    </section>
  );
};

export default About;
