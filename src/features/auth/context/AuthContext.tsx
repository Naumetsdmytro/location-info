import {createContext, useContext} from "react";

interface IAuthContext {
  token: string | null
  user: {email: string, fullName: string}
  login: (jwtToken: string, user: {email: string, fullName: string}) => void
  logout: () => void
  isAuthenticated: boolean
}

const noop = (): void => {}

export const AuthContext = createContext<IAuthContext>({
  token: null,
  user: {email: '', fullName: ''},
  login: noop,
  logout: noop,
  isAuthenticated: false
})

export const useAuthContext = () => {
  return useContext(AuthContext)
}
