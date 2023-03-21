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
    <div className='flex flex-col items-center justify-center bg-[#1B262C] sm:h-[90vh] h-[900px] w-[100%]'>
      <div className='flex sm:flex-row flex-col items-center sm:justify-around justify-around w-[100%] h-[100%] sm:mt-0'>
        <div className='sm:w-[70%] w-[85%] sm:ml-[5%] text-black '>
          {title.map((letter, index) => (
            <TextSpan key={index} size='text-5xl' weight='font-bold' color='text-white'>
              {letter === " " ? "\u00A0" : letter}
            </TextSpan>
          ))}
          <br />
          <br />
          <br/>
          <br/>
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
        <motion.div className='sm:w-[20%] w-[70%] sm:h-[50%] h-[30%] flex sm:mr-[5%] mb-[5%] sm:mt-[10%] items-center justify-center' initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <CardStack></CardStack>
        </motion.div>
      </div>
      <motion.div className='absolute sm:mt-[30%] mt-[190%] sm:ml-[95%] ml-[80%] ' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div class="relative flex items-center group">
          <motion.svg class="w-10 h-10 fill-white animate-pulse cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" whileHover={() => setOpen(true)}>
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
          </motion.svg>
          <AnimatePresence>
            {isOpen && (
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