import React from "react";
import styles from "../constants/styles";
import { projects } from "../constants";
import CardProject from "./CardProject";
import { Link } from "react-router-dom";
import Card from "./Test";


const Projects = () => {
  return (
    <div id='projects' className="bg-port__black py-10 w-[100%] h-[60%] pb-[300px] flex flex-col">
      <div className=" p-10  mt-2 h-[20%] w-[100%%] items-center flex flex-col justify-center">
        <p className={`${styles.heading2} text-center font-ubuntu`}>
          Conoce mis proyectos personales y<br />
          trabajos realizados en mi tiempo como desarrollador
        </p>
      </div>
      <div className="w-[100%] h-[100%] ">
        <div className="h-[1000px] w-[100%] grid xl:grid-cols-4 sm:grid-cols-1 gap-1 justify-self-center self-center items-center text-center ">
          {projects.slice(0, 8).map((project) => (
            <Card title={project.title} description={project.description} id={project.img} img={project.img} path={project.path} link={project.link}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
