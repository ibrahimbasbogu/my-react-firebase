// src/App.js

import React from 'react';
import LoginForm from './components/Login';
import './styles/styles.css'; // Tailwind CSS

function App() {
  return (
    <div className="App">
      <h1>React Firebase Auth</h1>
      <LoginForm />
    </div>
  );
}

export default App;