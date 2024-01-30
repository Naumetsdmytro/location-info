export interface LoginData {
  email: string
  password: string
}

export interface RegisterData {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

export interface PlaceData {
  title: string,
  id: string,
  address: {
    label: string
  }
}
