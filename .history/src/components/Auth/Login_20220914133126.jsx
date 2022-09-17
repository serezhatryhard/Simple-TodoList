import React from 'react'
import { useDispatch } from 'react-redux'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { Form } from './Form'

const Login = () => {

    const dispatch = useDispatch()

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(console.log)
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