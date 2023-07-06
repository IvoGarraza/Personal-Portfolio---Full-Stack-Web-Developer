import { motion, AnimatePresence } from "framer-motion"; 
import { useState } from "react";
import Modal from "../../animation-resorces/modal";

const FramerModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="save-button bg-purple-700 text-white font-semibold p-2 rounded-md"
        onClick={() => (modalOpen ? close() : open())}
      >
        Launch modal
      </motion.button>
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Modal
            text="Este es el texto del modalsadasdasdasdadasdasdasdasdasdasdasdasdasdasdasdasd"
            modalOpen={modalOpen}
            handleClose={close}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default FramerModal;
