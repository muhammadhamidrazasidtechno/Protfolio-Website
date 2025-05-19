import { motion } from "framer-motion";
import SkillsSection from "@/components/home/SkillsSection";
import { pageVariants } from "@/lib/framer-animations";
import { Helmet } from "react-helmet";

const Skills = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <Helmet>
        <title>Skills - Muhammad Hamid Raza | MERN Stack Developer</title>
        <meta name="description" content="Explore the technical skills of Muhammad Hamid Raza, including React.js, Next.js, Node.js, Express.js, MongoDB, and more." />
      </Helmet>

      <main className="pt-20">
        <SkillsSection />
      </main>
    </motion.div>
  );
};

export default Skills;
