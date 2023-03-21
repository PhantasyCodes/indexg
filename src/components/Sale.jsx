import React from 'react'

import salePhoto from '../assets/images/sale.jpg'

import './Sale.css'

const Sale = () => {
  return (
    <div className='sale-container'>
        <div className="sale-text">
            <h1>easter sale</h1>
            <p>Shop selected styles and merch and get 20% off. Ends April 19th</p>
            <div className="shop-link2">
                <h2>SHOP</h2>
            </div>
        </div>
        <img src={salePhoto} alt="sale" />
    </div>
  )
}

export default Sale