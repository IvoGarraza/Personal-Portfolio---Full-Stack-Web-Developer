import React from 'react'
import { contact } from '../constants'

const Footer = () => {
  return (
    <div className='flex flex-row justify-around h-[300px] mt-10 bg-port__black text-white rounded-t-xl'>
        <div className='flex items-center'>
            <h2 className='font-bold text-[20px]'>Ivo Garraza</h2>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h2 className='font-bold text-[20px]'>Secciones</h2>
            <div className='flex flex-col my-5 items-center'>
                <a className='my-1' href='#aboutme'>Sobre mi</a>
                <a className='my-1' href='#projects'>Proyectos</a>
                <a className='my-1'href='#contact'>Contacto</a>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <h2 className='font-bold text-[20px]'>Social Media</h2>
            <div className='flex flex-col items-center my-5'>
                {contact.map((red)=>(
                    <a className='my-1' href={red.link}>{red.title}</a>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Footer