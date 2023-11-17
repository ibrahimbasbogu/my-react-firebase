// src/components/LoginForm.js

import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userStatus, setUserStatus] = useState('Logout');

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCreadential) => {
            setUserStatus('Giriş Yapıldı')
            console.log(userCreadential);
        })
        .catch((error) => {
            setUserStatus('Giriş Hatası')
            console.log(error);
        })
  };

  return (
    <div>
      <input type="email" placeholder="E-posta" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Şifre" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Giriş Yap</button>
      <label>User Status = {userStatus}</label>
    </div>
  );
};

export default Login;
