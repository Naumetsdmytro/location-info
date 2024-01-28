import { TextField, Button, Typography, Box, Stack, Grid } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginSchema } from '../Auth.schema'
import { Fields } from '../model/constants'
import { FORM_LABELS } from '../model/constants'
import { getErrorMessage } from '../lib/getError'
import { LoginData } from '../model/models'
import { ToastContainer } from 'react-toastify'
import { notifySuccess } from '../../../shared'
import { useRequest } from '../hooks/useRequest'
import { useEffect } from 'react'
import { notifyError } from '../../../shared'
import { useAuthContext } from '../context/AuthContext'
import { Loader } from '../../../shared/Loader'

export const Login = () => {
  const navigate = useNavigate()
  const auth = useAuthContext()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(LoginSchema),
  })

  const { loading, request, error } = useRequest()

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
        {}
      )
      auth.login(response.token, response.user)
      navigate('/main')
    } catch (e: any) {
      notifyError(e)
      console.log(e)
    }
  }

  const onGoogleLogin = (): void => {

  }

  const onFacebookLogin = (): void => {
    console.log('facebook login')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 5,
      }}
    >
      <Typography variant="h4">
        Log In
      </Typography>
      <Typography variant="body1" fontWeight="100" sx={{ mt: 3 }}>
        Don't have an account?{' '}
        <Link to="/auth/register" className="text-blue-400">
          Sign Up
        </Link>
      </Typography>

      <div className="flex justify-center items-center mt-10">
        <div className="flex w-full">
          <div className="flex flex-col w-[300px]">
            <TextField
              error={!!errors.email}
              {...register('email')}
              type="email"
              label={FORM_LABELS[Fields.email]}
              fullWidth
              margin="normal"
              variant="outlined"
              className="mb-4"
              helperText={getErrorMessage(Fields.email, errors)}
            />
            <TextField
              error={!!errors.password}
              {...register('password')}
              type="password"
              label={FORM_LABELS[Fields.password]}
              fullWidth
              margin="normal"
              variant="outlined"
              className="mb-4"
              helperText={getErrorMessage(Fields.password, errors)}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Log In
            </Button>
          </div>

          <div className="flex flex-col items-center mx-4">
            <div
              className="border-black border h-full"
              style={{ opacity: 0.1 }}
            />
            <div className="mx-2 font-light text-gray-600">or</div>
            <div
              className="border-black border h-full"
              style={{ opacity: 0.1 }}
            />
          </div>

          <div className="flex flex-col items-center justify-around w-[300px]">
            <Button
              variant="outlined" 
              color="primary"
              fullWidth
              className="mb-4 h-14"
              onClick={onGoogleLogin}
            >
              Log In with Google
            </Button>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              className="mb-4 h-14"
              onClick={onFacebookLogin}
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
