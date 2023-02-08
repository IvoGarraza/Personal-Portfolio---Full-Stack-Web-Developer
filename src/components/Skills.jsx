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
