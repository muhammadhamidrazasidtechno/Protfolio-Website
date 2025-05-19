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

        <div className="w-64 h-2 bg-secondary/20 rounded-full overflow-hidden mt-2">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="h-full bg-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;