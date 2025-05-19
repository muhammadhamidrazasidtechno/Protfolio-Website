import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import ProjectCard from "@/components/shared/ProjectCard";
import { projects } from "@/data/projects";
import { staggerContainer } from "@/lib/framer-animations";
import { pageVariants } from "@/lib/framer-animations";
import { Helmet } from "react-helmet";

const Projects = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <Helmet>
        <title>Projects - Muhammad Hamid Raza | MERN Stack Developer</title>
        <meta name="description" content="Browse Muhammad Hamid Raza's portfolio of web development projects built with React.js, Next.js, and the MERN stack." />
      </Helmet>

      <main className="py-20 pt-32">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            title="My Projects"
            subtitle="A showcase of my work, personal projects, and contributions."
            accentColor="accent"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </main>
    </motion.div>
  );
};

export default Projects;
