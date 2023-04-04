import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './HamburgerMenu.css'
import MenuToggle from './MenuToggle'

const HamburgerMenu = () => {
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen);
    }

    const menuVariants = {
        open: {
            transform: "translateX(0%)"
        }, 
        closed: {
            transform: "translateX(100%)"
        }
    }

    const menuTransition = { type: "spring", duration: 1, stiffness: 33, delay: 0.1 }
  return (
    <div>
        <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
        <motion.div initial={false} animate={isOpen ? "open" : "closed"} variants={menuVariants} transition={menuTransition} className="menu">

        </motion.div>
    </div>
  )
}

export default HamburgerMenu