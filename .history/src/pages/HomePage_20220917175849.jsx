import React from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import useAuth from './../hooks/useAuth'

const HomePage = () => {
    const dispatch = useDispatch()

    return isAuth ? (
        <div>
            <h1>Welcome</h1>

            <button
            >            Log out from {email}</button>
        </div>
    ) : (
        <Navigate to='/login' />
    )
}

export default HomePage