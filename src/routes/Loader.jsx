import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import { useAnimation } from 'framer-motion'

import logo from '../assets/logo.png'

import './Loader.css'

const transition = {duration: .6, ease: [0.43, 0.13, 0.23, 0.96]}
// const imageArray = [hero1, hero2]

function Loader() {

  const [loading, setLoading] = useState(false)
  const [text, setText] = useState("GG")

  const animation = useAnimation()

  const toggleText= () => {
    setText((curr) => (curr === "GG..." ? "GG" : curr + "."))
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 8000)
  }, [])

  
  useEffect(() => {
    setTimeout(() => {
      toggleText()
    }, 1000)
  }, [text])

  useEffect(() => {
    if(loading) {
      animation.start({
        x:-1000,
        transition: {
          type: 'spring', duration: 2, bounce: 0.3
        }
      })
    }
    if(!loading){
      animation.start({
        x: '-10vw', 
        transition: {
          type: 'spring', duration: 2, bounce: 0.3
        }
      })
    }

  }, [loading])

  return (
    <div className="loader">
        <div className='navbar2'>
            <div className="links">
            </div>
            <img className='logo' src={logo} alt="logo" />
            <div className="links">
            </div>
        </div>
        <div className="loader-text">
          <h1>{text}</h1>
        </div>
        <div className="loader-link">
          <Link to={`/home`}>
          <motion.div initial={{x: -1000}} animate={animation} whileHover={{scale:1.2, transition: {duration:0.2}}} className="shape">
            <h1>ENTER</h1>
            <svg width="1055" height="204" viewBox="0 0 1055 204" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L925.604 0L1054.5 101L925.604 204L0 204L0 0Z" fill="#2A10B3"/>
            </svg>
          </motion.div>
          </Link>
        </div>

    </div>

  )
}

export default Loader