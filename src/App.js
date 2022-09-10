import { useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([])

  const [text, setText] = useState('')

  const addTodo = () => {
    if (text.length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false
        }
      ])
      setText('')
    }
  }

  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

  const toggleTodo = (todoId) => {
    setTodos(
      todos.map(todo => {
        if (todo.id !== todoId) return todo

        return {
          ...todo,
          completed: !todo.completed
        }
      })

    )
  }
  return (
    <div className="App">
      <label className='add-todo'>
        <input value={text} onChange={e => setText(e.target.value)} className='input' />
        <button onClick={addTodo} className='btn'>Add Todo</button>
      </label>

      <div className='container'>
        <ul>
          {
            todos.map(
              (todo, index) =>
                <li key={todo.id}>
                  <p>
                    <strong>{index + 1}.</strong>
                    <input type='checkbox' onChange={() => toggleTodo(todo.id)} />
                    <span>{todo.text}</span>
                  </p>
                  <span className='delete' onClick={() => removeTodo(todo.id)}>&times;</span>
                </li>)
          }
        </ul>
      </div>

    </div>
  );
}

export default App;
