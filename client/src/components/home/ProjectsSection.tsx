import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import ProjectCard from "@/components/shared/ProjectCard";
import { Link } from "wouter";
import { projects } from "@/data/projects";
import { staggerContainer, fadeIn } from "@/lib/framer-animations";

const ProjectsSection = () => {
  // Show only the first 4 projects on the home page
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="My Projects" 
          subtitle="A selection of my recent work and personal projects."
          accentColor="accent"
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn("up", 0.3)}
        >
          <Link href="/projects">
            <motion.a 
              className="inline-block px-6 py-3 border border-primary text-primary hover:bg-primary hover:bg-opacity-10 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects <i className="fas fa-arrow-right ml-2"></i>
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
