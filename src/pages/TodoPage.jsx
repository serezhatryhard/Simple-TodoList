import React from 'react'

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import InputField from '../components/InputField/InputField'
import TodoList from '../components/TodoList/TodoList'

import { addTodo } from './../store/todoSlice';

const TodoPage = () => {

    const [text, setText] = useState('')
    const [title, setTitle] = useState('')

    const dispatch = useDispatch()

    const addTask = () => {
        if (text.trim().length || title.trim().length) {
            dispatch(addTodo({ title, text }))
            setText('')
            setTitle('')
        }
    }

    return (
        <div>
            <InputField title={title} text={text} handleSubmit={addTask} handleInput={setText} handleTitle={setTitle} />
            <TodoList />
        </div>
    )
}

export default TodoPage