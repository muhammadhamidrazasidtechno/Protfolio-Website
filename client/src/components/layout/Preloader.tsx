import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-darkBg flex items-center justify-center z-50">
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            yoyo: Infinity,
            repeatDelay: 0.5
          }}
          className="text-6xl font-bold font-space text-primary mb-4 relative"
        >
          <span className="relative z-10">MHR</span>
          <div className="absolute inset-0 bg-primary opacity-20 blur-xl"></div>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "22ch" }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="overflow-hidden font-mono text-lg text-secondary border-r-2 border-secondary"
        >
          Building Professional Website
        </motion.div>
      </div>
    </div>
  );
};

export default Preloader;
