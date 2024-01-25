import {TextField, Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {LoginSchema} from "../Auth.schema";
import {Fields, initialValues} from "../model/constants";
import {FORM_LABELS} from "../model/constants";
import {getErrorMessage} from "../lib/utils";
import {LoginData} from "../model/models";
import {ToastContainer} from "react-toastify";
import {notifySuccess} from "../../../shared";

interface Props {
  onSubmit: (data: LoginData) => void
}

export const Login = (props: Props) => {
  const {handleSubmit, register, formState: {errors}} = useForm<LoginData>({
    resolver: yupResolver(LoginSchema)
  })

  const onSubmit = (data: LoginData): void => {
    props.onSubmit(data)
    notifySuccess('Success login')
  }

  const onGoogleLogin = (): void => {
    console.log('google login')
  }

  const onFacebookLogin = (): void => {
    console.log('facebook login')
  }

  return (
     <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center mt-5">
       <Typography variant="h4">
         Log In
       </Typography>
       <span className="text-center font-extralight text-lg block mt-4">
        Don't have an account?{' '}
         <Link to="/auth/signup" className="text-blue-400">
          Sign Up
        </Link>
      </span>
       <div className="flex justify-center items-center mt-10">
         <div className="flex w-full">
           <div className="flex flex-col w-[300px]">
             <TextField
                error={!!errors.email}
                {...register('email')}
                defaultValue={initialValues.email}
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
                defaultValue={initialValues.password}
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
             <div className="border-black border h-full" style={{opacity: .1}}/>
             <div className="mx-2 font-light text-gray-600">or</div>
             <div className="border-black border h-full" style={{opacity: .1}}/>
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
       <ToastContainer/>
     </form>
  )
}