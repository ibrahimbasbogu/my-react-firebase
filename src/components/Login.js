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
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Giriş Yap</h2>
        <div className="mb-4">
          <input
            type="email"
            placeholder="E-posta"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Şifre"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
          Giriş Yap
        </button>
        <label className="mt-2 block text-gray-600">User Status = {userStatus}</label>
      </div>
    </div>
  );
};

export default Login;
