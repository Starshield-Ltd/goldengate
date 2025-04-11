import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import ImageWithLoader from './ImageWithLoader';
import { GalleryHorizontal } from 'lucide-react';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

const CulturalEventsGallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const galleryImages: GalleryItem[] = [
    {
      id: 1,
      src: "https://ik.imagekit.io/edhumbling/golden%20gate/WhatsApp%20Image%202025-04-11%20at%2020.30.09_468f0f8a.jpg",
      alt: "Golden Gates March Parade event"
    },
    {
      id: 2,
      src: "https://ik.imagekit.io/edhumbling/golden%20gate/WhatsApp%20Image%202025-04-11%20at%2016.36.19_f6ce1711.jpg",
      alt: "Students in traditional Kente cloth"
    },
    {
      id: 3,
      src: "https://ik.imagekit.io/edhumbling/golden%20gate/WhatsApp%20Image%202025-04-11%20at%2016.36.18_d6c86e42.jpg",
      alt: "Traditional day celebration at Golden Gate"
    },
    {
      id: 4,
      src: "https://ik.imagekit.io/edhumbling/golden%20gate/WhatsApp%20Image%202025-04-11%20at%2016.36.19_58babc59.jpg",
      alt: "Students showcasing Ghanaian culture"
    },
    {
      id: 5,
      src: "https://ik.imagekit.io/edhumbling/golden%20gate/WhatsApp%20Image%202025-04-11%20at%2016.36.19_b3a386a7.jpg",
      alt: "Traditional attire display at Golden Gate"
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
      id="cultural-events"
      ref={sectionRef}
      className="section-padding overflow-hidden relative border-t-0"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FFD700, #FFD700 2px, transparent 2px, transparent 20px)' }}></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-school-yellow/20 to-transparent"></div>

      {/* School-themed pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 5 L55 30 L30 55 L5 30 Z\' stroke=\'%23FFD700\' stroke-width=\'1\' fill=\'none\' /%3E%3C/svg%3E")' }}></div>

      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-school-yellow/10 blur-xl"></div>
      <div className="absolute bottom-40 -left-20 w-48 h-48 rounded-full bg-school-yellow/10 blur-xl"></div>

      <div className="content-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={cn(
            "text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-school-blue to-school-yellow bg-clip-text text-transparent drop-shadow-md transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            <span className="inline-flex items-center">
              <GalleryHorizontal className="w-8 h-8 mr-3 text-school-yellow" />
              Cultural Events & Parades
            </span>
          </h2>
          <div className={cn(
            "h-1 w-24 bg-gradient-to-r from-school-blue to-school-yellow mx-auto mb-8 rounded-full shadow-md transition-all duration-700 delay-100",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          )}></div>
          <p className={cn(
            "text-xl text-gray-700 leading-relaxed transition-all duration-700 delay-200",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            Celebrating Ghanaian culture and heritage through our annual Traditional Day and March Parade events,
            where students proudly showcase their cultural attire, participate in community parades, and learn about their rich heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={cn(
                "group overflow-hidden rounded-2xl transform hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-xl",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20",
                isVisible && `transition-all duration-700 delay-${(index + 1) * 100}`
              )}
            >
              <div className="relative aspect-[4/3] bg-white overflow-hidden">
                {/* Decorative frame */}
                <div className="absolute -inset-1 bg-gradient-to-br from-school-blue/30 via-school-yellow/20 to-school-blue/30 rounded-[30px_20px_40px_25px] transform rotate-2 group-hover:rotate-0 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

                <div className="absolute inset-0 bg-white z-10"></div>
                <div className="absolute inset-0 z-20 overflow-hidden">
                  <ImageWithLoader
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    containerClassName="w-full h-full"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-school-blue/80 to-transparent z-30">
                  <p className="text-white font-medium drop-shadow-md">{image.alt}</p>
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
            At Golden Gate Int. School, we believe in preserving and celebrating our cultural heritage while preparing students for the future.
          </p>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Contact Us to Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default CulturalEventsGallery;
