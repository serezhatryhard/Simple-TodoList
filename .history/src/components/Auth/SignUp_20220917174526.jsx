import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React from 'react'
import { Form } from "./Form";
import { setUser } from './../../store/userSlice'

const SignUp = () => {

    const dispatch = useDispatch()

    const handleSignUp = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatchsetUser()
            })
            .then(console.error)
    }

    return (
        <Form
            title="Sign Up"
            handleClick={handleSignUp}
        />
    )
}

export { SignUp }