import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
 
  return (
    <motion.div
      onClick={onClick}
      className="absolute inset-0 h-[100%] w-[100%] bg-[#595959] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;