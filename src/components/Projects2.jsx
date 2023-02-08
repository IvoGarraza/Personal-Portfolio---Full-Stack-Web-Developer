import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./animation-resorces/modal";

const Project2 = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    return (
      <div>
        <Modal>
            
        </Modal>
      </div>
    )
  }
  
  export default Project2