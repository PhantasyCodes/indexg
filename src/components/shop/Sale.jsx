import React from 'react'
import { motion } from 'framer-motion'

import salePhoto from '../../assets/images/sale.jpg'

import './Sale.css'

const Sale = () => {
  return (
    <div className='sale-container'>
        <div className="sale-text">
            <h1>easter sale</h1>
            <p>Shop selected styles, merch and tickets and get 20% off. Ends April 19th</p>
            <motion.div whileHover={{backgroundColor: '#EA1626', boxShadow: '10px 10px', scale:1.1}} className="shop-link2">
                <h2>SHOP</h2>
            </motion.div>
        </div>
        <img src={salePhoto} alt="sale" />
    </div>
  )
}

export default Sale