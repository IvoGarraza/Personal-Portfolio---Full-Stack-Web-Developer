import React, {useEffect} from 'react'
import { avatar } from '../assets'
import AOS from 'aos'

const Hero = () => {

  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <div className='flex items-center justify-center bg-port__white h-[90vh]'>
      <div className='flex flex-col items-center text-center'>
        <img src={avatar} className='w-[256px]' data-aos='zoom-in'/>
        <h2>Welcome to my personal portfolio! <br/>I'm Ivo Garraza, Full Stack Web Developer</h2>
      </div>   
    </div>
  )
}

export default 
Hero