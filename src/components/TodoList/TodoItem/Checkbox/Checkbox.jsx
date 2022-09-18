import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { toggleTodo } from '../../../../store/todoSlice'

import styles from './Checkbox.module.css'

const Checkbox = ({id, completed}) => {

    const dispatch = useDispatch()

    return (
        <div className={styles.checkbox__wrapper}>
            <label>
                <input 
                    type='checkbox' checked={completed} className={styles.checkbox}
                    onChange={() => dispatch(toggleTodo({id}))}
                    />
            </label>
        </div>
  )
}

export default Checkbox