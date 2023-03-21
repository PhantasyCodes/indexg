import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Home from './routes/Home'
import Loader from './routes/Loader'
import Shop from './routes/Shop'
import Login from './routes/Login'

import './App.css'

function App() {
  const location = useLocation()
  return (
    <>
      <AnimatePresence wait>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<Loader />} />
          <Route path='/home' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
