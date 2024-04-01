import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from 'next/navigation';


const Home = async () => {
  // const session = await getServerSession();
  // if ( !session || !session.user ){
  //   redirect("/api/auth/signin")
  // }
  return (
      <div>
        <h1 className="text-center text-[40px] font-bold py-4" >Home Page</h1>
        <div className="flex flex-col items-center text-[#ff4c4c]">
          <Link href='/single_card' className="hover:underline">To the Single card</Link>
          <Link href='/options' className="hover:underline" >To options of card</Link>
        </div>
      </div>
    );
}

export default Home;