import { frameData } from "framer-motion";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./animation-resorces/modal";

const Test2 = () => {
  const [isOpen, setOpen] = useState("false");

  return (
    <motion.div>
      <motion.h2 onClick={() => setOpen(!isOpen)}>
        titulo
      </motion.h2>
      {isOpen && (
        /*             <motion.p>
                texto que aparece cuando titulo esta open
            </motion.p> */
        <Modal handleClose={() => setOpen(!isOpen)}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ea in
          veniam cupiditate mollitia fugiat repellat porro quas totam saepe enim
          rem sint dolores, rerum iste odit expedita illo amet.
        </Modal>
      )}
    </motion.div>
  );
};

export default Test2;
