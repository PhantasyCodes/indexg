import React, { useEffect, useState } from 'react'
import { useLocalState } from '../util/useLocalStorage'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import logo from '../assets/logo.png'

import './Login.css'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [jwt, setJwt] = useLocalState("", "jwt")
  const [firstname, setFirstname] = useLocalState("", "name")
  const [pic, setPic] = useLocalState("", "pic")
  const navigateTo = useNavigate();


  function sendLoginRequest() {
    const reqBody = {
      email: username,
      password: password
    }

    let loggedIn = false;

    fetch("http://localhost:8080/api/v1/auth/authenticate", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(reqBody),
      responseType: 'arraybuffer',
    })
      .then((response) => {
        if (response.status === 200) {
          loggedIn = true;
          console.log(loggedIn)
          return Promise.all([response.json(), response.headers])
        }
        else
          return Promise.reject("Invalid Login Details")
      })
      .then((data) => {
        setFirstname(data[0].firstname)
        const holder = data[0].profilePic
        setPic(`data:image/png;base64,${holder}`)
        setJwt(data[0].token)
      })
      .then(() => {
        if(loggedIn)
          navigateTo(`/home`)
      })
      .catch((message) => {
        alert(message)
      })
  }

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity:1, transition: {duration: 0.3}}} exit={{opacity: 0, transition: {duration: 0.3}}} className='login-page'>
        <motion.div className="login-left">
          <div className="login-left-text">
            <h3>login</h3>
            <p>Be sure to check out the new events and merch that's come out. We have lots in store for you!</p>
          </div>
          <h4>No account yet?</h4>
          <Link to={`/sign-up`}>
            <div className="shop-link2">
                <h2>SIGN UP</h2>
            </div>
          </Link>
        </motion.div>
        <div className="login-right">
          <img src={logo} alt="logo" />
          <h2>Hello! Welcome back</h2>
          <div className="login-form">
            <div>
              <label htmlFor="username">Email</label>
              <input type="email" id='username' value={username} onChange={(event) => setUsername(event.target.value)} />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id='password' value={password} onChange={(event) => setPassword(event.target.value)} />
            </div>
            <div className="login-button">
              <button id='submit' type='button' onClick={() => sendLoginRequest()}>LOG IN</button>
            </div>
          </div>
        </div>
    </motion.div>
  )
}

export default Login