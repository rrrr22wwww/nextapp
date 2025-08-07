"use client"

import { useContext } from "react"
import UseContext,{ UseContextProvider } from "./context/createContext"
// import {typeProvideUser,useProviderContext} from "./context/shared-types"

function UserInfo() {
  const context = useContext(UseContext)
  if (!context) {
    console.error("UseContext is not provided")
    return <div>Loading...</div>
  }

  const {user} = context
  return <div>{user.name}</div>
}


export default function Page() {
  return (
    <UseContextProvider>
      <div className="flex flex-col justify-start items-center h-screen">
        <UserInfo />
      </div>
    </UseContextProvider>
  )
}
