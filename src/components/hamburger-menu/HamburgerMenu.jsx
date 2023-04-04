import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './HamburgerMenu.css'
import MenuToggle from './MenuToggle'
import styled from 'styled-components'
import logo from '../../assets/logo.png'



const NavLink = styled(motion.li)`
    display: flex;
    align-items: center;
    cursor: pointer;

    a {
        text-decoration: none;
        font-family: Furore;
        color: #EA1626;
        font-size: 3.5vw;
        transition: all 300ms ease-in-out;
        margin-bottom: 2vw;
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

    const navVariants = {
        show: {
            transform: "translateX(0)",
            opacity: 1
        },
        hide: {
            transform: "translateX(5vw)",
            opacity: 0
        }
    }
  return (
    <div>
        <img className='special-logo' src={logo} alt="nice" />
        <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
        <motion.div initial={false} animate={isOpen ? "open" : "closed"} variants={menuVariants} transition={menuTransition} className="menu">
            <NavLink initial={false} animate={isOpen ? "show" : "hide"} variants={{ show: { ...navVariants.show, transition: {delay: 0.3, duration: 0.2}}, hide: { ...navVariants.hide, transition: {delay: 0.05, duration: 0.05}}}}>
                <a href="#">home</a>
            </NavLink>
            <NavLink initial={false} animate={isOpen ? "show" : "hide"} variants={{ show: { ...navVariants.show, transition: {delay: 0.4, duration: 0.2}}, hide: { ...navVariants.hide, transition: {delay: 0.1, duration: 0.05}}}}>
                <a href="#">shop</a>
            </NavLink>
        </motion.div>
    </div>
  )
}

export default HamburgerMenu