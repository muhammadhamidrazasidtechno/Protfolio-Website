import { motion } from "framer-motion";
import ContactSection from "@/components/home/ContactSection";
import { pageVariants } from "@/lib/framer-animations";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <Helmet>
        <title>Contact - Muhammad Hamid Raza | MERN Stack Developer</title>
        <meta name="description" content="Get in touch with Muhammad Hamid Raza for web development projects, collaborations, or job opportunities. Contact form and details available." />
      </Helmet>

      <main className="pt-20">
        <ContactSection />
      </main>
    </motion.div>
  );
};

export default Contact;
