import googleLogo from '../assets/img/google.png';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client'
import { user } from '../query'
import { signInWithEmailPassword } from '../config/firestore'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'


export default function Login() {
  const history = useHistory()
  const [loginUser] = useMutation(user.LOGIN_USER, { errorPolicy: 'all'})
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })
  const changeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value

    setLoginData({
      ...loginData,
      [name]: value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    loginUser({
      variables: loginData
    })
    .then( res => {
      console.log(res, 'respsonse')
      if (res.data.loginUser) {
        signInWithEmailPassword(loginData.email, loginData.password)
        localStorage.setItem('token', res.data.loginUser.token)
        history.push('/')
      }else if( res.errors ){
        throw res.errors[0]
      }
    })
    .catch( err => console.log(err, 'err'))
  }


  const backgroundImage =
    'https://cdn.discordapp.com/attachments/801791591927775257/802068635224768572/artwork_8.png';
  return (
    <div className="w-full h-screen flex bg-gray-200">
      <div className="bg-white flex flex-col justify-center items-center w-6/12 shadow-lg">
        <div className="w-3/4 text-left">
          <span>Welcome Back!</span>
          <h1 class="text-3xl font-bold text-orange-500 mb-2 font-custom">
            Masuk ke Akun Kamu
          </h1>
        </div>
        <div class="w-3/4 text-center">
          <div className="w-full text-left">
            <label htmlFor="email">Email</label>
          </div>
          <input
            type="email"
            name="email"
            placeholder="email"
            autocomplete="off"
            class="shadow-md border w-full h-12 px-3 py-2 rounded-md"
            value={loginData.email}
            onChange={(e) => changeHandler(e)}
          />
          <div className="w-full text-left">
            <label htmlFor="password">Password</label>
          </div>
          <input
            type="password"
            name="password"
            placeholder="password"
            autocomplete="off"
            class="shadow-md border w-full h-12 px-3 py-2 rounded-md"
            value={loginData.password}
            onChange={(e) => changeHandler(e)}
          />
          <div className="mt-8 flex flex-col gap-3">
            <button
              onClick={(e) => submitHandler(e)} 
              class="bg-green-600 w-full py-2 font-custom hover:bg-orange-600 text-white px-3  rounded text-lg focus:outline-none shadow">
              Login Now
            </button>
            <button class="flex flex-row gap-3 py-2 justify-center bg-gray-900 w-full font-custom hover:bg-orange-600 text-white px-3 rounded text-lg focus:outline-none shadow">
              <img src={googleLogo} className="w-6 h-6" alt="google logo"/>
              or Sign In with Google
            </button>
            <Link to="/register" className="w-full text-left">
              <span>
                Belum punya akun? <b>Register Gratis!</b>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <img
        src={backgroundImage}
        alt="background"
        className="object-cover object-center h-screen w-6/12"
      />
    </div>
  );
}
