import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './HamburgerMenu.css'
import MenuToggle from './MenuToggle'
import styled from 'styled-components'



const NavLink = styled(motion.li)`
    display: flex;
    align-items: center;
    cursor: pointer;

    a {
        text-decoration: none;
        font-family: Furore;
        color: #EA1626;
        font-size: 1.5vw;
        transition: all 300ms ease-in-out;
    }

    &:hover {
        a {
            color: black;
        }
    }

`

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
            <NavLink>
                <a href="#">Home</a>
            </NavLink>
        </motion.div>
    </div>
  )
}

export default HamburgerMenu