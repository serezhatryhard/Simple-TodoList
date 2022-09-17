import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { Form } from './Form'

const Login = () => {

    const dispatch = useDispatch()
    const push = useNavigate()


    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}))
            .catch(console.error)
    }

    return (
        <Form
            title = 'Sign in'
            handleClick={handleLogin}
        />
    )
}

export { Login }