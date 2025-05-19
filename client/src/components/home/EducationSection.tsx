import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import EducationCard from "@/components/shared/EducationCard";
import { education, certifications } from "@/data/education";
import { staggerContainer, fadeIn } from "@/lib/framer-animations";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Education" 
          subtitle="My academic background and professional training."
          accentColor="primary"
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {education.map((edu, index) => (
            <EducationCard
              key={index}
              education={edu}
              index={index}
            />
          ))}
        </motion.div>
        
        {/* Certifications */}
        <motion.div 
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn("up")}
        >
          <h3 className="text-2xl font-bold font-space text-center mb-8">Certifications & Additional Training</h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={staggerContainer}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className={`bg-darkBg2/50 backdrop-blur-md p-4 rounded-lg hover:shadow-${cert.color} transition-all duration-300`}
                variants={fadeIn("up", index * 0.1)}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center">
                  <div className={`text-${cert.color} text-2xl mr-3`}>
                    <i className="fas fa-certificate"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">{cert.title}</h4>
                    <p className="text-sm text-secondaryText">{cert.issuer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
