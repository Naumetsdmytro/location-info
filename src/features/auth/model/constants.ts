export enum Fields {
  name = 'name',
  email = 'email',
  password = 'password',
  confirmPassword = 'confirmPassword'
}

export const FORM_LABELS = {
  [Fields.name]: 'Name',
  [Fields.email]: 'Email',
  [Fields.password]: 'Password',
  [Fields.confirmPassword]: 'Confirm Password'
}

export const initialValues = {
  [Fields.name]: '',
  [Fields.email]: '',
  [Fields.password]: '',
  [Fields.confirmPassword]: ''
}

export const REGEX_PATTERNS = {
  [Fields.email]: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
  [Fields.password]: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
}

export const errorMessages = {
  required: 'This field is required',
  email: 'Invalid email address',
  pattern: 'Invalid format',
  match: 'Passwords must match',
  min: ({min}: { min: number }) => `Must be at least ${min} characters`,
  max: ({max}: { max: number }) => `Must be at most ${max} characters`,
}