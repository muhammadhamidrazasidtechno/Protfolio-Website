import { Variants } from "framer-motion";

// Fade in animation
export const fadeIn = (
  direction: "up" | "down" | "left" | "right" | "none" = "none",
  delay: number = 0.1
): Variants => {
  let xValue = 0;
  let yValue = 0;

  switch (direction) {
    case "up":
      yValue = 40;
      break;
    case "down":
      yValue = -40;
      break;
    case "left":
      xValue = 40;
      break;
    case "right":
      xValue = -40;
      break;
  }

  return {
    hidden: {
      x: xValue,
      y: yValue,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 80,
        delay,
      },
    },
  };
};

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Pulse animation
export const pulseAnimation: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

// Float animation for hero section
export const floatAnimation: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

// Rotate animation for skills or icons
export const rotateAnimation: Variants = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Text reveal animation for typing effect
export const textRevealAnimation: Variants = {
  hidden: { width: "0%" },
  visible: {
    width: "100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

// Card hover animation
export const cardHoverAnimation = {
  rest: {
    scale: 1,
    boxShadow: "0 0 0px rgba(108, 99, 255, 0)",
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 300,
    },
  },
  hover: {
    scale: 1.02,
    y: -5,
    boxShadow: "0 0 15px rgba(108, 99, 255, 0.7)",
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 300,
    },
  },
};

// Page transition animations
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

// Neon text animation
export const neonTextAnimation: Variants = {
  initial: {
    textShadow: "0 0 3px rgba(108, 99, 255, 0.5), 0 0 5px rgba(108, 99, 255, 0.3)",
  },
  animate: {
    textShadow: [
      "0 0 3px rgba(108, 99, 255, 0.5), 0 0 5px rgba(108, 99, 255, 0.3)",
      "0 0 5px rgba(108, 99, 255, 0.7), 0 0 10px rgba(108, 99, 255, 0.5)",
      "0 0 3px rgba(108, 99, 255, 0.5), 0 0 5px rgba(108, 99, 255, 0.3)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};
