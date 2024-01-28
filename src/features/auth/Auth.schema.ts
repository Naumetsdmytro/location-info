import * as yup from "yup";
import {errorMessages, Fields, REGEX_PATTERNS} from "./model/constants";

export const LoginSchema = yup.object().shape({
  [Fields.email]: yup.string()
     .required(errorMessages.required)
     .email(errorMessages.email)
     .max(255, errorMessages.max)
     .min(8, errorMessages.min)
     .matches(REGEX_PATTERNS[Fields.email], errorMessages.pattern)
     .trim(),
  [Fields.password]: yup.string()
     .required(errorMessages.required)
     .matches(REGEX_PATTERNS[Fields.password], errorMessages.pattern)
     .min(8, errorMessages.min)
     .max(255, errorMessages.max)
     .trim(),
})

export const SignUpSchema = yup.object().shape({
  [Fields.firstName]: yup.string()
     .required(errorMessages.required)
     .max(255, errorMessages.max)
     .min(2, errorMessages.min)
     .trim(),
  [Fields.lastName]: yup.string()
     .required(errorMessages.required)
     .max(255, errorMessages.max)
     .min(2, errorMessages.min)
     .trim(),
  [Fields.email]: yup.string()
     .required(errorMessages.required)
     .email(errorMessages.email)
     .max(255, errorMessages.max)
     .min(8, errorMessages.min)
     .matches(REGEX_PATTERNS[Fields.email], errorMessages.pattern)
     .trim(),
  [Fields.password]: yup.string()
     .required(errorMessages.required)
     .matches(REGEX_PATTERNS[Fields.password], errorMessages.pattern)
     .min(8, errorMessages.min)
     .max(255, errorMessages.max)
     .trim(),
  [Fields.confirmPassword]: yup.string()
     .required(errorMessages.required)
     .oneOf([yup.ref(Fields.password)], errorMessages.match)
     .trim(),
})

