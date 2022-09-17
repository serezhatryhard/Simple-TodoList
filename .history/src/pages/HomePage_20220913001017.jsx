import React from 'react'
import { Navigate } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            HomePage
            <Navigate to='/login' />
        </div>
    )
}

export default HomePage