import React from 'react'

import ShopWord from '../components/ShopWord'
import CategoriesCarousel from '../components/CategoriesCarousel'
import Featured from '../components/Featured'
import Navbar from '../components/Navbar'
import Sale from '../components/Sale'
import ShopFooter from '../components/ShopFooter'

import './Shop.css'

const Shop = () => {
  return (
    <div className='shop-home'>
        <Navbar />
        <Sale />
        <Featured />
        <CategoriesCarousel />
        <ShopWord />
        <ShopFooter />
    </div>
  )
}

export default Shop