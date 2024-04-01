'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Signup: React.FC = () => {

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handlelogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const res  = await fetch('https://akil-backend.onrender.com/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    })

    if (res.ok) {
      const data = await res.json();
      const name = data.data.name;
      router.push(`./home/${name}`);
      
    }else{
      // const data = await res.json();
      alert('failed to login')
    }
  };

  return (
    <div className="flex justify-center items-center h-screen mx-auto rounded-2xl ">
      <div className="w-[30rem] space-y-3">
      <h2 className='text-center font-[900] text-[25px]'>welcome Back</h2>
      <div className="flex items-center px-12">
        <div className="flex-grow border-b-2 border-gray-300"></div>
        <div className="px-4 text-[#fff]">Or Sign Up with Email</div>
        <div className="flex-grow border-b-2 border-gray-300"></div>
      </div>
      <form onSubmit={handlelogin} className=' text-[#515B6F] w-[25rem] mx-auto flex flex-col items-center space-y-8'>
        <div className="flex flex-col items-start w-full px-4">
          <label htmlFor="email" className="font-bold">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter email address"
            className='border-[1px] border-[#bcbfc6] px-4 py-2 rounded-lg w-full'
          />
        </div>
        <div className="flex flex-col items-start w-full px-4">
          <label htmlFor="password" className="font-bold">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your Password"
            className='border-[1px] border-[#bcbfc6] px-4 py-2 rounded-lg w-full'
          />
        </div>
        <div className="py-4">
          <button type="submit" className='w-[25rem] bg-[#4640DE] text-white py-2 rounded-3xl'>Login</button>
        </div>
      </form>
      <p className='text-start pl-10 text-[#202430]'>Don't have an account?<span className='text-[#4640DE]'><Link href={'./'}>  Signup</Link></span></p>
      </div>
    </div>
  );
};

export default Signup;

