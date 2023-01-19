import React, { useEffect } from 'react'
import { skills } from '../constants'
import Card from './Cards'
import AOS from 'aos'

function Skills() {

  useEffect(()=>{
    AOS.init()
  },[])
  
  return (
    <div className='items-center text-center'>
        <h2 className='font-bold h-[10vh] m-10'>Skills</h2>
        <div>
            <button>Frontend</button>
            <button>Backend</button>
            <button>Desing</button>
        </div>
        <div className='grid grid-cols-4 grid-flow-row gap-4 justify-center content-center'>
            {skills.map((skill, index)=>(
              
                <Card title={skill.title} img={skill.img} ></Card>
            ))}
        </div>
    </div>
  )
}

export default Skills