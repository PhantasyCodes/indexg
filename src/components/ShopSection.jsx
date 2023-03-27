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

    const numberOfItems = 8;

    const items = Array.from({ length: numberOfItems }).map((_, index) => {
        return (
            <motion.div key={index} className="item">
                <motion.div whileHover={{width: '21vw'}}  className="shop-item-image">
                    <img src={shopItems[index]?.url} alt="nice" className='shop-image' />
                </motion.div>
                <div className="item-text">
                    <h2>{shopItems[index]?.name}</h2>
                    <h3>{shopItems[index]?.price}</h3>
                </div>
            </motion.div>
        );
    });


    return (
        <div className='shop'>
            <h1>SHOP</h1>
            <div className="shop-link">
                <h2>SHOP ALL</h2>
            </div>
            <div className="catalogue">
                {items}
            </div>
        </div>
  )
}

export default ShopSection