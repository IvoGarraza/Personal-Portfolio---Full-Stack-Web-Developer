import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../constants";
import { Link } from "react-router-dom";

const Card = (props) => {

  const [isOpen, setOpen] = useState(false)
    return(
    
      <motion.div layout onClick={()=> setOpen(!isOpen)} className="bg-white p-10 m-40 rounded-xl cursor-pointer">
        <motion.h2 className="font-bold" layout='position'>{props.title}</motion.h2>
        {isOpen && (
        <motion.div className="mt-5">
          <p>
          {props.description}
          </p>
          <Link to='/countries-page'><button className="bg-purple-500 p-2 mt-5 rounded-lg text-white hover:bg-slate-300 hover:text-black">Read more</button></Link>
        </motion.div>
        )}
      </motion.div>
    
    );
};

export default Card;
