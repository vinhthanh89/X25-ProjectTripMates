
import joi from 'joi'


const emailValidate = joi.string().email().required().messages({
    "string.email": "Email isn't invalid",
    "any.required": "Email is required",
})

const passwordValidate = joi.string().alphanum().min(8).required().messages({
    'string.alphanum' : 'Password can only be letters or numbers',
    "any.required": "Password is required",
    'string.min' : 'Minimum password 8 characters'
})

const fullNameValidate = joi.string().required().messages({
    "any.required": "Full name is required",
})

 const birthdayValidate = joi.date().messages({
    'date.base' : "Birthday must be a date"
 })

 const ageValiadte = joi.number().min(1).messages({
    'number.base' : "Age must be a number"
 })

 const description = joi.string().messages({
    'string.base' : "Description muse be string"
 })

export const signupValidate = joi.object({
    email : emailValidate,
    password : passwordValidate,
    fullName : fullNameValidate
})

export const changePasswordValidate = joi.object({
    password : passwordValidate
})