
import { motion } from "framer-motion";
import Backdrop from "./backdrop";

const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  

const Modal = ({ handleClose, text }) => {

    return (
      <Backdrop  onClick={handleClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}  
            className="modal  orange-gradient bg-white p-4 rounded-md w-[80%] h-[90%]"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <p>{text}</p>
            <button onClick={handleClose} className="bg-red-500 p-2 rounded-md text-white">Close</button>
          </motion.div>
      </Backdrop>
    );
  };

  
  export default Modal;