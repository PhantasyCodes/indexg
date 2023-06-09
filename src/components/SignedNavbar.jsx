import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { useLocalState } from '../util/useLocalStorage'

import logo from '../assets/logo.png'
import down from '../assets/icons/down.png'

import './SignedNavbar.css'
import { Link, useNavigate } from 'react-router-dom'

const transition = {duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]}

const SignedNavbar = () => {
  
  const navigateTo = useNavigate()

  const [pic, setPic] = useLocalState("", "pic")
  const [test, setTest] = useState("")

  const logOut = () => {
    localStorage.clear()
    window.location.reload();
  }

  return (
    <motion.div initial={{width: 0}} animate={{width: 1800, transition: {delay:0, duration:1}}} className='navbar'>
        <motion.div className="links">
            <motion.a initial={{y: -100}} animate={{y:0, transition: { duration: 2}}} href="#">about</motion.a>
            <motion.a initial={{y: -100}} animate={{y:0, transition: { duration: 2}}} href="#">gallery</motion.a>
            <motion.a initial={{y: -100}} animate={{y:0, transition: { duration: 2}}} href="#">blog</motion.a>
        </motion.div>
        <motion.img className='nav-logo' initial={{scale: 1}} animate={{scale: 0.75, transition: {duration: 0.5}}} src={logo} alt="logo" />
        <motion.div className="logged-links">
          <motion.div whileHover={{width: '15vw'}} onClick={logOut} className="profile-pic">
            <img className='profile-picture' src={pic} alt="Profile" />
            <img className='dropdown' src={down} alt="down" />
            <h1>logout</h1>
          </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default SignedNavbar