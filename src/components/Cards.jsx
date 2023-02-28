import React, { useEffect } from 'react'
import AOS from 'aos'

const Card = (props) => {
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])

  return (
    
    <div className={`border-2 bg-white border-b-4 ${!props.color ? 'border-b-[#00ADB5]' : props.color} rounded-xl flex flex-col items-center justify-between content-center justify-self-center p-5 w-[225px] h-[225px] grayscale hover:grayscale-0 shadow-md cursor-pointer`} data-aos='fade-up'>
        {/* div invisible para centrar imagen con justify-content: space-between */}
        <div></div>
        <img src={props.img} className='w-[128px] '/>
        <h2>{props.title}</h2>
    </div>
  )
}

export default Card