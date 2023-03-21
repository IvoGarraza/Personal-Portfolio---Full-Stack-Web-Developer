import React, { useEffect } from "react";
import { skills } from "../constants";
import Card from "./Cards";
import AOS from "aos";
import { motion, useScroll } from "framer-motion";

function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);

  const {scrollYProgress} = useScroll()
  
  return (
    <div className="items-center text-center justify-center flex bg-slate-400 pb-20 font-ubuntu">
      <div className="rounded-xl flex flex-col items-center mt-[-40px] w-[90%]  bg-white pb-10 shadow-xl">
        <h2 className=" h-[5%] m-5 font-poppins font-bold">Skills</h2>
        <div className={`w-[80%] sm:mt-[3%] mt-[12%] h-[3px] rounded-full absolute bg-slate-500`}></div>
        <div className="w-[95%] grid sm:grid-cols-4 grid-cols-2 grid-flow-row sm:gap-8 gap-2 justify-center items-center justify-items-center content-center justify-self-center">
          {skills.map((skill, index) => (
            <motion.div whileHover={{scale:1.1, transition: { duration: 0.1 }}} whileTap={{scale:0.5}} >
              <Card  title={skill.title} img={skill.img} color={skill.color}></Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
