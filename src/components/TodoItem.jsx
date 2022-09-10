import React from 'react'

export const TodoItem = ({todo, index, removeTodo, toggleTodo}) => {
    return (
        <li>
            <p>
                <strong>{index + 1}.</strong>
                <input type='checkbox' onChange={() => toggleTodo(todo.id)} />
                <span>{todo.text}</span>
            </p>
            <span className='delete' onClick={() => removeTodo(todo.id)}>&times;</span>
        </li>
    )
}

