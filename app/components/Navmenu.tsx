'use client';
// import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

function AuthButton({ name }) {
  const { data: session } = useSession();

  const buttonProp = "bg-orange-500 text-white rounded-lg px-4 py-2 hover:bg-orange-600 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50";
  const buttonProp2 = "bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50";
    const router = useRouter();
    const handleSignin = async () => {
        router.push('/api/auth/signin')
    }


  if (session) {
    return (
        <div>
            <div className="flex justify-end p-6 items-center">
                <button onClick={() => signOut()} className={`${buttonProp}`} >Sign out</button>
            </div>
            <div className="font-[900] text-center py-8 text-[30px]">
                {/* Welcome, {session?.user?.name || name} */}
                Welcome, {name}
            </div>
        </div>
    );
  }

  return (
  <div className="flex justify-end p-6 items-center gap-x-2">
    <p className="animate-zoom">Not signed in</p>
    <br/>
    <button onClick={handleSignin} className={`${buttonProp2}`}>Sign in</button> 
  </div>
  );
}

export default function NavManu({name}) {
    return(
        <div className="">
            <AuthButton name={name} />
        </div>
    )
}