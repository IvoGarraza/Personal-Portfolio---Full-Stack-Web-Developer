import React from 'react'
import { motion } from 'framer-motion';



const Modal = (props) => {

  return (
    <motion.div className='w-[100%] h-[100%] bg-gray-500 fixed'
    initial={{
      opacity:0
    }}
    animate={{
      opacity:1
    }}>
          <motion.div className='fixed w-[500px] h-[300px] bg-white m-auto inset-0 p-6 rounded-2xl'
          initial={{
            scale:0
          }}
          animate={{
            scale:1
          }}>
            <motion.div className=''>
              <p>{props.children}</p>
              <button onClick={props.handleClose} className='text-red-500'>X</button>
            </motion.div>
          </motion.div>
    </motion.div>
  )
}

export default Modal