import { Fields } from '../model/constants'

export const getErrorMessage = (fields: Fields, errors: any) => {
	switch (fields) {
		case Fields.email:
			return errors.email?.message
		case Fields.password:
			return errors.password?.message
		case Fields.firstName:
			return errors.firstName?.message
		case Fields.lastName:
			return errors.lastName?.message

		default:
			return ''
	}
}
