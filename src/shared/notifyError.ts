import { toast } from 'react-toastify'

export const notifyError = (error: Error): void => {
	toast.error(error.message, {
		autoClose: 3000,
		closeOnClick: true,
		draggable: true,
		hideProgressBar: false,
		position: 'top-right',
	})
}
