export interface Skill {
  name: string;
  percentage: number;
  category: "frontend" | "backend" | "tools";
}

export interface TagSkill {
  name: string;
  icon: string;
  color: "primary" | "secondary" | "accent" | "yellow-400";
}

export const skills: Skill[] = [
  // Frontend Skills
  {
    name: "React.js",
    percentage: 92,
    category: "frontend"
  },
  {
    name: "Next.js",
    percentage: 88,
    category: "frontend"
  },
  {
    name: "Responsive Web Design",
    percentage: 90,
    category: "frontend"
  },
  {
    name: "HTML5 & CSS3",
    percentage: 95,
    category: "frontend"
  },
  {
    name: "Advanced JavaScript",
    percentage: 90,
    category: "frontend"
  },
  
  // Backend Skills
  {
    name: "Node.js",
    percentage: 88,
    category: "backend"
  },
  {
    name: "Express.js",
    percentage: 85,
    category: "backend"
  },
  {
    name: "MongoDB",
    percentage: 90,
    category: "backend"
  },
  {
    name: "RESTful APIs",
    percentage: 92,
    category: "backend"
  },
  {
    name: "Socket.io",
    percentage: 85,
    category: "backend"
  },
  
  // Tools & Services
  {
    name: "AWS",
    percentage: 82,
    category: "tools"
  },
  {
    name: "Firebase",
    percentage: 88,
    category: "tools"
  },
  {
    name: "Stripe",
    percentage: 80,
    category: "tools"
  },
  {
    name: "Git & Version Control",
    percentage: 92,
    category: "tools"
  },
  {
    name: "Google Maps API",
    percentage: 85,
    category: "tools"
  }
];

export const tagSkills: TagSkill[] = [
  {
    name: "React.js",
    icon: "fab fa-react",
    color: "primary"
  },
  {
    name: "Node.js",
    icon: "fab fa-node-js",
    color: "secondary"
  },
  {
    name: "MongoDB",
    icon: "fas fa-database",
    color: "accent"
  },
  {
    name: "Express.js",
    icon: "fas fa-server",
    color: "primary"
  },
  {
    name: "Next.js",
    icon: "fab fa-react",
    color: "secondary"
  },
  {
    name: "AWS",
    icon: "fab fa-aws",
    color: "yellow-400"
  },
  {
    name: "Socket.io",
    icon: "fas fa-plug",
    color: "primary"
  },
  {
    name: "Stripe",
    icon: "fab fa-stripe-s",
    color: "secondary"
  },
  {
    name: "RESTful APIs",
    icon: "fas fa-exchange-alt",
    color: "accent"
  },
  {
    name: "Firebase",
    icon: "fas fa-fire",
    color: "yellow-400"
  },
  {
    name: "JavaScript",
    icon: "fab fa-js",
    color: "primary"
  },
  {
    name: "Responsive",
    icon: "fas fa-mobile-alt",
    color: "secondary"
  }
];
