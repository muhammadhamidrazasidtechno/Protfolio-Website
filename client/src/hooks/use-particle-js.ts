import { useEffect } from 'react';

interface ParticleConfig {
  particles: {
    number: {
      value: number;
      density: {
        enable: boolean;
        value_area: number;
      };
    };
    color: {
      value: string;
    };
    shape: {
      type: string;
      stroke: {
        width: number;
        color: string;
      };
    };
    opacity: {
      value: number;
      random: boolean;
      anim: {
        enable: boolean;
        speed: number;
        opacity_min: number;
        sync: boolean;
      };
    };
    size: {
      value: number;
      random: boolean;
      anim: {
        enable: boolean;
        speed: number;
        size_min: number;
        sync: boolean;
      };
    };
    line_linked: {
      enable: boolean;
      distance: number;
      color: string;
      opacity: number;
      width: number;
    };
    move: {
      enable: boolean;
      speed: number;
      direction: string;
      random: boolean;
      straight: boolean;
      out_mode: string;
      bounce: boolean;
      attract: {
        enable: boolean;
        rotateX: number;
        rotateY: number;
      };
    };
  };
  interactivity: {
    detect_on: string;
    events: {
      onhover: {
        enable: boolean;
        mode: string;
      };
      onclick: {
        enable: boolean;
        mode: string;
      };
      resize: boolean;
    };
    modes: {
      grab: {
        distance: number;
        line_linked: {
          opacity: number;
        };
      };
      bubble: {
        distance: number;
        size: number;
        duration: number;
        opacity: number;
        speed: number;
      };
      repulse: {
        distance: number;
        duration: number;
      };
      push: {
        particles_nb: number;
      };
      remove: {
        particles_nb: number;
      };
    };
  };
  retina_detect: boolean;
}

/**
 * Custom hook to initialize particles.js with a specified configuration
 * @param containerId - The ID of the container element for particles
 * @param config - The particles.js configuration object
 */
const useParticleJs = (containerId: string, config: ParticleConfig) => {
  useEffect(() => {
    // Check if particles.js is available in the global scope
    if (typeof window !== 'undefined' && (window as any).particlesJS) {
      // Initialize particles.js with the provided ID and configuration
      (window as any).particlesJS(containerId, config);
      
      // Cleanup function to destroy particles when the component unmounts
      return () => {
        // Unfortunately, particles.js doesn't provide a native cleanup method
        // This is a workaround to remove particles
        const container = document.getElementById(containerId);
        if (container) {
          while (container.firstChild) {
            container.removeChild(container.firstChild);
          }
        }
      };
    }
  }, [containerId]);
};

export default useParticleJs;
