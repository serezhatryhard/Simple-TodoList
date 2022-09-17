import React from 'react'
import { InputField } from '../components/InputField'
import { TodoList } from '../components/TodoList'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const TodoPage = () => {

    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const addTask = () => {
        if (text.trim().length) {
            dispatch(addTodo({ text }))
            setText('')
        }
    }

    return (
        <div>
            <InputField text={text} handleSubmit={addTask} handleInput={setText} />
            <TodoList />
        </div>
    )
}

export default TodoPage