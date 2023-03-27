import React, { useEffect } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'

import './ShopSection.css'

const ShopSection = () => {
    const [shopItems, setShopItems] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/items/all-items")
        .then(res => res.json())
        .then(data => setShopItems(data))
    }, [])

    console.log(shopItems)

    return (
        <div className='shop'>
            <h1>SHOP</h1>
            <div className="shop-link">
                <h2>SHOP ALL</h2>
            </div>
            <div className="catalogue">
                {shopItems.map(item => (
                    <motion.div whileHover={{width: '25vw'}} className="item">
                        <div className="shop-item-image">
                            <img src={item.url} alt="nice" className='shop-image' />
                        </div>
                        <div className="item-text">
                            <h2>{item.name}</h2>
                            <h3>{item.price}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
  )
}

export default ShopSection