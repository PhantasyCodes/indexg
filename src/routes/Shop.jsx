import React from 'react'
import { useLocalState } from '../util/useLocalStorage'

import ShopWord from '../components/ShopWord'
import CategoriesCarousel from '../components/CategoriesCarousel'
import Featured from '../components/Featured'
import Navbar from '../components/Navbar'
import Sale from '../components/Sale'
import ShopFooter from '../components/ShopFooter'
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