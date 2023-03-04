import React, { useEffect, useState } from 'react'
import { avatar, foto } from '../assets'
import AOS from 'aos'
import styles from '../constants/styles'
import TextSpan from './animation-resorces/TextSpan'
import { AnimatePresence, motion } from 'framer-motion'
import CardStack from './Test2'

const Hero = () => {

  useEffect(() => {
    AOS.init()
  }, [])

  const [isOpen, setOpen] = useState(false)
  const texto = "Desarrollador Web Full Stack".split("")
  const title = "¡Bienvenido a mi portafolio personal!".split("")
  const name = "Ivo Garraza".split("")
  return (
    <div className='flex flex-col items-center justify-center bg-[#1B262C] h-[90vh] w-[100%]'>
      <div className='flex flex-row items-center justify-around w-[100%]'>
        <div className='w-[70%] ml-[5%] text-black '>
          {/* <h2 className={`${styles.heading2}`}>Welcome to my personal portfolio! </h2>  */}
          {title.map((letter, index) => (
            <TextSpan key={index} size='text-5xl' weight='font-bold' color='text-white'>
              {letter === " " ? "\u00A0" : letter}
            </TextSpan>
          ))}
          <br />
          <br />
          <br/>
          <br/>
          {/* <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5 }} className='text-white text-5xl' >Soy </motion.span> */}
          {name.map((letter, index) => (
            <TextSpan key={index} size='text-5xl' weight='font-bold' color='text-white'>
              {letter === " " ? "\u00A0" : letter}
            </TextSpan>
          ))}
          <br />
          {texto.map((letter, index) => (
            <TextSpan key={index} size='text-3xl' weight='font-normal' color='text-white'>
              {letter === " " ? "\u00A0" : letter}
            </TextSpan>
          ))}

        </div>
        <motion.div className='w-[20%] h-[100%] mr-[5%] mb-[5%]' initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
  {/*         <motion.div className='bg-white absolute w-[300px] h-[370px] mt-[25px] ml-[20px] z-0 rounded-xl' initial={{ x: -20, y: -20 }} animate={{ x: 0, y: 0 }} transition={{ delay: 1, duration: 1 }}></motion.div>
          <motion.div className='bg-slate-400 absolute w-[300px] h-[370px] mt-[15px] ml-[10px] z-0 rounded-xl' initial={{ x: -10, y: -15 }} animate={{ x: 0, y: 0 }} transition={{ delay: 1, duration: 0.5 }}></motion.div>
          <img src={avatar} className='w-[300px] relative z-40 rounded-xl' /> */}
          <CardStack></CardStack>
        </motion.div>
      </div>
      <motion.div className='absolute mt-[30%] ml-[95%]' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        {/*         <div class="relative flex flex-col items-center group">
          <svg class="w-10 h-10 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
          </svg>
          <div class="absolute top-0 flex flex-col items-center hidden mt-6 group-hover:flex">
            <div class="w-3 h-3 -mb-2 rotate-45 bg-white"></div>
            <span class="relative z-10 p-2  text-xs leading-none text-black whitespace-no-wrap bg-white shadow-lg">¿Como hice ese retrato?<br/>Este "retrato" fue generado con el modelo de IA de Stable Diffusion<br/><a>Ver mas..</a></span>
          </div>
        </div> */}
        <div class="relative flex items-center group">
          <motion.svg class="w-10 h-10 fill-white animate-pulse cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" whileHover={() => setOpen(true)}>
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
          </motion.svg>
          <AnimatePresence>
            {isOpen && (
/*               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} exit={{opacity:0}} class="absolute top-0 flex flex-col items-center hidden mt-6 group-hover:flex">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} class="w-3 h-3 -mb-2 rotate-45 bg-white"></motion.div>
                <span class="relative z-10 p-2  text-xs leading-none text-black whitespace-no-wrap bg-white shadow-lg">¿Como hice ese retrato?<br />Este "retrato" fue generado con el modelo de IA de Stable Diffusion<br /><a>Ver mas..</a></span>
              </motion.div> */
              
              <motion.div className='w-[200px] h-[100px] bg-slate-700 absolute ml-[-200px] flex items-center text-center rounded-xl' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.1}} exit={{opacity:0}}>
                <span className='text-white m-4'>Retratos hechos con <a className='font-bold' href='https://stablediffusionweb.com/'>Stable Diffusion</a></span>
                <button className='text-white  absolute mt-[-40%] ml-[90%]' onClick={() => setOpen(prevValue => !prevValue)}>x</button>
                <div className='bg-slate-700 w-[20px] h-[20px] absolute items-center ml-[95%] rotate-45' ></div>
              </motion.div>
              )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}

export default
  Hero