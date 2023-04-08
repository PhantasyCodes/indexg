import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Home from './routes/Home'
import Loader from './routes/Loader'
import Shop from './routes/Shop'
import Login from './routes/Login'
import Tournament from './routes/Tournament'

import './App.css'
import SignUp from './routes/SignUp'
import Admin from './routes/Admin'

function App() {
  const location = useLocation()
  return (
    <>
      <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<Loader />} />
          <Route path='/home' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/tournament/:tournamentId' element={<Tournament />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
