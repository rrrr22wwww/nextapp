import { Dispatch, SetStateAction } from "react"

export interface typeProvideUser {
  name: string
  status: "log" | "unlog"
}
export interface useProviderContext {
  user:typeProvideUser,
  setUser?: Dispatch<SetStateAction<typeProvideUser>>
}
