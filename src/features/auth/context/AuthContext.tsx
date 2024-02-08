import { createContext, useContext } from 'react'

interface IAuthContext {
	isAuthenticated: boolean
	login: (jwtToken: string, user: { email: string; fullName: string }) => void
	logout: () => void
	token: null | string
	user: { email: string; fullName: string }
}

const noop = (): void => {}

export const AuthContext = createContext<IAuthContext>({
	isAuthenticated: false,
	login: noop,
	logout: noop,
	token: null,
	user: { email: '', fullName: '' },
})

export const useAuthContext = () => {
	return useContext(AuthContext)
}
