import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import './Panel.css'

const Panel = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div className='panel'>
        <div  className="panel-section">
            <motion.h1 whileHover={{backgroundPosition: "100% 0%", transition: { duration: 0.5 },}} style={{ background: "linear-gradient(to right, #EA1626, #2A10B3)", backgroundSize: "200% 100%", borderRadius: "10px",}} onClick={toggleMenu}>Tournaments</motion.h1>
            <motion.ul 
            initial={{ opacity: 0, y: -10 }}
            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}>
                <li>Create tournament</li>
                
                <li>Update tournaments</li> 
            </motion.ul>
        </div>
        <div className="panel-section">
            <h1>Users</h1>
        </div>
    </div>  
    )
}

export default Panel