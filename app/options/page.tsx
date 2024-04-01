'use client';
import { useQuery } from "@tanstack/react-query";
import Card from "../components/Card";
import { useRouter } from 'next/navigation';


const fetchTodo = async () => {
    const response = await fetch('http://localhost:5000/cards')
    return response.json()
}


const QueryFunction = () => {

    const router = useRouter();
    const {isLoading, isError, error, isFetching, data} = useQuery({
      queryKey: ['cards'],
      queryFn: fetchTodo,
    })

    if(isLoading || isFetching) {
      return <div>Loading...</div>
    }

    if(isError) {
      return <div>Error: {String(error)}</div>
    }

    const handleClick = (cardid: string) => {
      console.log(cardid)
      router.push(`./details/${cardid}`)
    }

    interface CardProps {
      title: string;
      description: string;
      subTitle: string;
      id: string;
    }

  return (
    <div>
      <div className="w-[55%] mx-auto py-10 space-y-6">
        <div className="flex justify-between">
          <div className="flex flex-col gap-y-3">
            <h1 className="font-[900] text-[2em]">Opportunities</h1>
            <p className="text-[#7C8493] text-[14px]">Showing 23 results</p>
          </div>
          <div className="">
            <p className="text-[15px]">Sort by: <span className="font-bold">Most Relavant</span><span></span></p>
          </div>
        </div>
        {
          data?.map((item: CardProps) => 
            <div key={item.id} onClick={() => handleClick(item.id)}>
              <Card title={item.title} description={item.description} subtitle={item.subTitle}/>
            </div>)
        }
      </div>
    </div>
  )
}

export default QueryFunction

