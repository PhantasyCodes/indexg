import {motion} from 'framer-motion'

import hero1 from '../assets/images/byadema.png'

import React from 'react'
import Navbar from './Navbar'

import './Hero.css'

const transition = {duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]}

const firstName = {
  initial: {
    y: 0
    // opacity: 0
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: .6,
      staggerChildren: .04,
      staggerDirection: -1,
    }
  }
}

const secondName = {
  initial: {
    y: 0
    // opacity: 0
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: .6,
      staggerChildren: .04,
      staggerDirection: 1,
    }
  }
}

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {duration: 1, ...transition}
  }
}


const Hero = () => {
  return (
    <motion.div 
      initial='initial'
      animate='animate'
      exit='exit'
      className='hero'>
        <Navbar />
        <motion.img 
          initial={{
              x: '75%',
              y: '20%'}} 
          animate={{
              x: '125%',
              y: '30%',
              transition: {delay: 0.2, ...transition}
            }}
          className="hero-image"
          src={hero1} alt="" />
        <div className="hero-content">
            <div className="hero-left">
                <motion.div className='title'>
                  <motion.span variants={firstName} className='first'>
                    <motion.span variants={letter}>G</motion.span>
                    <motion.span variants={letter}>A</motion.span>
                    <motion.span variants={letter}>M</motion.span>
                    <motion.span variants={letter}>E</motion.span>
                    <motion.span variants={letter}>R</motion.span>
                  </motion.span>
                  <motion.span variants={secondName} className='second'>
                    <motion.span variants={letter}>C</motion.span>
                    <motion.span variants={letter}>H</motion.span>
                    <motion.span variants={letter}>A</motion.span>
                    <motion.span variants={letter}>R</motion.span>
                    <motion.span variants={letter}>A</motion.span>
                    <motion.span variants={letter}>C</motion.span>
                    <motion.span variants={letter}>T</motion.span>
                    <motion.span variants={letter}>E</motion.span>
                    <motion.span variants={letter}>R</motion.span>
                  </motion.span>
                </motion.div>
                <motion.p
                  initial={{opacity:0}}
                  animate={{opacity:1, transition: {delay:2}}}>
                    Welcome to Kenya's pioneer gaming agency, with over 20 members and a diverse community of gamers</motion.p>
                <motion.a 
                  initial={{opacity:0}}
                  animate={{opacity:1, transition: {delay:2}}}
                  href="#">join now</motion.a>
            </div>
        </div>
    </motion.div>
  )
}

export default Hero