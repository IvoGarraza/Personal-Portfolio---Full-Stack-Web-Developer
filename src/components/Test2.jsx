import { frameData } from "framer-motion";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./animation-resorces/modal";
import { stableDifussion } from "../assets/stable-difussion";
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

const CARD_COLORS = ["#266678", "#cb7c7a", " #36a18b", "#cda35f", "#747474"];
const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

const CardStack = () => {
  const [cards, setCards] = React.useState(CARD_COLORS);
  const moveToEnd = from => {
    setCards(move(cards, from, cards.length - 1));
  };

  return (
    <div className="w-[100%] h-[200px] bg-black" style={wrapperStyle}>
      <ul className="bg-white w-[40%] h-[40%] relative" >
        {cards.map((color, index) => {
          const canDrag = index === 0;

          return (
            <motion.li
              key={color}
              style={{
                ...cardStyle,
                backgroundColor: color,
                cursor: canDrag ? "grab" : "auto"
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: CARD_COLORS.length - index
              }}
              drag={canDrag ? "y" : false}
              dragConstraints={{
                top: 0,
                bottom: 0
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
  height: "100vh"
};

const cardWrapStyle = {
  position: "relative",
  width: "350px",
  height: "220px"
};

const cardStyle = {
  position: "absolute",
  width: "350px",
  height: "220px",
  borderRadius: "8px",
  transformOrigin: "top center",
  listStyle: "none"
};

export default CardStack;


