import React, { useEffect } from 'react'
import AOS from 'aos'
import { motion } from 'framer-motion'

const Card = (props) => {
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])

  return (
    
    <motion.div className={`border-2 bg-white border-b-4 ${!props.color ? 'border-b-[#00ADB5]' : props.color} rounded-xl flex flex-col items-center justify-between content-center justify-self-center sm:p-5 p-3  sm:w-[225px] sm:h-[225px] h-[100%] w-[100%] grayscale hover:grayscale-0 shadow-md cursor-pointer`} data-aos='fade-up'>
        <div></div>
        <img src={props.img} className='sm:w-[128px] w-[40%]'/>
        <h2>{props.title}</h2>
    </motion.div>
  )
}

export default Card