'use client'

import { FcGoogle } from "react-icons/fc";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';
import { getServerSession } from "next-auth";



const Signup: React.FC = () => {

  const router = useRouter();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setname] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setrole] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const signupFunc = async () => {
      router.push('/api/auth/signin')
      const session = await getServerSession();
      if ( !session || !session.user ){
        redirect("/api/auth/signin")
      }
      else{
        redirect('/home')
      }
  }


  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const res  = await fetch('https://akil-backend.onrender.com/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password, name, role})
    })

    if (res.ok) {
      const data = await res.json();
      history.pushState({email:email}, '', '/verify');
      router.push("/verify")
      
    }else{
      // const data = await res.json();
      alert('failed to signup')
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(e.target.value === password);
  };

  return (
    <div className="flex justify-center items-center h-screen mx-auto rounded-2xl ">
      <div className="w-[30rem] shadow-2xl space-y-3">
      
      <h2 className='text-center py-4 font-[900] text-[25px]'>Sign Up Today!</h2>
      
      <div onClick={signupFunc} className='flex gap-x-2 items-center border-[1px] border-[#c2c0ff] w-fit mx-auto px-20 py-2 rounded-lg cursor-pointer hover:scale-105 duration-150'>
        <FcGoogle/>
        <p className="text-[#4640DE]">Sign in with Google</p>
      </div>
      
      
      <div className="flex items-center px-12">
        <div className="flex-grow border-b-2 border-gray-300"></div>
        <div className="px-4 text-[#bcbcbc]">Or Sign Up with Email</div>
        <div className="flex-grow border-b-2 border-gray-300"></div>
      </div>
      
      <form onSubmit={handleSignUp} className=' text-[#515B6F] w-[25rem] mx-auto space-y-2 flex flex-col items-center'>
      
        <div className="flex flex-col items-start w-full px-4">
          <label htmlFor="email" className="font-bold">Full Name</label>
          <input
            type="text"
            id="username"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
            placeholder="Enter your full name"
            className='border-[1px] border-[#bcbfc6] px-4 py-2 rounded-lg w-full'
          />
        </div>
        
        <div className="flex flex-col items-start w-full px-4">
          <label htmlFor="email" className="font-bold">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your Email"
            className='border-[1px] border-[#bcbfc6] px-4 py-2 rounded-lg w-full'
          />
        </div>
        
        <div className="flex flex-col items-start w-full px-4">
          <label htmlFor="role" className="font-bold">Role</label>
          <input
            type="text"
            id="role"
            value={role}
            onChange={(e) => setrole(e.target.value)}
            required
            placeholder="Enter your Role"
            className='border-[1px] border-[#bcbfc6] px-4 py-2 rounded-lg w-full'
          />
        </div>
        
        <div className="flex flex-col items-start w-full px-4">
          <label htmlFor="password" className="font-bold">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            placeholder="Enter your Password"
            className='border-[1px] border-[#bcbfc6] px-4 py-2 rounded-lg w-full'
          />
        </div>

        <div className="flex flex-col items-start w-full px-4">
          <label htmlFor="password" className="font-bold">Confirm Password</label>
          <input
            type="password"
            id="confirm password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
            placeholder="Enter your Password again"
            className='border-[1px] border-[#bcbfc6] px-4 py-2 rounded-lg w-full'
          />
        </div>
        {!passwordMatch && <p className="text-[#ff2929] text-start">Passwords do not match!</p>}
        
        <div className="py-4">
          <button type="submit" className='w-[25rem] bg-[#4640DE] text-white py-2 rounded-3xl'>Continue</button>
        </div>
      
      </form>
      
      <p className='text-start pl-4'>Already have an account?<span className='text-[#4640DE]'><Link href={'./login'}> Login</Link></span></p>
      <p className="text-start pl-4 pb-2 text-[#515B6F]">By clicking Continue, you acknowledge that you have read and accepted our <span className="text-[#4640DE]">Terms of Service</span> and <span className="text-[#4640DE]">Privacy Policy</span>.</p>
      
      </div>
    </div>
  );
};

export default Signup;

