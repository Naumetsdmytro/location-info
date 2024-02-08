import { createSlice, PayloadAction, SerializedError, isAnyOf } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { login, logout, refreshUser, register } from './operations'

export type User = {
	firstName?: string | null
	lastName?: string | null
	email: string | null
}

export type AuthState = {
	user: User
	isLoggedIn: boolean
	isRefreshing: boolean
	token: string | null
	error: string | null
}

export type RegisterActionPayload = {
	user: User
}

export type LogInActionPayload = {
	user: User
	token: string
}

const initialState: AuthState = {
	user: { firstName: null, lastName: null, email: null },
	isLoggedIn: false,
	isRefreshing: false,
	token: null,
	error: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(register.fulfilled, (state, action: PayloadAction<RegisterActionPayload>) => {
				state.user = action.payload.user
				state.error = null
			})
			.addCase(login.fulfilled, (state, action: PayloadAction<LogInActionPayload>) => {
				state.user = action.payload.user
				state.token = action.payload.token
				state.isLoggedIn = true
				state.error = null
			})
			.addCase(logout.fulfilled, state => {
				state.user = { firstName: null, lastName: null, email: null }
				state.token = null
				state.isLoggedIn = false
				state.error = null
			})
			.addCase(refreshUser.pending, state => {
				state.isRefreshing = true
			})
			.addCase(refreshUser.fulfilled, (state, action: PayloadAction<User>) => {
				state.user = action.payload
				state.isLoggedIn = true
				state.isRefreshing = false
				state.error = null
			})
			.addMatcher(
				isAnyOf(register.rejected, login.rejected, refreshUser.rejected),
				(state, action) => {
					const errorAction = action as PayloadAction<SerializedError>
					state.error = errorAction.payload.message || 'An unknown error occurred'
					state.isLoggedIn = false
					state.isRefreshing = false
				},
			)
	},
})

const persistConfig = {
	key: 'token',
	storage,
	whitelist: ['token'],
}

export const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer)
