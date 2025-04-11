
import { useState, useEffect, memo } from 'react';
import { cn } from '@/lib/utils';

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  sizes?: string;
}

const ImageWithLoader = memo(({
  src,
  alt,
  className = '',
  containerClassName = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw'
}: ImageWithLoaderProps) => {
  const [isLoading, setIsLoading] = useState(!priority);
  const [isLoaded, setIsLoaded] = useState(false);

  // Extract ImageKit parameters for optimization
  const optimizedSrc = src.includes('imagekit.io')
    ? `${src}${src.includes('?') ? '&' : '?'}tr=q-70,f-auto`
    : src;

  useEffect(() => {
    // Reset state when src changes
    setIsLoading(!priority);
    setIsLoaded(false);

    if (priority) {
      const img = new Image();
      img.src = optimizedSrc;
      img.onload = () => {
        setIsLoading(false);
        setIsLoaded(true);
      };
      img.onerror = () => {
        setIsLoading(false);
      };
    }
  }, [optimizedSrc, priority]);

  return (
    <div className={cn('relative overflow-hidden', containerClassName)}>
      {isLoading && !priority && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
      <img
        src={optimizedSrc}
        alt={alt}
        className={cn(
          'w-full h-full object-cover transition-all duration-300 ease-out',
          isLoading && !isLoaded ? 'scale-105 blur-sm' : 'scale-100 blur-0',
          className
        )}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        sizes={sizes}
        onLoad={() => {
          setIsLoading(false);
          setIsLoaded(true);
        }}
      />
    </div>
  );
});

ImageWithLoader.displayName = 'ImageWithLoader';

export default ImageWithLoader;
