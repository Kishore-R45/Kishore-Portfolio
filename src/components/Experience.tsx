
import { useEffect, useRef, useState } from 'react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: 'Java Fullstack Developer Intern',
      company: 'Zidio Development.',
      duration: 'Jan 2025 - Apr 2025',
      type: 'Internship',
      description: 'Developed amazing projects using Spring frameworks and React JS.',
      achievements: [
        'Built a Expense tracker management with excellent features',
        'Improved application performance by 25% through code optimization',
        'Collaborated with senior developers on feature implementation'
      ],
      icon: '💼',
      color: 'bg-blue-500'
    }
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
    <section id="experience" ref={sectionRef} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`}>
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`}>
            Professional experiences, internships, and achievements that have shaped my journey
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`mb-12 transition-all duration-1000 ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="glass p-8 rounded-lg border-white/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className={`w-12 h-12 ${exp.color} rounded-lg flex items-center justify-center text-white text-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground font-medium">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:items-end">
                    <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full mb-2">
                      {exp.duration}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      exp.type === 'Internship' ? 'bg-blue-500/10 text-blue-500' :
                      exp.type === 'Competition' ? 'bg-yellow-500/10 text-yellow-500' :
                      exp.type === 'Freelance' ? 'bg-green-500/10 text-green-500' :
                      'bg-purple-500/10 text-purple-500'
                    }`}>
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="flex items-start text-muted-foreground"
                      >
                        <span className="text-primary mr-3 mt-0.5">▸</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
