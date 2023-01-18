import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row w-100% h-100 align-center justify-between bg-port__black  border-2 border-b-black'>
        <div className='flex items-center'>
          <h1 className='m-5 font-bold font-xl text-white'>Ivo Garraza</h1>
        </div>
        <div className='m-5 mr-1 flex flex-row '>
            <button class="group relative mr-5 h-10 w-[100px] overflow-hidden rounded-full border-[1px] bg-port__gray text-lg shadow">
              <div class="absolute inset-0 w-0 bg-port__blue transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span class="relative text-white group-hover:text-white">About me</span>
            </button>
            <button class="group relative mr-5 h-10 w-[100px] overflow-hidden rounded-full border-[1px] bg-port__gray text-lg shadow">
              <div class="absolute inset-0 w-0 bg-port__blue transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span class="relative text-white group-hover:text-white">Projects</span>
            </button>
            <button class="group relative mr-5 h-10 w-[100px] overflow-hidden rounded-full border-[1px] bg-port__gray text-lg shadow">
              <div class="absolute inset-0 w-0 bg-port__blue transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span class="relative text-white group-hover:text-white">Contact</span>
            </button>
        </div>
    </div>
  )
}

export default Navbar