import React from 'react'
import Buttons from './Buttons'
import { motion } from 'framer-motion'


const svgVariants = {
  hidden: { rotate: -90 },
  visible: {
    rotate: 0,
    transition: { duration: 1 }
  }
}

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "white"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "white",
    transition: { duration: 2, ease: "easeIn" }
  }
}
const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };


const Navbar = () => {
  return (
    <div className='bg-port__black'>
      <div className='flex flex-row w-[100%] m-[-2px] h-100 align-center justify-between bg-port__black  border-b-black shadow-xl'>
        <div className='flex items-center w-[100%]'>
          {/* <h1 className='m-5 font-bold font-xl text-white'>Ivo Garraza</h1> */}
          <motion.svg className="m-5 font-ubuntu" initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }} width="36" height="28" viewBox="0 0 36 28" fill="#fff" xmlns="http://www.w3.org/2000/svg">
            <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={transition} fill="white" d="M7.30966 0.818181H8.30966V-0.181819H7.30966V0.818181ZM7.30966 27V28H8.30966V27H7.30966ZM0.981534 27H-0.0184658V28H0.981534V27ZM0.981534 0.818181V-0.181819H-0.0184658V0.818181H0.981534ZM6.30966 0.818181V27H8.30966V0.818181H6.30966ZM7.30966 26H0.981534V28H7.30966V26ZM1.98153 27V0.818181H-0.0184658V27H1.98153ZM0.981534 1.81818H7.30966V-0.181819H0.981534V1.81818ZM28.4641 9.37074L27.4987 9.63126L27.6982 10.3707H28.4641V9.37074ZM27.8249 7.9517L26.9955 8.51033L27.0009 8.51823L27.8249 7.9517ZM25.3832 6.23864L25.1044 7.19898L25.1115 7.20106L25.1187 7.20304L25.3832 6.23864ZM20.3462 6.92898L19.7951 6.09457L19.7915 6.09693L20.3462 6.92898ZM18.2113 9.61364L19.1297 10.0092L19.1308 10.0068L18.2113 9.61364ZM18.1857 18.1662L19.111 17.7868L19.111 17.7868L18.1857 18.1662ZM20.2951 20.8764L20.8551 20.0479L20.8551 20.0479L20.2951 20.8764ZM26.5849 21.2472L27.0088 22.1529L27.013 22.1509L26.5849 21.2472ZM28.4258 19.6236L27.5674 19.1106L27.5674 19.1106L28.4258 19.6236ZM29.0522 17.1562L29.1709 16.1633L28.0522 16.0296V17.1562H29.0522ZM30.2283 17.2969V18.2969L30.3471 16.3039L30.2283 17.2969ZM23.8619 17.2969H22.8619V18.2969H23.8619V17.2969ZM23.8619 12.6818V11.6818H22.8619V12.6818H23.8619ZM35.1502 12.6818H36.1502V11.6818H35.1502V12.6818ZM33.6545 22.1676L32.7958 21.655L32.7939 21.6583L33.6545 22.1676ZM29.5636 26.0156L29.1059 25.1265L29.1041 25.1274L29.5636 26.0156ZM17.0096 25.7344L17.5061 24.8664L17.5061 24.8664L17.0096 25.7344ZM12.5863 21.1065L11.701 21.5717L11.7019 21.5732L12.5863 21.1065ZM11.9599 8.23295L12.8932 8.59193L12.8938 8.59034L11.9599 8.23295ZM14.6317 3.98864L13.922 3.28414L13.9194 3.28679L14.6317 3.98864ZM18.6204 1.35511L18.2544 0.424486L18.2526 0.425193L18.6204 1.35511ZM27.7482 1.11222L27.432 2.0609L27.4338 2.06151L27.7482 1.11222ZM31.2255 2.95312L30.6065 3.73853L30.6097 3.74105L31.2255 2.95312ZM33.6928 5.77841L32.8271 6.27891L32.8271 6.27891L33.6928 5.77841ZM34.869 9.37074V10.3707H35.9935L35.8621 9.2539L34.869 9.37074ZM29.4296 9.11021C29.2587 8.47704 29.0016 7.89803 28.649 7.38518L27.0009 8.51823C27.2108 8.82356 27.3798 9.19058 27.4987 9.63126L29.4296 9.11021ZM28.6544 7.3931C28.3059 6.87563 27.8756 6.43458 27.3674 6.0746L26.2114 7.70665C26.5214 7.92621 26.7815 8.19255 26.9955 8.51031L28.6544 7.3931ZM27.3674 6.0746C26.8548 5.71149 26.2779 5.44707 25.6476 5.27423L25.1187 7.20304C25.5452 7.31998 25.9058 7.49021 26.2114 7.70665L27.3674 6.0746ZM25.662 5.27829C25.0309 5.09506 24.3561 5.00852 23.6445 5.00852V7.00852C24.1944 7.00852 24.6787 7.07539 25.1044 7.19898L25.662 5.27829ZM23.6445 5.00852C22.207 5.00852 20.9097 5.35828 19.7951 6.09458L20.8974 7.76337C21.6407 7.2724 22.5423 7.00852 23.6445 7.00852V5.00852ZM19.7915 6.09693C18.6854 6.83438 17.8588 7.89434 17.2918 9.22052L19.1308 10.0068C19.5695 8.98066 20.1662 8.25085 20.9009 7.76103L19.7915 6.09693ZM17.2928 9.2181C16.7222 10.5432 16.457 12.1049 16.457 13.8707H18.457C18.457 12.2956 18.6947 11.0193 19.1297 10.0092L17.2928 9.2181ZM16.457 13.8707C16.457 15.6414 16.7126 17.2094 17.2605 18.5456L19.111 17.7868C18.6873 16.7536 18.457 15.4581 18.457 13.8707H16.457ZM17.2605 18.5456C17.8094 19.8841 18.6275 20.9562 19.7351 21.7049L20.8551 20.0479C20.1218 19.5523 19.5337 18.8176 19.111 17.7868L17.2605 18.5456ZM19.7351 21.7049C20.8491 22.4579 22.1694 22.8097 23.6445 22.8097V20.8097C22.4947 20.8097 21.582 20.5393 20.8551 20.0479L19.7351 21.7049ZM23.6445 22.8097C24.9066 22.8097 26.0405 22.6061 27.0088 22.1528L26.1609 20.3415C25.527 20.6382 24.7006 20.8097 23.6445 20.8097V22.8097ZM27.013 22.1509C27.9829 21.6915 28.7549 21.0224 29.2842 20.1365L27.5674 19.1106C27.2615 19.6225 26.8062 20.0358 26.1568 20.3434L27.013 22.1509ZM29.2842 20.1365C29.8086 19.259 30.0522 18.2532 30.0522 17.1562H28.0522C28.0522 17.9513 27.8782 18.5905 27.5674 19.1106L29.2842 20.1365ZM28.9335 18.1492L30.1096 18.2898L30.3471 16.3039L29.1709 16.1633L28.9335 18.1492ZM30.2283 16.2969H23.8619V18.2969H30.2283V16.2969ZM24.8619 17.2969V12.6818H22.8619V17.2969H24.8619ZM23.8619 13.6818H35.1502V11.6818H23.8619V13.6818ZM34.1502 12.6818V16.1463H36.1502V12.6818H34.1502ZM34.1502 16.1463C34.1502 18.3466 33.6832 20.1686 32.7958 21.6551L34.5131 22.6802C35.6201 20.8258 36.1502 18.6335 36.1502 16.1463H34.1502ZM32.7939 21.6583C31.9019 23.1655 30.6785 24.3171 29.1059 25.1265L30.0212 26.9048C31.9259 25.9244 33.4298 24.5107 34.5151 22.6769L32.7939 21.6583ZM29.1041 25.1274C27.5366 25.9382 25.7084 26.358 23.5934 26.358V28.358C25.9784 28.358 28.1303 27.8828 30.023 26.9038L29.1041 25.1274ZM23.5934 26.358C21.2447 26.358 19.2261 25.8503 17.5061 24.8664L16.513 26.6024C18.5771 27.7832 20.9478 28.358 23.5934 28.358V26.358ZM17.5061 24.8664C15.7855 23.882 14.4426 22.4817 13.4707 20.6399L11.7019 21.5732C12.8436 23.7371 14.4496 25.422 16.513 26.6024L17.5061 24.8664ZM13.4715 20.6414C12.5047 18.8012 12.0011 16.5813 12.0011 13.9474H10.0011C10.0011 16.8363 10.5543 19.3891 11.701 21.5717L13.4715 20.6414ZM12.0011 13.9474C12.0011 11.8978 12.3061 10.1184 12.8932 8.59193L11.0265 7.87398C10.3352 9.6714 10.0011 11.7016 10.0011 13.9474H12.0011ZM12.8938 8.59034C13.4886 7.03589 14.3081 5.74191 15.3441 4.69049L13.9194 3.28679C12.6713 4.55354 11.7095 6.08911 11.0259 7.87557L12.8938 8.59034ZM15.3415 4.69313C16.3955 3.63128 17.6088 2.83052 18.9881 2.28503L18.2526 0.425193C16.6149 1.07288 15.1691 2.02781 13.922 3.28414L15.3415 4.69313ZM18.9864 2.28574C20.3787 1.73819 21.8857 1.46023 23.5167 1.46023V-0.539774C21.6533 -0.539774 19.8962 -0.221151 18.2544 0.424488L18.9864 2.28574ZM23.5167 1.46023C24.9373 1.46023 26.24 1.66356 27.432 2.0609L28.0645 0.163532C26.6485 -0.308449 25.1301 -0.539774 23.5167 -0.539774V1.46023ZM27.4338 2.06151C28.6449 2.46257 29.6991 3.02335 30.6065 3.73852L31.8445 2.16773C30.7405 1.29767 29.4766 0.631181 28.0626 0.162918L27.4338 2.06151ZM30.6097 3.74105C31.5252 4.45649 32.2619 5.30135 32.8271 6.27891L34.5586 5.27791C33.8623 4.07365 32.9542 3.03499 31.8413 2.1652L30.6097 3.74105ZM32.8271 6.27891C33.3868 7.24699 33.7376 8.31304 33.8758 9.48758L35.8621 9.2539C35.6935 7.82048 35.2603 6.49164 34.5586 5.27791L32.8271 6.27891ZM34.869 8.37074H28.4641V10.3707H34.869V8.37074Z" />
          </motion.svg>
        </div>
        <motion.div initial={{x:400}} animate={{x:0}} transition={{duration:1}} className='m-5 mr-1 flex flex-row '>
          <Buttons title='About me' id='orange'></Buttons>
          <a href='#projects'>
            <button href="#projects" class="group relative mr-5 h-10 w-[100px] overflow-hidden rounded-xl  bg-port__gray text-lg shadow">
              <div class="absolute inset-0 w-0 bg-port__blue transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span class="relative text-white group-hover:text-white">Projects</span>
            </button>
          </a>
          <a href="#contact">
            <button class="group relative mr-5 h-10 w-[100px] overflow-hidden rounded-xl bg-port__gray text-lg shadow">
              <div class="absolute inset-0 w-0 bg-port__blue transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span class="relative text-white group-hover:text-white">Contact</span>
            </button>
          </a>
        </motion.div>
      </div>
    </div>

  )
}

export default Navbar