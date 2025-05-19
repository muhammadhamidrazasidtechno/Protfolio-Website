import { useEffect, RefObject } from 'react';

interface TiltOptions {
  max?: number;
  speed?: number;
  glare?: boolean;
  maxGlare?: number;
}

/**
 * Custom hook to add a tilt effect to an element
 * @param ref - Reference to the element to apply tilt
 * @param options - Configuration options for the tilt effect
 */
const useTilt = (
  ref: RefObject<HTMLElement>,
  options: TiltOptions = {
    max: 15,
    speed: 400,
    glare: true,
    maxGlare: 0.2
  }
) => {
  useEffect(() => {
    // Return early if no element or VanillaTilt is not available
    if (!ref.current || typeof window === 'undefined' || !(window as any).VanillaTilt) {
      return;
    }
    
    const element = ref.current;
    // Initialize tilt effect
    (window as any).VanillaTilt.init(element, {
      max: options.max || 15,
      speed: options.speed || 400,
      glare: options.glare !== undefined ? options.glare : true,
      "max-glare": options.maxGlare || 0.2,
    });
    
    // Cleanup function to destroy tilt instance when component unmounts
    return () => {
      if (element.vanillaTilt) {
        element.vanillaTilt.destroy();
      }
    };
  }, [ref, options]);
};

export default useTilt;
