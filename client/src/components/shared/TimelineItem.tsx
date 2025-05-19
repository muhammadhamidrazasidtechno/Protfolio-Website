import { motion } from "framer-motion";
import { Experience } from "@/data/experience";
import { fadeIn } from "@/lib/framer-animations";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

const TimelineItem = ({ experience, index }: TimelineItemProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="relative md:ml-0 mb-12"
      variants={fadeIn(isEven ? "right" : "left")}
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className={`flex-1 ${isEven ? 'md:text-right md:pr-8 order-2 md:order-1' : 'md:pl-8 order-3'} mt-4 md:mt-0 ${!isEven && 'hidden md:block'}`}>
          {isEven && (
            <>
              <h3 className={`text-xl font-bold font-space text-${experience.color}`}>{experience.role}</h3>
              <p className="text-white text-lg">{experience.company}</p>
              <p className={`text-${isEven ? 'secondary' : 'primary'} text-sm mb-2`}>{experience.period}</p>
              <p className="text-secondaryText">
                {experience.description}
              </p>
              <div className={`flex flex-wrap gap-2 mt-3 ${isEven ? 'justify-start md:justify-end' : ''}`}>
                {experience.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`text-black px-2 py-1 bg-${experience.color} bg-opacity-20  rounded-full`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>

        <motion.div
          className={`w-10 h-10 bg-${experience.color} rounded-full flex items-center justify-center z-10 relative md:translate-x-0 order-1 md:order-2`}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
        >
          <i className={`${experience.icon} text-darkBg`}></i>
        </motion.div>

        <div className={`flex-1 ${!isEven ? 'md:pl-8 order-3' : 'md:pr-8 order-2 md:order-1 hidden md:block'} mt-4 md:mt-0`}>
          {!isEven && (
            <>
              <h3 className={`text-xl font-bold font-space text-${experience.color}`}>{experience.role}</h3>
              <p className="text-white text-lg">{experience.company}</p>
              <p className={`text-${!isEven ? 'primary' : 'secondary'} text-sm mb-2`}>{experience.period}</p>
              <p className="text-secondaryText">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {experience.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`text-black px-2 py-1 bg-${experience.color} bg-opacity-20  rounded-full`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
