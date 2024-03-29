import React from 'react'

import { Route, Routes } from 'react-router-dom'
import { Login } from '../features/auth'
import { Register } from '../features/auth'
import { Home } from '../pages'
import { Category } from '../pages'
import { NavLayout } from '../pages'
import { Error404 } from '../shared'
import { AccessDenied } from '../shared'
import { Profile } from '../entities/profile'

export const useRoutes = (isLoggedIn: boolean) => {
	if (isLoggedIn) {
		return (
			<NavLayout>
				<Routes>
					<Route element={<Home />} path="/" />
					<Route element={<Profile />} path="/profile" />
					<Route element={<Category />} path="/search/:categoryName" />
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
			<Route element={<AccessDenied />} path="/search/:categoryName" />
			<Route element={<Login />} path="/auth/login" />
			<Route element={<Register />} path="/auth/register" />
			<Route element={<Error404 />} path="*" />
		</Routes>
	)
}
