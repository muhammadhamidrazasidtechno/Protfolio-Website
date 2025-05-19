import iptvImg from "../../../attached_assets/iptv.png";
import realstateImg from "../../../attached_assets/realstate.png";
import zwaImg from "../../../attached_assets/zwa.png";
import hrCrmImg from "../../../attached_assets/hrCrmImg4.png";
import ytVideoTrimmerImg from "../../../attached_assets/youtube.png";
import iimiinImg from "../../../attached_assets/iimiinImg.png";

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
    title: "IPTV Dashboard",
    description:
      "An IPTV admin panel to manage users, billing, live stream status, and analytics with a responsive UI.",
    image: iptvImg,
    technologies: ["React.js", "Vite", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com",
    liveDemo: "https://frontend.dashcore.eu/",
    featured: true,
    color: "primary",
  },
  {
    id: 2,
    title: "Real Estate Website",
    description:
      "A fully responsive platform to browse, search, and filter properties with agent contact and lead generation features.",
    image: realstateImg,
    technologies: ["React.js", "Vite", "Firebase", "Tailwind CSS"],
    github: "https://github.com",
    liveDemo: "https://buyhomeforless.com/",
    color: "secondary",
  },
  {
    id: 3,
    title: "ZWA NGA",
    description:
      "An internal dashboard for logistics and delivery management with fleet tracking, dispatch control, and live updates.",
    image: zwaImg,
    technologies: ["React.js", "Vite", "Tailwind CSS", "REST API"],
    github: "https://github.com",
    liveDemo: "https://admin.zwa-nga.com",
    color: "accent",
  },
  {
    id: 4,
    title: "YouTube Video Trimmer",
    description:
      "Trim and clip YouTube videos by selecting time ranges. Built for fast editing and content previewing.",
    image: ytVideoTrimmerImg,
    technologies: ["React.js", "Vite", "Tailwind CSS", "YouTube API"],
    github: "https://github.com",
    liveDemo: "https://demo-project.com",
    color: "primary",
  },
  {
    id: 5,
    title: "HR CRM",
    description:
      "A CRM system for managing job applicants, employee records, interviews, and HR pipelines with role-based access.",
    image: hrCrmImg,
    technologies: ["React.js", "Vite", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com",
    liveDemo: "https://transferweb.tech/",
    featured: true,
    color: "secondary",
  },
  {
    id: 6,
    title: "IIMIIN",
    description:
      "A custom admin panel for managing e-commerce categories, orders, and customers with animated transitions and UI polish.",
    image: iimiinImg,
    technologies: ["React.js", "Vite", "GSAP", "Tailwind CSS"],
    github: "https://github.com",
    liveDemo: "https://admin.zwa-nga.com/",
    color: "accent",
  },
];
