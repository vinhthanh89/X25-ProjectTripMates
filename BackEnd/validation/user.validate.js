
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

export const signupValidate = joi.object({
    email : emailValidate,
    password : passwordValidate,
    fullName : fullNameValidate
})