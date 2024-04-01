import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import Vector from '../public/Vector.png';

const Navbar = () => {
  return (
    <div className='row-span-1 p-3 shadow-lg'>
      <div className='flex justify-between items-center'>
        <div>
            <div>
                {/* <Image src={Vector} alt='' /> */}
            </div>
            <div>
                <p className='text-[2rem] font-[900]'>Hakim <span className='text-[#dc5e5e]' >Hub</span></p>
            </div>
        </div>
        <div className='flex justify-between gap-x-10 font-bold'>
            <Link href='' className='text-[1.2rem]'>Home</Link>
            <Link href='' className='text-[1.2rem]'>Hospitals</Link>
            <Link href='' className='text-[1.2rem]'>Doctors</Link>
        </div>
        <div className='flex justify-between items-center gap-x-4'>
            <div className='w-12 h-12 rounded-full text-center bg-slate-500 flex justify-center items-center'><span>K</span></div>
            <Link className='border-[1px] border-black rounded-3xl px-3 py-1' href=''>Logout</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
