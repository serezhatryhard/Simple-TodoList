import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import AuthForm from './AuthForm'
import { setUser } from '../../store/userSlice'


const Register = () => {

    const dispatch = useDispatch()
    const push = useNavigate()

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }))
                push('/')
            })
            .catch(() => {console.error})
    }

    return (
        <AuthForm 
            title='Sign Up'
            handleClick={handleRegister}
        />
    )
}

export default Register