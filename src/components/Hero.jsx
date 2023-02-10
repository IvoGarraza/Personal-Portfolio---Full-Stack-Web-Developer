import React, {useEffect} from 'react'
import { avatar, foto } from '../assets'
import AOS from 'aos'
import styles from '../constants/styles'
import TextSpan from './animation-resorces/TextSpan'

const Hero = () => {

  useEffect(()=>{
    AOS.init()
  },[])

  const texto = "Full Stack Web Developer".split("")

  return (
    <div className='flex items-center justify-center bg-[#F07B3F] h-[90vh]'>
      <div className='flex flex-row items-center justify-around w-[100%]'>
        <div className='ml-[5%] text-black '>
          <h2 className={`${styles.heading2}`}>Welcome to my personal portfolio! </h2> 
          <span className='text-black text-2xl font-bold'><span className='text-white'>I'm</span> Ivo Garraza</span><br/>
          {texto.map((letter,index)=>(
            <TextSpan key={index}>
              {letter === " "? "\u00A0" : letter}
            </TextSpan>
          ))}
        </div>
        <img src={avatar} className='w-[256px]  rounded-full' data-aos='zoom-in'/>
      </div>   
    </div>
  )
}

export default 
Hero