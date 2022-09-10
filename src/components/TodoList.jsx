import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos, removeTodo, toggleTodo}) => {
  return (
    <div className='container'>
        <ul>
          {
            todos.map(
              (todo, index) =>
                <TodoItem todo={todo} index={index} removeTodo={removeTodo} toggleTodo={toggleTodo} key={todo.id}/>
          )}
        </ul>
      </div>
  )
}


