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
  const title = "Welcome to my personal portfolio!".split("")
  const name = "Ivo Garraza".split("")
  return (
    <div className='flex items-center justify-center bg-[#1B262C] h-[90vh]'>
      <div className='flex flex-row items-center justify-around w-[100%]'>
        <div className='ml-[5%] text-black '>
          {/* <h2 className={`${styles.heading2}`}>Welcome to my personal portfolio! </h2>  */}
          {title.map((letter,index)=>(
          <TextSpan key={index} size='text-4xl' weight='font-bold' color='text-white'>
              {letter === " "? "\u00A0" : letter}
            </TextSpan>
          ))}
          <br/>
          <br/>
          <span className='text-white text-2xl'>I'm </span>
          {name.map((letter,index)=>(
            <TextSpan key={index} size='text-2xl' weight='font-bold' color='text-white'>
              {letter === " "? "\u00A0" : letter}
            </TextSpan>
          ))}
          <br/>
          {texto.map((letter,index)=>(
            <TextSpan key={index} size='text-2xl' weight='font-normal' color='text-white'>
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