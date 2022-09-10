import React from 'react'

const InputField = ({text, addTodo, setText}) => {
  return (
    <label className='add-todo'>
        <input value={text} onChange={e => setText(e.target.value)} className='input' />
        <button onClick={addTodo} className='btn'>Add Todo</button>
      </label>
  )
}

export default InputField
