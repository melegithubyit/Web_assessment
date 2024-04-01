'use client';
import React from 'react';
import Image from 'next/image';
// import pic from '../../public/images/pic.png';

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
}

const Card = ({ title, subtitle, description } : CardProps) => {
  return (
    <div className='cursor-pointer' >
      <div className="flex justify-center items-center w-full">
        <div className="flex w-[800px] p-5 bg-white rounded-3xl border-2 border-[#e0dddd]">
          <div className="w-60 h-60 rounded-full">
            {/* <Image src={pic || ""} alt="imagehere" className="w-fit h-fit"/> */}
          </div>
          <div className="space-y-2">
            <h2 className="text-[#25324B] text-[20px] font-[600]">{title}</h2>
            <p className="text-[16px] text-[#7C8493]">{subtitle}</p>
            <p className="text-[16px] text-[#25324B]">{description}</p>
            <div className="flex gap-x-4">
              <button className="text-[#56CDAD] p-2 rounded-3xl bg-[#e4fef7]">In Person</button>
              <div className="flex justify-center items-center"><div className="text-[#c0c0c0] h-9 bg-[#D6DDEB] w-[1.3px]"/></div>
              <button className="text-[#FFB836] p-2 rounded-3xl border-[1px] border-[#FFB836]">Education</button>
              <button className="text-[#4640DE] py-2 px-6 rounded-3xl border-[1px] border-[#4640DE]">IT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

