import React, { useState } from 'react'

import styles from './AuthForm.module.css'

const AuthForm = ({ title, handleClick }) => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')


    return (
        <label className={styles.label}>
            <input
                type='email' value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='Enter your email'
            />
            <input
                type='password' value={pass}
                onChange={e => setPass(e.target.value)}
                placeholder='Enter your password'

            />
            <button 
            onClick={() => handleClick(email, pass)}
            className={styles.btn}
            >
                {title}
            </button>
        </label>
    )
}

export default AuthForm