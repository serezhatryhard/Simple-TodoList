import React from 'react'



const TodoPage = () => {
  return (
    <div>
    <InputField text={text} handleSubmit={addTask} handleInput={setText} />
    <TodoList />
    </div>
  )
}

export default TodoPage