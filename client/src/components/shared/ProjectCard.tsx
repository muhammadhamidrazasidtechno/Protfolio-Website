import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import useTilt from "@/hooks/use-tilt";
import { fadeIn } from "@/lib/framer-animations";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Custom arrow components for the slider
const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary/80 hover:bg-primary text-white rounded-full p-2 shadow-lg z-10 transition-colors"
  >
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary/80 hover:bg-primary text-white rounded-full p-2 shadow-lg z-10 transition-colors"
  >
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const tiltRef = useRef<HTMLDivElement>(null);
  useTilt(tiltRef);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const colorMap = {
    primary: {
      text: "text-primary",
      border: "border-primary",
      shadow: "shadow-neon",
      bg: "bg-primary",
    },
    secondary: {
      text: "text-secondary",
      border: "border-secondary",
      shadow: "shadow-neon-cyan",
      bg: "bg-secondary",
    },
    accent: {
      text: "text-accent",
      border: "border-accent",
      shadow: "shadow-neon-orange",
      bg: "bg-accent",
    },
  };

  const colors = colorMap[project.color as keyof typeof colorMap];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    customPaging: () => (
      <div className="w-3 h-3 bg-primary/50 rounded-full hover:bg-primary transition-colors" />
    ),
    appendDots: (dots: React.ReactNode) => (
      <div className="pb-4">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <motion.div
        ref={tiltRef}
        className={`bg-darkBg2/50 backdrop-blur-md rounded-xl overflow-hidden group hover:${colors.shadow} transition-all duration-500 border border-white/5 h-full flex flex-col`}
        variants={fadeIn("up", index * 0.1)}
        initial="hidden"
        animate="visible"
      >
        <div className="h-48 overflow-hidden relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {project.featured && (
            <div
              className={`absolute top-0 left-0 ${colors.bg} text-darkBg px-3 py-1 text-xs font-bold`}
            >
              FEATURED
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className={`text-xl font-bold font-space mb-2 ${colors.text}`}>
            {project.title}
          </h3>
          <p className="text-secondaryText mb-4 text-sm flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className={`px-2 py-1 ${colors.bg} bg-opacity-20 rounded-full text-sm`}
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
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Live Demo
            </motion.a>
            <Button
              variant="outline"
              onClick={openModal}
              className={`hover:bg-primary hover:text-white transition-colors ${colors.text} border-${project.color} text-sm`}
            >
              View Details
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Modal with project details */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative bg-darkBg2/90 backdrop-blur-md p-6 rounded-lg max-w-4xl w-full mx-4 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              className="absolute top-4 right-4 text-white hover:bg-primary/20"
              onClick={closeModal}
            >
              <X className="h-8 w-8" />
            </Button>
            <h2 className={`text-2xl font-bold mb-4 ${colors.text}`}>{project.title}</h2>
            <p className="text-secondaryText mb-6">{project.description}</p>
            <Slider {...sliderSettings}>
              {project.images.map((image, idx) => (
                <div key={idx} className="p-4">
                  <img
                    src={image}
                    alt={`${project.title} Image ${idx + 1}`}
                    className="w-full h-auto max-h-[50vh] object-contain rounded-lg"
                  />
                </div>
              ))}
            </Slider>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 ${colors.bg} bg-opacity-20 text-white rounded-full text-sm`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default ProjectCard;