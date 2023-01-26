import React from "react";
import styles from "../constants/styles";
import { projects } from "../constants";
import CardProject from "./CardProject";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div id='projects' className="bg-port__black my-10 w-[100%] h-[180vh] flex flex-row">
      <div className=" p-10 h-[100%] w-[50%] items-center flex flex-col justify-center">
        <p className={styles.heading2}>
          Meet my personal projects & <br />
          work made in this time how developer
        </p>
        {/* <button className='py-4 px-6 bg-port__blue font-poppins font-medium text-[18px] text-primary outline-none rounded-xl mt-10 hover:text-white'>Projects →</button> */}
        <button class="btn group flex items-center bg-transparent p-2 px-6 text-xl font-poppins tracking-widest text-white mt-10">
          <Link>
            <span class="relative pr-4 pb-1 text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-blue-500 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">
              All Projects
            </span>
          </Link>
          <svg
            viewBox="0 0 46 16"
            height="10"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
            id="arrow-horizontal"
            class="-translate-x-2 fill-slate-700 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 group-hover:fill-white"
          >
            <path
              transform="translate(30)"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              data-name="Path 10"
              id="Path_10"
            ></path>
          </svg>
        </button>
      </div>
      <div className="w-[50%] m-5 flex flex-col text-center">
        <p className={`flex-start ${styles.heading2} h-[10%]`}>
          Some of my works...
        </p>
        <div className="h-[90%]">
          {projects.slice(0, 4).map((project) => (
            <CardProject
              title={project.title}
              description={project.description}
              img={project.img}
              avatar={project.avatar}
              time={project.time}
              path={project.path}
            ></CardProject>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
