
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import ImageWithLoader from './ImageWithLoader';
import { GalleryHorizontal } from 'lucide-react';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const galleryImages: GalleryItem[] = [
    {
      id: 1,
      src: "https://ik.imagekit.io/edhumbling/golden%20gate/WhatsApp%20Image%202025-04-11%20at%2016.36.14_41d6b5c5.jpg?updatedAt=1744390976920",
      alt: "Bright minds in our distinctive yellow and blue uniform"
    },
    {
      id: 2,
      src: "https://ik.imagekit.io/edhumbling/golden%20gate/WhatsApp%20Image%202025-04-11%20at%2016.36.15_e6ce72f4.jpg?updatedAt=1744390971166",
      alt: "Our dedicated teacher with promising young scholars"
    },
    {
      id: 3,
      src: "https://ik.imagekit.io/edhumbling/golden%20gate/WhatsApp%20Image%202025-04-11%20at%2016.36.13_a7999d6e.jpg?updatedAt=1744390982171",
      alt: "Future leaders in our nurturing educational environment"
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
        threshold: 0.1,
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
      id="gallery"
      ref={sectionRef}
      className="section-padding overflow-hidden relative border-t-0"
    >
      {/* Montessori Scribbles and Design Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Zaha Hadid inspired curved elements */}
        <div className="absolute top-0 right-0 w-1/3 h-40 bg-gradient-to-l from-school-seaBlue/10 to-transparent rounded-bl-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-40 bg-gradient-to-r from-school-yellow/10 to-transparent rounded-tr-[80px]"></div>

        {/* Paint splatters */}
        <svg className="absolute top-1/4 left-10 w-28 h-28 text-school-green/15" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="currentColor" />
          <circle cx="30" cy="40" r="10" fill="currentColor" />
          <circle cx="70" cy="30" r="15" fill="currentColor" />
          <circle cx="75" cy="60" r="12" fill="currentColor" />
        </svg>

        {/* Book scribbles */}
        <svg className="absolute bottom-1/4 right-10 w-32 h-32 text-school-yellow/15" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="70" rx="2" fill="currentColor" />
          <rect x="30" y="10" width="40" height="70" rx="2" fill="currentColor" />
          <rect x="40" y="15" width="20" height="60" rx="2" fill="currentColor" />
        </svg>
      </div>

      <div className="content-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4 text-gray-900 transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            <span className="inline-flex items-center">
              <GalleryHorizontal className="w-8 h-8 mr-3 text-school-seaBlue" />
              Our Gallery
            </span>
          </h2>
          <div className={cn(
            "h-1 w-20 bg-school-seaBlue mx-auto mb-6 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          )}></div>
          <p className={cn(
            "text-gray-600 transition-all duration-700 delay-200",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            Take a glimpse into the joyful learning environment at Golden Gate Int. School,
            where our students thrive in a nurturing and stimulating atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={cn(
                "group overflow-hidden rounded-2xl transform hover:-translate-y-2 transition-all duration-500 aspect-[3/4]",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20",
                isVisible && `transition-all duration-700 delay-${(index + 1) * 100}`
              )}
            >
              <div className="relative h-full overflow-hidden">
                {/* Zaha Hadid inspired frame */}
                <div className="absolute -inset-1 bg-gradient-to-br from-school-seaBlue/30 via-school-yellow/20 to-school-green/30 rounded-[30px_20px_40px_25px] transform rotate-3 group-hover:rotate-0 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

                <div className="glass h-full relative z-10 bg-white">
                  <div className="absolute inset-0 bg-white z-10"></div>
                  <div className="absolute inset-0 z-20 p-4">
                    <ImageWithLoader
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      containerClassName="w-full h-full"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-school-blue/80 to-transparent z-30">
                    <p className="text-white font-medium drop-shadow-md">{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={cn(
          "mt-16 text-center transition-all duration-700 delay-600",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <p className="text-gray-700 mb-6">
            Experience the vibrant community and educational excellence at Golden Gate Int. School.
          </p>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2 bg-gradient-to-r from-school-seaBlue to-school-green text-white hover:from-school-seaBlue/90 hover:to-school-green/90"
          >
            Contact Us for a Visit
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
