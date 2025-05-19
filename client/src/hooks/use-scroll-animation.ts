import { useEffect, RefObject, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Custom hook to trigger animations on scroll
 * @param ref - Reference to the element to observe
 * @param options - Configuration options for the intersection observer
 * @returns isVisible - Whether the element is in view
 */
const useScrollAnimation = (
  ref: RefObject<HTMLElement>,
  options: ScrollAnimationOptions = {}
): boolean => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (!ref.current) return;
    
    const element = ref.current;
    const defaultOptions = {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px',
      triggerOnce: options.triggerOnce !== undefined ? options.triggerOnce : true
    };
    
    const observer = new IntersectionObserver(([entry]) => {
      // If the element is intersecting, set it as visible
      if (entry.isIntersecting) {
        setIsVisible(true);
        
        // If we only want to trigger once, unobserve after visibility
        if (defaultOptions.triggerOnce) {
          observer.unobserve(element);
        }
      } else if (!defaultOptions.triggerOnce) {
        // If not triggering once, toggle visibility off when not intersecting
        setIsVisible(false);
      }
    }, {
      threshold: defaultOptions.threshold,
      rootMargin: defaultOptions.rootMargin
    });
    
    // Start observing the element
    observer.observe(element);
    
    // Cleanup function to stop observing when component unmounts
    return () => {
      observer.unobserve(element);
    };
  }, [ref, options]);
  
  return isVisible;
};

export default useScrollAnimation;
