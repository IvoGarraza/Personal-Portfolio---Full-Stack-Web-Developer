import { AnimatePresence, frameData } from "framer-motion";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../../animation-resorces/modal";
import { stableDifussion } from "../../../assets/stable-difussion";
import move from "lodash-move";


/* const Test2 = () => {
  const [isOpen, setOpen] = useState("false");
  const images = stableDifussion
  return (
    <div className="flex items-center justify-center bg-slate-700 w-[100%] h-[100vh]">
      <motion.div className="flex relative items-center justify-center bg-white w-[20%] h-[40%]">
        <ul className="relative">
          {images.map(image => (
            <motion.li className="absolute w-[320px] h-[220px] ">
              <img src={image} className='w-[200px] rounded-[8px]'></img>
            </motion.li>
          ))}
        </ul>
      </motion.div>

    </div>
  );
}; */

const CARD_OFFSET = 5;

const SCALE_FACTOR = 0.06;


const CardStack = () => {
  const [cards, setCards] = useState(stableDifussion);
  const moveToEnd = from => {
    setCards(move(cards, from, cards.length - 1));
  };

  return (
    <div className="w-[100%] h-[100%]">
      <ul className="w-[100%] h-[100%] relative" >
        {cards.map((color, index) => {
          const canDrag = index === 0;

          return (
            <motion.img
              src={color}
              key={color}
              className="shadow-xl"
              style={{
                ...cardStyle,
          
                cursor: canDrag ? "grab" : "auto"
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: stableDifussion.length - index
              }}
              drag
              dragConstraints={{
                top: -1,
                right: 1,
                bottom: 1,
                left: -1,
              }}
              onDragEnd={() => moveToEnd(index)}
            />
          );
        })}
      </ul>
    </div>
  );
};
const wrapperStyle = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "400px"
};

const cardWrapStyle = {
  position: "relative",
  width: "350px",
  height: "220px"
};

const cardStyle = {
  position: "absolute",
  borderRadius: "8px",
  transformOrigin: "top center",
  listStyle: "none"
};

export default CardStack;




/* const FramerModal = ()=>{
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
    {modalOpen && <Modal text='Este es el texto del modalsadasdasdasdadasdasdasdasdasdasdasdasdasdasdasdasd' modalOpen={modalOpen} handleClose={close} />}
</AnimatePresence>
    </div>
  )
}

export default FramerModal */