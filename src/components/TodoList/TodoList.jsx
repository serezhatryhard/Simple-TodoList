import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem/TodoItem'

import styles from './TodoList.module.css'

const TodoList = () => {

    const todos = useSelector(state => state.todos.todos)

    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {
                    todos.map(
                        (todo, index) => 
                    <TodoItem {...todo} key={todo.id} index={index}/>
                )
                }
            </ul>
        </div>
    )
}

export default TodoList