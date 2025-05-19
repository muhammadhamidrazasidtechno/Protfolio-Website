import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactForm from "@/components/shared/ContactForm";
import ContactInfo from "@/components/shared/ContactInfo";
import { staggerContainer, fadeIn } from "@/lib/framer-animations";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-darkBg2 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a project in mind or just want to say hello? I'd love to hear from you!"
          lightBackground={false}
          accentColor="accent"
        />
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {/* Contact Form */}
          <motion.div 
            className="bg-darkBg/50 backdrop-blur-md p-8 rounded-xl border border-white/5 shadow-lg order-2 lg:order-1"
            variants={fadeIn("right")}
          >
            <h3 className="text-xl font-bold font-space mb-6 text-primary">Send Me a Message</h3>
            <ContactForm />
          </motion.div>
          
          {/* Contact Information */}
          <motion.div 
            className="order-1 lg:order-2"
            variants={fadeIn("left")}
          >
            <ContactInfo />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
