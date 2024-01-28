import {toast} from "react-toastify";

export const notifyError = (error: Error): void => {
  toast.error(error.message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true
  })
}