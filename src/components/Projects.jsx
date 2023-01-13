import React from 'react'
import styles from '../constants/styles'

const Projects = () => {
  return (
    <div className='bg-port__black my-10 h-[100vh] flex flex-row'>
        <div className=' p-10 h-[100%] items-center flex flex-col justify-center'>
            <p className={styles.heading2}>Meet my projects personal & <br/>work made in this time how developer</p>
            <button className='py-4 px-6 bg-port__blue font-poppins font-medium text-[18px] text-primary outline-none rounded-xl mt-10 hover:text-white'>Projects →</button>
        </div>
        <div className='flex flex-col'>
            <p>Some of my works...</p>
            <div></div>
        </div>
    </div>
  )
}

export default Projects