import {Fields} from "../model/constants";

export const getErrorMessage = (fields: Fields, errors: any) => {
  switch (fields) {
    case Fields.email:
      return errors.email?.message
    case Fields.password:
      return errors.password?.message
    case Fields.confirmPassword:
      return errors.confirmPassword?.message
    case Fields.name:
      return errors.name?.message

    default:
      return ''
  }
}
