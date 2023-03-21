import React from 'react'
import { motion } from 'framer-motion'

import './ShopSection.css'





const ShopSection = () => {
  return (
    <div className='shop'>
        <h1>SHOP</h1>
        <div className="shop-link">
            <h2>SHOP ALL</h2>
        </div>
        <div className="catalogue">
            <motion.div whileHover={{width: '25vw'}} className="item">
                <div className="item-text">
                    <h2>Index G Cotton Hoodie</h2>
                    <h3>Ksh 2,500</h3>
                </div>
            </motion.div>
            <motion.div whileHover={{width: '25vw'}} className="item">
                <div className="item-text">
                    <h2>Index G Cotton Hoodie</h2>
                    <h3>Ksh 2,500</h3>
                </div>
            </motion.div>
            <motion.div whileHover={{width: '25vw'}} className="item">
                <div className="item-text">
                    <h2>Index G Cotton Hoodie</h2>
                    <h3>Ksh 2,500</h3>
                </div>
            </motion.div>
            <motion.div whileHover={{width: '25vw'}} className="item">
                <div className="item-text">
                    <h2>Index G Cotton Hoodie</h2>
                    <h3>Ksh 2,500</h3>
                </div>
            </motion.div>
        </div>
        <div className="catalogue catalogue2">
            <motion.div whileHover={{width: '25vw'}} className="item">
                <div className="item-text">
                    <h2>Index G Cotton Hoodie</h2>
                    <h3>Ksh 2,500</h3>
                </div>
            </motion.div>
            <motion.div whileHover={{width: '25vw'}} className="item">
                <div className="item-text">
                    <h2>Index G Cotton Hoodie</h2>
                    <h3>Ksh 2,500</h3>
                </div>
            </motion.div>
            <motion.div whileHover={{width: '25vw'}} className="item">
                <div className="item-text">
                    <h2>Index G Cotton Hoodie</h2>
                    <h3>Ksh 2,500</h3>
                </div>
            </motion.div>
            <motion.div whileHover={{width: '25vw'}} className="item">
                <div className="item-text">
                    <h2>Index G Cotton Hoodie</h2>
                    <h3>Ksh 2,500</h3>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default ShopSection