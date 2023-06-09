import React from 'react'
import { useLocalState } from '../util/useLocalStorage'

import ShopWord from '../components/ShopWord'
import CategoriesCarousel from '../components/CategoriesCarousel'
import Featured from '../components/shop/Featured'
import Navbar from '../components/Navbar'
import Sale from '../components/shop/Sale'
import ShopFooter from '../components/shop/ShopFooter'
import SignedNavbar from '../components/SignedNavbar'

import './Shop.css'

const Shop = () => {
  const [jwt, setJwt] = useLocalState("", "jwt")

  return (
    <div className='shop-home'>
        {jwt ? <SignedNavbar /> : <Navbar />}
        <Sale />
        <Featured />
        <CategoriesCarousel />
        <ShopWord />
        <ShopFooter />
    </div>
  )
}

export default Shop