import React from 'react'

const Buttons = (props) => {

    
        return (
            
/*             <div>
                <a href='#aboutme'>
                <button class="group relative mr-5 h-10 w-[100px] overflow-hidden rounded-xl  bg-port__gray text-lg shadow">
                    <div class={`absolute inset-0 w-0 ${props.id === 'orange' ? 'bg-[#F7A814]':'bg-port__blue'} transition-all duration-[250ms] ease-out group-hover:w-full`}></div>
                    <span class="relative text-white group-hover:text-white">{props.title}</span>
                </button>
                </a>
            </div> */
            <div className='flex items-center justify-center  mr-2'>
                <a href='#aboutme'>
                    <button className='group relative w-24 h-8'>
                        <div className='absolute h-0 inset-0 bg-orange-500 ease-out transition-all mt-[-22px] group-hover:h-[250%] transform skew-x-12'></div>
                        <span className='relative text-white'>{props.title}</span>
                    </button>
                </a>
            </div>
        )

    
}

export default Buttons