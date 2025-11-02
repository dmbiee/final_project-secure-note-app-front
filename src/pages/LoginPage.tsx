import React, { useState } from 'react'
import { login, type LoginRequest } from '../api/AuthService';
import { Link, useNavigate } from 'react-router-dom';

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
      await login(credentials);
      navigate('/home')
    } catch (err: unknown) {
      console.error(err);
    }
  };

  return (
      <div className='h-screen flex items-center justify-center'>
      <div className="register-container border border-p750 rounded-3xl bg-white grid grid-cols-1 grid-rows-[1fr_2fr] w-1/3 h-2/3 gap-4 pt-24 pb-12 px-12 min-h-[600px] max-h-screen max-w-[550px]">
              <div className="flex justify-start items-start gap-1 flex-col">
                  
              <h1 className='font-jakarta text-4xl font-bold '>Login </h1>
      <h2 className='font-jakarta text-2xl font-normal '>to get started</h2>
      </div>
          <form className="register-form mt-3 grid grid-cols-1 grid-rows-3 gap-4" onSubmit={handleSubmit}>
        <input className='input-reg' type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input className='input-reg -mt-6' type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className='w-full h-16 rounded-xl bg-p750 text-white text-base hover:scale-105 duration-200' type="submit">Continue</button>
      </form> 
      <p className='text-center font-jakarta'>New user?   <Link to="/register"><span className='font-semibold'>Register</span></Link></p>
      </div>
      </div>
    
  )
}

export default LoginPage