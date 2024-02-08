export enum Fields {
	email = 'email',
	firstName = 'firstName',
	lastName = 'lastName',
	password = 'password',
}

export const FORM_LABELS = {
	[Fields.email]: 'Email',
	[Fields.firstName]: 'First Name',
	[Fields.lastName]: 'Last Name',
	[Fields.password]: 'Password',
}

export const initialValues = {
	[Fields.email]: '',
	[Fields.firstName]: '',
	[Fields.lastName]: '',
	[Fields.password]: '',
}

export const REGEX_PATTERNS = {
	[Fields.email]: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
	[Fields.password]: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
}

export const errorMessages = {
	email: 'Invalid email address',
	match: 'Passwords must match',
	max: ({ max }: { max: number }) => `Must be at most ${max} characters`,
	min: ({ min }: { min: number }) => `Must be at least ${min} characters`,
	pattern: 'Invalid format',
	required: 'This field is required',
}
