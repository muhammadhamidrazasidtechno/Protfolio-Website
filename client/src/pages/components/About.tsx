import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(0,0,0,0.02)_40%,rgba(0,0,0,0.02)_60%,transparent_60%)] bg-[length:20px_20px]" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground">
            A passionate Full-Stack Web Developer with over 2 years of experience in
            building intuitive, responsive, and feature-rich web applications.
            Graduate of Saylani Mass IT Training with expertise in MERN Stack
            development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-sm bg-background/95">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Professional Experience</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="border-l-2 border-primary/20 pl-4">
                    <h4 className="font-medium text-foreground">SID Techno</h4>
                    <p className="text-sm">Full Stack Developer • 2 Years</p>
                    <ul className="mt-2 space-y-1 list-disc list-inside text-sm">
                      <li>✦ Led MERN Stack Development Projects</li>
                      <li>✦ Implemented Real-Time Applications</li>
                      <li>✦ Optimized Database Performance</li>
                      <li>✦ Developed Responsive UI/UX Solutions</li>
                    </ul>
                  </li>
                  <li className="border-l-2 border-primary/20 pl-4">
                    <h4 className="font-medium text-foreground">Freelance Projects</h4>
                    <p className="text-sm">Full Stack Developer</p>
                    <ul className="mt-2 space-y-1 list-disc list-inside text-sm">
                      <li>✦ Custom Web Applications</li>
                      <li>✦ API Integration & Development</li>
                      <li>✦ Database Design & Management</li>
                    </ul>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-sm bg-background/95">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Education & Training</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✦ Saylani Mass IT Training Graduate</li>
                  <li>✦ Advanced Web Development</li>
                  <li>✦ Modern JavaScript (ES6+)</li>
                  <li>✦ React & Node.js Specialization</li>
                  <li>✦ Database Management Systems</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}