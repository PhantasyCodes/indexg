import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import ProgressBar from '../components/ProgressBar'

import logo from '../assets/logo.png'

import './Loader.css'

const transition = {duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]}
// const imageArray = [hero1, hero2]

function Loader() {

  return (
    <motion.div exit={{y:'100vh', transition: transition}} className="loading-page">
      <ProgressBar />
    </motion.div>

  )
}

export default Loader