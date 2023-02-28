import React from 'react'
import { motion, transform } from 'framer-motion'

const TextSpan = ({children, size, weight, color}) => {

    const rubberBand = () =>{
        return{
            transform:[
                "scale3d(1, 1, 1)",
                "scale3d(1.4, .55, 1)",
                "scale3d(1.55, 1.25, 1)",
                "scale3d(1.25, .85, 1)",
                "scale3d(.9, 1.05, 1)",
                "scale3d(1, 1, 1)",
            ]
        }
    }

  return (
    <motion.span initial={{y:-100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1}} className={`inline-block ${size} ${weight} ${color}`} whileHover={() => rubberBand()}>
        {children}
    </motion.span>
  )
}

export default TextSpan