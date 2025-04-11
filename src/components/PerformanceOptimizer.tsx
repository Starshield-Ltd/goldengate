import { useEffect } from 'react';

/**
 * Component that applies various performance optimizations to the website
 * - Preloads critical images
 * - Applies resource hints
 * - Optimizes rendering
 */
const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical images
    const criticalImages = [
      "https://ik.imagekit.io/edhumbling/golden%20gate/WhatsApp%20Image%202025-04-11%20at%2016.41.51_a712a956.jpg",
      "https://ik.imagekit.io/edhumbling/golden%20gate/WhatsApp%20Image%202025-04-11%20at%2016.36.14_41d6b5c5.jpg?updatedAt=1744390976920&tr=q-70,f-auto"
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // Optimize rendering
    const optimizeRendering = () => {
      // Use requestIdleCallback to defer non-critical operations
      if ('requestIdleCallback' in window) {
        // @ts-ignore - TypeScript doesn't recognize requestIdleCallback
        window.requestIdleCallback(() => {
          // Remove any unnecessary event listeners
          // Optimize animations
          document.querySelectorAll('.animate-pulse').forEach(el => {
            if (!isElementInViewport(el as HTMLElement)) {
              el.classList.remove('animate-pulse');
            }
          });
        });
      }
    };

    // Check if element is in viewport
    const isElementInViewport = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Run optimization after initial load
    window.addEventListener('load', optimizeRendering);
    
    // Clean up
    return () => {
      window.removeEventListener('load', optimizeRendering);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;
