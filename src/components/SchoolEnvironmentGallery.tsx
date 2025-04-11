import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import ImageWithLoader from './ImageWithLoader';
import { GalleryHorizontal, School } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

const SchoolEnvironmentGallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const plugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
      playOnInit: true
    })
  );

  const galleryImages: GalleryItem[] = [
    {
      id: 1,
      src: "https://ik.imagekit.io/edhumbling/golden%20gate/WhatsApp%20Image%202025-04-11%20at%2016.47.47_edb8df8d.jpg",
      alt: "Modern school facilities with spacious classrooms"
    },
    {
      id: 2,
      src: "https://ik.imagekit.io/edhumbling/golden%20gate/WhatsApp%20Image%202025-04-11%20at%2016.47.45_2040ffb5.jpg",
      alt: "Well-maintained school grounds for outdoor activities"
    },
    {
      id: 3,
      src: "https://ik.imagekit.io/edhumbling/golden%20gate/WhatsApp%20Image%202025-04-11%20at%2016.47.45_54ef5725.jpg",
      alt: "Secure and welcoming school entrance"
    },
    {
      id: 4,
      src: "https://ik.imagekit.io/edhumbling/golden%20gate/WhatsApp%20Image%202025-04-11%20at%2016.47.46_bb93cb29.jpg",
      alt: "Clean and organized learning environment"
    },
    {
      id: 5,
      src: "https://ik.imagekit.io/edhumbling/golden%20gate/WhatsApp%20Image%202025-04-11%20at%2016.47.46_f74e0b70.jpg",
      alt: "Spacious corridors connecting our classrooms"
    },
    {
      id: 6,
      src: "https://ik.imagekit.io/edhumbling/golden%20gate/WhatsApp%20Image%202025-04-11%20at%2016.47.47_67606e78.jpg",
      alt: "Safe and engaging playground area"
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
      id="school-environment"
      ref={sectionRef}
      className="section-padding overflow-hidden relative border-t-0"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-40 bg-gradient-to-l from-school-yellow/10 to-transparent rounded-bl-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-40 bg-gradient-to-r from-school-blue/10 to-transparent rounded-tr-[80px]"></div>
      </div>

      <div className="content-container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className={cn(
            "text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 transition-all duration-300",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            <span className="inline-flex items-center">
              <School className="w-8 h-8 mr-3 text-school-blue" />
              Our School Environment
            </span>
          </h2>
          <div className={cn(
            "h-1 w-20 bg-gradient-to-r from-school-blue to-school-yellow mx-auto mb-6 transition-all duration-300 delay-50",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          )}></div>
          <p className={cn(
            "text-sm sm:text-base text-gray-600 transition-all duration-300 delay-100",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            Explore our modern facilities and welcoming campus where students thrive in a safe and stimulating environment.
          </p>
        </div>

        <div className={cn(
          "w-full transition-all duration-300 delay-150",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              skipSnaps: true,
              inViewThreshold: 0.7,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem key={image.id} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="group overflow-hidden rounded-2xl transform hover:-translate-y-2 transition-all duration-500 aspect-[4/3] h-full">
                    <div className="relative h-full">
                      {/* Decorative frame */}
                      <div className="absolute -inset-1 bg-gradient-to-br from-school-blue/30 via-school-yellow/20 to-school-blue/30 rounded-[30px_20px_40px_25px] transform rotate-2 group-hover:rotate-0 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

                      <div className="glass h-full relative z-10 bg-white">
                        <div className="absolute inset-0 bg-white z-10"></div>
                        <div className="absolute inset-0 z-20 p-4">
                          <ImageWithLoader
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            containerClassName="w-full h-full"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-school-blue/80 to-transparent z-30">
                          <p className="text-white font-medium drop-shadow-md text-xs sm:text-sm">{image.alt}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center mt-8 space-x-4">
              <CarouselPrevious className="static translate-y-0 h-10 w-10 rounded-full bg-school-blue text-white hover:bg-school-blue/90 border-school-yellow" />
              <CarouselNext className="static translate-y-0 h-10 w-10 rounded-full bg-school-blue text-white hover:bg-school-blue/90 border-school-yellow" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SchoolEnvironmentGallery;
