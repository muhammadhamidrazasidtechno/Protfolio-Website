import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import TimelineItem from "@/components/shared/TimelineItem";
import { experiences } from "@/data/experience";
import { staggerContainer } from "@/lib/framer-animations";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-darkBg2 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Work Experience" 
          subtitle="My professional journey and roles I've taken on."
          lightBackground={false}
        />
        
        <motion.div 
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-primary bg-opacity-20 transform md:translate-x-[-0.5px]"></div>
          
          {/* Experience Items */}
          {experiences.map((experience, index) => (
            <TimelineItem 
              key={index}
              experience={experience}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
