import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { fadeIn, staggerContainer } from "@/lib/framer-animations";
import BgImage from "../../../../attached_assets/bgImg.jpg";
const valueItems = [
  {
    icon: "fas fa-lightbulb",
    title: "Innovation",
    description: "I embrace new technologies and methodologies to create cutting-edge solutions.",
    color: "primary",
    delay: 0.1,
  },
  {
    icon: "fas fa-code",
    title: "Clean Code",
    description: "I believe in writing maintainable, scalable, and well-documented code.",
    color: "secondary",
    delay: 0.2,
  },
  {
    icon: "fas fa-users",
    title: "User-Centric",
    description: "I prioritize accessibility and user experience in every project.",
    color: "accent",
    delay: 0.3,
  },
  {
    icon: "fas fa-rocket",
    title: "Growth Mindset",
    description: "I'm committed to continuous learning and improvement.",
    color: "primary",
    delay: 0.4,
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="About Me" subtitle="Get to know more about me, my background, and what drives me as a developer." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn("right")}
            className="relative"
          >
            <div className="w-full h-80 md:h-96 rounded-xl overflow-hidden relative group">
              <img
                src={BgImage}
                alt="Muhammad Hamid Raza working"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-transparent to-transparent"></div>

              {/* Neon border effect with animation */}
              <motion.div
                className="absolute inset-0 border border-primary rounded-xl"
                animate={{
                  boxShadow: ["0 0 5px rgba(108, 99, 255, 0.5)", "0 0 15px rgba(108, 99, 255, 0.8)", "0 0 5px rgba(108, 99, 255, 0.5)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
            </div>

            <motion.div
              className="absolute -bottom-6 -right-6 bg-darkBg2/80 backdrop-blur-md p-4 rounded-lg shadow-lg max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-secondary">
                <span className="text-primary">const</span> developer = {"{"}
                <br />
                &nbsp;&nbsp;name: <span className="text-accent">"Muhammad Hamid Raza"</span>,
                <br />
                &nbsp;&nbsp;role: <span className="text-accent">"MERN Stack Developer"</span>,
                <br />
                &nbsp;&nbsp;location: <span className="text-accent">"Pakistan"</span>
                <br />
                {"}"};
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h3
              className="text-2xl font-bold font-space mb-4 text-primary"
              variants={fadeIn("up", 0.1)}
            >
              Who I Am
            </motion.h3>

            <motion.p
              className="text-lightText mb-6 leading-relaxed"
              variants={fadeIn("up", 0.2)}
            >
              I'm a passionate MERN Stack Front-End Developer with a strong focus on creating
              clean, efficient, and user-friendly web applications. With expertise in React.js,
              Next.js, and modern JavaScript, I build responsive interfaces that deliver
              exceptional user experiences.
            </motion.p>

            <motion.p
              className="text-secondaryText mb-8 leading-relaxed"
              variants={fadeIn("up", 0.3)}
            >
              My journey in web development started at Government College of Commerce & Economics and was enhanced through
              Saylani Mass IT Training. I combine technical skills with creative problem-solving
              to deliver solutions that exceed expectations.
            </motion.p>

            <motion.h3
              className="text-2xl font-bold font-space mb-4 text-primary"
              variants={fadeIn("up", 0.4)}
            >
              My Values
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {valueItems.map((item, index) => (
                <motion.div
                  key={index}
                  className={`bg-darkBg2/50 backdrop-blur-md p-4 rounded-lg border border-${item.color}/10 hover:shadow-${item.color === "primary" ? "neon" : item.color === "secondary" ? "neon-cyan" : "neon-orange"} transition-all duration-300 group`}
                  variants={fadeIn("up", item.delay)}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className={`text-${item.color} text-2xl mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={item.icon}></i>
                  </div>
                  <h4 className="font-bold font-space mb-2">{item.title}</h4>
                  <p className="text-sm text-secondaryText">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
