import React from 'react'

export const InputField = ({text, handleSubmit, handleInput}) => {
  return (
    <label className='add-todo'>
        <input value={text} onChange={e => handleInput(e.target.value)} className='input' />
        <button onClick={handleSubmit} className='btn'>Add Todo</button>
      </label>
  )
}


