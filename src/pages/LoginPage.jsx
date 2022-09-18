import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from '../components/AuthForm/Login'
import Register from '../components/AuthForm/Register'

const LoginPage = () => {


    return (
        <div>
            <Login />

            or <NavLink to='/register'>Sign Up</NavLink>
        </div>
    )
}

export default LoginPage