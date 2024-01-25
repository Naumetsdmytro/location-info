import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {SignUpSchema} from "../Auth.schema";
import {Fields} from "../model/constants";
import {TextField, Typography} from "@mui/material";
import {FORM_LABELS} from "../model/constants";
import {getErrorMessage} from "../lib/utils";
import {SignUpData} from "../model/models";
import {notifySuccess} from "../../../shared";
import {ToastContainer} from "react-toastify";

interface Props {
  onSubmit: (data: SignUpData) => void
}

export const SignUp = (props: Props) => {
  const {handleSubmit, register, formState: {errors}} = useForm<SignUpData>({
    resolver: yupResolver(SignUpSchema)
  })

  const onSubmit = (data: SignUpData): void => {
    props.onSubmit(data)
    notifySuccess('Success sign up')
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
                error={!!errors.name}
                {...register('name')}
                type="text"
                label={FORM_LABELS[Fields.name]}
                fullWidth
                margin="normal"
                variant="outlined"
                className="mb-4"
                helperText={getErrorMessage(Fields.name, errors)}
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