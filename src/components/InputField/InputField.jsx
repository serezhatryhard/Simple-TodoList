import React from 'react'
import styles from './InputField.module.css'

const InputField = ({ title, text, handleTitle, handleInput, handleSubmit }) => {

    return (
        <label className={styles.label}>
            <input 
            type='text' value={title} onChange={e => handleTitle(e.target.value)} 
            className={styles.title} placeholder={`Название Todo`}
            />
            <input 
            type='text' value={text} onChange={e => handleInput(e.target.value)} 
            className={styles.text} placeholder={`Краткое описание Todo`}
            />
            <button onClick={() => handleSubmit()} className={styles.btn}>Добавить</button>
        </label>
    )
}

export default InputField