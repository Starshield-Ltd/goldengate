
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
      {/* Montessori-inspired background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-school-yellow/10"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 rounded-full bg-school-green/10"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-school-seaBlue/10"></div>

        {/* Paint splatters */}
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #1E88E5, #1E88E5 2px, transparent 2px, transparent 20px)' }}></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-school-blue/20 to-transparent"></div>

        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-school-blue/10 blur-xl"></div>
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
            "text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-school-blue to-school-yellow bg-clip-text text-transparent drop-shadow-sm transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            About Our School
          </h2>
          <div className={cn(
            "h-1 w-24 bg-gradient-to-r from-school-blue to-school-yellow mx-auto mb-8 rounded-full shadow-sm transition-all duration-700 delay-100",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          )}></div>
          <p className={cn(
            "text-xl text-gray-700 leading-relaxed transition-all duration-700 delay-200",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            Located in Kodie-Kotokuom in the Ashanti Region of Ghana, Golden Gate Int. School
            is dedicated to providing quality education that prepares students for the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={cn(
            "relative transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            {/* Zaha Hadid inspired curved container */}
            <div className="relative">
              <div className="absolute -top-5 -left-5 right-5 bottom-5 bg-gradient-to-tr from-school-blue/30 to-school-yellow/30 rounded-[70px_30px_50px_20px] transform rotate-6 backdrop-blur-sm"></div>
              <div className="rounded-2xl overflow-hidden shadow-lg relative z-10">
                <ImageWithLoader
                  src="https://ik.imagekit.io/humbling/creche/WhatsApp%20Image%202025-03-21%20at%2017.14.29_bb8cad6f.jpg?updatedAt=1742906297714"
                  alt="Golden Gate Int. School Students"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 glass-blue p-4 rounded-xl shadow-lg rotate-3 transform hover:rotate-0 transition-all duration-300 z-20 border border-white/30">
              <div className="text-white">
                <p className="font-heading text-5xl font-bold drop-shadow-md">{yearsOfOperation}+</p>
                <p className="text-sm drop-shadow-sm">Years of Excellence</p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 glass-yellow p-4 rounded-xl shadow-lg -rotate-3 transform hover:rotate-0 transition-all duration-300 border border-white/30 z-20">
              <div className="text-white">
                <p className="font-heading text-lg font-semibold drop-shadow-md">Kodie-Kotokuom</p>
                <p className="text-xs drop-shadow-sm">Ashanti Region, Ghana</p>
              </div>
            </div>

            {/* Student counter element */}
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 glass-gradient p-4 rounded-full shadow-lg z-20 h-24 w-24 flex flex-col items-center justify-center border border-white/30">
              <p className="font-heading text-2xl font-bold text-white drop-shadow-md">200+</p>
              <p className="text-xs text-white/90 drop-shadow-sm">Students</p>
            </div>
          </div>

          <div className={cn(
            "space-y-8 transition-all duration-700 delay-400",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            {/* Programs Offered */}
            <div className="glass-blue rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/30">
              <h3 className="text-xl font-bold font-heading text-white mb-4 flex items-center drop-shadow-md">
                <School className="w-6 h-6 mr-3 text-white" />
                Our Programs
              </h3>
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="flex items-center space-x-2 bg-white/10 p-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                  <div className="h-3 w-3 rounded-full bg-white"></div>
                  <p className="text-white">Creche</p>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 p-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                  <div className="h-3 w-3 rounded-full bg-white"></div>
                  <p className="text-white">Nursery</p>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 p-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                  <div className="h-3 w-3 rounded-full bg-white"></div>
                  <p className="text-white">Kindergarten</p>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 p-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                  <div className="h-3 w-3 rounded-full bg-white"></div>
                  <p className="text-white">Primary</p>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 p-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 col-span-2">
                  <div className="h-3 w-3 rounded-full bg-white"></div>
                  <p className="text-white">Junior High School (Coming Soon)</p>
                </div>
              </div>
            </div>

            {/* School Hours */}
            <div className="glass-yellow rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/30">
              <h3 className="text-xl font-bold font-heading text-white mb-4 flex items-center drop-shadow-md">
                <Clock className="w-6 h-6 mr-3 text-white" />
                School Hours
              </h3>
              <div className="space-y-3 mt-4">
                <div className="flex justify-between items-center bg-white/10 p-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                  <p className="text-white flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-white" />
                    Monday - Friday
                  </p>
                  <p className="text-white font-medium">7:00 AM - 4:00 PM</p>
                </div>
                <div className="flex justify-between items-center bg-white/10 p-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                  <p className="text-white flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-white/70" />
                    Saturday - Sunday
                  </p>
                  <p className="text-white font-medium">Closed</p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="glass-blue rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/30">
              <h3 className="text-xl font-bold font-heading text-white mb-4 flex items-center drop-shadow-md">
                <Book className="w-6 h-6 mr-3 text-white" />
                Our Mission
              </h3>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                To ensure that all children of school going age are provided with inclusive and
                equitable quality formal education and training through effective and efficient
                management of resources to make education delivery relevant to the manpower needs of the nation.
              </p>
            </div>

            {/* Vision */}
            <div className="glass-gradient rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/30">
              <h3 className="text-xl font-bold font-heading text-white mb-4 flex items-center drop-shadow-md">
                <Book className="w-6 h-6 mr-3 text-white" />
                Our Vision
              </h3>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Golden Gate Int. School seeks to create an enabling environment in all education institutions
                and management positions that will facilitate effective teaching and learning
                and efficiency in the management for the attainment of the goals of the service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
