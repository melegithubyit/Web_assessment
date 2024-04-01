'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Countdown from '../components/Countdown';



// const myState = history.state;

const VerifyPage: React.FC = () => {

    const router = useRouter();
    const [myEmail, setemail] = useState('')
    const [routeState, setRouteState] = useState(history.state);
    const [otp, setOtp] = useState(['', '', '', '']); 
    
    useEffect(() => {
        setemail(routeState.email);
    }, [routeState.email]); 
    

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = event.target;
        const updatedOtp = [...otp];
        updatedOtp[index] = value;
        setOtp(updatedOtp);
    };



    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const res  = await fetch('https://akil-backend.onrender.com/verify-email', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email:myEmail, OTP: otp.join('')})
          })
      
          if (res.ok) {
            const data = await res.json();
            router.push('/login')
          }else{
            alert('failed verification')
          }
        };


    return (
        <div className='flex justify-center items-center h-screen shadow-2xl'>
            <div className='w-[25rem] space-y-8'>
            <h1 className='font-[800] text-center text-[30px]'>Verify Email</h1>
            <p className='text-[#7C8493]'>We've sent a verification code to the email address you provided. To complete the verification process, please enter the code here.</p>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div className='flex justify-between'>
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            name={`otp-${index}`}
                            value={digit}
                            onChange={(e) => handleInputChange(e, index)}
                            maxLength={1}
                            required
                            className='text-center border-2 mr-4 w-14 h-14 border-[#c5c4c4] rounded-2xl'
                        />
                    ))}
                </div>
                <p className='text-center'>you can request to <Link href="" className='text-[#4640DE]'>Resend code</Link> in <span className='text-[#4640DE]'><Countdown/></span> </p>
                <button type="submit" className='bg-[#4646DE] text-white w-full py-2 rounded-2xl'>Continue</button>
            </form>
            </div>
        </div>
    );
};

export default VerifyPage;