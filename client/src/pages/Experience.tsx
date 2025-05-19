import { motion } from "framer-motion";
import ExperienceSection from "@/components/home/ExperienceSection";
import { pageVariants } from "@/lib/framer-animations";
import { Helmet } from "react-helmet";

const Experience = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <Helmet>
        <title>Experience - Muhammad Hamid Raza | MERN Stack Developer</title>
        <meta name="description" content="Learn about Muhammad Hamid Raza's professional experience and career journey as a MERN Stack Front-End Developer." />
      </Helmet>

      <main className="pt-20">
        <ExperienceSection />
      </main>
    </motion.div>
  );
};

export default Experience;
