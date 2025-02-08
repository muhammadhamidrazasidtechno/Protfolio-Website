import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SiReact, SiTypescript, SiNodedotjs, SiTailwindcss, SiMongodb, SiFirebase, SiNextdotjs, SiExpress, SiSocketdotio } from "react-icons/si";

const skills = [
  { name: "React.js", icon: SiReact, color: "text-blue-500", category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white", category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600", category: "Frontend" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500", category: "Backend" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-700", category: "Backend" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600", category: "Backend" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-500", category: "Backend" },
  { name: "Socket.io", icon: SiSocketdotio, color: "text-black dark:text-white", category: "Backend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500", category: "Frontend" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Full-Stack Developer with expertise in modern web technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center">
                  <skill.icon className={`w-12 h-12 ${skill.color} mb-4`} />
                  <h3 className="font-medium">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground mt-1">
                    {skill.category}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}