import React from 'react'

const Card = (props) => {
  return (
    <div className='border-2 border-b-4 border-b-[#00ADB5] rounded-xl flex flex-col items-center justify-between justify-self-center p-5 w-[70%] h-[225px] grayscale hover:grayscale-0 shadow-md'>
        {/* div invisible para centrar imagen con justify-content: space-between */}
        <div></div>
        <img src={props.img} className='w-[128px] '/>
        <h2>{props.title}</h2>
    </div>
  )
}

export default Card