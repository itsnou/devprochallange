import { isEmpty, isEmptyArray, isNullOrUndefined } from './helpers'

export const requiredValidator = (value) => {
  if (isNullOrUndefined(value) || isEmptyArray(value) || value === false)
    return 'Este campo es requerido'

  return !!String(value).trim().length || 'Este campo es requerido'
}

// 👉 Email Validator
export const emailValidator = (value) => {
  if (isEmpty(value))
    return true
  //eslint-disable-next-line
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (Array.isArray(value))
    return value.every(val => re.test(String(val))) || 'Ingrese un email válido'

  return re.test(String(value)) || 'Ingrese un email válido'
}

// 👉 Password Validator
export const passwordValidator = (password) => {
  const regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/

  const validPassword = regExp.test(password)

  return validPassword || `Una mayúscula, una minúscula, un carácter especial y un dígito con un mínimo de 8 caracteres.`
}

// 👉 Confirm Password Validator
export const confirmedValidator = (value, target) => value === target || 'Las contraseñas no son identicas'
