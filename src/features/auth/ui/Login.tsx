import React from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { notifyError } from '../../../shared'
import { Loader } from '../../../shared/Loader'
import { LoginSchema } from '../Auth.schema'
import { useAuthContext } from '../context/AuthContext'
import { useRequest } from '../hooks/useRequest'
import { getErrorMessage } from '../lib/getError'
import { Fields } from '../model/constants'
import { FORM_LABELS } from '../model/constants'
import { LoginData } from '../model/models'

export const Login = () => {
	const navigate = useNavigate()
	const auth = useAuthContext()

	const {
		formState: { errors },
		handleSubmit,
		register,
	} = useForm<LoginData>({
		resolver: yupResolver(LoginSchema),
	})

	const { error, loading, request } = useRequest()

	useEffect(() => {
		if (error) {
			notifyError(error)
		}
	}, [error])

	if (loading) {
		return <Loader />
	}

	const onSubmit = async (data: LoginData): Promise<void> => {
		try {
			const response = await request(
				'/auth/login',
				'POST',
				{ email: data.email, password: data.password },
				{},
			)
			auth.login(response.token, response.user)
			navigate('/main')
		} catch (e: any) {
			notifyError(e.message)
			console.log(e)
		}
	}

	const onGoogleLogin = (): void => {}

	const onFacebookLogin = (): void => {
		console.log('facebook login')
	}

	return (
		<Box
			component="form"
			onSubmit={handleSubmit(onSubmit)}
			sx={{
				alignItems: 'center',
				display: 'flex',
				flexDirection: 'column',
				mt: 5,
			}}
		>
			<Typography variant="h4">Log In</Typography>
			<Typography fontWeight="100" sx={{ mt: 3 }} variant="body1">
				Don't have an account?{' '}
				<Link className="text-blue-400" to="/auth/register">
					Sign Up
				</Link>
			</Typography>

			<div className="flex justify-center items-center mt-10">
				<div className="flex w-full">
					<div className="flex flex-col w-[300px]">
						<TextField
							error={!!errors.email}
							{...register('email')}
							className="mb-4"
							fullWidth
							helperText={getErrorMessage(Fields.email, errors)}
							label={FORM_LABELS[Fields.email]}
							margin="normal"
							type="email"
							variant="outlined"
						/>
						<TextField
							error={!!errors.password}
							{...register('password')}
							className="mb-4"
							fullWidth
							helperText={getErrorMessage(Fields.password, errors)}
							label={FORM_LABELS[Fields.password]}
							margin="normal"
							type="password"
							variant="outlined"
						/>
						<Button color="primary" fullWidth type="submit" variant="contained">
							Log In
						</Button>
					</div>

					<div className="flex flex-col items-center mx-4">
						<div className="border-black border h-full" style={{ opacity: 0.1 }} />
						<div className="mx-2 font-light text-gray-600">or</div>
						<div className="border-black border h-full" style={{ opacity: 0.1 }} />
					</div>

					<div className="flex flex-col items-center justify-around w-[300px]">
						<Button
							className="mb-4 h-14"
							color="primary"
							fullWidth
							onClick={onGoogleLogin}
							variant="outlined"
						>
							Log In with Google
						</Button>
						<Button
							className="mb-4 h-14"
							color="primary"
							fullWidth
							onClick={onFacebookLogin}
							variant="outlined"
						>
							Log In with Facebook
						</Button>
					</div>
				</div>
			</div>
			<ToastContainer />
		</Box>
	)
}
