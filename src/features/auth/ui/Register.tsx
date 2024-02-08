import React from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@mui/material'
import { TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { SignUpSchema } from '../Auth.schema'
import { getErrorMessage } from '../lib/getError'
import { Fields } from '../model/constants'
import { FORM_LABELS } from '../model/constants'
import { RegisterData } from '../model/models'
import { useDispatch } from 'react-redux'
import { register as registerAction } from '../../../redux'

export const Register = () => {
	const dispatch = useDispatch()

	const navigate = useNavigate()

	const {
		formState: { errors },
		handleSubmit,
		register,
	} = useForm<RegisterData>({
		resolver: yupResolver(SignUpSchema),
	})

	const onSubmit = async (data: RegisterData): Promise<void> => {
		try {
			dispatch(registerAction({
				email: data.email,
				firstName: data.firstName,
				lastName: data.lastName,
				password: data.password,
			}) as any)
		} catch (e: unknown) {
			if (e instanceof Error) {
				console.error(e.message)
			}
		}
		navigate('/auth/login')
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
							{...register(Fields.firstName)}
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
							{...register(Fields.lastName)}
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
