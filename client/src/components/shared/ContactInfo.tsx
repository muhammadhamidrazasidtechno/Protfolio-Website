import { motion } from "framer-motion";
import { fadeIn } from "@/lib/framer-animations";

const contactItems = [
  {
    icon: "fas fa-map-marker-alt",
    title: "Location",
    value: "Karachi, Pakistan",
    color: "primary",
    delay: 0.1,
    link: null,
  },
  {
    icon: "fas fa-envelope",
    title: "Email",
    value: "muhammadhamidr92@gmail.com",
    color: "secondary",
    delay: 0.2,
    link: "mailto:muhammadhamidr92@gmail.com",
  },
  {
    icon: "fas fa-phone-alt",
    title: "Phone",
    value: "+92 316 0010801",
    color: "accent",
    delay: 0.3,
    link: "tel:+923001234567",
  },
  {
    icon: "fas fa-globe",
    title: "Website",
    value: "www.muhammad-ibrahim.com",
    color: "primary",
    delay: 0.4,
    link: "https://www.muhammad-ibrahim.com",
  },
];

const socialLinks = [
  {
    icon: "fab fa-github",
    url: "https://github.com",
    color: "primary",
    hoverColor: "primary",
    delay: 0.1,
  },
  {
    icon: "fab fa-linkedin-in",
    url: "https://linkedin.com",
    color: "secondary",
    hoverColor: "secondary",
    delay: 0.2,
  },
  {
    icon: "fab fa-twitter",
    url: "https://twitter.com",
    color: "accent",
    hoverColor: "accent",
    delay: 0.3,
  },
  {
    icon: "fab fa-dribbble",
    url: "https://dribbble.com",
    color: "pink-500",
    hoverColor: "pink-500",
    delay: 0.4,
  },
];

const ContactInfo = () => {
  return (
    <>
      <motion.h3
        className="text-xl font-bold font-space mb-6 text-secondary"
        variants={fadeIn("down", 0)}
      >
        Contact Information
      </motion.h3>

      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start"
            variants={fadeIn("left", item.delay)}
          >
            <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-${item.color} bg-opacity-20 text-black text-xl mr-4`}>
              <i className={item.icon}></i>
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">{item.title}</h4>
              {item.link ? (
                <a
                  href={item.link}
                  className={`text-secondaryText hover:text-${item.color} transition-colors duration-300`}
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-secondaryText">{item.value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12"
        variants={fadeIn("up", 0.5)}
      >
        <motion.h3
          className="text-xl font-bold font-space mb-6 text-secondary"
          variants={fadeIn("up", 0)}
        >
          Follow Me
        </motion.h3>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full flex items-center justify-center bg-darkBg text-secondaryText hover:text-${social.hoverColor} hover:bg-${social.hoverColor} hover:bg-opacity-10 transition-all duration-300`}
              variants={fadeIn("up", social.delay)}
              whileHover={{ y: -3 }}
            >
              <i className={social.icon}></i>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default ContactInfo;
