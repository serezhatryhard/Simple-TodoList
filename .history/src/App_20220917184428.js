import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TodoPage from './pages/TodoPage';

import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/todo' element={<TodoPage />} />
      </Routes>
    </div>
  );
}

export default App;
