import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { downloadCV } from "@/lib/generate-pdf";

const Navbar = () => {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/experience", label: "Experience" },
    { path: "/education", label: "Education" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300",
        {
          "bg-transparent": !isScrolled && !isMobileMenuOpen,
          "bg-darkBg/80 backdrop-blur-lg": isScrolled || isMobileMenuOpen,
        }
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="text-2xl font-bold font-space text-primary hover:text-secondary transition-colors duration-300">
              Muhammad<span className="text-white">Hamid Raza</span>
            </a>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <a 
                  className={cn(
                    "nav-link text-lightText hover:text-primary transition-colors duration-300",
                    { "text-primary": location === link.path }
                  )}
                >
                  {link.label}
                </a>
              </Link>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadCV}
              className="bg-primary hover:bg-opacity-80 px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2"
            >
              <span>Download CV</span>
              <i className="fas fa-download"></i>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className={`lg:hidden overflow-hidden bg-darkBg2/90 backdrop-blur-md rounded-lg mt-4`}
        >
          {isMobileMenuOpen && (
            <div className="flex flex-col space-y-4 p-4">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path}>
                  <a
                    onClick={closeMobileMenu}
                    className={cn(
                      "nav-link text-lightText hover:text-primary transition-colors duration-300",
                      { "text-primary": location === link.path }
                    )}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  downloadCV();
                  closeMobileMenu();
                }}
                className="bg-primary hover:bg-opacity-80 px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Download CV</span>
                <i className="fas fa-download"></i>
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
