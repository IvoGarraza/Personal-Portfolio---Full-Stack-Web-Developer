import React, { useState } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import { projects } from "../../../constants";
import { Link } from "react-router-dom";
import FramerModal from "../buttons/FramerModal";

const Card = (props) => {


  const [isOpen, setOpen] = useState(false)
  return (

    <motion.div onHoverStart={() => setOpen(true)} onHoverEnd={() => setOpen(false)}  className={`${props.id} bg-center bg-no-repeat bg-cover bg-start m-2 flex flex-col items-center justify-center rounded-xl cursor-pointer h-[450px] w-[95%] `}>
      {!isOpen &&
        (<motion.h2 className="text-white font-bold relative backdrop-blur-xl rounded-lg w-[90%] font-ubuntu"
          initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2, delay: 0.1 }}>{props.title}</motion.h2>
          )}
        <button className="sm:hidden p-2 bg-slate-500 rounded-xl" onClick={()=> setOpen(true)}>Ver</button>
        
        
      <AnimatePresence>
        {isOpen && (
          <motion.div className="absolute p-4 h-[450px] sm:w-[24%] w-[96%] flex flex-col items-center justify-center text-white bg-port__gray  rounded-xl font-ubuntu"
            initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.2 }} exit={{ opacity: 0, scale: 0 }}>
              <button className="absolute sm:hidden ml-[90%] mb-[130%] bg-black">X</button>
            <p>
              {props.description}
            </p>
            {props.link ? <a href={props.link} className='bg-purple-500 p-2 mt-5 w-[30%] rounded-lg text-white hover:bg-slate-300 hover:text-black'>Link</a> : <Link to={props.path}><button className="bg-purple-500 p-2 mt-5 rounded-lg text-white hover:bg-slate-300 hover:text-black">Ver mas</button></Link>}
            
            
          </motion.div>
        )}
      </AnimatePresence>
      <FramerModal></FramerModal>
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
