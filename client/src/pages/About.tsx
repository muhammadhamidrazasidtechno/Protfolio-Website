import { motion } from "framer-motion";
import AboutSection from "@/components/home/AboutSection";
import { pageVariants } from "@/lib/framer-animations";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <Helmet>
        <title>About - Muhammad Hamid Raza | MERN Stack Developer</title>
        <meta name="description" content="Learn more about Muhammad Hamid Raza, a MERN Stack Front-End Developer with expertise in React.js, Next.js and modern web technologies." />
      </Helmet>

      <main className="pt-20">
        <AboutSection />
      </main>
    </motion.div>
  );
};

export default About;
