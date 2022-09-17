import React from 'react'
import { NavLink } from 'react-router-dom'
import { Login } from '../components/Auth/Login'

const LoginPage = () => {
  return (
    <div>
        <h1>Login Page</h1>
        <Login />
        <p>
            or <NavLink to='/register'>Register</NavLink>
        </p>
    </div>
  )
}

export default LoginPage