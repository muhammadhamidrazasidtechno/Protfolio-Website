import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground">
            A passionate Full-Stack Web Developer with over a year of experience in
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
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Experience</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✦ MERN Stack Development</li>
                  <li>✦ Real-Time Apps with Socket.io</li>
                  <li>✦ UI/UX Design Best Practices</li>
                  <li>✦ Database Design & Management</li>
                  <li>✦ API Integration & Development</li>
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
            <Card>
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