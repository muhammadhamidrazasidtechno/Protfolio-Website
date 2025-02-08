import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  SiReact, SiTypescript, SiNodedotjs, SiTailwindcss, SiMongodb,
  SiFirebase, SiNextdotjs, SiExpress, SiSocketdotio, SiHtml5,
  SiCss3, SiJavascript, SiBootstrap, SiMui, SiPython, SiPostgresql
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skillCategories = [
  {
    title: "Frontend Expertise",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "text-yellow-500" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "React.js", icon: SiReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
      { name: "Material-UI", icon: SiMui, color: "text-blue-600" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-700" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    ]
  },
  {
    title: "Real-Time Communication",
    skills: [
      { name: "Socket.io", icon: SiSocketdotio, color: "text-black dark:text-white" },
      { name: "WebSocket", icon: SiSocketdotio, color: "text-purple-500" },
    ]
  },
  {
    title: "Additional Skills",
    skills: [
      { name: "Python", icon: SiPython, color: "text-blue-500" },
      { name: "API Integration", icon: TbApi, color: "text-green-600" },
    ]
  }
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
            Full-Stack Developer specializing in MERN Stack and modern web technologies
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => (
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
                        <h4 className="font-medium text-center">{skill.name}</h4>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Additional expertise includes UI/UX Design, Responsive Design,
            User Authentication (JWT, OAuth2.0), and Data Modeling
          </p>
        </motion.div>
      </div>
    </section>
  );
}