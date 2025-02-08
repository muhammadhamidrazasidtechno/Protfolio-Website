import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen pt-16 flex items-center">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">John Doe</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            A passionate full-stack developer crafting beautiful web experiences
          </p>
          <Button asChild size="lg">
            <a href="#contact">
              Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="aspect-square relative rounded-full overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2"
            alt="Professional headshot"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
