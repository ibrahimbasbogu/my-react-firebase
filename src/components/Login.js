// src/components/LoginForm.js

import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCreadential) => {
            console.log(userCreadential);
        })
        .catch((error) => {
            console.log(error);
        })
  };

  return (
    <div>
      <input type="email" placeholder="E-posta" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Şifre" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Giriş Yap</button>
    </div>
  );
};

export default Login;
