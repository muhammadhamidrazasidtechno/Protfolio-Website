import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  lightBackground?: boolean;
  accentColor?: "primary" | "secondary" | "accent";
}

const SectionHeading = ({ 
  title, 
  subtitle,
  lightBackground = true,
  accentColor = "primary"
}: SectionHeadingProps) => {
  const accentColorMap = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    accent: "bg-accent"
  };
  
  return (
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="inline-block text-3xl md:text-4xl font-bold font-space relative"
        initial={{ scale: 0.95 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="relative z-10">{title}</span>
        <motion.span 
          className={`absolute bottom-0 left-0 w-full h-4 ${accentColorMap[accentColor]} bg-opacity-20 -rotate-1`}
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        ></motion.span>
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className={`text-secondaryText mt-4 max-w-2xl mx-auto ${!lightBackground ? 'text-secondaryText/70' : ''}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
