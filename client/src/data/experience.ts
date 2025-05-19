export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  color: "primary" | "secondary" | "accent";
  icon: string;
}

export const experiences: Experience[] = [
  {
    role: "MERN Stack Developer",
    company: "SID Techno",
    period: "Mar 2024 - Present",
    description: 
      "Design, develop, and maintain dynamic web applications using MongoDB, Express.js, React.js, and Node.js. Build RESTful APIs and interactive front-end components. Implement Firebase Realtime Database for real-time data synchronization and Firebase Push Notifications for mobile user engagement. Develop live chat applications with Socket.io and utilize AWS S3 for efficient image storage.",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Firebase", "AWS", "Socket.io"],
    color: "primary",
    icon: "fas fa-briefcase"
  },
  {
    role: "MERN Stack Internship",
    company: "SID Techno",
    period: "Dec 2023 - Feb 2024",
    description: 
      "Worked on diverse projects, gaining hands-on experience in front-end and back-end development. Contributed to building responsive, user-friendly web applications using JavaScript, HTML, CSS, and modern frameworks. Gained practical experience in Node.js for back-end development and explored Angular to enhance front-end skills.",
    skills: ["JavaScript", "HTML/CSS", "Node.js", "React.js", "Responsive Design"],
    color: "secondary",
    icon: "fas fa-laptop-code"
  }
];
