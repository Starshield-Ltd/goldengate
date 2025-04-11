import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import ImageWithLoader from './ImageWithLoader';
import { Brain, Lightbulb, Bot, Sparkles, Code, BookOpen, Rocket } from 'lucide-react';

const AIInEducation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '100px',
        threshold: 0.05,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="ai-education"
      ref={sectionRef}
      className="section-padding relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-school-blue/10 to-transparent"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-school-yellow/10"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 rounded-full bg-school-blue/10"></div>
        <div className="absolute top-1/3 left-1/4 w-24 h-24 rounded-full bg-school-yellow/10"></div>

        {/* AI-themed decorative elements */}
        <svg className="absolute top-1/4 right-1/4 w-64 h-64 text-school-blue/5" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 3" />
          <path d="M30,50 L70,50 M50,30 L50,70" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.2" />
        </svg>

        <svg className="absolute bottom-1/4 left-1/3 w-48 h-48 text-school-yellow/5" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" rx="10" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M35,50 L65,50 M50,35 L50,65" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="content-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className={cn(
            "text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-school-blue to-school-yellow bg-clip-text text-transparent drop-shadow-md transition-all duration-500",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            AI-Powered Education
          </h2>
          <div className={cn(
            "h-1 w-24 bg-gradient-to-r from-school-blue to-school-yellow mx-auto mb-8 rounded-full shadow-md transition-all duration-500 delay-100",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          )}></div>
          <p className={cn(
            "text-xl text-gray-700 leading-relaxed transition-all duration-500 delay-200",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            At Golden Gate Int. School, we integrate cutting-edge artificial intelligence technologies to enhance learning experiences and prepare students for the digital future.
          </p>
        </div>

        {/* Main Content */}
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          {/* Left Column - Image */}
          <div className="relative transition-all duration-500 delay-300">
            <div className="absolute -top-5 -left-5 right-5 bottom-5 bg-gradient-to-tr from-school-blue/40 to-school-yellow/40 rounded-[70px_30px_50px_20px] transform rotate-6 backdrop-blur-sm border border-school-yellow/30"></div>
            <div className="rounded-2xl overflow-hidden shadow-lg relative z-10 bg-white">
              <div className="absolute inset-0 bg-white z-10"></div>
              <div className="absolute inset-0 z-20 p-4">
                <ImageWithLoader
                  src="https://ik.imagekit.io/edhumbling/golden%20gate/WhatsApp%20Image%202025-04-11%20at%2016.36.15_e6ce72f4.jpg?updatedAt=1744390971166"
                  alt="AI in Education at Golden Gate"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  containerClassName="w-full h-full"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 glass-dark p-4 rounded-xl shadow-lg rotate-3 transform hover:rotate-0 transition-all duration-300 z-20 border-2 border-school-yellow">
              <div className="text-white">
                <p className="font-heading text-lg font-semibold drop-shadow-md text-school-yellow">Future-Ready</p>
                <p className="text-xs drop-shadow-sm">AI-Powered Learning</p>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-6 transition-all duration-500 delay-400">
            <div className="glass-dark rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-school-yellow">
              <h3 className="text-xl font-bold font-heading text-school-yellow mb-4 flex items-center drop-shadow-md">
                <Brain className="w-6 h-6 mr-3 text-school-yellow" />
                How We Use AI in Education
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 bg-school-blue/20 p-4 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                  <Lightbulb className="w-5 h-5 text-school-yellow mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Personalized Learning</h4>
                    <p className="text-white/80 text-sm">AI-powered systems adapt to each student's learning pace and style, providing customized educational experiences.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-school-blue/20 p-4 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                  <Bot className="w-5 h-5 text-school-yellow mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">AI Learning Assistants</h4>
                    <p className="text-white/80 text-sm">Our virtual AI tutors provide 24/7 support, answering questions and offering guidance to students whenever they need help.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-school-blue/20 p-4 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                  <Sparkles className="w-5 h-5 text-school-yellow mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Smart Content Creation</h4>
                    <p className="text-white/80 text-sm">AI helps create interactive learning materials, simulations, and exercises that make complex concepts easier to understand.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-school-blue/20 p-4 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                  <Code className="w-5 h-5 text-school-yellow mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Coding & AI Literacy</h4>
                    <p className="text-white/80 text-sm">Students learn to code and understand AI principles through hands-on projects and interactive workshops.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Resources Section */}
        <div className={cn(
          "transition-all duration-500 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="glass-dark rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-school-yellow">
            <div className="flex items-center mb-6">
              <BookOpen className="w-8 h-8 mr-4 text-school-yellow" />
              <h3 className="text-2xl font-bold font-heading text-school-yellow drop-shadow-md">AI Resources for Students</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <div className="bg-school-blue/20 p-5 rounded-xl backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20 transform hover:-translate-y-1">
                <h4 className="text-school-yellow font-semibold mb-3 flex items-center">
                  <Rocket className="w-5 h-5 mr-2 text-school-yellow" />
                  AI Search Tools
                </h4>
                <p className="text-white/80 text-sm mb-4">Access our curated collection of AI-powered search tools to enhance research and learning.</p>
                <Link to="/ai-search" className="inline-flex items-center text-school-yellow hover:text-white text-sm font-medium transition-colors">
                  Explore Tools
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>

              <div className="bg-school-blue/20 p-5 rounded-xl backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20 transform hover:-translate-y-1">
                <h4 className="text-school-yellow font-semibold mb-3 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-school-yellow" />
                  AI Learning Hub
                </h4>
                <p className="text-white/80 text-sm mb-4">Discover interactive AI-powered learning materials, tutorials, and educational resources.</p>
                <a href="#contact" className="inline-flex items-center text-school-yellow hover:text-white text-sm font-medium transition-colors">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>

              <div className="bg-school-blue/20 p-5 rounded-xl backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20 transform hover:-translate-y-1">
                <h4 className="text-school-yellow font-semibold mb-3 flex items-center">
                  <Bot className="w-5 h-5 mr-2 text-school-yellow" />
                  AI Workshops
                </h4>
                <p className="text-white/80 text-sm mb-4">Join our regular AI workshops where students learn to build and interact with artificial intelligence.</p>
                <a href="#contact" className="inline-flex items-center text-school-yellow hover:text-white text-sm font-medium transition-colors">
                  Register Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className={cn(
          "mt-10 text-center transition-all duration-500 delay-600",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <Link
            to="/ai-search"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg"
          >
            Explore Our AI Resources
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIInEducation;
