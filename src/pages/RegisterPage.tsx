import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthService } from '../api/AuthService';
import type { RegisterRequest } from '../assets/types';

function RegisterPage() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({
  username: false,
  password: false,
  repeatPassword: false,
});

  const navigate = useNavigate();
  
const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault(); 
    console.log({
      username,
      password,
      confirmPassword,
    });
      const newErrors = { username: false, password: false, repeatPassword: false };
  let hasError = false;

  if (!username) {
    newErrors.username = true;
    hasError = true;
  }

  if (!password) {
    newErrors.password = true;
    hasError = true;
  }

  if (password !== confirmPassword) {
    newErrors.password = true;
    newErrors.repeatPassword = true;
    hasError = true;
  }

  setErrors(newErrors);

  console.log(hasError)
  if (hasError) return;

  try {
      const register: RegisterRequest = {username,password}
      AuthService.register(register)
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      navigate("/login");
    } catch (err: unknown) {
      console.log(err);
    }
  };


  return (
      <div className='flex items-center justify-center h-screen'>
      <div className="register-container border border-p750 rounded-3xl bg-white grid grid-cols-1 grid-rows-[1fr_2fr] w-1/3 h-2/3 gap-4 pt-24 pb-12 px-12 min-h-[600px] max-h-screen max-w-[550px]">
              <div className="flex flex-col items-start justify-start gap-1">
                  
              <h1 className='text-4xl font-bold font-jakarta '>Signup</h1>
      <h2 className='text-2xl font-normal font-jakarta '>to get started</h2>
      </div>
          <form className="grid grid-cols-1 grid-rows-3 gap-4 mt-3 register-form" onSubmit={handleSubmit}>
        <input   className={`input-reg  ${errors.username ? "!border-s500 !border-2" : "!border-gray-300"}`} type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input   className={`input-reg  ${errors.password ? "!border-s500 !border-2" : "!border-gray-300"}`} type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input className={`input-reg  ${errors.repeatPassword ? "!border-s500 !border-2" : "!border-gray-300"}`}
 type="password" placeholder=" Repeat Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        <button className='w-full h-16 text-base text-white duration-200 rounded-xl bg-p750 hover:scale-105' type="submit">Continue</button>
      </form> 
      <p className='text-center font-jakarta'>Already registered?   <Link to="/login"><span className='font-semibold'>Login</span></Link></p>
      </div>
      </div>
    
  )
}

export default RegisterPage