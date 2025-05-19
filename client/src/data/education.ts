export interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
  highlightsTitle: string;
  highlights: string[];
  icon: string;
  color: "primary" | "secondary" | "accent";
}

export interface Certification {
  title: string;
  issuer: string;
  color: "primary" | "secondary" | "accent" | "primary";
}

export const education: Education[] = [
  {
    institution: "Government College of Commerce & Economics",
    degree: "Bachelor's Degree",
    period: "In Progress",
    description:
      "Currently pursuing a degree with a focus on commerce, economics, and technology applications in business contexts. Applying technical skills to solve real-world business challenges.",
    highlightsTitle: "Key Interests",
    highlights: [
      "Web Development",
      "E-commerce Solutions",
      "Business Analytics",
      "Digital Transformation",
    ],
    icon: "fas fa-university",
    color: "primary",
  },
  {
    institution: "Government College of Commerce & Economics",
    degree: "Intermediate",
    period: "2022 - 2024",
    description:
      "Completed intermediate education with a focus on commerce and computer science. Developed strong analytical and problem-solving skills while maintaining excellent academic performance.",
    highlightsTitle: "Key Subjects",
    highlights: ["Commerce", "Computer Science", "Economics", "Mathematics"],
    icon: "fas fa-school",
    color: "secondary",
  },
  {
    institution: "Saylani Mass IT Training",
    degree: "Full Stack Web Development",
    period: "2022 - 2023",
    description:
      "Completed a comprehensive full stack web development course, gaining expertise in HTML, CSS, JavaScript, React.js, Node.js, and database management. Developed multiple projects showcasing practical applications of learned skills.",
    highlightsTitle: "Projects",
    highlights: [
      "Portfolio Website",
      "E-commerce Platform",
      "Blog Application",
      "Real-time Chat App",
    ],
    icon: "fas fa-code",
    color: "accent",
  },
];

export const certifications: Certification[] = [
  {
    title: "React.js Certification",
    issuer: "Udemy",
    color: "primary",
  },
  {
    title: "Advanced JavaScript",
    issuer: "Coursera",
    color: "secondary",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    color: "accent",
  },
  {
    title: "UI/UX Fundamentals",
    issuer: "Google",
    color: "primary",
  },
];
