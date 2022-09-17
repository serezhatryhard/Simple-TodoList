import React from 'react'
import { InputField } from '../components/InputField'


const TodoPage = () => {
  return (
    <div>
    <InputField text={text} handleSubmit={addTask} handleInput={setText} />
    <TodoList />
    </div>
  )
}

export default TodoPage