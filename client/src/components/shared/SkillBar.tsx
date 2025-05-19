import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  percentage: number;
  color: "primary" | "secondary" | "accent";
  delay?: number;
}

const SkillBar = ({ name, percentage, color, delay = 0 }: SkillBarProps) => {
  const colorMap = {
    primary: "from-primary to-secondary",
    secondary: "from-secondary to-primary",
    accent: "from-accent to-primary",
  };
  
  return (
    <div className="skill-item">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-secondary">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-darkBg rounded-full overflow-hidden">
        <motion.div 
          className={`h-full bg-gradient-to-r ${colorMap[color]} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
        ></motion.div>
      </div>
    </div>
  );
};

export default SkillBar;
