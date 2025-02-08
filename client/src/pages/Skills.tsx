import { motion } from "framer-motion";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">My Skills & Expertise</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive overview of my technical capabilities and professional expertise
            </p>
          </motion.div>
        </div>
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
