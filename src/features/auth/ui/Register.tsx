import {Button} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {SignUpSchema} from "../Auth.schema";
import {Fields} from "../model/constants";
import {TextField, Typography} from "@mui/material";
import {FORM_LABELS} from "../model/constants";
import {getErrorMessage} from "../lib/getError";
import {RegisterData} from "../model/models";
import {notifySuccess} from "../../../shared";
import {ToastContainer} from "react-toastify";
import {notifyError} from "../../../shared";
import {useEffect} from "react";
import {useRequest} from "../hooks/useRequest";
import { Loader } from "../../../shared/Loader";

export const Register = () => {
  const navigate = useNavigate()

  const {handleSubmit, register, formState: {errors}} = useForm<RegisterData>({
    resolver: yupResolver(SignUpSchema)
  })

  const {loading, request, error} = useRequest()

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
      const response = await request('/auth/register', 'POST', {email: data.email, password: data.password, firstName: data.firstName, lastName: data.lastName}, {})
      if (response.status === 200) {
        navigate('/auth/login')
        notifySuccess('Success sign up')
      }
    } catch (e: any) {
      notifyError(e)
      console.log(e)
    }
  }

  return (
     <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center mt-5">
       <Typography variant="h4">
         Sign Up
       </Typography>
       <span className="text-center font-extralight text-lg block mt-4">
            Already have an account?{' '}
         <Link to="/auth/login" className="text-blue-400">
            Log In
         </Link>
        </span>
       <div className="flex justify-center items-center mt-10">
         <div className="flex w-full">
           <div className="flex flex-col w-[300px]">
             <TextField
                error={!!errors.firstName}
                {...register(Fields.firstName)}
                type="text"
                label={FORM_LABELS[Fields.firstName]}
                fullWidth
                margin="normal"
                variant="outlined"
                className="mb-4"
                helperText={getErrorMessage(Fields.firstName, errors)}
             />
             <TextField
                error={!!errors.lastName}
                {...register(Fields.lastName)}
                type="text"
                label={FORM_LABELS[Fields.lastName]}
                fullWidth
                margin="normal"
                variant="outlined"
                className="mb-4"
                helperText={getErrorMessage(Fields.lastName, errors)}
             />
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
             <TextField
                error={!!errors.confirmPassword}
                {...register('confirmPassword')}
                type="password"
                label={FORM_LABELS[Fields.confirmPassword]}
                fullWidth
                margin="normal"
                variant="outlined"
                className="mb-4"
                helperText={getErrorMessage(Fields.confirmPassword, errors)}
             />
             <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
             >
               Sign Up
             </Button>
           </div>
         </div>
       </div>
       <ToastContainer/>
     </form>
  )
}