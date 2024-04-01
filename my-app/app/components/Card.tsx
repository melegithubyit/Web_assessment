import Image from "next/image"
import Link from "next/link"
import { MdOutlineLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";


const Card = ({ photo, institutionName, phoneNumbers, status, address }) => {

    const phone = phoneNumbers[0];
    const region = address.region;
    const summary = address.summary;
    
    
    return (
    <div className="w-[1000px] h-[200px] rounded-3xl mb-[20px] shadow-3xl border-[0.5px] border-black">
        <div className="grid grid-cols-5 rounded-md shadow-inner">
            <div className="col-span-1">
                {/* <Image src={photo} alt="photo" width={20} height={20}/> */}
            </div>
            <div className="p-4 col-span-4">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-y-1">
                        <div>{summary}, {region}</div>
                        <h1 className="font-bold text-[1.3rem]">{institutionName}</h1>
                        <div className="flex justify-between items-center w-fit gap-x-1">
                            <MdOutlineLocationOn size={20} />
                            <p>3 kilometers away</p>
                        </div>
                    </div>
                    {
                        status === 'Open' ? <Link href='' className="bg-[#B8FFB7] text-[#54B752] px-4 py-2 rounded-3xl focus-within:bg-[#4a9849] focus-within:text-[#fff]">Open Now</Link>
                        : <Link href='' className="bg-[#FFB7B7] text-[#DC5E5E] px-4 py-2 rounded-3xl focus-within:bg-[#dc5e5e] focus-within:text-[#fff]">Closed now</Link>
                    }
                </div>
                <div className="flex justify-between py-10">
                    <div className="flex justify-between items-center gap-x-4">
                        <FaPhoneAlt size={18}/>
                        <div className="flex flex-col">
                            <p>+{phone}</p>
                            <p>+{phone}</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-x-4">
                        <IoMail size={18} />
                        <p>info@stpaul.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
