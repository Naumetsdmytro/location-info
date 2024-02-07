import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const notifySuccess = (message: string): void => {
	toast.success(message, {
		autoClose: 3000,
		closeOnClick: true,
		draggable: true,
		hideProgressBar: false,
		position: 'top-right',
	})
}
