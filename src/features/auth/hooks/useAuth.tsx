import { useCallback, useEffect, useState } from 'react'

import { getItemFromStorage, removeItemFromStorage, setItemToStorage } from '../../../shared'

interface IUser {
	email: string
	fullName: string
}

interface IUserData {
	token: string
	user: IUser
}

export const useAuth = () => {
	const [token, setToken] = useState<null | string>(null)
	const [user, setUser] = useState<IUser>({ email: '', fullName: '' })

	const login = useCallback((jwtToken: string, userData: IUser) => {
		setToken(jwtToken)
		setUser(userData)

		setItemToStorage('userData', { token: jwtToken, user: userData })
	}, [])

	const logout = () => {
		setToken(null)
		setUser({ email: '', fullName: '' })

		removeItemFromStorage('userData')
	}

	useEffect(() => {
		const userData = getItemFromStorage('userData') as IUserData | null

		if (userData) {
			const { token: storedToken, user: storedUser } = userData

			if (storedToken && storedUser) {
				try {
					login(storedToken, storedUser)
				} catch (error) {
					console.error('Error parsing user data', error)
				}
			}
		}
	}, [login])

	return { login, logout, token, user }
}
