import React from 'react'
import { removeTodo, toggleTodo } from '../store/todoSlice'
import { useDispatch } from 'react-redux'


export const TodoItem = ({id, text, index, completed}) => {

    const dispatch = useDispatch()

    return (
        <li>
            <p>
                <strong>{index + 1}.</strong>
                <input type='checkbox' checked={completed} onChange={() => dispatch(toggleTodo({id}))} />
                <span>{text}</span>
            </p>
            <span className='delete' onClick={() => dispatch(removeTodo({id}))}>&times;</span>
        </li>
    )
}

