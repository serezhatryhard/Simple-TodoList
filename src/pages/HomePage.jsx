import React from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { removeUser } from '../store/userSlice'

const HomePage = () => {

  const dispatch = useDispatch()
  const { isAuth, email } = useAuth()

  if (!isAuth) {
    return (
      <Navigate to='/login' />
    )
  } else {
    return (
      <div>
        <h1>Welcome</h1>
        <button
          onClick={() => dispatch(removeUser())}
        >Log out from {email}</button>
      </div>
    )
  }
}

export default HomePage