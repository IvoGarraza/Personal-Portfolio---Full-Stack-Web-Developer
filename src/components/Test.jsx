import React, { useState } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import { projects } from "../constants";
import { Link } from "react-router-dom";

const Card = (props) => {


  const [isOpen, setOpen] = useState(false)
    return(
    
       <motion.div onHoverStart={()=> setOpen(!isOpen)} onHoverEnd={()=> setOpen(!isOpen)} className={`bg-white  m-2 flex items-center justify-center rounded-xl cursor-pointer h-[400px] w-[200]`}>
        <motion.h2 className={`${isOpen ? 'hidden':''} font-bold p-2`}>{props.title}</motion.h2>
        
        {isOpen && (
        <motion.div className=" p-10 h-[100%] w-[100%] flex flex-col justify-center text-white bg-port__gray  rounded-xl" initial={{y:100, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5}}>
          <p>
          {props.description}
          </p>
          <Link to='/countries-page'><button className="bg-purple-500 p-2 mt-5 rounded-lg text-white hover:bg-slate-300 hover:text-black">Read more</button></Link>
        </motion.div>
        )}
      
      </motion.div> 
    
/*       <motion.div className="bg-white" onHoverStart={()=>setOpen(!isOpen)} onHoverEnd={()=>setOpen(!isOpen)} >
        
        <motion.h2 initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>{props.title}</motion.h2>
        <div className=" h-[10px]">
        {isOpen && (
          <motion.div className=" p-10 flex flex-col justify-center text-white bg-port__gray  rounded-xl"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {props.description}
            <button>Read more</button>
          </motion.div>
        )}
        </div>
      </motion.div> */
    );
};

export default Card;
