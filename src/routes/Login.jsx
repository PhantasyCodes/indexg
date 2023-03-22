import React, { useState } from 'react'
import { useLocalState } from '../util/useLocalStorage'

import logo from '../assets/logo.png'

import './Login.css'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [jwt, setJwt] = useLocalState("", "jwt")
  const [firstname, setFirstname] = useLocalState("", "name")
  const [pic, setPic] = useLocalState("", "pic")

  function sendLoginRequest() {
    const reqBody = {
      email: username,
      password: password
    }

    fetch("http://localhost:8080/api/v1/auth/authenticate", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(reqBody),
    })
      .then((response) => {
        if (response.status === 200)
          return Promise.all([response.json(), response.headers])
        else
          return Promise.reject("Invalid Login Details")
      })
      .then(([body, headers]) => {
        setJwt(body.token)
        setFirstname(body.firstname)
        setPic(body.profilepic)
        console.log(body.profilepic)
      }).catch((message) => {
        alert(message)
      })
  }

  return (
    <div className='login-page'>
        <div className="login-left">
          <div className="login-left-text">
            <h3>login</h3>
            <p>Be sure to check out the new events and merch that's come out. We have lots in store for you!</p>
          </div>
          <h4>No account yet?</h4>
          <div className="shop-link2">
            <h2>SIGN UP</h2>
          </div>
        </div>
        <div className="login-right">
          <img src={logo} alt="logo" />
          <h2>Hello! Welcome back</h2>
          <div className="login-form">
            <div className="login-email">
              <label htmlFor="username">Email</label>
              <input type="email" id='username' value={username} onChange={(event) => setUsername(event.target.value)} />
            </div>
            <div className="login-password">
              <label htmlFor="password">Password</label>
              <input type="password" id='password' value={password} onChange={(event) => setPassword(event.target.value)} />
            </div>
            <div className="login-button">
              <button id='submit' type='button' onClick={() => sendLoginRequest()}>SIGN IN</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login