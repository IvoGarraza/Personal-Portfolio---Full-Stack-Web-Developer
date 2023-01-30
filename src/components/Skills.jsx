import React, { useEffect } from "react";
import { skills } from "../constants";
import Card from "./Cards";
import AOS from "aos";
import { motion } from "framer-motion";

function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);

  const elSwitchs = document.querySelectorAll(".elSwitch");
  elSwitchs.forEach((e) => {
    e.addEventListener("click", function () {
      if (e.classList.contains("left-[155px]")) {
        e.classList.remove("left-[155px]");
        e.classList.add("left-1");
      } else {
        e.classList.remove("left-1");
        e.classList.add("left-[155px]");
      }
    });
  });

  return (
    <div className="items-center text-center">
      <h2 className="font-bold h-[10vh] m-10">Skills</h2>

      <div className="grid grid-cols-4 grid-flow-row gap-4 justify-center items-center content-center justify-self-center">
        {skills.map((skill, index) => (
          <motion.div whileHover={{scale:1.1, transition: { duration: 0.1 }}} whileTap={{scale:0.5}}>
            <Card className='justify-self-center' title={skill.title} img={skill.img} color={skill.color}></Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
