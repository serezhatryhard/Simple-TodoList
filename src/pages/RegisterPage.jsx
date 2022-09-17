import React from 'react'
import { NavLink } from 'react-router-dom'
import { SignUp } from '../components/Auth/SignUp'

const RegisterPage = () => {
  return (
    <div>
        <h1>Register Page</h1>
        <SignUp />
        <p>
            Or <NavLink to='/login'>Login</NavLink>
        </p>
    </div>
  )
}

export default RegisterPage