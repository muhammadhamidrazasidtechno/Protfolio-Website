import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import ParticlesBg from "@/components/shared/ParticlesBg";
import { floatAnimation, fadeIn } from "@/lib/framer-animations";
import useTyped from "@/hooks/use-typed";

const HeroSection = () => {
  const typingRef = useRef<HTMLDivElement>(null);
  const typed = useTyped(typingRef, [
    "MERN Stack Developer",
    "React.js Specialist",
    "Full-Stack Engineer",
    "MongoDB Expert",
  ]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      <ParticlesBg />

      <div className="container mx-auto px-4 md:px-8 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <motion.h2
              className="text-xl md:text-2xl font-medium text-secondary mb-2"
              variants={fadeIn("up", 0.1)}
            >
              <span className="inline-block relative">
                <span className="relative z-10">Hello, I'm</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-[#6C63FF] bg-opacity-20"></span>
              </span>
            </motion.h2>

            <motion.h1
              className="text-4xl md:text-6xl font-bold font-space mb-4"
              variants={fadeIn("up", 0.2)}
            >
              Muhammad <span className="text-primary">Hamid Raza</span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl font-mono text-white mb-6"
              variants={fadeIn("up", 0.3)}
              ref={typingRef}
            >
              {/* Typing text will be injected here by useTyped hook */}
            </motion.div>

            <motion.p
              className="text-secondaryText text-lg max-w-lg mb-8"
              variants={fadeIn("up", 0.4)}
            >
              I am a proficient MERN stack developer with a strong passion for building innovative and scalable web applications. Specializing in developing dynamic user interfaces and implementing robust back-end solutions.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={fadeIn("up", 0.5)}
            >
              <Link href="/projects">
                <motion.a
                  className="bg-primary hover:bg-opacity-80 px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Projects</span>
                  <i className="fas fa-arrow-right"></i>
                </motion.a>
              </Link>

              <Link href="/contact">
                <motion.a
                  className="border border-secondary text-secondary hover:bg-secondary hover:bg-opacity-10 px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Contact Me</span>
                  <i className="fas fa-paper-plane"></i>
                </motion.a>
              </Link>
            </motion.div>

            <motion.div
              className="flex mt-12 space-x-6"
              variants={fadeIn("up", 0.6)}
            >
              <motion.a
                href="https://github.com/muhammadhamidraza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondaryText hover:text-primary transition-colors duration-300 text-xl"
                whileHover={{ y: -3 }}
              >
                <i className="fab fa-github"></i>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/hamid-raza-b249162a8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondaryText hover:text-primary transition-colors duration-300 text-xl"
                whileHover={{ y: -3 }}
              >
                <i className="fab fa-linkedin"></i>
              </motion.a>
              <motion.a
                href="mailto:muhammadhamidr92@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondaryText hover:text-primary transition-colors duration-300 text-xl"
                whileHover={{ y: -3 }}
              >
                <i className="fas fa-envelope"></i>
              </motion.a>
              <motion.a
                href="tel:+923160010801"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondaryText hover:text-primary transition-colors duration-300 text-xl"
                whileHover={{ y: -3 }}
              >
                <i className="fas fa-phone"></i>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            variants={floatAnimation}
            initial="initial"
            animate="animate"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img 
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Muhammad Hamid Raza - MERN Stack Developer" 
                className="w-full h-full object-cover rounded-full" 
              />
              
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-primary"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              ></motion.div>
              
              <motion.div 
                className="absolute -top-4 -right-4 bg-primary text-darkBg px-3 py-1 rounded-full text-sm font-medium"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <i className="fas fa-code mr-1"></i>Developer
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-3 -left-3 bg-secondary text-darkBg px-3 py-1 rounded-full text-sm font-medium"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <i className="fas fa-paint-brush mr-1"></i>Designer
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <a
            href="#about"
            className="text-secondaryText hover:text-primary transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <i className="fas fa-chevron-down text-2xl"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
