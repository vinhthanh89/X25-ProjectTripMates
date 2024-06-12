import joi from 'joi'


const titleValidate = joi.string().max(80).required().messages({
    'any.required' : "Title is required",
    'string.max ' : "Title maximun 80 characters",
    "string.base" : "Title must be string type"
})

const descriptionValidate = joi.string().max(400).messages({
    'string.max' : "Description maximun 400 characters",
    'string.base' : "Description must be string type"
})