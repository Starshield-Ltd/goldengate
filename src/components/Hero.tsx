
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
          src="https://ik.imagekit.io/humbling/creche/WhatsApp%20Image%202025-03-21%20at%2018.12.33_79e96afc.jpg?updatedAt=1742906298307"
          alt="School Children"
          className="w-full h-full object-contain md:object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-school-blue/80 to-school-yellow/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none overflow-hidden">
        {/* Animated circles */}
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-white/20 animate-float blur-xl"></div>
        <div className="absolute bottom-40 right-10 w-60 h-60 rounded-full bg-white/20 animate-float blur-xl" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-white/20 animate-float blur-xl" style={{animationDelay: '0.7s'}}></div>

        {/* Geometric shapes */}
        <svg className="absolute top-20 left-10 w-40 h-40 text-white animate-float" viewBox="0 0 100 100">
          <path d="M20,50 Q40,20 60,50 T100,50" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <circle cx="75" cy="40" r="8" fill="currentColor" />
        </svg>
        <svg className="absolute bottom-40 right-10 w-60 h-60 text-white animate-float" viewBox="0 0 100 100" style={{animationDelay: '0.5s'}}>
          <path d="M10,30 Q50,10 70,30 T100,50" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M30,60 Q50,80 90,60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>

        {/* Diagonal lines pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, white, white 2px, transparent 2px, transparent 20px)' }}></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className={cn(
            "text-white max-w-xl transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight text-white drop-shadow-lg">
              Golden Gate <span className="text-school-yellow drop-shadow-md">Int. School</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-10 max-w-lg font-light drop-shadow-md">
              Transforming education through technology and innovation at our Afrancho, Kumasi campus, preparing the next generation of IT leaders and digital innovators.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#about" className="btn-secondary">
                Discover More
              </a>
              <a href="#contact" className="btn-outline">
                Contact Us
              </a>
            </div>
          </div>

          <div className={cn(
            "relative lg:block hidden transition-all duration-1000 delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          )}>
            {/* Modern curved element */}
            <div className="absolute -top-10 -left-10 right-10 bottom-10 bg-gradient-to-br from-school-blue/30 to-school-yellow/30 rounded-[60px_20px_50px_30px] -rotate-6 backdrop-blur-sm"></div>

            <div className="glass-gradient rounded-3xl overflow-hidden shadow-2xl rotate-3 transform hover:rotate-0 transition-all duration-500 z-10 relative border-2 border-white/30">
              <ImageWithLoader
                src="https://ik.imagekit.io/humbling/creche/WhatsApp%20Image%202025-03-21%20at%2018.12.27_964ef960.jpg?updatedAt=1742906298570"
                alt="Golden Gate Int. School Students"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-gradient rounded-2xl overflow-hidden shadow-2xl -rotate-3 transform hover:rotate-0 transition-all duration-500 w-48 h-48 z-20 border-2 border-white/30">
              <div className="p-4 text-white backdrop-blur-md bg-gradient-to-br from-school-blue/70 to-school-yellow/70 h-full flex flex-col justify-center items-center">
                <h3 className="text-lg font-semibold mb-2 drop-shadow-md">Our Mission</h3>
                <p className="text-sm drop-shadow-md">Creating future-ready IT professionals</p>
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
