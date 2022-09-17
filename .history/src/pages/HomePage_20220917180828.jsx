import React from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import  useAuth  from './../hooks/useAuth'
import { removeUser } from '../store/userSlice'

const HomePage = () => {
    const dispatch = useDispatch()

    const {isAuth = useAuth()

    return useAuth ? (
        <div>
            <h1>Welcome</h1>

            <button
                onClick={dispatch(removeUser())}
            >Log out from {email}</button>
        </div>
    ) : (
        <Navigate to='/login' />
    )
}

export default HomePage