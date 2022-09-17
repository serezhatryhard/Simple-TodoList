import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React from 'react'
import { Form } from "./Form";
import { setUser } from './../../store/userSlice'

const SignUp = () => {

    const dispatch = useDispatch()
    const push = useNavigate()

    const handleSignUp = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }));
                push('/');
            })
            .catch(console.error)
    }

    return (
        <Form
            title="Sign Up"
            handleClick={handleSignUp}
        />
    )
}

export { SignUp }