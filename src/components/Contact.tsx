import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceID = 'service_mcjfbmj'; // You'll need to set this up
      const templateID = 'template_zfof5ri'; // You'll need to set this up
      const publicKey = '4WM_UZiIKDCdRLeW6'; // You'll need to set this up

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'kishoreramesh302006@gmail.com',
        message: formData.message,
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      setFormData({ name: '', email: '', message: '' });
      toast({
        title: "Message Sent! 🎉",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly at kishoreramesh302006@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/kishore-R45',
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/kishore-r45',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      icon: '📸',
      url: 'https://instagram.com/__kishore._.45__',
      color: 'hover:text-pink-600'
    },
    {
      name: 'Facebook',
      icon: '📘',
      url: 'https://www.facebook.com/share/1CD5UhH4cu/',
      color: 'hover:text-blue-800'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative">
      <div className="absolute inset-0 gradient-bg opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`}>
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className={`glass border-white/20 hover:border-primary/30 transition-all duration-500 ${
            isVisible ? 'animate-slideInLeft' : 'opacity-0 -translate-x-8'
          }`}>
            <CardHeader>
              <CardTitle className="text-2xl">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="glass border-white/20 focus:border-primary/50 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="glass border-white/20 focus:border-primary/50 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="glass border-white/20 focus:border-primary/50 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-bg hover:opacity-90 transition-opacity duration-300"
                  size="lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Sending...
                    </span>
                  ) : (
                    'Send Message 🚀'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social Links */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'animate-slideInRight' : 'opacity-0 translate-x-8'
          }`}>
            {/* Contact Info */}
            <Card className="glass border-white/20 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">📧</div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">kishoreramesh302006@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">📱</div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+91 8807011265</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">📍</div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Chennai,India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass border-white/20 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Follow Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      name: 'GitHub',
                      icon: '🐙',
                      url: 'https://github.com/kishore-R45',
                      color: 'hover:text-gray-800 dark:hover:text-gray-200'
                    },
                    {
                      name: 'LinkedIn',
                      icon: '💼',
                      url: 'https://linkedin.com/in/kishore-r45',
                      color: 'hover:text-blue-600'
                    },
                    {
                      name: 'Instagram',
                      icon: '📸',
                      url: 'https://instagram.com/__kishore._.45__',
                      color: 'hover:text-pink-600'
                    },
                    {
                      name: 'Facebook',
                      icon: '📘',
                      url: 'https://www.facebook.com/share/1CD5UhH4cu/',
                      color: 'hover:text-blue-800'
                    }
                  ].map((social, index) => (
                    <Button
                      key={social.name}
                      variant="ghost"
                      size="lg"
                      onClick={() => window.open(social.url, '_blank')}
                      className={`glass border-white/20 hover:border-primary/30 transition-all duration-300 group ${social.color}`}
                    >
                      <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </span>
                      {social.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Response */}
            <Card className="glass border-white/20 hover:border-primary/30 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
                <h3 className="text-lg font-bold mb-2">Quick Response</h3>
                <p className="text-muted-foreground">
                  I typically respond to messages within 24 hours. Let's build something amazing together!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
