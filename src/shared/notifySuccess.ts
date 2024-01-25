import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export const notifySuccess = (message: string) => {
  toast.success(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true
  })
}