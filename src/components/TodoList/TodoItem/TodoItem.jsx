import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodo } from '../../../store/todoSlice'
import Checkbox from './Checkbox/Checkbox'

import trashImage from './img/trash.svg'

import styles from './TodoItem.module.css'

const TodoItem = ({ id, title, text, completed, index }) => {

    const dispatch = useDispatch()

    return (
        <li className={styles.item}>
            <div className={styles.content}>
                <strong className={styles.index}>{index + 1}.</strong>
                <Checkbox id={id} completed={completed}/>
                <div className={styles.description}>
                    <h3 className={completed ? styles.title__checked : styles.title}>{title ? title : `Todo without title`}</h3>
                    <hr className={styles.line}/>
                    <span className={completed ? styles.text__checked : styles.text}>{text ? text : `Todo without text`}</span>
                </div>
            </div>
            <div className={styles.delete} onClick={() => dispatch(removeTodo({id}))}><img src={trashImage} /></div>
        </li>
    )
}

export default TodoItem