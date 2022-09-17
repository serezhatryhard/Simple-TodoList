import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom'

import { addTodo } from './store/todoSlice';
import { InputField } from './components/InputField';
import { TodoList } from './components/TodoList';

import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';


function App() {

  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const addTask = () => {
    if (text.trim().length) {
      dispatch(addTodo({ text }))
      setText('')
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
      <InputField text={text} handleSubmit={addTask} handleInput={setText} />
      <TodoList />
    </div>
  );
}

export default App;
