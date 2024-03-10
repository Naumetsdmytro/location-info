import React, { useEffect } from 'react'

import { useRoutes } from './proccess/routes'
import { ThemeState, useTheme } from './shared/hooks/useTheme'
import { useSelector } from 'react-redux'
import { selectIsLogedIn, selectIsRefreshing } from './redux'
import { useDispatch } from 'react-redux'
import { refreshUser } from './redux'
import { Loader } from './shared'
import { ToastContainer } from 'react-toastify'

const App = () => {
	const isLoggedIn = useSelector(selectIsLogedIn)
	const routes = useRoutes(isLoggedIn)
	const isRefreshing = useSelector(selectIsRefreshing)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(refreshUser() as any)
	}, [dispatch])

	return isRefreshing ? (
		<Loader />
	) : (
		<ThemeState>
			{routes}
			<ToastContainer />
		</ThemeState>
	)
}

export default App
