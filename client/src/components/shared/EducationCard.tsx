import { motion } from "framer-motion";
import { Education } from "@/data/education";
import { fadeIn } from "@/lib/framer-animations";

interface EducationCardProps {
  education: Education;
  index: number;
}

const EducationCard = ({ education, index }: EducationCardProps) => {
  const colorMap = {
    primary: "shadow-neon",
    secondary: "shadow-neon-cyan",
    accent: "shadow-neon-orange"
  };

  return (
    <motion.div
      className={`bg-darkBg2/50 backdrop-blur-md p-6 rounded-xl border border-white/5 hover:${colorMap[education.color]} transition-all duration-300 transform`}
      variants={fadeIn("up", index * 0.1)}
      whileHover={{ y: -8 }}
    >
      <div className={`text-${education.color} text-3xl mb-4`}>
        <i className={education.icon}></i>
      </div>
      <h3 className="text-xl font-bold font-space mb-2">{education.institution}</h3>
      <p className="text-white mb-1">{education.degree}</p>
      <p className={`text-${education.color === 'primary' ? 'secondary' : education.color === 'secondary' ? 'primary' : 'secondary'} text-sm mb-4`}>{education.period}</p>
      <p className="text-secondaryText text-sm">
        {education.description}
      </p>

      <div className="mt-4 pt-4 border-t border-white/10">
        <p className={`text-${education.color} font-medium`}>{education.highlightsTitle}:</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {education.highlights.map((highlight, idx) => (
            <span
              key={idx}
              className={`text-black px-2 py-1 bg-${education.color} bg-opacity-10 rounded-full`}
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default EducationCard;
