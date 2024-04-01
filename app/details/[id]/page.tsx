'use client';
import { CiShare2 } from "react-icons/ci";

// import Image from 'next/image';
// import image from '../../../public/images/image.png'

import { IoCheckmarkCircleOutline } from "react-icons/io5";
import About from '../../components/About'
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaGripfire } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { useParams } from 'next/navigation';
import { useQuery } from "@tanstack/react-query";


const fetchfunc = async (id) => {
    const result = await fetch(`http://localhost:5000/cards/${id}`);
    return result.json()
}

const info = [
  {
      title: "Posted On",
      date: "Jul 1, 2023",
      icon : <IoIosAddCircleOutline/>
  },
  {
      title: "Dead Line",
      date: "Jul 31, 2011",
      icon: <FaGripfire/>
  },
  {
      title: "Location",
      date: "Addis Ababa",
      icon: <FaLocationDot/>
  },
  {
      title: "Start Date",
      date: "Aug 02, 2023",
      icon: <MdOutlineDateRange/>
  },
  {
      title: "End Date",
      date: "Sep 02, 2023",
      icon: <MdOutlineDateRange/>
  }
]

const Page = () => {
    const { id } = useParams();
    const { data, isLoading, isFetching,isError, error } = useQuery({
        queryKey: ['card', id],
        queryFn: () => fetchfunc(id),
    });

    if (isLoading || isFetching) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error: {String(error)}</div>
    }

    return (
        <div>
        <div className='h-screen w-[80%] mx-auto py-6 space-y-4'>
            <div className='flex justify-between border-[1px]  border-[#c4c4c4] rounded-3xl p-3'>
                <div className='flex gap-x-6'>
                    <div className="">
                        {/* <Image src='../../../public/images/image.png' alt="imagehere" className=""/> */}
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-[900] text-[#25324B] text-[20px]'>{data.title}</h1>
                        <p className='text-[16px] text-[#7C8493]'>{data.subTitle}</p>
                    </div>
                </div>
                <div className='flex gap-x-4'>
                    <div className='mx-auto my-auto w-[30px] h-[30px]'><CiShare2 className='w-full h-full' /></div>
                    <div className="flex justify-center items-center"><div className="text-[#c0c0c0] h-9 bg-[#D6DDEB] w-[1.3px]"/></div>
                    <button className='text-white bg-[#322994] rounded-3xl px-10'>Apply</button>
                </div>
            </div>
            <div className='flex justify-between gap-x-10' >
                <div className='space-y-6'>
                    <div>
                        <h1 className='text-[20px] font-[900]'>Description</h1>
                        <p>{data.description}</p>
                    </div>
                    <div>
                        <h1 className='text-[20px] font-[900]'>Responsibilities</h1>
                        <div className='flex gap-x-2'>
                            <div className='flex justify-center items-center'><IoCheckmarkCircleOutline className='text-[#64fd39]'/></div>
                            <p>community engagement to ensure that is supported and actively represented online</p>
                        </div>
                        <div className='flex gap-x-2'>
                            <div className='flex justify-center items-center'><IoCheckmarkCircleOutline className='text-[#64fd39]'/></div>
                            <p>Focus on social media content development and publication</p>
                        </div>
                        <div className='flex gap-x-2'>
                            <div className='flex justify-center items-center'><IoCheckmarkCircleOutline className='text-[#64fd39]'/></div>
                            <p>Marketing and strategy support</p>
                        </div>
                        <div className='flex gap-x-2'>
                            <div className='flex justify-center items-center'><IoCheckmarkCircleOutline className='text-[#64fd39]'/></div>
                            <p>Stay on top of trends on social media platforms, and suggest content ideas to the team</p>
                        </div>
                        <div className='flex gap-x-2'>
                            <div className='flex justify-center items-center'><IoCheckmarkCircleOutline className='text-[#64fd39]'/></div>
                            <p>Engage with online communities</p>
                        </div>
                    </div>

                    <div>
                        <h1 className='font-[900] text-[20px]'>Ideal Candidate we want</h1>
                        <p><span className='text-[20px]'>.  </span>Young(18 - 24 years old) Female social media manager</p>
                        <p><span className='text-[20px]'>.  </span><span className='font-bold'>Passionate & Reliable</span>Genuine interest in our mission and a strong desire to make a positive impact, responsible. and commited to fulfilling volunteer commitments</p>
                        <p><span className='text-[20px]'>.  </span><span className='font-bold'>Adaptable, Team Player & Strong Communication Skills</span>Genuine interest in our mission and a strong desire to make a positive impact, responsible. and commited to fulfilling volunteer commitments</p>
                        <p><span className='text-[20px]'>.  </span><span className='font-bold'>Respectful</span>Genuine interest in our mission and a strong desire to make a positive impact, responsible. and commited to fulfilling volunteer commitments</p>
                    </div>
                </div>
                <div>
                    <h1 className='font-[900] text-[23px]'>About</h1>
                    <div>
                        {
                            info.map((item) => <About key={item.title} title={item.title} date={item.date} icon={item.icon}/>)
                        }
                    </div>
                    <div className='w-[300px] h-[1px] bg-[#e2e2e2] mx-auto my-4'/>
                    <div className='space-y-4 py-3'>
                        <h1 className='font-[900] text-[23px]'>Categories</h1>
                        <div className='flex gap-x-5 text-[14px]'>
                            <button className='rounded-3xl text-[#df9c43] font-bold bg-[#ede6dd] py-1 px-4' >Marketing</button>
                            <button className='rounded-3xl text-[#5cb52c] font-bold bg-[#d4f0cb] py-1 px-4' >Design</button>
                        </div>
                    </div>
                    <div className='w-[300px] h-[1px] bg-[#e2e2e2] mx-auto my-4'/>
                    <div>
                        <div className='space-y-4 py-3'>
                            <h1 className='font-[900] text-[23px]'>Required skills</h1>
                            <div className='flex gap-x-5 text-[14px]'>
                                <button className='text-[#2b38c6] font-bold bg-[#e7eaf5] px-3 py-1' >Social Media Marketing</button>
                                <button className='text-[#2b38c6] font-bold bg-[#e7eaf5] px-3 py-1' >English</button>
                            </div>
                            <button className='text-[14px] text-[#2b38c6] font-bold bg-[#e7eaf5] py-1 px-3' >English</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Page




