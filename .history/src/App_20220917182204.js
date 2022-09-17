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
import TodoPage from './pages/TodoPage';


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
        <Route path='/todo' element={<TodoPage />} /
      </Routes>
    </div>
  );
}

export default App;
