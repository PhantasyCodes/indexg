import React from 'react'

import logo from '../assets/logo.png'

import './Login.css'

const Login = () => {
  function sendLoginRequest() {
    console.log("Nice it")
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
              <input type="email" id='username' />
            </div>
            <div className="login-password">
              <label htmlFor="password">Password</label>
              <input type="password" id='password' />
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