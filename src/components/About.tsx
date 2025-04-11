
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import ImageWithLoader from './ImageWithLoader';
import { Book, Clock, Calendar, School, Award, Target, Lightbulb, Users, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();
  // Using fixed value of 15+ years instead of calculating
  const yearsOfOperation = 15; // Fixed value for years of operation

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
      id="about"
      ref={sectionRef}
      className="section-padding relative overflow-hidden pt-20 md:pt-24"
    >
      {/* Top design images */}
      <div className="absolute top-0 left-0 w-full h-40 md:h-60 overflow-hidden z-0">
        {/* First design image */}
        <div className="absolute inset-0">
          <ImageWithLoader
            src="https://ik.imagekit.io/edhumbling/golden%20gate/ChatGPT%20Image%20Apr%2011,%202025,%2006_50_55%20PM.png"
            alt="Golden Gate Design Banner"
            className="w-full h-full object-cover opacity-15"
          />
        </div>

        {/* Second design image */}
        <div className="absolute inset-0 flex justify-end items-start">
          <div className="w-full md:w-1/2 h-full">
            <ImageWithLoader
              src="https://ik.imagekit.io/edhumbling/golden%20gate/ChatGPT%20Image%20Apr%2011,%202025,%2006_53_54%20PM.png"
              alt="Golden Gate Design Element"
              className="w-full h-full object-contain opacity-20"
            />
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Design image */}
        <div className="absolute top-1/4 right-0 w-full md:w-1/2 h-3/4 opacity-10 md:opacity-15">
          <ImageWithLoader
            src="https://ik.imagekit.io/edhumbling/golden%20gate/SnapBG.ai_1744396736540.png"
            alt="Golden Gate Design Element"
            className="w-full h-full object-contain md:object-cover"
          />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-school-yellow/10"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 rounded-full bg-school-blue/10"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-school-yellow/10 blur-xl"></div>
        <div className="absolute bottom-40 -left-20 w-48 h-48 rounded-full bg-school-yellow/10 blur-xl"></div>

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

      <div className="content-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <h2 className={cn(
            "text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-school-blue to-school-yellow bg-clip-text text-transparent drop-shadow-md transition-all duration-500",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            About Our School
          </h2>
          <div className={cn(
            "h-1 w-24 bg-gradient-to-r from-school-blue to-school-yellow mx-auto mb-8 rounded-full shadow-md transition-all duration-500 delay-100",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          )}></div>
          <p className={cn(
            "text-xl text-gray-700 leading-relaxed transition-all duration-500 delay-200",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            Located in Afrancho, Kumasi in the Ashanti Region of Ghana (P.O. BOX HN 2984, ASHANTI NEW TOWN, KUMASI), Golden Gate Int. School (GOGAINS)
            is dedicated to transforming education through technology and innovation to prepare students for the digital future.
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 transition-all duration-500 delay-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="glass-dark rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-school-yellow h-full flex flex-col">
            <div className="flex items-center mb-4 md:mb-6">
              <Target className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 text-school-yellow" />
              <h3 className="text-xl md:text-2xl font-bold font-heading text-school-yellow drop-shadow-md">Our Mission</h3>
            </div>
            <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed flex-grow">
              To revolutionize education by integrating cutting-edge technology and innovative teaching methodologies,
              empowering students to become future-ready information technology professionals and digital leaders who will
              transform Ghana's technological landscape and compete on the global stage.
            </p>
          </div>

          <div className="glass-dark rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-school-yellow h-full flex flex-col">
            <div className="flex items-center mb-4 md:mb-6">
              <Lightbulb className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 text-school-yellow" />
              <h3 className="text-xl md:text-2xl font-bold font-heading text-school-yellow drop-shadow-md">Our Vision</h3>
            </div>
            <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed flex-grow">
              To be Ghana's premier technology-focused educational institution, nurturing a new generation of
              innovative thinkers, digital creators, and tech entrepreneurs who will lead Africa's digital revolution
              and shape the future of global technology with a distinctly African perspective.
            </p>
          </div>
        </div>

        {/* School Image & Stats */}
        <div className={cn(
          "flex flex-col md:flex-row gap-8 md:gap-10 mb-12 md:mb-16 items-center",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          {/* Image Container */}
          <div className="relative w-full md:w-1/2 transition-all duration-500 delay-400">
            {/* Zaha Hadid inspired curved container */}
            <div className="relative">
              <div className="absolute -top-5 -left-5 right-5 bottom-5 bg-gradient-to-tr from-school-blue/40 to-school-yellow/40 rounded-[70px_30px_50px_20px] transform rotate-6 backdrop-blur-sm border border-school-yellow/30"></div>
              <div className="rounded-2xl overflow-hidden shadow-lg relative z-10 bg-white">
                <div className="absolute inset-0 bg-white z-10"></div>
                <div className="absolute inset-0 z-20 p-4">
                  <ImageWithLoader
                    src="https://ik.imagekit.io/edhumbling/golden%20gate/WhatsApp%20Image%202025-04-11%20at%2016.23.05_5d28653d.jpg?updatedAt=1744390971018"
                    alt="Golden Gate Int. School Students"
                    className="w-full h-full object-contain aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
                    containerClassName="w-full h-full"
                  />
                </div>
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

          {/* School Hours & Programs */}
          <div className="w-full md:w-1/2 space-y-6 transition-all duration-500 delay-500">
            {/* School Hours */}
            <div className="glass-dark rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-school-yellow">
              <h3 className="text-lg md:text-xl font-bold font-heading text-school-yellow mb-3 md:mb-4 flex items-center drop-shadow-md">
                <Clock className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-school-yellow" />
                School Hours
              </h3>
              <div className="space-y-3 mt-3 md:mt-4">
                <div className="flex justify-between items-center bg-school-blue/20 p-3 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                  <p className="text-white flex items-center text-sm md:text-base">
                    <Calendar className="w-4 h-4 mr-2 text-school-yellow" />
                    Monday - Friday
                  </p>
                  <p className="text-white font-medium text-sm md:text-base">7:00 AM - 4:00 PM</p>
                </div>
                <div className="flex justify-between items-center bg-school-blue/20 p-3 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                  <p className="text-white flex items-center text-sm md:text-base">
                    <Calendar className="w-4 h-4 mr-2 text-school-yellow/70" />
                    Saturday - Sunday
                  </p>
                  <p className="text-white font-medium text-sm md:text-base">Closed</p>
                </div>
              </div>
            </div>

            {/* Programs Offered */}
            <div className="glass-dark rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-school-yellow">
              <h3 className="text-lg md:text-xl font-bold font-heading text-school-yellow mb-3 md:mb-4 flex items-center drop-shadow-md">
                <School className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-school-yellow" />
                Our Programs
              </h3>
              <div className="grid grid-cols-2 gap-2 md:gap-3 mt-3 md:mt-4">
                <div className="flex items-center space-x-2 bg-school-blue/20 p-2 md:p-3 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                  <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-school-yellow"></div>
                  <p className="text-white text-sm md:text-base">Creche</p>
                </div>
                <div className="flex items-center space-x-2 bg-school-blue/20 p-2 md:p-3 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                  <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-school-yellow"></div>
                  <p className="text-white text-sm md:text-base">Nursery</p>
                </div>
                <div className="flex items-center space-x-2 bg-school-blue/20 p-2 md:p-3 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                  <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-school-yellow"></div>
                  <p className="text-white text-sm md:text-base">Kindergarten</p>
                </div>
                <div className="flex items-center space-x-2 bg-school-blue/20 p-2 md:p-3 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                  <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-school-yellow"></div>
                  <p className="text-white text-sm md:text-base">Primary</p>
                </div>
                <div className="flex items-center space-x-2 bg-school-blue/20 p-2 md:p-3 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                  <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-school-yellow"></div>
                  <p className="text-white text-sm md:text-base">JHS 1</p>
                </div>
                <div className="flex items-center space-x-2 bg-school-blue/20 p-2 md:p-3 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                  <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-school-yellow"></div>
                  <p className="text-white text-sm md:text-base">JHS 2</p>
                </div>
                <div className="flex items-center space-x-2 bg-school-blue/20 p-2 md:p-3 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                  <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-school-yellow"></div>
                  <p className="text-white text-sm md:text-base">JHS 3</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="glass-dark rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-school-yellow">
              <h3 className="text-lg md:text-xl font-bold font-heading text-school-yellow mb-3 md:mb-4 flex items-center drop-shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-school-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact Us
              </h3>
              <div className="space-y-3 mt-3 md:mt-4">
                <div className="flex items-center bg-school-blue/20 p-3 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-3 text-school-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+233246186629" className="text-white text-sm md:text-base hover:text-school-yellow transition-colors">0246186629</a>
                </div>
                <div className="flex items-center bg-school-blue/20 p-3 rounded-lg backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-3 text-school-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@goldengateintschool.com" className="text-white text-sm md:text-base hover:text-school-yellow transition-colors">info@goldengateintschool.com</a>
                </div>
              </div>
            </div>





          </div>
        </div>

        {/* Core Values */}
        <div className={cn(
          "transition-all duration-500 delay-600",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="glass-dark rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-school-yellow">
            <div className="flex items-center mb-4 md:mb-6">
              <Award className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 text-school-yellow" />
              <h3 className="text-xl md:text-2xl font-bold font-heading text-school-yellow drop-shadow-md">Our Core Values</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-4 md:mt-6">
              <div className="bg-school-blue/20 p-4 md:p-5 rounded-xl backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20 transform hover:-translate-y-1">
                <div className="flex items-center mb-2 md:mb-3">
                  <Rocket className="w-4 h-4 md:w-5 md:h-5 mr-2 text-school-yellow" />
                  <h4 className="text-school-yellow font-semibold text-sm md:text-base">Digital Innovation</h4>
                </div>
                <p className="text-white/80 text-xs md:text-sm">Embracing cutting-edge technology and fostering a culture of innovation in everything we do.</p>
              </div>

              <div className="bg-school-blue/20 p-4 md:p-5 rounded-xl backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20 transform hover:-translate-y-1">
                <div className="flex items-center mb-2 md:mb-3">
                  <Lightbulb className="w-4 h-4 md:w-5 md:h-5 mr-2 text-school-yellow" />
                  <h4 className="text-school-yellow font-semibold text-sm md:text-base">Future-Focused Learning</h4>
                </div>
                <p className="text-white/80 text-xs md:text-sm">Preparing students for careers that don't yet exist, with skills that transcend traditional education.</p>
              </div>

              <div className="bg-school-blue/20 p-4 md:p-5 rounded-xl backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20 transform hover:-translate-y-1">
                <div className="flex items-center mb-2 md:mb-3">
                  <Book className="w-4 h-4 md:w-5 md:h-5 mr-2 text-school-yellow" />
                  <h4 className="text-school-yellow font-semibold text-sm md:text-base">Computational Thinking</h4>
                </div>
                <p className="text-white/80 text-xs md:text-sm">Developing logical reasoning, algorithmic thinking, and problem-solving skills from an early age.</p>
              </div>

              <div className="bg-school-blue/20 p-4 md:p-5 rounded-xl backdrop-blur-sm hover:bg-school-blue/30 transition-all duration-300 border border-school-yellow/20 transform hover:-translate-y-1">
                <div className="flex items-center mb-2 md:mb-3">
                  <Users className="w-4 h-4 md:w-5 md:h-5 mr-2 text-school-yellow" />
                  <h4 className="text-school-yellow font-semibold text-sm md:text-base">Global Digital Citizenship</h4>
                </div>
                <p className="text-white/80 text-xs md:text-sm">Nurturing responsible, ethical, and culturally aware digital citizens who can thrive in a connected world.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className={cn(
          "mt-10 md:mt-12 text-center transition-all duration-500 delay-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <Link
            to="/enroll-now"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg"
          >
            Begin Your Journey With Us
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
