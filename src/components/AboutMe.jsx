import React from 'react'
import { motion } from 'framer-motion'
import profile from '../assets/profile.jpg'

const AboutMe = () => {
  return (
    <div id='aboutme' className='w-full pt-10 pb-20 h-[500px] flex flex-row justify-center bg-port__gray'>
{/*       <div className='m-2 w-[20%]'>
        <img src={profile} className="w-[300px]"></img>
      </div> */}
      <div className='w-[60%] items-center justify-center text-center flex flex-col text-xl'>
        <h2 className='font-bold my-5 text-white'>Sobre mi...</h2>
        <p className='font-medium w-[80%] text-slate-300'>Estudiante de la Universidad  Tecnologica  Nacional  -  Facultad Regional Córdoba y Desarrolador Web Fullstack,<br/> apasionado por la tecnologia y el  aprendizaje  para  el  desarrollo  personal  y profesional.<br/> Me gusta participar en proyectos donde los desafios intelectuales, el trabajo en equipo y las ganas sean fundamentales</p>
      </div>
    </div>
  )
}

export default AboutMe