import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { TodoList } from './components/TodoList';

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
      <InputField text={text} addTodo={addTodo} setText={setText}/>
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
    </div>
  );
}

export default App;
