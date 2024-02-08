import React from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@mui/material'
import { TextField, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { notifySuccess } from '../../../shared'
import { notifyError } from '../../../shared'
import { Loader } from '../../../shared/Loader'
import { SignUpSchema } from '../Auth.schema'
import { useRequest } from '../hooks/useRequest'
import { getErrorMessage } from '../lib/getError'
import { Fields } from '../model/constants'
import { FORM_LABELS } from '../model/constants'
import { RegisterData } from '../model/models'
import { UseFormRegisterReturn } from 'react-hook-form'

type Response = {
	status: number
}

export const Register = () => {
	const navigate = useNavigate()

	type RegisterReturnType = UseFormRegisterReturn<string>

	const {
		formState: { errors },
		handleSubmit,
		register,
	} = useForm<RegisterData>({
		resolver: yupResolver(SignUpSchema),
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

	const onSubmit = async (data: RegisterData): Promise<void> => {
		try {
			const response: Response = await request(
				'/auth/register',
				'POST',
				{
					email: data.email,
					firstName: data.firstName,
					lastName: data.lastName,
					password: data.password,
				},
				{},
			)
			if (response.status === 200) {
				navigate('/auth/login')
				notifySuccess('Success sign up')
			}
		} catch (e: unknown) {
			if (e instanceof Error) {
				console.error(e.message)
			}
		}
	}

	return (
		<form
			className="flex flex-col justify-center items-center mt-5"
			onSubmit={handleSubmit(onSubmit)}
		>
			<Typography variant="h4">Sign Up</Typography>
			<span className="text-center font-extralight text-lg block mt-4">
				Already have an account?{' '}
				<Link className="text-blue-400" to="/auth/login">
					Log In
				</Link>
			</span>
			<div className="flex justify-center items-center mt-10">
				<div className="flex w-full">
					<div className="flex flex-col w-[300px]">
						<TextField
							error={!!errors.firstName}
							{...(register(Fields.firstName) as RegisterReturnType)}
							className="mb-4"
							fullWidth
							helperText={getErrorMessage(Fields.firstName, errors)}
							label={FORM_LABELS[Fields.firstName]}
							margin="normal"
							type="text"
							variant="outlined"
						/>
						<TextField
							error={!!errors.lastName}
							{...(register(Fields.lastName) as RegisterReturnType)}
							className="mb-4"
							fullWidth
							helperText={getErrorMessage(Fields.lastName, errors)}
							label={FORM_LABELS[Fields.lastName]}
							margin="normal"
							type="text"
							variant="outlined"
						/>
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
						<TextField
							error={!!errors.confirmPassword}
							{...register('confirmPassword')}
							className="mb-4"
							fullWidth
							helperText={getErrorMessage(Fields.confirmPassword, errors)}
							label={FORM_LABELS[Fields.confirmPassword]}
							margin="normal"
							type="password"
							variant="outlined"
						/>
						<Button color="primary" fullWidth type="submit" variant="contained">
							Sign Up
						</Button>
					</div>
				</div>
			</div>
			<ToastContainer />
		</form>
	)
}
