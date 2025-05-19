import iptvImg from "../../../attached_assets/iptv.png";
import iptvImg1 from "../../../attached_assets/iptv1.png";
import iptvImg2 from "../../../attached_assets/iptv2.png";
import iptvImg3 from "../../../attached_assets/iptv3.png";
import realstateImg from "../../../attached_assets/realstate.png";
import realstateImg1 from "../../../attached_assets/realstate1.png";
import realstateImg2 from "../../../attached_assets/realstate2.png";
import realstateImg3 from "../../../attached_assets/realstate3.png";
import zwaImg from "../../../attached_assets/zwa.png";
import zwaImg1 from "../../../attached_assets/zwa1.png";
import zwaImg2 from "../../../attached_assets/zwa2.png";
import zwaImg3 from "../../../attached_assets/zwa3.png";
import hrCrmImg from "../../../attached_assets/hrCrmImg4.png";
import hrCrmIm1 from "../../../attached_assets/hrCrmImg1.png";
import hrCrmIm2 from "../../../attached_assets/hrCrmImg2.png";
import hrCrmIm3 from "../../../attached_assets/hrCrmImg3.png";
import ytVideoTrimmerImg from "../../../attached_assets/youtube.png";
import ytVideoTrimmerImg1 from "../../../attached_assets/youtube1.png";
import ytVideoTrimmerImg2 from "../../../attached_assets/youtube2.png";
import iimiinImg from "../../../attached_assets/iimiinImg.png";
import iimiinImg1 from "../../../attached_assets/iimiinImg1.png";
import iimiinImg2 from "../../../attached_assets/iimiinImg2.png";
import iimiinImg3 from "../../../attached_assets/iimiinImg3.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string; // Primary image for the card
  images: string[]; // Array of images for the slider
  technologies: string[];
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
    images: [iptvImg, iptvImg1, iptvImg2, iptvImg3], // Only one image available; slider will work with a single image
    technologies: ["React.js", "Vite", "Node.js", "MongoDB", "Tailwind CSS"],
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
    images: [realstateImg, realstateImg1, realstateImg2, realstateImg3], // Only one image available
    technologies: ["React.js", "Vite", "Firebase", "Tailwind CSS"],
    liveDemo: "https://buyhomeforless.com/",
    color: "secondary",
  },
  {
    id: 3,
    title: "ZWA NGA",
    description:
      "An internal dashboard for logistics and delivery management with fleet tracking, dispatch control, and live updates.",
    image: zwaImg,
    images: [zwaImg, zwaImg1, zwaImg2, zwaImg3], // Multiple images for slider
    technologies: ["React.js", "Vite", "Tailwind CSS", "REST API"],
    liveDemo: "https://admin.zwa-nga.com",
    color: "accent",
  },
  {
    id: 4,
    title: "YouTube Video Trimmer",
    description:
      "Trim and clip YouTube videos by selecting time ranges. Built for fast editing and content previewing.",
    image: ytVideoTrimmerImg,
    images: [ytVideoTrimmerImg, ytVideoTrimmerImg1, ytVideoTrimmerImg2], // Multiple images
    technologies: ["React.js", "Vite", "Tailwind CSS", "YouTube API"],
    liveDemo: "https://demo-project.com",
    color: "primary",
  },
  {
    id: 5,
    title: "HR CRM",
    description:
      "A CRM system for managing job applicants, employee records, interviews, and HR pipelines with role-based access.",
    image: hrCrmImg,
    images: [hrCrmImg, hrCrmIm1, hrCrmIm2, hrCrmIm3], // Multiple images
    technologies: ["React.js", "Vite", "Express.js", "MongoDB", "Tailwind CSS"],
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
    images: [iimiinImg, iimiinImg1, iimiinImg2, iimiinImg3], // Multiple images
    technologies: ["React.js", "Vite", "GSAP", "Tailwind CSS"],
    liveDemo: "https://admin.zwa-nga.com/",
    color: "accent",
  },
];
