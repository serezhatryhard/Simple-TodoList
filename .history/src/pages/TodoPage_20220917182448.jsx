import React from 'react'
import { InputField } from '../components/InputField'
import { TodoList } from '../components/TodoList'


const TodoPage = ({addTask, setText}) => {

    

  return (
    <div>
        <InputField text={text} handleSubmit={addTask} handleInput={setText} />
        <TodoList />
    </div>
  )
}

export default TodoPage