import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row w-100% h-100 align-center justify-between bg-teal-700  border-2 border-b-black'>
        <div className='flex items-center'>
          <h1 className='m-5 font-bold font-xl text-white'>Ivo Garraza</h1>
        </div>
        <div className='m-5 mr-1 flex flex-row '>
            <div className='flex items-center justify-center mr-5 w-[100px] h-10 bg-teal-100 border-2 border-black rounded-full'>
              <a className='font-semibold'>Projects</a>
            </div>
            <div className='flex items-center justify-center mr-5 w-[100px] h-10 bg-teal-100 border-2 border-black rounded-full'>
              <a className='font-semibold'>About me</a>
            </div>
            <div className='flex items-center justify-center mr-5 w-[100px] h-10 bg-teal-100 border-2 border-black rounded-full'>
              <a className='font-semibold'href='https://wa.me/+5493562408275?text=Hi, I´m writing to you from your web portfolio...'>Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar