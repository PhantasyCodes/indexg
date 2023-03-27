import React from 'react'
import {motion} from 'framer-motion'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import './Home.css'

import Hero from '../components/Hero'
import Tournaments from '../components/Tournaments'
import ShopSection from '../components/ShopSection'
import Footer from '../components/Footer'

const marqueeVariants = {
  animate: {
    y: [1000, -600],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
}

const Home = () => {

  return (
    <div className='home'>
      <motion.div initial={{opacity:0}} animate={{opacity:1, transition: {delay: 2}}} className="news">
        <motion.h1 variants={marqueeVariants}
          animate="animate" >monthly tournaments are now live! sign up now!</motion.h1>
      </motion.div>
      <Parallax pages={3}>
        <ParallaxLayer speed={1}>
          <Hero />
        </ParallaxLayer>
        <ParallaxLayer offset={0.90} speed={0.5}>
          <Tournaments />
        </ParallaxLayer>
        <ParallaxLayer offset={1.50} speed={1}>
          <ShopSection />
        </ParallaxLayer>
        <ParallaxLayer offset={2.0} speed={1.3}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
    
  )
}

export default Home