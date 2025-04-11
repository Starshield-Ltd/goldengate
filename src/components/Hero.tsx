
import { useEffect, useState } from 'react';
import ImageWithLoader from './ImageWithLoader';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithLoader
          src="https://ik.imagekit.io/edhumbling/golden%20gate/WhatsApp%20Image%202025-04-11%20at%2016.36.14_41d6b5c5.jpg?updatedAt=1744390976920"
          alt="Golden Gate Int. School Students"
          className="w-full h-full object-contain md:object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-school-blue/90 to-school-blue/80" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YzYuNjMgMCAxMiA1LjM3IDEyIDEyaC02YzAgNi42MyA1LjM3IDEyIDEyIDEyIDYuNjMgMCAxMi01LjM3IDEyLTEyaC02eiIgZmlsbD0iI0ZGRDcwMCIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')]" style={{ opacity: 0.05 }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none overflow-hidden">
        {/* Animated circles */}
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-school-yellow/30 animate-float blur-xl"></div>
        <div className="absolute bottom-40 right-10 w-60 h-60 rounded-full bg-school-yellow/30 animate-float blur-xl" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-school-yellow/30 animate-float blur-xl" style={{animationDelay: '0.7s'}}></div>

        {/* School-themed elements */}
        <svg className="absolute top-20 left-10 w-40 h-40 text-school-yellow/40 animate-float" viewBox="0 0 100 100">
          <path d="M50,10 L90,40 L50,70 L10,40 Z" fill="currentColor" />
          <path d="M50,20 L50,60" stroke="white" strokeWidth="2" strokeDasharray="4 2" />
          <path d="M30,40 L70,40" stroke="white" strokeWidth="2" strokeDasharray="4 2" />
        </svg>
        <svg className="absolute bottom-40 right-10 w-60 h-60 text-school-yellow/40 animate-float" viewBox="0 0 100 100" style={{animationDelay: '0.5s'}}>
          <path d="M20,80 L50,20 L80,80 Z" fill="currentColor" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 2" />
        </svg>

        {/* Academic pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,215,0,0.2), rgba(255,215,0,0.2) 2px, transparent 2px, transparent 20px)' }}></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className={cn(
            "text-white max-w-xl transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 leading-tight text-white drop-shadow-lg">
              Golden Gate <span className="text-school-yellow drop-shadow-md">Int. School</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-2xl italic text-school-yellow mb-4 font-medium drop-shadow-md">
              Gateway to Success
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white mb-6 max-w-lg font-light drop-shadow-md">
              Transforming education through technology and innovation at our Afrancho, Kumasi campus, preparing the next generation of IT leaders and digital innovators.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#about" className="btn-secondary text-xs sm:text-sm">
                Discover More
              </a>
              <a href="#contact" className="btn-outline text-xs sm:text-sm">
                Contact Us
              </a>
              <a href="/ai-search" className="btn-primary flex items-center gap-2 text-xs sm:text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd" />
                </svg>
                AI Resources
              </a>
            </div>
          </div>

          <div className={cn(
            "relative lg:block hidden transition-all duration-1000 delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          )}>
            {/* Modern curved element */}
            <div className="absolute -top-10 -left-10 right-10 bottom-10 bg-gradient-to-br from-school-blue/30 to-school-yellow/30 rounded-[60px_20px_50px_30px] -rotate-6 backdrop-blur-sm"></div>

            <div className="glass-gradient rounded-3xl overflow-hidden shadow-2xl rotate-3 transform hover:rotate-0 transition-all duration-500 z-10 relative border-2 border-white/30 bg-white">
              <div className="absolute inset-0 bg-white z-10"></div>
              <div className="absolute inset-0 z-20 p-4">
                <ImageWithLoader
                  src="https://ik.imagekit.io/edhumbling/golden%20gate/WhatsApp%20Image%202025-04-11%20at%2016.36.15_e6ce72f4.jpg?updatedAt=1744390971166"
                  alt="Golden Gate Int. School Students"
                  className="w-full h-full object-contain aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
                  containerClassName="w-full h-full"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 glass-dark rounded-2xl overflow-hidden shadow-2xl -rotate-3 transform hover:rotate-0 transition-all duration-500 w-48 h-48 z-20 border-2 border-school-yellow">
              <div className="p-4 text-white backdrop-blur-md bg-gradient-to-br from-school-blue/90 to-school-blue/80 h-full flex flex-col justify-center items-center">
                <h3 className="text-sm sm:text-base font-semibold mb-1 drop-shadow-md text-school-yellow">Our Mission</h3>
                <p className="text-xs sm:text-sm drop-shadow-md">Creating future-ready IT professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center animate-bounce">
        <span className="text-sm mb-2 font-medium drop-shadow-md">Scroll Down</span>
        <div className="glass-blue p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
