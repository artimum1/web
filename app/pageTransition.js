import { motion, AnimatePresence } from "framer-motion";
const PageTransition = ({ children }) => {


  return (
    <AnimatePresence mode="wait">
    <div className="all">
    <motion.div className="slide-out" initial={{y:"100%"}} animate={{y:"-100%"}} exit={{y:"-100%"}} transition={{duration:1, ease:[0,.95,.44,.90]}} ></motion.div>

    <motion.div>
    {children}

    

    </motion.div>
    
   
    </div>
    </AnimatePresence>
  );
};

export default PageTransition;
