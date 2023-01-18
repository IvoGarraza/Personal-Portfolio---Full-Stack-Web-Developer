import React, {useEffect} from 'react'
import { avatar } from '../assets'
import AOS from 'aos'
import styles from '../constants/styles'

const Hero = () => {

  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <div className='flex items-center justify-center bg-[#F07B3F] h-[90vh]'>
      <div className='flex flex-row-reverse items-center justify-between text-center w-[100%]'>
        <img src={avatar} className='w-[256px] ml-[10%]' data-aos='zoom-in'/>
        <div className='ml-[5%] text-black'>
          <h2 className={`${styles.heading2}`}>Welcome to my personal portfolio! <br/>I'm <span className='text-black'>Ivo Garraza</span>, Full Stack Web Developer</h2>
        </div>
      </div>   
    </div>
  )
}

export default 
Hero