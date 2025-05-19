import { motion } from "framer-motion";
import EducationSection from "@/components/home/EducationSection";
import { pageVariants } from "@/lib/framer-animations";
import { Helmet } from "react-helmet";

const Education = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <Helmet>
        <title>Education - Muhammad Hamid Raza | MERN Stack Developer</title>
        <meta name="description" content="Discover Muhammad Hamid Raza's educational background, including academic achievements and professional certifications in web development." />
      </Helmet>

      <main className="pt-20">
        <EducationSection />
      </main>
    </motion.div>
  );
};

export default Education;
