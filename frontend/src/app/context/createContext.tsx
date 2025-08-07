"use client"

import { createContext, JSX, PropsWithChildren, useState } from "react"
import {typeProvideUser,useProviderContext} from "./shared-types"


const UseContext = createContext<useProviderContext | null>(null);

export default  UseContext

export function UseContextProvider({children}:PropsWithChildren):JSX.Element {
  const [user,setUser]= useState<typeProvideUser>({name:"Guest",status:"unlog"})
  const value = { user, setUser };
  return <UseContext.Provider value={value}>
    {children}
        </UseContext.Provider>
}
