import React, { useEffect } from "react";
import { skills } from "../constants";
import Card from "./Cards";
import AOS from "aos";
import { motion } from "framer-motion";

function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div className="items-center text-center">
      <h2 className="font-bold h-[10vh] m-10">Skills</h2>
      <div className="flex justify-end">
        <div className="m-5">
          <button data-tooltip-target="tooltip-left" data-tooltip-placement="left" type="button" class="mb-2 md:mb-0 text-white bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tooltip left</button>
          <div id="tooltip-left" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              Tooltip on left
              <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 grid-flow-row gap-8 justify-center items-center justify-items-center content-center justify-self-center">
        {skills.map((skill, index) => (
          <motion.div whileHover={{scale:1.1, transition: { duration: 0.1 }}} whileTap={{scale:0.5}}>
            <Card  title={skill.title} img={skill.img} color={skill.color}></Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
