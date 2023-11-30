// src/components/LoginForm.js

import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, googleProvider, analytics } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { setUserId } from 'firebase/analytics';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCreadential) => {
          console.log('user data', userCreadential)
          setUserId(analytics, userCreadential.user.uid)
            navigate('/index')
        })
        .catch((error) => {
            console.log(error);
        })
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log('Google ile giriş yapıldı:', user);
    } catch (error) {
      console.error('Google ile giriş hatası:', error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log('Kullanıcı çıkış yaptı.');
    } catch (error) {
      console.error('Çıkış yaparken hata oluştu:', error.message);
    }
  };

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Kullanıcı başarıyla kaydedildi.');
    } catch (error) {
      console.error('Kayıt işlemi sırasında hata oluştu:', error.message);
    }
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
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Şifre"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className='mb-4 grid grid-cols-2 gap-4'>
        <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-700">
          Giriş Yap
        </button>
        <button onClick={handleRegister} className="bg-green-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-green-700">
          Kayıt Ol
        </button>
      </div>
      <div className='mb-4 grid grid-cols-1 gap-4'>
      <button onClick={handleGoogleLogin} className="bg-green-500 text-blue px-4 py-2 rounded focus:outline-none hover:bg-blue-700">
        Google ile Giriş Yap
      </button>
      </div>
    </div>
    <div className="ml-4">
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-red-700">
        Çıkış Yap
      </button>
    </div>
  </div>
  
  );
};

export default Login;
