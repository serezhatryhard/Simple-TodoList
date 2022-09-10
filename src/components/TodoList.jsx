import React from 'react'
import { useSelector } from 'react-redux'
import { TodoItem } from './TodoItem'

export const TodoList = () => {

  const todos = useSelector(state => state.todos.todos)

  return (
    <div className='container'>
        <ul>
          {
            todos.map(
              (todo, index) =>
                <TodoItem {...todo} index={index} key={todo.id}/>
          )}
        </ul>
      </div>
  )
}


