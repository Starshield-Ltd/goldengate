import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import ImageWithLoader from './ImageWithLoader';
import { MapPin, Compass } from 'lucide-react';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

const ExcursionGallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const galleryImages: GalleryItem[] = [
    {
      id: 1,
      src: "https://ik.imagekit.io/edhumbling/golden%20gate/WhatsApp%20Image%202025-04-11%20at%2020.30.07_2b95f1a8.jpg",
      alt: "Students exploring during school excursion"
    },
    {
      id: 2,
      src: "https://ik.imagekit.io/edhumbling/golden%20gate/WhatsApp%20Image%202025-04-11%20at%2020.30.07_810498a9.jpg",
      alt: "Learning outside the classroom on field trip"
    },
    {
      id: 3,
      src: "https://ik.imagekit.io/edhumbling/golden%20gate/WhatsApp%20Image%202025-04-11%20at%2020.30.08_0712606a.jpg",
      alt: "Educational excursion with Golden Gate students"
    },
    {
      id: 4,
      src: "https://ik.imagekit.io/edhumbling/golden%20gate/WhatsApp%20Image%202025-04-11%20at%2020.30.09_a5fca7aa.jpg",
      alt: "Hands-on learning experience during school trip"
    }
  ];

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
      id="excursions"
      ref={sectionRef}
      className="section-padding overflow-hidden relative border-t-0"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #0066CC, #0066CC 2px, transparent 2px, transparent 20px)' }}></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-school-blue/20 to-transparent"></div>

      {/* Adventure-themed pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 10 L50 30 L30 50 L10 30 Z\' stroke=\'%230066CC\' stroke-width=\'1\' fill=\'none\' /%3E%3C/svg%3E")' }}></div>

      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-school-blue/10 blur-xl"></div>
      <div className="absolute bottom-40 -left-20 w-48 h-48 rounded-full bg-school-blue/10 blur-xl"></div>

      <div className="content-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={cn(
            "text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-school-blue to-school-green bg-clip-text text-transparent drop-shadow-md transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            <span className="inline-flex items-center">
              <Compass className="w-8 h-8 mr-3 text-school-blue" />
              School Excursions
            </span>
          </h2>
          <div className={cn(
            "h-1 w-24 bg-gradient-to-r from-school-blue to-school-green mx-auto mb-8 rounded-full shadow-md transition-all duration-700 delay-100",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          )}></div>
          <p className={cn(
            "text-xl text-gray-700 leading-relaxed transition-all duration-700 delay-200",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            Learning extends beyond our classroom walls through exciting educational excursions,
            where our students gain hands-on experience and explore the world around them.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={cn(
                "group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20",
                isVisible && `transition-all duration-700 delay-${(index + 1) * 100}`
              )}
            >
              <div className="relative aspect-[4/3] bg-white overflow-hidden">
                {/* Enhanced zoom effect container */}
                <div className="absolute inset-0 z-20 overflow-hidden">
                  <ImageWithLoader
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-125"
                    containerClassName="w-full h-full"
                  />
                </div>
                
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-school-blue/80 via-school-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30"></div>
                
                {/* Caption that slides up */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-school-blue/90 to-transparent z-40 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-school-yellow flex-shrink-0 mt-1" />
                    <p className="text-white font-medium drop-shadow-md text-lg">{image.alt}</p>
                  </div>
                </div>
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-school-yellow/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 rounded-bl-3xl"></div>
              </div>
            </div>
          ))}
        </div>

        <div className={cn(
          "mt-16 text-center transition-all duration-700 delay-600",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <p className="text-gray-700 mb-6">
            At Golden Gate Int. School, we believe in providing enriching experiences that complement classroom learning and broaden our students' horizons.
          </p>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2 bg-gradient-to-r from-school-blue to-school-green text-white hover:from-school-blue/90 hover:to-school-green/90"
          >
            Inquire About Our Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExcursionGallery;
