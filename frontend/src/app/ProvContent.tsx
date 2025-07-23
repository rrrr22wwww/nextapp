"use client"

import Image from "next/image";
import { UserContextProvider, UserContext } from './context/context';
import { useContext } from "react"; 

export default function HomePageContent() {

  const context = useContext(UserContext);


  if (!context) {
    return <div>Loading user data...</div>;
  }
  const { user } = context;
  return (
    <div> {user.name}</div>
  )
 }


