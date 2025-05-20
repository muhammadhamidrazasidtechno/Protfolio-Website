import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import SkillBar from "@/components/shared/SkillBar";
import { skills, tagSkills } from "@/data/skills";
import { fadeIn, staggerContainer } from "@/lib/framer-animations";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "fas fa-code",
      color: "primary",
      skills: skills.filter(skill => skill.category === "frontend"),
    },
    {
      title: "Backend",
      icon: "fas fa-server",
      color: "secondary",
      skills: skills.filter(skill => skill.category === "backend"),
    },
    {
      title: "Tools & Others",
      icon: "fas fa-toolbox",
      color: "accent",
      skills: skills.filter(skill => skill.category === "tools"),
    },
  ];

  return (
    <section id="skills" className="py-20 bg-darkBg2 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="My Skills"
          subtitle="Technologies and tools I work with to bring ideas to life."
          lightBackground={false}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className={`bg-darkBg/50 backdrop-blur-md p-6 rounded-xl border border-${category.color}/20 hover:shadow-${category.color === "primary" ? "neon" : category.color === "secondary" ? "neon-cyan" : "neon-orange"} transition-all duration-300 group`}
              variants={fadeIn("up", index * 0.1)}
            >
              <div className="flex items-center mb-6">
                <motion.div
                  className={`w-12 h-12 flex items-center justify-center rounded-full bg-${category.color} bg-opacity-20 text-black text-2xl mr-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <i className={category.icon}></i>
                </motion.div>
                <h3 className="text-xl font-bold font-space">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <SkillBar
                    key={idx}
                    name={skill.name}
                    percentage={skill.percentage}
                    color={category.color}
                    delay={idx * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Tags Cloud */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {tagSkills.map((tag, index) => (
            <motion.span
              key={index}
              className={`px-4 py-2 bg-darkBg/50 backdrop-blur-md rounded-full text-sm hover:shadow-${tag.color} hover:scale-105 transition-all duration-300 cursor-default flex items-center`}
              variants={fadeIn("up", index * 0.03)}
              whileHover={{ y: -5 }}
            >
              <i className={`${tag.icon} text-${tag.color} mr-2`}></i>
              {tag.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
