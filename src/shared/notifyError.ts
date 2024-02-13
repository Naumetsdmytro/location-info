import { toast } from 'react-toastify'

export const notifyError = (error: string): void => {
	toast.error(error, {
		autoClose: 3000,
		closeOnClick: true,
		draggable: true,
		hideProgressBar: false,
		position: 'top-right',
	})
}
