import React from 'react'
import { motion } from 'framer-motion'
import './Panel.css'

const Panel = () => {
  return (
    <div className='panel'>
        <motion.div whileHover={{backgroundPosition: "100% 0%", transition: { duration: 0.5 },}} style={{ background: "linear-gradient(to right, #EA1626, #2A10B3)", backgroundSize: "200% 100%", borderRadius: "10px",}}  className="panel-section">
            <h1>Tournaments</h1>
        </motion.div>
        <div className="panel-section">
            <h1>Users</h1>
        </div>
    </div>  
    )
}

export default Panel