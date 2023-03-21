import React from 'react'
import {motion} from 'framer-motion'

import logo from '../assets/logo.png'
import './Navbar.css'

const transition = {duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]}


const Navbar = () => {
  return (
    <motion.div initial={{width: 0}} animate={{width: 1800, transition: {delay:0, duration:1}}} className='navbar'>
        <motion.div className="links">
          <motion.a initial={{y: -100}} animate={{y:0, transition: { duration: 2}}} href="#">about</motion.a>
          <motion.a initial={{y: -100}} animate={{y:0, transition: { duration: 2}}} href="#">gallery</motion.a>
          <motion.a initial={{y: -100}} animate={{y:0, transition: { duration: 2}}} href="#">blog</motion.a>
        </motion.div>
        <motion.img initial={{scale: 1}} animate={{scale: 0.75, transition: {duration: 0.5}}} src={logo} alt="logo" />
        <motion.div className="links">
          <motion.a initial={{y: -100}} animate={{y:0, transition: { duration: 2}}} href="#">sign up</motion.a>
          <motion.a initial={{y: -100}} animate={{y:0, transition: { duration: 2}}} href="#">log in</motion.a>
        </motion.div>
    </motion.div>
  )
}

export default Navbar