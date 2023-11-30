// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/styles.css'; // Tailwind CSS
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/index' element={<Profile />}/>
      </Routes>
    </Router>
  );
}

export default App;