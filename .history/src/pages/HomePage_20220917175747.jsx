import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from './../hooks/useAuth'

const HomePage = () => {
    return isAuth ? (
        <div>
            <h1>Welcome</h1>
        </div>
    ) : (
        <Navigate to='/login' />

    )
}

export default HomePage