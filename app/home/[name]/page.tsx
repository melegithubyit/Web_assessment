'use client';
import Link from "next/link";
import NavManu from "../../components/Navmenu";
import { useParams } from "next/navigation";


export default function Home() {

  const {name} = useParams();
  return (
      <div>
        <NavManu name = {name} />
        <h1 className="text-center" >Home Page</h1>
        <div className="flex flex-col items-center">
          <Link href='/single_card'>To the Single card</Link>
          <Link href='/options' >To options of card</Link>
        </div>
      </div>
    
  
    );
}
