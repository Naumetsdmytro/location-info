import React from 'react'

import { Route, Routes } from 'react-router-dom'
import { Login } from '../features/auth'
import { Register } from '../features/auth'
import { Home, Main } from '../pages'
import { Category } from '../pages'
import { NavLayout } from '../pages/layout/NavLayout'
import { Error404 } from '../shared'

export const useRoutes = (isLoggedIn: boolean) => {
	if (isLoggedIn) {
		return (
			<NavLayout>
				<Routes>
					<Route element={<Main />} path="/main" />
					<Route element={<Category />} path="/main/:categoryName" />
					<Route element={<Error404 />} path="*" />
				</Routes>
			</NavLayout>
		)
	}

	return (
		<Routes>
			<Route
				element={
					<NavLayout>
						<Home />
					</NavLayout>
				}
				path="/"
			/>
			<Route element={<Login />} path="/auth/login" />
			<Route element={<Register />} path="/auth/register" />
			<Route element={<Error404 />} path="*" />
		</Routes>
	)
}
