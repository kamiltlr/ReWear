import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../components/home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/login">Zaloguj się</Link></li>
          <li><Link to="/register">Zarejestruj się</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
