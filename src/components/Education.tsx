
import { useEffect, useRef, useState } from 'react';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const education = [
    {
      degree: 'B.Tech Information Technology',
      institution: 'Easwari Engineering College, Chennai',
      duration: '2023 - 2027',
      description: 'Pursuing Bachelor of Technology with focus on software development, database management, and web technologies.',
      status: 'current',
      icon: '🎓',
    },
    {
      degree: 'Higher Secondary (12th)',
      institution: 'NS Boys Higher Secondary School, Theni',
      duration: '2021 - 2023',
      description: 'Completed higher secondary education with specialization in Science (PCM) with excellent academic performance.',
      status: 'completed',
      icon: '📚',
    },
    {
      degree: 'Secondary (10th)',
      institution: 'NS Boys Higher Secondary School, Theni', 
      duration: '2011 - 2021',
      description: 'Completed secondary education with excellent academic performance.',
      status: 'completed',
      icon: '🏫',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section id="education" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`}>
            My <span className="gradient-text">Education</span>
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`}>
            My academic journey and continuous learning path
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-blue-500 transform md:-translate-x-1/2" />

            {education.map((item, index) => (
              <div
                key={item.degree}
                className={`relative flex items-center mb-12 transition-all duration-1000 ${
                  isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 z-10 animate-pulse" />
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} md:w-1/2`}>
                  <div className="glass p-6 rounded-lg border-white/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                    <div className="flex items-center mb-3">
                      <span className="text-3xl mr-3 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-primary">{item.degree}</h3>
                        <p className="text-muted-foreground font-medium">{item.institution}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-3">
                      <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {item.duration}
                      </span>
                      {item.status === 'current' && (
                        <span className="ml-2 text-xs bg-green-500/10 text-green-500 px-2 py-1 rounded-full animate-pulse">
                          Current
                        </span>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
