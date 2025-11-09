import React, { useState } from 'react'
import { AuthService } from '../api/AuthService';
import { Link, useNavigate } from 'react-router-dom';
import type { LoginRequest } from '../assets/types';

function LoginPage() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    console.log({
      username,
      password,
    });
  
  try {
      const credentials: LoginRequest = { username, password };
    await AuthService.login(credentials);
    if (!localStorage.getItem('name')) {
      localStorage.setItem('name', username);
    }
  navigate('/main/home')
    } catch (err: unknown) {
      console.error(err);
    }
  };

  return (
      <div className='flex items-center justify-center h-screen'>
      <div className="register-container border border-p750 rounded-3xl bg-white grid grid-cols-1 grid-rows-[1fr_2fr] w-1/3 h-2/3 gap-4 pt-24 pb-12 px-12 min-h-[600px] max-h-screen max-w-[550px]">
              <div className="flex flex-col items-start justify-start gap-1">
                  
              <h1 className='text-4xl font-bold font-jakarta '>Login </h1>
      <h2 className='text-2xl font-normal font-jakarta '>to get started</h2>
      </div>
          <form className="grid grid-cols-1 grid-rows-3 gap-4 mt-3 register-form" onSubmit={handleSubmit}>
        <input className='input-reg' type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input className='-mt-6 input-reg' type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className='w-full h-16 text-base text-white duration-200 rounded-xl bg-p750 hover:scale-105' type="submit">Continue</button>
      </form> 
      <p className='text-center font-jakarta'>New user?   <Link to="/register"><span className='font-semibold'>Register</span></Link></p>
      </div>
      </div>
    
  )
}

export default LoginPage