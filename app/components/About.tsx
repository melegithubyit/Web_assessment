import React from 'react';
import Image from 'next/image';


const About = ({ title, date, icon }) => {
  return (
    <div>
      <div className='flex gap-x-4 my-2'>
        <div className='text-[#6464e9] flex my-auto '>
          {icon}
        </div>
        <div>
            <p className='text-[#9b9b9b]'>{title}</p>
            <p className='font-bold'>{date}</p>
        </div>
      </div>
    </div>
  )
}

export default About
