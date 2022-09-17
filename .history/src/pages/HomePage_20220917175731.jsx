import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from './../hooks/useAuth'

const HomePage = () => {
    return isAuth ? (
        <div>
            <h1></h1>
            <Navigate to='/login' />
        </div>
    )
}

export default HomePage