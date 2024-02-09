import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { RootState } from '../store'
import { User, LogInActionPayload, RegisterActionPayload } from './authSlice'

type UserCredentials = User & {
	password: string
}

const setAuthorizationHeader = (token: string) => {
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

const clearAuthorizationHeader = () => {
	axios.defaults.headers.common['Authorization'] = ''
}

export const register = createAsyncThunk<
	RegisterActionPayload,
	UserCredentials,
	{
		rejectValue: string
	}
>('auth/register', async (credentials, { rejectWithValue }) => {
	try {
		const { data } = await axios.post('http://localhost:5001/auth/register', credentials)
		return data
	} catch (error) {
		if (error instanceof Error) {
			return rejectWithValue(error.message)
		} else {
			return rejectWithValue('An unknown error occurred.')
		}
	}
})

export const login = createAsyncThunk<
	LogInActionPayload,
	UserCredentials,
	{
		rejectValue: string
	}
>('auth/login', async (credentials, { rejectWithValue }) => {
	try {
		const { data } = await axios.post('http://localhost:5001/auth/login', credentials)
		setAuthorizationHeader(data.token)
		return data
	} catch (error) {
		if (error instanceof Error) {
			return rejectWithValue(error.message)
		} else {
			return rejectWithValue('An unknown error occurred.')
		}
	}
})

export const logout = createAsyncThunk<
	void,
	void,
	{
		rejectValue: string
	}
>('auth/logout', async (_, { rejectWithValue }) => {
	try {
		await axios.post('http://localhost:5001/auth/logout')
		clearAuthorizationHeader()
	} catch (error) {
		if (error instanceof Error) {
			return rejectWithValue(error.message)
		} else {
			return rejectWithValue('An unknown error occurred.')
		}
	}
})

export const refreshUser = createAsyncThunk<
	User,
	void,
	{
		state: RootState
		rejectValue: string
	}
>('auth/refresh', async (_, { rejectWithValue, getState }) => {
	const state = getState()
	const persistedToken = state.auth.token

	if (!persistedToken) {
		return rejectWithValue('Unable to fetch user!')
	}
	try {
		setAuthorizationHeader(persistedToken)
		const { data } = await axios.get('http://localhost:5001/auth/current')
		return data
	} catch (error) {
		if (error instanceof Error) {
			return rejectWithValue(error.message)
		} else {
			return rejectWithValue('An unknown error occurred.')
		}
	}
})
