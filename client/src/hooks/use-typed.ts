import { useEffect, RefObject } from 'react';

/**
 * Custom hook to create a typing animation effect
 * @param ref - Reference to the element where typing will occur
 * @param strings - Array of strings to type
 * @param typeSpeed - Speed of typing in milliseconds
 * @param backSpeed - Speed of erasing in milliseconds
 * @param backDelay - Delay before erasing in milliseconds
 * @param loop - Whether to loop through strings
 */
const useTyped = (
  ref: RefObject<HTMLElement>,
  strings: string[],
  typeSpeed: number = 100,
  backSpeed: number = 50,
  backDelay: number = 1500,
  loop: boolean = true
) => {
  useEffect(() => {
    if (!ref.current) return;
    
    const element = ref.current;
    let currentStringIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingTimeout: number | null = null;
    
    const type = () => {
      // Clear any existing timeout
      if (typingTimeout) {
        window.clearTimeout(typingTimeout);
      }
      
      // Get the current string from the array
      const currentString = strings[currentStringIndex];
      
      // Calculate how much of the string to show
      let displayText = currentString.substring(0, currentCharIndex);
      
      // Update the element's text
      element.textContent = displayText;
      
      // If we're deleting, remove a character
      if (isDeleting) {
        currentCharIndex--;
      } else {
        // If we're typing, add a character
        currentCharIndex++;
      }
      
      // If we've completed typing the full string
      if (!isDeleting && currentCharIndex === currentString.length + 1) {
        // Start deleting after a delay
        isDeleting = true;
        typingTimeout = window.setTimeout(type, backDelay);
      } 
      // If we've deleted the entire string
      else if (isDeleting && currentCharIndex === 0) {
        // Reset and move to the next string
        isDeleting = false;
        currentStringIndex = (currentStringIndex + 1) % strings.length;
        
        // If we've gone through all strings and loop is false, stop
        if (currentStringIndex === 0 && !loop) {
          return;
        }
        
        // Type the next string
        typingTimeout = window.setTimeout(type, 500);
      } else {
        // Set the speed based on whether we're typing or deleting
        const speed = isDeleting ? backSpeed : typeSpeed;
        typingTimeout = window.setTimeout(type, speed);
      }
    };
    
    // Start the typing effect
    typingTimeout = window.setTimeout(type, 1000);
    
    // Cleanup function
    return () => {
      if (typingTimeout) {
        window.clearTimeout(typingTimeout);
      }
    };
  }, [ref, strings, typeSpeed, backSpeed, backDelay, loop]);
};

export default useTyped;
