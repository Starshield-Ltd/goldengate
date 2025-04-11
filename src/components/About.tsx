
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import ImageWithLoader from './ImageWithLoader';
import { Book, Clock, Calendar, School } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();
  const yearsOfOperation = currentYear - 2021; // Started 4 years ago from 2025

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
        rootMargin: '0px',
        threshold: 0.2,
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
      id="about"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* School-themed background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-school-yellow/10"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 rounded-full bg-school-blue/10"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-school-yellow/10"></div>

        {/* Academic pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FFD700, #FFD700 2px, transparent 2px, transparent 20px)' }}></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-school-yellow/20 to-transparent"></div>

        {/* School-themed pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 5 L55 30 L30 55 L5 30 Z\' stroke=\'%23FFD700\' stroke-width=\'1\' fill=\'none\' /%3E%3C/svg%3E")' }}></div>

        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-school-yellow/10 blur-xl"></div>
        <div className="absolute bottom-40 -left-20 w-48 h-48 rounded-full bg-school-yellow/10 blur-xl"></div>

        <svg className="absolute top-10 right-10 w-40 h-40 text-school-yellow/20" viewBox="0 0 200 200">
          <path d="M20,50 Q60,10 100,50 T180,50 T140,100 T180,150 T100,150 T20,150 T60,100 T20,50" fill="currentColor" />
        </svg>
        <svg className="absolute bottom-10 left-10 w-40 h-40 text-school-blue/20" viewBox="0 0 200 200">
          <path d="M40,40 Q70,20 100,40 T160,40 T120,80 T160,120 T100,120 T40,120 T80,80 T40,40" fill="currentColor" />
        </svg>
      </div>

      <div className="content-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={cn(
            "text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-school-blue to-school-yellow bg-clip-text text-transparent drop-shadow-md transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            About Our School
          </h2>
          <div className={cn(
            "h-1 w-24 bg-gradient-to-r from-school-blue to-school-yellow mx-auto mb-8 rounded-full shadow-md transition-all duration-700 delay-100",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          )}></div>
          <p className={cn(
            "text-xl text-gray-700 leading-relaxed transition-all duration-700 delay-200",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            Located in Afrancho, Kumasi in the Ashanti Region of Ghana (P.O. Box AH 2984), Golden Gate Int. School
            is dedicated to transforming education through technology and innovation to prepare students for the digital future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={cn(
            "relative transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            {/* Zaha Hadid inspired curved container */}
            <div className="relative">
              <div className="absolute -top-5 -left-5 right-5 bottom-5 bg-gradient-to-tr from-school-blue/40 to-school-yellow/40 rounded-[70px_30px_50px_20px] transform rotate-6 backdrop-blur-sm border border-school-yellow/30"></div>
              <div className="rounded-2xl overflow-hidden shadow-lg relative z-10">
                <ImageWithLoader
                  src="https://ik.imagekit.io/humbling/creche/WhatsApp%20Image%202025-03-21%20at%2017.14.29_bb8cad6f.jpg?updatedAt=1742906297714"
                  alt="Golden Gate Int. School Students"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 glass-dark p-4 rounded-xl shadow-lg rotate-3 transform hover:rotate-0 transition-all duration-300 z-20 border-2 border-school-yellow">
              <div className="text-white">
                <p className="font-heading text-5xl font-bold drop-shadow-md text-school-yellow">{yearsOfOperation}+</p>
                <p className="text-sm drop-shadow-sm">Years of Excellence</p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 glass-dark p-4 rounded-xl shadow-lg -rotate-3 transform hover:rotate-0 transition-all duration-300 border-2 border-school-yellow z-20">
              <div className="text-white">
                <p className="font-heading text-lg font-semibold drop-shadow-md text-school-yellow">Afrancho, Kumasi</p>
                <p className="text-xs drop-shadow-sm">P.O. Box AH 2984, Ghana</p>
              </div>
            </div>

            {/* Student counter element */}
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 glass-dark p-4 rounded-full shadow-lg z-20 h-24 w-24 flex flex-col items-center justify-center border-2 border-school-yellow">
              <p className="font-heading text-2xl font-bold text-school-yellow drop-shadow-md">200+</p>
              <p className="text-xs text-white/90 drop-shadow-sm">Students</p>
            </div>
          </div>

          <div className={cn(
            "space-y-8 transition-all duration-700 delay-400",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            {/* Programs Offered */}
            <div className="glass-dark rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-school-yellow">
              <h3 className="text-xl font-bold font-heading text-school-yellow mb-4 flex items-center drop-shadow-md">
                <School className="w-6 h-6 mr-3 text-school-yellow" />
                Our Programs
              </h3>
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="flex items-center space-x-2 bg-school-blue/20 p-3 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                  <div className="h-3 w-3 rounded-full bg-school-yellow"></div>
                  <p className="text-white">Creche</p>
                </div>
                <div className="flex items-center space-x-2 bg-school-blue/20 p-3 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                  <div className="h-3 w-3 rounded-full bg-school-yellow"></div>
                  <p className="text-white">Nursery</p>
                </div>
                <div className="flex items-center space-x-2 bg-school-blue/20 p-3 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                  <div className="h-3 w-3 rounded-full bg-school-yellow"></div>
                  <p className="text-white">Kindergarten</p>
                </div>
                <div className="flex items-center space-x-2 bg-school-blue/20 p-3 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                  <div className="h-3 w-3 rounded-full bg-school-yellow"></div>
                  <p className="text-white">Primary</p>
                </div>
                <div className="flex items-center space-x-2 bg-school-blue/20 p-3 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                  <div className="h-3 w-3 rounded-full bg-school-yellow"></div>
                  <p className="text-white">JHS 1</p>
                </div>
                <div className="flex items-center space-x-2 bg-school-blue/20 p-3 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                  <div className="h-3 w-3 rounded-full bg-school-yellow"></div>
                  <p className="text-white">JHS 2</p>
                </div>
                <div className="flex items-center space-x-2 bg-school-blue/20 p-3 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                  <div className="h-3 w-3 rounded-full bg-school-yellow"></div>
                  <p className="text-white">JHS 3</p>
                </div>
              </div>
            </div>

            {/* School Hours */}
            <div className="glass-dark rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-school-yellow">
              <h3 className="text-xl font-bold font-heading text-school-yellow mb-4 flex items-center drop-shadow-md">
                <Clock className="w-6 h-6 mr-3 text-school-yellow" />
                School Hours
              </h3>
              <div className="space-y-3 mt-4">
                <div className="flex justify-between items-center bg-school-blue/20 p-3 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                  <p className="text-white flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-school-yellow" />
                    Monday - Friday
                  </p>
                  <p className="text-white font-medium">7:00 AM - 4:00 PM</p>
                </div>
                <div className="flex justify-between items-center bg-school-blue/20 p-3 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                  <p className="text-white flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-school-yellow/70" />
                    Saturday - Sunday
                  </p>
                  <p className="text-white font-medium">Closed</p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="glass-dark rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-school-yellow">
              <h3 className="text-xl font-bold font-heading text-school-yellow mb-4 flex items-center drop-shadow-md">
                <Book className="w-6 h-6 mr-3 text-school-yellow" />
                Our Mission
              </h3>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                To revolutionize education by integrating cutting-edge technology and innovative teaching methodologies,
                empowering students to become future-ready information technology professionals and digital leaders who will
                transform Ghana's technological landscape and compete on the global stage.
              </p>
            </div>

            {/* Vision */}
            <div className="glass-dark rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-school-yellow">
              <h3 className="text-xl font-bold font-heading text-school-yellow mb-4 flex items-center drop-shadow-md">
                <Book className="w-6 h-6 mr-3 text-school-yellow" />
                Our Vision
              </h3>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                To be Ghana's premier technology-focused educational institution, nurturing a new generation of
                innovative thinkers, digital creators, and tech entrepreneurs who will lead Africa's digital revolution
                and shape the future of global technology with a distinctly African perspective.
              </p>
            </div>

            {/* Core Values */}
            <div className="glass-dark rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-school-yellow mt-8">
              <h3 className="text-xl font-bold font-heading text-school-yellow mb-4 flex items-center drop-shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-school-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Our Core Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-school-blue/20 p-4 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                  <h4 className="text-school-yellow font-semibold mb-2">Digital Innovation</h4>
                  <p className="text-white/80 text-sm">Embracing cutting-edge technology and fostering a culture of innovation in everything we do.</p>
                </div>
                <div className="bg-school-blue/20 p-4 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                  <h4 className="text-school-yellow font-semibold mb-2">Future-Focused Learning</h4>
                  <p className="text-white/80 text-sm">Preparing students for careers that don't yet exist, with skills that transcend traditional education.</p>
                </div>
                <div className="bg-school-blue/20 p-4 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                  <h4 className="text-school-yellow font-semibold mb-2">Computational Thinking</h4>
                  <p className="text-white/80 text-sm">Developing logical reasoning, algorithmic thinking, and problem-solving skills from an early age.</p>
                </div>
                <div className="bg-school-blue/20 p-4 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                  <h4 className="text-school-yellow font-semibold mb-2">Global Digital Citizenship</h4>
                  <p className="text-white/80 text-sm">Nurturing responsible, ethical, and culturally aware digital citizens who can thrive in a connected world.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
