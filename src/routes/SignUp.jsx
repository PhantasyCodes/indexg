import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'
import ImageUploadForm from '../components/ImageUploadForm'


import './Login.css'

const SignUp = () => {
    const [firstName, setFirstname] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [profilePic, setProfilePic] = useState("")

    function sendSignupRequest() {
        const reqBody = {
            firstname: firstName,
            lastName: lastName,
            email: username,
            password: password,
            profilePic: profilePic
        }
    }

    const handleImageUpload = (childState) => {
        const file = new File([childState], 'my-image.png', {type: 'image/png'})
        setProfilePic(file.name);
        console.log(file.name)
    }

    return (
        <div className='login-page'>
            <div className="login-left">
                <div className="login-left-text">
                    <h3>sign up</h3>
                    <p>Be sure to check out the new events and merch that's come out. We have lots in store for you!</p>
                </div>
                <h4>Already have an account?</h4>
                <Link to={`/login`}>
                    <div className="shop-link2">
                        <h2>LOG IN</h2>
                    </div>
                </Link>
            </div>
            <div className="login-right">
                <img src={logo} alt="logo" />
                <h2>Hello! Nice to meet you</h2>
                <div className="login-form">
                    <div>
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id='first-name' value={firstName} onChange={(event) => setFirstname(event.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="second-name">Last Name</label>
                        <input type="text" id='second-name' value={lastName} onChange={(event) => setLastName(event.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="username">Email</label>
                        <input type="email" id='username' value={username} onChange={(event) => setUsername(event.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>
                <div className="login-button">
                    <button id='submit' type='button' onClick={() => sendSignupRequest()}>SIGN UP</button>
                </div>
                </div>
            </div>
            <div className="profile-pic-upload">
                <ImageUploadForm onChildStateChange={handleImageUpload} />
            </div>
        </div>
    )
}

export default SignUp