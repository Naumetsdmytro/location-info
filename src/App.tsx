import React from 'react'

import { AuthContext } from './features/auth/context/AuthContext'
import { useAuth } from './features/auth/hooks/useAuth'
import { useRoutes } from './proccess/routes'
import { ThemeState } from './shared/hooks/useTheme'

const App = () => {
	const { login, logout, token, user } = useAuth()
	const isAuthenticated = !!token
	const routes = useRoutes(isAuthenticated)

	return (
		<>
			<AuthContext.Provider
				value={{ isAuthenticated, login, logout, token, user: { email: '', fullName: '' } }}
			>
				<ThemeState>{routes}</ThemeState>
			</AuthContext.Provider>
		</>
	)
}

export default App
