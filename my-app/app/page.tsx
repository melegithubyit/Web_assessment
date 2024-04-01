'use client';

import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SearchField from "./components/SearchField";

import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import { useRouter } from "next/navigation"; // Changed from 'next/navigation'
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const [searching, setSearching] = useState(false);


  const handleSearch = async (hospitalName) => {

    const fetchSingleHospital = async (hospitalName) => {
      const response = await fetch(
        `https://hakimhub-api-dev-wtupbmwpnq-uc.a.run.app/api/v1/search?keyword=${hospitalName}&institutions=true&articles=false&doctors=false`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.json();
    };

    const { isLoading, isError, error, isFetching, data } = useQuery({
      queryKey: ["cards"],
      queryFn: fetchSingleHospital,
    });
  
  }


  const fetchHospitals = async () => {
    const response = await fetch(
      "https://hakimhub-api-dev-wtupbmwpnq-uc.a.run.app/api/v1/search?institutions=true&articles=false&doctors=false",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.json();
  };

  const router = useRouter();
  const { isLoading, isError, error, isFetching, data } = useQuery({
    queryKey: ["cards"],
    queryFn: fetchHospitals,
  });

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {String(error)}</div>;
  }

  return (
    <main className="">
      <div className="">
        <Navbar />
        <div className="">
          <div className="flex justify-center items-center py-6">
            <SearchBar />
          </div>
          <div className="flex flex-col items-center space-y-14">
            {
              data?.data.map((card) => {
                return <Card
                key={card.id}
                address={card.address}
                photo={card.photo}
                institutionName={card.institutionName}
                phoneNumbers={card.phoneNumbers}
                status={card.status}
              />
              })
            }
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
