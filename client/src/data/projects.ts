export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  liveDemo: string;
  featured?: boolean;
  color: "primary" | "secondary" | "accent";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Live Chat Web Application",
    description: "A full-fledged live chat platform with real-time messaging, user presence indicators, and conversation history. Built with Socket.io for both frontend and backend integration.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Socket.io", "MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/muhammadhamidraza",
    liveDemo: "https://chat-app-demo.dev",
    featured: true,
    color: "primary"
  },
  {
    id: 2,
    title: "E-commerce Platform with Stripe",
    description: "A comprehensive e-commerce application with product catalog, shopping cart, and secure checkout powered by Stripe payment processing. Includes order management and inventory tracking.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "MongoDB", "Stripe", "AWS S3", "Tailwind CSS"],
    github: "https://github.com/muhammadhamidraza",
    liveDemo: "https://ecommerce-demo.dev",
    featured: true,
    color: "secondary"
  },
  {
    id: 3,
    title: "Location-Based Services App",
    description: "A mobile-responsive application that utilizes Google Maps to provide location-based services. Features include business discovery, route optimization, and real-time tracking.",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React.js", "Google Maps API", "Node.js", "Firebase"],
    github: "https://github.com/muhammadhamidraza",
    liveDemo: "https://maps-app-demo.dev",
    color: "accent"
  },
  {
    id: 4,
    title: "Real-time Notification System",
    description: "A push notification system built with Firebase that delivers real-time alerts to web and mobile users. Includes message scheduling, user segmentation, and delivery analytics.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Firebase", "React.js", "Node.js", "Service Workers"],
    github: "https://github.com/muhammadhamidraza",
    liveDemo: "https://notifications-demo.dev",
    color: "primary"
  },
  {
    id: 5,
    title: "AWS-Powered Image Gallery",
    description: "A responsive image gallery application that uses AWS S3 for storage and image processing. Features include drag-and-drop uploads, automatic resizing, and sharing capabilities.",
    image: "https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["AWS S3", "React.js", "Express.js", "Tailwind CSS"],
    github: "https://github.com/muhammadhamidraza",
    liveDemo: "https://gallery-demo.dev",
    color: "secondary"
  },
  {
    id: 6,
    title: "MERN Task Management System",
    description: "A comprehensive task management application built on the MERN stack. Features include project organization, task assignment, deadline tracking, and progress visualization.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/muhammadhamidraza",
    liveDemo: "https://tasks-demo.dev",
    color: "accent"
  },
];
