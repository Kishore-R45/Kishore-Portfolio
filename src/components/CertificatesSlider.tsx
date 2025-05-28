import { useState, useEffect, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const CertificatesSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [api, setApi] = useState<any>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  // Certificate data - using your actual certificate images [ ]
  const certificates = [
    {
      id: 1,
      title: "Oracle Java Certification",
      image: "/Ceritificate-Portfolio/Oracle-Java.png"
    },
    {
      id: 2,
      title: "HackerRank Java",
      image: "/Ceritificate-Portfolio/Hackerrank-Java.jpg"
    },
    {
      id: 3,
      title: "HackerRank Problem Solving",
      image: "/Ceritificate-Portfolio/Hackerrank-ProblemSolving.png"
    },
    {
      id: 4,
      title: "MongoDB Certification",
      image: "/Ceritificate-Portfolio/MongoDB.png"
    },
    {
      id: 5,
      title: "NPTEL Competitive Programming",
      image: "/Ceritificate-Portfolio/NPTEL-CompetetiveProgramming.jpg"
    },
    {
      id: 6,
      title: "NPTEL Education",
      image: "/Ceritificate-Portfolio/NPTEL-Education.png"
    },
    {
      id: 7,
      title: "NPTEL Entrepreneurship",
      image: "/Ceritificate-Portfolio/NPTEL-Entrepernarship.jpg"
    },
    {
      id: 8,
      title: "NPTEL Introduction to IOT",
      image: "/Ceritificate-Portfolio/NPTEL-Introduction_to_IOT.jpg"
    },
    {
      id: 9,
      title: "Flipkart Certification",
      image: "/Ceritificate-Portfolio/Flipkart.jpg"
    },
    {
      id: 10,
      title: "Zidio Training",
      image: "/Ceritificate-Portfolio/Zidio-Training.jpg"
    },
    
    {
      id: 11,
      title: "Cloud Computing (Infosys)",
      image: "/Ceritificate-Portfolio/Cloud_computing(Infosis).jpg"
    },
    {
      id: 12,
      title: "Coursera Cloud SaaS",
      image: "/Ceritificate-Portfolio/Coursera-Cloud(SaaS).png"
    },
    
    {
      id: 13,
      title: "Data Science (Infosys)",
      image: "/Ceritificate-Portfolio/Datascience(Infosis).jpg"
    },
    {
      id: 14,
      title: "Microsoft AI Certification",
      image: "/Ceritificate-Portfolio/Microsoft-AI.jpg"
    },
    {
      id: 15,
      title: "Figma Design (Crescent)",
      image: "/Ceritificate-Portfolio/Creasent-Figma.jpg"
    },
    {
      id: 16,
      title: "Sector Training (Crescent)",
      image: "/Ceritificate-Portfolio/Creasent-Sector.jpg"
    },
    {
      id: 17,
      title: "National Level Quiz",
      image: "/Ceritificate-Portfolio/NationalLevel-Quiz.jpg"
    },
    {
      id: 18,
      title: "HTML Global Logic",
      image: "/Ceritificate-Portfolio/HTML-GL.jpg"
    },
    {
      id: 19,
      title: "RBI Quiz Competition",
      image: "/Ceritificate-Portfolio/RBI-Quiz.jpg"
    },
    {
      id: 20,
      title: "Be10X Certification",
      image: "/Ceritificate-Portfolio/Be10X.jpg"
    }
    
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!api) return;

    const startAutoScroll = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
      
      autoScrollRef.current = setInterval(() => {
        if (!isHovered) {
          api.scrollNext();
        }
      }, 3000); // Auto-scroll every 3 seconds
    };

    startAutoScroll();

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [api, isHovered]);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsHovered(false);
  };

  return (
    <div className="mt-16">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold mb-4">
          <span className="gradient-text">Certifications</span>
        </h3>
        <p className="text-muted-foreground">
          Professional certifications and achievements
        </p>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
      </div>

      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {certificates.map((certificate, index) => (
            <CarouselItem key={certificate.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div 
                className="relative group cursor-pointer transform transition-all duration-500"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                  zIndex: hoveredIndex === index ? 10 : 1
                }}
              >
                <div className="overflow-hidden rounded-lg border border-white/20 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/20">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        hoveredIndex === index ? 'scale-110' : 'scale-100'
                      }`}
                      onError={(e) => {
                        console.log(`Failed to load image: ${certificate.image}`);
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-lg mb-1 text-center">{certificate.title}</h4>
                  </div>
                </div>
                
                {/* Enhanced overlay effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-lg transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="glass border-white/20 hover:border-primary/30" />
        <CarouselNext className="glass border-white/20 hover:border-primary/30" />
      </Carousel>

      {/* Auto-scroll indicator */}
      <div className="text-center mt-4">
        <p className="text-xs text-muted-foreground">
          {isHovered ? '⏸️ Paused' : '▶️ Auto-scrolling'} • Hover to pause
        </p>
      </div>
    </div>
  );
};

export default CertificatesSlider;
