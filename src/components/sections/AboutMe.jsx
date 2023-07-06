import React, { useEffect, useRef, useState } from "react";
import { animate, motion, useAnimation, useInView } from "framer-motion";
import profile from "../../assets/profile.jpg";
import { hobbies } from "../../constants";
import { InView } from "react-intersection-observer";

const AboutMe = () => {
  const [isView, setView] = useState(false);
  const svgVariants = {
    hidden: {
      pathLength: 0,
    },
    show: {
      pathLength: 1,
    },
  };
  ///

  ////

  /* const ref = useRef<SVGPathElement>(null) */
  /*  const isInView = useInView(ref) */

  const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };

  const [entered, setEntered] = useState(false);

  return (
    <InView
      as="div"
      onChange={(inView, entry) => {
        console.log("Inview:", inView, "entry:", entry);
        if (inView === true) {
          setEntered(true);
        }
      }}
      root={null}
      rootMargin="0px"
      threshold={0.8}
    >
      <motion.div
        id="aboutme"
        className="w-full pt-10 pb-20 sm:h-[500px] flex sm:flex-row flex-col justify-around bg-port__gray font-ubuntu "
        onHoverEnd={() => setView(false)}
        onHoverStart={() => setView(true)}
      >
        <div className="sm:w-[60%] items-center justify-center text-center flex flex-col text-xl">
          <h2 className="font-bold my-5 text-white">Sobre mi...</h2>
          <p className="font-medium w-[80%] text-slate-300">
            Estudiante de la Universidad Tecnologica Nacional - Facultad
            Regional Córdoba y Desarrolador Web Fullstack,
            <br /> apasionado por la tecnologia, el diseño y el aprendizaje para
            el desarrollo personal y profesional.
            <br /> Me gusta participar en proyectos donde los desafios
            intelectuales, el trabajo en equipo y las ganas sean fundamentales
          </p>
          {/* <a href='https://drive.google.com/file/d/1exQ8sjm0OKiWnTMz-dKRRhu6gIrstXzT/view?usp=sharing' className='border-white border-[1px] bg-slate-700 rounded-[5px] sm:w-[30%] p-2 mt-6 text-white hover:text-black hover:bg-white hover:border-black'>Curriculum vitae</a> */}
          <a
            href="https://drive.google.com/file/d/1exQ8sjm0OKiWnTMz-dKRRhu6gIrstXzT/view?usp=sharing"
            class="relative px-5 my-2 py-2 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
          >
            <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#222831] opacity-0 group-hover:opacity-100"></span>
            <span class="relative transition-colors duration-300 delay-200 font-bold group-hover:text-white ease">
              Curriculum Vitae
            </span>
          </a>
        </div>
        <div className="flex flex-col justify-center items-center text-center sm:mr-[10%]">
          <h2 className="font-bold text-white m-5">INTERESES Y HOBBIES</h2>
          <div className="grid grid-cols-2">
            <div className="m-2 flex flex-col items-center font-bold">
              <div>
                <svg
                  className="w-[64px] h-[64px]"
                  fill="#fff"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <motion.path
                    /* initial={{ pathLength: 0 }} animate={{pathLength: isView ? 1 : 0 }} transition={transition} */ initial={{
                      pathLength: 0,
                    }}
                    animate={{ pathLength: entered ? 1 : 0 }}
                    transition={{ duration: 5, delay: 1.2 }}
                    /* animate={controls} */ fill="transparent"
                    stroke="rgb(255, 255, 255)"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    id="machine--learning--06_1_"
                    d="M12,30.36c-1.47,0-2.852-0.766-3.653-2.011C5.703,28.24,3.64,26.106,3.64,23.5
                    c0-0.899,0.252-1.771,0.733-2.544C2.678,19.887,1.64,18.021,1.64,16s1.038-3.886,2.733-4.957C3.893,10.271,3.64,9.4,3.64,8.5
                    c0-2.63,2.101-4.779,4.712-4.858C9.155,2.402,10.534,1.64,12,1.64c2.404,0,4.36,1.956,4.36,4.36v4.64H25
                    c0.904,0,1.64-0.736,1.64-1.64V7.312c-0.575-0.158-1-0.686-1-1.312c0-0.75,0.61-1.36,1.36-1.36S28.36,5.25,28.36,6
                    c0,0.625-0.425,1.153-1,1.312V9c0,1.301-1.059,2.36-2.36,2.36h-8.64v2.28h11.329c0.158-0.576,0.687-1,1.312-1
                    c0.75,0,1.36,0.61,1.36,1.36s-0.61,1.36-1.36,1.36c-0.625,0-1.153-0.424-1.312-1H16.36v3.28h11.329c0.158-0.575,0.687-1,1.312-1
                    c0.75,0,1.36,0.61,1.36,1.36s-0.61,1.36-1.36,1.36c-0.625,0-1.153-0.425-1.312-1H16.36v2.279H25c1.302,0,2.36,1.059,2.36,2.36v1.688
                    c0.575,0.158,1,0.687,1,1.312c0,0.75-0.61,1.36-1.36,1.36s-1.36-0.61-1.36-1.36c0-0.625,0.425-1.153,1-1.312V23
                    c0-0.904-0.735-1.64-1.64-1.64h-8.64V26C16.36,28.404,14.404,30.36,12,30.36z M8.721,27.628l0.143,0.186
                    C9.526,28.957,10.699,29.64,12,29.64c2.007,0,3.64-1.633,3.64-3.64V6c0-2.007-1.633-3.64-3.64-3.64
                    c-1.301,0-2.474,0.683-3.137,1.826L8.747,4.365C8.493,4.869,8.36,5.431,8.36,6c0,0.64,0.168,1.269,0.487,1.82L8.224,8.18
                    C7.842,7.521,7.64,6.766,7.64,6c0-0.547,0.103-1.088,0.3-1.593C5.901,4.694,4.36,6.42,4.36,8.5c0,0.876,0.283,1.722,0.817,2.446
                    l0.246,0.333l-0.364,0.197C3.394,12.377,2.36,14.11,2.36,16c0,1.785,0.922,3.43,2.427,4.365C5.713,19.268,7.061,18.64,8.5,18.64
                    v0.721c-1.206,0-2.336,0.517-3.125,1.424l-0.198,0.27C4.643,21.778,4.36,22.624,4.36,23.5c0,2.283,1.857,4.14,4.14,4.14
                    L8.721,27.628z M27,25.36c-0.353,0-0.64,0.287-0.64,0.64s0.287,0.64,0.64,0.64s0.64-0.287,0.64-0.64S27.353,25.36,27,25.36z
                    M29,17.36c-0.353,0-0.64,0.287-0.64,0.64s0.287,0.64,0.64,0.64s0.64-0.287,0.64-0.64S29.353,17.36,29,17.36z M29,13.36
                    c-0.353,0-0.64,0.287-0.64,0.64s0.287,0.64,0.64,0.64s0.64-0.287,0.64-0.64S29.353,13.36,29,13.36z M27,5.36
                    c-0.353,0-0.64,0.287-0.64,0.64S26.647,6.64,27,6.64S27.64,6.353,27.64,6S27.353,5.36,27,5.36z M12,28.36v-0.72
                    c0.904,0,1.64-0.735,1.64-1.64h0.72C14.36,27.302,13.301,28.36,12,28.36z M9,26.36c-1.577,0-2.86-1.283-2.86-2.86h0.72
                    c0,1.18,0.96,2.14,2.14,2.14C9,25.64,9,26.36,9,26.36z M12,24.36c-1.301,0-2.36-1.059-2.36-2.36s1.059-2.36,2.36-2.36v0.721
                    c-0.904,0-1.64,0.735-1.64,1.64s0.736,1.64,1.64,1.64V24.36z M6.332,16.667C5.886,16.221,5.64,15.629,5.64,15
                    c0-1.39,0.97-2.36,2.36-2.36c0.641,0,1.218,0.238,1.669,0.689l-0.51,0.509C8.847,13.525,8.446,13.36,8,13.36
                    c-0.996,0-1.64,0.644-1.64,1.64c0,0.437,0.171,0.848,0.48,1.158L6.332,16.667z M12,12.86v-0.72c0.904,0,1.64-0.736,1.64-1.64
                    S12.904,8.86,12,8.86V8.14c1.301,0,2.36,1.059,2.36,2.36S13.301,12.86,12,12.86z M14.36,6h-0.72c0-0.904-0.736-1.64-1.64-1.64
                    S10.36,5.096,10.36,6H9.64c0-1.301,1.059-2.36,2.36-2.36S14.36,4.699,14.36,6z"
                  />
                </svg>
              </div>
              <h3 className="text-slate-200 font-medium">Machine Learning</h3>
            </div>
            <div className="m-2 flex flex-col items-center font-bold">
              <div>
                <motion.svg
                  className="w-[64px] h-[64px]"
                  width="800px"
                  height="800px"
                  viewBox="0 0 512 512"
                  id="Layer_1"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: entered ? 1 : 0 }}
                        transition={transition}
                        fill="transparent"
                        stroke="rgb(255, 255, 255)"
                        strokeWidth="7"
                        strokeLinecap="round"
                        class="st0"
                        d="M155.3,162v188c0,3.7,3,6.8,6.8,6.8h188c3.7,0,6.8-3,6.8-6.8V162c0-3.7-3-6.8-6.8-6.8H162 C158.3,155.3,155.3,158.3,155.3,162z M193.3,200c0-3.7,3-6.8,6.8-6.8h112c3.7,0,6.8,3,6.8,6.8v112c0,3.7-3,6.8-6.8,6.8H200 c-3.7,0-6.8-3-6.8-6.8V200z"
                      />
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: entered ? 1 : 0 }}
                        transition={transition}
                        fill="transparent"
                        stroke="rgb(255, 255, 255)"
                        strokeWidth="7"
                        strokeLinecap="round"
                        class="st1"
                        d="M249,80.7v42.4c0,3.9,3.1,7,7,7s7-3.1,7-7V80.7c11.2-3.1,19.4-13.3,19.4-25.4c0-14.5-11.8-26.4-26.4-26.4 s-26.4,11.8-26.4,26.4C229.6,67.4,237.8,77.7,249,80.7z M256,42.9c6.8,0,12.4,5.6,12.4,12.4s-5.6,12.4-12.4,12.4 s-12.4-5.6-12.4-12.4S249.2,42.9,256,42.9z"
                      />
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: entered ? 1 : 0 }}
                        transition={transition}
                        fill="transparent"
                        stroke="rgb(255, 255, 255)"
                        strokeWidth="7"
                        strokeLinecap="round"
                        class="st1"
                        d="M334.8,28.9c-14.5,0-26.4,11.8-26.4,26.4c0,12.1,8.2,22.3,19.4,25.4v42.4c0,3.9,3.1,7,7,7s7-3.1,7-7V80.7 c11.2-3.1,19.4-13.3,19.4-25.4C361.1,40.8,349.3,28.9,334.8,28.9z M334.8,67.7c-6.8,0-12.4-5.6-12.4-12.4s5.6-12.4,12.4-12.4 s12.4,5.6,12.4,12.4S341.6,67.7,334.8,67.7z"
                      />
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: entered ? 1 : 0 }}
                        transition={transition}
                        fill="transparent"
                        stroke="rgb(255, 255, 255)"
                        strokeWidth="7"
                        strokeLinecap="round"
                        class="st1"
                        d="M170.3,80.7v42.4c0,3.9,3.1,7,7,7s7-3.1,7-7V80.7c11.2-3.1,19.4-13.3,19.4-25.4c0-14.5-11.8-26.4-26.4-26.4 s-26.4,11.8-26.4,26.4C150.9,67.4,159.1,77.7,170.3,80.7z M177.3,42.9c6.8,0,12.4,5.6,12.4,12.4s-5.6,12.4-12.4,12.4 s-12.4-5.6-12.4-12.4S170.4,42.9,177.3,42.9z"
                      />
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: entered ? 1 : 0 }}
                        transition={transition}
                        fill="transparent"
                        stroke="rgb(255, 255, 255)"
                        strokeWidth="7"
                        strokeLinecap="round"
                        class="st1"
                        d="M263,431.3v-42.4c0-3.9-3.1-7-7-7s-7,3.1-7,7v42.4c-11.2,3.1-19.4,13.3-19.4,25.4c0,14.5,11.8,26.4,26.4,26.4 s26.4-11.8,26.4-26.4C282.4,444.6,274.2,434.3,263,431.3z M256,469.1c-6.8,0-12.4-5.6-12.4-12.4s5.6-12.4,12.4-12.4 s12.4,5.6,12.4,12.4S262.8,469.1,256,469.1z"
                      />
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: entered ? 1 : 0 }}
                        transition={transition}
                        fill="transparent"
                        stroke="rgb(255, 255, 255)"
                        strokeWidth="7"
                        strokeLinecap="round"
                        class="st1"
                        d="M341.8,431.3v-42.4c0-3.9-3.1-7-7-7s-7,3.1-7,7v42.4c-11.2,3.1-19.4,13.3-19.4,25.4 c0,14.5,11.8,26.4,26.4,26.4s26.4-11.8,26.4-26.4C361.1,444.6,352.9,434.3,341.8,431.3z M334.8,469.1c-6.8,0-12.4-5.6-12.4-12.4 s5.6-12.4,12.4-12.4s12.4,5.6,12.4,12.4S341.6,469.1,334.8,469.1z"
                      />
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: entered ? 1 : 0 }}
                        transition={transition}
                        fill="transparent"
                        stroke="rgb(255, 255, 255)"
                        strokeWidth="7"
                        strokeLinecap="round"
                        class="st1"
                        d="M184.3,431.3v-42.4c0-3.9-3.1-7-7-7s-7,3.1-7,7v42.4c-11.2,3.1-19.4,13.3-19.4,25.4 c0,14.5,11.8,26.4,26.4,26.4s26.4-11.8,26.4-26.4C203.6,444.6,195.4,434.3,184.3,431.3z M177.3,469.1c-6.8,0-12.4-5.6-12.4-12.4 s5.6-12.4,12.4-12.4s12.4,5.6,12.4,12.4S184.1,469.1,177.3,469.1z"
                      />
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: entered ? 1 : 0 }}
                        transition={transition}
                        fill="transparent"
                        stroke="rgb(255, 255, 255)"
                        strokeWidth="7"
                        strokeLinecap="round"
                        class="st1"
                        d="M456.7,229.6c-12.1,0-22.3,8.2-25.4,19.4h-42.4c-3.9,0-7,3.1-7,7s3.1,7,7,7h42.4c3.1,11.2,13.3,19.4,25.4,19.4 c14.5,0,26.4-11.8,26.4-26.4S471.2,229.6,456.7,229.6z M456.7,268.4c-6.8,0-12.4-5.6-12.4-12.4s5.6-12.4,12.4-12.4 s12.4,5.6,12.4,12.4S463.5,268.4,456.7,268.4z"
                      />
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: entered ? 1 : 0 }}
                        transition={transition}
                        fill="transparent"
                        stroke="rgb(255, 255, 255)"
                        strokeWidth="7"
                        strokeLinecap="round"
                        class="st1"
                        d="M456.7,308.4c-12.1,0-22.3,8.2-25.4,19.4h-42.4c-3.9,0-7,3.1-7,7s3.1,7,7,7h42.4c3.1,11.2,13.3,19.4,25.4,19.4 c14.5,0,26.4-11.8,26.4-26.4S471.2,308.4,456.7,308.4z M456.7,347.1c-6.8,0-12.4-5.6-12.4-12.4s5.6-12.4,12.4-12.4 s12.4,5.6,12.4,12.4S463.5,347.1,456.7,347.1z"
                      />
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: entered ? 1 : 0 }}
                        transition={transition}
                        fill="transparent"
                        stroke="rgb(255, 255, 255)"
                        strokeWidth="7"
                        strokeLinecap="round"
                        class="st1"
                        d="M388.9,184.3h42.4c3.1,11.2,13.3,19.4,25.4,19.4c14.5,0,26.4-11.8,26.4-26.4s-11.8-26.4-26.4-26.4 c-12.1,0-22.3,8.2-25.4,19.4h-42.4c-3.9,0-7,3.1-7,7S385,184.3,388.9,184.3z M456.7,164.9c6.8,0,12.4,5.6,12.4,12.4 s-5.6,12.4-12.4,12.4s-12.4-5.6-12.4-12.4S449.9,164.9,456.7,164.9z"
                      />
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: entered ? 1 : 0 }}
                        transition={transition}
                        fill="transparent"
                        stroke="rgb(255, 255, 255)"
                        strokeWidth="7"
                        strokeLinecap="round"
                        class="st1"
                        d="M123.1,249H80.7c-3.1-11.2-13.3-19.4-25.4-19.4c-14.5,0-26.4,11.8-26.4,26.4s11.8,26.4,26.4,26.4 c12.1,0,22.3-8.2,25.4-19.4h42.4c3.9,0,7-3.1,7-7S127,249,123.1,249z M55.3,268.4c-6.8,0-12.4-5.6-12.4-12.4s5.6-12.4,12.4-12.4 s12.4,5.6,12.4,12.4S62.1,268.4,55.3,268.4z"
                      />
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: entered ? 1 : 0 }}
                        transition={transition}
                        fill="transparent"
                        stroke="rgb(255, 255, 255)"
                        strokeWidth="7"
                        strokeLinecap="round"
                        class="st1"
                        d="M123.1,327.8H80.7c-3.1-11.2-13.3-19.4-25.4-19.4c-14.5,0-26.4,11.8-26.4,26.4s11.8,26.4,26.4,26.4 c12.1,0,22.3-8.2,25.4-19.4h42.4c3.9,0,7-3.1,7-7S127,327.8,123.1,327.8z M55.3,347.1c-6.8,0-12.4-5.6-12.4-12.4 s5.6-12.4,12.4-12.4s12.4,5.6,12.4,12.4S62.1,347.1,55.3,347.1z"
                      />
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: entered ? 1 : 0 }}
                        transition={transition}
                        fill="transparent"
                        stroke="rgb(255, 255, 255)"
                        strokeWidth="7"
                        strokeLinecap="round"
                        class="st1"
                        d="M123.1,170.3H80.7c-3.1-11.2-13.3-19.4-25.4-19.4c-14.5,0-26.4,11.8-26.4,26.4s11.8,26.4,26.4,26.4 c12.1,0,22.3-8.2,25.4-19.4h42.4c3.9,0,7-3.1,7-7S127,170.3,123.1,170.3z M55.3,189.6c-6.8,0-12.4-5.6-12.4-12.4 s5.6-12.4,12.4-12.4s12.4,5.6,12.4,12.4S62.1,189.6,55.3,189.6z"
                      />
                    </g>
                  </g>
                </motion.svg>
              </div>
              <h3 className="text-slate-200 font-medium">Hardware General</h3>
            </div>
            <div className="m-2 flex flex-col items-center font-bold">
              <div>
                <motion.svg
                  className="w-[64px] h-[64px]"
                  width="800px"
                  height="800px"
                  viewBox="0 0 45 45"
                  fill="transparent"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: entered ? 1 : 0 }}
                    transition={transition}
                    fill="transparent"
                    stroke="rgb(255, 255, 255)"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    d="M8 14.5C8 12.685 8.705 10.941 9.966 9.636C11.227 8.331 12.946 7.566 14.76 7.504L15 7.5H17C18.773 7.501 20.479 8.174 21.775 9.383C23.071 10.593 23.86 12.249 23.983 14.017L23.996 14.257L24.006 14.677C24.049 15.41 24.36 16.102 24.88 16.622C25.399 17.141 26.091 17.452 26.824 17.495L27 17.5H30C32.078 17.5 34.075 18.309 35.568 19.755C37.06 21.202 37.931 23.173 37.996 25.25L38 25.5V33.5C38 33.745 37.91 33.981 37.747 34.164C37.585 34.347 37.36 34.464 37.117 34.493L37 34.5H36V37.5H34V34.5H12V37.5H10V34.5H9C8.755 34.5 8.519 34.41 8.336 34.247C8.153 34.085 8.036 33.86 8.007 33.617L8 33.5V14.5ZM12 26.5H10V32.5H36V26.5H34M16 26.5H14H16ZM20 26.5H18H20ZM24 26.5H22H24ZM28 26.5H26H28ZM32 26.5H30H32ZM17 9.5H15C13.712 9.5 12.473 9.998 11.542 10.889C10.612 11.78 10.061 12.996 10.005 14.283L10 14.5V24.5H35.915L35.899 24.398C35.656 23.102 34.994 21.921 34.013 21.039C33.033 20.157 31.789 19.622 30.474 19.518L30.224 19.504L30 19.5H27C24.311 19.5 22.118 17.378 22.005 14.734L21.997 14.312C21.948 13.019 21.401 11.796 20.469 10.898C19.537 10.001 18.294 9.5 17 9.5Z"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: entered ? 1 : 0 }}
                    transition={transition}
                    fill="transparent"
                    stroke="rgb(255, 255, 255)"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    d="M14 30.5H11.994V24.934H14V30.5Z"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: entered ? 1 : 0 }}
                    transition={transition}
                    fill="transparent"
                    stroke="rgb(255, 255, 255)"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    d="M18 30.5H15.994V24.934H18V30.5Z"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: entered ? 1 : 0 }}
                    transition={transition}
                    fill="transparent"
                    stroke="rgb(255, 255, 255)"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    d="M22 30.5H19.994V24.934H22V30.5Z"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: entered ? 1 : 0 }}
                    transition={transition}
                    fill="transparent"
                    stroke="rgb(255, 255, 255)"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    d="M26 30.5H23.994V24.934H26V30.5Z"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: entered ? 1 : 0 }}
                    transition={transition}
                    fill="transparent"
                    stroke="rgb(255, 255, 255)"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    d="M30 30.5H27.994V24.934H30V30.5Z"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: entered ? 1 : 0 }}
                    transition={transition}
                    fill="transparent"
                    stroke="rgb(255, 255, 255)"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    d="M34 30.5H31.994V24.934H34V30.5Z"
                  />
                </motion.svg>
              </div>
              <h3 className="text-slate-200 font-medium">Musica</h3>
            </div>
            <div className="m-2 flex flex-col items-center font-bold">
              <div className="">
                <motion.svg
                  className="w-[64px] h-[64px]"
                  fill="#fff"
                  width="800px"
                  height="800px"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: entered ? 1 : 0 }}
                    transition={transition}
                    fill="transparent"
                    stroke="rgb(255, 255, 255)"
                    strokeWidth="13"
                    strokeLinecap="round"
                    d="M798.071 357.531c-16.527 24.259-51.62 24.259-68.147 0-9.185-13.476-9.185-32.01 0-45.486 16.527-24.259 51.62-24.259 68.147 0 9.185 13.476 9.185 32.01 0 45.486zm93.628 92.093c-16.527 24.259-51.62 24.259-68.147 0-9.185-13.476-9.185-32.01 0-45.486 16.527-24.259 51.62-24.259 68.147 0 9.185 13.476 9.185 32.01 0 45.486zm-189.305 0c-16.527 24.259-51.62 24.259-68.147 0-9.185-13.476-9.185-32.01 0-45.486 16.527-24.259 51.62-24.259 68.147 0 9.185 13.476 9.185 32.01 0 45.486zm95.677 95.164c-16.527 24.259-51.62 24.259-68.147 0-9.185-13.476-9.185-32.01 0-45.486 16.527-24.259 51.62-24.259 68.147 0 9.185 13.476 9.185 32.01 0 45.486zM360.192 428.417c0-53.017-42.983-96-96-96s-96 42.983-96 96 42.983 96 96 96 96-42.983 96-96zm40.96 0c0 75.638-61.322 136.96-136.96 136.96s-136.96-61.322-136.96-136.96 61.322-136.96 136.96-136.96 136.96 61.322 136.96 136.96z"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: entered ? 1 : 0 }}
                    transition={transition}
                    fill="transparent"
                    stroke="rgb(255, 255, 255)"
                    strokeWidth="13"
                    strokeLinecap="round"
                    d="M983.038 727.533c-.352 61.995-50.737 112.151-112.843 112.151-39.998 0-76.347-20.949-96.661-54.546-5.852-9.679-18.443-12.782-28.122-6.929s-12.782 18.443-6.929 28.122c27.659 45.746 77.229 74.314 131.712 74.314 84.943 0 153.805-68.844 153.805-153.764l-1.254-19.506-40.634-281.277c-23.484-162.304-162.639-282.733-326.691-282.733H467.343c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48h188.078c143.699 0 265.584 105.483 286.153 247.638l40.355 278.923 1.109 16.649z"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: entered ? 1 : 0 }}
                    transition={transition}
                    fill="transparent"
                    stroke="rgb(255, 255, 255)"
                    strokeWidth="13"
                    strokeLinecap="round"
                    d="M511.904 687.705c90.526 0 173.645 43.889 225.067 116.315 6.548 9.223 19.333 11.391 28.555 4.843s11.391-19.333 4.843-28.555c-59.025-83.133-154.528-133.562-258.465-133.562-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48zM42.071 710.884l40.355-278.923c20.569-142.154 142.454-247.638 286.153-247.638h188.078c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48H368.579c-164.052 0-303.207 120.429-326.691 282.733L1.419 705.802.045 725.519C0 811.8 68.862 880.644 153.805 880.644c54.483 0 104.053-28.568 131.712-74.314 5.852-9.679 2.75-22.27-6.929-28.122s-22.27-2.75-28.122 6.929c-20.314 33.598-56.663 54.546-96.661 54.546-62.105 0-112.491-50.155-112.843-112.151l1.109-16.649z"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: entered ? 1 : 0 }}
                    transition={transition}
                    fill="transparent"
                    stroke="rgb(255, 255, 255)"
                    strokeWidth="13"
                    strokeLinecap="round"
                    d="M512.096 646.745c-103.937 0-199.44 50.429-258.465 133.562-6.548 9.223-4.38 22.007 4.843 28.555s22.007 4.38 28.555-4.843c51.423-72.425 134.541-116.315 225.067-116.315 11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48z"
                  />
                </motion.svg>
              </div>
              <h3 className="text-slate-200 font-medium">Videojuegos</h3>
            </div>
          </div>
        </div>
      </motion.div>
    </InView>
  );
};

export default AboutMe;
