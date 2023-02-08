import React from 'react'
import { Link } from 'react-router-dom'

const CardProject = (props) => {
  return (
/*     <div className='flex flex-row w-[600px] h-[120px] items-center justify-between m-2 rounded-xl bg-sky-500/10'>
        <div className='flex-start w-[20%] h-[80px]'>
            <img className='' src={props.img}/>
        </div>
        <div className='text-center text-sm w-[80%] m-1 p-1'>
            <h3 className='text-white font-bold'>{props.title}</h3>
            <p className='text-[#a6a6a6]'>{props.description}</p>
        </div>
        <div></div>
    </div> */
    <div class="p-4 items-center justify-center w-[650px] h-[200px] m-4 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
		<img  class="mx-auto  block w-4/12 h-40 rounded-lg"  alt="art cover" loading="lazy" src={props.img} />
		<div class="sm:w-8/12 pl-0 p-5">
			<div class="space-y-2">
				<div class="space-y-4">
					<h4 class="text-md font-semibold text-cyan-900 text-justify">
						{props.title}
					</h4>
				</div>
				<div class="flex items-center space-x-4 justify-between">
					<div class="flex gap-3 space-y-1">
						<img  src={props.avatar}  class="rounded-full h-8 w-8" />
						<span class="text-sm">{props.description}</span>
					</div>
				</div>
				<div class="flex items-center space-x-4 justify-between">
					<div class="text-grey-500 flex flex-row space-x-1  my-4">
						<svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
						<p class="text-xs">{props.time}</p>
					</div>
					<Link to={props.path}>
						<div class='button w-20 h-8 bg-blue-500 rounded-lg cursor-pointer select-non
								hover:bg-blue-400
								active:translate-y-2 active:bg-blue-500
								active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
								active:border-b-[0px]
								transition-all duration-150 [box-shadow:0_5px_0_0_#1b6ff8,0_10px_0_0_#1b70f841]
								border-b-[1px] border-blue-400'>
							<span class='flex flex-col justify-center items-center h-full text-white font-bold text-xs '>Read more</span>
						</div>
					</Link>
				</div>
			</div>
		</div>
	</div>

  )
}

export default CardProject