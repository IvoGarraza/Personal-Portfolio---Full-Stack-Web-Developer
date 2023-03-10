import React from 'react'

const Buttons = (props) => {
    
        return (
            
            <div>
                <a href='#aboutme'>
                <button class="group relative mr-5 h-10 w-[100px] overflow-hidden rounded-xl  bg-port__gray text-lg shadow">
                    <div class={`absolute inset-0 w-0 ${props.id === 'orange' ? 'bg-[#F7A814]':'bg-port__blue'} transition-all duration-[250ms] ease-out group-hover:w-full`}></div>
                    <span class="relative text-white group-hover:text-white">{props.title}</span>
                </button>
                </a>
            </div>
        )

    
}

export default Buttons