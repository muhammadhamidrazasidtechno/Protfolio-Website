import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import useTilt from "@/hooks/use-tilt";
import { fadeIn, cardHoverAnimation } from "@/lib/framer-animations";
import { useRef } from "react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const tiltRef = useRef<HTMLDivElement>(null);
  useTilt(tiltRef);

  const colorMap = {
    primary: {
      text: "text-primary",
      border: "border-primary",
      shadow: "shadow-neon",
      bg: "bg-primary"
    },
    secondary: {
      text: "text-secondary",
      border: "border-secondary",
      shadow: "shadow-neon-cyan",
      bg: "bg-secondary"
    },
    accent: {
      text: "text-accent",
      border: "border-accent",
      shadow: "shadow-neon-orange",
      bg: "bg-accent"
    }
  };

  const colors = colorMap[project.color as keyof typeof colorMap];

  return (
    <motion.div
      ref={tiltRef}
      className={`bg-darkBg2/50 backdrop-blur-md rounded-xl overflow-hidden group hover:${colors.shadow} transition-all duration-500 border border-white/5 h-full flex flex-col`}
      variants={fadeIn("up", index * 0.1)}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <div className="h-48 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {project.featured && (
          <div className={`absolute top-0 left-0 ${colors.bg} text-darkBg px-3 py-1 text-xs font-bold`}>
            FEATURED
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className={`text-xl font-bold font-space mb-2 ${colors.text}`}>{project.title}</h3>
        <p className="text-secondaryText mb-4 text-sm flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className={`text-black px-2 py-1 ${colors.bg} bg-opacity-20 rounded-full`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between">
          <motion.a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className={`${colors.text} hover:text-secondary transition-colors duration-300 flex items-center gap-1 text-sm`}
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-globe"></i> Live Demo
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${colors.text} hover:text-secondary transition-colors duration-300 flex items-center gap-1 text-sm`}
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-github"></i> GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
