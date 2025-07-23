

import Image from "next/image";
import { UserContextProvider, UserContext } from './context/context';
import { useContext } from "react"; 
import HomePageContent from "./ProvContent";
export default function Page() {
  return (
    <UserContextProvider>
      <div className="flex flex-col justify-start items-center h-screen">      
      <h2 className="flex text-3xl">Test device size</h2>
      <HomePageContent/>
      <Image
        src="/Image/img2.jpg"
        alt="Test Image"
        className="flex"
        width={200}
        height={300}
      />
    </div>
    </UserContextProvider>
  );
}