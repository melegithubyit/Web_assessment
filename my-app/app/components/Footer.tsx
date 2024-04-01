import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-[#7893F1] text-[#fff]'>
        <div>
            <div className='flex justify-between px-[80px] py-[30px]'>
                <h1 className='text-[30px] font-bold'>HakimHub</h1>
                <div className='flex justify-between gap-x-12'>
                    <div className='space-y-2'>
                        <p className='font-bold'>Get Connected</p>
                        <p>For Physicians</p>
                        <p>For Hospitals</p>
                    </div>
                    <div className='space-y-2'>
                        <p className='font-bold'>Actions</p>
                        <p>find a doctor</p>
                        <p>find a hospital</p>
                    </div>
                    <div className='space-y-2'>
                        <p className='font-bold'>Company</p>
                        <p>About us</p>
                        <p>Career</p>
                        <p>Join out team</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className='flex justify-between py-6 px-[80px]'>
                <div className='flex justify-between gap-x-20'>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                </div>
                <div className='flex justify-between gap-x-20'>
                    <FaFacebookF/>
                    <FaLinkedinIn/>
                    <FaInstagram/>
                    <FaTwitter/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
