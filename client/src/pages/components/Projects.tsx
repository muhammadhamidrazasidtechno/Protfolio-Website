import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const allProjects = [
  {
    title: "Project Management App",
    description: "A modern project management tool built with MERN Stack",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    link: "#",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "E-commerce Platform",
    description: "Full-featured e-commerce solution with cart and checkout",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    link: "#",
    technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
  },
  {
    title: "Real-Time Chat Application",
    description: "WebSocket-based chat application with real-time messaging",
    image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
    link: "#",
    technologies: ["Socket.io", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Fitness Tracking App",
    description: "Mobile-first fitness tracking application with user authentication",
    image: "https://images.unsplash.com/photo-1660592868727-858d28c3ba52",
    link: "#",
    technologies: ["React", "Firebase", "Material-UI", "Chart.js"],
  },
];

interface ProjectsProps {
  limit?: number;
}

export default function Projects({ limit }: ProjectsProps) {
  const projects = limit ? allProjects.slice(0, limit) : allProjects;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}