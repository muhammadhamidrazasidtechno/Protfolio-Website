import { motion } from "framer-motion";
import { cn, scrollToSection } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-secondaryText">
              &copy; {currentYear} Muhammad Hamid Raza. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0"
          >
            <button
              onClick={scrollToTop}
              className="flex items-center text-secondaryText hover:text-primary transition-colors duration-300 focus:outline-none"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <i className="fas fa-arrow-up ml-2"></i>
            </button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
